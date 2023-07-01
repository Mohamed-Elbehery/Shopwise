import Collection from "./Collection"
import { collections } from "../../constants"

const Collections: React.FC = () => {
  return (
    <div className="collections">
      {collections.map((collection, index) => ( <Collection key={index} {...collection} order={index + 1} /> ))}
    </div>
  )
}

export default Collections
