import clsx from 'clsx';
import styles from './img.module.scss'
import Image from "next/image";
export default function Img(props) {
   return (
      <div className={clsx(styles.img, props.style)}>
         <Image src={props.src} alt={props.alt} fill />
      </div>
   )
}