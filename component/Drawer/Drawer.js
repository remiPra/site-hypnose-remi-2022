import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import BookIcon from '@mui/icons-material/Book';
import FaceIcon from '@mui/icons-material/Face';
import CallIcon from '@mui/icons-material/Call';
import CottageIcon from '@mui/icons-material/Cottage';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { AiOutlineMenu } from 'react-icons/ai'
import Link from 'next/link';
import { Book, Cottage } from '@mui/icons-material';
import Image from 'next/image';




const colorPrimaryConstant = "#6b89c9";

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <>
      <div className='mt-4 mb-6 mx-auto flex flex-col justify-center'>
    
        <img layout="responsive" 
        size='100px'
        className='mt-40px mx-auto' 
        // className="w-[200px]   md:w-[30%]" 
        src='/assets/logoNewStyle.png' />
    
        <h1 className='text-center text-[#6b89c9]'>Rémi PRADERE <br />
          Hypnothérapeute
        </h1>
      </div>
      <Divider />
      <Box
        sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <List>
          <nav>
            <ul>
             
                  <Link className='flex ' passHref={true} href={"/"}>
                    <li className='font-medium cursor-pointer hover:text-[#decb8c] my-3 ml-3 flex items-center text-[#6b89c9]'  data-aos="fade-up"> 
                     <Cottage className=' text-[#6b89c9] mr-3' />
                      Accueil</li>
                  </Link>
                  <Link className='flex ' passHref={true} href={"./but"}>
                    <li className='cursor-pointer hover:text-[#decb8c] text-[#6b89c9] my-3 ml-3 flex items-center'  data-aos="fade-up"> 
                     <BookIcon className='mr-3' />
                     Qu'est ce que l'hypnose ?</li>  
                  </Link>
                  <Link className='flex ' passHref={true} href={"./but"}>
                    <li className='cursor-pointer hover:text-[#decb8c] text-[#6b89c9] my-3 ml-3 flex items-center'  data-aos="fade-up"> 
                     <FaceIcon className='mr-3' />
                     Qui suis je ?</li>
                  </Link>
                
                  <Link className='flex ' passHref={true} href={"./but"}>
                    <li className='cursor-pointer hover:text-[#decb8c] text-[#6b89c9] my-3 ml-3 flex items-center'  data-aos="fade-up"> 
                     <CallIcon className='mr-3' />
                     Contact</li>
                  </Link>
                
            


            </ul>
          </nav>

        </List>
        <Divider />
      
      </Box>
    </>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>

            <AiOutlineMenu className='cursor-pointer' color={colorPrimaryConstant} size={30} />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
