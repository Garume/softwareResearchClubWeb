import { Box } from "@mantine/core"
import { FC } from "react"

interface Props {
  isOpen: boolean
}

const TitleFilter: FC<Props> = ({ isOpen }) => {
  return (
    <Box
      className={isOpen ? `h-full w-full bg-black/80 backdrop-blur-2xl ` : ``}
    />
  )
}

export default TitleFilter
