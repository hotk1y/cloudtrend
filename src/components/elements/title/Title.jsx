import clsx from 'clsx'
import styles from './title.module.scss'
export default function Title(props) {
   return (
      <h1 className={clsx(styles.title, props.style)}>{props.title}</h1>
   )
}
