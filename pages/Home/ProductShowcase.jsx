
import React, { useState, useEffect } from 'react';

const ProductShowcase = () => {
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      fetch('/api/groceryProject')
        .then(response => response.json())
        .then(data => setProducts(data))
        .catch(error => console.error('Error fetching products:', error));
    }, []);
  
    return (
<>
    <h1 className='text-black text-center'>Recent Product</h1>
    <div className="d-flex justify-content-center">
        <div className="row row-cols-md-2 mx-0"> {/* Added mx-0 to remove horizontal padding */}
            {products.map(product => (
                <div key={product.id} className="col mb-4 px-2"> {/* Added px-2 for column padding */}
                    <div className="card shadow">
                        <img src={product.imageUrl} className="card-img-top" alt={product.name} />
                        <div className="card-body">
                            <h5 className="card-title">{product.name}</h5>
                            <p className="card-text text-black">${product.price}</p>
                            <button className='btn primary'> Add to Cart</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
</>

    
    
        
     
    );
}

export default ProductShowcase;
