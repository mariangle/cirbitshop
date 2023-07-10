import Wishlist from "./components/wishlist"

import Container from "@/components/ui/container"

const page = () => {
  return (
    <div className="min-h-[60vh] py-8">
      <Container>
        <h1 className="font-semibold mb-2">ØNSKELISTE</h1>
        <Wishlist />
      </Container>
    </div>
  )
}

export default page