import styles from './button.module.css'
import utilStyles from '../../styles/utils.module.scss'
import Link from 'next/link'


export default function Button({ children, title, href, className }) {
    return (

        <Link href={href}>
            <a className={`${styles.button} ${className}`}>
                {title}
            </a>
        </Link>


    )}


