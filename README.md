# HR WATER COOLER - Official Website 💧

Premium Water Cooler Manufacturer based in Surat, Gujarat - Proudly Made in India 🇮🇳

## About

HR Water Cooler specializes in manufacturing high-quality water cooling solutions ranging from 20L to 500L capacity. This website showcases our products and allows customers to easily get in touch for quotes.

## Features

- 🎨 **Cool Water Theme** - Cyan, blue, ice-blue color palette
- 💧 **Water Drop Animations** - Floating water drops and ripple effects  
- 🌊 **Wave Effects** - Smooth gradient transitions
- 🖼️ **Logo Integration** - Professional logo placement in navbar
- 📱 Mobile-friendly interface
- 💧 Product showcase (20L to 500L coolers)
- 📞 Direct WhatsApp integration for quotes
- 🇮🇳 Made in India branding
- ⚡ Fast loading and smooth animations
- 📧 Contact form with instant messaging
- ✨ Interactive hover effects with water ripples

## Files Structure

```
hr-water-cooler/
│
├── images/                    # Image folder for logo & products
│   ├── logo-placeholder.svg   # Placeholder logo (replace with yours!)
│   └── HOW-TO-ADD-IMAGES.txt # Instructions in Hindi
│
├── index.html                 # Main HTML file
├── style.css                  # Stylesheet with cool water theme
├── script.js                  # JavaScript for interactivity
└── README.md                 # This file
```

## How to Deploy to GitHub

### Step 1: Create GitHub Repository

1. Go to [GitHub.com](https://github.com)
2. Click on "New Repository"
3. Name it: `hr-water-cooler` or `water-cooler-website`
4. Make it Public
5. Don't initialize with README (we already have one)
6. Click "Create Repository"

### Step 2: Upload Files

**Method A - Via GitHub Website (Easiest):**

1. In your new repository, click "uploading an existing file"
2. Drag and drop all files: `index.html`, `style.css`, `script.js`, `README.md`
3. Write commit message: "Initial website commit"
4. Click "Commit changes"

**Method B - Via Git Command Line:**

```bash
# Navigate to your folder containing the files
cd /path/to/your/files

# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - HR Water Cooler website"

# Add remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/hr-water-cooler.git

# Push to GitHub
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. In your repository, go to **Settings**
2. Scroll to **Pages** section (left sidebar)
3. Under "Source", select **main** branch
4. Click **Save**
5. Wait 2-3 minutes
6. Your website will be live at: `https://YOUR_USERNAME.github.io/hr-water-cooler/`

## Customization Guide

### 1. Add Your Company Logo (IMPORTANT! ⭐)

Your logo will appear in the top-left corner of the website.

**Steps:**
1. Prepare your logo file:
   - **Format:** PNG (with transparent background is best), JPG, or SVG
   - **Size:** Recommended 150x60 pixels (or similar width-to-height ratio)
   - **Name:** Save as `logo.png` or `logo.jpg` or `logo.svg`

2. Add logo to the `images` folder:
   ```
   images/
   └── logo.png  (your company logo)
   ```

3. Update `index.html` (Line 31-32):
   ```html
   <!-- Change this line: -->
   <img src="images/logo-placeholder.svg" alt="HR Water Cooler Logo" class="logo-image">
   
   <!-- To: -->
   <img src="images/logo.png" alt="HR Water Cooler Logo" class="logo-image">
   ```

**Note:** Currently using a placeholder logo. Replace it with your actual company logo!

### 2. Replace Images

The website currently uses placeholder images from Unsplash. To add your actual water cooler images:

**In `index.html`, find these image tags and replace URLs:**

```html
<!-- Hero Image -->
<img src="YOUR_IMAGE_URL" alt="Water Cooler" />

<!-- Product Images -->
<!-- 20L Cooler -->
<img src="YOUR_20L_IMAGE_URL" alt="20 Liter Water Cooler">

<!-- 30L Cooler -->
<img src="YOUR_30L_IMAGE_URL" alt="30 Liter Water Cooler">

<!-- And so on for all products... -->
```

**Best Practice:**
1. Create an `images` folder in your project
2. Add your photos there (e.g., `20l-cooler.jpg`, `50l-cooler.jpg`)
3. Update HTML:
```html
<img src="images/20l-cooler.jpg" alt="20 Liter Water Cooler">
```

### 2. Update Contact Information

In `index.html` and `script.js`:
- Phone number: Already set to **9825360905**
- Address: Already set to **Varachha, Surat**
- WhatsApp number: Already configured in `script.js`

### 3. Change Colors

In `style.css`, modify the color scheme at the top:

```css
:root {
    --primary-color: #0077be;      /* Main blue color */
    --secondary-color: #00a8e8;    /* Light blue */
    --accent-color: #ff6b35;       /* Orange accent */
    --dark-color: #1a1a2e;         /* Dark text */
}
```

### 4. Add More Products

To add products beyond 500L, copy this template in `index.html`:

```html
<div class="product-card">
    <div class="product-image">
        <img src="YOUR_IMAGE_URL" alt="YOUR CAPACITY">
    </div>
    <div class="product-info">
        <h3 class="product-title">YOUR TITLE</h3>
        <p class="product-capacity">YOUR CAPACITY</p>
        <p class="product-description">YOUR DESCRIPTION</p>
        <ul class="product-features">
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
        </ul>
        <a href="#contact" class="btn-product">Get Quote</a>
    </div>
</div>
```

## Product Capacities Included

- ✅ 20 Liter Water Cooler
- ✅ 30 Liter Water Cooler
- ✅ 50 Liter Water Cooler (Best Seller)
- ✅ 100 Liter Water Cooler
- ✅ 150 Liter Water Cooler
- ✅ 500 Liter Water Cooler (Industrial)

## Features Explained

### WhatsApp Integration
When customers fill the quote form, they're automatically redirected to WhatsApp with a pre-filled message containing their details. This makes it easy for you to receive inquiries instantly.

### Responsive Design
The website works perfectly on:
- 📱 Mobile phones
- 💻 Tablets
- 🖥️ Desktop computers

### SEO Optimized
- Proper meta tags
- Semantic HTML
- Fast loading speed
- Mobile-friendly

## Browser Support

- ✅ Chrome (Recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Opera

## Contact Details

**HR Water Cooler**
- 📍 Address: Varachha, Surat, Gujarat, India
- 📱 Phone: +91 98253 60905
- 🇮🇳 Made in India

## Future Enhancements (Optional)

Consider adding:
- 📸 Product image gallery
- ⭐ Customer testimonials
- 📹 Product videos
- 🌐 Multi-language support (Gujarati, Hindi)
- 📊 Product comparison tool
- 💬 Live chat feature
- 📱 Mobile app
- 🛒 Online ordering system

## License

© 2024 HR Water Cooler. All rights reserved.

## Support

For technical support or questions about the website, contact the developer who created this for you.

---

**Made with ❤️ in India | HR Water Cooler - Your Trusted Water Cooling Partner**

🌊 Cooling Solutions from 20L to 500L 🌊
