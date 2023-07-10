import Container from "@/components/ui/container"
import FooterSection from "@/components/ui/footer-section"
import CirbitLogo from "@/components/ui/cirbit-logo"

import { INFORMATION_FOOTER, CUSTOMERSERVICE_FOOTER, CONTACT_FOOTER } from "@/lib/constants"
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs"
import Button from "@/components/ui/button"

const Footer = () => {
  return (
    <>
      <div className="bg-grey-light border-y text-grey-dark">
        <Container> 
          <div className="lg:grid grid-cols-2 py-14 gap-x-8">
            <div className="col-span-1">
              <div className="w-14 mb-6">
                <CirbitLogo 
                  color="#006ac0"
                />
              </div>
              <div>
                <h6 className="font-bold text-xl mb-4">NYHEDSBREV</h6>
                <p className="text-sm text-gray-600 pb-4">Tilmeld dig vores nyhedsbrev og vær den første til at få de seneste nyheder og tilbud.</p>
                <div className="flex mb-6 border w-fit border-primary">
                  <input type="text" className="p-2"/>
                  <Button className="rounded-none text-sm p-2">
                    Tilmeld
                  </Button>
                </div>
              </div>
              <div className="flex gap-4 items-center cursor-pointer text-gray-600">
                <BsFacebook />
                <BsInstagram />
                <BsLinkedin />
              </div>
            </div>
            <div className="mt-8 lg:mt-0 col-span-1 flex flex-col md:flex-row gap-2">
              <FooterSection data={INFORMATION_FOOTER}/>
              <FooterSection data={CUSTOMERSERVICE_FOOTER}/>
              <FooterSection data={CONTACT_FOOTER}/>
            </div>
          </div>
        </Container>
      </div>
      <Banner />
    </>
  )
}

const Banner = () => {
  return (
    <div className="bg-grey-light p-4 text-xs">
      <Container>
        <div className="flex items-center justify-between">
          <div>&copy; Copyright 2023. All rights reserved.</div>
          <div>Mageløs 10 5000 Odense C - CVR: 35811087</div>
        </div>
      </Container>
    </div>
  )
}

export default Footer