 export const category = [

    {
       name: "Supermarket",
       path: "/supermarket",
       subcategories: [
         {
           title: "Groceries",
           links: [
             { name: "Atta,Flours", path: "/supermarket/fruits" },
             { name: "Oil & Ghee", path: "/supermarket/dairy" },
             { name: "Bakery Products", path: "/supermarket/bakery" },
             { name: "Milk & Cheese", path: "/supermarket/canned-foods" },
             { name: "Masalas & Spices", path: "/supermarket/condiments" },
             { name: "Rice & Others Grains", path: "/supermarket/dairy-milk" },
           ],
         },
         {
            title: "Snacks & Beverages",
           links: [
             { name: "Cream Biscuits & Waters", path: "/supermarket/breakfast-cereals" },
             { name: "Chips & chocos", path: "/supermarket/bakery" },
             { name: "Tea & Coffee", path: "/supermarket/canned-foods" },
             { name: "Soft Drinks", path: "/supermarket/condiments" },
             { name: "Biscuits & Cookies", path: "/supermarket/dairy-milk" },
             { name: "Fruits & Vegetables", path: "/supermarket/fruits" },
             { name: "Murukku", path: "/supermarket/meat" },
             { name: "Nuts ", path: "/supermarket/nuts" },
           { name: "Bread Items", path: "/supermarket/personal-care" },
             { name: "Spicy Items", path: "/supermarket/ready-to-eat" },
             { name: "Sweets", path: "/supermarket/seafood" },
             { name: "Ice Creams", path: "/supermarket/shampoo" },
           ],
         },
         {
            title:"Housing & Garden",
            links: [
             { name: "Detergents", path: "/supermarket/housing-garden/home-decor" },
             { name: "Toilet Cleaners", path: "/supermarket/housing-garden/kitchen-dining" },
             { name: "Air Freshers", path: "/supermarket/housing-garden/bathroom-bedding" },
             { name: "Kitchen Cleaners", path:"/supermarket/housing-garden/household-cleaners" },
             { name: "Floor & Other Cleaners", path: "/supermarket/housing-garden/flooring-carpets" },
             { name: "Pooja Samagri", path: "/supermarket/housing-garden/pooja-samagri" },
             { name: "Utensil Cleaners", path: "/supermarket/housing-garden/utensil-cleaners" },
             { name: "Repellents & Fresheners", path: "/supermarket/housing-garden/repellents" },
             { name: "Paper & Disposables", path: "/supermarket/housing-garden/paper-disposables" },
             { name: "Basic Electricals", path: "/supermarket/housing-garden/basic-electronics" },
            ],
            },
            {
                title:"Personal Care",
                links: [
                 { name: "Face Wash", path: "/supermarket/personal-care/hot-items" },
                 { name: "Soaps", path: "/supermarket/personal-care/bath-body" },
                 { name: "Shampoo", path: "/supermarket/personal-care/hair-care" },
                 { name: "Toothpaste", path: "/supermarket/personal-care/skin"},
                 { name: "Hair Care", path: "/supermarket/personal-care/hair-care" },
                 { name: "Deos,Perfumes", path: "/supermarket/personal-care/deodorant" },
                 { name: "Lotions", path: "/supermarket/personal-care/hair-care" },
                 { name: "Shaving Needs", path: "/supermarket/personal-care/shaving-needs" },
                 { name: "Skin Care", path: "/supermarket/personal-care/biscuits-cookies" },
                 { name: "Medicines", path: "/supermarket/personal-care/sweets" },
                 { name: "Cleaning Products", path: "/supermarket/personal-care/medicines" },
                 { name: "Cleaning Accessories", path: "/supermarket/personal-care/cleaning-products" },
                 { name: "Fragrances", path: "/supermarket/personal-care/fragrances" },
                 { name: "Baby Care", path: "/supermarket/personal-care/baby-care" },
                ],
            },
            {
                title:"Fruits & Vegetables",
                links: [
                 { name: "Onion", path: "/supermarket/fruits" },
                 { name: "Potato", path: "/supermarket/vegetables" },
                 { name: "Tomato", path: "/supermarket/fruit-vegetable-juices" },
                 { name: "Banana", path: "/supermarket/fresh-grocery" },
                 { name: "Mango", path: "/supermarket/fruit-vegetable-juices" },
                 { name: "Grapes", path: "/supermarket/fruit-vegetable-juices" },
                 { name: "Pineapple", path: "/supermarket/fruit-vegetable-juices" },
                 { name: "Cherry", path: "/supermarket/fruit-vegetable-juices" },
                 { name: "Lemon", path: "/supermarket/fruit-vegetable-juices" },
                 { name: "Watermelon", path: "/supermarket/fruit-vegetable-juices" },
                 { name: "Strawberries", path: "/supermarket/fruit-vegetable-juices" },
              { name: "Orange", path: "/supermarket/fruit-vegetable-juices" },
                 { name: "Papaya", path: "/supermarket/fruit-vegetable-juices" },
                 { name: "Pineapple & Mango", path: "/supermarket/fruit-vegetable-juices" },
                ],
                },
       ],
     },
     {
       name: "Electronics",
       path: "/electronics",
       subcategories: [
         {
           title: "Mobile",
           links: [
             { name: "IPhones", path: "/electronics/iphones" },
             { name: "Android Mobile Phones", path: "/electronics/android-phones" },
             { name: "Tablets", path: "/electronics/tablets" },
             { name: "Basic Mobiles", path: "/electronics/basic-mobiles" },
             { name: "Headphones & Headsets", path: "/electronics/headphones" },
             { name: "Power Banks", path: "/electronics/power-banks" },
           ],
         },
         {
           title: "Televisions",
           links: [
             { name: "Smart Televisions", path: "/electronics/tvs/smart" },
             { name: "Home Audio", path: "/electronics/home-audio" },
             { name: "Home Theater Systems", path: "/electronics/home-theater" },
           ],
         },
         {
           title: "Computers & Accessories",
           links: [
             { name: "Desktops", path: "/electronics/computers/desktops" },
             { name: "Macs", path: "/electronics/computers/macs" },
             { name: "Printers", path: "/electronics/computers/printers" },
           ],
         },
       ],
     },
   
    {
     name:"Home Appliances",
     path: "/home-kitchen-garden",
     subcategories: [
       {
         title: "Appliances",
         links: [
           { name: "Air Conditioners", path: "/home-kitchen-garden/appliances/air-conditioners" },
           { name: "Refrigerators", path: "/home-kitchen-garden/appliances/refrigerators" },
         ],
       },  
     ],
    },
    {
     name: "Sports & Outdoors",
     path: "/sports-outdoors",
     subcategories: [
       {
         title: "Sportswear",
         links: [
           { name: "Soccer Cleats", path: "/sports-outdoors/soccer-cleats" },
           { name: "Basketball Shoes", path: "/sports-outdoors/basketball-shoes" },
         ],
       },
     ],
    },
    {
     name: "Health & Beauty",
     path: "/health-beauty",
     subcategories: [
       {
         title: "Makeup & Skin Care",
         links: [
           { name: "Face Care", path: "/health-beauty/makeup-skin-care/face-care" },
           { name: "Hair Care", path: "/health-beauty/makeup-skin-care/hair-care" },
         ],
       },
     ],
    },
   
    {
     name:"stationeries ",
     path: "/stationeries",
     subcategories: [
       {
         title: "Stationeries",
         links: [
           { name: "Pens & Pencils", path: "/stationeries/pens-pencils" },
           { name: "Books & Magazines", path: "/stationeries/books-magazines" },
         ],
       },
     ]
    },
   
     {
       name: "Fashion",
       path: "/fashion",
       subcategories: [
         {
           title: "Men's Clothing",
           links: [
             { name: "Shirts", path: "/fashion/mens-shirts" },
             { name: "Jeans", path: "/fashion/mens-jeans" },
           ],
         },
       ],
     },
   ];
 export default category;   