import Title from "./Title"
import {Link} from 'react-router-dom'
import QuantityBtn from "./QuantityBtn"
import {CartContext} from "./CartContext"
import {useContext} from "react"

export default function Checkout() {

    let {cartItems} = useContext(CartContext)
    let cartEmpty = cartItems.length <=0 ? true : false
    let grandTotal = cartItems.reduce((total, product)=>{
        return total += product.price*product.quantity
    },0)

    const freeShippingPrice = 99

    return (
        <>
            <Title mainTitle="Shopping Cart" />

            {
                cartEmpty && 
                <div>
                    <div className="nothingInCart">No items in shopping cart<br/><br/>
                    <Link to="/">Go to shop?</Link></div> :
                </div>
            }

            {
                !cartEmpty &&
                <div className="container">
                    <div className="cartSection">
                        <table className="checkoutTable">
                            <tbody>
                                {
                                    cartItems.map(product=>(
                                        <tr key={product.id}>
                                            <td>
                                                <Link to={'/product/'+product.id}>
                                                <img src={product.image} alt={product.title}/>
                                                </Link>
                                            </td>
                                            <td>
                                                <p>Name of product : {product.title}</p>
                                                <p>Price : ${product.price}</p>
                                                <p>Desc : {product.description}</p>
                                            </td>
                                            <td width="200">
                                                <QuantityBtn productInfo={product} />
                                            </td>
                                            <td>
                                                <div className="productSubTotal">
                                                    ${product.price*product.quantity}
                                                </div>
                                            </td>
                                        </tr>

                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className="checkoutSection">
                        <div>Total</div>
                        <div className="grandTotal">${grandTotal}</div>
                        {
                            grandTotal >= freeShippingPrice ? 
                            <div className="freeShipping">✔️FREE DELIVARY</div> :
                            <div className="noShipping">Purchase ${freeShippingPrice} in total for FREE DELIVARY<br/>${freeShippingPrice-grandTotal} to go</div>
                        }
                        
                        <button>Check Out</button>
                    </div>
                </div> 
            }

        </>
    )
}
