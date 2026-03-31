// room.js - Complete Room Database with Unique Rooms for Each Hotel

// Get room details by hotel ID and room ID
function getRoomDetails(hotelId, roomId) {
    hotelId = parseInt(hotelId);
    roomId = parseInt(roomId);
    
    const hotel = HOTELS_DATABASE[hotelId];
    if (!hotel) return null;
    
    const room = hotel.rooms.find(r => r.id === roomId);
    if (!room) return null;
    
    return {
        hotel: hotel,
        room: room
    };
}

// Get all rooms for a specific hotel
function getHotelRooms(hotelId) {
    hotelId = parseInt(hotelId);
    const hotel = HOTELS_DATABASE[hotelId];
    if (!hotel) return [];
    return hotel.rooms;
}

// Format price with currency
function formatPrice(price) {
    return 'RM ' + price.toLocaleString('en-MY');
}

// Get room amenities based on hotel and room type
function getRoomAmenities(hotelId, roomTypeValue) {
    const hotelSpecificAmenities = {
        // Mandarin Oriental - Luxury amenities
        1: {
            standard: [
                { icon: "fa-tv", name: "50\" OLED TV" },
                { icon: "fa-wifi", name: "Complimentary High-Speed WiFi" },
                { icon: "fa-wind", name: "Silent Air Conditioning" },
                { icon: "fa-coffee", name: "Illy Coffee Machine" },
                { icon: "fa-tshirt", name: "Ironing Facilities" },
                { icon: "fa-shield-alt", name: "Digital Safe" },
                { icon: "fa-bath", name: "Marble Bathroom" },
                { icon: "fa-bed", name: "400-Thread Count Sheets" }
            ],
            deluxe: [
                { icon: "fa-tv", name: "65\" OLED TV" },
                { icon: "fa-wifi", name: "Ultra-Fast WiFi" },
                { icon: "fa-wind", name: "Individual Climate Control" },
                { icon: "fa-coffee", name: "Nespresso Machine" },
                { icon: "fa-tshirt", name: "Ironing Facilities" },
                { icon: "fa-shield-alt", name: "Digital Safe" },
                { icon: "fa-bath", name: "Marble Bathroom with Rain Shower" },
                { icon: "fa-bed", name: "Premium Egyptian Cotton" },
                { icon: "fa-city", name: "KLCC Park View" },
                { icon: "fa-chair", name: "Executive Work Desk" }
            ],
            suite: [
                { icon: "fa-tv", name: "75\" OLED TV" },
                { icon: "fa-wifi", name: "Ultra-Fast WiFi" },
                { icon: "fa-wind", name: "Premium Climate Control" },
                { icon: "fa-coffee", name: "Nespresso Machine" },
                { icon: "fa-tshirt", name: "Ironing Facilities" },
                { icon: "fa-shield-alt", name: "Digital Safe" },
                { icon: "fa-bath", name: "Jacuzzi Bathtub" },
                { icon: "fa-bed", name: "King Size Premium Bedding" },
                { icon: "fa-couch", name: "Separate Living Room" },
                { icon: "fa-utensils", name: "Dining Area" },
                { icon: "fa-champagne-glasses", name: "Complimentary Champagne" },
                { icon: "fa-concierge-bell", name: "Butler Service" }
            ]
        },
        
        // W Kuala Lumpur - Modern & Stylish
        2: {
            standard: [
                { icon: "fa-tv", name: "55\" Smart TV" },
                { icon: "fa-wifi", name: "Free WiFi" },
                { icon: "fa-wind", name: "Air Conditioning" },
                { icon: "fa-coffee", name: "Coffee Machine" },
                { icon: "fa-music", name: "Bluetooth Sound System" },
                { icon: "fa-tshirt", name: "Ironing Facilities" },
                { icon: "fa-bath", name: "Rain Shower" },
                { icon: "fa-bed", name: "Signature W Bed" }
            ],
            deluxe: [
                { icon: "fa-tv", name: "65\" Smart TV" },
                { icon: "fa-wifi", name: "High-Speed WiFi" },
                { icon: "fa-wind", name: "Air Conditioning" },
                { icon: "fa-coffee", name: "Nespresso Machine" },
                { icon: "fa-music", name: "Bluetooth Soundbar" },
                { icon: "fa-tshirt", name: "Ironing Facilities" },
                { icon: "fa-bath", name: "Rain Shower + Bathtub" },
                { icon: "fa-bed", name: "Signature W Bed" },
                { icon: "fa-city", name: "KLCC View" },
                { icon: "fa-cocktail", name: "Welcome Cocktail" }
            ]
        },
        
        // Four Seasons - Elegant & Classic
        3: {
            standard: [
                { icon: "fa-tv", name: "55\" Smart TV" },
                { icon: "fa-wifi", name: "Complimentary WiFi" },
                { icon: "fa-wind", name: "Climate Control" },
                { icon: "fa-coffee", name: "Coffee Machine" },
                { icon: "fa-tshirt", name: "Ironing Facilities" },
                { icon: "fa-bath", name: "Marble Bathroom" },
                { icon: "fa-bed", name: "Four Seasons Bed" }
            ],
            deluxe: [
                { icon: "fa-tv", name: "65\" Smart TV" },
                { icon: "fa-wifi", name: "Premium WiFi" },
                { icon: "fa-wind", name: "Climate Control" },
                { icon: "fa-coffee", name: "Nespresso Machine" },
                { icon: "fa-tshirt", name: "Ironing Facilities" },
                { icon: "fa-bath", name: "Marble Bathroom + Bathtub" },
                { icon: "fa-bed", name: "Four Seasons Signature Bed" },
                { icon: "fa-city", name: "City View" }
            ]
        },
        
        // The Ritz-Carlton - Classic Luxury
        4: {
            standard: [
                { icon: "fa-tv", name: "48\" TV" },
                { icon: "fa-wifi", name: "Free WiFi" },
                { icon: "fa-wind", name: "Air Conditioning" },
                { icon: "fa-coffee", name: "Coffee Maker" },
                { icon: "fa-tshirt", name: "Ironing Facilities" },
                { icon: "fa-bath", name: "Marble Bathroom" },
                { icon: "fa-bed", name: "Ritz-Carlton Bed" }
            ],
            deluxe: [
                { icon: "fa-tv", name: "55\" TV" },
                { icon: "fa-wifi", name: "High-Speed WiFi" },
                { icon: "fa-wind", name: "Air Conditioning" },
                { icon: "fa-coffee", name: "Nespresso Machine" },
                { icon: "fa-tshirt", name: "Ironing Facilities" },
                { icon: "fa-bath", name: "Marble Bathroom" },
                { icon: "fa-bed", name: "Ritz-Carlton Signature Bed" },
                { icon: "fa-city", name: "City View" }
            ]
        },
        
        // The Datai Langkawi - Rainforest Experience
        5: {
            standard: [
                { icon: "fa-tv", name: "TV" },
                { icon: "fa-wifi", name: "Free WiFi" },
                { icon: "fa-wind", name: "Air Conditioning" },
                { icon: "fa-leaf", name: "Rainforest View" },
                { icon: "fa-coffee", name: "Coffee Maker" },
                { icon: "fa-bath", name: "Outdoor Shower" },
                { icon: "fa-bed", name: "Canopy Bed" }
            ],
            deluxe: [
                { icon: "fa-tv", name: "55\" Smart TV" },
                { icon: "fa-wifi", name: "Free WiFi" },
                { icon: "fa-wind", name: "Air Conditioning" },
                { icon: "fa-leaf", name: "Rainforest View" },
                { icon: "fa-coffee", name: "Nespresso Machine" },
                { icon: "fa-bath", name: "Outdoor Rain Shower" },
                { icon: "fa-bed", name: "Four-Poster Bed" },
                { icon: "fa-binoculars", name: "Binoculars Provided" }
            ]
        },
        
        // Cameron Highlands Resort - Cool Climate
        6: {
            standard: [
                { icon: "fa-tv", name: "32\" TV" },
                { icon: "fa-wifi", name: "Free WiFi" },
                { icon: "fa-fire", name: "Fireplace" },
                { icon: "fa-coffee", name: "Coffee Maker" },
                { icon: "fa-tshirt", name: "Ironing Facilities" },
                { icon: "fa-bath", name: "Heated Bathroom" },
                { icon: "fa-bed", name: "Warm Bedding" }
            ],
            deluxe: [
                { icon: "fa-tv", name: "42\" TV" },
                { icon: "fa-wifi", name: "Free WiFi" },
                { icon: "fa-fire", name: "Fireplace" },
                { icon: "fa-coffee", name: "Nespresso Machine" },
                { icon: "fa-tshirt", name: "Ironing Facilities" },
                { icon: "fa-bath", name: "Heated Bathroom" },
                { icon: "fa-bed", name: "Premium Bedding" },
                { icon: "fa-mountain", name: "Mountain View" }
            ]
        },
        
        // Penang Marriott - Beachfront
        7: {
            standard: [
                { icon: "fa-tv", name: "50\" Smart TV" },
                { icon: "fa-wifi", name: "Free WiFi" },
                { icon: "fa-wind", name: "Air Conditioning" },
                { icon: "fa-coffee", name: "Coffee Maker" },
                { icon: "fa-tshirt", name: "Ironing Facilities" },
                { icon: "fa-bath", name: "Rain Shower" },
                { icon: "fa-bed", name: "Marriott Bed" }
            ],
            deluxe: [
                { icon: "fa-tv", name: "55\" Smart TV" },
                { icon: "fa-wifi", name: "High-Speed WiFi" },
                { icon: "fa-wind", name: "Air Conditioning" },
                { icon: "fa-coffee", name: "Nespresso Machine" },
                { icon: "fa-tshirt", name: "Ironing Facilities" },
                { icon: "fa-bath", name: "Rain Shower + Bathtub" },
                { icon: "fa-bed", name: "Marriott Signature Bed" },
                { icon: "fa-water", name: "Ocean View" }
            ]
        },
        
        // Shangri-La Johor - Family Friendly
        8: {
            standard: [
                { icon: "fa-tv", name: "42\" TV" },
                { icon: "fa-wifi", name: "Free WiFi" },
                { icon: "fa-wind", name: "Air Conditioning" },
                { icon: "fa-coffee", name: "Coffee Maker" },
                { icon: "fa-bath", name: "Bathroom" },
                { icon: "fa-bed", name: "Comfort Bed" }
            ],
            deluxe: [
                { icon: "fa-tv", name: "50\" TV" },
                { icon: "fa-wifi", name: "Free WiFi" },
                { icon: "fa-wind", name: "Air Conditioning" },
                { icon: "fa-coffee", name: "Coffee Maker" },
                { icon: "fa-bath", name: "Bathtub" },
                { icon: "fa-bed", name: "Shangri-La Bed" },
                { icon: "fa-child", name: "Kids Welcome Pack" }
            ]
        },
        
        // Banyan Tree KL - Rooftop Luxury
        9: {
            standard: [
                { icon: "fa-tv", name: "55\" Smart TV" },
                { icon: "fa-wifi", name: "Free WiFi" },
                { icon: "fa-wind", name: "Air Conditioning" },
                { icon: "fa-coffee", name: "Nespresso Machine" },
                { icon: "fa-bath", name: "Rain Shower" },
                { icon: "fa-bed", name: "Banyan Tree Bed" }
            ],
            deluxe: [
                { icon: "fa-tv", name: "65\" Smart TV" },
                { icon: "fa-wifi", name: "High-Speed WiFi" },
                { icon: "fa-wind", name: "Air Conditioning" },
                { icon: "fa-coffee", name: "Nespresso Machine" },
                { icon: "fa-bath", name: "Bathtub + Rain Shower" },
                { icon: "fa-bed", name: "Banyan Tree Signature Bed" },
                { icon: "fa-city", name: "Panoramic City View" }
            ]
        },
        
        // The Andaman Langkawi - Beach & Rainforest
        10: {
            standard: [
                { icon: "fa-tv", name: "48\" TV" },
                { icon: "fa-wifi", name: "Free WiFi" },
                { icon: "fa-wind", name: "Air Conditioning" },
                { icon: "fa-coffee", name: "Coffee Maker" },
                { icon: "fa-bath", name: "Rain Shower" },
                { icon: "fa-bed", name: "Comfort Bed" }
            ],
            deluxe: [
                { icon: "fa-tv", name: "55\" TV" },
                { icon: "fa-wifi", name: "Free WiFi" },
                { icon: "fa-wind", name: "Air Conditioning" },
                { icon: "fa-coffee", name: "Nespresso Machine" },
                { icon: "fa-bath", name: "Outdoor Shower" },
                { icon: "fa-bed", name: "Premium Bedding" },
                { icon: "fa-tree", name: "Rainforest View" }
            ]
        },
        
        // Straits Hotel Malacca - Heritage Style
        11: {
            standard: [
                { icon: "fa-tv", name: "32\" TV" },
                { icon: "fa-wifi", name: "Free WiFi" },
                { icon: "fa-wind", name: "Air Conditioning" },
                { icon: "fa-coffee", name: "Coffee Maker" },
                { icon: "fa-bath", name: "Bathroom" },
                { icon: "fa-bed", name: "Comfort Bed" }
            ],
            deluxe: [
                { icon: "fa-tv", name: "42\" TV" },
                { icon: "fa-wifi", name: "Free WiFi" },
                { icon: "fa-wind", name: "Air Conditioning" },
                { icon: "fa-coffee", name: "Coffee Maker" },
                { icon: "fa-bath", name: "Bathtub" },
                { icon: "fa-bed", name: "Premium Bedding" },
                { icon: "fa-landmark", name: "Heritage View" }
            ]
        },
        
        // The Zenith Hotel Kuantan - Ocean View
        12: {
            standard: [
                { icon: "fa-tv", name: "42\" TV" },
                { icon: "fa-wifi", name: "Free WiFi" },
                { icon: "fa-wind", name: "Air Conditioning" },
                { icon: "fa-coffee", name: "Coffee Maker" },
                { icon: "fa-bath", name: "Rain Shower" },
                { icon: "fa-bed", name: "Comfort Bed" }
            ],
            deluxe: [
                { icon: "fa-tv", name: "55\" Smart TV" },
                { icon: "fa-wifi", name: "Free WiFi" },
                { icon: "fa-wind", name: "Air Conditioning" },
                { icon: "fa-coffee", name: "Nespresso Machine" },
                { icon: "fa-bath", name: "Bathtub" },
                { icon: "fa-bed", name: "Premium Bedding" },
                { icon: "fa-water", name: "Ocean View" }
            ]
        }
    };
    
    // Get amenities for specific hotel and room type
    if (hotelSpecificAmenities[hotelId] && hotelSpecificAmenities[hotelId][roomTypeValue]) {
        return hotelSpecificAmenities[hotelId][roomTypeValue];
    }
    
    // Default amenities if not found
    return [
        { icon: "fa-tv", name: "Smart TV" },
        { icon: "fa-wifi", name: "Free WiFi" },
        { icon: "fa-wind", name: "Air Conditioning" },
        { icon: "fa-coffee", name: "Coffee Making Facilities" },
        { icon: "fa-bath", name: "Private Bathroom" },
        { icon: "fa-bed", name: "Comfortable Bedding" }
    ];
}

// Get room details table data with hotel-specific information
function getRoomDetailsTable(room, hotel) {
    const details = {
        "Hotel Name": hotel.name,
        "Room Type": room.type,
        "Room Size": getRoomSize(room.typeValue, hotel.id),
        "Bed Type": getBedType(room.typeValue, hotel.id),
        "View": getRoomView(room.typeValue, hotel),
        "Max Occupancy": getMaxOccupancy(room.typeValue),
        "Bathroom": getBathroomType(room.typeValue, hotel.id),
        "Entertainment": getEntertainment(room.typeValue, hotel.id),
        "Special Feature": getSpecialFeature(hotel.id, room.typeValue),
        "In-Room Dining": "24-Hour Room Service",
        "Price per Night": formatPrice(room.price)
    };
    return details;
}

// Helper functions with hotel-specific variations
function getRoomSize(roomType, hotelId) {
    const hotelSizes = {
        1: { standard: "42 m² / 452 sq ft", deluxe: "55 m² / 592 sq ft", suite: "95 m² / 1022 sq ft" },
        2: { standard: "38 m² / 409 sq ft", deluxe: "50 m² / 538 sq ft", suite: "85 m² / 915 sq ft" },
        3: { standard: "45 m² / 484 sq ft", deluxe: "60 m² / 646 sq ft", suite: "100 m² / 1076 sq ft" },
        5: { standard: "50 m² / 538 sq ft", deluxe: "70 m² / 753 sq ft", suite: "120 m² / 1292 sq ft" }
    };
    
    if (hotelSizes[hotelId] && hotelSizes[hotelId][roomType]) {
        return hotelSizes[hotelId][roomType];
    }
    
    const sizes = {
        standard: "28-35 m² / 300-377 sq ft",
        deluxe: "40-50 m² / 430-538 sq ft",
        suite: "65-85 m² / 700-915 sq ft",
        family: "50-65 m² / 538-700 sq ft",
        presidential: "120-200 m² / 1292-2153 sq ft"
    };
    return sizes[roomType] || "32-48 m² / 344-516 sq ft";
}

function getBedType(roomType, hotelId) {
    const hotelBeds = {
        1: { deluxe: "King Size Bed (200cm x 200cm) with Egyptian Cotton" },
        2: { deluxe: "Signature W Bed (200cm x 200cm)" },
        5: { deluxe: "Four-Poster Canopy Bed (200cm x 200cm)" }
    };
    
    if (hotelBeds[hotelId] && hotelBeds[hotelId][roomType]) {
        return hotelBeds[hotelId][roomType];
    }
    
    const beds = {
        standard: "Queen Bed (160cm x 200cm)",
        deluxe: "King Bed (180cm x 200cm)",
        suite: "King Bed (200cm x 200cm)",
        family: "Two Queen Beds (160cm x 200cm each)",
        presidential: "Emperor Bed (220cm x 220cm)"
    };
    return beds[roomType] || "King Bed (180cm x 200cm)";
}

function getRoomView(roomType, hotel) {
    const hotelViews = {
        1: "KLCC Park & City Skyline View",
        2: "Panoramic KL City View",
        3: "KLCC Twin Towers View",
        5: "Rainforest & Andaman Sea View",
        6: "Tea Plantation & Mountain View",
        7: "Penang Beach & Ocean View",
        9: "Bukit Bintang City Lights View",
        10: "Datai Bay & Rainforest View",
        12: "South China Sea View"
    };
    
    if (hotelViews[hotel.id] && roomType !== 'standard') {
        return hotelViews[hotel.id];
    }
    
    const views = {
        standard: "City View / Garden View",
        deluxe: "Premium City View",
        suite: "Panoramic View",
        family: "Family Suite View",
        presidential: "Ultimate Panoramic View"
    };
    return views[roomType] || `${hotel.location} View`;
}

function getMaxOccupancy(roomType) {
    const occupancy = {
        standard: "2 Adults",
        deluxe: "2 Adults + 1 Child",
        suite: "2 Adults + 2 Children",
        family: "4 Adults + 2 Children",
        presidential: "4 Adults + 2 Children"
    };
    return occupancy[roomType] || "2 Adults + 1 Child";
}

function getBathroomType(roomType, hotelId) {
    const hotelBathrooms = {
        1: { deluxe: "Italian Marble Bathroom with Rain Shower & Separate Bathtub" },
        2: { deluxe: "Sleek Modern Bathroom with Rain Shower & W Signature Amenities" },
        5: { deluxe: "Outdoor Rain Shower with Garden View" },
        7: { deluxe: "Ocean View Bathtub with Rain Shower" }
    };
    
    if (hotelBathrooms[hotelId] && hotelBathrooms[hotelId][roomType]) {
        return hotelBathrooms[hotelId][roomType];
    }
    
    const bathrooms = {
        standard: "Modern Bathroom with Shower",
        deluxe: "Marble Bathroom with Rain Shower",
        suite: "Luxury Bathroom with Separate Bathtub",
        family: "Family Bathroom with Dual Sinks",
        presidential: "Spa Bathroom with Jacuzzi"
    };
    return bathrooms[roomType] || "Premium Bathroom with Rain Shower";
}

function getEntertainment(roomType, hotelId) {
    const hotelEntertainment = {
        1: { deluxe: "65\" OLED TV with Netflix & Disney+ | Bose Sound System" },
        2: { deluxe: "65\" Smart TV with Streaming | Bluetooth Soundbar" },
        3: { deluxe: "65\" Smart TV | Premium Sound System" },
        9: { deluxe: "65\" Smart TV | B&O Sound System" }
    };
    
    if (hotelEntertainment[hotelId] && hotelEntertainment[hotelId][roomType]) {
        return hotelEntertainment[hotelId][roomType];
    }
    
    const entertainment = {
        standard: "42\" Smart TV with Cable Channels",
        deluxe: "55\" Smart TV with Streaming Services",
        suite: "65\" Smart TV with Sound System",
        family: "55\" Smart TV + Kids Channels",
        presidential: "75\" Smart TV with Premium Sound"
    };
    return entertainment[roomType] || "55\" Smart TV";
}

function getSpecialFeature(hotelId, roomType) {
    const specialFeatures = {
        1: "Access to MO Lounge & Complimentary Afternoon Tea",
        2: "Access to WET Deck Rooftop Pool & W Lounge",
        3: "Complimentary access to Four Seasons Wellness Centre",
        4: "Club Lounge Access with Evening Cocktails",
        5: "Rainforest Guided Walk & Nature Experience",
        6: "Complimentary Afternoon Tea & Scones",
        7: "Beach Access & Water Sports Discount",
        8: "Free Kids Club Access & Family Activities",
        9: "Access to Rooftop Infinity Pool & Sky Bar",
        10: "Rainforest Discovery Walk & Marine Center Access",
        11: "Heritage Walking Tour & Welcome Drink",
        12: "Free Access to Golf Course & Ocean Terrace"
    };
    
    if (roomType === 'suite' || roomType === 'presidential') {
        return specialFeatures[hotelId] || "Complimentary Mini Bar & Welcome Drink";
    }
    
    return "Standard amenities included";
}

// Get gallery images for specific hotel and room
function getRoomGallery(hotelId, roomType) {
    const hotelGalleries = {
        1: {
            workDesk: "https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=800&h=500&fit=crop",
            overview: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&h=500&fit=crop",
            bathroom: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&h=500&fit=crop"
        },
        5: {
            workDesk: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&h=500&fit=crop",
            overview: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=500&fit=crop",
            bathroom: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&h=500&fit=crop"
        },
        6: {
            workDesk: "https://picsum.photos/id/15/800/500",
            overview: "https://picsum.photos/id/104/800/500",
            bathroom: "https://picsum.photos/id/106/800/500"
        }
    };
    
    if (hotelGalleries[hotelId]) {
        return hotelGalleries[hotelId];
    }
    
    const defaultGalleries = {
        workDesk: "https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=800&h=500&fit=crop",
        overview: "https://images.unsplash.com/photo-1564501049412-61c2a3080a4b?w=800&h=500&fit=crop",
        bathroom: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&h=500&fit=crop"
    };
    return defaultGalleries;
}

// Initialize room page with data from URL parameters
function initRoomPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const hotelId = urlParams.get('hotelId');
    const roomId = urlParams.get('roomId');
    
    if (!hotelId || !roomId) {
        console.error('Missing hotelId or roomId parameters');
        showErrorMessage();
        return;
    }
    
    const roomData = getRoomDetails(hotelId, roomId);
    if (!roomData) {
        console.error('Room not found');
        showErrorMessage();
        return;
    }
    
    const { hotel, room } = roomData;
    updateRoomPage(hotel, room);
}

function showErrorMessage() {
    const roomTypeElement = document.querySelector('.room-type');
    if (roomTypeElement) {
        roomTypeElement.textContent = 'Room Not Found';
    }
}

// Update room.html with dynamic data
function updateRoomPage(hotel, room) {
    // Update room type
    const roomTypeElement = document.querySelector('.room-type');
    if (roomTypeElement) {
        roomTypeElement.textContent = room.type;
    }
    
    // Update suitable for text
    const suitableElement = document.querySelector('.suitable-for');
    if (suitableElement) {
        suitableElement.innerHTML = `<i class="fas fa-users"></i> Suitable for: ${getMaxOccupancy(room.typeValue)}`;
    }
    
    // Update main room image
    const mainImage = document.querySelector('.main-room-image img');
    if (mainImage && room.image) {
        mainImage.src = room.image;
        mainImage.alt = `${hotel.name} - ${room.type}`;
    }
    
    // Update amenities with hotel-specific amenities
    const amenitiesList = document.querySelector('.amenities-list');
    if (amenitiesList) {
        const amenities = getRoomAmenities(hotel.id, room.typeValue);
        amenitiesList.innerHTML = amenities.map(amenity => 
            `<span class="amenity-tag"><i class="fas ${amenity.icon}"></i> ${amenity.name}</span>`
        ).join('');
    }
    
    // Update gallery images
    const gallery = getRoomGallery(hotel.id, room.typeValue);
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    if (galleryItems.length >= 3) {
        const deskImg = galleryItems[0]?.querySelector('.gallery-image img');
        if (deskImg) deskImg.src = gallery.workDesk;
        
        const overviewImg = galleryItems[1]?.querySelector('.gallery-image img');
        if (overviewImg) overviewImg.src = gallery.overview;
        
        const bathroomImg = galleryItems[2]?.querySelector('.gallery-image img');
        if (bathroomImg) bathroomImg.src = gallery.bathroom;
    }
    
    // Update room details table
    const tableDetails = getRoomDetailsTable(room, hotel);
    const table = document.querySelector('.info-table');
    if (table) {
        table.innerHTML = Object.entries(tableDetails).map(([label, value]) => `
            <tr>
                <td class="detail-label">${label}</td>
                <td class="detail-value">${value}</td>
            </tr>
        `).join('');
    }
    
    // Update pay button price
    const payButton = document.querySelector('.pay-now-btn');
    if (payButton) {
        payButton.innerHTML = `<i class="fas fa-credit-card"></i> PAY NOW - ${formatPrice(room.price)}`;
    }
    
    // Update page title
    document.title = `LuxeStay | ${room.type} at ${hotel.name}`;
}