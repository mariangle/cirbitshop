import Container from "@/components/ui/container"
import ProductList from "@/components/product/product-list";

import HighlightsSection from "@/components/ui/highlights-section";

import getProducts from "@/actions/get-products";

const HomePage = async () => {
  const products = await getProducts({isFeatured: true})

  return (
    <div className="px-4 pb-12 bg-white">
      <HighlightsSection />
      <Container>
        <div>
          <ProductList title="Fremhævede Produkter" items={products}/>
        </div>
      </Container>
    </div>
  )
}

export default HomePage