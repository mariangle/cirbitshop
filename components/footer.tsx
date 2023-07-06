import Image from "next/image"
import Container from "@/components/ui/container"
import FooterSection from "@/components/footer-section"
import CirbitLogo from "@/public/logo.png"

import { INFORMATION_FOOTER, CUSTOMERSERVICE_FOOTER, CONTACT_FOOTER } from "@/lib/constants"

const Footer = () => {
  return (
    <div className="bg-primary text-white">
      <Container> 
        <div className="lg:flex px-4 py-14">
          <div className="flex-[2]">
            <Image 
              src={CirbitLogo}
              alt="cirbit logo"
              width={100}
              height={20}
            />
          </div>
          <div className="flex-[3] flex flex-col md:flex-row gap-8">
            <FooterSection data={INFORMATION_FOOTER}/>
            <FooterSection data={CUSTOMERSERVICE_FOOTER}/>
            <FooterSection data={CONTACT_FOOTER}/>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Footer