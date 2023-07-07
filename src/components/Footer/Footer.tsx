import BottomFooter from "./BottomFooter/BottomFooter"
import TopFooter from "./TopFooter/TopFooter"

const Footer: React.FC = () => {
  return (
    <footer className="bg-black">
      <TopFooter />
      <BottomFooter />
    </footer>
  )
}

export default Footer
