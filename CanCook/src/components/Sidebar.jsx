import { Link } from 'react-router-dom'
const Sidebar = () => {
  return (
    <aside>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      {/* Add more links as needed */}
    </ul>
  </aside>
  )
}

export default Sidebar
