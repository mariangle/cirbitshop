import Container from "@/components/ui/container"
import FooterSection from "@/components/footer-section"
import CirbitLogo from "@/components/ui/cirbit-logo"

import { INFORMATION_FOOTER, CUSTOMERSERVICE_FOOTER, CONTACT_FOOTER } from "@/lib/constants"

const Footer = () => {
  return (
    <div className="bg-grey">
      <Container> 
        <div className="lg:flex px-4 py-14">
          <div className="flex-[2]">
            <div className="w-24">
              <CirbitLogo 
                color="#515154"
              />
            </div>
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