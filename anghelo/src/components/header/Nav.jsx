import { Links } from "./Links"

export const Nav = ({ listLinks }) => {
  return (
    <nav className="flex-col flex-grow hidden pb-4 md:pb-0 md:flex md:justify-end md:flex-row">
      {listLinks.map((key) => (
        <Links key={key} text={key} />
      ))}
    </nav>
  )
}
