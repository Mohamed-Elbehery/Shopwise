import { NavLink } from "react-router-dom"
import { logo_dark } from '../../../constants';

const BottomLeftSide: React.FC = () => {
  return (
    <NavLink to="/">
      <img src={logo_dark} alt="logo-img" />
    </NavLink>
  )
}

export default BottomLeftSide
