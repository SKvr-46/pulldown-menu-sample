import styles from "styles/menu.module.scss"
import Link from "next/link"
import { useState } from "react"

export const Menu = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenuIsOpen = () => {
        setIsOpen(!isOpen)
    }

    return(
        <div  className={styles.container} >
            <div
            className={isOpen ? styles.menuIsOpened : styles.menuIsClosed }
            >
            <button 
            className={styles.btn}
            onClick={() => toggleMenuIsOpen()}
            >
                <span className={styles.bar}></span>
            </button>
            <div className={styles.menu}>
                <Link href="/">LinkA</Link>
                <Link href="/">LinkB</Link>
                <Link href="/">LinkC</Link>
            </div>
            </div>
        </div>
    )
}

