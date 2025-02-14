import React from 'react'
import { useNavigate } from 'react-router-dom'


export default function HomePage() {
    const navigate = useNavigate()
    const handleButtonClick = () => {
        navigate('/dashboard')
    }
  return (
    <div>
      <h2>Welcome to the Home Page</h2>
        <button onClick={handleButtonClick}>See the recipes!</button>
    </div>
  )
}
