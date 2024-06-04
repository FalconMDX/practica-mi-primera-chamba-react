import { Button } from "../Button"

export const Nesletter = () => {
  return (
    <div className="flex flex-col items-center pt-40">
      <p className="text-white font-semibold text-3xl">Subscribe our newsletter</p>
      <div className="flex flex-col md:flex-row items-center justify-center">
        <input type="text" className="p-3 py-4 rounded outline-none w-80 md:w-96 m-4 border-2 focus:border-primary box-content" />
        <Button text="Subscribe now" className="p-3 py-4" />
      </div>
    </div>
  )
}
