"use client"
import { useState } from "react"
import styles from "./links.module.scss"
import NavLink from "./navLink/navLink"
import { CgMenuRightAlt } from "react-icons/cg";
import { CgClose } from "react-icons/cg";
import { navAdmin, navLinks } from "@/lib/db"
import { handleLogout } from "@/lib/action";

export default function Links({ session }) {
   const [open, setOpen] = useState(false)
   const isAdmin = false
   return (
      <div className={styles.container}>
         <div className={styles.links}>
            {navLinks.map((link) => (
               <NavLink item={link} key={link.title} />
            ))}
            {
               session?.user ? (
                  <>
                     {session.user?.isAdmin && (<NavLink item={navAdmin.admin} />)}
                     <form action={handleLogout}>
                        <button className={styles.logout}>{navAdmin.logout}</button>
                     </form>
                  </>
               ) : (<NavLink item={navAdmin.login} />)
            }
         </div>
         <button className={styles.menuButton} onClick={() => setOpen((prev) => !prev)}>
            {open ? <CgClose size={30} /> : <CgMenuRightAlt size={30} />}
         </button>
         {open && <div className={styles.mobileLinks}>
            {navLinks.map((link) => (
               <NavLink item={link} key={link.title} />
            ))}
         </div>}
      </div>
   )
}
