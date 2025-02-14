
import React, { useState } from 'react'
import Button from './Button'

const CreateItem = ({onAddItem}) => {

    const [name, setName] = useState('')
    const [calories, setCalories] = useState('')
    const [image, setImage] = useState(null)
    const [ingredients, setIngredients] = useState('')
    const [instructions, setInstructions] = useState('')
    const [servings, setServings] = useState('')
    const [isCompleted, setIsCompleted] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        const newItem = {
            id: Date.now().toString(),
            name,
            calories: parseInt(calories),
            ingredients,
            instructions,
            image: URL.createObjectURL(image),
            servings: parseInt(servings),
            isCompleted
        }
        onAddItem(newItem)
        setName('')
        setCalories('')
        setIngredients('')
        setInstructions('')
        setImage(null)
        setServings('')
        setIsCompleted(false)
    }

    const handleImageChange = (e) => {
        setImage(e.target.files[0])
      }

  return (
    <form onSubmit={handleSubmit} className="create-form">
        <h3>Create a new recipe</h3>
        <label>
            Name:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required/>
        </label>
        <label>
            Ingredients:
            <input type="text" value={ingredients} onChange={(e) => setIngredients(e.target.value)} required/>
        </label>
        <label>
            Instructions:
            <input type="text" value={instructions} onChange={(e) => setInstructions(e.target.value)} required/>
        </label>
        <label>
            Calories:
            <input type="number" value={calories} onChange={(e) => setCalories(e.target.value)} required/>
        </label>
        
        <label>
            Servings:
            <input type="number" value={servings} onChange={(e) => setServings(e.target.value)} />
        </label>
        <label>
            Image:
            <input type="file" onChange={handleImageChange} />
        </label>
        <label>
            Completed:
            <input type="checkbox" checked={isCompleted} onChange={(e) => setIsCompleted(e.target.value)} />
        </label>
        <Button type="submit" className="button">Add Recipe</Button>
      
    </form>
  )
}

export default CreateItem
