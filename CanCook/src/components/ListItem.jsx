import React from 'react'
import { Link } from 'react-router-dom'

const ListItem = ({ item, onDelete }) => {
  return (
    <li>
      <h3>{item.name}</h3>
      <p>Calories: {item.calories}</p>
      <img src={item.image} alt={item.name} width="100" />
      <p>Servings: {item.servings}</p>
      <p>Status: {item.isCompleted ? '✔️' : '❌'}</p>
      <Link to={`/item/${item.id}`}>View Details</Link>
      <button onClick={() => onDelete(item.id)}>Delete</button>
    </li>
  )
}

export default ListItem