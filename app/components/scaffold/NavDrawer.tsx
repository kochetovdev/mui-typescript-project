"use client";

import {
  AppBar,
  Drawer,
  List,
  ListItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { Theme, useTheme } from "@mui/material/styles";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

const ListData = [
  { text: "Input Form", route: "/form" },
  { text: "Contact Card Grid", route: "/grid" },
  { text: "Contact Table", route: "/table" },
  { text: "Contact Data Grid", route: "/datagrid" },
];

const drawerWidth = 240;

const themedStyles = (theme: Theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
});

const simpleStyles = {
  drawer: {
    width: drawerWidth,
    "& .MuiBackdrop-root": {
      display: "none",
    },
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "rgba(120,120,120,0.2)",
  },
};

const NavDrawer = () => {
  const pathname = usePathname();
  const router = useRouter();

  const theme = useTheme();

  useEffect(() => {
    if (pathname === "/") {
      router.push("/pages/form");
    }
  }, []);
  return (
    <article>
      <AppBar position="fixed" sx={themedStyles(theme).appBar}>
        <Toolbar>
          <Typography noWrap variant="h6">
            Advanced Material UI Styling
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        open={true}
        sx={simpleStyles.drawer}
        PaperProps={{
          sx: simpleStyles.drawerPaper,
          elevation: 9,
        }}
      >
        <Toolbar />
        <List>
          {ListData.map(({ text, route }, index) => (
            <ListItem
              key={index}
              component={Link}
              href={pathname === "/" ? "/pages/form" : `/pages/${route}`}
            >
              {text}
            </ListItem>
          ))}
        </List>
      </Drawer>
    </article>
  );
};

export default NavDrawer;
