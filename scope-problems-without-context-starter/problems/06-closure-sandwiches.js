/***********************************************************************
Let's practice writing closures by creating a function named `sandwichMaker()`.
This function will return another function that will accept a string to add
to the sandwich order (which will start off with a default "tomato" ingredient),
separating each incoming ingredient with "and".

Look below to see how this function is invoked:

let sandwich = sandwichMaker(); // => returns a function
sandwich("spinach") // => "One sandwich with tomato and spinach"
sandwich("jelly") // => "One sandwich with tomato and spinach and jelly"
sandwich("bread") // => "One sandwich with tomato and spinach and jelly and bread"


let sandwich2 = sandwichMaker(); // => returns a function
sandwich2("pb") // => "One sandwich with tomato and pb"

***********************************************************************/
// write a function that will accept a string to add to the sandwich order.
// set up an array that only contains tomato
const sandwichMaker = () => {
  let ingredients = ['tomato']
  return newIngredient => {
    ingredients.push(newIngredient)
    let result = "One sandwich with"
    ingredients.forEach((ele, i) => {
      result += " " + ele
      if (i !== ingredients.length - 1) {
        result += " and"
      }
    })
    return result
  }
}

let sandwich = sandwichMaker(); // => returns a function
console.log(sandwich("spinach"))// => "One sandwich with tomato and spinach"
console.log(sandwich("jelly"))// => "One sandwich with tomato and spinach and jelly"
console.log(sandwich("bread"))// => "One sandwich with tomato and spinach and jelly and bread"


let sandwich2 = sandwichMaker(); // => returns a function
sandwich2("pb") // => "One sandwich with tomato and pb"
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = sandwichMaker;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
