import logo from "/logo.png"

export const Logo = ({ classImg = '', classText = '', classDiv = '' }) => {
  return (
    <div className={`${classDiv} flex justify-center h-[75px] items-center text-3xl text-primary font-bold`}>
      <img
        src={logo}
        alt="Logo"
        className={`${classImg} w-auto xl:w-auto`}
        width="72"
        height="72"
      />
      Hum<span className={`${classText} text-secondary`}>ans</span>
    </div>
  )
}
