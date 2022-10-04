import React, { useEffect, useState } from "react"
import { FC } from "react"

interface Props {}

const SRCVideo: FC<Props> = () => {
  const [hasWindow, setHasWindow] = useState(false)
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true)
    }
  }, [])
  return (
    <div className="h-full w-full">
      {hasWindow && (
        <video
          className="h-full w-full object-cover"
          src={require("src/public/movie/splash_movie.mp4")}
          playsInline
          muted
          autoPlay
          loop
        />
      )}
    </div>
  )
}
export default SRCVideo
