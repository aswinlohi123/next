import Link from 'next/link'
import Image from 'next/image'
const Navbar = () => {
    return ( 
        <nav>
        <div className="logo">
          <Image src="/chori.jpeg" width={128} height={80}/>
        </div>
        <Link href="/"><a>Home</a></Link>
       <Link href="/about"><a>About</a></Link> 
        <Link href="/ninja"><a>Ninja List</a></Link>

        </nav>
        
     );
}
 
export default Navbar; 
