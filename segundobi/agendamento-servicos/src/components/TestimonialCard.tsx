import Star from "../assets/star.svg";
import StarOutline from "../assets/star-outline.svg";

interface ITestimonialCardProps {
  profileImage: string;
  text: string;
  name: string;
  role: string;
  rating: number;
}

export default function TestimonialCard({
  profileImage,
  text,
  name,
  role,
  rating,
}: ITestimonialCardProps) {
  const totalStars = 5;

  return (
    <div className="carousel-card">
      <img src={profileImage} alt={`Imagem perfil ${name}`} />

      <span className="testimony">
        <p>{text}</p>
      </span>

      <span className="rating">
        {Array.from({ length: totalStars }).map((_, index) => (
          <img
            key={index}
            src={index < rating ? Star : StarOutline}
            alt={index < rating ? "ícone estrela" : "ícone estrela sem fundo"}
            width={22}
            height={20}
          />
        ))}
      </span>

      <span className="names">
        <p>{name}</p>
        <p>{role}</p>
      </span>
    </div>
  );
}
