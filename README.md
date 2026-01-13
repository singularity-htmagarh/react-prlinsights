
# PRL Insights Website

This is the source code for the PRL Insights website. The site is built as a static site and hosted on GitHub Pages.

## Structure

- Main pages are organized in folders, each with an `index.html` file for clean URLs (e.g., `/about/`, `/services/`, etc.).
- Assets are in the `assets/` folder
- Styles are in `styles.css`

## Contact Form

The contact form uses [Formspree](https://formspree.io/) for submissions. See `/contact/index.html` for the form code and integration details. Submissions display a custom thank you message without leaving the site.

## Development

You can edit the HTML and CSS files directly. No build step is required.

## Deployment

The site is deployed via GitHub Pages from the `main` branch. All navigation and links use folder-based URLs for a modern, clean look.

## ETF Data Scraper

This repository includes a Python-based tool for downloading ETF data from etfdb.com. The scraper allows you to download ETF information organized by various categories such as sector, region, asset class, and more.

### Quick Start

```bash
cd scripts
pip install -r requirements.txt
python etf_scraper.py --category all --output etfs.csv
```

For detailed documentation, see [scripts/README.md](scripts/README.md) or [scripts/QUICKSTART.md](scripts/QUICKSTART.md).