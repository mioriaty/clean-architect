import { Slider } from "@/presentation/components/Slider"
import { FC } from "react"

const HomePage: FC = () => {
  return <div>
    <Slider value={50} onChange={console.log} />
  </div>
}

export default HomePage