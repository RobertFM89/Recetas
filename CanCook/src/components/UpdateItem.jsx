import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const UpdateItem = ({ item, onUpdateItem }) => {
  const [name, setName] = useState(item.name)
  const [calories, setCalories] = useState(item.calories)
  const [image, setImage] = useState(item.image)
  const [servings, setServings] = useState(item.servings)
  const [isCompleted, setIsCompleted] = useState(item.isCompleted)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const updatedItem = {
      ...item,
      name,
      calories: parseInt(calories),
      image,
      servings: parseInt(servings),
      isCompleted
    }
    onUpdateItem(updatedItem)
    navigate('/dashboard')
  }

  return (
    <form onSubmit={handleSubmit} className='update-form'>
      <h3>Update recipe</h3>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </label>
      <label>
        Calories:
        <input type="number" value={calories} onChange={(e) => setCalories(e.target.value)} required />
      </label>
      <label>
        Image URL:
        <input type="text" value={image} onChange={(e) => setImage(e.target.value)} required />
      </label>
      <label>
        Servings:
        <input type="number" value={servings} onChange={(e) => setServings(e.target.value)} />
      </label>
      <label>
        Completed:
        <input type="checkbox" checked={isCompleted} onChange={(e) => setIsCompleted(e.target.checked)} />
      </label>
      <button type="submit" className="submit-btn">Update Recipe</button>
      <br />
      <br /><br /><br />
    </form>
  )
}

export default UpdateItem
