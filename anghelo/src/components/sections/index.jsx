import { CardInfo } from "./CardInfo"

export const Sections = ({ children, data, className = '' }) => {
  return (
    <section className={`${className} container w-full mx-auto flex flex-col-reverse md:flex-row items-center justify-between h-auto md:h-[calc(100vh-99px)]`}>
      <CardInfo data={data} />

      <div className="w-full h-[45%] md:w-[45%] md:h-auto">
        {children}
      </div>
    </section>
  )
}
