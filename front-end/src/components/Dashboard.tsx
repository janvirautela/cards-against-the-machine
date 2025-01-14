import "../styles/dashboard.css";
import Card from "./Card";
import Prompt from "./Prompt";

interface CardItem {
    id: number;
    answer: string;
}

interface DashboardProps {
    cardArray: CardItem[];
}

const Dashboard: React.FC<DashboardProps> = ({ cardArray }) => {
    return (
        <div className="dashboard">
            <div className="prompt-container">
                <Prompt prompt="This is a test prompt" />
            </div>
            <div className="cards-container">
                {cardArray.map((x) => (
                    <Card key={x.id} answer={x.answer} />
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
