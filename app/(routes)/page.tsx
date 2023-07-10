import Container from "@/components/ui/container"
import ProductList from "@/components/product/product-list";
import VariantList from "@/components/product/variant-list";
import Billboard from "@/components/ui/billboard";

import HighlightsSection from "@/components/ui/highlights-section";

import getProducts from "@/actions/get-products";
import getRecentProducts from "@/actions/get-recent-products";
import getBillboard from "@/actions/get-billboard";

const HomePage = async () => {
  const products = await getProducts({isFeatured: true, isArchived: false})
  const recentProducts = await getRecentProducts();
  const billboard = await getBillboard("5f99b6c0-5a5f-455d-aa2d-31a0d8563cad")

  return (
    <div className="pb-12 bg-white">
      <Billboard data={billboard}/>
      <HighlightsSection />
      <Container>
        <div className="mt-8">
          <ProductList title="FREMHÆVET" items={products}/>
        </div>
        <div className="mt-8">
          <VariantList title="NYHEDER" items={recentProducts}/>
        </div>
      </Container>
    </div>
  )
}

export default HomePage