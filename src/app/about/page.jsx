import styles from "./about.module.scss"
import Title from "@/components/elements/title/Title"
import Desc from "@/components/elements/desc/Desc"
import Img from "@/components/elements/img/Img"
import { aboutDb } from "@/lib/db"

export const metadata = {
   title: "About Page",
   description: "About description",
};

export default function AboutPage() {
   return (
      <section className={styles.about}>
         <div className={styles.text}>
            <h2 className={styles.label}>{aboutDb.label}</h2>
            <Title style={styles.title} title={aboutDb.title} />
            <Desc desc={aboutDb.desc} />
            <div className={styles.boxes}>
               {aboutDb.boxes.map((box, index) => (
                  <div key={index} className={styles.box}>
                     <h2>{box.title}</h2>
                     <p>{box.desc}</p>
                  </div>
               ))}
            </div>
         </div>
         <Img src={aboutDb.img.path} alt={aboutDb.img.alt} />
      </section>
   )
}
