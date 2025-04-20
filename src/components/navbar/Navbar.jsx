import Link from "next/link";
import Links from "./links/Links";
import styles from "./navbar.module.scss"
import { logo } from "@/lib/db";
import { auth } from "@/lib/auth";


export default async function Navbar() {
   const session = await auth()

   return (
      <header className={styles.header}>
         <Link href={"/"} className={styles.logo}>{logo}</Link>
         <div className="">
            <Links session={session} />
         </div>
      </header>
   )
}