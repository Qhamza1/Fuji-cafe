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
    ],
    "ar": "شيمني",
    "opt_ar": "دارك شوكليت / نوتيلا / لوتس / أوريو / ريد فيلفت"
   },
   {
    "name": "Chimney Cinnamon",
    "prices": [
     115,
     120
    ],
    "ar": "شيمني قرفة"
   },
   {
    "name": "Chimney Snickers",
    "prices": [
     135,
     140
    ],
    "ar": "شيمني سنيكرز"
   },
   {
    "name": "Chimney Pistachio",
    "prices": [
     160,
     170
    ],
    "ar": "شيمني فستق"
   }
  ]
 },
 {
  "category": "Savorey Chimney",
  "items": [
   {
    "name": "Chimney Turkey - Salami",
    "price": 140,
    "ar": "شيمني تركي - سلامي"
   },
   {
    "name": "Chimney Salami & Turkey",
    "price": 155,
    "ar": "شيمني سلامي وتركي"
   },
   {
    "name": "Chimney Mix Cheese",
    "price": 155,
    "ar": "شيمني ميكس جبن"
   },
   {
    "name": "Chimney Strips",
    "price": 165,
    "ar": "شيمني ستريبس"
   },
   {
    "name": "Chimney Mini Burger",
    "price": 170,
    "ar": "شيمني ميني برجر"
   }
  ]
 },
 {
  "category": "Waffle Square",
  "items": [
   {
    "name": "Waffle",
    "options": "Caramel - White - Dark",
    "price": 115,
    "ar": "وافل",
    "opt_ar": "كراميل - وايت - دارك"
   },
   {
    "name": "Waffle",
    "options": "Nutella - Lotus - Oreo - Kinder",
    "price": 120,
    "ar": "وافل",
    "opt_ar": "نوتيلا - لوتس - أوريو - كيندر"
   },
   {
    "name": "Waffle Pistachio",
    "price": 140,
    "ar": "وافل فستق"
   },
   {
    "name": "Waffle Mix Fruit",
    "price": 135,
    "ar": "وافل ميكس فواكه"
   },
   {
    "name": "Waffle Four-Season",
    "price": 150,
    "ar": "وافل فور سيزون"
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
    ],
    "ar": "ميني بان كيك",
    "opt_ar": "كراميل - وايت - دارك"
   },
   {
    "name": "Mini Pancakes",
    "options": "Nutella - Lotus - Oreo - Kinder",
    "prices": [
     120,
     210
    ],
    "ar": "ميني بان كيك",
    "opt_ar": "نوتيلا - لوتس - أوريو - كيندر"
   },
   {
    "name": "Mini Pancakes Pistachio",
    "prices": [
     145,
     255
    ],
    "ar": "ميني بان كيك فستق"
   },
   {
    "name": "Mini Pancakes Mix Sauce",
    "prices": [
     125,
     230
    ],
    "ar": "ميني بان كيك ميكس صوص"
   },
   {
    "name": "Make your Mini Pancakes",
    "prices": [
     125,
     230
    ],
    "ar": "ميني بان كيك على ذوقك"
   }
  ]
 },
 {
  "category": "Taiyaki",
  "items": [
   {
    "name": "Taiyaki",
    "options": "Dark - Nutella - Lotus - Oreo - Red velvet",
    "price": 125,
    "ar": "تايياكي",
    "opt_ar": "دارك - نوتيلا - لوتس - أوريو - ريد فيلفت"
   },
   {
    "name": "Taiyaki Pistachio",
    "price": 150,
    "ar": "تايياكي فستق"
   },
   {
    "name": "Baby Taiyaki",
    "price": 165,
    "ar": "بيبي تايياكي"
   }
  ]
 },
 {
  "category": "Tacos",
  "items": [
   {
    "name": "Nutella",
    "price": 110,
    "ar": "نوتيلا"
   },
   {
    "name": "Nuts",
    "price": 110,
    "ar": "مكسرات"
   },
   {
    "name": "Kinder",
    "price": 125,
    "ar": "كيندر"
   },
   {
    "name": "Strawberry",
    "price": 105,
    "ar": "فراولة"
   },
   {
    "name": "Lotus",
    "price": 115,
    "ar": "لوتس"
   },
   {
    "name": "Raffaello Sandwich",
    "price": 120,
    "ar": "رافايلو ساندوتش"
   },
   {
    "name": "Oreo",
    "price": 105,
    "ar": "أوريو"
   },
   {
    "name": "Pistachio Sandwich",
    "price": 130,
    "ar": "فستق ساندوتش"
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
    "price": 130,
    "ar": "دراجون بولز",
    "opt_ar": "دارك - وايت - نوتيلا - لوتس"
   },
   {
    "name": "Dragon Balls Kinder",
    "price": 140,
    "ar": "دراجون بولز كيندر"
   },
   {
    "name": "Dragon Balls Pistachio",
    "price": 170,
    "ar": "دراجون بولز فستق"
   }
  ],
  "note_ar": "10 قطع"
 },
 {
  "category": "Desserts",
  "items": [
   {
    "name": "Chocolate Cake",
    "price": 120,
    "ar": "تشوكليت كيك"
   },
   {
    "name": "Molten Cake",
    "price": 125,
    "ar": "مولتن كيك"
   },
   {
    "name": "Brownies",
    "price": 120,
    "ar": "براونيز"
   },
   {
    "name": "Ice Mega",
    "price": 130,
    "ar": "آيس ميجا"
   },
   {
    "name": "Red Velvet",
    "price": 130,
    "ar": "ريد فيلفت"
   },
   {
    "name": "Tiramisu Cake",
    "price": 125,
    "ar": "تيراميسو كيك"
   },
   {
    "name": "Cinnamon",
    "price": 130,
    "ar": "سينامون"
   },
   {
    "name": "Magic Cake",
    "price": 125,
    "ar": "ماجيك كيك"
   },
   {
    "name": "Matilda Cake",
    "price": 130,
    "ar": "ماتيلدا كيك"
   },
   {
    "name": "Cheesecake",
    "options": "Dark - White Chocolate - Nutella - Lotus",
    "price": 130,
    "ar": "تشيز كيك",
    "opt_ar": "دارك - وايت شوكليت - نوتيلا - لوتس"
   },
   {
    "name": "Cheesecake Pistachio",
    "price": 140,
    "ar": "تشيز كيك فستق"
   },
   {
    "name": "San Sebastian",
    "options": "Strawberry - Blueberry - Caramel - Dark - White Chocolate - Nutella - Lotus",
    "price": 130,
    "ar": "سان سيباستيان",
    "opt_ar": "فراولة - بلوبيري - كراميل - دارك - وايت شوكليت - نوتيلا - لوتس"
   },
   {
    "name": "San Sebastian Kinder",
    "price": 135,
    "ar": "سان سيباستيان كيندر"
   },
   {
    "name": "San Sebastian Pistachio",
    "price": 145,
    "ar": "سان سيباستيان فستق"
   }
  ]
 },
 {
  "category": "Mochi",
  "items": [
   {
    "name": "Mochi",
    "options": "Mango - Strawberry - Lemon - Chocolate - Passion Fruit - Gum - Vanilla - Cotton Candy",
    "price": 80,
    "ar": "موتشي",
    "opt_ar": "مانجو - فراولة - ليمون - شوكولاتة - باشن فروت - علكة - فانيليا - غزل البنات"
   },
   {
    "name": "Mochi",
    "options": "Pistachio - Polo",
    "price": 80,
    "ar": "موتشي",
    "opt_ar": "فستق - بولو"
   }
  ]
 },
 {
  "category": "Sundae",
  "items": [
   {
    "name": "Sundae Classic",
    "price": 65,
    "ar": "صنداي كلاسيك"
   },
   {
    "name": "Sundae",
    "options": "Strawberry - Blueberry - Nutella - Lotus",
    "price": 75,
    "ar": "صنداي",
    "opt_ar": "فراولة - بلوبيري - نوتيلا - لوتس"
   },
   {
    "name": "Sundae",
    "options": "Pistachio - Espresso",
    "price": 95,
    "ar": "صنداي",
    "opt_ar": "فستق - إسبريسو"
   }
  ]
 },
 {
  "category": "Milkshake",
  "items": [
   {
    "name": "Nutella",
    "price": 120,
    "ar": "نوتيلا"
   },
   {
    "name": "Oreo",
    "price": 120,
    "ar": "أوريو"
   },
   {
    "name": "Lotus",
    "price": 120,
    "ar": "لوتس"
   },
   {
    "name": "Kinder",
    "price": 120,
    "ar": "كيندر"
   },
   {
    "name": "Snickers",
    "price": 120,
    "ar": "سنيكرز"
   },
   {
    "name": "Strawberry",
    "price": 115,
    "ar": "فراولة"
   },
   {
    "name": "Blueberry",
    "price": 115,
    "ar": "بلوبيري"
   },
   {
    "name": "Mixed Berry",
    "price": 120,
    "ar": "ميكس بيري"
   },
   {
    "name": "Mango",
    "price": 115,
    "ar": "مانجو"
   },
   {
    "name": "Mango Peach",
    "price": 120,
    "ar": "مانجو خوخ"
   },
   {
    "name": "Mango Passion",
    "price": 120,
    "ar": "مانجو باشن"
   },
   {
    "name": "Kit Kat",
    "price": 130,
    "ar": "كيت كات"
   },
   {
    "name": "Galaxy",
    "price": 130,
    "ar": "جالاكسي"
   },
   {
    "name": "Pistachio",
    "price": 140,
    "ar": "فستق"
   }
  ]
 },
 {
  "category": "Frappe",
  "items": [
   {
    "name": "Frappe",
    "options": "Vanilla - Chocolate - Caramel - Tiramisu - Cinnamon - Coffee - Blueberry - Passion - Hazelnut - Mango - Lotus - Kinder",
    "price": 115,
    "ar": "فرابيه",
    "opt_ar": "فانيليا - شوكولاتة - كراميل - تيراميسو - قرفة - قهوة - بلوبيري - باشن - بندق - مانجو - لوتس - كيندر"
   },
   {
    "name": "Frappe Pistachio",
    "price": 140,
    "ar": "فرابيه فستق"
   }
  ]
 },
 {
  "category": "Frappuccino",
  "items": [
   {
    "name": "Frappuccino",
    "options": "Vanilla - Chocolate - Caramel - Tiramisu - Cinnamon - Coffee - Blueberry - Passion - Hazelnut - Mango - Lotus - Kinder",
    "price": 130,
    "ar": "فرابتشينو",
    "opt_ar": "فانيليا - شوكولاتة - كراميل - تيراميسو - قرفة - قهوة - بلوبيري - باشن - بندق - مانجو - لوتس - كيندر"
   },
   {
    "name": "Frappuccino Pistachio",
    "price": 150,
    "ar": "فرابتشينو فستق"
   }
  ]
 },
 {
  "category": "Smoothie",
  "items": [
   {
    "name": "Mango",
    "price": 90,
    "ar": "مانجو"
   },
   {
    "name": "Strawberry",
    "price": 90,
    "ar": "فراولة"
   },
   {
    "name": "Lemon with mint",
    "price": 90,
    "ar": "ليمون بالنعناع"
   },
   {
    "name": "Watermelon",
    "price": 90,
    "ar": "بطيخ"
   },
   {
    "name": "Peach",
    "price": 90,
    "ar": "خوخ"
   },
   {
    "name": "Passion Fruit",
    "price": 90,
    "ar": "باشن فروت"
   },
   {
    "name": "Red bull cola",
    "price": 110,
    "badge": "New Item",
    "ar": "ريد بول كولا"
   },
   {
    "name": "Blueberry",
    "price": 90,
    "ar": "بلوبيري"
   },
   {
    "name": "Mixed Berry",
    "price": 100,
    "ar": "ميكس بيري"
   },
   {
    "name": "Mango Peach",
    "price": 100,
    "ar": "مانجو خوخ"
   },
   {
    "name": "Mango Passion",
    "price": 100,
    "ar": "مانجو باشن"
   },
   {
    "name": "Grenadine",
    "options": "Mango - Passion Fruit - Blueberry - Strawberry - Mixed Berry",
    "price": 115,
    "ar": "جرينادين",
    "opt_ar": "مانجو - باشن فروت - بلوبيري - فراولة - ميكس بيري"
   }
  ]
 },
 {
  "category": "Soda Boba",
  "items": [
   {
    "name": "Blueberry Mojito",
    "price": 115,
    "ar": "موهيتو بلوبيري"
   },
   {
    "name": "Strawberry Mojito",
    "price": 115,
    "ar": "موهيتو فراولة"
   },
   {
    "name": "Passion Fruit Mojito",
    "price": 115,
    "ar": "موهيتو باشن فروت"
   },
   {
    "name": "Lemon With Mint Mojito",
    "price": 120,
    "ar": "موهيتو ليمون بالنعناع"
   },
   {
    "name": "Mixed Berry Mojito",
    "price": 120,
    "ar": "موهيتو ميكس بيري"
   },
   {
    "name": "Sunshine",
    "price": 120,
    "ar": "صن شاين"
   },
   {
    "name": "Sunrise",
    "price": 120,
    "ar": "صن رايز"
   },
   {
    "name": "Sun Blue",
    "price": 120,
    "ar": "صن بلو"
   },
   {
    "name": "Cherry Cola",
    "price": 120,
    "ar": "شيري كولا"
   },
   {
    "name": "Fun on Beach",
    "price": 125,
    "ar": "فان أون بيتش"
   }
  ]
 },
 {
  "category": "Fresh Juice",
  "items": [
   {
    "name": "Mango",
    "price": 80,
    "ar": "مانجو"
   },
   {
    "name": "Strawberry",
    "price": 80,
    "ar": "فراولة"
   },
   {
    "name": "Guava",
    "price": 80,
    "ar": "جوافة"
   },
   {
    "name": "Lemon",
    "price": 70,
    "ar": "ليمون"
   },
   {
    "name": "Lemon With Mint",
    "price": 75,
    "ar": "ليمون بالنعناع"
   },
   {
    "name": "Watermelon",
    "price": 75,
    "ar": "بطيخ"
   },
   {
    "name": "Guava Milk",
    "price": 85,
    "ar": "جوافة بالحليب"
   },
   {
    "name": "Strawberry Milk",
    "price": 85,
    "ar": "فراولة بالحليب"
   },
   {
    "name": "Banana Caramel",
    "price": 85,
    "ar": "موز كراميل"
   },
   {
    "name": "Florida",
    "options": "Mango + Strawberry",
    "price": 90,
    "ar": "فلوريدا",
    "opt_ar": "مانجو + فراولة"
   },
   {
    "name": "Costarica",
    "options": "Strawberry + Banana",
    "price": 90,
    "ar": "كوستاريكا",
    "opt_ar": "فراولة + موز"
   },
   {
    "name": "Vitamin C",
    "options": "Guava + Lemon & Mint",
    "price": 85,
    "ar": "فيتامين سي",
    "opt_ar": "جوافة + ليمون ونعناع"
   }
  ]
 },
 {
  "category": "Ice Coffee",
  "items": [
   {
    "name": "Ice Latte",
    "price": 100,
    "ar": "آيس لاتيه"
   },
   {
    "name": "Ice Espresso",
    "price": 90,
    "ar": "آيس إسبريسو"
   },
   {
    "name": "Ice Mocha",
    "price": 100,
    "ar": "آيس موكا"
   },
   {
    "name": "Ice White Mocha",
    "price": 110,
    "ar": "آيس وايت موكا"
   },
   {
    "name": "Ice Caramel Mekato",
    "price": 115,
    "ar": "آيس كراميل ميكاتو"
   },
   {
    "name": "Ice Spanish Latte",
    "price": 130,
    "ar": "آيس سبانش لاتيه"
   },
   {
    "name": "Ice Spanish Latte Pistachio",
    "price": 150,
    "ar": "آيس سبانش لاتيه فستق"
   },
   {
    "name": "Ice Latte Cinnamon",
    "price": 110,
    "ar": "آيس لاتيه قرفة"
   },
   {
    "name": "Ice Latte Tiramisu",
    "price": 120,
    "ar": "آيس لاتيه تيراميسو"
   },
   {
    "name": "Ice Tea",
    "price": 90,
    "ar": "آيس تي"
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
    ],
    "ar": "ماتشا لاتيه"
   },
   {
    "name": "Matcha Vanilla",
    "prices": [
     120,
     120
    ],
    "ar": "ماتشا فانيليا"
   },
   {
    "name": "Matcha Coconut",
    "prices": [
     130,
     130
    ],
    "ar": "ماتشا جوز الهند"
   },
   {
    "name": "Matcha Strawberry",
    "prices": [
     130,
     130
    ],
    "ar": "ماتشا فراولة"
   },
   {
    "name": "Matcha Latte Pistachio",
    "prices": [
     150,
     150
    ],
    "ar": "ماتشا لاتيه فستق"
   },
   {
    "name": "Matcha Spanish Latte",
    "prices": [
     130,
     130
    ],
    "ar": "ماتشا سبانش لاتيه"
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
    ],
    "ar": "إسبريسو"
   },
   {
    "name": "Macchiato",
    "prices": [
     70,
     80
    ],
    "ar": "ماكياتو"
   },
   {
    "name": "Latte",
    "prices": [
     null,
     90
    ],
    "ar": "لاتيه"
   },
   {
    "name": "Cappuccino",
    "prices": [
     null,
     90
    ],
    "ar": "كابتشينو"
   },
   {
    "name": "Flat White",
    "prices": [
     null,
     100
    ],
    "ar": "فلات وايت"
   },
   {
    "name": "Cortado",
    "prices": [
     null,
     80
    ],
    "ar": "كورتادو"
   },
   {
    "name": "Americano",
    "prices": [
     null,
     80
    ],
    "ar": "أمريكانو"
   },
   {
    "name": "Mocha",
    "prices": [
     null,
     100
    ],
    "ar": "موكا"
   },
   {
    "name": "White Mocha",
    "prices": [
     null,
     100
    ],
    "ar": "وايت موكا"
   },
   {
    "name": "Hammerhead (Cold)",
    "prices": [
     null,
     115
    ],
    "ar": "هامرهيد (بارد)"
   },
   {
    "name": "Spanish Latte",
    "prices": [
     null,
     110
    ],
    "ar": "سبانش لاتيه"
   },
   {
    "name": "Caramel Macchiato (Hot)",
    "prices": [
     null,
     100
    ],
    "ar": "كراميل ماكياتو (ساخن)"
   }
  ],
  "note_ar": "الأصناف اللي ليها سعر واحد، السعر ده للدوبل"
 },
 {
  "category": "Speciality",
  "items": [
   {
    "name": "V60",
    "price": 110,
    "ar": "في 60"
   }
  ]
 },
 {
  "category": "Turkish Coffee",
  "items": [
   {
    "name": "Turkish Coffee (S)",
    "price": 50,
    "ar": "قهوة تركي (سنجل)"
   },
   {
    "name": "Turkish Coffee (D)",
    "price": 65,
    "ar": "قهوة تركي (دوبل)"
   },
   {
    "name": "French Coffee Double",
    "price": 65,
    "ar": "قهوة فرنساوي دوبل"
   },
   {
    "name": "Hazelnut Coffee Double",
    "price": 70,
    "ar": "قهوة بندق دوبل"
   },
   {
    "name": "Nutella Coffee",
    "price": 70,
    "ar": "قهوة نوتيلا"
   },
   {
    "name": "Flavors Coffee",
    "price": 70,
    "ar": "قهوة بالنكهات"
   }
  ]
 },
 {
  "category": "Hot Drinks",
  "items": [
   {
    "name": "Tea",
    "price": 40,
    "ar": "شاي"
   },
   {
    "name": "Tea (Flavors - Green)",
    "price": 45,
    "ar": "شاي (نكهات - أخضر)"
   },
   {
    "name": "Herbs",
    "price": 45,
    "ar": "أعشاب"
   },
   {
    "name": "Latte Tea",
    "price": 60,
    "ar": "شاي لاتيه"
   },
   {
    "name": "Karak Tea",
    "price": 75,
    "ar": "شاي كرك"
   },
   {
    "name": "Vitamin C",
    "price": 75,
    "ar": "فيتامين سي"
   },
   {
    "name": "Milk Cinnamon",
    "price": 70,
    "ar": "حليب بالقرفة"
   },
   {
    "name": "Nescafe",
    "price": 75,
    "ar": "نسكافيه"
   },
   {
    "name": "Hot Cider",
    "price": 90,
    "ar": "سيدر سخن"
   },
   {
    "name": "Hot Lotus",
    "price": 110,
    "ar": "لوتس سخن"
   },
   {
    "name": "Hot Oreo",
    "price": 110,
    "ar": "أوريو سخن"
   },
   {
    "name": "Hot Caramel",
    "price": 100,
    "ar": "كراميل سخن"
   },
   {
    "name": "Hot Pistachio",
    "price": 130,
    "ar": "فستق سخن"
   },
   {
    "name": "Hot Chocolate",
    "price": 100,
    "ar": "هوت شوكليت"
   },
   {
    "name": "Hot Chocolate (Marshmallow)",
    "price": 100,
    "ar": "هوت شوكليت (مارشميلو)"
   },
   {
    "name": "Hot Chocolate (Hazelnut)",
    "price": 110,
    "ar": "هوت شوكليت (بندق)"
   },
   {
    "name": "Sahlab Classic",
    "price": 70,
    "ar": "سحلب كلاسيك"
   },
   {
    "name": "Sahlab With Nuts",
    "price": 95,
    "ar": "سحلب بالمكسرات"
   },
   {
    "name": "Sahlab Pistachio",
    "price": 130,
    "ar": "سحلب فستق"
   }
  ]
 },
 {
  "category": "Soft Drinks",
  "items": [
   {
    "name": "Red bull",
    "price": 90,
    "ar": "ريد بول"
   },
   {
    "name": "Mineral Water",
    "price": 10,
    "ar": "مياه معدنية"
   },
   {
    "name": "Soft Drink",
    "price": 55,
    "ar": "مشروب غازي"
   }
  ]
 },
 {
  "category": "Extra",
  "items": [
   {
    "name": "Espresso Shot",
    "price": 30,
    "ar": "شوت إسبريسو"
   },
   {
    "name": "Nuts",
    "price": 35,
    "ar": "مكسرات"
   },
   {
    "name": "Ice Cream (Bola)",
    "price": 25,
    "ar": "آيس كريم (بولة)"
   },
   {
    "name": "Milk",
    "price": 20,
    "ar": "حليب"
   },
   {
    "name": "Fruits",
    "price": 25,
    "ar": "فواكه"
   },
   {
    "name": "Nutella Sauce",
    "price": 30,
    "ar": "صوص نوتيلا"
   },
   {
    "name": "Kinder Sauce",
    "price": 30,
    "ar": "صوص كيندر"
   },
   {
    "name": "Lotus Sauce",
    "price": 30,
    "ar": "صوص لوتس"
   },
   {
    "name": "Oreo Sauce",
    "price": 30,
    "ar": "صوص أوريو"
   },
   {
    "name": "White Chocolate Sauce",
    "price": 25,
    "ar": "صوص وايت شوكليت"
   },
   {
    "name": "Dark Chocolate Sauce",
    "price": 25,
    "ar": "صوص دارك شوكليت"
   },
   {
    "name": "Caramel Sauce",
    "price": 25,
    "ar": "صوص كراميل"
   },
   {
    "name": "Strawberry Sauce",
    "price": 20,
    "ar": "صوص فراولة"
   },
   {
    "name": "Blueberry Sauce",
    "price": 20,
    "ar": "صوص بلوبيري"
   },
   {
    "name": "Pistachio Sauce",
    "price": 50,
    "ar": "صوص فستق"
   },
   {
    "name": "Marshmallow",
    "price": 20,
    "ar": "مارشميلو"
   },
   {
    "name": "Boba",
    "price": 25,
    "ar": "بوبا"
   },
   {
    "name": "Whipped Cream",
    "price": 20,
    "ar": "كريمة مخفوقة"
   },
   {
    "name": "Flavor",
    "price": 20,
    "ar": "نكهة"
   },
   {
    "name": "Ranch Sauce",
    "price": 20,
    "ar": "صوص رانش"
   },
   {
    "name": "Texas Sauce",
    "price": 20,
    "ar": "صوص تكساس"
   },
   {
    "name": "B.B.Q Sauce",
    "price": 20,
    "ar": "صوص باربكيو"
   },
   {
    "name": "Cheddar Cheese Sauce",
    "price": 20,
    "ar": "صوص تشيدر"
   },
   {
    "name": "Turkey",
    "price": 25,
    "ar": "تركي"
   },
   {
    "name": "Pommes Frites",
    "price": 30,
    "ar": "بطاطس مقلية"
   }
  ]
 }
];
