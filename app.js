// ===========================
// LIPA TALAY VILLAS — APP.JS
// ===========================

const R2 = 'https://pub-5bb5c8088cdd4b5d83de5ef601a7f359.r2.dev';

const VILLAS = [
  {
    id: 'sawng',
    name: 'Lipa Talay Sawng',
    thaiName: 'Villa 205',
    slug: 'lipa-talay-sawng',
    tagline: 'Beachfront Pool Villa',
    description: 'Lipa Talay Sawng is a stunning beachfront villa offering direct access to the calm waters of Lipa Noi bay. With its private pool, spacious open-plan living areas, and sweeping sea views, this villa is the ultimate Samui retreat.',
    longDescription: 'Designed to celebrate the natural beauty of the west coast, Lipa Talay Sawng blends contemporary Thai architecture with comfortable, elegant interiors. Wake up to the sound of the sea and enjoy your morning coffee on the terrace as the sunrise reflects off the water. The villa sleeps up to 6 guests in comfort, with fully equipped kitchen, alfresco dining, and outdoor shower.',
    bedrooms: 3,
    bathrooms: 3,
    guests: 6,
    size: '280 sqm',
    amenities: ['Private Pool', 'Sea View', 'Beach Access', 'Air Conditioning', 'Full Kitchen', 'WiFi', 'Daily Housekeeping', 'BBQ Area', 'Outdoor Shower', 'Smart TV'],
    hero: `${R2}/Lipa%20Talay%20Villa%20%28LTV%29/Lipa%20Talay%20Sawng%20%28205%29/205%20-%20Top%2040%20Large/1.jpg`,
    images: Array.from({length: 27}, (_, i) => `${R2}/Lipa%20Talay%20Villa%20%28LTV%29/Lipa%20Talay%20Sawng%20%28205%29/205%20-%20Top%2040%20Large/${i + 1}.jpg`)
  },
  {
    id: 'haa',
    name: 'Lipa Talay Haa',
    thaiName: 'Villa 212',
    slug: 'lipa-talay-haa',
    tagline: 'Ocean View Villa',
    description: 'Lipa Talay Haa is a beautifully appointed villa with panoramic views across the Gulf of Thailand. Light-filled and elegant, this villa offers the perfect blend of privacy and luxury.',
    longDescription: 'Haa — meaning "five" in Thai — is the fifth jewel in the Lipa Talay crown. Perched to capture the best of the estate\'s westward vistas, this villa is bathed in afternoon light. The interiors are warm and welcoming, with natural materials and locally crafted furniture throughout. Perfect for couples or small families seeking an authentic Samui experience.',
    bedrooms: 3,
    bathrooms: 3,
    guests: 6,
    size: '260 sqm',
    amenities: ['Private Pool', 'Panoramic Sea View', 'Beach Access', 'Air Conditioning', 'Full Kitchen', 'WiFi', 'Daily Housekeeping', 'Outdoor Dining', 'Sunbeds', 'Smart TV'],
    hero: `${R2}/Lipa%20Talay%20Villa%20%28LTV%29/Lipa%20Talay%20Haa%20%28212%29/212%20Top%2040/1.jpg`,
    images: Array.from({length: 27}, (_, i) => `${R2}/Lipa%20Talay%20Villa%20%28LTV%29/Lipa%20Talay%20Haa%20%28212%29/212%20Top%2040/${i + 1}.jpg`)
  },
  {
    id: 'hok',
    name: 'Lipa Talay Hok',
    thaiName: 'Villa 201',
    slug: 'lipa-talay-hok',
    tagline: 'Garden & Pool Villa',
    description: 'Lipa Talay Hok is a serene garden villa with a lush tropical setting and a stunning private pool. An oasis of calm within the estate.',
    longDescription: 'Hok — "six" in Thai — is surrounded by mature tropical landscaping that creates a verdant, private sanctuary. The villa\'s architecture opens to generous outdoor spaces, making it ideal for those who love al fresco living. Mornings by the pool, evenings watching the sun dip behind the horizon — this is Samui living at its most relaxed.',
    bedrooms: 3,
    bathrooms: 3,
    guests: 6,
    size: '255 sqm',
    amenities: ['Private Pool', 'Tropical Garden', 'Beach Access', 'Air Conditioning', 'Full Kitchen', 'WiFi', 'Daily Housekeeping', 'Outdoor Sala', 'Sunbeds', 'Smart TV'],
    hero: `${R2}/Lipa%20Talay%20Villa%20%28LTV%29/Lipa%20Talay%20Hok%20%28201%29/201%20%28new%29/1.jpg`,
    images: Array.from({length: 27}, (_, i) => `${R2}/Lipa%20Talay%20Villa%20%28LTV%29/Lipa%20Talay%20Hok%20%28201%29/201%20%28new%29/${i + 1}.jpg`)
  },
  {
    id: 'jed',
    name: 'Lipa Talay Jed',
    thaiName: 'Villa 104',
    slug: 'lipa-talay-jed',
    tagline: 'Sunset Terrace Villa',
    description: 'Lipa Talay Jed is perfectly positioned to capture the legendary Lipa Noi sunsets. Elevated terraces and open-plan living make this villa feel like a front-row seat to nature\'s finest show.',
    longDescription: 'Jed — "seven" in Thai — is a villa that celebrates the passage of the day. From sunrise over the gardens to the fiery west-coast sunsets, every hour brings a new mood to this beautifully crafted home. Spacious terraces, a freeform pool, and an open-air living pavilion make it exceptional for entertaining and relaxation.',
    bedrooms: 3,
    bathrooms: 3,
    guests: 6,
    size: '270 sqm',
    amenities: ['Private Pool', 'Sunset Views', 'Beach Access', 'Air Conditioning', 'Full Kitchen', 'WiFi', 'Daily Housekeeping', 'Open Living Pavilion', 'Outdoor Shower', 'Smart TV'],
    hero: `${R2}/Lipa%20Talay%20Villa%20%28LTV%29/Lipa%20Talay%20Jed%20%28104%29/104%20%28new%29/1.jpg`,
    images: Array.from({length: 27}, (_, i) => `${R2}/Lipa%20Talay%20Villa%20%28LTV%29/Lipa%20Talay%20Jed%20%28104%29/104%20%28new%29/${i + 1}.jpg`)
  },
];

// ===== LIGHTBOX =====
let lbImages = [];
let lbIndex = 0;

function openLightbox(images, index) {
  lbImages = images;
  lbIndex = index;
  document.getElementById('lbImg').src = lbImages[lbIndex];
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}

function lbNav(dir) {
  lbIndex = (lbIndex + dir + lbImages.length) % lbImages.length;
  document.getElementById('lbImg').src = lbImages[lbIndex];
}

document.addEventListener('keydown', e => {
  if (e.key === 'ArrowLeft') lbNav(-1);
  if (e.key === 'ArrowRight') lbNav(1);
  if (e.key === 'Escape') closeLightbox();
});

// ===== NAVIGATION =====
function navigate(page, villaId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  
  if (page === 'villa-detail' && villaId) {
    renderVillaDetail(villaId);
    document.getElementById('page-villa-detail').classList.add('active');
    window.location.hash = villaId;
  } else {
    const el = document.getElementById('page-' + page);
    if (el) el.classList.add('active');
    window.location.hash = page === 'home' ? '' : page;
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
  closeMobileMenu();
}

// ===== RENDER VILLA CARDS (HOME) =====
function renderHomeCards() {
  const container = document.getElementById('homeVillaCards');
  container.innerHTML = VILLAS.map(v => `
    <div class="villa-card" onclick="navigate('villa-detail', '${v.id}')">
      <img class="villa-card-img" src="${v.hero}" alt="${v.name}" loading="lazy" onerror="this.src='${v.images[1] || v.hero}'" />
      <div class="villa-card-body">
        <span class="villa-card-tag">${v.tagline}</span>
        <h3>${v.name}</h3>
        <p>${v.description.substring(0, 100)}...</p>
        <div class="villa-card-link">View Villa</div>
      </div>
    </div>
  `).join('');
}

// ===== RENDER VILLA CARDS (VILLAS PAGE) =====
function renderVillasPage() {
  const container = document.getElementById('villasPageCards');
  container.innerHTML = VILLAS.map(v => `
    <div class="villa-card-full" onclick="navigate('villa-detail', '${v.id}')">
      <img class="villa-card-full-img" src="${v.hero}" alt="${v.name}" loading="lazy" onerror="this.src='${v.images[1] || v.hero}'" />
      <div class="villa-card-full-body">
        <span class="villa-card-tag">${v.tagline} · ${v.thaiName}</span>
        <h3>${v.name}</h3>
        <div class="villa-meta">
          <div class="villa-meta-item"><strong>${v.bedrooms}</strong><span>Bedrooms</span></div>
          <div class="villa-meta-item"><strong>${v.bathrooms}</strong><span>Bathrooms</span></div>
          <div class="villa-meta-item"><strong>${v.guests}</strong><span>Guests</span></div>
          <div class="villa-meta-item"><strong>${v.size}</strong><span>Size</span></div>
        </div>
        <p>${v.description}</p>
        <button class="btn-outline">View Villa →</button>
      </div>
    </div>
  `).join('');
}

// ===== RENDER VILLA DETAIL =====
let galleryShown = 9;

function renderVillaDetail(id) {
  const v = VILLAS.find(x => x.id === id);
  if (!v) return;
  galleryShown = 9;

  const content = document.getElementById('villaDetailContent');
  content.innerHTML = `
    <div class="detail-hero">
      <img src="${v.hero}" alt="${v.name}" onerror="this.src='${v.images[1] || v.hero}'" />
      <div class="detail-hero-overlay">
        <div class="detail-hero-text">
          <button class="back-btn" onclick="navigate('villas')">← Back to Villas</button>
          <span class="villa-unit">${v.thaiName} · ${v.tagline}</span>
          <h1>${v.name}</h1>
        </div>
      </div>
    </div>
    <div class="detail-body">
      <div class="detail-grid">
        <div class="detail-desc">
          <h2>About This Villa</h2>
          <p>${v.description}</p>
          <p>${v.longDescription}</p>
          <div class="villa-meta" style="margin-top:2rem">
            <div class="villa-meta-item"><strong>${v.bedrooms}</strong><span>Bedrooms</span></div>
            <div class="villa-meta-item"><strong>${v.bathrooms}</strong><span>Bathrooms</span></div>
            <div class="villa-meta-item"><strong>${v.guests}</strong><span>Guests</span></div>
            <div class="villa-meta-item"><strong>${v.size}</strong><span>Size</span></div>
          </div>
          <div class="detail-amenities">
            <h3>Amenities</h3>
            <div class="amenity-list">
              ${v.amenities.map(a => `<div class="amenity-item">${a}</div>`).join('')}
            </div>
          </div>
        </div>
        <div class="detail-sidebar">
          <div class="enquiry-box">
            <h3>Book This Villa</h3>
            <p>Contact us to check availability and rates for ${v.name}.</p>
            <a href="mailto:info@sunshinesamuivillas.com?subject=Enquiry: ${encodeURIComponent(v.name)}" class="btn-hero" style="text-decoration:none;display:block;text-align:center">Send Enquiry</a>
            <a href="https://wa.me/66XXXXXXXXX?text=Hi, I'm interested in ${encodeURIComponent(v.name)}" class="enquiry-wa" target="_blank">
              <svg viewBox="0 0 24 24" fill="#25D366" width="20" height="20"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>
      <div class="detail-gallery">
        <h2>Photo Gallery</h2>
        <div class="gallery-grid" id="galleryGrid-${v.id}"></div>
        ${v.images.length > 9 ? `<button class="load-more-btn" id="loadMoreBtn" onclick="loadMoreGallery('${v.id}')">Load More Photos</button>` : ''}
      </div>
    </div>
  `;

  renderGallery(v, galleryShown);
}

function renderGallery(v, count) {
  const grid = document.getElementById(`galleryGrid-${v.id}`);
  if (!grid) return;
  const imgs = v.images.slice(0, count);
  grid.innerHTML = imgs.map((src, i) => `
    <img src="${src}" alt="${v.name} photo ${i+1}" loading="lazy"
      onerror="this.style.display='none'"
      onclick="openLightbox(${JSON.stringify(v.images)}, ${i})" />
  `).join('');
}

function loadMoreGallery(id) {
  const v = VILLAS.find(x => x.id === id);
  if (!v) return;
  galleryShown = Math.min(galleryShown + 9, v.images.length);
  renderGallery(v, galleryShown);
  if (galleryShown >= v.images.length) {
    const btn = document.getElementById('loadMoreBtn');
    if (btn) btn.style.display = 'none';
  }
}

// ===== MOBILE MENU =====
function closeMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  menu.classList.remove('open');
}

document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('mobileMenu').classList.add('open');
});
document.getElementById('closeMenu').addEventListener('click', closeMobileMenu);

// ===== HASH ROUTING =====
function handleHash() {
  const hash = window.location.hash.replace('#', '');
  const villaMatch = VILLAS.find(v => v.id === hash || v.slug === hash);
  if (villaMatch) {
    navigate('villa-detail', villaMatch.id);
  } else if (hash && ['villas', 'location', 'contact'].includes(hash)) {
    navigate(hash);
  } else {
    navigate('home');
  }
}

// ===== SPLASH =====
window.addEventListener('load', () => {
  renderHomeCards();
  renderVillasPage();
  handleHash();
  setTimeout(() => {
    document.getElementById('splash').classList.add('hidden');
  }, 1200);
});

window.addEventListener('hashchange', handleHash);
