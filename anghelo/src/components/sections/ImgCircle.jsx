import casual from "/casual-life-3d.png"

export const ImgCircle = () => {
  return (
    <div className="relative ml-36">
      <div className="absolute rounded-full h-[94%] md:h-[90%] lg:h-[98%] aspect-1  bg-primary z-10 left-[-44px] md:left-[-40px] lg:left-[-55px] bottom-[35px] md:bottom-[28px] lg:bottom-[40px]"></div>
      <img
        src={casual}
        alt="3d-life"
        className="w-auto xl:w-auto z-40 relative"
        width="659"
        height="486"
      />
    </div>
  )
}
