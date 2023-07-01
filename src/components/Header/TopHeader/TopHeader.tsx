import LeftSide from "./TopLeftSide"
import RightSide from "./TopRightSide"

const TopHeader: React.FC = () => {
  return (
    <>
      <div className="container top-container">
        <LeftSide />
        <RightSide />
      </div>
      <hr className="w-full border-gray" />
    </>
  )
}

export default TopHeader
