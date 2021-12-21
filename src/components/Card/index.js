import { useNavigate } from "react-router-dom";
import './style.css';

export default function Card(props) {
  const navigate = useNavigate;

  const goToAnime = () => {
    navigate("/animes", { state: props.id });
  };

  return (
    <div className="img-responsive">
      <img src={props.cover} alt={props.title}  onClick={goToAnime}  id="frontPageCard"/>
    </div>
  );
}
