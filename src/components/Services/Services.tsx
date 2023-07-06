import { services } from "../../constants"
import Service from "./Service"

const Services: React.FC = () => {
  return (
    <section className="container services-container mt-20 pb-20">
      {services.map((service, index) => <Service key={index} {...service} />)}
    </section>
  )
}

export default Services
