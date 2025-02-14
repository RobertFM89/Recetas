import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import itemsData from '../data/items.json'
import UpdateItem from '../components/UpdateItem'

const ItemDetails = () => {
  const { id } = useParams()
  const [items, setItems] = useState(() => {
    const storedItems = localStorage.getItem('items')
    return storedItems ? JSON.parse(storedItems) : itemsData
  })
  const item = items.find(item => item.id === id)

  if (!item) {
    return <h2>Item not found</h2>
  }

  const handleUpdateItem = (updatedItem) => {
    const updatedItems = items.map(item => (item.id === updatedItem.id ? updatedItem : item))
    setItems(updatedItems)
    // Save updated items to localStorage or backend if needed
    localStorage.setItem('items', JSON.stringify(updatedItems))
  }

  return (
    <main>
      <h2>{item.name}</h2>
      <p>Calories: {item.calories}</p>
      <img src={item.image} alt={item.name} width="200" />
      <p>Servings: {item.servings}</p>
      <p>Status: {item.isCompleted ? '✔️' : '❌'}</p>
      <UpdateItem item= {item}  onUpdateItem={handleUpdateItem}/>
    </main>
  )
}

export default ItemDetails