import {useParams, Link} from "react-router-dom"
import Title from "./Title"
import QuantityBtn from "./QuantityBtn"
import {useState,useEffect} from "react"

export default function ProductDetail() {

    let params = useParams()
    let [productDetail,setProductDetail] = useState(null)

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => {
                let productInfo = data.find((element)=>{
                    return element.id === parseInt(params.id)
                })
                setProductDetail(productInfo)
            })
    },[params.id])

    return (
        <div>
            {
                productDetail &&
                <div className="ProductDetail">
                    <Title mainTitle={productDetail.title+'Details'} />

                    <table width="100%">
                        <tbody>
                        <tr>
                            <td align="right">
                                <img src={productDetail.image} alt={productDetail.title} width="400" />
                            </td>
                            <td width="45%" padding="10">
                                <p>Name of product : {productDetail.title}</p>
                                <p>Price : ${productDetail.price}</p>
                                <p>Desc : {productDetail.description}</p><br/>
                                <QuantityBtn productInfo={productDetail} />
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            }
        
            <Link to="/" >
                <div className="backToGoodsListBtn">↩️ Back to product list</div>
            </Link>
        </div>
    )
}
