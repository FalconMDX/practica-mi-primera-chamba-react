import Buttonbody from './Buttonbody'

function Now3d() {
  return (
    <div className="flex justify-center mt-12 mb-7">
      <div className="ml-28">
        <div className="bg-[#FF9000] h-96 absolute bottom-30 w-96 rounded-full -z-10"></div>
        <img
          className="w-96 h-96 ml-10 mt-7 "
          src="../../public/casual-life-3d.png"
          alt=""
        />
      </div>
      <div className="w-1/3 ml-20">
        <h2 className="font-bold text-5xl text-[#212E41]">
          Now in <span className="text-[#FF9000]">3D</span>
        </h2>
        <div className="flex items-center my-3">
          <h3 className="text-[#212E41]">$100.00</h3>
          <h3 className="ml-3 text-gray-500 line-through">$169.43</h3>
        </div>
        <p className="text-lg mb-10">
          Ask CDCR San Quintin State Prison 2008. We installed Purex dispensers
          throughout the prison to combat
        </p>
        <Buttonbody />
      </div>
    </div>
  );
}

export default Now3d;
