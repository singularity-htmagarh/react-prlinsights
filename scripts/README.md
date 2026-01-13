# ETF Data Scraper for ETFDB.com

This tool allows you to download ETF (Exchange-Traded Fund) data from etfdb.com, organized by various categories and attributes.

## Overview

ETFDB.com categorizes ETFs in multiple ways:
- **Asset Class**: Equity, Fixed Income, Commodities, etc.
- **Issuer**: ETF provider/manager
- **Equity Style**: Growth, Value, Blend
- **Region**: U.S., International, Emerging Markets, etc.
- **Market Cap**: Large-cap, Mid-cap, Small-cap
- **Sector**: Technology, Healthcare, Energy, etc.
- **Commodity**: Gold, Oil, Agriculture, etc.
- **Bond Type**: Government, Corporate, Municipal, etc.
- **Currency**: Currency-focused ETFs

## Installation

### Prerequisites

- Python 3.7 or higher
- pip (Python package manager)

### Setup

1. Navigate to the scripts directory:
```bash
cd scripts
```

2. Install required dependencies:
```bash
pip install -r requirements.txt
```

Or install packages individually:
```bash
pip install requests beautifulsoup4 lxml
```

## Usage

### Basic Usage

Download all ETFs to a CSV file:
```bash
python etf_scraper.py --category all --output etfs.csv
```

### Download Specific Categories

Download ETFs from a specific category:
```bash
# Download sector ETFs
python etf_scraper.py --category sector --output sector_etfs.csv

# Download asset class ETFs
python etf_scraper.py --category asset-class --output asset_class_etfs.csv

# Download by region
python etf_scraper.py --category region --output region_etfs.csv
```

### Export Formats

Export to JSON instead of CSV:
```bash
python etf_scraper.py --category all --format json --output etfs.json
```

### Download All Categories

Download all categories as separate files:
```bash
python etf_scraper.py --all-categories --output-dir ./etf_data
```

This will create separate files for each category:
- `asset-class_etfs.csv`
- `sector_etfs.csv`
- `region_etfs.csv`
- etc.

Plus a combined file: `all_categories.csv`

### Advanced Options

Control request delay (to be respectful to the server):
```bash
python etf_scraper.py --category all --delay 2.0 --output etfs.csv
```

Enable verbose logging:
```bash
python etf_scraper.py --category sector --verbose --output sector_etfs.csv
```

## Available Categories

- `all` - All ETFs
- `asset-class` - ETFs grouped by asset class
- `issuer` - ETFs grouped by issuer/provider
- `equity-style` - ETFs grouped by equity investment style
- `region` - ETFs grouped by geographic region
- `market-cap` - ETFs grouped by market capitalization
- `sector` - ETFs grouped by sector/industry
- `commodity` - Commodity-focused ETFs
- `bond-type` - Bond ETFs grouped by type
- `currency` - Currency-focused ETFs

## Command-Line Options

```
--category CATEGORY       ETF category to scrape (default: all)
--all-categories         Scrape all categories separately
--format {csv,json}      Output format (default: csv)
--output OUTPUT          Output filename
--output-dir DIR         Output directory for --all-categories mode
--delay SECONDS          Delay between requests in seconds (default: 1.0)
--verbose                Enable verbose logging
--help                   Show help message
```

## Output Format

### CSV Format

The CSV output includes columns based on the data available on ETFDB.com, typically:
- Symbol/Ticker
- ETF Name
- Asset Class
- Expense Ratio
- AUM (Assets Under Management)
- Average Volume
- Other attributes specific to the category

### JSON Format

The JSON output provides structured data with all available attributes for each ETF.

Example JSON structure:
```json
[
  {
    "Symbol": "SPY",
    "ETF Name": "SPDR S&P 500 ETF Trust",
    "Asset Class": "Equity",
    "Expense Ratio": "0.09%",
    "AUM": "$450B",
    "Symbol_url": "https://etfdb.com/etf/SPY/"
  },
  ...
]
```

## Best Practices

1. **Be Respectful**: Use appropriate delays between requests (default is 1 second)
2. **Error Handling**: The scraper includes retry logic for failed requests
3. **Data Validation**: Review the output to ensure data quality
4. **Updates**: ETF data changes regularly; re-run the scraper periodically for fresh data

## Approach Recommendations

### For Complete Dataset

If you want a complete snapshot of all ETFs:
```bash
python etf_scraper.py --all-categories --format json --output-dir ./etf_complete_data
```

### For Specific Analysis

If you're analyzing specific segments:
```bash
# Technology sector analysis
python etf_scraper.py --category sector --output tech_etfs.csv

# International exposure analysis
python etf_scraper.py --category region --output international_etfs.csv
```

### For Regular Updates

Create a script or cron job to regularly update your data:
```bash
#!/bin/bash
# update_etf_data.sh
DATE=$(date +%Y%m%d)
python etf_scraper.py --category all --output "etfs_${DATE}.csv"
```

## Technical Details

### Web Scraping Strategy

The scraper:
1. Fetches HTML pages from ETFDB.com
2. Parses tables containing ETF data
3. Extracts structured information
4. Handles pagination for complete results
5. Exports to user-friendly formats

### Rate Limiting

- Default delay: 1 second between requests
- Configurable via `--delay` parameter
- Includes retry logic (3 attempts per request)

### Data Extraction

The scraper automatically:
- Identifies table structures on ETFDB pages
- Extracts headers and data
- Preserves links to individual ETF pages
- Handles multiple table formats

## Troubleshooting

### Connection Issues

If you encounter connection errors:
- Check your internet connection
- Increase the delay: `--delay 2.0`
- Verify ETFDB.com is accessible

### Missing Data

If some data is missing:
- ETFDB may have changed their page structure
- Try the `--verbose` flag to see detailed logs
- Some categories may have different data fields

### Rate Limiting

If you're being rate-limited:
- Increase delay: `--delay 3.0`
- Run scraping during off-peak hours
- Consider scraping in smaller batches

## Examples

### Example 1: Quick Analysis Dataset
```bash
# Get all ETFs with their basic info
python etf_scraper.py --category all --output quick_analysis.csv
```

### Example 2: Comprehensive Multi-Category Analysis
```bash
# Get separate files for each category
python etf_scraper.py --all-categories --output-dir ./comprehensive_data
```

### Example 3: JSON for Data Processing
```bash
# Get JSON for programmatic processing
python etf_scraper.py --category all --format json --output etf_data.json
```

### Example 4: Sector-Specific Research
```bash
# Focus on specific sector
python etf_scraper.py --category sector --output sector_analysis.csv
```

## Data Usage

The data downloaded from ETFDB.com is subject to their terms of service. This tool is intended for:
- Personal research and analysis
- Educational purposes
- Non-commercial use

Please respect ETFDB.com's terms of service and use the data responsibly.

## License

This scraper tool is provided as-is for educational and research purposes.

## Contributing

To improve the scraper:
1. Handle additional ETFDB page formats
2. Add more sophisticated pagination handling
3. Enhance error recovery
4. Add data validation and cleaning
5. Support additional export formats

## Support

For issues or questions:
1. Check the troubleshooting section
2. Review the verbose logs: `--verbose`
3. Verify all dependencies are installed
4. Ensure Python version compatibility (3.7+)
