import { FaPlus } from "react-icons/fa6";
import { Button } from "react-bootstrap";
import { CiSearch } from "react-icons/ci";


export default function AssignmentControls() {
 return (
    <div id="wd-assignment-controls" className="d-flex justify-content-between align-items-center mb-3">

     
        <div id="wd-search-assignment" className="relative w-64 flex items-center border border-black rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-400 float-start me-2">
            <CiSearch className="position-relative me-2" style={{ bottom: "1px" }}/>
            <input
            type="text"
            placeholder="Search..."
            className="py-1"
            id="wd-search-assignment"
            style={{ border: "0px solid" }}
            
            />
        </div>

        <div className="d-flex align-items-center">
            <Button variant="secondary" size="lg" className="me-2 float-end" id="wd-add-assignment-group">
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Group
            </Button>

            <Button variant="danger" size="lg" className="me-1 float-end" id="wd-add-assignment">
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Assignment
            </Button>
        </div>

   </div>
);}


{/* <div id="wd-assignment-controls" className="text-nowrap">
     
     <Button variant="danger" size="lg" className="me-1 float-end" id="wd-add-assignment">
       <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
       Assignment
     </Button>

     <Button variant="danger" size="lg" className="me-2 float-end" id="wd-add-assignment-group">
       <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
       Group
     </Button>

     <div id="wd-search-assignment" className="relative w-64 flex items-center border border-black rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-400 float-start me-2">
        <CiSearch className="position-relative me-2" style={{ bottom: "1px" }}/>
        <input
          type="text"
          placeholder="Search..."
          className="py-1"
          id="wd-search-assignment"
          style={{ border: "0px solid" }}
          
        />
      </div> 




   </div>
   */}