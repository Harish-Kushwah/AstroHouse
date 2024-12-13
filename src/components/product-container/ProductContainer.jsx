/* eslint-disable react/prop-types */
import "./product-container.css";
import ProductCard from "../product/ProductCard";
function ProductContainer({section}) {
  console.log(section.products)
  return (
    <div className="product-container">
        <div className="product-header">
            <p className="product-title">{section.title}</p>
            <p className="product-sub-title">{section.subtitle}</p>
        </div>
        <div className="all-products">
          {section.products.map((product)=><ProductCard product={product} key={product.title}> </ProductCard>)}
        </div>

    </div>
  )
}

export default ProductContainer