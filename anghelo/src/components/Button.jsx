export const Button = ({ className, text }) => {
  return (
    <button className={`${className} bg-primary border border-primary rounded text-white px-[36px] text-base font-semibold transition ease-in-out duration-500 hover:bg-white hover:text-primary  hover:border hover:border-primary box-border`}>
      {text}
    </button>
  )
}
