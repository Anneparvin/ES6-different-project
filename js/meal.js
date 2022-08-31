const loadMeals=()=>{
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=a')
    .then(res=>res.json())
    .then(data=>displayMeals(data.meals));
}
const displayMeals = meals =>{
    console.log(meals.slice(0,5));
    const mealsContainer = document.getElementById('meal-container');
    meals.forEach(meal =>{
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        mealDiv.innerHTML =`
        <div class="card h-100">
                        <img src="${meal.strMealThumb.jpg}" class="card-img-top" alt="picture">
                        <div class="card-body">
                          <h5 class="card-title">${meal.strMeal}</h5>
                          <p class="card-text">${meal.strIngredient20}</p>
                        </div>
                        <div class="card-footer">
                          <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                      </div>


        `
        mealsContainer.appendChild(mealDiv);
    })    
}
loadMeals();