const data = [
    {
        'id': '01',
        'title': "Mini Denim Shorts",
        // 'pic': require('../../images/miniDenimShorts.png'),
        'price': 24,
        stars: 4,
        'cat': 'women'

    },
    {
        'id': '02',
        'title': "Nike Air Force 1",
        // 'pic': require('../../images/pants.png'),
        'price': 25,
        stars: 1,
        'cat': 'women'

    },
    {
        'id': '03',
        'title': "Women Track Suite",
        // 'pic': require('../../images/womenTrackSuite.png'),
        'price': 30,
        stars: 4,
        cat: 'men'

    },
]
var newArray = data.filter(function (el) {
    return el.cat === "women";
}

);
console.log(newArray);