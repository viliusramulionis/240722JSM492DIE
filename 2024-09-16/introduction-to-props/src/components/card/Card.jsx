const Card = ({ data }) => {
    return (
        <div className="col-4">
            <h4>{data.heading}</h4>
            <p>{data.text}</p>
        </div>
    );
}

export default Card;