import LoginForm from '@/components/elements/loginForm/loginForm';
import styles from './login.module.scss'
import { handleGithubLogin } from '@/lib/action';

export default function LoginPage() {

   return (
      <div className={styles.login}>
         <div className={styles.wrapper}>
            <form action={handleGithubLogin}>
               <button className={styles.github}>Login with Github</button>
            </form>
            <LoginForm />
         </div>
      </div>
   )
}
