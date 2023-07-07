import { american_express, discover, master_card, paypal, visa } from "../../../constants"

const BottomFooter: React.FC = () => {
  return (
    <div className="border-t border-[rgba(255,255,255,0.1)] py-[15px]">
      <div className="container text-white bottom-footer">
        <span className="text-[14px] font-poppins leading-[28px]"> &copy; 2023 All Rights Reserved by Bestwebcreator</span>
        <ul className="flex items-center gap-1">
          <li className="cursor-pointer"><img src={visa} alt="visa-paymentmethod-img" /></li>
          <li className="cursor-pointer"><img src={discover} alt="discover-paymentmethod-img" /></li>
          <li className="cursor-pointer"><img src={master_card} alt="master_card-paymentmethod-img" /></li>
          <li className="cursor-pointer"><img src={paypal} alt="paypal-paymentmethod-img" /></li>
          <li className="cursor-pointer"><img src={american_express} alt="american_express-paymentmethod-img" /></li>
        </ul>
      </div>
    </div>
  )
}

export default BottomFooter
