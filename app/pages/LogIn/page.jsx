import Link from 'next/link'
import './css/logIn.css'
export default function LogIn(){
   return(
      <div className="logIn">
         <div className="logIn1">
            <h2>Welcome. Verify Your Email to Continue.</h2>
            <p>Verification helps prevent duplicate voting and
               automated submissions. Each verified email
               can submit a limited number of ratings over
               a defined period, ensuring feedback reflects
               real, independent experiences rather than
               volume or spam.
            </p>
            <button>
               <Link href="">
               Contact Us
               </Link>
            </button>
         </div>
         <div className="logIn2">
            <h2>Verify to Rate Fairly</h2>
            <p>To protect the integrity of ratings,
               access is limited to verified Gmail users.
               A one-time code is sent to your email to
               confirm identity and start a
               temporary session. No passwords.
               No account management.
            </p>
            <form>
               <label>Email: </label>
               <input 
               type='email'
               placeholder="Enter an Email to continue"
               />
               <input
               type='number'
               />
               <button>
                  Verify
               </button>
            </form>
         </div>
      </div>
   )
}