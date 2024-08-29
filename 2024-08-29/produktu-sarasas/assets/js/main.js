// document.querySelector('#result').innerHTML = data.products.map(product => `<div class="row product-row py-4 justify-content-between">
//                     <div class="col-3">
//                         <div class="position-relative">
//                             <img src="${product.thumbnail}" style="max-width: 100%;">
//                             <span class="discount">-${product.discountPercentage}%</span>
//                         </div>
//                     </div>
//                     <div class="col-6">
//                         <h4 class="title text-primary fs-6">${product.title}</h4>
//                         <div class="rating text-warning">
//                             <i class="bi bi-star-fill"></i>
//                             <i class="bi bi-star-fill"></i>
//                             <i class="bi bi-star-fill"></i>
//                             <i class="bi bi-star-fill"></i>
//                             <i class="bi bi-star-fill"></i>
//                         </div>
//                         <div class="description pt-4">${product.description}</div>
//                     </div>
//                     <div class="col">
//                         <div class="price mb-4 ">
//                             <span class="regular-price">$${product.price}</span>
//                         </div>
//                         <button class="btn btn-warning w-100">Add to cart</button>
//                     </div>
//                 </div>`).join('');


// NAUDOJANT FOR OF 
let html = '';

for(const product of data.products) {
    let price = product.price - (product.discountPercentage / 100) * product.price;

    html += `<div class="row product-row py-4 justify-content-between">
                    <div class="col-3">
                        <div class="position-relative">
                            <img src="${product.thumbnail}" style="max-width: 100%;">
                            ${product.discountPercentage > 0 ? `<span class="discount">-${product.discountPercentage}%</span>` : ``}
                        </div>
                    </div>
                    <div class="col-6">
                        <h4 class="title text-primary fs-6">${product.title}</h4>
                        <div class="rating text-warning">
                            <div class="filled" style="width: ${product.rating * 2 * 10}%">
                                <div class="star-wrapper">
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                </div>
                            </div>
                            <div class="empty">
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                            </div>
                        </div>
                        <div class="description pt-4">${product.description}</div>
                    </div>
                    <div class="col">
                        <div class="price mb-4 ">
                            ${product.discountPercentage > 0 ? 
                                `<span class="special-price">$${price.toFixed(2)}</span>
                                 <span class="original-price">$${product.price}</span>`
                                :
                                `<span class="regular-price">$${product.price}</span>`
                            }
                            
                        </div>
                        <button class="btn btn-warning w-100">Add to cart</button>
                    </div>
                </div>`;
}

document.querySelector('#result').innerHTML = html;