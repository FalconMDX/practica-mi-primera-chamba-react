import richie2 from "/Richie_2-1.png"
import richie1 from "/Richie_1-1.png"
import richie4 from "/Richie_4-1.png"
import { Avatar } from "./Avatar"

export const Avatars = () => {
  return (
    <section className="bg-primary w-full h-auto p-10">
      <div className="container w-full flex flex-col lg:flex-row justify-between items-center mx-auto">
        <Avatar imgAvatar={richie2} />
        <Avatar imgAvatar={richie1} />
        <Avatar imgAvatar={richie4} />
      </div>
    </section>
  )
}
