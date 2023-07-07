import { Location } from "../components"
import { TiSocialGooglePlus } from 'react-icons/ti';
import { GrFacebookOption } from 'react-icons/gr';
import { Link } from "react-router-dom";

const Login: React.FC = () => {
  return (
    <section>
      <Location />
      <div className="py-[100px] flex items-center justify-center">
        <div className="login-form-container shadow-[0_0_10px_rgba(0,0,0,0.2)] w-[540px] h-[528px]" onSubmit={(e) => e.preventDefault()}>
          <form className="p-[8%] flex flex-col login-form">
            {/* Normal Log in */}
            <h1 className="font-roboto font-bold text-[28px] text-secondary_dark">Login</h1>
            <input className="outline-none border border-gray-300 p-3 placeholder:text-grey placeholder:font-poppins rounded-md my-4 transition duration-300 focus:border-blue-400" type="email" placeholder="Your Email" />
            <input className="outline-none border border-gray-300 p-3 placeholder:text-grey placeholder:font-poppins rounded-md mb-4 transition duration-300 focus:border-blue-400" type="password" placeholder="Password" />
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 ml-1">
                <input type="checkbox" id="remember-checkbox" />
                <label htmlFor="remember-checkbox" className="text-grey font-poppins cursor-pointer">Remember me</label>
              </div>
              <button className="text-grey font-poppins">Forgot password?</button>
            </div>
            <button className="main-btn rounded-md mt-4">Log In</button>
            {/* Firebase */}
            <span className="hr text-center text-grey font-poppins my-4 relative before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-[1px] before:bg-gray-300 before:w-[45%] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:h-[1px] after:bg-gray-300 after:w-[45%]">OR</span>
            <div className="login-methods flex items-center justify-center gap-4">
              <button className="flex items-center justify-center font-poppins bg-[#344E86] hover:bg-[#2b4379] transition duration-300 rounded py-[10px] px-[20px] text-white mb-4"><GrFacebookOption className="w-6 h-6" /> Facebook</button>
              <button className="flex items-center justify-center font-poppins bg-[#D85040] transition duration-300 hover:bg-[#b84235] rounded py-[10px] px-[20px] text-white mb-4"><TiSocialGooglePlus className="w-6 h-6" /> Google</button>
            </div>
            <div className="flex items-center justify-center"><span className="text-grey font-poppins">Don't Have an Account?</span><Link to="signup" className="hover:text-primary transition duration-300 text-secondary_dark font-poppins">&nbsp;Sign up now</Link></div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Login
