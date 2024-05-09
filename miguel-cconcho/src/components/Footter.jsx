import Butonc from "./Butonc";
import Icon from "./Icon";

function Footter() {
  return (
    <div className="bg-[#212E41] text-center">
      <div className="pt-16">
        <h2 className="mb-8 text-white text-3xl">Subscribe our newsletter</h2>
        <form action="">
          <input className="w-80 h-12 rounded" type="text" />
          <button className="ml-3 w-40 h-12 text-white  rounded bg-[#FF9000] font-bold hover:bg-orange-700">
            Subscribe now
          </button>
        </form>
      </div>
      <div className="ml-10 flex justify-evenly items-center mt-20 text-[#656565] w-2/3 text-sm">
        <div className="w-1/3">
          <div className="flex justify-center">
            <Icon type="foot" />
          </div>
          <p>
            Ask CDCR San Quintin State Prison 2008. We installed Purex
            dispensers throughout the prison to combat
          </p>
        </div>
        <div className="flex items-center">
          <div className="grid mx-4 text-left">
            <a className="hover:text-white my-1" href="">Home</a>
            <a className="hover:text-white my-1" href="">About</a>
            <a className="hover:text-white my-1" href="">Policy</a>
          </div>
          <div className="grid mx-4 text-left">
            <a className="hover:text-white my-1" href="">Support</a>
            <a className="hover:text-white my-1" href="">News</a>
            <a className="hover:text-white my-1" href="">Refund</a>
          </div>
          <div className="grid mx-4 text-left">
            <a className="hover:text-white my-1" href="">Pricing</a>
            <a className="hover:text-white my-1" href="">Contact</a>
            <a className="hover:text-white my-1" href="">Join</a>
          </div>
        </div>
      </div>
      <h3 className="mt-8 pb-5 text-[#656565] text-sm ">Copyright @ Humans 2021</h3>
    </div>
  );
}

export default Footter;
