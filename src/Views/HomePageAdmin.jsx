import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { NavBar } from '../Components/NavBar'
import { SideBar } from '../Components/SideBar'

const drawerWidth = 240;

export const HomePageAdmin = () => {

    const { register, handleSubmit } = useForm();

    const [ post, setPost] = useState({
        title: "",
        video: null,
        description:"",
        areas:[],
        status: true,
        author: "6425debbc297dbb65d724720"
    });

    const [areas, setAreas] = useState();

    const areaApi = async() => {
        const response = await axios.get('http://localhost:3001/all-areas')
        console.log(response.data);
        return setAreas(response.data);
    }


    useEffect(() => {
        areaApi()
    },[])


    const handleOnchange = (e) => {
        setPost({
            ...post,
            [e.target.name]: e.target.value
        })
    }

    const handleonChangeCheckBox = (e) => {
        if (e.target.checked) {
            setPost({
                ...post,
                areas: [...post.areas,e.target.value]
            })

        }
    }

    const onSubmit = async(data) =>{
        const formData = new FormData()
        formData.append('video', data.video[0])
        data.video = data.video[0] 
        console.log(data)

        const response = await axios.post('http://localhost:3001/new-video',data,{
                headers: {
                    "Content-Type": "multipart/form-data"
                }
        })

        return console.log(response);
    }

    const handleSubmit1 = async(e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('video', post.video)
        

        const response = await axios.post('http://localhost:3001/new-video',{formData,post},{
            headers: {
                "Content-Type" : "multipart/form-data"
            }
        })

        return console.log(response);

    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input  {...register('title')}
                        type="text"
                        name="title"
                        placeholder='nombre'
                        value={post.title}
                        onChange={ handleOnchange }

                />

                <input  {...register('video')}
                        type="file"
                        name="video"
                        placeholder='seleccionar archivo'
                        onChange={(e) => setPost({...post, video: e.target.files[0]})}
                />

                <input  {...register('description')}
                        type="text"
                        name="description"
                        value={post.description}
                        placeholder='Descripcion'
                        onChange={handleOnchange}
                />

                {
                    areas?.areas.map( a => {
                        return (
                            <label>
                            {a.name}
                            <input
                                    {...register('areas')}
                                    type='checkbox'
                                    name='areas'
                                    onChange={handleonChangeCheckBox}
                                    value={a._id}

                            />
                            </label>
                            )
                        })


                }
                <button>Subir</button>

            </form>
        </div>

    )
}
