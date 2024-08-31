import "../styles/prompt.css";

interface PromptProps {
    prompt: string;
}

const Prompt: React.FC<PromptProps> = ({ prompt }) => {
    return <div className="prompt">{prompt}</div>;
};

export default Prompt;
