import { useContext, useState } from "react"
import { CartContext } from "./CartContext"

export default function QuantityBtn({productInfo}) {

    const {cartItems, setCartItems} = useContext(CartContext)

    let productIndexInCart = cartItems.findIndex((element)=>{
        return element.id === productInfo.id
    })

    let [itemNoInCart,setItemNoInCart] = useState(
        (productIndexInCart===-1) ? 0 : cartItems[productIndexInCart].quantity
    )

    const handleAdd = () => {

        if (productIndexInCart===-1)
        {
            setCartItems(
                [...cartItems,
                {
                    id:productInfo.id,
                    title:productInfo.title,
                    image:productInfo.image,
                    price:productInfo.price,
                    description:productInfo.description,
                    quantity:1
                }
                ]
            )
        }
        else
        {
            let newCartArray = [...cartItems]
            newCartArray[productIndexInCart].quantity++
            setCartItems(newCartArray)
        }

        setItemNoInCart(itemNoInCart+1)
    }

    const handleSubtract = ()=>{

        if (cartItems[productIndexInCart].quantity===1)
        {
            let newCartArray = [...cartItems]
            newCartArray.splice(productIndexInCart,1)
            setCartItems(newCartArray)
        }
        else
        {
            let newCartArray = [...cartItems]
            newCartArray[productIndexInCart].quantity--
            setCartItems(newCartArray)
        }

        setItemNoInCart(itemNoInCart-1)
    }

    return (
        <div className="addToCart">
            {
                (itemNoInCart === 0) ?
                <span className="addToCartBtn" onClick={handleAdd}>Add to cart</span> :
                <div>
                    <span className="subtractBtn" onClick={handleSubtract}>-</span>
                    {itemNoInCart}pcs
                    <span className="addBtn" onClick={handleAdd}>+</span>
                </div>
            }
        </div>
    )
}
