// web storage
// Local Storage
// Session Storage
// # Web Storage

// # Local Storage 
//     - Persists on page refresh and closing of the browser

// # Session Storage
//     - Does not persist on refresh or closing of the browser
    
// ## Both Session and Local storage are saved as JSON in the browser


//getter = ways to get data



// JSON - Javascript Object Notatation

// Setter - Save data in local storage (key = value pairs)
// set item tkaes two arguments
// this saves to web storage  inspect-applications-local stoage to acesss this data
// json.strinfy = turn js data into Java scripot object notatation ie Json
// const newSub = document['submit']
// newSub.addEventListener('submit', function(e){
//     e.preventDefault()
    localStorage.setItem("name", "steve")
    localStorage.setItem("age", 10)
    localStorage.setItem('isAlive',true)
    localStorage.setItem("friends", JSON.stringify["mark", "tina", "jay"])
    localStorage.setItem('address', JSON.stringify({street: "223 street", city: "FL"}))
// })




//getter = ways to get data
// get item only takes one argument, name passed in we should get steve from saved data
const name = localStorage.getItem('name')
const age = localStorage.getItem('age')
const isAlive = localStorage.getItem('isAlive')
console.log(name)
console.log(age)
console.log(isAlive)

/// when grabbing an complex object we need to use the oppisote of ST5RNGIFY
// JSON.parse => Turns JSON into JS
const fri = JSON.parse(localStorage.getItem("friends"))
console.log(friends)

const add = JSON.parse(localStorage.getItem("address"))
console.log(address)

// Remove= removes stuff from local storage
// localStorage.removeItem("age")


// does the same thing as local storage.get item

// didnt work for me 
// localStorage.dinosaur = "T-rex"


// this wokred so alwyas use this

const dinosaur = localStorage.getItem('T-rex')