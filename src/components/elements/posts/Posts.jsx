import Link from 'next/link'
import Img from '../img/Img'
import styles from './posts.module.scss'

export default function Posts({ post }) {
   return (
      <div className={styles.postsBlock}>
         <div className={styles.top}>
            <Img style={styles.img} src={post.img} alt={"Posts"} />
            <span className={styles.date}>01.01.2024</span>
         </div>
         <div className={styles.bottom}>
            <h2 className={styles.title}>{post.title}</h2>
            <p className={styles.desc}>{post.desc}</p>
            <Link className={styles.linkPost} href={`/blog/${post.slug}`}>Read More</Link >
         </div>
      </div>
   )
}