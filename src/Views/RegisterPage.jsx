import React from 'react'
import FormRegisterLogin from '../Components/FormRegisterLogin'
import { Grid, MenuItem, Select, TextField, InputLabel, FormControl, Button, Typography, Link } from '@mui/material'
import { Google } from '@mui/icons-material'
import { Link as LinkRouter } from 'react-router-dom'

export const RegisterPage = () => {
  return (
    <FormRegisterLogin titulo='Registro'>
        <Grid container>
            <Grid item xs={ 12 } sx={{ mt: 2 }}>
                <TextField
                    label="Username"
                    placeholder='username'
                    type='text'
                    fullWidth
                />
            </Grid>
            <Grid item xs={ 12 } sx={{ mt: 2 }}>
                <TextField
                    label="Email"
                    placeholder='example@gmail.com'
                    type='email'
                    fullWidth
                />
            </Grid>
            <Grid item xs={ 12 } sx={{ mt: 2 }}>
                <TextField
                    label="Password"
                    placeholder='***************'
                    type='password'
                    fullWidth
                />
            </Grid>
            <Grid item xs={ 12 } sx={{ mt: 2 , minWidth: 120}}>
                <FormControl fullWidth>
                <InputLabel id="select-area-label">Area</InputLabel>
                <Select
                    labelId="select-area-label"
                    id="select-area"
                    placeholder='Area'
                    label="Area"
                >
                    <MenuItem value={1}> Sistemas</MenuItem>
                    <MenuItem value={2}> Mercadotecnia</MenuItem>
                    <MenuItem value={3}> RH</MenuItem>
                    <MenuItem value={4}> Mesa de control</MenuItem>
                </Select>
                </FormControl>
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
                                <Link color='inherit' to='/register' component={ LinkRouter }>¿Ya tienes cuenta? Ingresa aqui.</Link>
                            </Grid>

                        </Grid>
        </Grid>
    </FormRegisterLogin>
  )
}
