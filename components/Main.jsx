import { useState } from 'react'

export default function Main(){
    const [ingredients, setIngredients] = useState([])

    function addIgrendient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    const ingredientsListItem = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

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
            {ingredients.length > 0 && <section>
                <h2>Ingredients on hand:</h2>
                <ul className='ingredients-list'>{ingredientsListItem}</ul>
            </section>}
        </main>
    )
}