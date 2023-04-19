// WRONG ❌❌❌

const shower_and_shave = () => {
    console.log('shower')
    console.log('shave')
}

// CORRECT ✅✅✅

const shower = () => {
    console.log('shower')
}

const shave = () => {
    console.log('shave')
}



let arr = [1,2,3,4,5]
// WRONG ❌❌❌
for (let i = 0; i < 5; i++){
    arr[i] += 1
}
// CORRECT ✅✅✅
for (let i=0; i < arr.length; i++){
    arr[i] += 1
}
// EVEN BETTER ✅✅✅
arr.forEach((item) => item + 1)


// SMELLY ❌❌❌
const car = (make, model, year, color, miles, price, mph) => {
    return `The ${color} ${make} ${model} was made in ${year}. It reaches 
    speeds of ${mph} miles per hour, and currently has ${miles} miles on it.
    It can be yours today for $${price}`
}
// FRESH ✅✅✅
const car2 = (props) => {
    return `The ${props.color} ${props.make} ${props.model} was made in ${props.year}. It reaches 
    speeds of ${props.mph} miles per hour, and currently has ${miles} miles on it.
    It can be yours today for $${props.price}`
}


// SMELLY ❌❌❌
let makeOfTheCar = "Subaru"

// FRESH ✅✅✅
let carMake = "Subaru"



// SMELLY ❌❌❌
const xyz = 1

// FRESH ✅✅✅
const incrementer = 1

