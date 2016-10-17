console.log(items)

// Show me how to calculate the average price of all items. Please console.log the average.

var total = items.reduce(function(prevItem, curItem) {
    console.log(prevItem)
    console.log(curItem)
    return {
        price: prevItem.price + curItem.price
    }
}, {
    price: 0
})

console.log(Math.round(total.price / items.length * 100) / 100)


// Show me how to get an array of items that cost between $14.00 and $18.00 USD

var itemsBetween14And18 = items.filter(function(item) {
    return item.price >= 14 && item.price <= 18 && item.currency_code !== 'GBP'
})

itemsBetween14And18.forEach(function(item) {
    console.log(item.title + ' ' + item.price)
})

console.log(itemsBetween14And18)

// Show me how to find which items are made of wood. Please console.log the ones you find.
var itemsMadeOfWood = items.filter(function(item) {
    console.log(item)
    return item.materials.includes('wood')
})

console.log(itemsMadeOfWood)


// Show me how to calculate how many items were made by their sellers
var totalItemsMadeBySellers = items.reduce(function(total, curItem) {
    if (curItem.who_made === 'i_did') {
        return total + 1
    }
    else {
        return total
    }
}, 0)

console.log(totalItemsMadeBySellers)


//
