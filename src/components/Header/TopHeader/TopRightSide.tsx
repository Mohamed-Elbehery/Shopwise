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
    <nav className='flex items-center gap-4 max-[440px]:gap-2'>
      <button className="nav-links cursor-pointer"><PiShuffleLight className="max-[440px]:hidden" /> Compare</button>
      <button className="nav-links cursor-pointer"><IoMdHeartEmpty className="max-[440px]:hidden" /> Wishlist</button>
      {JSON.parse(localStorage.getItem('user'))?.isLoggedIn ? <span className='text-[14px] max-[440px]:text-[13px]'><span className='max-[440px]:hidden'>Hello,&nbsp;</span><span className='text-primary font-semibold capitalize'>{JSON.parse(localStorage.getItem('user')).name.split(" ")[0]}</span></span> : <NavLink className="nav-links" to={"login"}><BsPerson /> Login</NavLink>}
      {JSON.parse(localStorage.getItem('user'))?.isLoggedIn && <span onClick={handleClick} className='font-bold text-[14px] max-[440px]:text-[13px] hover:text-primary cursor-pointer'>Signout</span>}
    </nav>
  )
}

export default RightSide
