// The OLD WAY: Asynchronous JS with Callbacks


function getRecipe() {
    setTimeout(() => {
        const recipeID = [523, 883, 432, 974];
        console.log(recipeID);

        setTimeout(id => {
            const recipe = {
                title: 'Fresh Totmato Pasta',
                publisher: 'Yudha'
            };
            console.log(`${id}: ${recipe.title}`);

            setTimeout(publisher => {
                const recipe2 = {
                    title: 'Italian Pizza',
                    publisher: 'Yudha'
                };
                console.log(recipe);
            }, 1500, recipe.publisher);

        }, 1500, recipeID[2]);

    }, 1500);
}
getRecipe();