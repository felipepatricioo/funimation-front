import './style.css';

export default function Card(props) {

  return (
    <div className="img-responsive">
      <img src={props.cover} alt={props.title}  id="frontPageCard2"/>
    </div>
  );
}
