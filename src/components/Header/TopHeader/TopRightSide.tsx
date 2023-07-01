import { PiShuffleLight } from 'react-icons/pi';
import { IoMdHeartEmpty } from 'react-icons/io';
import { BsPerson } from 'react-icons/bs';
import {NavLink} from 'react-router-dom'

const RightSide: React.FC = () => {
  return (
    <nav className='flex items-center gap-4'>
      <NavLink className="nav-links" to={"compare"}><PiShuffleLight /> Compare</NavLink>
      <NavLink className="nav-links" to={"wishlist"}><IoMdHeartEmpty /> Wishlist</NavLink>
      <NavLink className="nav-links" to={"login"}><BsPerson /> Login</NavLink>
    </nav>
  )
}

export default RightSide
