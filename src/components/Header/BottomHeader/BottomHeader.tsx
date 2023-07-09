import BottomLeftSide from "./BottomLeftSide"
import BottomRightSide from "./BottomRightSide"
import MobileNavigation from "./MobileNavigation"

const BottomHeader: React.FC = () => {
  return (
    <div className="container bottom-container py-[34px] sticky z-[999]">
      {/* Left Side */}
      <BottomLeftSide />
      {/* Right Side */}
      <BottomRightSide />
      <MobileNavigation />
    </div>
  )
}

export default BottomHeader
