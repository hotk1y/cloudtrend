import { getPosts } from '@/lib/data'
import styles from './adminPosts.module.scss'
import Img from '../img/Img'

export default async function AdminPosts() {
   const posts = await getPosts()
   return (
      <div>
         <h2>Posts</h2>
         {posts.map((post) => (
            <div key={post.id} className={styles.post}>
               <div className={styles.detail}>
                  <Img src={post.img} />
                  <span>{post.title}</span>
               </div>
            </div>
         ))}
      </div>
   )
}