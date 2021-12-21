
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

    console.log(anime)

    useEffect(() => {
        getAnimeById()
    }, [])

    return (
        <div>
            <p>{anime.title}</p>
            <img src={anime.cover} alt={anime.title}/>
        </div>
    )
}