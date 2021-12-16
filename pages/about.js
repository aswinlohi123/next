import Head from 'next/head'
import styles from '../styles/Home.module.css'
const About = () => {
    return ( 
        <>
        <Head>
        <title>Ninja List| About </title>
        <meta name="keywords" content="ninjas"/>
      </Head>
        <div>
            <h1 className={styles.title}>About</h1>
            <p>localhost refused to connect.

Try:
Checking the connection
Checking the proxy and the firewall
ERR_CONNECTION_REFUSED
Check your internet connection.
Check any cables and reboot any routers, modems, or other network devices you may be using.

Allow Opera to access the network in your firewall or antivirus settings.
If it is already listed as a program allowed to access the network, try removing it from the list and adding it again.</p>
        </div>
        </>
     );
}
 
export default About;