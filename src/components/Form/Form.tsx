import { TiSocialGooglePlus } from 'react-icons/ti';
import { GrFacebookOption } from 'react-icons/gr';
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

interface IForm {
  type: "login" | "register";
}

interface IFormData {name: string;
  email: string;
  password: string;
  confirmPassword: string;
  termsAccepted: boolean;
  rememberMe: boolean;
}

const Form: React.FC<IForm> = ({ type }) => {
  const { pathname } = useParams();
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();

  const submitForm = (data: IFormData) => {
    if(data.password === data.confirmPassword && type == "register") {
      reset();
      localStorage.setItem('user', JSON.stringify({...data, isLoggedIn: false}));
      navigate('/login');
    }
    
    if(type == "login" && data.email == JSON.parse(localStorage.getItem('user')).email && data.password == JSON.parse(localStorage.getItem('user')).password) {
      localStorage.setItem('user', JSON.stringify({...JSON.parse(localStorage.getItem('user')), isLoggedIn: true, rememberMe: data?.rememberMe}));

      setTimeout(() => {
        navigate('/');
      }, 1000)
    }
  };

  useEffect(() => {
    window.scroll({ top: 0 });

    if(JSON.parse(localStorage.getItem('user'))?.isLoggedIn) navigate("/");
  }, [pathname, navigate])

  return (
    <div className="py-[100px] flex items-center justify-center">
      <div className="form-container shadow-[0_0_10px_rgba(0,0,0,0.2)] w-[540px]" onSubmit={(e) => e.preventDefault()}>
        <form className="p-[8%] flex flex-col" onSubmit={handleSubmit(submitForm)}>
          {/* Normal Log in */}
          <h1 className="font-roboto font-bold text-[28px] text-secondary_dark">{type == "login" ? "Login" : "Create An Account"}</h1>
          {type == "register" && <input required {...register("name")} className="outline-none border border-gray-300 p-3 placeholder:text-grey placeholder:font-poppins rounded-md mt-4 transition duration-300 focus:border-blue-400" type="text" placeholder="Enter Your Name" />}
          <input required {...register("email")} className="outline-none border border-gray-300 p-3 placeholder:text-grey placeholder:font-poppins rounded-md my-4 transition duration-300 focus:border-blue-400" type="email" placeholder="Enter Your Email" />
          <input required {...register("password")} className="outline-none border border-gray-300 p-3 placeholder:text-grey placeholder:font-poppins rounded-md mb-4 transition duration-300 focus:border-blue-400" type="password" placeholder="Password" />
          {type == "register" && <input required {...register("confirmPassword")} className="outline-none border border-gray-300 p-3 placeholder:text-grey placeholder:font-poppins rounded-md mb-4 transition duration-300 focus:border-blue-400" type="password" placeholder="Confirm Password" />}
          <div className="check-container flex items-center justify-between">
            <div className="flex items-center gap-2 ml-1">
              {type == "register" && <input required {...register("termsAccepted")} type="checkbox" id="remember-checkbox" />}
              {type == "login" && <input {...register("rememberMe")} type="checkbox" id="remember-checkbox" />}
              <label htmlFor="remember-checkbox" className="text-grey font-poppins cursor-pointer text-[14px]">{type == "login" ? "Remember me" : "I agree to terms & Policy."}</label>
            </div>
            {type == "login" && <button className="text-grey font-poppins">Forgot password?</button>}
          </div>
          <button className="main-btn rounded-md mt-4">{type == "login" ? "Log In" : "Register"}</button>
          {/* Google & Facebook */}
          <span className="hr text-center text-grey font-poppins my-4 mb-5 relative before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-[1px] before:bg-gray-300 before:w-[45%] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:h-[1px] after:bg-gray-300 after:w-[45%]">OR</span>
          <div className="login-methods flex items-center justify-center gap-4">
            <button type='button' className="flex items-center justify-center font-poppins bg-[#344E86] hover:bg-[#2b4379] transition duration-300 rounded py-[10px] px-[20px] text-white mb-4"><GrFacebookOption className="w-6 h-6" /> Facebook</button>
            <button type='button' className="flex items-center justify-center font-poppins bg-[#D85040] transition duration-300 hover:bg-[#b84235] rounded py-[10px] px-[20px] text-white mb-4"><TiSocialGooglePlus className="w-6 h-6" /> Google</button>
          </div>
          <div className="form-nav flex items-center justify-center"><span className="text-grey font-poppins">{type == "login" ? "Don't Have an Account?" : "Already have an account?"}</span><Link to={`${type == "login" ? "/signup" : "/login"}`} className="hover:text-primary transition duration-300 text-secondary_dark font-poppins">&nbsp;{type == "login" ? "Sign up now" : "Log in"}</Link></div>
        </form>
      </div>
    </div>
  )
}

export default Form
