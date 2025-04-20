import Image from "next/image";
import styles from "./home.module.scss";
import Title from "@/components/elements/title/Title";
import { homeDb } from "@/lib/db"
import Desc from "@/components/elements/desc/Desc";
import Img from "@/components/elements/img/Img";
import Button from "@/components/elements/button/Button";

export default function Home() {
   return (
      <section className={styles.home}>
         <div className={styles.text}>
            <Title style={styles.title} title={homeDb.title} />
            <Desc desc={homeDb.desc} />
            <div className={styles.buttons}>
               {homeDb.buttons.map((btn, index) => (
                  <Button style={styles.button} key={index} value={btn.value} />
               ))}
            </div>
            <div className={styles.brands}>
               <Image src={homeDb.brands.path} alt={homeDb.brands.alt} fill />
            </div>
         </div>
         <Img src={homeDb.img.path} alt={homeDb.img.alt} />
      </section>
   );
}
2.59
