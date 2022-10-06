import { Anchor, Breadcrumbs } from "@mantine/core"
import Link from "next/link"
import { FC, useMemo } from "react"

interface Props {}

const TitleHeader: FC<Props> = () => {
  const items = useMemo(
    () =>
      [
        { title: "News", href: "/news" },
        { title: "About", href: "/about" },
        { title: "Work", href: "/work" },
        { title: "Other", href: "/other" },
        { title: "Contact", href: "/about" },
      ].map((item, index) => (
        <Link href={item.href} key={index} passHref>
          <Anchor component="p">{item.title}</Anchor>
        </Link>
      )),
    []
  )
  return (
    <Breadcrumbs separator="|" className="justify-center pt-8 text-3xl">
      {items}
    </Breadcrumbs>
  )
}

export default TitleHeader
