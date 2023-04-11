import { Box, Divider, Drawer, List, ListItemText, ListItemButton, ListItemIcon, ListSubheader, Toolbar, Typography } from '@mui/material'
import { PersonAddAlt1, VideoCall } from '@mui/icons-material'

export const SideBar = ({drawerWidth = 240}) => {
  return (
    <Box component='nav'
        sx={{ width: { sm: drawerWidth }, flexShrink: {sm: 0} }}
    >
        <Drawer variant='permanent'
            open
            sx={{ display: {xs: 'block'}, '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth} }}
        >
            <Toolbar>
                <Typography variant='h6'
                    noWrap
                    component='div'
                >
                Username
                </Typography>
            </Toolbar>
            <Divider />
            <List>
                <ListSubheader component='div'>
                    Menú
                </ListSubheader>
                <Divider />
                <ListItemButton >
                    <ListItemIcon>
                        <PersonAddAlt1 />
                    </ListItemIcon>
                    <ListItemText primary='Usuarios' />
                </ListItemButton>

                <Divider />

                <ListItemButton >
                    <ListItemIcon>
                        <VideoCall />
                    </ListItemIcon>
                    <ListItemText primary='Videos' />
                </ListItemButton>

                <Divider />

                <ListItemButton >
                    <ListItemIcon>
                        <VideoCall />
                    </ListItemIcon>
                    <ListItemText primary='Areas' />
                </ListItemButton>
            </List>
        </Drawer>
    </Box>
  )
}
