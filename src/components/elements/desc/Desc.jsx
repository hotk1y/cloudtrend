import styles from './desc.module.scss'
export default function Desc(props) {
   return (
      <p className={styles.desc}>{props.desc}</p>
   )
}
