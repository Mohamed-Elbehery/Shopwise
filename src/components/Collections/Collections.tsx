import Collection from "./Collection"
import { collections } from "../../constants"

const Collections: React.FC = () => {
  return (
    <section className="collections">
      {collections.map((collection, index) => ( <Collection key={index} {...collection} order={index + 1} /> ))}
    </section>
  )
}

export default Collections
