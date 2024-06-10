import { Avatars } from "./components/avatars"
import { Footer } from "./components/footer/indesx"
import { Header } from "./components/header"
import { Sections } from "./components/sections"
import { ImgCircle } from "./components/sections/ImgCircle"
import { ImgSimple } from "./components/sections/ImgSimple"

const section1 = {
  title: 'President of Sales',
  realPrice: '$275.00',
  price: '$350.43',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis tellus tincidunt in commodo morbi tristique sit purus. Auctor risus vitae'
}

const section2 = {
  title: 'Now in 3D',
  realPrice: '$100.00',
  price: '$169.43',
  text: 'Ask CDCR San Quintin State Prison 2008. We installed Purex dispensers throughout the prison to combat'
}

function App() {

  return (
    <>
      <Header />
      <Sections data={section1} >
        <ImgSimple />
      </Sections>

      <Sections data={section2} className="md:flex-row-reverse md:h-auto py-12">
        <ImgCircle />
      </Sections>
      <Avatars />

      <Footer />
    </>
  )
}

export default App
