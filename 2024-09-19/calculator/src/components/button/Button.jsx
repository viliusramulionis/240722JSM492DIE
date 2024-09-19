import './Button.css';

const Button = (props) => {
    return (
        <button 
            onClick={props.handleClick} 
            className={props.active && 'active'}
        >
            {props.children}
        </button>
    );
}

export default Button;