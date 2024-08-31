import "../styles/card.css";

interface CardProps {
    answer: string;
}

const Card: React.FC<CardProps> = ({ answer }) => {
    return <div className="card">{answer}</div>;
};

export default Card;
