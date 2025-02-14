import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'


export default function HomePage() {
    const navigate = useNavigate()
    const handleButtonClick = () => {
        navigate('/dashboard')
    }
  return (
    <div className='home-page'>
        <Button onClick={handleButtonClick} className={'button'}>See the recipes!</Button>
    </div>
  )
}
