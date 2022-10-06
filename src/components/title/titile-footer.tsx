import { Box } from "@mantine/core"
import { FC } from "react"

interface Props {}

const TitleFooter: FC<Props> = () => {
  return (
    <Box
      className="h-20 w-full bg-gradient-to-t from-black to-zinc-900 pt-4 text-center text-2xl text-white"
      sx={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 100%, 0% 100%, 0% 25%)" }}
    >
      Click
    </Box>
  )
}

export default TitleFooter
