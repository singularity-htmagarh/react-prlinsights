# Quick Start Guide for ETF Data Scraper

## 1. One-Time Setup

### Install Python Dependencies
```bash
cd scripts
pip install -r requirements.txt
```

## 2. Quick Examples

### Download All ETFs (Recommended Starting Point)
```bash
python etf_scraper.py --category all --output all_etfs.csv
```

### Download by Category
```bash
# Sector ETFs
python etf_scraper.py --category sector --output sector_etfs.csv

# Regional ETFs
python etf_scraper.py --category region --output region_etfs.csv

# Asset Class ETFs
python etf_scraper.py --category asset-class --output asset_class_etfs.csv
```

### Download Everything (Complete Dataset)
```bash
python etf_scraper.py --all-categories --output-dir ./etf_data
```

This creates separate files for each category plus a combined file.

### Export as JSON
```bash
python etf_scraper.py --category all --format json --output all_etfs.json
```

## 3. Understanding the Output

### CSV Output
Opens in Excel or any spreadsheet software. Contains columns like:
- Symbol (Ticker)
- ETF Name
- Asset Class
- Expense Ratio
- AUM (Assets Under Management)
- Links to detailed pages

### JSON Output
Machine-readable format for further processing in Python, JavaScript, etc.

## 4. Common Use Cases

### Research Specific Sectors
```bash
python etf_scraper.py --category sector --output sector_analysis.csv
# Then open sector_analysis.csv in Excel
```

### Build an ETF Database
```bash
python etf_scraper.py --all-categories --format json --output-dir ./etf_database
# Creates a complete database in JSON format
```

### Regular Updates
Create a shell script (e.g., `update_weekly.sh`):
```bash
#!/bin/bash
DATE=$(date +%Y%m%d)
python etf_scraper.py --category all --output "etfs_${DATE}.csv"
```

## 5. Tips

- **Start Small**: Begin with `--category all` to get familiar
- **Be Patient**: Scraping takes time; use `--delay 2.0` to be extra respectful
- **Check Output**: Always verify the CSV/JSON files after scraping
- **Save Regularly**: Data changes; re-run periodically for updates

## 6. Troubleshooting

### "Module not found" error
```bash
pip install -r requirements.txt
```

### No data scraped
- ETFDB.com may have changed their layout
- Try `--verbose` to see what's happening
- Check your internet connection

### Rate limiting
```bash
python etf_scraper.py --category all --delay 2.0 --output etfs.csv
```

## 7. Next Steps

After downloading the data:
1. Open CSV files in Excel/Google Sheets for analysis
2. Import JSON into your database or application
3. Use Python pandas for advanced analysis
4. Create visualizations and reports

## Example Workflow

```bash
# Step 1: Download all ETF data
python etf_scraper.py --category all --output etfs_latest.csv

# Step 2: Review the data
head etfs_latest.csv

# Step 3: Download specific categories for deeper analysis
python etf_scraper.py --category sector --output sector_detailed.csv
python etf_scraper.py --category region --output region_detailed.csv

# Step 4: Export to JSON for application use
python etf_scraper.py --category all --format json --output etfs_latest.json
```

## Getting Help

```bash
python etf_scraper.py --help
```

For detailed documentation, see README.md in the scripts directory.
