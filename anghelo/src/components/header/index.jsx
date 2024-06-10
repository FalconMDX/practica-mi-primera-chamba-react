import { Button } from "../Button"
import { Logo } from "../Logo"
import { Nav } from "./Nav"

const listLinks = [
  'Home',
  'Browse',
  'Pricing',
  'Contact'
]

export const Header = () => {
  return (
    <header className="container mx-auto w-full bg-white flex justify-between items-center py-3">
      <Logo />
      <button className="rounded-lg text-textlight md:hidden focus:outline-none focus:shadow-outline hover:text-primary" >
        <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
          <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd"></path>
        </svg>
      </button>
      <div className="hidden md:flex">
        <Nav listLinks={listLinks} />
        <Button text="Sign up" className="ml-4" />
        <Button text="Log in" className="ml-4 bg-white !text-primary border border-primary hover:!text-white hover:!bg-primary hover:px-[36px]" />
      </div>
    </header>
  )
}
