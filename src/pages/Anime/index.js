
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios'


export default function Anime () {

    const { id } = useParams();

    const [ anime, setAnime] = useState([]);

    const  getAnimeById = async () => {
        await axios.get(`/animes/${id}`)
        .then (response => 
            setAnime(response.data)
        )
    }

    const [ user, setUser ] = useState([]);

    const getUser = async () => {
        await axios.get('/user')
        .then( response => setUser(response.data))
    }


    console.log(user)
    // const animeUser = {
    //     user: user.id,
    //     id: anime.id,
    // };
  
    // const watchedAnime = async () => {
    //     await axios.patch(`/user/watchedAnimes/${id}`, animeUser)
    //     .then (response => console.log(response.data))
        
    // }

    useEffect(() => {
        getAnimeById()
    }, [])

    return (
        <div>
            <p>{anime.title}</p>
            <img src={anime.cover} alt={anime.title}/>
            <h2> SINGLE ANIME PAGE STILL IN MAINTENANCE!! </h2>
            <button onClick={getUser}>Add anime to watchlist</button>
        </div>
    )
}