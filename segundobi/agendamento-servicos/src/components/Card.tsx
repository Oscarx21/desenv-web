import "../styles/card.css";

interface ICardProps {
  icon: string;
  title: string;
  description: string;
}

export default function Card({ icon, title, description }: ICardProps) {
  return (
    <div className="card">
      <span>
        <img src={icon} alt={`ícone ${title}`} width={48} height={48} />
      </span>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <hr />
      </div>
    </div>
  );
}
