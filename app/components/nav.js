import '../css/nav.css'
import Link from 'next/link'
import Image from 'next/image'
export default function Navigation(){
   return(
      <header>
        <Link href="/">
           <Image src="/justice.jpg"
           width={30}
           height={30}
           style = {{
            objectFit: "contain",
            borderRadius:"8px"
           }}
           alt="John Dean"
           />
           <h1>Rate Me</h1>
          </Link>
         <button><Link
         href="/pages/schoolDet">
            Add An Institution
         </Link> </button>
      </header>
   )
}