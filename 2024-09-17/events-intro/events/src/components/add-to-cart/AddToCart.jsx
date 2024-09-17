const AddToCart = ({ setProductQty }) => {
    return(
        <button onClick={(e) => setProductQty(prev => prev + 1)}>Add to Cart</button>
    );
}

export default AddToCart;