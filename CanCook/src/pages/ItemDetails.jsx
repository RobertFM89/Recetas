import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import itemsData from '../data/items.json'
import UpdateItem from '../components/UpdateItem'
import Button from '../components/Button'

const ItemDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [items, setItems] = useState(() => {
    const storedItems = localStorage.getItem('items')
    return storedItems ? JSON.parse(storedItems) : itemsData
  })
  const [showUpdateForm, setShowUpdateForm] = useState(false)
  const item = items.find(item => item.id.toString() === id)

  if (!item) {
    return <h2>Item not found</h2>
  }

  const handleUpdateItem = (updatedItem) => {
    const updatedItems = items.map(item => (item.id === updatedItem.id ? updatedItem : item))
    setItems(updatedItems)
    localStorage.setItem('items', JSON.stringify(updatedItems))
  }

  const handleShowUpdateForm = () => {
    setShowUpdateForm(true)
  }

  const handleBackToDashboard = () => {
    navigate('/dashboard')
  }

  return (
    <div className='item-details'>
      <div className='item-details-info'>
        <h2>{item.name}</h2>
        <img src={item.image} alt={item.name} width="300" />
        <div className="item-details-text">
        <p>Ingredients: {item.ingredients}</p>
        <p>Instructions: {item.instructions}</p>
        <p>Calories: {item.calories}</p>
        <p>Servings: {item.servings}</p>
        <p>Status: {item.isCompleted ? '✔️' : '❌'}</p>
        </div>
        <Button onClick={handleShowUpdateForm} className="button">Update</Button>
        <Button onClick={handleBackToDashboard} className="button">Go Back</Button>
      </div>
      {showUpdateForm && <UpdateItem item={item} onUpdateItem={handleUpdateItem} />}
    </div>
  )
}

export default ItemDetails