#!/usr/bin/env python3
"""
Example usage of the ETF scraper as a Python module.

This demonstrates how to use the ETFScraper class programmatically
in your own Python scripts.
"""

import sys
import os

# Add the current directory to the path
sys.path.insert(0, os.path.dirname(__file__))

from etf_scraper import ETFScraper


def example_1_basic_scraping():
    """Example 1: Basic scraping of a single category"""
    print("=" * 60)
    print("Example 1: Basic Scraping")
    print("=" * 60)
    
    # Create scraper instance
    scraper = ETFScraper(delay=1.0)
    
    # Scrape sector ETFs
    print("\nScraping sector ETFs...")
    etfs = scraper.scrape_category('sector')
    
    print(f"Found {len(etfs)} ETFs")
    
    # Display first few ETFs
    if etfs:
        print("\nFirst 3 ETFs:")
        for i, etf in enumerate(etfs[:3]):
            print(f"\n{i+1}. {etf}")
    
    # Export to CSV
    scraper.export_to_csv(etfs, 'example_sector_etfs.csv')
    print("\nExported to: example_sector_etfs.csv")


def example_2_multiple_categories():
    """Example 2: Scraping multiple specific categories"""
    print("\n" + "=" * 60)
    print("Example 2: Multiple Categories")
    print("=" * 60)
    
    scraper = ETFScraper(delay=1.0)
    
    categories_to_scrape = ['sector', 'region', 'asset-class']
    all_data = {}
    
    for category in categories_to_scrape:
        print(f"\nScraping {category}...")
        etfs = scraper.scrape_category(category)
        all_data[category] = etfs
        print(f"  Found {len(etfs)} ETFs")
    
    # Export combined data as JSON
    scraper.export_to_json(all_data, 'example_multiple_categories.json')
    print("\nExported to: example_multiple_categories.json")


def example_3_all_categories():
    """Example 3: Scraping all available categories"""
    print("\n" + "=" * 60)
    print("Example 3: All Categories")
    print("=" * 60)
    
    scraper = ETFScraper(delay=1.0)
    
    print("\nScraping all categories...")
    all_data = scraper.scrape_all_categories()
    
    # Display summary
    print("\nSummary:")
    total_etfs = 0
    for category, etfs in all_data.items():
        count = len(etfs)
        total_etfs += count
        print(f"  {category}: {count} ETFs")
    
    print(f"\nTotal ETFs across all categories: {total_etfs}")
    
    # Export each category separately
    for category, etfs in all_data.items():
        filename = f'example_{category}_etfs.csv'
        scraper.export_to_csv(etfs, filename)
        print(f"Exported {category} to: {filename}")


def example_4_custom_processing():
    """Example 4: Custom data processing after scraping"""
    print("\n" + "=" * 60)
    print("Example 4: Custom Data Processing")
    print("=" * 60)
    
    scraper = ETFScraper(delay=1.0)
    
    # Scrape data
    print("\nScraping asset-class ETFs...")
    etfs = scraper.scrape_category('asset-class')
    
    if not etfs:
        print("No data retrieved")
        return
    
    # Custom processing: Group by a field (if it exists)
    print(f"\nTotal ETFs: {len(etfs)}")
    
    # Show available fields
    if etfs:
        print("\nAvailable fields in the data:")
        for key in sorted(etfs[0].keys()):
            print(f"  - {key}")
    
    # Example: Filter ETFs with specific criteria
    # (This is just an example - actual fields depend on ETFDB's data)
    print("\nExample data structure:")
    if etfs:
        print(etfs[0])
    
    # Export processed data
    scraper.export_to_json(etfs, 'example_processed_etfs.json')
    print("\nExported to: example_processed_etfs.json")


def main():
    """Run all examples"""
    print("\n" + "=" * 60)
    print("ETF Scraper - Usage Examples")
    print("=" * 60)
    print("\nThis script demonstrates various ways to use the ETF scraper.")
    print("Each example shows a different use case.\n")
    
    # Run examples
    try:
        # Example 1: Basic usage
        example_1_basic_scraping()
        
        # Example 2: Multiple categories
        example_2_multiple_categories()
        
        # Example 3: All categories
        # Uncomment to run (this takes longer)
        # example_3_all_categories()
        
        # Example 4: Custom processing
        example_4_custom_processing()
        
        print("\n" + "=" * 60)
        print("Examples completed!")
        print("=" * 60)
        print("\nCheck the current directory for output files:")
        print("  - example_sector_etfs.csv")
        print("  - example_multiple_categories.json")
        print("  - example_processed_etfs.json")
        
    except KeyboardInterrupt:
        print("\n\nExamples interrupted by user")
    except Exception as e:
        print(f"\n\nError running examples: {e}")
        import traceback
        traceback.print_exc()


if __name__ == "__main__":
    main()
