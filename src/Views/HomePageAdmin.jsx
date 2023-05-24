import axios from 'axios';
import React from 'react';
import { useState } from 'react'
import { NavBar } from '../Components/NavBar'
import { SideBar } from '../Components/SideBar'

const drawerWidth = 240;

export const HomePageAdmin = () => {
    const [ post, setPost] = useState({
        title: "",
        video: null,
    });

    const handleSubmit = async(e) => {
        e.preventDefault()
        const formData = new FormData()

        formData.append('video', post.video)

        const response = await axios.post('http://localhost:3001/new-video',formData,{
            headers: {
                "Content-Type" : "multipart/form-data"
            }
        })

        console.log(response);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input  type="text" 
                        name="title" 
                        placeholder='nombre' 
                        onChange={ (e) => setPost({...post, title: e.target.value}) }
                
                />

                <input 
                        type="file" 
                        name="video" 
                        placeholder='seleccionar archivo'
                        onChange={(e) => setPost({...post, video: e.target.files[0]})}
                />

                <button>Subir</button>

            </form>
        </div>
        
    )
}
