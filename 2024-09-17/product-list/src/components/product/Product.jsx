import ProductPrice from '../product-price/ProductPrice.jsx';
import ProductRating from '../product-rating/ProductRating.jsx';
import Button from '../button/Button.jsx';

const Product = ({ data }) => {
    return (
      <div className="row data-row py-4 justify-content-between">
        <div className="col-3">
            <div className="position-relative">
                <img src={data.thumbnail} style={{ maxWidth: '100%' }}/>
                {data.discountPercentage > 0 && 
                  <span className="discount">-${data.discountPercentage}%</span>
                }
            </div>
        </div>
        <div className="col-6">
            <h4 className="title text-primary fs-6">
                {data.title}
            </h4>
            <ProductRating rating={data.rating} />
            <div className="description pt-4">
                {data.description}
            </div>
        </div>
        <div className="col">
            <ProductPrice 
                discount={data.discountPercentage} 
                price={data.price} 
            />
            <Button text="Add to cart" />
        </div>
    </div>
  );
}

export default Product;