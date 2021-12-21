import { useState, useEffect } from "react";
import Card2 from "./../../components/Card2/index";
import axios from "axios";
import { Link } from "react-router-dom";

export default function AllAnimes() {
  const [animes, setAnimes] = useState([]);

  const getAnimes = async () => {
    await axios.get("/animes/").then((response) => {
      setAnimes(response.data);
    });
  };

  useEffect(() => {
    getAnimes();
  }, []);

  return (
    <div id="main">
      {animes.map((anime) => (
        <div className="card">
            <Link to={`/anime/${anime.id}`}>
          <Card2 cover={anime.cover} title={anime.title} id={anime.id} />
          </Link>
        </div>
      ))}
    </div>
  );
}
