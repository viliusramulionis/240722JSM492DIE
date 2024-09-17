const ProductPrice = ({ discount, price }) => {
    const specialPrice = price - (discount / 100) * price;

    return (
        <div className="price mb-4 ">
            {discount > 0 ? 
                <>
                    <span className="special-price">${specialPrice.toFixed(2)}</span>
                    <span className="original-price">${price}</span>
                </>
                :
                <span className="regular-price">${price}</span>
            }
        </div>
    );
}

export default ProductPrice;