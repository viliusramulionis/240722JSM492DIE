const Button = (props) => {
    console.log(props.icon);
    // JSX'e = Atvaizdavimui galime nurodyti masyvus ir visas kitas reikšmes IŠSKYRUS OBJEKTĄ
    return (
        <button className="btn btn-secondary">
            {/* {props.icon ? '🎉' : ''} */}
            {/* {props.icon ? <span>🎉</span> : '' } */}
    
            {props.icon && <span>🎉</span>}

            {props.text}
        </button>
    );
}

export default Button;