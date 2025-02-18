import { ListGroup } from "react-bootstrap";
import AssignmentControls from "./AssignmentControls";
import AssignControlButtons from "./AssignControlButtons";
import AControlButtons from "./AControlButtons";
import { BsGripVertical } from "react-icons/bs";
import { RiFileEditLine } from "react-icons/ri";
import { Link, useParams } from "react-router";
import db from "../../Database";


export default function Assignments() {
    const {cid} = useParams();
    const assignments = db.assignments.filter((assignment) => assignment.course === cid);
    return (

      <div>
        <AssignmentControls /><br /><br /><br /><br />
        <ListGroup className="rounded-0" id="wd-assignments">
          <ListGroup.Item className="wd-assignments p-0 mb-5 fs-5 border-gray">
            
            <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical className="me-2 fs-3" /> ASSIGNMENTS <AssignControlButtons />
             </div>


            <ListGroup className="wd-assignment-list rounded-0">
                
            {assignments.map((assignment: any) => (<ListGroup.Item as={Link} to={`/Kambaz/Courses/${cid}/Assignments/${assignment._id}`}
                  className="wd-assignment-list-item p-3 ps-1 d-flex align-items-center justify-content-between">
                {/* Left Side: Icons + Assignment Info */}
                <div className="d-flex align-items-center ">
                  <BsGripVertical className="me-2 fs-3" />
                  <RiFileEditLine className="me-2 fs-3 green-file" />

                  {/* Assignment Title + Details in Column */}
                  <div className="d-flex flex-column ms-2">
                    <h3>{assignment.title}</h3>
                    <p>{assignment.description}</p>
                   
                    <span className="assignment-details">
                      Multiple Modules | <b>Not available until</b> May 6 at 12:00am
                    </span>
                    <span className="assignment-due">
                      <b>Due</b> May 13 at 11:59pm | 100 pts
                    </span>
                  </div>

                </div>

                  <AControlButtons />

              </ListGroup.Item>))}


            </ListGroup>

          </ListGroup.Item>
        
        </ListGroup>



      </div>
);}


{/* <input placeholder="Search for Assignments"
id="wd-search-assignment" />
<button id="wd-add-assignment-group">+ Group</button>
<button id="wd-add-assignment">+ Assignment</button>
<h3 id="wd-assignments-title">
ASSIGNMENTS 40% of Total <button>+</button>
</h3>
<ul id="wd-assignment-list">
<li className="wd-assignment-list-item">
<a href="#/Kambaz/Courses/1234/Assignments/123"
className="wd-assignment-link" >
A1 - ENV + HTML
</a>
<br />
Multiple Modules | <b>Not avaiable until</b> May 6 at 12:00am |
<br />
<b>Due</b> May 13 at 11:59pm | 100 pts
</li>

<li className="wd-assignment-list-item">
<a href="#/Kambaz/Courses/1234/Assignments/123"
className="wd-assignment-link" >
A2 - CSS + BOOSTRAP
</a>
<br />
Multiple Modules | <b>Not avaiable until</b> May 13 at 12:00am |
<br />
<b>Due</b>  May 20 at 11:59pm | 100 pts
</li>
<li className="wd-assignment-list-item">
<a href="#/Kambaz/Courses/1234/Assignments/123"
className="wd-assignment-link" >
A3 - JAVASCRIPT + REACT
</a>
<br />
Multiple Modules | <b>Not avaiable until</b> May 20 at 12:00am |
<br />
<b>Due</b>  May 27 at 11:59pm | 100 pts
</li>
</ul> */}
  
  
  