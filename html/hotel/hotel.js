// /js/hotels.js
// =====================================================
// COMPLETE HOTEL DATABASE WITH 12 HOTELS
// =====================================================

const HOTELS_DATABASE = {
  1: {
    id: 1,
    name: "Mandarin Oriental",
    rating: 4.9,
    reviewCount: 2847,
    reviewText: "Exceptional",
    location: "Kuala Lumpur City Centre",
    fullAddress: "Mandarin Oriental, Kuala Lumpur City Centre, 50088 Kuala Lumpur, Malaysia",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.767887130811!2d101.70937487567602!3d3.1557980531102965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc37d40feb449f%3A0x5bb866cf36359c4a!2sMandarin%20Oriental%2C%20Kuala%20Lumpur!5e0!3m2!1sen!2smy!4v1774280551064!5m2!1sen!2smy",
    mapCoords: "3.1558, 101.7124",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&h=500&fit=crop",
    amenities: ["Infinity Pool", "Free WiFi"],
    facilities: ["Infinity Pool", "Free WiFi", "Fitness Centre", "6 Restaurants", "Free Parking", "24hr Service", "Family Friendly", "Luxury Spa"],
    rooms: [
      { id: 101, type: "Standard Room", typeValue: "standard", description: "Comfortable room with city view, queen bed", price: 750, image: "https://images.unsplash.com/photo-1564501049412-61c2a3080a4b?w=600&h=400&fit=crop" },
      { id: 102, type: "Deluxe King Room", typeValue: "deluxe", description: "Spacious room with city view, king bed, marble bathroom", price: 950, image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600&h=400&fit=crop" },
      { id: 103, type: "Premier Suite", typeValue: "suite", description: "Luxury suite with separate living area, KLCC view", price: 1850, image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&h=400&fit=crop" },
      { id: 104, type: "Family Room", typeValue: "family", description: "Spacious family room with two queen beds, city view", price: 1350, image: "https://images.unsplash.com/photo-1564501049412-61c2a3080a4b?w=600&h=400&fit=crop" },
      { id: 105, type: "Presidential Suite", typeValue: "presidential", description: "Ultimate luxury with panoramic city views, butler service", price: 4500, image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&h=400&fit=crop" }
    ]
  },
  2: {
    id: 2,
    name: "W Kuala Lumpur",
    rating: 4.7,
    reviewCount: 2156,
    reviewText: "Very Good",
    location: "Jalan Ampang, KLCC",
    fullAddress: "W Kuala Lumpur, 121 Jalan Ampang, 50450 Kuala Lumpur, Malaysia",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.767887130811!2d101.70937487567602!3d3.1557980531102965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc37d40feb449f%3A0x5bb866cf36359c4a!2sW%20Kuala%20Lumpur!5e0!3m2!1sen!2smy!4v1774280551064!5m2!1sen!2smy",
    mapCoords: "3.1585, 101.7145",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=500&fit=crop",
    amenities: ["Rooftop Bar", "24hr Service"],
    facilities: ["Rooftop Bar", "24hr Service", "Infinity Pool", "Fitness Centre", "Spa", "Free WiFi", "Night Club", "Concierge"],
    rooms: [
      { id: 201, type: "Wonderful Room", typeValue: "standard", description: "Stylish room with city view, king bed", price: 820, image: "https://images.unsplash.com/photo-1564501049412-61c2a3080a4b?w=600&h=400&fit=crop" },
      { id: 202, type: "Spectacular Room", typeValue: "deluxe", description: "Spacious room with KLCC view, king bed", price: 1050, image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600&h=400&fit=crop" },
      { id: 203, type: "Marvellous Suite", typeValue: "suite", description: "Luxury suite with separate living area, KLCC view", price: 1650, image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&h=400&fit=crop" },
      { id: 204, type: "Family Studio", typeValue: "family", description: "Spacious family room with two queen beds", price: 1450, image: "https://images.unsplash.com/photo-1564501049412-61c2a3080a4b?w=600&h=400&fit=crop" }
    ]
  },
  3: {
    id: 3,
    name: "Four Seasons Kuala Lumpur",
    rating: 4.8,
    reviewCount: 1950,
    reviewText: "Exceptional",
    location: "KLCC, Kuala Lumpur",
    fullAddress: "Four Seasons Kuala Lumpur, 145 Jalan Ampang, 50450 Kuala Lumpur, Malaysia",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.767887130811!2d101.70937487567602!3d3.1557980531102965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc37d40feb449f%3A0x5bb866cf36359c4a!2sFour%20Seasons%20Kuala%20Lumpur!5e0!3m2!1sen!2smy!4v1774280551064!5m2!1sen!2smy",
    mapCoords: "3.1575, 101.7135",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=500&fit=crop",
    amenities: ["5 Restaurants", "Wellness Centre"],
    facilities: ["5 Restaurants", "Wellness Centre", "Infinity Pool", "Spa", "Fitness Centre", "Free WiFi", "Business Centre", "Kids Club"],
    rooms: [
      { id: 301, type: "Standard Room", typeValue: "standard", description: "Elegant room with city view", price: 880, image: "https://images.unsplash.com/photo-1564501049412-61c2a3080a4b?w=600&h=400&fit=crop" },
      { id: 302, type: "Deluxe Room", typeValue: "deluxe", description: "Spacious room with KLCC view, king bed", price: 1100, image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600&h=400&fit=crop" },
      { id: 303, type: "Executive Suite", typeValue: "suite", description: "Spacious suite with separate living area", price: 2200, image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&h=400&fit=crop" },
      { id: 304, type: "Family Suite", typeValue: "family", description: "Large family suite with two bedrooms", price: 1850, image: "https://images.unsplash.com/photo-1564501049412-61c2a3080a4b?w=600&h=400&fit=crop" },
      { id: 305, type: "Presidential Suite", typeValue: "presidential", description: "Ultimate luxury suite with panoramic views", price: 5800, image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&h=400&fit=crop" }
    ]
  },
  4: {
    id: 4,
    name: "The Ritz-Carlton",
    rating: 4.8,
    reviewCount: 2156,
    reviewText: "Exceptional",
    location: "Bukit Bintang, KL",
    fullAddress: "The Ritz-Carlton, Kuala Lumpur, 168 Jalan Imbi, 55100 Kuala Lumpur, Malaysia",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.87654321!2d101.7123!3d3.1432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc37c123456789%3A0x123456789abcdef!2sThe%20Ritz-Carlton%2C%20Kuala%20Lumpur!5e0!3m2!1sen!2smy!4v1234567890!5m2!1sen!2smy",
    mapCoords: "3.1432, 101.7123",
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&h=500&fit=crop",
    amenities: ["Fitness Centre", "Outdoor Pool"],
    facilities: ["Fitness Centre", "Outdoor Pool", "Spa", "Fine Dining", "24hr Service", "Business Centre", "Concierge", "Free WiFi"],
    rooms: [
      { id: 401, type: "Standard Room", typeValue: "standard", description: "Comfortable room with city view", price: 550, image: "https://images.unsplash.com/photo-1564501049412-61c2a3080a4b?w=600&h=400&fit=crop" },
      { id: 402, type: "Deluxe King Room", typeValue: "deluxe", description: "Elegant room with city view, king bed, marble bathroom", price: 750, image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600&h=400&fit=crop" },
      { id: 403, type: "Club Suite", typeValue: "suite", description: "Luxury suite with club lounge access, separate living area", price: 1350, image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&h=400&fit=crop" },
      { id: 404, type: "Family Room", typeValue: "family", description: "Spacious family room with two queen beds", price: 1100, image: "https://images.unsplash.com/photo-1564501049412-61c2a3080a4b?w=600&h=400&fit=crop" },
      { id: 405, type: "Presidential Suite", typeValue: "presidential", description: "Ultimate luxury with panoramic city views, butler service", price: 4500, image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&h=400&fit=crop" }
    ]
  },
  5: {
    id: 5,
    name: "The Datai Langkawi",
    rating: 4.9,
    reviewCount: 2847,
    reviewText: "Exceptional",
    location: "Langkawi, Kedah",
    fullAddress: "The Datai Langkawi, Jalan Teluk Datai, 07000 Langkawi, Kedah, Malaysia",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.123456789!2d99.6789!3d6.4567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304c7a123456789%3A0x123456789abcdef!2sThe%20Datai%20Langkawi!5e0!3m2!1sen!2smy!4v1234567890!5m2!1sen!2smy",
    mapCoords: "6.4567, 99.6789",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&h=500&fit=crop",
    amenities: ["Private Beach", "Free WiFi"],
    facilities: ["Private Beach", "Free WiFi", "Rainforest Experience", "Spa", "Infinity Pool", "Fitness Centre", "Fine Dining", "Kids Club"],
    rooms: [
      { id: 501, type: "Standard Room", typeValue: "standard", description: "Comfortable room with garden view", price: 690, image: "https://images.unsplash.com/photo-1564501049412-61c2a3080a4b?w=600&h=400&fit=crop" },
      { id: 502, type: "Deluxe Rainforest Room", typeValue: "deluxe", description: "Spacious room with rainforest view, king bed, private balcony", price: 890, image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600&h=400&fit=crop" },
      { id: 503, type: "Datai Suite", typeValue: "suite", description: "Luxury suite with ocean view, separate living area, private pool", price: 1850, image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&h=400&fit=crop" },
      { id: 504, type: "Family Rainforest Room", typeValue: "family", description: "Spacious family room with two bedrooms, rainforest view", price: 1450, image: "https://images.unsplash.com/photo-1564501049412-61c2a3080a4b?w=600&h=400&fit=crop" },
      { id: 505, type: "Beach Villa", typeValue: "presidential", description: "Private villa steps from the beach, plunge pool, butler service", price: 3200, image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&h=400&fit=crop" }
    ]
  },
  6: {
    id: 6,
    name: "Cameron Highlands Resort",
    rating: 4.7,
    reviewCount: 1823,
    reviewText: "Very Good",
    location: "Cameron Highlands, Pahang",
    fullAddress: "Cameron Highlands Resort, By The Golf Course, 39000 Tanah Rata, Cameron Highlands, Pahang, Malaysia",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.987654321!2d101.3678!3d4.4712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31ca3c123456789%3A0x123456789abcdef!2sCameron%20Highlands%20Resort!5e0!3m2!1sen!2smy!4v1234567890!5m2!1sen!2smy",
    mapCoords: "4.4712, 101.3678",
    image: "https://picsum.photos/id/15/800/500",
    amenities: ["Tea Plantation View", "Cool Climate"],
    facilities: ["Tea Plantation View", "Cool Climate", "Spa", "Fine Dining", "Golf Course", "Garden Walk", "Afternoon Tea", "Free WiFi"],
    rooms: [
      { id: 601, type: "Standard Room", typeValue: "standard", description: "Comfortable room with garden view", price: 380, image: "https://images.unsplash.com/photo-1564501049412-61c2a3080a4b?w=600&h=400&fit=crop" },
      { id: 602, type: "Deluxe Room", typeValue: "deluxe", description: "Cozy room with garden view, king bed, fireplace", price: 520, image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600&h=400&fit=crop" },
      { id: 603, type: "Family Suite", typeValue: "family", description: "Spacious suite with valley view, separate living area, two bedrooms", price: 880, image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&h=400&fit=crop" }
    ]
  },
  7: {
    id: 7,
    name: "Penang Marriott Hotel",
    rating: 4.6,
    reviewCount: 1560,
    reviewText: "Very Good",
    location: "George Town, Penang",
    fullAddress: "Penang Marriott Hotel, Gurney Drive, 10250 George Town, Penang, Malaysia",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.123456789!2d100.3123!3d5.4321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304ac3a123456789%3A0x123456789abcdef!2sPenang%20Marriott%20Hotel!5e0!3m2!1sen!2smy!4v1234567890!5m2!1sen!2smy",
    mapCoords: "5.4321, 100.3123",
    image: "https://images.unsplash.com/photo-1584132967330-5f6c6b7b0d0b?w=800&h=500&fit=crop",
    amenities: ["Beachfront", "Infinity Pool"],
    facilities: ["Beachfront", "Infinity Pool", "Spa", "Fitness Centre", "Multiple Restaurants", "Kids Club", "Free WiFi", "Parking"],
    rooms: [
      { id: 701, type: "Standard Room", typeValue: "standard", description: "Comfortable room with partial sea view", price: 550, image: "https://images.unsplash.com/photo-1564501049412-61c2a3080a4b?w=600&h=400&fit=crop" },
      { id: 702, type: "Deluxe Ocean View", typeValue: "deluxe", description: "Spacious room with full ocean view, king bed", price: 680, image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600&h=400&fit=crop" },
      { id: 703, type: "Executive Suite", typeValue: "suite", description: "Luxury suite with sea view, separate living area", price: 1200, image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&h=400&fit=crop" },
      { id: 704, type: "Family Room", typeValue: "family", description: "Spacious family room with two queen beds", price: 950, image: "https://images.unsplash.com/photo-1564501049412-61c2a3080a4b?w=600&h=400&fit=crop" }
    ]
  },
  8: {
    id: 8,
    name: "Shangri-La Johor",
    rating: 4.5,
    reviewCount: 1250,
    reviewText: "Good",
    location: "Johor Bahru, Johor",
    fullAddress: "Shangri-La Johor, Jalan Persiaran, 81200 Johor Bahru, Johor, Malaysia",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.123456789!2d103.7123!3d1.5321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da6a123456789%3A0x123456789abcdef!2sShangri-La%20Johor!5e0!3m2!1sen!2smy!4v1234567890!5m2!1sen!2smy",
    mapCoords: "1.5321, 103.7123",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=500&fit=crop",
    amenities: ["Golf Course", "Spa", "Kids Club"],
    facilities: ["Golf Course", "Spa", "Kids Club", "Swimming Pool", "Fitness Centre", "Multiple Dining", "Free WiFi", "Business Centre"],
    rooms: [
      { id: 801, type: "Standard Room", typeValue: "standard", description: "Comfortable room with garden view", price: 380, image: "https://images.unsplash.com/photo-1564501049412-61c2a3080a4b?w=600&h=400&fit=crop" },
      { id: 802, type: "Deluxe Room", typeValue: "deluxe", description: "Spacious room with pool view, king bed", price: 450, image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600&h=400&fit=crop" },
      { id: 803, type: "Club Suite", typeValue: "suite", description: "Luxury suite with club lounge access", price: 750, image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&h=400&fit=crop" },
      { id: 804, type: "Family Room", typeValue: "family", description: "Spacious family room with two queen beds", price: 650, image: "https://images.unsplash.com/photo-1564501049412-61c2a3080a4b?w=600&h=400&fit=crop" }
    ]
  },
  9: {
    id: 9,
    name: "Banyan Tree Kuala Lumpur",
    rating: 4.8,
    reviewCount: 1890,
    reviewText: "Exceptional",
    location: "Bukit Bintang, KL",
    fullAddress: "Banyan Tree Kuala Lumpur, 2 Jalan Conlay, 50450 Kuala Lumpur, Malaysia",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.767887130811!2d101.7123!3d3.1489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc37c123456789%3A0x123456789abcdef!2sBanyan%20Tree%20Kuala%20Lumpur!5e0!3m2!1sen!2smy!4v1234567890!5m2!1sen!2smy",
    mapCoords: "3.1489, 101.7123",
    image: "https://images.unsplash.com/photo-1584132915807-fd1f5fbc078f?w=800&h=500&fit=crop",
    amenities: ["Rooftop Pool", "Sky Bar"],
    facilities: ["Rooftop Pool", "Sky Bar", "Spa", "Fitness Centre", "Fine Dining", "Concierge", "Free WiFi", "Valet Parking"],
    rooms: [
      { id: 901, type: "Sanctuary Room", typeValue: "standard", description: "Elegant room with city view", price: 850, image: "https://images.unsplash.com/photo-1564501049412-61c2a3080a4b?w=600&h=400&fit=crop" },
      { id: 902, type: "Deluxe Sanctuary", typeValue: "deluxe", description: "Spacious room with panoramic city view", price: 980, image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600&h=400&fit=crop" },
      { id: 903, type: "Signature Suite", typeValue: "suite", description: "Luxury suite with separate living area", price: 1650, image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&h=400&fit=crop" }
    ]
  },
  10: {
    id: 10,
    name: "The Andaman Langkawi",
    rating: 4.7,
    reviewCount: 1560,
    reviewText: "Very Good",
    location: "Langkawi, Kedah",
    fullAddress: "The Andaman Langkawi, Jalan Teluk Datai, 07000 Langkawi, Kedah, Malaysia",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.123456789!2d99.6789!3d6.4567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304c7a123456789%3A0x123456789abcdef!2sThe%20Andaman%20Langkawi!5e0!3m2!1sen!2smy!4v1234567890!5m2!1sen!2smy",
    mapCoords: "6.4567, 99.6789",
    image: "https://images.unsplash.com/photo-1584132967330-5f6c6b7b0d0b?w=800&h=500&fit=crop",
    amenities: ["Private Beach", "Rainforest Experience"],
    facilities: ["Private Beach", "Rainforest Experience", "Spa", "Infinity Pool", "Fitness Centre", "Fine Dining", "Kids Club", "Free WiFi"],
    rooms: [
      { id: 1001, type: "Standard Room", typeValue: "standard", description: "Comfortable room with garden view", price: 620, image: "https://images.unsplash.com/photo-1564501049412-61c2a3080a4b?w=600&h=400&fit=crop" },
      { id: 1002, type: "Deluxe Rainforest", typeValue: "deluxe", description: "Spacious room with rainforest view", price: 760, image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600&h=400&fit=crop" },
      { id: 1003, type: "Ocean Suite", typeValue: "suite", description: "Luxury suite with ocean view, private balcony", price: 1350, image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&h=400&fit=crop" },
      { id: 1004, type: "Family Villa", typeValue: "family", description: "Spacious villa with two bedrooms", price: 1950, image: "https://images.unsplash.com/photo-1564501049412-61c2a3080a4b?w=600&h=400&fit=crop" }
    ]
  },
  11: {
    id: 11,
    name: "Straits Hotel & Suites",
    rating: 4.4,
    reviewCount: 980,
    reviewText: "Good",
    location: "Malacca City, Malacca",
    fullAddress: "Straits Hotel & Suites, Jalan Bendahara, 75100 Malacca City, Malacca, Malaysia",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3986.123456789!2d102.2432!3d2.1921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d1e5a123456789%3A0x123456789abcdef!2sStraits%20Hotel%20%26%20Suites!5e0!3m2!1sen!2smy!4v1234567890!5m2!1sen!2smy",
    mapCoords: "2.1921, 102.2432",
    image: "https://images.unsplash.com/photo-1564501049412-61c2a3080a4b?w=800&h=500&fit=crop",
    amenities: ["Heritage Building", "Rooftop Bar"],
    facilities: ["Heritage Building", "Rooftop Bar", "Swimming Pool", "Restaurant", "Free WiFi", "24hr Service", "Parking"],
    rooms: [
      { id: 1101, type: "Standard Room", typeValue: "standard", description: "Comfortable room with heritage view", price: 320, image: "https://images.unsplash.com/photo-1564501049412-61c2a3080a4b?w=600&h=400&fit=crop" },
      { id: 1102, type: "Deluxe Suite", typeValue: "deluxe", description: "Spacious suite with city view", price: 380, image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600&h=400&fit=crop" },
      { id: 1103, type: "Family Suite", typeValue: "family", description: "Large suite with two bedrooms", price: 550, image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&h=400&fit=crop" }
    ]
  },
  12: {
    id: 12,
    name: "The Zenith Hotel",
    rating: 4.5,
    reviewCount: 1120,
    reviewText: "Good",
    location: "Kuantan, Pahang",
    fullAddress: "The Zenith Hotel, Jalan Putra Square, 25000 Kuantan, Pahang, Malaysia",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.123456789!2d103.3123!3d3.8234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31c9b5a123456789%3A0x123456789abcdef!2sThe%20Zenith%20Hotel!5e0!3m2!1sen!2smy!4v1234567890!5m2!1sen!2smy",
    mapCoords: "3.8234, 103.3123",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=500&fit=crop",
    amenities: ["Ocean View", "Infinity Pool"],
    facilities: ["Ocean View", "Infinity Pool", "Fitness Centre", "Restaurant", "Free WiFi", "Parking", "Business Centre"],
    rooms: [
      { id: 1201, type: "Standard Room", typeValue: "standard", description: "Comfortable room with city view", price: 380, image: "https://images.unsplash.com/photo-1564501049412-61c2a3080a4b?w=600&h=400&fit=crop" },
      { id: 1202, type: "Deluxe Ocean View", typeValue: "deluxe", description: "Spacious room with ocean view", price: 420, image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600&h=400&fit=crop" },
      { id: 1203, type: "Executive Suite", typeValue: "suite", description: "Luxury suite with panoramic ocean view", price: 780, image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&h=400&fit=crop" },
      { id: 1204, type: "Family Room", typeValue: "family", description: "Spacious family room with two queen beds", price: 620, image: "https://images.unsplash.com/photo-1564501049412-61c2a3080a4b?w=600&h=400&fit=crop" }
    ]
  }
};