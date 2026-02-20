import './css/proposal.css'
export default function schoolPledge(){
   return(
      <div className="petition">
        <div className="petImage"></div>
        <div className="petBody">
         <h2>Help Us Complete the List.
            Add a School.</h2>
         <p>
            Submit a school that isn’t listed yet and help build a
            more complete, fair academic overview.
         </p>
         <form>
            <h2>School Details</h2>
            <div className="formText">
               <label>School Name: </label>
               <input 
               type="text"
               placeholder="Enter the name of the school"
               />
            </div>
            <div className="formText">
               <label>School Image: </label>
               <input 
               type="file"
               accept="image/*"
               placeholder="Enter the name of the school"
               />
            </div>
            <div className="formText">
               <label>School Logo: </label>
               <input 
               type="file"
               accept="image/*"
               alt="Enter the name of the school"
               />
            </div>
            <h2>School Faculties/ School</h2>
            <button>+ Add a faculty or a School</button>
            <h2>Contact Message</h2>
            <div className="formText">
               <label>Title: </label>
               <input 
               type="text"
               placeholder="Enter the name of the school"
               />
            </div>
            <div className="formText">
               <label>Body: </label>
               <textarea 
               type="text"
               placeholder="Enter the name of the school"
               />
            </div>
            <button className="submitBtn">Send →</button>
        </form>
        </div>
      </div>
   )
}