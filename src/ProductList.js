import {Link} from "react-router-dom"
import React, {useState, useEffect} from "react"
import Title from "./Title"
import QuantityBtn from "./QuantityBtn"

export default function ProductList() {

    let [productList, setProductList] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setProductList(data))

    },[])

    return (
        <>
            <Title mainTitle="Shopping for products" />
            
            <div className="container">
                {
                    productList.map(product => (
                        <React.Fragment key={product.id}>

                            <div className="containerItem">
                                <Link to={'/product/'+product.id}>
                                    <img src={product.image} alt={product.Title} />
                                </Link>

                                <div className="productName">
                                    {product.title}  -  ${product.price}/pcs
                                </div>
                
                                <QuantityBtn productInfo={product} />
                            </div>

                        </React.Fragment>
                    ))
                }
            </div>
        </>
    )
}
