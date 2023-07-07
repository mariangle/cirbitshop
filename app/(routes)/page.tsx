import Container from "@/components/ui/container"
import ProductList from "@/components/product-list";
import Billboard from "@/components/ui/billboard"

import HighlightsSection from "@/components/ui/highlights-section";

import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";

const HomePage = async () => {
  const products = await getProducts({isFeatured: true})
  const billboard = await getBillboard("28bfd183-2351-466a-a908-d2175808096f");

  return (
    <div className="px-4 pb-12 bg-white">
        { <Billboard data={billboard}/> }
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