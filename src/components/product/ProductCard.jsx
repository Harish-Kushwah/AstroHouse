/* eslint-disable react/prop-types */
// import p1 from "../../assets/prodcts/p2.png"
import "./product.css"
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import ScrollAnimation from 'react-animate-on-scroll';

function ProductCard({product}) {
  return (
    <ScrollAnimation  animateIn='fadeIn'>
    <div className="product-card">
        <div className={product.selling_type ? "discount-badge-selling":"discount-badge-dis"} >
        {product.selling_type  && <p className="best-selling">{product.selling_type}</p>} 
           {product.discount && <p className="discount">{product.discount}</p>}
        </div>
        <div className="image">
            <img src={product.image_url} alt="product-image" className="product-image" />
        </div>
        <div className="product-body-top">
        <div className="product-body">
            <div className="title-section">
                <div className="product-title">
                    <p>{product.title}</p>
                </div>
                <div className="price">
                    <p className="old">{product.old_price}</p>
                    <p className="final">{product.new_price}</p>
                </div>
            </div>
            <div className="info">
                <div className="msg">
                   {product.missing_numbers.length>0 &&  <p>Activate missing numbers</p> }
                </div>
                <div className="footer-section">
                <div className="numbers">
                    {product.missing_numbers.map((num)=><div className="number" key={num}>{num}</div>)}
                </div>
                <div className="btn-section">
                    <div className="btn add-to-cart"><CiHeart className="icon heart"/></div>
                    <div className="btn add-to-cart"><CiShoppingCart className="icon cart"/></div>
                </div>
            </div>
                
                
            </div>
        </div>
        </div>
    </div>
  </ScrollAnimation>

  )
}

export default ProductCard