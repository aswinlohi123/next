import Link from 'next/link'
import { useEffect } from  'react'
import { useRouter } from  'next/router'

const Notfound = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
          // router.go(-1);
           router.push('/');
        }, 3000)

    }, [])
    return ( 
        <div className="not-found">
            <h1>Ooooops</h1>
            <h2>That page cannot be found.</h2>
            <p>Go to <Link href="/"><a>homepage</a></Link></p>
        </div>
     );
}
 
export default Notfound;