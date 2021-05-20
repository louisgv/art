import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Image from 'next/image'
import Head from 'next/head'

export default function Layout({children}){
    return <div className={styles.container}>{children}</div>
}