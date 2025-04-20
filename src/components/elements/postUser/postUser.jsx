import { getUser } from '@/lib/data'
import styles from './postUser.module.scss'
import Img from '../img/Img'

// const getData = async (userId) => {
//    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
//       cache: "no-store"
//    })
//    const data = await res.json()
//    if (!res.ok) {
//       throw new Error("Error")
//    }
//    return data
// }

export default async function PostUser({ userId }) {
   // const user = await getData(userId)
   const user = await getUser(userId)

   return (
      <div className={styles.user}>
         <Img style={styles.img} src={user.img ? user.img : "/noavatar.png"} alt={"Avatar"} />
         <div className={styles.content}>
            <span className={styles.author}>Author</span>
            <span className={styles.name}>{user.username}</span>
         </div>
      </div>
   )
}
