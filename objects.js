// object creation
var pizza = new Object()
pizza.meat = 'Sausage'
pizza.cheese = 'Cheddar'
pizza.veggies = 'Olives'

// object creation, literal syntax
var pizza = {
    meat: 'Sausage',
    cheese: 'Cheddar',
    veggies: 'Olives'
}

// changing a property value
pizza.meat = 'Pepperoni'
//console.log(pizza.meat)

// dynamic property names
var topping = 'cheese'
//console.log(pizza.topping) // does NOT work because JS thinks topping is a property, does not replace with variable value
// use square brackets instead
//console.log(pizza[topping])

// looping through object property values
// properties === keys, just different word choice
var props = Object.keys(pizza)
props.forEach(function(prop) {
    // use dynamic property name access with square brackets
    //console.log(pizza[prop])
})
//console.log(props)

// nested data types
var movies = [
    {
        title: 'Star Wars',
        genre: 'Sci Fi',
        year: 1977,
        directors: [
            {
                name: 'George Lucas'
            },
            {
                name: 'JarJar'
            }
        ]
    },
    {
        title: 'Forest Gump',
        genre: 'Drama',
        year: 1995,
        directors: [
            {
                name: 'Robert Zemechas'
            }
        ]
    }
]

movies.forEach(function(movie) {

    var directors = movie.directors.map(function(director) {
        return director.name
    })

    directors = directors.join(', ')

    console.log(movie.title + ' - ' + movie.genre + ' (' + movie.year + ') - Directed by ' + directors /*movie.directors[0].name*/)
})

//
