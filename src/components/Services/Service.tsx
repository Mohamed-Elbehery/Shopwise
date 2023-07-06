import { IService } from "../../interfaces"

const Service: React.FC<IService> = ({ Icon, title, description }) => {
  return (
    <div className="flex flex-col items-center gap-2 service px-10">
      <span>{<Icon />}</span>
      <h1 className="text-xl font-roboto font-medium text-secondary_light mt-2">{title}</h1>
      <p className="text-center text-base font-poppins text-grey mx-auto leading-[28px]">{description}</p>
    </div>
  )
}

export default Service
