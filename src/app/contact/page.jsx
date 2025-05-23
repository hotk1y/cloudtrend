import Img from '@/components/elements/img/Img'
import styles from './contact.module.scss'
import { contactDb } from '@/lib/db'
import Button from '@/components/elements/button/Button'

export const metadata = {
   title: "Contact Page",
   description: "Generated by create next app",
};

export default function ContactPage() {
   return (
      <section className={styles.contact}>
         <Img src={contactDb.img.path} alt={contactDb.img.alt} />
         <div className={styles.formContainer}>
            <form action="#" className={styles.form}>
               {contactDb.form.map((input, index) => (
                  <input key={index} type={input.type} placeholder={input.placeholder} />
               ))}
               <textarea
                  cols="30"
                  rows="10"
                  placeholder={contactDb.textarea}
               ></textarea>
               <Button value={contactDb.button} />
            </form>
         </div>
      </section>
   )
}
