import BottomHeader from "./BottomHeader/BottomHeader"
import TopHeader from "./TopHeader/TopHeader"

const Header: React.FC = () => {
  return (
    <header className="flex flex-col items-center font-poppins">
      {/* Top Header */}
      <TopHeader /> 
      {/* Bottom Header */}
      <BottomHeader />
    </header>
  )
}

export default Header
