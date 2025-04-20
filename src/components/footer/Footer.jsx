import { logo, footerDb } from '@/lib/db'
import styles from './footer.module.scss'

export default function Footer() {
   return (
      <footer className={styles.footer}>
         <div className={styles.logo}>{logo}</div>
         <div className={styles.text}>{footerDb.copy}</div>
      </footer>
   )
}
