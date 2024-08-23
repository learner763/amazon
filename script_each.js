document.addEventListener("DOMContentLoaded",function()
{
    let fitness=[["Smart Watch for Women (Answer /Make Calls), Alexa Built-in, Fitness Tracker, Heart Rate/Sleep Tracker/ Waterproof, Smartwatch Compatible Android iPhone",
        "fitness1.png","4.2","$53","white"
    ],["Amazfit Active Smart Watch 42mm,with AI Fitness ,Sleep Coach, GPS, Alexa-Enabled,Bluetooth Calling and Music, 14 Day Battery, Fitness Tracker with more than 120 Sports Modes, for Android and iPhone"
        ,"fitness2.png","4.2","$100","white"
    ],["Amazfit Bip 5 Unity Smart Watch 46mm, 11-Day Battery,Fitness Activity Tracker with 120+ Sports Modes, Heart Rate, Sleep Monitor,Customizable Watch Faces, for Android and iPhone",
        "fitness3.png","4.2","$70","white"
    
    ],["ENOMIR Smart watch for Women Men with Bluetooth Call,Smartwatch with Alexa Built-in,Heart Rate SpO2 Sleep Monitor,5ATM Waterproof,Step Calorie Activity Trackers and Smartwatches for iOS&Android Phones",
        "fitness4.png","4.1","$46","white"
    
    ],["ENOMIR Smart Watch for Men Women(Answer/Make Call), Alexa Built-in,Fitness with Heart Rate SpO2 Sleep Monitor 100 Sports 5ATM Waterproof Activity Trackers and Smartwatches iOS&Android Phones",
        "fitness5.png","4.1","$60","white"
    ],["Health Fitness Tracker 2024 with 24/7 Heart Rate, Blood Oxygen, Blood Pressure, Sleep Tracker, IP68 Waterproof Activity Trackers with Step Tracker",
        "fitness.png","3.8","$48","white"
    ],]
    
        let home_kitchen=[["KitchenAid Universal Nesting Plastic Mixing Bowls, Set Of 3, 2.5 quart, 3.5 quart, 4.5 quart, Non Slip Base with Easy Pour Spout to Reduce Mess, Dishwasher Safe, Aqua Sky, White, Gray",
            "kitchen1.png","4.8","$25","yellow"
        ],["5 QT Stainless Steel Mixer Bowl Compatible With Kitchenaid Tilt-Head Stand Mixers 4.5&5-Quart,Dishwasher Safe,5 Quart Mixing Bowl with Handle(𝗦𝘁𝗮𝗶𝗻𝗹𝗲𝘀𝘀 𝗦𝘁𝗲𝗲𝗹 𝗣𝗼𝗹𝗶𝘀𝗵𝗲𝗱)"
            ,"kitchen2.png","4.9","$28","yellow"
        ],["Measuring Cups and Spoons Set, 7 Stainless Steel Nesting Measuring Cups & 7 Spoons, 5 Mini Measuring Spoons & 2 Detachable Rings, Kitchen Gadgets for Cooking & Baking, Set of 21",
            "kitchen3.png","4.7","$25","yellow"
        ],["Amazon Basics Electric Kettle, Stainless Steel, Portable Fast-Boiling, Kettle for Boiling Water, Tea and Coffee, Auto Shut-Off and Boil Dry Protection, 1 Liter, Black and Silver0",
            "kitchen4.png","4.7","$20","yellow"
        ],["Stainless Steel Cuisinart Food Processor 14-Cup Vegetable Chopper for Mincing ,Dicing and Shredding ",
            "kitchen5_.png","4.6","$250","yellow"
        ],["Amazon Basics 2 Slice Cool Touch Toaster with 6 Browning Settings,Extra Wide Slots,Removable Easy to Clean Clumb Tray",
            "kitchen6_.png","4.3","$18","white"
        ]]
    
        let body_beauty=[["Old Spice Body Wash for Men, 24/7 Shower Fresh with Lasting Scent,   24 fl oz (Pack of 2)",
            "beauty1.png","4.8","$13","yellow"
        ],["Dial Men 3in1 Body, Hair and Face Wash, Recharge, 69 fl oz (3-23 fl oz Bottles)"
            ,"beauty2.png","4.6","$17","yellow"
        ],["Dove Body Wash Deep Moisture 4 Count For Dry Skin Moisturizing Skin Cleanser Nourishes The Driest Skin 20 oz (pack of 4)",
            "beauty3.png","4.8","$20","yellow"
        ],["Colgate Baking Soda & Peroxide Toothpaste - Whitens Teeth, Fights Cavities & Removes Stains, Brisk Mint, 6 Ounce (Pack of 2)",
            "beauty4.png","4.7","$4","yellow"
        ],["Softsoap Body Wash, Honeysuckle & Orange Burst Body Wash, 20 Ounce 4 Pack",
            "beauty5.png","4.7","$20","yellow"
        ],["PEARS Body Wash, Natural Oils – Pure & Gentle 100% Soap-Free Glowing Skin, 16.9 Fl Oz (Pack of 2)",
            "beauty6.png","4.6","$20","yellow"
        ]]
    
        
        let dresses=[["Boy's Suit Formal Slim Fit 5 Pieces Suit Set Blazer Vest Pants with Adjustable Waist Shirt with Tie",
            "dress1.png","4.4","$55","white"
        ],["Amazon Essentials Women Long-Sleeve Lightweight Crewneck Sweater (Available in Plus Size)",
            "dress2.png","4.4","$25","white"
        ],["Under Armour Men Fast Left Chest Short Sleeve T Shirt"
            ,"dress3.png","4.7","$19","yellow"
        ],["DELCARINO Men's Long Sleeve Button Up Shirts Solid Slim Fit Casual Business Formal Dress Shirt",
            "dress4.png","4.4","$23","white"
    
        ],["GRACE KARIN Women's Classic Long Sleeve Knit Cardigan Sweaters Casual Open Front Button Down ",
            "dress5.png","4.5","$30","yellow"
    
        ],["QBK 4T to Youth Neon Shirt Kids UPF 50+ Dry Fit Athletic Short Sleeve T Shirts for Boys and Girls",
            "dress6.png","4.6","$11","yellow"
        ]]
        
        let paint=[["Pro Grade Paint Brushes - 5-Piece Flat and Angle Paint Brush Set for All Latex and Oil Paints & Stains - Home Improvement - Interior & Exterior Use",
            "paint1.png","4.6","$8","yellow"
        ],["Stead Max Paint Brush Set (6 Pieces), Set of 6 Multi-Sized Brushes, Professional Quality Painting Tool Kit, Two Sets of 1, 1.5, and 2 Inch Brushes (Pack of 6)",
            "paint3.png","4.1","$7","white"
        ],["Stain Brushes for Chalk Paint Wood, Walls, Flat and Round Tapered Painting , Pack of 3 Green",
            "paint4.png","4.6","$10","white"
        ],["Pro Grade - Chip Paint Brushes - 36 Ea 2.5 Inch Chip Paint Brush Light Brown",
            "paint5.png","4.4","$20","white"
    
        ],["Stain Brush Set 1-inch to 4-inch Assortment, Bristle Paint Brush, Natural Bristle Blended , Chip Paint",
            "paint6.png","4.2","$10","white"
    
        ],["Deck Stain Brush,  Soft Tip Paint Brushes for Walls, Trim Paint Brushes, Paint Brushes for Painting Walls",
            "paint2.png","4.6","$7","yellow"
        ]]
    
        let ceiling=[["52 Inch Ceiling Fans with Lights and Remote,Outdoor Ceiling Fans with Dimmable 3 Colors 6 Speeds,  Noiseless DC Motor,Modern LED Ceiling Fans ",
            "ceiling1.png","4.0","$100","white"
        ],["Black Ceiling Fans with Lights - Outdoor Ceiling Fan with Remote, 52 Inch Modern Ceiling Fan for Patio, Bedroom Living Room",
            "ceiling2.png","4.2","$90","white"
        ],["Dimmable T6 LED Bulbs, 4W E12 Edison Light Bulbs Soft White 3000K,500lm, 40W Candelabra Incandescent Bulbs Equivalent Vintage LED Filament Edison Candle Bulb with Decorative, 6Pack",
            "ceiling3.png","4.6","$23","yellow"
        ],["E12 Candelabra LED Light Bulbs 60W Equivalent, 6000K Daylight White, Dimmable LED Chandelier Bulb, 6W 600Lumens Ceiling Fan Bulb, T6 Tube Edison Candle Light Bulbs, Pack of 6",
            "ceiling4.png","4.8","$16","yellow"
    
        ],["Wood Ceiling Fans with Lights: 52 Inch Outdoor Ceiling Fan with and Lights Remote Noiseless DC Motor 3 Downrods 6 Speeds Timing Reversible Modern Ceiling Fan ",
            "ceiling5.png","5.0","$130","yellow"
    
        ],["Bedside Table Lamp for Bedroom - 3 Way Dimmable Touch Lamp USB C Charging Ports and AC Outlet, Small Lamp Wood Base Round Flaxen Fabric Shade for Living Room, Desk, LED Bulb Included",
            "ceiling6.png","4.6","$19","yellow"
        ]]
    
        let digital=[["Digital Dual Alarm Clock for Bedroom, Large Display Bedside with Battery Backup, USB Phone Charger, Dimmer, Easy to Set Loud LED Heavy Sleepers ",
            "digital1.png","4.4","$15","white"
        ],["Digital Alarm Clocks for Bedrooms: Large Bold Number 5 Brightness Dimmer - Easy to Read Across The Room - 5 Alarm Sound 8 Night Light - Silver",
            "digital2.png","4.6","$20","yellow"
        ],["JALL Digital Alarm Clock, with Wooden Electronic LED Time Display, Dual Alarm, 2.5-inch Cubic Small Mini Wood Made Electric Clocks for Bedroom, Bedside, Desk, Black",
            "digital3.png","4.3","$15","white"
        ],["Digital Alarm Clock, with Wooden Electronic LED Time Display, 3 Alarm Settings, Humidity & Temperature Detect, Wood Made Electric Clocks for Bedroom, Bedside (Black)",
            "digital4.png","4.5","$20","yellow"
    
        ],["Wooden Digital Alarm Clock, 0-100% Dimmer, 2 Alarm Settings, Weekday/Everyday Mode, 9 Mins Snooze, 12/24H, Temperature and Date Display for Office, Travel, Bedroom Alarm Clock (Brown)",
            "digital5.png","4.5","$25","yellow"
    
        ],["Extra Loud Alarm Clock for Heavy Sleepers Adults,Teens,Kids,Rainbow Clock for Bedrooms,Small Smart Bedside Digital Clock with Large Display,7 Color Night Light",
            "digital6.png","4.3","$12","white"
        ]]
    
        let vr=[["3D VR Headset for iPhone & Android Phones 1.0 - with Links to 3D VR Videos | Virtual Reality Goggles Set for Beginners | Wearable VR Set for Kids & Adults – Blue",
            "vr1.png","3.5","$50","white"
        ],["DESTEK V5 VR Headset for Phone with Controller, Anti-Blue Eyes Protected HD Lenses, 110° FOV Virtual Reality Headsets VR Goggles for iPhone 15/14/13/12/11, Samsung, Android - Black",
            "vr2.png","5.0","$45","yellow"
        ],["JALL Digital Alarm Clock, with Wooden Electronic LED Time Display, Dual Alarm, 2.5-inch Cubic Small Mini Wood Made Electric Clocks for Bedroom, Black",
            "vr3.png","4.8","$27","yellow"
        ],["AMVR VR Headset and Touch Controllers Display Stand, Helmet & Handle Holder Mount Station for HP Reverb G2 Virtual Reality Headset",
            "vr4.png","4.3","$37","yellow"
    
        ],["VR Headset Compatible with iPhone & Android - Universal Virtual Reality Goggles for Kids & Adults - Virtual Reality Headset for Kids - Your Best Mobile Games 360 Movies w/New 3D VR for iPhone (Red)",
            "vr5.png","3.6","$20","white"
    
        ],["Head Strap Compatible with Oculus Quest 2,Meta Quest 2 Accessories Adjustable Elite Strap Replacement for Enhanced Comfort Support and Gaming Immersion in VR (Comfort Head Strap only)",
            "vr6.png","4.7","$20","yellow"
        ]]
    
        let phone=[["Case for Motorola Razr 2023 (Not Fit Razr+) PU Vegan Leather Back & Hard PC Bumper Phone Case for Moto Razr 2023 - Brown",
            "phone1.png","4.7","$13","yellow"
        ],["Case for Motorola Razr 2023 (Not Fit Razr+) Genuine Leather + Hard Polycarbonate Bumper Phone Case for Moto Razr 2023 - Green",
            "phone2.png","4.6","$15","yellow"
        ],["FNTCASE for Motorola Moto G-Stylus-5G-2023 Case: Dual Layer Shockproof Protective Phone Cover | HD Lens Protector | Anti Slip Textured Back | Military Protection Bumper | Lightweight Rugged",
            "phone3.png","4.5","$8","yellow"
        ],["Supershieldz (3 Pack) Designed for Motorola Moto G Stylus 5G (2023) [5G Model Only] [Not Fit for 2022/2021/2020 Version] Tempered Glass Screen Protector, Anti Scratch, Bubble Free",
            "phone4.png","4.5","$7","yellow"
    
        ],["LISEN Cell Phone Stand Adjustable Phone Holer for Desk, Office Desk Accessories for iPhone 15 Stand Fits All Mobile Phones, iPhone,  iPads, Tablet 4-10in",
            "phone5.png","4.5","$9","yellow"
    
        ],["Amazon Basics Adjustable Aluminum Cell Phone Desk Stand for iPhone and Android, 3.15 x 2.87 x 3.74 Inch, Silver",
            "phone6.png","4.6","$9","yellow"
        ]]
    
        let pc=[["HP 2023 15'' HD IPS Laptop, Windows 11, Intel Pentium 4-Core Processor Up to 2.70GHz, 8GB RAM, 128GB SSD, HDMI, Super-Fast 6th Gen WiFi, Dale Red (Renewed)",
            "pc1.png","4.2","$230","white"
        ],["HP 14 Ultral Light Laptop for Students and Business, Intel Quad-Core N4120, 16GB RAM, 192GB Storage(128GB Ghost Manta SD), 1 Year Office 365, Webcam, HDMI, WiFi, Win 11 S",
            "pc2.png","4.1","$340","white"
        ],["HP 14 Laptop Ultral Light for Students and Business, Quad-Core Intel Celeron Processor, 8GB RAM, 192GB Storage (128GB eMMC + 64GB Ghost Manta SD Card), HDMI, WiFi, USB-A&C, Win 11",
            "pc3.png","4.2","$290","white"
        ],["HP 14inch Laptops Windows 11-16GB RAM - 192GB Storage - Quad-core Intel Celeron N4120 - USB C - SD Card Reader - Long Battery Life Fast Charge - Wireless-AC - HDMI - Camera - Kids Laptop",
            "pc4.png","5.0","$260","yellow"
    
        ],["Amazon Fire Max 11 tablet (newest gen) vivid 11” display, all-in-one for streaming and gaming, 14-hour battery life, optional stylus and keyboard, 64 GB",
            "pc5.png","4.4","$203","white"
    
        ],["Amazon Fire HD 10 Tablet Cover (Only compatible with 11th generation tablet, 2021 release) – Charcoal Black",
            "pc6.png","4.6","$190","yellow"
        ]]
    
        let health=[["Ursa Major Golden Hour Face Moisturizer | Vegan Recovery Cream for Daily Facial Moisturizing | Repair & Hydrate | Natural Formula for All Skin Types | Cruelty Free & Non-Toxic 1.57 oz",
            "health3.png","4.3","$54","white"
        ],["Tru Alchemy Quench Crème Daily Facial Moisturizer | Hyaluronic Acid, Vitamin C, & Bakuchiol (better than Retinol) | Daily Firming Skin Moisturizer Face Cream for Women | 1.7 fl oz/48 g",
            "health4.png","4.0","$39","white"
    
        ],["Tru Alchemy Vitamin C Glow Serum | Facial Serum with Bakuchiol, Glycolic & Lactic Acid | Skin Illuminating Serum | Hydrating Face Wrinkle Serum | 1 fl oz/30 mly",
            "health5.png","4.0","$39","white"
    
        ],["Collagen Face Moisturizer with Airless Pump - Collagen Botanical Stem Cells Cream for Skin with Retinol, Niacinamide, Hyaluronic Acid - Anti-Aging Day & Night Cream - Made in USA (1.7 Oz)",
            "health6.png","4.5","$15","yellow"
        ],["No-Touch Thermometer for Adults and Kids, Digital Accurate Baby Thermometer with Fever Alarm, 1 Second Fast Result, FSA HSA Eligible, Easy to use, 2 in 1 Mode Health Care Thermometer",
            "health1.png","4.6","$20","yellow"
        ],["Talli Care - Smart Elderly Care Device - Track Medications, Meals & More with 1-Touch, Connects to The Talli App for Monitoring & Sharing Data with Loved Ones, Caregivers & Healthcare Professionals",
            "health2.png","3.8","$130","white"
        ]]
    
        let ps=[["NexiGo PS5 Slient Cooling Stand with RGB LED Light, Dual Charging Station Compatible with DualSense Edge Controller, 10 Game Slots",
            "ps1.png","4.4","$40","white"
        ],["BUFFALO External SSD 2TB - Compatible with PS4 / PS5 / Windows/Mac - USB-C - USB-A - USB 3.2 - External Solid State Drive - SSD-PG2.0U3B",
            "ps2.png","4.4","$130","white"
    
        ],["NexiGo PS5 Accessories Cooling Stand with LED Lighting Fans and Dual Controller Charger Station , Upgraded Multifunctional Stand , 10 Game Slots",
            "ps3.png","4.4","$35","white"
    
        ],["NexiGo PS5 Headphone Holder, [Minimalist Design] Mini Headphone Hanger with Supporting Bar, for Sony Playstation 5 Gaming Headset, White",
            "ps4.png","4.8","$10","yellow"
        ],["NexiGo PS5 4 Ports USB Hub, [Minimalist Design], High-Speed Data Transfer, Fast Charging Ports for DualSense Controller, Splitter Expander for Playstation 5 Disc & Digital Edition",
            "ps5.png","4.0","$10","white"
        ],["2.4GHz Wireless Gaming Headset for PC, PS5, PS4 - Lossless Audio USB & Type-C Gaming Headphones with Flip Microphone, 30-Hr Battery Gamer Headset for Switch, Laptop, Mobile, Mac",
            "ps6.png","4.4","$32","white"
        ]]
        let im=document.getElementById("im")
        let d_=document.getElementById("d_")
        let sub=document.getElementById("sub")

        let d=document.getElementsByClassName("d")
        let change=document.getElementById("change")


        let i=localStorage.getItem("i")
        i=parseInt(i)
        let items=[fitness,home_kitchen,body_beauty,dresses,pc,health,ps,digital,paint,phone,vr,ceiling]
        im.src=items[Math.floor(i/6)][i%6][1]
        d[0].textContent=items[Math.floor(i/6)][i%6][0]
        d[1].textContent="("+items[Math.floor(i/6)][i%6][2]+")"
        for(let s=0;s<items.length;s++)
        {
            for(let ss=0;ss<items[s].length;ss++)
            {
                items[s][ss][3]=items[s][ss][3].replace("$","")
                items[s][ss][3]+=" USD"
            }
        }
        if(items[Math.floor(i/6)][i%6][4]=="yellow")
        {
            items[Math.floor(i/6)][i%6][4]="darkgoldenrod"
        }
        d[2].textContent=items[Math.floor(i/6)][i%6][3]
        d_.style.color=items[Math.floor(i/6)][i%6][4]
        
        let added=JSON.parse(localStorage.getItem("added"))||[]

        if(added.includes(i))
        {
            sub.innerText="Remove from Cart"
        }

        sub.addEventListener("click",function()
    {
        if(sub.innerText==="Add to Cart")
        {
            sub.innerText="Remove from Cart"
            added.push(i)
            localStorage.setItem("added",JSON.stringify(added))
        }
        else{
            sub.innerText="Add to Cart"
            added.splice(added.indexOf(i),1)

            localStorage.setItem("added",JSON.stringify(added))
        }
    })
    let menu=document.querySelectorAll(".info label")

    for(let i=0;i<menu.length;i++)
        {
          menu[i].addEventListener("click",function()
        {
          window.location.href="/cart"
        })
        }
    change.addEventListener("click",function()
{
    window.location.href="/Products"
})
    })
