import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from './Button'

const UpdateItem = ({ item, onUpdateItem }) => {
  const [name, setName] = useState(item.name)
  const [calories, setCalories] = useState(item.calories)
  const [ingredients, setIngredients] = useState(item.ingredients)
  const [instructions, setInstructions] = useState(item.instructions)
  const [image, setImage] = useState(null)
  const [servings, setServings] = useState(item.servings)
  const [isCompleted, setIsCompleted] = useState(item.isCompleted)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const updatedItem = {
      ...item,
      name,
      calories: parseInt(calories),
      ingredients,
      instructions,
      image: image ? URL.createObjectURL(image) : item.image,
      servings: parseInt(servings),
      isCompleted
    }
    onUpdateItem(updatedItem)
    navigate('/dashboard')
  }

  const handleImageChange = (e) => {
    setImage(e.target.files[0])
  }

  return (
    <form onSubmit={handleSubmit} className='update-form'>
      <h3>Update recipe</h3>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </label>
      <label>
        Ingredients:
        <input type="text" value={ingredients} onChange={(e) => setIngredients(e.target.value)} required />
      </label>
      <label>
        Instructions:
        <input type="text" value={instructions} onChange={(e) => setInstructions(e.target.value)} required />
      </label>
      <label>
        Calories:
        <input type="number" value={calories} onChange={(e) => setCalories(e.target.value)} required />
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
        <input type="checkbox" checked={isCompleted} onChange={(e) => setIsCompleted(e.target.checked)} />
      </label>
      <Button type="submit" className="button">Update Recipe</Button>
     
    </form>
  )
}

export default UpdateItem
