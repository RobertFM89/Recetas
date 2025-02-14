import React from 'react'
import ListItem from './ListItem'

const List = ({ items = [], onDelete }) => {
  // Ensure items is an array
  if (!Array.isArray(items)) {
    return null
  }

  return (
    <ul>
      {items.map(item => (
        <ListItem key={item.id} item={item} onDelete={onDelete} />
      ))}
    </ul>
  )
}

export default List