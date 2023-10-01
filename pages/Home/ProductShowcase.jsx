
import Link from 'next/link';
import React, { useState, useEffect } from 'react';


const ProductShowcase = ({articles}) => {

    // const [products, setProducts] = useState([]);  
    // useEffect(() => {
    //   fetch('/api/groceryProject')
    //     .then(response => response.json())
    //     .then(data => setProducts(data))
    //     .catch(error => console.error('Error fetching products:', error));
    // }, []);
  
    return (
 <>
    <h1 className='text-black text-center'>Recent Product</h1>
    <div className="d-flex justify-content-center container">
        <div className="row row-col-3 row-cols-md-4 mx-0"> 
            {articles.map(article => (
                <div key={article.id} className="col mb-4 px-2"> 
                    <div className="card shadow">
                        {/* <img src={product.imageUrl} className="card-img-top" alt={product.name} /> */}
                        <Link href="/productdetial/[id]" as={`/productdetial/${article.id}`} className="card-body">
                            <h5 className="card-title">{article.title}</h5>
                            <p className="card-text text-black">{article.body}</p>
                            <button className='btn primary'> Add to Cart</button>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    </div>
 </> 
        
     
    );
}

export default ProductShowcase;
