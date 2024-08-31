interface CardProps {
    answer: string;
}

const Card: React.FC<CardProps> = ({ answer }) => {
    return <div>{answer}</div>;
};

export default Card;
