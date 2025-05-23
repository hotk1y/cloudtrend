"use client"
import { register } from '@/lib/action'
import styles from './register.module.scss'
import { useFormState } from "react-dom"
import Button from "@/components/elements/button/Button";
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useEffect } from 'react';

export default function RegisterForm() {
   const [state, formAction] = useFormState(register, undefined)
   const router = useRouter()
   useEffect(() => {
      state?.success && router.push("/login")
   }, [state?.success, router])
   return (
      <form action={formAction} className={styles.form}>
         <input type="text" placeholder="username" name="username" />
         <input type="email" placeholder="email" name="email" />
         <input type="password" placeholder="password" name="password" />
         <input type="password" placeholder="password again" name="passwordRepeat" />
         <Button style={styles.button} value={"Register"} />
         {state?.error}
         <Link href={"/login"}>Have an account? <b>Login</b></Link>
      </form>
   )
}
