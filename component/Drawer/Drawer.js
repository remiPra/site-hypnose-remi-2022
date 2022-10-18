import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import CottageIcon from '@mui/icons-material/Cottage';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { AiOutlineMenu } from 'react-icons/ai'
import Link from 'next/link';
import { Cottage } from '@mui/icons-material';




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
      <div className='my-2 mx-auto flex flex-col justify-center'>
        <img style={{ margin: "5px auto" }} className="w-[100px]   md:w-[30%]" src='assets/logoRémiPradereSopromagnetiseur.png' />
        <h1 className='text-center'>Rémi PRADERE <br />
          Hypnothérapeute
        </h1>
      </div>
      <Box
        sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <List>
          <nav>
            <ul>
             
                  <Link passHref={true} href={"./"}>
                    <li data-aos="fade-up"> <Cottage/>
 
                      Accueil</li>
                  </Link>
                  <Link passHref={true} href={"./but"}>
                    <li> 
                  But de l'Hypnose
                    </li>
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
