import styles from './buttonIcon.module.css'
import Link from 'next/link'
import cn from 'classnames'


export default function ButtonIcon({ children, title, href, icon, alt }) {
    return (

        <Link href={href}>
            <a className={cn({
                [styles.buttonIcon]: true,
                [styles.hasIcon]: icon !== undefined
            })} title={title}>
                {icon ? (
                    <>
                        <img src={icon} alt='{alt ? alt : title}' />
                        <span>{title}</span>
                    </>
                ) : (
                    <>
                        <span>{title}</span>
                    </>
                )}
                
                
            </a>
        </Link>


    )}