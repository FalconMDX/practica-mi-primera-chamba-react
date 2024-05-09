import Butonc from "./Butonc";
import Buttonbody from "./Buttonbody";
function Presidents() {
  return (
    <div className="flex justify-center mt-24 ml-10">
      <div className="text-left w-1/3">
        <h2 className="font-bold text-5xl text-[#212E41]">Presidents of</h2>
        <h2 className="font-bold text-5xl text-[#FF9000]">Sales</h2>
        <div className="flex items-center my-3">
          <h3 className="text-[#212E41]">$275.00</h3>
          <h3 className="ml-3 text-gray-500 line-through ">$350.43</h3>
        </div>
        <p className="text-lg mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis
          tellus tincidunt in commodo morbi tristique sit purus. Auctor risus
          vitae
        </p>
        <Buttonbody />
      </div>
      <div className="ml-24">
        <img className="w-96 h-110" src="../../public/richie.png" alt="" />
      </div>
    </div>
  );
}

export default Presidents;
