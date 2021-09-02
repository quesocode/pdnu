import Image from 'next/image'
import styles from './header.module.scss'
import utilStyles from '../../styles/utils.module.scss'
import Link from 'next/link'
import Logo_blue from './Logo_blue.svg'
import Button from '../button/button'
import ButtonIcon from '../button/buttonIcon'


const name = 'UNDP'

export default function Header({ children, home }) {
    return (

        <header className={styles.header}>
            <div className="grid-container">
            <div className="grid-x">
                <div className="cell medium-12 large-10 large-offset-1">
            <div className={styles.headerContainer}>
                <Link href="/">
                <a className={styles.logolink}>
                    {/* <Logo_blue className={styles.logo} /> */}
                    <Image src="/images/undp_logo_blue.svg" alt="undp-header-logo" width="59" height="120" />
                    <h3 className={utilStyles.heading2Xl}>{name}</h3>
                </a>
                </Link>

                <nav className={styles.mainNav}>
                    <Link href="/the-problem"><a>The problem</a></Link>
                    <Link href="/the-excuses"><a>The excuses</a></Link>
                    <Link href="/film"><a>Watch the film</a></Link>
                    <Link href="/about"><a>About UNDP</a></Link>
                </nav>
                <nav className={styles.actionNav}>
                    <Button title="Get Involved" href="/get-involved" className="allcaps" />
                    <ButtonIcon title="Select your language" href="/lang" icon="images/icon_globe.svg"></ButtonIcon>
                    <ButtonIcon title="Text to speech" href="/texttospeech" icon="images/icon_waves.svg"></ButtonIcon>

                </nav>
            </div>
            </div>
            </div>
            </div>
        </header>



    )}