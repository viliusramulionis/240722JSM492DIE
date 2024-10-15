const Button = ({ setCount }) => {
    return(
        <button onClick={() => setCount(prev => ++prev)}>Click Me</button>
    );
}

export default Button;