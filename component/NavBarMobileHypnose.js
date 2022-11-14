import Link from 'next/link';
import { AiOutlineMenu } from 'react-icons/ai'
import TemporaryDrawer from './Drawer/Drawer'

const colorPrimaryConstant = "#6b89c9";

const NavBarMobileHypose = () => {
  return (<>
    <div className=" px-6 py-2 items-center  flex justify-between  w-[100%]"> 
    <Link passHref={true} href={'/'}>
      <img width="100px" src="/assets/logoNewStyle.png" className={` cursor-pointer hidden md:flex  text-${colorPrimaryConstant}`}/>
    </Link>
    <Link passHref={true} href={'/'}>
      <img width="100px" src="/assets/logoNewStyle.png" className={`cursor-pointer md:hidden lg:hidden text-${colorPrimaryConstant} computer`}/>
    </Link>
      <div className='flex items-center'>
        <nav className='hidden md:flex'>
          <ul className={`flex text-${colorPrimaryConstant}`}>
          <Link passHref={true} href={"/"}>
            <li data-aos-delay="100" data-aos="zoom-in" className={`cursor-pointer text-[#6b89c9] hover:text-[#decb8c] py-0 px-[1em]`}>Accueil</li>
          </Link> 
            <li data-aos-delay="200"  data-aos="zoom-in" className={`cursor-pointer hover:text-[#decb8c] text-[${colorPrimaryConstant}] py-0 px-[1em]`}>Découvrir l'hypnose </li>
            <li data-aos-delay="300" data-aos="zoom-in" className={`cursor-pointer hover:text-[#decb8c] text-[${colorPrimaryConstant}] py-0 px-[1em]`}>Qui suis-je</li>
            <li data-aos-delay="400" data-aos="zoom-in" className={`cursor-pointer hover:text-[#decb8c] text-[${colorPrimaryConstant}] py-0 px-[1em]`}>Contact</li>
            
          
          </ul>
        </nav>

      <TemporaryDrawer/>
      </div>
    </div>
  </>
  )
}

export default NavBarMobileHypose