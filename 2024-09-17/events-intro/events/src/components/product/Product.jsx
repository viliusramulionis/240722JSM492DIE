const Product = ({ setQty, qty }) => {
    return (
        <div>
            <h2>Geras produktas</h2>
            <div>
                <strong>Kaina:</strong>
                <span>$19.99</span>
            </div>
            <div>
                <label>Kiekis:</label>
                <input 
                    type="number" 
                    value={qty}
                    onChange={(e) => setQty(e.target.value)} 
                />
            </div>
        </div>
    );
}

export default Product;