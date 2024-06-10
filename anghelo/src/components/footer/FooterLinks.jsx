import { Logo } from "../Logo"

export const FooterLinks = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-center py-10">
        <div className="flex flex-col items-center w-[30%]">
          <Logo classImg="w-[100px]" classText="text-white" classDiv="text-5xl" />
          <p className="text-textlight w-[258px] text-sm">Ask CDCR San Quintin State Prison 2008. We installed Purex dispensers throughout the prison to combat</p>
        </div>

        <div className=" w-full py-4 md:w-[30%] flex justify-center">
          <ul className="text-textlight text-lg grid grid-cols-3 gap-2 w-[250px]">
            <li>Home</li>
            <li>Support</li>
            <li>Pricing</li>
            <li>About</li>
            <li>News</li>
            <li>Contact</li>
            <li>Policy</li>
            <li>Refund</li>
            <li>Join</li>
          </ul>
        </div>

        <div className="w-[30%]"></div>
      </div>
      <p className="text-textlight text-center py-4">Copyright @ Humans 2021</p>
    </>

  )
}
