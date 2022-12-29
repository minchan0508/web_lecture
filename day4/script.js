const arr = ['2000', '1000','3000','5000','4000' ]
function getWonprice(pricelist) {
    // console.log(arr)
    const cutArr = pricelist.filter((e) => Number(e) > 1000)
    const map = cutArr.map((e) => e+"원")
    // console.log(cutArr)
    return map;
}
console.log(getWonprice(arr));