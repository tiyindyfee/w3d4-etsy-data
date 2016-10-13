// standard way that developers make arrays (lists)
var invites = ['Matt', 'Susan', 'Jessica', 'John']

// new object approach, with preset size
var tasks = new Array(3)
tasks[0] = 'Buy food'
tasks[1] = 'Feed pets'
tasks[2] = 'Cook food'

// new object with, with preset values
var inbox = new Array('Water Bill', 'Pay Check', 'Greeting Card')

// add something at index 3
inbox[3] = 'You have rich uncle that wants to give you money.'

// push onto the end, pop something off the end
tasks.push('Do homework')
var removedItemFromEnd = tasks.pop()

// unshift onto the beginning, shift something off the beginning
tasks.unshift('Watch Netflix')
var removedItemFromBeginning = tasks.shift()

//tasks[0] = 'Watch Hulu'
//console.log(tasks)

// easy way
var sliceOfInbox = inbox.slice(1,3)

// hard way
//var sliceOfInbox = []
//sliceOfInbox[0] = inbox[1]
//sliceOfInbox[1] = inbox[2]

//console.log(sliceOfInbox)

// add something in the middle of the array
inbox.splice(1, 0, 'You Are Hired', 'Job Offer')
//console.log(inbox)

// add something at the end of the array manually
//console.log(inbox.length)
inbox[inbox.length] = 'Invite To Spotify'
//console.log(inbox)

// does an item exist in the array
var hasJobOffer = inbox.includes('Job Offer')
//console.log(hasJobOffer)

// find the index of Job Offer
var jobOfferIndex = inbox.indexOf('Job Offer')
//console.log(jobOfferIndex)

// find the index of something that doesn't exist, returns -1
var jobOfferIndex = inbox.indexOf('Job Does Not Exist')
//console.log(jobOfferIndex)

//inbox.push('Job Salary')

// if (inbox.indexOf('Job Salary') === -1) {
//     console.log('No salary yet.')
// }
// else {
//     console.log('It is finally here!')
// }

//console.log(jobOfferIndex)
//console.log(inbox)

// finds the first one as a string
var matches = inbox.find(function(item) {
    return item.includes('Job')
})

// finds all the matches as an array
function checkForJob(item) {
    return item.includes('Job')
}

// use filter method on any array, pass in function name to filter, using declarative syntax
var matches = inbox.filter(checkForJob)

// using filter with an anonymous function
var matches = inbox.filter(function(item) {
    return item.includes('Job')
})
//['Job Offer', 'Job Salary']

//console.log(matches)

// the hard way of filtering, using imperative syntax
var matches = []
for (var i = 0; i < inbox.length; i++) {
    //console.log(i + '. ' + inbox[i])
    var hasJob = checkForJob(inbox[i])
    if (hasJob) {
        matches.push(inbox[i])
    }
}
//console.log(matches)

// reverse the order of the array
//inbox = inbox.reverse()
//console.log(inbox)

// looping through an array, declarative syntax
var fruit = ['Apple','Banana','Cherry','Watermelon']

fruit.forEach(function(item) {
    //console.log(item.toUpperCase())
})

// map transforms an array of items, one item at a time
fruit = fruit.map(function(item, i) {
    if (i === 2) {
        return `<section>${item.toUpperCase()}</section>`
    }
    else {
        return `<div>${item}</div>`
    }
})

//console.log(fruit)

// sum prices
var prices = [
    {price: 7.98},
    {price: 14.99},
    {price: 2.30},
    {price: 12.80}
]

var total = prices.reduce(function(previous, current) {
    return {price: previous.price + current.price}
}, {price: 0})

//console.log(total)

var avgPrice = total.price / prices.length
//console.log(avgPrice)



//
