import { FC, useCallback, useState } from "react"
import SRCIcon from "./src-Icon"
import SRCVideo from "./src-video"
import { motion } from "framer-motion"
import TitleFooter from "./titile-footer"
import TitileHeader from "./titile-header"
import TitleFilter from "./titile-filter"

interface Props {}

const Title: FC<Props> = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleClick = useCallback(() => {
    setIsOpen(!isOpen)
    console.log(isOpen)
  }, [isOpen])

  return (
    <div onClick={handleClick} className="relative z-0 text-center">
      <div className="absolute z-20 h-screen w-screen">
        <TitleFilter isOpen={isOpen} />
      </div>
      <motion.div className="absolute z-50 h-screen w-screen">
        {isOpen && <TitileHeader />}
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, delay: 3.5 }}
        className="absolute z-10 h-screen w-screen"
      >
        <SRCVideo />
      </motion.div>
      <div className="absolute z-40 h-screen w-screen">
        <SRCIcon />
      </div>
      <motion.div
        initial={{ y: 100, scale: 1 }}
        animate={{ y: 0, scale: 1 }}
        transition={{ delay: 4 }}
        className="absolute z-50 h-screen w-screen pt-[calc(100vh-4rem)]"
      >
        {!isOpen && <TitleFooter />}
      </motion.div>
    </div>
  )
}

export default Title
