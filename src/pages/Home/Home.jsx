import CoverPage from "../../components/cover/CoverPage"
import ProductContainer from "../../components/product-container/ProductContainer"
import all_product_section from "../../store/products_data.json"
function Home() {
  return (
    <>
    <CoverPage></CoverPage>
    {all_product_section.all_product_section.map(section=>(
        <ProductContainer section={section} key={section.title}></ProductContainer>
    ))}
    </>

  )
}

export default Home