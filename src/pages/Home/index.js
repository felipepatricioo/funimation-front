import "./styles.css";
import axios from 'axios';
import { useState, useEffect } from 'react';
import Card from './../../components/Card/index';
import { Link } from "react-router-dom";

export default function Home() {

  const [ animes, setAnimes] = useState([])

  const getAnimes = async () => {
    await axios.get('/animes/')
    .then(response => {
      setAnimes(response.data);
    })
  }

  useEffect(() => {
    getAnimes();
  }, []);

  return (
    <div id="main">
      <div id="mainTop">
      <div id="headMain">
        <h1 className="mainTitle">Os melhores</h1>
        <span>
          <nobr className="mainSpan">Animes</nobr>
        </span>
        <p className="innerText">
          Aproveite milhares de episódios legendados e exclusivamente dublados
          de animes selecionados, além de filmes, animes clássicos e as últimas
          novidades do Japão.
        </p>
        <div id="watchNowButton">
          <Link
            className="btn btn-primary"
            to="/login"
            role="button"
            id="watchNowButton"
          >
            ASSISTA AGORA
          </Link>
        </div>
        <img
          src="https://derf9v1xhwwx1.cloudfront.net/image/upload/q_60/cste/942b4a42-986d-49a3-aa70-04b277200ff0.png"
          alt="aaa"
          id="funimationLogo2"
        />
      </div>

      <div className="animesShowcase"> 
        <h4> Animes Avaliable</h4>
        {
          animes.map(anime => (
            <Card
            cover={anime.cover}
            title={anime.title}
            />
          ))
        }
      </div>

      </div>
      <div className="bottomMain">
        <div className="bottomMain2">
        <h2 className="mainTitle">
          Animes Sem Anúncios
          <br />
          com Premium Plus 
          <br />
          por 24,90 ao mês
        </h2>
        <p className="innerText">
          Aproveite milhares de episódios legendados e exclusivamente dublados
          de animes selecionados, além de filmes, e encontre sucessos, clássicos
          e as últimas novidades do Japão.
        </p>
        <div className="watchNowButton">
          <Link
            className="btn btn-primary"
            to="/login"
            role="button"
            id="watchNowButton"
          >
            TESTAR AGORA
          </Link>
        </div>
        <img
          src="https://derf9v1xhwwx1.cloudfront.net/image/upload/q_60/cste/942b4a42-986d-49a3-aa70-04b277200ff0.png"
          alt="aaa"
          id="funimationLogo2"
        />
      </div>
      </div>
    </div>
  );
}
