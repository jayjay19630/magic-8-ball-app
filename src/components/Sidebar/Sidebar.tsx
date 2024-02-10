import { useState } from 'react'
import './sidebar.css'
import { Drawer, IconButton, List, ListItem, ListItemButton } from '@mui/material';
import { Chat, Home, Lightbulb, Menu, Person } from '@mui/icons-material';

interface sidebarItem {
    label: string,
    icon: React.ReactElement
}

const sidebarItems = [
    {
        label: 'Home',
        icon: <Home></Home>
    },
    {
        label: 'Chat History',
        icon: <Chat></Chat>
    }, 
    {
        label: 'Daily Prediction',
        icon: <Lightbulb></Lightbulb>
    },
    {
        label: 'Profile',
        icon: <Person></Person>
    }
];

const SidebarButton = (props: sidebarItem) => {
    return (
        <ListItem>
            <ListItemButton>
                <div className='sidebar-button'>
                    {props.icon}
                    <div className='sidebar-label'>{props.label}</div>
                </div>
            </ListItemButton>
        </ListItem>
    )
};

export const Sidebar = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className='sidebar'>
            <IconButton
                onClick={() => setOpen(true)}
                edge="start"
                aria-label='logo'>
                <Menu/>
            </IconButton>
            <Drawer open={open} onClose={() => setOpen(false)} sx={{ opacity: 0.5}}>
                <List sx={{ width: 300 }}>
                    {sidebarItems.map((item) => <SidebarButton key={item.label} label={item.label} icon={item.icon}></SidebarButton>)}
                </List>
            </Drawer>
        </div>
    )
}