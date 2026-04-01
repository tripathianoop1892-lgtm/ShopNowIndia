import "./Card.css";

function Card({ title, value, subtitle, color , textcolor }) {
  return (
    <div className="card" style={{ background: color, color:textcolor }}>
      <div className="card-content">
        <h4>{title}</h4>
        <h2>{value}</h2>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}

export default Card;