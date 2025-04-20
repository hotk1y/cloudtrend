import clsx from 'clsx'
import styles from './button.module.scss'
export default function Button(props) {
   return (
      <button key={props.key} className={clsx(styles.button, props.style)}>
         {props.value}
      </button>
   )
}
