import "./testimony.css"
import TestimonyCard from "../testimony/TestimonyCard"
function Testimony() {
  return (
    <div className="product-container">
        <div className="product-header">
            <p className="product-title">What out client says</p>
        </div>
        <div className="all-products">
         <TestimonyCard> </TestimonyCard>
        </div>
    </div>
  )
}

export default Testimony