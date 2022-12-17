import { useState } from "react";
import { initialProducts } from './data';

export default function App() {
    const [products, setProducts] = useState(initialProducts)

    return (
        <>
        <h1>Mini Shelf</h1>
        
        <div className={'App-container'}>
            {
        products.map(product =>  {
            return (        
                <div className={'App-item'} key={product.id}>
                    <div><h3> {product.name}</h3></div>
                    <div>
                        <img    src={product.image} 
                                alt={product.name}  
                                width={50}
                        />
                    </div>
                    <div className={'Price-item'}>
                        price ${product.price}
                    </div>
                </div>       
            )
            
            })
            
        }
        </div>    
        </>
    )
}