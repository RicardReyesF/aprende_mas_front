import { Google } from '@mui/icons-material'
import { Grid, TextField, Typography, Button, Link } from '@mui/material'
import { Link as LinkRouter } from 'react-router-dom'
import React from 'react'
import FormRegisterLogin from '../Components/FormRegisterLogin'

export default function LoginPage() {
    return (
        // <Grid
        //     container
        //     spacing={ 0 }
        //     direction="column"
        //     alignItems="center"
        //     justifyContent="center"
        //     sx={{  minHeight: '100vh',  backgroundColor: 'primary.main', padding: 4 }}
        // >
        //     <Grid item
        //         xs={ 3 }
        //         sx={{ backgroundColor: 'white', padding: 3,  borderRadius: 2}}
        //     >
        //         <Typography variant='h5' sx={{ mb: 1 }}>Ingresa</Typography>
                    <FormRegisterLogin titulo="Ingresa">
                <form>
                    <Grid container 
                        sx={{ mt: 2 }}
                        >
                        <Grid item xs={ 12 } sx={{ mt: 2 }}>
                            <TextField
                                label="Email"
                                type="email"
                                placeholder='example@gmail.com'
                                fullWidth
                                />
                        </Grid>
                        <Grid item xs={ 12 } sx={{ mt: 2 }}>
                            <TextField
                                label="Password"
                                type="password"
                                placeholder='***************'
                                fullWidth
                                />
                        </Grid>
                        <Grid container 
                            spacing={2}
                            sx={{ mb: 2 }}
                            >
                            <Grid item 
                            sx={{ mt: 2 }}
                            xs={ 12 }
                            sm={ 6 }
                            >
                                <Button 
                                variant='contained'
                                fullWidth
                                >
                                    Login
                                </Button>
                            </Grid>
                            
                            <Grid item 
                            sx={{ mt: 2 }}
                            xs={ 12 }
                            sm={ 6 }
                            >
                                <Button 
                                variant='contained'
                                fullWidth
                                
                                >
                                    <Google/>
                                    <Typography sx={{ ml: 1 }}>Google</Typography>
                                </Button>
                            </Grid>

                            <Grid container
                                direction="row"
                                justifyContent="end"
                                sx={{ mt: 2 }}
                            >
                                <Link color='inherit' to='/register' component={ LinkRouter }>¿Aun no tienes cuenta? Crea una cuenta.</Link>
                            </Grid>

                        </Grid>
                    </Grid>
                </form>
                </FormRegisterLogin>
        //     </Grid>
        // </Grid>
    )
}
