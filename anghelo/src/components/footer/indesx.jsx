import { FooterLinks } from "./FooterLinks"
import { Nesletter } from "./Nesletter"

export const Footer = () => {
  return (
    <footer className="bg-secondary">
      <div className="container w-full mx-auto">
        <Nesletter />
        <FooterLinks />
      </div>
    </footer>
  )
}
