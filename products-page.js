// Products Page JavaScript

// Product Filter Functionality
document.addEventListener('DOMContentLoaded', () => {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const products = document.querySelectorAll('.product-detail');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');
            
            const filter = btn.getAttribute('data-filter');
            
            products.forEach(product => {
                if (filter === 'all') {
                    product.style.display = 'block';
                    product.style.animation = 'fadeInUp 0.5s ease';
                } else {
                    if (product.classList.contains(filter)) {
                        product.style.display = 'block';
                        product.style.animation = 'fadeInUp 0.5s ease';
                    } else {
                        product.style.display = 'none';
                    }
                }
            });
        });
    });
});

// Thumbnail Image Click - Change Main Image
document.querySelectorAll('.thumbnail-images img').forEach(thumb => {
    thumb.addEventListener('click', function() {
        const mainImage = this.closest('.product-images').querySelector('.main-image img');
        const newSrc = this.src.replace('w=150', 'w=600');
        
        // Fade effect
        mainImage.style.opacity = '0';
        setTimeout(() => {
            mainImage.src = newSrc;
            mainImage.style.opacity = '1';
        }, 200);
    });
});

// Smooth Scroll to Product
if (window.location.hash) {
    setTimeout(() => {
        const element = document.querySelector(window.location.hash);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, 100);
}

// Product Comparison Table - Highlight on Hover
document.querySelectorAll('.comparison-table tbody tr').forEach(row => {
    row.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.02)';
    });
    
    row.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// Add to Inquiry Cart (Optional Feature)
const inquiryCart = [];

document.querySelectorAll('.btn-primary').forEach(btn => {
    if (btn.textContent.includes('Quote') || btn.textContent.includes('Request')) {
        btn.addEventListener('click', function(e) {
            if (!this.href.includes('contact.html')) {
                return; // Let normal link work
            }
            
            e.preventDefault();
            
            const productCard = this.closest('.product-detail');
            const productName = productCard.querySelector('h2').textContent;
            
            // Add to inquiry cart
            if (!inquiryCart.includes(productName)) {
                inquiryCart.push(productName);
                
                // Show notification
                showNotification(`${productName} added to inquiry!`);
                
                // Update cart badge if exists
                updateCartBadge();
            }
            
            // Redirect to contact page after short delay
            setTimeout(() => {
                window.location.href = this.href;
            }, 800);
        });
    }
});

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
        color: white;
        padding: 1rem 2rem;
        border-radius: 50px;
        box-shadow: 0 8px 30px rgba(8, 145, 178, 0.4);
        z-index: 10000;
        animation: slideInRight 0.5s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.5s ease';
        setTimeout(() => notification.remove(), 500);
    }, 3000);
}

function updateCartBadge() {
    let badge = document.querySelector('.inquiry-badge');
    if (!badge) {
        badge = document.createElement('div');
        badge.className = 'inquiry-badge';
        badge.style.cssText = `
            position: fixed;
            bottom: 30px;
            right: 30px;
            background: var(--accent-color);
            color: white;
            width: 60px;
            height: 60px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            font-weight: 700;
            box-shadow: 0 8px 30px rgba(59, 130, 246, 0.4);
            cursor: pointer;
            z-index: 1000;
            animation: pulse 2s ease-in-out infinite;
        `;
        document.body.appendChild(badge);
        
        badge.addEventListener('click', () => {
            alert(`Inquiry Cart:\n${inquiryCart.join('\n')}`);
        });
    }
    badge.textContent = inquiryCart.length;
}

// Lazy Load Images on Scroll
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.style.opacity = '0';
            img.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                img.style.transition = 'all 0.6s ease';
                img.style.opacity = '1';
                img.style.transform = 'translateY(0)';
            }, 100);
            
            observer.unobserve(img);
        }
    });
});

document.querySelectorAll('.product-detail img').forEach(img => {
    imageObserver.observe(img);
});

// Print Product Spec Sheet
function printSpecSheet(productId) {
    const product = document.querySelector(productId);
    const printWindow = window.open('', '_blank');
    
    const specs = product.querySelector('.technical-specs').innerHTML;
    const title = product.querySelector('h2').textContent;
    
    printWindow.document.write(`
        <html>
        <head>
            <title>${title} - Specifications</title>
            <style>
                body { font-family: Arial, sans-serif; padding: 20px; }
                h1 { color: #0891b2; }
                table { width: 100%; border-collapse: collapse; margin-top: 20px; }
                td { padding: 10px; border: 1px solid #ddd; }
            </style>
        </head>
        <body>
            <h1>${title}</h1>
            <h2>HR Water Cooler - Made in India</h2>
            ${specs}
            <p style="margin-top: 30px;">
                <strong>Contact:</strong> +91 98253 60905<br>
                <strong>Address:</strong> Varachha, Surat, Gujarat
            </p>
        </body>
        </html>
    `);
    
    setTimeout(() => {
        printWindow.print();
        printWindow.close();
    }, 250);
}

// Download Brochure (Generate PDF-like content)
document.querySelectorAll('.btn-outline').forEach(btn => {
    if (btn.textContent.includes('Brochure') || btn.textContent.includes('Specs')) {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            
            const productCard = this.closest('.product-detail');
            const productId = productCard.getAttribute('id');
            
            alert('Brochure download feature coming soon! For now, please call us at +91 98253 60905 for detailed specifications.');
            
            // In production, this would trigger actual PDF generation/download
            // printSpecSheet('#' + productId);
        });
    }
});

// Add animations on scroll
const animateOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.product-detail').forEach(product => {
    product.style.opacity = '0';
    product.style.transform = 'translateY(30px)';
    product.style.transition = 'all 0.8s ease';
    animateOnScroll.observe(product);
});

// Sticky CTA Button (Mobile)
window.addEventListener('scroll', () => {
    const ctaSection = document.querySelector('.products-cta');
    if (ctaSection) {
        const rect = ctaSection.getBoundingClientRect();
        
        if (rect.top < 0) {
            // CTA is above viewport, show sticky button
            showStickyCTA();
        } else {
            hideStickyCTA();
        }
    }
});

function showStickyCTA() {
    let stickyBtn = document.querySelector('.sticky-cta-btn');
    if (!stickyBtn) {
        stickyBtn = document.createElement('a');
        stickyBtn.className = 'sticky-cta-btn';
        stickyBtn.href = 'tel:+919825360905';
        stickyBtn.innerHTML = '📞 Call for Quote';
        stickyBtn.style.cssText = `
            position: fixed;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
            color: white;
            padding: 15px 30px;
            border-radius: 50px;
            text-decoration: none;
            font-weight: 600;
            box-shadow: 0 8px 30px rgba(8, 145, 178, 0.4);
            z-index: 999;
            animation: slideUpBounce 0.5s ease;
        `;
        document.body.appendChild(stickyBtn);
    }
}

function hideStickyCTA() {
    const stickyBtn = document.querySelector('.sticky-cta-btn');
    if (stickyBtn) {
        stickyBtn.style.animation = 'slideDown 0.5s ease';
        setTimeout(() => stickyBtn.remove(), 500);
    }
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOutRight {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
    
    @keyframes slideUpBounce {
        0% { transform: translateX(-50%) translateY(100px); opacity: 0; }
        60% { transform: translateX(-50%) translateY(-10px); }
        100% { transform: translateX(-50%) translateY(0); opacity: 1; }
    }
    
    @keyframes slideDown {
        from { transform: translateX(-50%) translateY(0); opacity: 1; }
        to { transform: translateX(-50%) translateY(100px); opacity: 0; }
    }
`;
document.head.appendChild(style);

console.log('Products page loaded successfully! 💧');
console.log(`Total products: ${document.querySelectorAll('.product-detail').length}`);
