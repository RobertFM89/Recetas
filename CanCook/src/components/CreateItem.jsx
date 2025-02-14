
import React, { useState } from 'react'

const CreateItem = ({onAddItem}) => {

    const [name, setName] = useState('')
    const [calories, setCalories] = useState('')
    const [image, setImage] = useState('')
    const [servings, setServings] = useState('')
    const [isCompleted, setIsCompleted] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        const newItem = {
            id: Date.now().toString(),
            name,
            calories: parseInt(calories),
            image,
            servings: parseInt(servings),
            isCompleted
        }
        onAddItem(newItem)
        setName('')
        setCalories('')
        setImage('')
        setServings('')
        setIsCompleted(false)

    }
  return (
    <form onSubmit={handleSubmit} className="create-form">
        <h3>Create a new recipe</h3>
        <label>
            Name:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required/>
        </label>
        <label>
            Calories:
            <input type="number" value={calories} onChange={(e) => setCalories(e.target.value)} required/>
        </label>
        <label>
            Image URL:
            <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
        </label>
        <label>
            Servings:
            <input type="number" value={servings} onChange={(e) => setServings(e.target.value)} />
        </label>
        <label>
            Completed:
            <input type="checkbox" checked={isCompleted} onChange={(e) => setIsCompleted(e.target.value)} />
        </label>
        <button type="submit" className="submit-btn">Add Recipe</button>
      
    </form>
  )
}

export default CreateItem
