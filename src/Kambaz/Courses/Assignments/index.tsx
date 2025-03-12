import { ListGroup } from "react-bootstrap";
import AssignmentControls from "./AssignmentControls";
import AssignControlButtons from "./AssignControlButtons";
import AControlButtons from "./AControlButtons";
import { BsGripVertical } from "react-icons/bs";
import { RiFileEditLine } from "react-icons/ri";
import { Link, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { deleteAssignment } from "./reducer";


export default function Assignments() {
    const {cid} = useParams();
    const { assignments } = useSelector((state: any) => state.assignmentsReducer);
    const dispatch = useDispatch();
  

    return (

      <div>
        <AssignmentControls /><br /><br /><br /><br />
        <ListGroup className="rounded-0" id="wd-assignments">
          <ListGroup.Item className="wd-assignments p-0 mb-5 fs-5 border-gray">
            
            <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical className="me-2 fs-3" /> ASSIGNMENTS <AssignControlButtons />
             </div>


            <ListGroup className="wd-assignment-list rounded-0">
                
            {assignments.filter((assignment: any) => assignment.course === cid)
            .map((assignment: any) => (<ListGroup.Item as={Link} to={`/Kambaz/Courses/${cid}/Assignments/${assignment._id}`}
                  className="wd-assignment-list-item p-3 ps-1 d-flex align-items-center justify-content-between" >
                
                <div className="d-flex align-items-center ">
                  <BsGripVertical className="me-2 fs-3" />
                  <RiFileEditLine className="me-2 fs-3 green-file" />

                  
                  <div className="d-flex flex-column ms-2">
                    <h3>{assignment.title}</h3>
                    <p>{assignment.description}</p>
                   
                    <span className="assignment-details">
                      Multiple Modules | <b>Available from</b> {assignment.availableFrom} | <b>Available until</b> {assignment.availableUntil}
                    </span>
                    <span className="assignment-due">
                      <b>Due</b> {assignment.dueDate} | {assignment.points} pts
                    </span>
                  </div>

                </div>

                  <AControlButtons
                  assignmentId={assignment._id}
                  deleteAssignment={(assignmentId) => {
                    dispatch(deleteAssignment(assignmentId));
                  }}/>


              </ListGroup.Item>))}


            </ListGroup>

          </ListGroup.Item>
        
        </ListGroup>



      </div>
);}



  
  
  