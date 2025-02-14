import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import PropTypes from 'prop-types'

const ListItem = ({ item, onDelete }) => {
  return (
    <li className='list-item'>
      <img src={item.image} alt={item.name} width="200" />
      <h3>{item.name}</h3>
      <p>Calories: {item.calories}</p>
      <p>Servings: {item.servings}</p>
      <p>Status: {item.isCompleted ? '✔️' : '❌'}</p>
      <Link to={`/item/${item.id}`}>View Details</Link>
      <Button onClick={() => onDelete(item.id)} className={'button'}>Delete</Button>
    </li>
  )
}

ListItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    calories: PropTypes.number.isRequired,
    servings: PropTypes.number.isRequired,
    isCompleted: PropTypes.bool.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
}

export default ListItem
