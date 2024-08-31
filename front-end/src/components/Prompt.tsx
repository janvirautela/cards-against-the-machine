interface PromptProps {
    prompt: string;
}

const Prompt: React.FC<PromptProps> = ({ prompt }) => {
    return <div>{prompt}</div>;
};

export default Prompt;
