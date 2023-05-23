import React from 'react';
import { useState } from 'react'
import { NavBar } from '../Components/NavBar'
import { SideBar } from '../Components/SideBar'

const drawerWidth = 240;

export const HomePageAdmin = () => {
    const [ post, setPost] = useState({
        title: "",
        img: "",
        areas: ""
    });

    function handleOnChange(e){
        setPost({
            ...post,
            [e.target.name] : e.target.value
        })
        console.log(e.target.value)
    }

    return (
        <div>
            <form>
                <input  type="text" 
                        name="name" 
                        placeholder='nombre' 
                        onChange={ handleOnChange }
                
                />

                <input 
                        type="file" 
                        name="img" 
                        placeholder='seleccionar archivo'
                        onChange={handleOnChange}
                />

                <select name="areas" id="">
                    <option value="RH">RH</option>
                    <option value="Sistemas">Sistemas</option>
                    <option value="Sistemas">Produccion</option>
                </select>

                <button>Subir</button>

            </form>
        </div>
        
    )
}
