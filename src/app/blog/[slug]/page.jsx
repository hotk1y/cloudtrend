import Img from '@/components/elements/img/Img'
import styles from './post.module.scss'
import PostUser from '@/components/elements/postUser/postUser'
import { Suspense } from 'react'
import { getPost } from '@/lib/data'

export const generateMetadata = async ({ params }) => {
   const { slug } = params
   const post = await getPost(slug)

   return {
      title: post.title,
      description: post.desc
   }
}

const getData = async (slug) => {
   const res = await fetch(`http://localhost:3000/api/blog/${slug}`)
   const data = await res.json()
   if (!res.ok) {
      throw new Error("Error")
   }
   return data
}

export default async function SinglePostPage({ params }) {
   const { slug } = params
   const post = await getData(slug)
   // const post = await getPost(slug)

   return (
      <section className={styles.detailsPost}>
         <Img style={styles.img} src={post.img} alt={"Post"} />
         <div className={styles.text}>
            <h2 className={styles.title}>{post.title}</h2>
            <div className={styles.detail}>
               {post && (
                  <Suspense fallback={<div>Loading...</div>}>
                     <PostUser userId={post.userId} />
                  </Suspense>
               )}
               <div className={styles.content}>
                  <span className={styles.public}>Published</span>
                  <span className={styles.date}>01.01.2024</span>
               </div>
            </div>
            <div className={styles.desc}>{post.desc}</div>
         </div>
      </section>
   )
}