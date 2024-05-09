let url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a`

fetch(url)
    .then(res => res.json())
    .then(data => {
        let html = `<div class="row m-5">`
        
      
        if (data.drinks) {
            
            data.drinks.forEach(cocktail => {
                html += `<div class="col-4 border">
                            <a href="#">
                                <img src="${cocktail.strDrinkThumb}">
                            </a>
                            <div>
                                <h5> 
                                    <b>${cocktail.strCategory}</b> - <b>${cocktail.strGlass}</b>
                                </h5>
                            </div>
                            <div class = "info">
                                <p> 
                                    ${cocktail.strInstructions} 
                                </p>
                            </div>
                            <div class = "ingredientes">
                                <ul>
                                    <li>
                                        <p> 
                                            ${cocktail.strIngredient1} 
                                        </p>
                                    </li>
                                    <li>
                                        <p> 
                                            ${cocktail.strIngredient2} 
                                        </p>
                                    </li>
                                    <li>
                                        <p> 
                                            ${cocktail.strIngredient3} 
                                        </p>
                                    </li>
                                </ul>
                            </div>
                            <div class = "link">
                                    <a href="${cocktail.strDrinkThumb}"> 
                                        Enlace de imagen 
                                    </a>    
                                </p>
                            </div>
                        </div>`;
            })
        } 

        html += `</div>`;
        document.getElementById("charContent").innerHTML = html;
    })

