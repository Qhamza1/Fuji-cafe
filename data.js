// بيانات كافيه فوجي - عدّل الأسعار من هنا
const CAFE = {
  "name": "Fuji Café",
  "name_ar": "فوجي كافيه",
  "tagline": "Coffee and Desserts — Uniquely on Top",
  "about_ar": "فوجي... ركنك الهادي وسط كل الزحمة ✨ مكان ياخدك من دوشة اليوم لراحة تستاهلها.",
  "currency": "EGP",
  "phone": "01070717547",
  "whatsapp": "+201554563535",
  "instagram_handle": "fuji.egp",
  "facebook_page": "FUJI CAFÉ",
  "maps_short_link": "maps.app.goo.gl/1lw9izwghhveoffx9 (تأكد من الحروف من الصفحة نفسها)",
  "address_ar": "شارع الجيش، أمام صنعاء بجوار بي تيك، كفر الشيخ",
  "address_maps": "4W4W+2HR, Mubarak Rd, Kafr Abu Tabl, Kafr Al Sheikh First, Kafr El-Sheikh Governorate 6860420",
  "city": "Kafr El-Sheikh, Egypt",
  "facebook_rating": "84% recommend (5 reviews)",
  "hours": {
    "Saturday": "10:00 AM - 11:00 PM",
    "Sunday": "10:00 AM - 11:00 PM",
    "Monday": "10:00 AM - 11:00 PM",
    "Tuesday": "10:00 AM - 11:00 PM",
    "Wednesday": "10:00 AM - 11:00 PM",
    "Thursday": "10:00 AM - 12:00 AM",
    "Friday": "10:00 AM - 12:00 AM"
  },
  "brand": {
    "colors": {
      "brown": "#7A5C4A",
      "cream": "#FCF0E3"
    },
    "theme": "Japanese / Mount Fuji watercolor, cherry blossom, pagoda",
    "fonts_seen": "serif (Libre Baskerville style) + bold sans headings (Poppins style)"
  },
  "website": "none found",
  "email": "fujicafeofficial@gmail.com",
  "developer": {
    "name": "HAMZA",
    "instagram": "https://www.instagram.com/q_7vmza",
    "whatsapp": "+201066350362"
  },
  "social": {
    "facebook": "https://www.facebook.com/share/19Lj7FJRhT/",
    "instagram": "https://www.instagram.com/fuji.egp?igsh=N2VmbGJiNHpyOTh2",
    "tiktok": "https://www.tiktok.com/@fuji.egp?_r=1&_t=ZS-9B3aFHuovly"
  },
  "payment": {
    "instapay": "https://ipn.eg/C/Q/fujikfs/instapay?ISIGN=23052603MEYCIQCUG0Lr7bIEZLzwf8tHclBrLTLUCSSVVfDTJRdqa2hBngIhANJygiFfDXdCuoXNKs1B2t3dNxhlvXwAA0ptQwMvMKt0",
    "vodafone_cash": "https://vf.eg/vfcash?id=mt&qrId=iaxhO8&qrString=6f296faec9e38ff8c4911efc55e9810b7a35fb3911003c8bb4db9a8075475666"
  }
};

const MENU = [
 {
  "category": "Sweet Chimney",
  "columns": [
   "Cone",
   "Bites"
  ],
  "items": [
   {
    "name": "Chimney",
    "options": "Dark chocolate / Nutella / Lotus / Oreo / Red velvet",
    "prices": [
     120,
     130
    ]
   },
   {
    "name": "Chimney Cinnamon",
    "prices": [
     115,
     120
    ]
   },
   {
    "name": "Chimney Snickers",
    "prices": [
     135,
     140
    ]
   },
   {
    "name": "Chimney Pistachio",
    "prices": [
     160,
     170
    ]
   }
  ]
 },
 {
  "category": "Savorey Chimney",
  "items": [
   {
    "name": "Chimney Turkey - Salami",
    "price": 140
   },
   {
    "name": "Chimney Salami & Turkey",
    "price": 155
   },
   {
    "name": "Chimney Mix Cheese",
    "price": 155
   },
   {
    "name": "Chimney Strips",
    "price": 165
   },
   {
    "name": "Chimney Mini Burger",
    "price": 170
   }
  ]
 },
 {
  "category": "Waffle Square",
  "items": [
   {
    "name": "Waffle",
    "options": "Caramel - White - Dark",
    "price": 115
   },
   {
    "name": "Waffle",
    "options": "Nutella - Lotus - Oreo - Kinder",
    "price": 120
   },
   {
    "name": "Waffle Pistachio",
    "price": 140
   },
   {
    "name": "Waffle Mix Fruit",
    "price": 135
   },
   {
    "name": "Waffle Four-Season",
    "price": 150
   }
  ]
 },
 {
  "category": "Mini Pancakes",
  "columns": [
   "PC 12",
   "PC 24"
  ],
  "items": [
   {
    "name": "Mini Pancakes",
    "options": "Caramel - White - Dark",
    "prices": [
     110,
     190
    ]
   },
   {
    "name": "Mini Pancakes",
    "options": "Nutella - Lotus - Oreo - Kinder",
    "prices": [
     120,
     210
    ]
   },
   {
    "name": "Mini Pancakes Pistachio",
    "prices": [
     145,
     255
    ]
   },
   {
    "name": "Mini Pancakes Mix Sauce",
    "prices": [
     125,
     230
    ]
   },
   {
    "name": "Make your Mini Pancakes",
    "prices": [
     125,
     230
    ]
   }
  ]
 },
 {
  "category": "Taiyaki",
  "items": [
   {
    "name": "Taiyaki",
    "options": "Dark - Nutella - Lotus - Oreo - Red velvet",
    "price": 125
   },
   {
    "name": "Taiyaki Pistachio",
    "price": 150
   },
   {
    "name": "Baby Taiyaki",
    "price": 165
   }
  ]
 },
 {
  "category": "Tacos",
  "items": [
   {
    "name": "Nutella",
    "price": 110
   },
   {
    "name": "Nuts",
    "price": 110
   },
   {
    "name": "Kinder",
    "price": 125
   },
   {
    "name": "Strawberry",
    "price": 105
   },
   {
    "name": "Lotus",
    "price": 115
   },
   {
    "name": "Raffaello Sandwich",
    "price": 120
   },
   {
    "name": "Oreo",
    "price": 105
   },
   {
    "name": "Pistachio Sandwich",
    "price": 130
   }
  ]
 },
 {
  "category": "Dragon Balls",
  "note": "PC 10",
  "items": [
   {
    "name": "Dragon Balls",
    "options": "Dark - White - Nutella - Lotus",
    "price": 130
   },
   {
    "name": "Dragon Balls Kinder",
    "price": 140
   },
   {
    "name": "Dragon Balls Pistachio",
    "price": 170
   }
  ]
 },
 {
  "category": "Desserts",
  "items": [
   {
    "name": "Chocolate Cake",
    "price": 120
   },
   {
    "name": "Molten Cake",
    "price": 125
   },
   {
    "name": "Brownies",
    "price": 120
   },
   {
    "name": "Ice Mega",
    "price": 130
   },
   {
    "name": "Red Velvet",
    "price": 130
   },
   {
    "name": "Tiramisu Cake",
    "price": 125
   },
   {
    "name": "Cinnamon",
    "price": 130
   },
   {
    "name": "Magic Cake",
    "price": 125
   },
   {
    "name": "Matilda Cake",
    "price": 130
   },
   {
    "name": "Cheesecake",
    "options": "Dark - White Chocolate - Nutella - Lotus",
    "price": 130
   },
   {
    "name": "Cheesecake Pistachio",
    "price": 140
   },
   {
    "name": "San Sebastian",
    "options": "Strawberry - Blueberry - Caramel - Dark - White Chocolate - Nutella - Lotus",
    "price": 130
   },
   {
    "name": "San Sebastian Kinder",
    "price": 135
   },
   {
    "name": "San Sebastian Pistachio",
    "price": 145
   }
  ]
 },
 {
  "category": "Mochi",
  "items": [
   {
    "name": "Mochi",
    "options": "Mango - Strawberry - Lemon - Chocolate - Passion Fruit - Gum - Vanilla - Cotton Candy",
    "price": 80
   },
   {
    "name": "Mochi",
    "options": "Pistachio - Polo",
    "price": 80
   }
  ]
 },
 {
  "category": "Sundae",
  "items": [
   {
    "name": "Sundae Classic",
    "price": 65
   },
   {
    "name": "Sundae",
    "options": "Strawberry - Blueberry - Nutella - Lotus",
    "price": 75
   },
   {
    "name": "Sundae",
    "options": "Pistachio - Espresso",
    "price": 95
   }
  ]
 },
 {
  "category": "Milkshake",
  "items": [
   {
    "name": "Nutella",
    "price": 120
   },
   {
    "name": "Oreo",
    "price": 120
   },
   {
    "name": "Lotus",
    "price": 120
   },
   {
    "name": "Kinder",
    "price": 120
   },
   {
    "name": "Snickers",
    "price": 120
   },
   {
    "name": "Strawberry",
    "price": 115
   },
   {
    "name": "Blueberry",
    "price": 115
   },
   {
    "name": "Mixed Berry",
    "price": 120
   },
   {
    "name": "Mango",
    "price": 115
   },
   {
    "name": "Mango Peach",
    "price": 120
   },
   {
    "name": "Mango Passion",
    "price": 120
   },
   {
    "name": "Kit Kat",
    "price": 130
   },
   {
    "name": "Galaxy",
    "price": 130
   },
   {
    "name": "Pistachio",
    "price": 140
   }
  ]
 },
 {
  "category": "Frappe",
  "items": [
   {
    "name": "Frappe",
    "options": "Vanilla - Chocolate - Caramel - Tiramisu - Cinnamon - Coffee - Blueberry - Passion - Hazelnut - Mango - Lotus - Kinder",
    "price": 115
   },
   {
    "name": "Frappe Pistachio",
    "price": 140
   }
  ]
 },
 {
  "category": "Frappuccino",
  "items": [
   {
    "name": "Frappuccino",
    "options": "Vanilla - Chocolate - Caramel - Tiramisu - Cinnamon - Coffee - Blueberry - Passion - Hazelnut - Mango - Lotus - Kinder",
    "price": 130
   },
   {
    "name": "Frappuccino Pistachio",
    "price": 150
   }
  ]
 },
 {
  "category": "Smoothie",
  "items": [
   {
    "name": "Mango",
    "price": 90
   },
   {
    "name": "Strawberry",
    "price": 90
   },
   {
    "name": "Lemon with mint",
    "price": 90
   },
   {
    "name": "Watermelon",
    "price": 90
   },
   {
    "name": "Peach",
    "price": 90
   },
   {
    "name": "Passion Fruit",
    "price": 90
   },
   {
    "name": "Red bull cola",
    "price": 110,
    "badge": "New Item"
   },
   {
    "name": "Blueberry",
    "price": 90
   },
   {
    "name": "Mixed Berry",
    "price": 100
   },
   {
    "name": "Mango Peach",
    "price": 100
   },
   {
    "name": "Mango Passion",
    "price": 100
   },
   {
    "name": "Grenadine",
    "options": "Mango - Passion Fruit - Blueberry - Strawberry - Mixed Berry",
    "price": 115
   }
  ]
 },
 {
  "category": "Soda Boba",
  "items": [
   {
    "name": "Blueberry Mojito",
    "price": 115
   },
   {
    "name": "Strawberry Mojito",
    "price": 115
   },
   {
    "name": "Passion Fruit Mojito",
    "price": 115
   },
   {
    "name": "Lemon With Mint Mojito",
    "price": 120
   },
   {
    "name": "Mixed Berry Mojito",
    "price": 120
   },
   {
    "name": "Sunshine",
    "price": 120
   },
   {
    "name": "Sunrise",
    "price": 120
   },
   {
    "name": "Sun Blue",
    "price": 120
   },
   {
    "name": "Cherry Cola",
    "price": 120
   },
   {
    "name": "Fun on Beach",
    "price": 125
   }
  ]
 },
 {
  "category": "Fresh Juice",
  "items": [
   {
    "name": "Mango",
    "price": 80
   },
   {
    "name": "Strawberry",
    "price": 80
   },
   {
    "name": "Guava",
    "price": 80
   },
   {
    "name": "Lemon",
    "price": 70
   },
   {
    "name": "Lemon With Mint",
    "price": 75
   },
   {
    "name": "Watermelon",
    "price": 75
   },
   {
    "name": "Guava Milk",
    "price": 85
   },
   {
    "name": "Strawberry Milk",
    "price": 85
   },
   {
    "name": "Banana Caramel",
    "price": 85
   },
   {
    "name": "Florida",
    "options": "Mango + Strawberry",
    "price": 90
   },
   {
    "name": "Costarica",
    "options": "Strawberry + Banana",
    "price": 90
   },
   {
    "name": "Vitamin C",
    "options": "Guava + Lemon & Mint",
    "price": 85
   }
  ]
 },
 {
  "category": "Ice Coffee",
  "items": [
   {
    "name": "Ice Latte",
    "price": 100
   },
   {
    "name": "Ice Espresso",
    "price": 90
   },
   {
    "name": "Ice Mocha",
    "price": 100
   },
   {
    "name": "Ice White Mocha",
    "price": 110
   },
   {
    "name": "Ice Caramel Mekato",
    "price": 115
   },
   {
    "name": "Ice Spanish Latte",
    "price": 130
   },
   {
    "name": "Ice Spanish Latte Pistachio",
    "price": 150
   },
   {
    "name": "Ice Latte Cinnamon",
    "price": 110
   },
   {
    "name": "Ice Latte Tiramisu",
    "price": 120
   },
   {
    "name": "Ice Tea",
    "price": 90
   }
  ]
 },
 {
  "category": "Matcha",
  "columns": [
   "Ice",
   "Hot"
  ],
  "items": [
   {
    "name": "Matcha Latte",
    "prices": [
     120,
     120
    ]
   },
   {
    "name": "Matcha Vanilla",
    "prices": [
     120,
     120
    ]
   },
   {
    "name": "Matcha Coconut",
    "prices": [
     130,
     130
    ]
   },
   {
    "name": "Matcha Strawberry",
    "prices": [
     130,
     130
    ]
   },
   {
    "name": "Matcha Latte Pistachio",
    "prices": [
     150,
     150
    ]
   },
   {
    "name": "Matcha Spanish Latte",
    "prices": [
     130,
     130
    ]
   }
  ]
 },
 {
  "category": "Espresso",
  "columns": [
   "S",
   "D"
  ],
  "note": "Items with one price are listed under D (double) only",
  "items": [
   {
    "name": "Espresso",
    "prices": [
     50,
     60
    ]
   },
   {
    "name": "Macchiato",
    "prices": [
     70,
     80
    ]
   },
   {
    "name": "Latte",
    "prices": [
     null,
     90
    ]
   },
   {
    "name": "Cappuccino",
    "prices": [
     null,
     90
    ]
   },
   {
    "name": "Flat White",
    "prices": [
     null,
     100
    ]
   },
   {
    "name": "Cortado",
    "prices": [
     null,
     80
    ]
   },
   {
    "name": "Americano",
    "prices": [
     null,
     80
    ]
   },
   {
    "name": "Mocha",
    "prices": [
     null,
     100
    ]
   },
   {
    "name": "White Mocha",
    "prices": [
     null,
     100
    ]
   },
   {
    "name": "Hammerhead (Cold)",
    "prices": [
     null,
     115
    ]
   },
   {
    "name": "Spanish Latte",
    "prices": [
     null,
     110
    ]
   },
   {
    "name": "Caramel Macchiato (Hot)",
    "prices": [
     null,
     100
    ]
   }
  ]
 },
 {
  "category": "Speciality",
  "items": [
   {
    "name": "V60",
    "price": 110
   }
  ]
 },
 {
  "category": "Turkish Coffee",
  "items": [
   {
    "name": "Turkish Coffee (S)",
    "price": 50
   },
   {
    "name": "Turkish Coffee (D)",
    "price": 65
   },
   {
    "name": "French Coffee Double",
    "price": 65
   },
   {
    "name": "Hazelnut Coffee Double",
    "price": 70
   },
   {
    "name": "Nutella Coffee",
    "price": 70
   },
   {
    "name": "Flavors Coffee",
    "price": 70
   }
  ]
 },
 {
  "category": "Hot Drinks",
  "items": [
   {
    "name": "Tea",
    "price": 40
   },
   {
    "name": "Tea (Flavors - Green)",
    "price": 45
   },
   {
    "name": "Herbs",
    "price": 45
   },
   {
    "name": "Latte Tea",
    "price": 60
   },
   {
    "name": "Karak Tea",
    "price": 75
   },
   {
    "name": "Vitamin C",
    "price": 75
   },
   {
    "name": "Milk Cinnamon",
    "price": 70
   },
   {
    "name": "Nescafe",
    "price": 75
   },
   {
    "name": "Hot Cider",
    "price": 90
   },
   {
    "name": "Hot Lotus",
    "price": 110
   },
   {
    "name": "Hot Oreo",
    "price": 110
   },
   {
    "name": "Hot Caramel",
    "price": 100
   },
   {
    "name": "Hot Pistachio",
    "price": 130
   },
   {
    "name": "Hot Chocolate",
    "price": 100
   },
   {
    "name": "Hot Chocolate (Marshmallow)",
    "price": 100
   },
   {
    "name": "Hot Chocolate (Hazelnut)",
    "price": 110
   },
   {
    "name": "Sahlab Classic",
    "price": 70
   },
   {
    "name": "Sahlab With Nuts",
    "price": 95
   },
   {
    "name": "Sahlab Pistachio",
    "price": 130
   }
  ]
 },
 {
  "category": "Soft Drinks",
  "items": [
   {
    "name": "Red bull",
    "price": 90
   },
   {
    "name": "Mineral Water",
    "price": 10
   },
   {
    "name": "Soft Drink",
    "price": 55
   }
  ]
 },
 {
  "category": "Extra",
  "items": [
   {
    "name": "Espresso Shot",
    "price": 30
   },
   {
    "name": "Nuts",
    "price": 35
   },
   {
    "name": "Ice Cream (Bola)",
    "price": 25
   },
   {
    "name": "Milk",
    "price": 20
   },
   {
    "name": "Fruits",
    "price": 25
   },
   {
    "name": "Nutella Sauce",
    "price": 30
   },
   {
    "name": "Kinder Sauce",
    "price": 30
   },
   {
    "name": "Lotus Sauce",
    "price": 30
   },
   {
    "name": "Oreo Sauce",
    "price": 30
   },
   {
    "name": "White Chocolate Sauce",
    "price": 25
   },
   {
    "name": "Dark Chocolate Sauce",
    "price": 25
   },
   {
    "name": "Caramel Sauce",
    "price": 25
   },
   {
    "name": "Strawberry Sauce",
    "price": 20
   },
   {
    "name": "Blueberry Sauce",
    "price": 20
   },
   {
    "name": "Pistachio Sauce",
    "price": 50
   },
   {
    "name": "Marshmallow",
    "price": 20
   },
   {
    "name": "Boba",
    "price": 25
   },
   {
    "name": "Whipped Cream",
    "price": 20
   },
   {
    "name": "Flavor",
    "price": 20
   },
   {
    "name": "Ranch Sauce",
    "price": 20
   },
   {
    "name": "Texas Sauce",
    "price": 20
   },
   {
    "name": "B.B.Q Sauce",
    "price": 20
   },
   {
    "name": "Cheddar Cheese Sauce",
    "price": 20
   },
   {
    "name": "Turkey",
    "price": 25
   },
   {
    "name": "Pommes Frites",
    "price": 30
   }
  ]
 }
];
