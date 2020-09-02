async function loadRepos() {
    for (let i = 0; i < 6; i++) {
        let response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
        let receita = await response.json();
        var nomerec = receita.meals[0].strMeal
        var modprep = receita.meals[0].strInstructions
        var foto = receita.meals[0].strMealThumb
        var section = document.getElementById('sec2')
        var ingredientes = [receita.meals[0].strIngredient1 +'<br>'+ '.'+receita.meals[0].strIngredient2+'<br>'+ '.'+ receita.meals[0].strIngredient3 +'<br>'+ '.'+ receita.meals[0].strIngredient4 +'<br>'+ '.'+ receita.meals[0].strIngredient5 +'<br>'+ '.'+ receita.meals[0].strIngredient6 +'<br>'+ '.'+ receita.meals[0].strIngredient7 +'<br>'+ '.'+ receita.meals[0].strIngredient8]


        



        sec2.innerHTML += "<div id='card'> <br> <p>" + nomerec + "</p> <br> <p>Mode de preparo: <br>" + modprep + "</p> <div id='foto'> <img id='fotorec' src='" + foto + "' alt=''> <p id='ingredientes'>INGREDIENTES: <br>"+ingredientes+"</p></div></div>"


    }

    console.log(ingredientes);
}

loadRepos()