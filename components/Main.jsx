import { useState } from 'react'

export default function Main(){
    const [ingredients, setIngredients] = useState([])

    function handleSubmit(event) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    const ingredientsListItem = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    return (
        <main className='main'>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='e.g. oregano'
                    aria-label='Add ingredient'
                    name='ingredient'
                />
                <button>Add ingredient</button>
            </form>
            <ul>
                {ingredientsListItem}
            </ul>
        </main>
    )
}