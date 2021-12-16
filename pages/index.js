import Head from 'next/head'
import Navbar from '../comps/Novbar'
import Footer from '../comps/footer'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <Head>
      <title>Ninja List| Home</title>
      <meta name="keywords" content="ninjas"/>
    </Head>
    <div>
     
      <h1 className={styles.title}>Home</h1>
      localhost refused to connect.

<p className={styles.text}>Try:
Checking the connection
Checking the proxy and the firewall
ERR_CONNECTION_REFUSED
Check your internet connection.
Check any cables and reboot any routers, modems, or other network devices you may be using.
</p>

<p className={styles.text}>Allow Opera to access the network in your firewall or antivirus settings.
If it is already listed as a program allowed to access the network, try removing it from the list and adding it again</p>
     <Link href="/ninja/test">
     <a className={styles.btn}>see ninja list on click </a>
     </Link>
    
    </div>
    </>
  )
}
