import { PiShuffleLight } from 'react-icons/pi';
import { IoMdHeartEmpty } from 'react-icons/io';
import { BsPerson } from 'react-icons/bs';
import {NavLink} from 'react-router-dom'

const RightSide: React.FC = () => {
  return (
    <nav className='flex items-center gap-4'>
      <NavLink className="nav-links" to={"compare"}><PiShuffleLight /> Compare</NavLink>
      <NavLink className="nav-links" to={"wishlist"}><IoMdHeartEmpty /> Wishlist</NavLink>
      {JSON.parse(localStorage.getItem('user'))?.isLoggedIn ? <span>Hello, <span className='text-primary font-semibold'>{JSON.parse(localStorage.getItem('user')).name}</span></span> : <NavLink className="nav-links" to={"login"}><BsPerson /> Login</NavLink>}
    </nav>
  )
}

export default RightSide
