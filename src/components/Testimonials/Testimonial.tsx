import { ITestimonial } from "../../interfaces"

const Testimonial: React.FC<ITestimonial> = ({ img, description, job, name }) => {
  return (
    <div className="testimonial mt-6">
      <p className="text-base text-grey font-poppins leading-[28px] mx-auto text-center w-[60%]">{description}</p>
      <div className="flex items-center justify-center gap-3 mt-5">
        <img src={img} alt={`${name}-img`} />
        <div className="flex flex-col gap-1">
          <span className="text-base font-roboto font-medium text-secondary_dark">{name}</span>
          <span className="text-base font-poppins font-medium text-primary">{job}</span>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
