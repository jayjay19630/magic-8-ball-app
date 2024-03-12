import { useState } from "react";
import "./sidebar.css";
import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
} from "@mui/material";
import {
  Chat,
  Close,
  Home,
  Lightbulb,
  Menu,
  Person,
} from "@mui/icons-material";

interface sidebarItem {
  label: string;
  icon: React.ReactElement;
}

const sidebarItems = [
  {
    label: "Home",
    icon: <Home></Home>,
  },
  {
    label: "Chat History",
    icon: <Chat></Chat>,
  },
  {
    label: "Daily Prediction",
    icon: <Lightbulb></Lightbulb>,
  },
  {
    label: "Profile",
    icon: <Person></Person>,
  },
];

const SidebarButton = (props: sidebarItem) => {
  return (
    <ListItem>
      <ListItemButton>
        <div className="sidebar-button">
          {props.icon}
          <div className="sidebar-label">{props.label}</div>
        </div>
      </ListItemButton>
    </ListItem>
  );
};

const SidebarHeader = (props: { setOpenHandler: Function }) => {
  return (
    <div className="sidebar-header">
      <div>🎱 GPT</div>
      <IconButton onClick={() => props.setOpenHandler(false)}>
        <Close></Close>
      </IconButton>
    </div>
  );
};

export const Sidebar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="sidebar">
      <IconButton onClick={() => setOpen(true)} edge="start" aria-label="logo">
        <Menu />
      </IconButton>
      <Drawer
        variant="temporary"
        open={open}
        onClose={() => setOpen(false)}
        hideBackdrop
      >
        <div className="drawer-container">
          <SidebarHeader setOpenHandler={setOpen} />
          <Divider style={{ width: "100%" }}></Divider>
          <List sx={{ width: 260 }}>
            {sidebarItems.map((item) => (
              <SidebarButton
                key={item.label}
                label={item.label}
                icon={item.icon}
              ></SidebarButton>
            ))}
          </List>
        </div>
      </Drawer>
    </div>
  );
};
