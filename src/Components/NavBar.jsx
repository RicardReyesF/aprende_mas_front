import { LoginOutlined, MenuOutlined } from "@mui/icons-material"
import { AppBar, Toolbar, IconButton, Grid, Typography } from "@mui/material"




export const NavBar = ( { drawerWidth = 240 } ) =>  {
    return (
        <AppBar 
            position="fixed"
            sx={{ width: {sm: `calc(100% - ${drawerWidth}px )`} }}
        >
            <Toolbar>
                <IconButton 
                    color="inherit"
                    
                >
                    <MenuOutlined/>
                </IconButton>
                <Grid container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"

                >
                    <Typography sx={{ ml: 2}}>Aprende Mas</Typography>
                    
                    <IconButton color="inherit">
                        <LoginOutlined />    
                    </IconButton>         
                </Grid>
            </Toolbar>
        </AppBar>
    )
}