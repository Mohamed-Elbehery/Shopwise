import { PiShuffleLight } from 'react-icons/pi';
import { IoMdHeartEmpty } from 'react-icons/io';
import { BsPerson } from 'react-icons/bs';
import {NavLink, useNavigate} from 'react-router-dom'

const RightSide: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    JSON.parse(localStorage.getItem('user'))?.isLoggedIn && localStorage.removeItem('user')
    navigate('/login');
  }

  return (
    <nav className='flex items-center gap-4'>
      <NavLink className="nav-links" to={"compare"}><PiShuffleLight /> Compare</NavLink>
      <NavLink className="nav-links" to={"wishlist"}><IoMdHeartEmpty /> Wishlist</NavLink>
      {JSON.parse(localStorage.getItem('user'))?.isLoggedIn ? <span className='text-[14px]'>Hello, <span className='text-primary font-semibold capitalize'>{JSON.parse(localStorage.getItem('user')).name}</span></span> : <NavLink className="nav-links" to={"login"}><BsPerson /> Login</NavLink>}
      {JSON.parse(localStorage.getItem('user'))?.isLoggedIn && <span onClick={handleClick} className='font-bold text-[14px] hover:text-primary cursor-pointer'>Signout</span>}
    </nav>
  )
}

export default RightSide
