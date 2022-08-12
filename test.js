
let data = [
    {
        'id': '01',
        'title': "Mini Denim Shorts",
        // 'pic': require('../src/images/miniDenimShorts.png'),
        'price': 300,
        stars: 4,
        category: 'women',
        essential: true,
        accessory: false,
        'Qty': 1

    },
    {
        'id': '02',
        'title': "Nike Air Force 1",
        // 'pic': require('../src/images/pants.png'),
        'price': 120,
        stars: 4,
        category: 'men',
        essential: true,
        bestDeal: true,
        'Qty': 1



    },
    {
        'id': '03',
        'title': "Track Suite",
        // 'pic': require('../src/images/womenTrackSuite.png'),
        'price': 450,
        stars: 4,
        category: 'women',
        essential: true,
        'Qty': 1



    },
    {
        'id': '04',
        'title': "Leather Backpack",
        // 'pic': require('../src/images/leatherbag.jpg'),
        'price': 1500,
        stars: 4,
        category: 'women',
        essential: true,
        accessory: true,
        bestDeal: false,
        'Qty': 1





    },
    {
        'id': '05',
        'title': "Nike Puffer Jacket",
        // 'pic': require('../src/images/puffer.png'),
        'price': 50,
        stars: 4,
        category: 'men',
        bestSeller: true,
        'Qty': 1


    },
    {
        'id': '06',
        'title': "Black Attire",
        // 'pic': require('../src/images/blackAttire.png'),
        'price': 1600,
        stars: 4,
        category: 'women',
        bestSeller: true,
        'Qty': 1



    },
    {
        'id': '07',
        'title': "Women Glasses",
        // 'pic': require('../src/images/glasses.png'),
        'price': 160,
        stars: 4,
        category: 'women',
        bestSeller: true,
        accessory: true,
        bestDeal: true,
        'Qty': 1





    },
    {
        'id': '08',
        'title': "Kid's Jacket",
        // 'pic': require('../src/images/kidJacket.webp'),
        'price': 120,
        stars: 4,
        category: 'kids',
        bestSeller: true,
        bestDeal: true,
        'Qty': 1

    },
    {
        'id': '09',
        'title': "Kid's Jacket",
        // 'pic': require('../src/images/kidJacket.webp'),
        'price': 30,
        stars: 4,
        category: 'kids',
        'Qty': 1

    },
    {
        'id': '10',
        'title': "Black Attire",
        // 'pic': require('../src/images/blackAttire.png'),
        'price': 1800,
        stars: 4,
        category: 'women',
        'Qty': 1



    },

]



data.sort((a, b) => {
    let fa = a.title.toLowerCase(),
        fb = b.title.toLowerCase();

    if (fa < fb) {
        return -1;
    }
    if (fa > fb) {
        return 1;
    }
    return 0;
});
console.log(data);