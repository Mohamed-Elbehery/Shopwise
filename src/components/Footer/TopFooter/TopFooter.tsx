import { IoLocationOutline } from 'react-icons/io5';
import { PiEnvelope } from 'react-icons/pi';
import { TfiMobile } from 'react-icons/tfi';
import { GrFacebookOption, GrTwitter } from 'react-icons/gr';
import { TiSocialGooglePlus, TiSocialInstagram } from 'react-icons/ti';
import { AiOutlineYoutube } from 'react-icons/ai';
import { categoryLinks, logo_light, myAccountLinks, usefulLinks } from '../../../constants';
import { Link } from 'react-router-dom';

const TopFooter: React.FC = () => {
  return (
    <div className="container top-footer pt-[100px] pb-[70px] text-white">
      {/* Logo & Social Media Links */}
      <ul className='w-[255px] h-[252px]'>
        <li><img src={logo_light} alt="logo-img" /></li>
        <li className='mt-4 leading-[28px]'>If you are going to use of Lorem Ipsum need to be sure there isn't hidden of text</li>
        <li className='mt-7 flex items-center gap-4'>
          <GrFacebookOption className="menu-link w-5 h-5" />
          <GrTwitter className="menu-link w-4 h-4" />
          <TiSocialGooglePlus className="menu-link w-6 h-6" />
          <AiOutlineYoutube className="menu-link w-5 h-5" />
          <TiSocialInstagram className="menu-link w-5 h-5" />
        </li>
      </ul>
      {/* Useful Links */}
      <ul className='w-[160px] h-[252px]'>
        <li><h1 className="text-[18px] font-roboto font-bold mb-6">Useful Links</h1></li>
        {usefulLinks.map((link, index) => <li className="menu-link text-[14px] font-poppins mt-3" key={index}>{link}</li>)}
      </ul>
      {/* Category */}
      <ul className='w-[160px] h-[252px]'>
        <li><h1 className="text-[18px] font-roboto font-bold mb-6">Category</h1></li>
        {categoryLinks.map((link, index) => <li className="menu-link text-[14px] font-poppins mt-3" key={index}>{link}</li>)}
      </ul>
      {/* My Account */}
      <ul className='w-[160px] h-[252px]'>
        <li><h1 className="text-[18px] font-roboto font-bold mb-6">My Account</h1></li>
        {myAccountLinks.map((link, index) => <li className="menu-link text-[14px] font-poppins mt-3" key={index}>{link}</li>)}
      </ul>
      {/* Contact Info */}
      <ul className='w-[255px] h-[252px] contact'>
        <li><h1 className="text-[18px] font-roboto font-bold mb-6">Contact Info</h1></li>
        <li className="text-[14px] font-poppins mt-3 flex gap-3"><IoLocationOutline className="w-5 h-5 mt-1" /> <span className='w-2/3 leading-[26px]'>123 Street, Old Trafford, New South London , UK</span></li>
        <li className="menu-link text-[14px] font-poppins mt-3 flex items-center gap-3"><PiEnvelope className="w-5 h-5" /> <Link to={"mailto:dev.elbehery@gmail.com"}>dev@elbehery.com</Link></li>
        <li className="text-[14px] font-poppins mt-3 flex items-center gap-3"><TfiMobile className="w-5 h-5" /> +201021141193</li>
        <li className="text-[14px] font-poppins mt-3 pointer-events-none select-none">&nbsp;</li>
      </ul>
    </div>
  )
}

export default TopFooter
