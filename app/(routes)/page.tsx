import Container from "@/components/ui/container"
import ProductList from "@/components/product-list";
import Billboard from "@/components/ui/billboard"
import Image from "next/image";

import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";

const HomePage = async () => {
  const products = await getProducts({isFeatured: true})
  // const billboard = await getBillboard("28bfd183-2351-466a-a908-d2175808096f");

  return (
    <div className="h-full">
        { /* <Billboard data={billboard}/> */}
      <Container>
        <div>
          <ProductList title="Featured Products" items={products}/>
        </div>
      </Container>
    </div>
  )
}

export default HomePage