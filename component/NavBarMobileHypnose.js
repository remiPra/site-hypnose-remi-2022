import { AiOutlineMenu } from 'react-icons/ai'
import {colorPrimaryConstant} from '../constants/Constants'

const NavBarMobileHypose = () => {
  return (<>
    <div className="flex pr-[20px] pl-[20px] h-[70px] items-center  justify-between absolute top-0 left-0 w-[100%]"> 
      <h2 className="  hidden md:flex  text-white">logo</h2>
      <h2 className={`md:hidden lg:hidden text-${colorPrimaryConstant} computer`}>logo</h2>
      <AiOutlineMenu className='cursor-pointer' color='rgb(89, 121, 142)' size={30} />


    </div>
  </>
  )
}

export default NavBarMobileHypose