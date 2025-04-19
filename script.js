// Sample image data (in a real app, this would come from an API)
const imageData = [
    { id: 1, src: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80', title: 'Mountain Landscape', description: 'Scenic view of mountains and lakes at sunrise' },
    { id: 2, src: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80', title: 'New York Skyline', description: 'Night view of Manhattan skyscrapers' },
    { id: 3, src: 'https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80', title: 'African Lion', description: 'Majestic lion resting in the savanna' },
    { id: 4, src: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80', title: 'Gourmet Breakfast', description: 'Healthy breakfast bowl with fresh fruits' },
    { id: 5, src: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80', title: 'Tropical Beach', description: 'White sand beach with crystal clear water' },
    { id: 6, src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80', title: 'Tech Gadgets', description: 'Modern smartphones and laptops on desk' },
    { id: 7, src: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80', title: 'Glass Skyscraper', description: 'Modern office building with reflective windows' },
    { id: 8, src: 'https://images.unsplash.com/photo-1547347298-4074fc3086f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80', title: 'Basketball Player', description: 'Athlete dunking during a game' },
    { id: 9, src: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80', title: 'Abstract Art', description: 'Colorful painting with geometric patterns' },
    { id: 10, src: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80', title: 'Fashion Show', description: 'Model walking on runway in designer clothes' },
    { id: 11, src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80', title: 'Team Meeting', description: 'Business professionals discussing project' },
    { id: 12, src: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80', title: 'Morning Yoga', description: 'Woman doing yoga exercises at sunrise' },
    { id: 13, src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80', title: 'Mountain Lake', description: 'Calm lake reflecting surrounding mountains' },
    { id: 14, src: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80', title: 'Forest Path', description: 'Sunlight filtering through tall trees' },
    { id: 15, src: 'https://images.unsplash.com/photo-1429087969512-1e85aab2683d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80', title: 'Sunset Waves', description: 'Ocean waves at golden hour' },
    { id: 16, src: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80', title: 'City Bridge', description: 'Historic bridge over river in urban area' },
    { id: 17, src: 'https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80', title: 'Sleeping Cat', description: 'Orange tabby cat napping in sunlight' },
    { id: 18, src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80', title: 'Gourmet Pizza', description: 'Wood-fired pizza with fresh ingredients' },
    { id: 19, src: 'https://images.unsplash.com/photo-1470114716159-e389f8712fda?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80', title: 'Island Resort', description: 'Luxury bungalows over turquoise water' },
    { id: 20, src: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80', title: 'VR Headset', description: 'Person using virtual reality goggles' },
    { id: 21, src: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80', title: 'Library Interior', description: 'Historic library with ornate bookshelves' },
    { id: 22, src: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80', title: 'Soccer Match', description: 'Player kicking ball during intense game' },
    { id: 23, src: 'https://images.unsplash.com/photo-1531913764164-f85c52e6e654?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80', title: 'Street Art', description: 'Colorful mural on urban building' },
    { id: 24, src: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80', title: 'Designer Outfit', description: 'Stylish clothing on mannequin' },
    { id: 25, src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80', title: 'Office Workspace', description: 'Modern desk with laptop and notebook' },
    { id: 26, src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80', title: 'Weight Training', description: 'Man lifting weights at gym' },
    { id: 27, src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80', title: 'Snowy Peaks', description: 'Mountain range covered in snow' },
    { id: 28, src: 'https://images.unsplash.com/photo-1470004914212-05527e49370b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80', title: 'Desert Sunset', description: 'Sand dunes at golden hour' },
    { id: 29, src: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80', title: 'Ocean Sunset', description: 'Boat sailing into colorful sunset' },
    { id: 30, src: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80', title: 'Golden Retriever', description: 'Dog playing fetch in park' },
    { id: 31, src: 'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80', title: 'Sushi Platter', description: 'Assorted fresh sushi on wooden board' },
    { id: 32, src: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80', title: 'Maldives Resort', description: 'Overwater bungalows in paradise' },
    { id: 33, src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80', title: 'Smart Home', description: 'Voice-controlled home automation system' },
    { id: 34, src: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80', title: 'Museum Interior', description: 'Grand hall with historical artifacts' },
    { id: 35, src: 'https://images.unsplash.com/photo-1543351611-58f69d7c1781?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80', title: 'Tennis Match', description: 'Player serving during tournament' },
    { id: 36, src: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80', title: 'Oil Painting', description: 'Still life artwork with vibrant colors' },
    { id: 37, src: 'https://images.unsplash.com/photo-1483181957632-8bda974cbc91?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80', title: 'Jewelry Display', description: 'Elegant necklace on velvet background' },
    { id: 38, src: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80', title: 'Creative Workspace', description: 'Designer working on digital tablet' },
    { id: 39, src: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80', title: 'Outdoor Running', description: 'Woman jogging through park trail' },
    { id: 40, src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80', title: 'Alpine Valley', description: 'Green valley surrounded by mountains' },
    { id: 41, src: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80', title: 'Autumn Forest', description: 'Fall colors in dense woodland' },
    { id: 42, src: 'https://images.unsplash.com/photo-1429087969512-1e85aab2683d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80', title: 'Stormy Sea', description: 'Powerful waves crashing on rocks' },
    { id: 43, src: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80', title: 'Urban Canal', description: 'Historic buildings along waterway' },
    { id: 44, src: 'https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80', title: 'Curious Kitten', description: 'Playful young cat exploring' },
    { id: 45, src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80', title: 'Italian Pasta', description: 'Homemade spaghetti with fresh herbs' },
    { id: 46, src: 'https://images.unsplash.com/photo-1470114716159-e389f8712fda?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80', title: 'Bora Bora', description: 'Overwater villas in tropical paradise' },
    { id: 47, src: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80', title: 'Drone Technology', description: 'High-tech quadcopter in flight' },
    { id: 48, src: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80', title: 'Reading Room', description: 'Cozy library with comfortable chairs' },
    { id: 49, src: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80', title: 'Basketball Court', description: 'Player shooting hoops at sunset' },
    { id: 50, src: 'https://images.unsplash.com/photo-1531913764164-f85c52e6e654?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80', title: 'Graffiti Art', description: 'Vibrant street mural in city' }
];

// DOM Elements
const galleryGrid = document.getElementById('gallery-grid');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.getElementById('close-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const imageInfo = document.getElementById('image-info');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const loadMoreBtn = document.getElementById('load-more-btn');

// Variables
let currentImageIndex = 0;
let displayedImages = [];
let visibleImagesCount = 8;

// Initialize the gallery
function initGallery() {
    displayedImages = [...imageData];
    renderGallery(displayedImages.slice(0, visibleImagesCount));
    setupEventListeners();
}

// Render gallery images
function renderGallery(images) {
    galleryGrid.innerHTML = '';
    
    images.forEach((image, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.innerHTML = `
            <img src="${image.src}" alt="${image.title}" class="gallery-img" data-index="${index}">
        `;
        galleryGrid.appendChild(galleryItem);
    });
}

// Setup event listeners
function setupEventListeners() {
    // Lightbox open when clicking on an image
    galleryGrid.addEventListener('click', (e) => {
        if (e.target.classList.contains('gallery-img')) {
            currentImageIndex = parseInt(e.target.getAttribute('data-index'));
            openLightbox();
        }
    });
    
    // Lightbox close
    closeBtn.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    // Navigation buttons
    prevBtn.addEventListener('click', showPrevImage);
    nextBtn.addEventListener('click', showNextImage);
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (lightbox.classList.contains('active')) {
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft') showPrevImage();
            if (e.key === 'ArrowRight') showNextImage();
        }
    });
    
    // Search functionality
    searchBtn.addEventListener('click', searchImages);
    searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            searchImages();
        }
    });
    
    // Load more images
    loadMoreBtn.addEventListener('click', loadMoreImages);
}

// Open lightbox
function openLightbox() {
    const currentImage = displayedImages[currentImageIndex];
    lightboxImg.src = currentImage.src;
    imageInfo.innerHTML = `
        <h3>${currentImage.title}</h3>
        <p>${currentImage.description}</p>
    `;
    lightbox.classList.add('active');
}

// Close lightbox
function closeLightbox() {
    lightbox.classList.remove('active');
}

// Show previous image
function showPrevImage() {
    currentImageIndex = (currentImageIndex - 1 + displayedImages.length) % displayedImages.length;
    openLightbox();
}

// Show next image
function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % displayedImages.length;
    openLightbox();
}

// Search images
function searchImages() {
    const searchTerm = searchInput.value.toLowerCase();
    
    if (searchTerm === '') {
        displayedImages = [...imageData];
    } else {
        displayedImages = imageData.filter(image => 
            image.title.toLowerCase().includes(searchTerm) || 
            image.description.toLowerCase().includes(searchTerm)
        );
    }
    
    renderGallery(displayedImages.slice(0, visibleImagesCount));
    loadMoreBtn.style.display = displayedImages.length > visibleImagesCount ? 'block' : 'none';
}

// Load more images
function loadMoreImages() {
    visibleImagesCount += 4;
    renderGallery(displayedImages.slice(0, visibleImagesCount));
    
    if (visibleImagesCount >= displayedImages.length) {
        loadMoreBtn.style.display = 'none';
    }
}

// Initialize the gallery when the page loads
window.addEventListener('DOMContentLoaded', initGallery);