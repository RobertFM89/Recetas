import React, { useState, useEffect } from 'react'
import List from '../components/List'
import CreateItem from '../components/CreateItem'
import itemsData from '../data/items.json'
import '../App.css'
import SortDropdown from '../components/SortDropdown'

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

  const handleSort = (sortBy) => {
    let sortedItems = []
    if (sortBy === 'name') {
      sortedItems = [...items].sort((a, b) => a.name.localeCompare(b.name))
    } else if (sortBy === 'calories') {
      sortedItems = [...items].sort((a, b) => a.calories - b.calories)
    } else if (sortBy === 'status') {
      sortedItems = [...items].sort((a, b) => a.isCompleted - b.isCompleted)
    }else {
      sortedItems = [...items]
    }
    setItems(sortedItems)
  }

  return (
    <main>
      <h2>Dashboard</h2>
      <div className='dashboard-div'>
        <List items={items} onDelete={handleDelete} />
        <div className='dashboard-sort-form'>
        <SortDropdown onSort={handleSort} />
          <CreateItem onAddItem={handleAddItem} />
        </div>
      </div>
    </main>
  )
}

export default Dashboard