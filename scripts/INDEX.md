# ETF Data Scraper - Documentation Index

Welcome to the ETF Data Scraper documentation! This tool helps you download ETF data from etfdb.com.

## 📚 Documentation Guide

### For First-Time Users
Start here to get up and running quickly:
- **[QUICKSTART.md](QUICKSTART.md)** - Get started in 5 minutes with basic examples

### For Understanding the Best Approach
Learn which method works best for your needs:
- **[APPROACH_GUIDE.md](APPROACH_GUIDE.md)** - Comprehensive guide to choosing and implementing the right download strategy

### For Detailed Information
Complete technical documentation:
- **[README.md](README.md)** - Full documentation with all features, options, and examples

### For Developers
Code examples and programmatic usage:
- **[example_usage.py](example_usage.py)** - Python code examples showing how to use the scraper as a module

## 🚀 Quick Start

```bash
# 1. Install dependencies
pip install -r requirements.txt

# 2. Download ETF data
python etf_scraper.py --category all --output etfs.csv

# 3. View the data
# Open etfs.csv in Excel or your favorite spreadsheet tool
```

## 📋 Common Commands

```bash
# Get all ETFs
python etf_scraper.py --category all --output all_etfs.csv

# Get sector ETFs
python etf_scraper.py --category sector --output sector_etfs.csv

# Download everything
python etf_scraper.py --all-categories --output-dir ./etf_data

# Export as JSON
python etf_scraper.py --category all --format json --output etfs.json

# Get help
python etf_scraper.py --help
```

## 📂 Available Categories

- `all` - All ETFs (recommended starting point)
- `asset-class` - Organized by asset type
- `sector` - Organized by industry sector
- `region` - Organized by geography
- `market-cap` - Organized by company size
- `issuer` - Organized by ETF provider
- `equity-style` - Growth vs Value
- `bond-type` - Types of bond ETFs
- `commodity` - Commodity-focused ETFs
- `currency` - Currency-focused ETFs

## 🎯 Choose Your Path

### I want to...

**Just explore ETF data quickly**
→ Use: `python etf_scraper.py --category all --output explore.csv`
→ Read: [QUICKSTART.md](QUICKSTART.md)

**Build a comprehensive ETF database**
→ Use: `python etf_scraper.py --all-categories --output-dir ./database`
→ Read: [APPROACH_GUIDE.md](APPROACH_GUIDE.md) → Approach 1

**Analyze specific sectors or regions**
→ Use: `python etf_scraper.py --category sector --output sectors.csv`
→ Read: [APPROACH_GUIDE.md](APPROACH_GUIDE.md) → Approach 3

**Regularly update my ETF data**
→ Read: [APPROACH_GUIDE.md](APPROACH_GUIDE.md) → Approach 4

**Use the scraper in my own Python code**
→ Read: [example_usage.py](example_usage.py)
→ See: [README.md](README.md) → Technical Details

**Understand all available options**
→ Read: [README.md](README.md)

## 🛠 Files in This Directory

- `etf_scraper.py` - Main scraper script (executable)
- `example_usage.py` - Python usage examples
- `requirements.txt` - Python dependencies
- `README.md` - Complete documentation
- `QUICKSTART.md` - Quick start guide
- `APPROACH_GUIDE.md` - Strategy guide
- `INDEX.md` - This file

## ⚡ Quick Examples

### Example 1: First-Time User
```bash
cd scripts
pip install -r requirements.txt
python etf_scraper.py --category all --output my_first_etf_data.csv
# Open my_first_etf_data.csv in Excel
```

### Example 2: Research Project
```bash
# Download all categories for comprehensive analysis
python etf_scraper.py --all-categories --output-dir ./research_data
```

### Example 3: Investment Analysis
```bash
# Focus on sectors and regions
python etf_scraper.py --category sector --output sectors.csv
python etf_scraper.py --category region --output regions.csv
```

## 📖 Documentation Structure

```
Documentation Flow:
1. INDEX.md (this file) → Overview and navigation
2. QUICKSTART.md → Hands-on introduction
3. APPROACH_GUIDE.md → Strategic guidance
4. README.md → Complete reference
5. example_usage.py → Code examples
```

## 💡 Tips

1. **Start small**: Begin with `--category all` to understand the data
2. **Be patient**: Web scraping takes time; don't interrupt the process
3. **Use delays**: Respect the server with `--delay 2.0` or higher
4. **Check output**: Always verify your CSV/JSON files after scraping
5. **Save regularly**: Re-run periodically as ETF data changes

## 🆘 Need Help?

1. **Run the help command**: `python etf_scraper.py --help`
2. **Enable verbose logging**: Add `--verbose` to any command
3. **Check the documentation**: See README.md for detailed troubleshooting
4. **Review examples**: Look at example_usage.py for code samples

## 🔄 What's Next?

After downloading your data:
1. Open CSV files in Excel/Google Sheets
2. Import JSON into databases or applications
3. Use Python (pandas) for advanced analysis
4. Create visualizations and reports

See [APPROACH_GUIDE.md](APPROACH_GUIDE.md) for detailed guidance on processing downloaded data.

---

**Ready to start?** Go to [QUICKSTART.md](QUICKSTART.md)

**Need more information?** Check [README.md](README.md)

**Want strategic guidance?** Read [APPROACH_GUIDE.md](APPROACH_GUIDE.md)
