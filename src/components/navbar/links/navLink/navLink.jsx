"use client"
import { usePathname } from "next/navigation"
import styles from "./navLink.module.scss"
import Link from "next/link"
import clsx from "clsx"

export default function NavLink({ item }) {
   const pathName = usePathname()
   return (
      <Link className={clsx(styles.link, pathName === item.path && styles.active)} href={item.path}>
         {item.title}
      </Link>
   )
}
