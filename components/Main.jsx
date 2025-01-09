import { useState } from 'react'
import IngredientsList from './IngredientsList'
import Recipe from './Recipe'

export default function Main(){
    const [ingredients, setIngredients] = useState([])

    function addIgrendient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    const ingredientsListItem = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    const [recipeShown, setRecipeShown] = useState(false)

    function toggleRecipeShown() {
        setRecipeShown(prevRecipeShown => !prevRecipeShown)
    }

    return (
        <main className='main'>
            <form action={addIgrendient}>
                <input
                    type='text'
                    placeholder='e.g. oregano'
                    aria-label='Add ingredient'
                    name='ingredient'
                />
                <button>Add ingredient</button>
            </form>
            {ingredients.length > 0 && 
                <IngredientsList 
                    ingredients={ingredients}
                    onGetRecipe={toggleRecipeShown}
                />
            }
            {recipeShown && <Recipe />}
        </main>
    )
}