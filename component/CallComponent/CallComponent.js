import React, { useEffect, useState } from 'react'
import { FaPhone } from 'react-icons/fa'
import { GrClose } from 'react-icons/gr'
import { BsWhatsapp } from 'react-icons/bs'
import { RiMessengerLine } from 'react-icons/ri'
import { AiOutlineMail } from 'react-icons/ai'
import Link from 'next/link';
import colorPrimaryConstant from '../../constants/Constants'
import { PropaneSharp } from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux'
import { menuFalse, menuTrue, selectMenuBool } from '../../featured/basketSlice'

function CallComponent() {


  useEffect((
    
  )=>{changeIcon()},[])


  const [contactContainer, setContactContainer] = useState('contactContainer');

    const dispatch = useDispatch()

  const [boolContact, setBoolContact] = useState(false)
  const [colorButton, setColorButton] = useState(`text-[${colorPrimaryConstant}] buttonPrimary`)
  const [colorButton1, setColorButton1] = useState('shadow-cyan-500/50 shadow-lg colorPrimary buttonPrimary')
  //systeme animation multiIcon
  const [icon, setIcon] = useState('FaPhone');

  const changeIcon = () => {
   
    let i = 0
    setInterval(() => {
      const iconTableau = ['FaPhone', 'BsWhatsapp', 'RiMessengerLine', 'AiOutlineMail']
      i++
      console.log(i)
      console.log(menuBool)
      
      if(i > iconTableau.length -1 ){
        setIcon(iconTableau[0])
        i=0
      } else {
        setIcon(iconTableau[i])
      }
    }, 5000)
  }
  const menuBool = useSelector(selectMenuBool)
  return (<>
    {(boolContact == false || menuBool==false) && (
      <div data-aos-delay="1000" data-aos="zoom-in" style={{ position: "fixed", bottom: "20px", right: '5%', zIndex: 222 }}>
        
        <button onClick={() => { setContactContainer('contactContainer'); setBoolContact(true) }} 
        className={`border-[#decb8c] text-[#6b89c9]  border-2 text-[${colorPrimaryConstant}] buttonPrimary`}>
          {(icon == 'FaPhone') && <FaPhone  />}
          {(icon == 'BsWhatsapp') && <BsWhatsapp  />}
          {(icon == 'RiMessengerLine') && <RiMessengerLine   />}
          {(icon == 'AiOutlineMail') && < AiOutlineMail  />}

        </button>
      </div>
    )}
    {(boolContact || menuBool) && (
      <div className={contactContainer} style={{ zIndex: 2222222222222, backgroundColor: '#6b89c9', position: "fixed", bottom: '0px', left: '0px', width: '100%', height: '100%' }}>
        <div style={{ zIndex: -1, position: 'absolute', top: '0px', width: "100%", overflowX: "hidden" }}>

          <div style={{
            position: 'absolute', top: '0px', width: "100%", height: "100%",
            backgroundColor: "#dffbe9", opacity: 1
          }}></div>
        </div>
        <button onClick={() => {
          setContactContainer('contactContainerOut')
          setTimeout(() => { setBoolContact(false);dispatch(menuFalse()) }, 200)
          
        }} className={colorButton}
          style={{ display: 'flex', float: "right", marginRight: "20px", marginTop: "20px", width: "80px", height: "80px", justifyContent: 'center', alignItems: 'center' }}>
          <GrClose fontSize={40} />
        </button>
        <div style={{ justifyContent: 'center', zIndex: -1, position: 'absolute', width: "100%", top: "0px", margin: "50px auto" }}>
          <ul style={{ width: "300px", margin: "1px auto" }}>
            <h3 className='text-white' style={{ textAlign: "center" }}>Par quel moyen voulez vous prendre contact?</h3>
            <Link passHref href='https://wa.me/33619727540'>
              <li className='items-center flex cursorPointer mt-[50px]  colorPrimary buttonPrimary'>
                <BsWhatsapp className='text-[25px] mr-2' />
                <a target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
            </Link>

            <Link passHref href='https://www.facebook.com/messages/t/713341177'>
              <li className='items-center flex cursorPointer  mt-2  colorPrimary buttonPrimary'>
                <RiMessengerLine className='text-[25px] mr-2' />
                <a target="_blank" rel="noopener noreferrer" >Messenger</a>
              </li>
            </Link>

            <Link passHref href="tel:0619727540">
              <li className='items-center flex cursorPointer  mt-2  colorPrimary buttonPrimary'>
                <FaPhone className='text-[25px] mr-2' />
                <a target="_blank" rel="noopener noreferrer">Passer un appel</a>
              </li>
            </Link>

            <Link passHref href="mailto:remipradere@gmail.com">
              <li className='items-center flex cursorPointer  mt-2  colorPrimary buttonPrimary'>
                <AiOutlineMail className='text-[25px] mr-2' />
                <a target="_blank" rel="noopener noreferrer" >Envoyer un mail</a>
              </li>
            </Link>

          </ul>
        </div>
      </div>
    )}
  </>

  )
}

export default CallComponent