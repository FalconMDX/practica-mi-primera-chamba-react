import { Button } from "../Button"

export const CardInfo = ({ data }) => {
  const { title, realPrice, price, text } = data

  // Separar el título en palabras
  const words = title.split(' ')

  // Obtener la última palabra y el resto del título
  const lastWord = words.pop()
  const restOfTitle = words.join(' ')

  return (
    <div className="w-full md:w-[45%] p-[5%] flex flex-col">
      <h2 className="text-7xl text-secondary font-bold">{restOfTitle} <span className="text-primary">{lastWord}</span></h2>
      <div className="flex gap-2 text-xl my-4">
        <span className="text-secondary font-semibold">{realPrice}</span>
        <span className="text-textlight line-through ">{price}</span>
      </div>
      <p className="text-textlight text-lg mb-16">
        {text}
      </p>

      <Button text="Play now" className="w-[fit-content] text-xl py-4 rounded-md" />
    </div>
  )
}
