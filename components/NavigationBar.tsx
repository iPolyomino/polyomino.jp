import React, { useState } from "react";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";

import { ThemeProvider, createTheme } from "@mui/material/styles";

interface NavLink {
  title: string;
  link: string;
}

const NavigationBar = () => {
  const navItems: NavLink[] = [
    { title: "Home", link: "/" },
    { title: "About", link: "/aboutme" },
    { title: "Blog", link: "/blog" },
    { title: "Hobby", link: "/hobby" },
  ];
  const drawerWidth = 240;

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setMobileOpen(open);
    };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Divider />
      <List>
        {navItems.map(({ title, link }, i) => (
          <ListItem key={i} disablePadding>
            <ListItemButton href={link} sx={{ textAlign: "center" }}>
              <ListItemText primary={title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#555",
      },
    },
  });

  return (
    <Box sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={darkTheme}>
        <AppBar component="nav" position="fixed" style={{ color: "white" }}>
          <Toolbar>
            <Typography variant="h5" sx={{ ml: 2, flexGrow: 1 }}>
              <Link href="/" passHref>
                polyomino.jp
              </Link>
            </Typography>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map(({ title, link }, i) => (
                <Button
                  href={link}
                  size="large"
                  key={i}
                  style={{ color: "white" }}
                >
                  {title}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
        <Toolbar />
        <Box>
          <SwipeableDrawer
            anchor="right"
            open={mobileOpen}
            onOpen={toggleDrawer(true)}
            onClose={toggleDrawer(false)}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </SwipeableDrawer>
        </Box>
      </ThemeProvider>
    </Box>
  );
};

export default NavigationBar;
