const ProductRating = ({ rating }) => {

    const GenerateStars = ({ filled }) => {
        return Array(5).fill(<i className={'bi bi-star' + (filled ? '-fill' : '')}></i>);
    }

    return (
        <div className="rating text-warning">
            <div className="filled" style={{
                width: rating * 2 * 10 + '%'
            }}>
                <div className="star-wrapper">
                    <GenerateStars filled={true} />
                </div>
            </div>
            <div className="empty">
                <GenerateStars />
            </div>
        </div>
    );
}

export default ProductRating;