"use client"
import React from 'react';
import { useEffect, useState } from 'react';
import Image from 'next/image';
// import styles from './Navbar.module.css'
import Link from 'next/link';
import { Button, Drawer, Box, List, Divider, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { SportsGymnastics, Backpack, AccountCircle, TurnSlightRight, Hiking, Menu } from '@mui/icons-material';

const Navbar = () => {
        
    const [windowWidth, setWindowWidth] = useState<number>(769);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setWindowWidth(window.innerWidth);
      
            const handleResize = () => setWindowWidth(window.innerWidth);
            window.addEventListener("resize", handleResize);
      
            return () => window.removeEventListener("resize", handleResize);
          }
        }, []);
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
      setOpen(newOpen);
    };

    console.log(windowWidth);

    const navLinks = [
        {text: 'Bag Builder', link: '/bag-builder', icon: <Backpack />},
        {text: 'In the Bag', link: '/in-the-bag', icon: <Hiking />},
        {text: 'Flight Deck', link: '/flight-deck', icon: <TurnSlightRight />},
        {text: 'Throw Gooder', link: '/throw-gooder', icon: <SportsGymnastics />},
    ];

    const userLinks = [
        {text: 'View Account', link: '/account', icon: <AccountCircle />},
        {text: 'My Bag', link: '/my-bag', icon: <Backpack />},
    ]
  
    const DrawerList = (
      <Box sx={{ width: 250 }} role="presentation">
        <List>
          <Link href="/">
              <Image src="/images/navbar/disc-loadout-logo.png" width={1851} height={565} alt='Disc Loadout' />
          </Link>
          {navLinks.map((navLink) => (
            <ListItem key={navLink.text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {navLink.icon}
                </ListItemIcon>
                <Link href={navLink.link}><ListItemText primary={navLink.text} /></Link>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {userLinks.map((userLink) => (
            <ListItem key={userLink.text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {userLink.icon}
                </ListItemIcon>
                <Link href={userLink.link}><ListItemText primary={userLink.text} /></Link>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    );
  
    return (
      <nav>
        <Button onClick={toggleDrawer(true)}><Menu /></Button>
        <Drawer variant={windowWidth <= 768 ? 'temporary' : 'permanent'} open={open} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>
      </nav>
    );
    
}

export default Navbar