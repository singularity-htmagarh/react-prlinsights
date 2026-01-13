#!/usr/bin/env python3
"""
ETF Data Scraper for ETFDB.com

This script downloads ETF data from etfdb.com based on various segmentations,
categories, and attributes. It supports multiple filtering options and exports
data in CSV and JSON formats.

Usage:
    python etf_scraper.py --category all --output etf_data.csv
    python etf_scraper.py --category asset-class --format json
    python etf_scraper.py --help
"""

import argparse
import csv
import json
import logging
import os
import sys
import time
from typing import List, Dict, Any, Optional
from urllib.parse import urljoin
import requests
from bs4 import BeautifulSoup

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


class ETFScraper:
    """Scraper for ETF data from ETFDB.com"""
    
    BASE_URL = "https://etfdb.com"
    
    # Main ETF categories and their URLs
    CATEGORIES = {
        "all": "/etfs/",
        "asset-class": "/etfs/#asset-class",
        "issuer": "/etfs/#issuer",
        "equity-style": "/etfs/#equity-style",
        "region": "/etfs/#region",
        "market-cap": "/etfs/#market-cap",
        "sector": "/etfs/#sector",
        "commodity": "/etfs/#commodity",
        "bond-type": "/etfs/#bond-type",
        "currency": "/etfs/#currency",
    }
    
    def __init__(self, delay: float = 1.0, max_retries: int = 3, max_pages: int = 10):
        """
        Initialize the ETF scraper.
        
        Args:
            delay: Delay between requests in seconds (default: 1.0)
            max_retries: Maximum number of retries for failed requests (default: 3)
            max_pages: Maximum number of pages to scrape per category (default: 10)
        """
        self.delay = delay
        self.max_retries = max_retries
        self.max_pages = max_pages
        self.session = requests.Session()
        self.session.headers.update({
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        })
        
    def get_page(self, url: str) -> Optional[BeautifulSoup]:
        """
        Fetch and parse a page with retry logic.
        
        Args:
            url: URL to fetch
            
        Returns:
            BeautifulSoup object or None if failed
        """
        for attempt in range(self.max_retries):
            try:
                logger.info(f"Fetching: {url} (attempt {attempt + 1}/{self.max_retries})")
                response = self.session.get(url, timeout=30)
                response.raise_for_status()
                time.sleep(self.delay)
                return BeautifulSoup(response.content, 'html.parser')
            except requests.RequestException as e:
                logger.warning(f"Request failed: {e}")
                if attempt < self.max_retries - 1:
                    time.sleep(self.delay * 2)
                else:
                    logger.error(f"Failed to fetch {url} after {self.max_retries} attempts")
                    return None
    
    def extract_etf_list_from_table(self, soup: BeautifulSoup) -> List[Dict[str, str]]:
        """
        Extract ETF data from a table on the page.
        
        Args:
            soup: BeautifulSoup object of the page
            
        Returns:
            List of ETF dictionaries
        """
        etfs = []
        
        # Look for common table structures on ETFDB
        tables = soup.find_all('table')
        
        for table in tables:
            # Find table headers
            headers = []
            header_row = table.find('thead')
            if header_row:
                headers = [th.get_text(strip=True) for th in header_row.find_all('th')]
            
            # If no headers in thead, try first tr
            if not headers:
                first_row = table.find('tr')
                if first_row:
                    headers = [th.get_text(strip=True) for th in first_row.find_all('th')]
            
            if not headers:
                continue
                
            # Extract rows
            tbody = table.find('tbody') or table
            rows = tbody.find_all('tr')
            
            for row in rows:
                cells = row.find_all(['td', 'th'])
                if len(cells) >= len(headers):
                    etf_data = {}
                    for i, cell in enumerate(cells[:len(headers)]):
                        header = headers[i] if i < len(headers) else f"Column_{i}"
                        
                        # Try to extract links (ticker symbols often have links)
                        link = cell.find('a')
                        if link and link.get('href'):
                            etf_data[f"{header}_url"] = urljoin(self.BASE_URL, link.get('href'))
                        
                        etf_data[header] = cell.get_text(strip=True)
                    
                    # Only add if it looks like valid ETF data
                    if etf_data and any(key.lower() in ['symbol', 'ticker', 'etf'] for key in etf_data.keys()):
                        etfs.append(etf_data)
        
        return etfs
    
    def scrape_category(self, category: str) -> List[Dict[str, Any]]:
        """
        Scrape ETFs from a specific category.
        
        Args:
            category: Category name (e.g., 'all', 'sector', 'asset-class')
            
        Returns:
            List of ETF dictionaries
        """
        if category not in self.CATEGORIES:
            logger.error(f"Unknown category: {category}")
            logger.info(f"Available categories: {', '.join(self.CATEGORIES.keys())}")
            return []
        
        url = urljoin(self.BASE_URL, self.CATEGORIES[category])
        logger.info(f"Scraping category: {category}")
        
        soup = self.get_page(url)
        if not soup:
            return []
        
        etfs = self.extract_etf_list_from_table(soup)
        
        # Try to find pagination and scrape additional pages
        etfs.extend(self.scrape_paginated_results(soup, url))
        
        logger.info(f"Found {len(etfs)} ETFs in category '{category}'")
        return etfs
    
    def scrape_paginated_results(self, initial_soup: BeautifulSoup, base_url: str) -> List[Dict[str, Any]]:
        """
        Scrape additional pages if pagination exists.
        
        Args:
            initial_soup: BeautifulSoup object of the first page
            base_url: Base URL for pagination
            
        Returns:
            List of ETF dictionaries from additional pages
        """
        all_etfs = []
        
        # This is a simplified pagination handler
        # Real implementation would need to handle ETFDB's specific pagination
        page_num = 2
        
        while page_num <= self.max_pages:
            # Try common pagination patterns
            next_url = f"{base_url}?page={page_num}"
            
            soup = self.get_page(next_url)
            if not soup:
                break
            
            etfs = self.extract_etf_list_from_table(soup)
            if not etfs:
                break
            
            all_etfs.extend(etfs)
            page_num += 1
        
        return all_etfs
    
    def scrape_all_categories(self) -> Dict[str, List[Dict[str, Any]]]:
        """
        Scrape ETFs from all available categories.
        
        Returns:
            Dictionary mapping category names to lists of ETFs
        """
        results = {}
        
        for category in self.CATEGORIES.keys():
            if category == "all":
                continue  # Skip 'all' when scraping individual categories
            
            etfs = self.scrape_category(category)
            if etfs:
                results[category] = etfs
        
        return results
    
    def export_to_csv(self, etfs: List[Dict[str, Any]], filename: str) -> None:
        """
        Export ETF data to CSV file.
        
        Args:
            etfs: List of ETF dictionaries
            filename: Output CSV filename
        """
        if not etfs:
            logger.warning("No data to export")
            return
        
        # Get all unique keys from all ETFs
        fieldnames = set()
        for etf in etfs:
            fieldnames.update(etf.keys())
        fieldnames = sorted(list(fieldnames))
        
        with open(filename, 'w', newline='', encoding='utf-8') as csvfile:
            writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
            writer.writeheader()
            writer.writerows(etfs)
        
        logger.info(f"Exported {len(etfs)} ETFs to {filename}")
    
    def export_to_json(self, data: Any, filename: str) -> None:
        """
        Export data to JSON file.
        
        Args:
            data: Data to export (can be list or dict)
            filename: Output JSON filename
        """
        with open(filename, 'w', encoding='utf-8') as jsonfile:
            json.dump(data, jsonfile, indent=2, ensure_ascii=False)
        
        logger.info(f"Exported data to {filename}")


def main():
    """Main entry point for the script."""
    parser = argparse.ArgumentParser(
        description='Download ETF data from etfdb.com',
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  # Download all ETFs to CSV
  python etf_scraper.py --category all --output etfs.csv
  
  # Download sector ETFs to JSON
  python etf_scraper.py --category sector --format json --output sector_etfs.json
  
  # Download all categories with separate files
  python etf_scraper.py --all-categories --output-dir ./etf_data
  
Available categories:
  all, asset-class, issuer, equity-style, region, market-cap, 
  sector, commodity, bond-type, currency
        """
    )
    
    parser.add_argument(
        '--category',
        type=str,
        default='all',
        help='ETF category to scrape (default: all)'
    )
    
    parser.add_argument(
        '--all-categories',
        action='store_true',
        help='Scrape all categories separately'
    )
    
    parser.add_argument(
        '--format',
        type=str,
        choices=['csv', 'json'],
        default='csv',
        help='Output format (default: csv)'
    )
    
    parser.add_argument(
        '--output',
        type=str,
        default='etf_data',
        help='Output filename (without extension for --all-categories)'
    )
    
    parser.add_argument(
        '--output-dir',
        type=str,
        default='.',
        help='Output directory for --all-categories mode'
    )
    
    parser.add_argument(
        '--delay',
        type=float,
        default=1.0,
        help='Delay between requests in seconds (default: 1.0)'
    )
    
    parser.add_argument(
        '--max-pages',
        type=int,
        default=10,
        help='Maximum number of pages to scrape per category (default: 10)'
    )
    
    parser.add_argument(
        '--verbose',
        action='store_true',
        help='Enable verbose logging'
    )
    
    args = parser.parse_args()
    
    if args.verbose:
        logger.setLevel(logging.DEBUG)
    
    # Create output directory if needed
    if args.all_categories:
        os.makedirs(args.output_dir, exist_ok=True)
    
    # Initialize scraper
    scraper = ETFScraper(delay=args.delay, max_pages=args.max_pages)
    
    try:
        if args.all_categories:
            # Scrape all categories
            logger.info("Scraping all categories...")
            all_data = scraper.scrape_all_categories()
            
            for category, etfs in all_data.items():
                if args.format == 'csv':
                    filename = os.path.join(args.output_dir, f"{category}_etfs.csv")
                    scraper.export_to_csv(etfs, filename)
                else:
                    filename = os.path.join(args.output_dir, f"{category}_etfs.json")
                    scraper.export_to_json(etfs, filename)
            
            # Also export combined data
            combined_filename = os.path.join(args.output_dir, f"all_categories.{args.format}")
            if args.format == 'json':
                scraper.export_to_json(all_data, combined_filename)
            else:
                # Flatten all ETFs for CSV
                all_etfs = []
                for category, etfs in all_data.items():
                    for etf in etfs:
                        etf['category'] = category
                        all_etfs.append(etf)
                scraper.export_to_csv(all_etfs, combined_filename)
        else:
            # Scrape single category
            etfs = scraper.scrape_category(args.category)
            
            # Add extension if not present
            output_file = args.output
            if not output_file.endswith(f'.{args.format}'):
                output_file = f"{output_file}.{args.format}"
            
            if args.format == 'csv':
                scraper.export_to_csv(etfs, output_file)
            else:
                scraper.export_to_json(etfs, output_file)
        
        logger.info("Scraping completed successfully!")
        
    except KeyboardInterrupt:
        logger.info("Scraping interrupted by user")
        sys.exit(1)
    except Exception as e:
        logger.error(f"An error occurred: {e}", exc_info=True)
        sys.exit(1)


if __name__ == "__main__":
    main()
