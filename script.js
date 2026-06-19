/* ============================================
   BROTHERHOOD STREETWEAR - JAVASCRIPT
   Part 3: Interactivity, Visual Stimulus, Validation
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {

    /* ---------- 1. ACTIVE NAV LINK HIGHLIGHT ---------- */
    const navLinks = document.querySelectorAll('nav a');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active-link');
        }
    });

    /* ---------- 2. SCROLL PROGRESS BAR ---------- */
    const progressBar = document.createElement('div');
    progressBar.id = 'scroll-progress';
    document.body.appendChild(progressBar);
    window.addEventListener('scroll', function () {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        progressBar.style.width = scrolled + '%';
    });

    /* ---------- 3. HEADER SHRINK ON SCROLL ---------- */
    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 60) {
                header.classList.add('shrink');
            } else {
                header.classList.remove('shrink');
            }
        });
    }

    /* ---------- 4. BACK TO TOP BUTTON ---------- */
    const backToTop = document.createElement('button');
    backToTop.id = 'back-to-top';
    backToTop.setAttribute('aria-label', 'Back to top');
    backToTop.innerHTML = '↑';
    document.body.appendChild(backToTop);

    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });

    backToTop.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    /* ---------- 5. SCROLL-REVEAL FADE-IN ANIMATIONS ---------- */
    const revealTargets = document.querySelectorAll('main img, main h2, main h3, main p, form');
    revealTargets.forEach(el => el.classList.add('reveal-on-scroll'));

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    revealTargets.forEach(el => revealObserver.observe(el));

    /* ---------- 6. PRODUCT IMAGE LIGHTBOX (products.html) ---------- */
    const productImages = document.querySelectorAll('main img');
    if (productImages.length > 0 && document.title.includes('Products')) {
        const lightbox = document.createElement('div');
        lightbox.id = 'lightbox-overlay';
        lightbox.innerHTML = `
            <span id="lightbox-close">&times;</span>
            <img id="lightbox-img" src="" alt="">
            <p id="lightbox-caption"></p>
        `;
        document.body.appendChild(lightbox);

        const lightboxImg = document.getElementById('lightbox-img');
        const lightboxCaption = document.getElementById('lightbox-caption');
        const lightboxClose = document.getElementById('lightbox-close');

        productImages.forEach(img => {
            img.style.cursor = 'zoom-in';
            img.addEventListener('click', function () {
                lightboxImg.src = img.src;
                lightboxCaption.textContent = img.alt;
                lightbox.classList.add('active');
            });
        });

        function closeLightbox() {
            lightbox.classList.remove('active');
        }

        lightboxClose.addEventListener('click', closeLightbox);
        lightbox.addEventListener('click', function (e) {
            if (e.target === lightbox) closeLightbox();
        });
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') closeLightbox();
        });
    }

    /* ---------- 7. PRODUCT SEARCH / FILTER (products.html) ---------- */
    if (document.title.includes('Products')) {
        const main = document.querySelector('main');
        const heading = document.querySelector('main h2');

        // Build a search bar
        const searchWrap = document.createElement('div');
        searchWrap.id = 'product-search-wrap';
        searchWrap.innerHTML = `<input type="text" id="product-search" placeholder="Search products (e.g. hoodie, tee, jacket)...">`;
        heading.insertAdjacentElement('afterend', searchWrap);

        // Group each image + h3 + p into a "card" wrapper for filtering
        const imgs = Array.from(main.querySelectorAll('img'));
        imgs.forEach(img => {
            const h3 = img.nextElementSibling;
            const p = h3 ? h3.nextElementSibling : null;
            const card = document.createElement('div');
            card.className = 'product-card';
            img.parentNode.insertBefore(card, img);
            card.appendChild(img);
            if (h3) card.appendChild(h3);
            if (p) card.appendChild(p);
        });

        const searchInput = document.getElementById('product-search');
        searchInput.addEventListener('input', function () {
            const term = searchInput.value.toLowerCase().trim();
            document.querySelectorAll('.product-card').forEach(card => {
                const name = card.querySelector('h3') ? card.querySelector('h3').textContent.toLowerCase() : '';
                card.style.display = name.includes(term) ? '' : 'none';
            });
        });
    }

    /* ---------- 8. FORM VALIDATION: enquiry.html & contact.html ---------- */
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function (e) {
            let isValid = true;
            const fields = form.querySelectorAll('input, textarea, select');

            // Clear old error messages
            form.querySelectorAll('.error-message').forEach(err => err.remove());
            fields.forEach(f => f.classList.remove('input-error'));

            fields.forEach(field => {
                const value = field.value.trim();

                // Required text/email fields
                if ((field.tagName === 'INPUT' && (field.type === 'text' || field.type === 'email')) && field.hasAttribute('required')) {
                    if (value === '') {
                        showError(field, 'This field is required.');
                        isValid = false;
                    } else if (field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                        showError(field, 'Please enter a valid email address.');
                        isValid = false;
                    } else if (field.type === 'text' && value.length < 2) {
                        showError(field, 'Please enter at least 2 characters.');
                        isValid = false;
                    }
                }

                // Name/email fields without "required" attr (contact.html uses placeholders, no required on all)
                if (field.tagName === 'INPUT' && field.type === 'email' && value !== '' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                    showError(field, 'Please enter a valid email address.');
                    isValid = false;
                }

                // Textarea minimum length if filled in
                if (field.tagName === 'TEXTAREA' && value !== '' && value.length < 5) {
                    showError(field, 'Message is too short.');
                    isValid = false;
                }
            });

            if (!isValid) {
                e.preventDefault();
                return;
            }

            // Valid submission - show success feedback without altering action behaviour
            e.preventDefault();
            showFormSuccess(form);
        });
    });

    function showError(field, message) {
        field.classList.add('input-error');
        const err = document.createElement('span');
        err.className = 'error-message';
        err.textContent = message;
        field.insertAdjacentElement('afterend', err);
    }

    function showFormSuccess(form) {
        let successMsg = form.querySelector('.form-success-message');
        if (!successMsg) {
            successMsg = document.createElement('div');
            successMsg.className = 'form-success-message';
            form.appendChild(successMsg);
        }
        const heading = document.querySelector('main h2');
        const isEnquiry = heading && heading.textContent.includes('Enquiry');
        successMsg.textContent = isEnquiry
            ? '✅ Thank you! Your enquiry has been received — we will respond with pricing and availability shortly.'
            : '✅ Thank you! Your message has been sent — Brotherhood will get back to you soon.';
        successMsg.classList.add('show');

        setTimeout(() => {
            successMsg.classList.remove('show');
        }, 5000);

        form.reset();
    }

    /* ---------- 9. DYNAMIC FOOTER YEAR ---------- */
    const footerP = document.querySelector('footer p');
    if (footerP) {
        const currentYear = new Date().getFullYear();
        footerP.innerHTML = footerP.innerHTML.replace(/\d{4}/, currentYear);
    }
    /* ---------- 10. LEAFLET STORE LOCATOR MAP (contact.html) ---------- */
    const mapContainer = document.getElementById('store-map');
    if (mapContainer && typeof L !== 'undefined') {
        const map = L.map('store-map').setView([-26.15, 28.045], 12);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors',
            maxZoom: 19
        }).addTo(map);

        const braamfontein = L.marker([-26.1929, 28.0305]).addTo(map);
        braamfontein.bindPopup('<strong>Braamfontein Store</strong><br>123 Juta Street, Johannesburg');

        const sandton = L.marker([-26.1076, 28.0567]).addTo(map);
        sandton.bindPopup('<strong>Sandton Pop-up</strong><br>Maude Street, Sandton');

        // Fit map to show both markers nicely
        const bounds = L.latLngBounds([
            [-26.1929, 28.0305],
            [-26.1076, 28.0567]
        ]);
        map.fitBounds(bounds, { padding: [40, 40] });
    }

});