import React, { useState, useEffect } from 'react'
import List from '../components/List'
import CreateItem from '../components/CreateItem'
import itemsData from '../data/items.json'

const Dashboard = () => {
  const [items, setItems] = useState(() => {
    const storedItems = localStorage.getItem('items')
    return storedItems ? JSON.parse(storedItems) : itemsData
  })

  useEffect(() => {
    const storedItems = localStorage.getItem('items')
    if (storedItems) {
      setItems(JSON.parse(storedItems))
    } else {
      setItems(itemsData)
    }
  }, [])

  const handleAddItem = (newItem) => {
    const updatedItems = [...items, newItem]
    setItems(updatedItems)
    localStorage.setItem('items', JSON.stringify(updatedItems))
  }

  const handleDelete = (id) => {
    const updatedItems = items.filter(item => item.id !== id)
    setItems(updatedItems)
    localStorage.setItem('items', JSON.stringify(updatedItems))
  }

  return (
    <main>
      <h2>Dashboard</h2>
      <div className='dashboard-div'>
        <CreateItem onAddItem={handleAddItem} />
        <List items={items} onDelete={handleDelete} />
      </div>
    </main>
  )
}

export default Dashboard