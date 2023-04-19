const meal = document.querySelector('#meal')
let meals = []

function getMeals() {
    axios
        .get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
        .then(function (response) {
            meals = response.data.meals
            render()
        })
}
function render() {
    const mealDB = meals.map(function (food) {
        return `
            <li>
            <img src='${food.strMealThumb}'>
            <p>${food.strMeal}</p>
            <hr>
            </li>
        `
    }).join('')
    meal.innerHTML = mealDB
}
getMeals()