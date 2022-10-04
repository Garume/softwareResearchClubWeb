import { FC } from "react"
import SRCIcon from "./src-Icon"
import SRCVideo from "./src-video"
import { motion } from "framer-motion"

interface Props {}

const Title: FC<Props> = () => {
  return (
    <div className="relative text-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, delay: 3.5 }}
        className="absolute h-screen w-screen"
      >
        <SRCVideo />
      </motion.div>
      <div className="absolute h-screen w-screen ">
        <SRCIcon />
      </div>
    </div>
  )
}

export default Title
