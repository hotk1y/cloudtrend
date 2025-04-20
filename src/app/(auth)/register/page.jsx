
import styles from './register.module.scss'
import RegisterForm from "@/components/elements/registerForm/registerForm";

export default function RegisterPage() {
   return (
      <div className={styles.register}>
         <div className={styles.wrapper}>
            <RegisterForm />
         </div>
      </div>
   )
}
