import React from "react"
import styles from '@/styles/components/header.module.scss'
import Link from "next/link";

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.container}>
                <div className={`${styles.row} ${styles.vCenter} ${styles.spaceBetween}`}>
                    <div className={styles.logo}>
                        <Link href="/">EUROPEAN LOGISTICS PARTNERS</Link>
                    </div>
                    <div className={styles.nav}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header;