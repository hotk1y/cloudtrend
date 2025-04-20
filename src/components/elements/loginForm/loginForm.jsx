"use client"
import { login } from '@/lib/action'
import styles from './login.module.scss'
import { useFormState } from "react-dom"
import Button from "@/components/elements/button/Button";
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useEffect } from 'react';

export default function LoginForm() {
   const [state, formAction] = useFormState(login, undefined)
   const router = useRouter()
   // useEffect(() => {
   //    state?.success && router.push("/login")
   // }, [state?.success, router])
   return (
      <form action={formAction} className={styles.form}>
         <input type="text" placeholder="username" name="username" />
         <input type="password" placeholder="password" name="password" />
         <Button style={styles.button} value={"Login"} />
         {state?.error}
         <Link href={"/register"}>{"Don't have an account?"} <b>Register</b></Link>
      </form>
   )
}
