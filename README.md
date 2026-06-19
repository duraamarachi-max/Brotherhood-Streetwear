# Brotherhood-Streetwear
Amarachi Dura's Brotherhood website - St10537682
# Brotherhood Clothing Website – Changelog

## Student Information
Name: Amarachi Dura  
Student Number: 10537682  
Subject: WEDE5020  
Group: 4  

---

# Changelog

## 12 May 2026
- Reviewed lecturer feedback from Part 1.
- Identified areas that required visual and structural improvements.
- Planned responsive styling enhancements for all pages.

## 13 May 2026
- Created external stylesheet named `style.css`.
- Linked stylesheet to all HTML pages.
- Added CSS reset styling for consistency across browsers.

## 14 May 2026
- Applied typography styling such as font sizes, spacing, and text readability improvements.
- Added colour styling to improve visual appearance.
- Styled navigation links and hover effects.

## 15 May 2026
- Styled forms, buttons, sections, and images.
- Improved layout spacing and content alignment.
- Added shadow effects and rounded corners for modern appearance.

## 16 May 2026
- Added responsive media queries for desktop, tablet, and mobile devices.
- Improved responsive navigation layout.
- Ensured images and text resize correctly on smaller screens.

## 17 May 2026
- Performed final testing and debugging.
- Improved user experience and readability.
- Updated README with complete changelog entries.
- Verified all pages connect correctly to the stylesheet.

## 18 June 2026
- Created external JavaScript file named `script.js` and linked it to all HTML pages.
- Implemented active navigation link highlighting based on current page.
- Added scroll progress bar and header shrink effect on scroll.
- Implemented scroll-reveal fade-in animations for main content elements.
- Built a lightbox feature for product images on `products.html` (click to enlarge, close via button, overlay click, or Escape key).
- Added a live product search/filter bar on `products.html`.
- Implemented JavaScript form validation with inline error messages for `enquiry.html` and `contact.html`, including email format checks and required field checks.
- Added success confirmation messages on form submission for both forms.
- Added a "back to top" button that appears after scrolling.
- Made footer copyright year update dynamically using JavaScript.

## 19 June 2026
- Created `robots.txt` to allow search engine crawling and reference the sitemap.
- Created `sitemap.xml` listing all five website pages with priority and change frequency values.
- Integrated Leaflet.js interactive map on `contact.html` displaying both store locations (Braamfontein and Sandton) with custom popups.
- Linked Leaflet CSS and JS libraries via CDN in `contact.html`.
- Deployed website to Netlify at https://brotherhoodstreetwear.netlify.app/
- Resolved initial sitemap 404 issue caused by files not being included in the deployed folder; re-deployed corrected version.
- Verified `sitemap.xml` and `robots.txt` load correctly on the live deployed site.
- Updated README with Part 3 changelog entries.

---

# Features Added

## Part 2
- External CSS stylesheet
- Responsive design
- Hover effects
- Improved typography
- Mobile-friendly layout
- Better spacing and readability
- Improved accessibility and navigation

## Part 3
- External JavaScript file (`script.js`)
- Active navigation link highlighting
- Scroll progress bar
- Header shrink-on-scroll effect
- Scroll-reveal animations
- Product image lightbox gallery
- Live product search/filter
- JavaScript form validation with error and success messaging
- Back-to-top button
- Dynamic footer copyright year
- SEO: `robots.txt` and `sitemap.xml`
- Leaflet.js interactive store locator map
- Live deployment via Netlify

---

# Website Pages
- index.html
- about.html
- products.html
- enquiry.html
- contact.html

---

# Sitemap

The website's `sitemap.xml` lists all pages for search engine crawlers:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>https://brotherhoodstreetwear.netlify.app/index.html</loc>
        <changefreq>monthly</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://brotherhoodstreetwear.netlify.app/about.html</loc>
        <changefreq>monthly</changefreq>
        <priority>0.7</priority>
    </url>
    <url>
        <loc>https://brotherhoodstreetwear.netlify.app/products.html</loc>
        <changefreq>weekly</changefreq>
        <priority>0.9</priority>
    </url>
    <url>
        <loc>https://brotherhoodstreetwear.netlify.app/enquiry.html</loc>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
    </url>
    <url>
        <loc>https://brotherhoodstreetwear.netlify.app/contact.html</loc>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
    </url>
</urlset>
```

Live sitemap: 🔗 https://brotherhoodstreetwear.netlify.app/sitemap.xml

---

# Live Website
🔗 https://brotherhoodstreetwear.netlify.app

# GitHub Repository
🔗 https://github.com/yourname/your-repo-name
