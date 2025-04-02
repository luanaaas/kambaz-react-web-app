import { ListGroup } from "react-bootstrap";
import AssignmentControls from "./AssignmentControls";
import AssignControlButtons from "./AssignControlButtons";
import AControlButtons from "./AControlButtons";
import { BsGripVertical } from "react-icons/bs";
import { RiFileEditLine } from "react-icons/ri";
import { Link, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { deleteAssignment, setAssignments } from "./reducer";
import { useEffect } from "react";
import * as coursesClient from "../client";
import * as assignmentClient from "./client";

export default function Assignments() {
    const {cid} = useParams();
    const { assignments } = useSelector((state: any) => state.assignmentsReducer);
    const dispatch = useDispatch();
    
    const fetchAssignments = async () => {
      const assignments = await coursesClient.retrieveAssignment(cid as string);
      dispatch(setAssignments(assignments));
    };
    useEffect(() => {
      fetchAssignments();
    }, []);


    const removeAssignment = async (assignmentId: string) => {
          await assignmentClient.deleteAssignment(assignmentId);
          dispatch(deleteAssignment(assignmentId));
    };

    const formatDate = (dateString: string) => {
      const date = new Date(dateString);
      const options: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "long",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      };
      return date.toLocaleString("en-US", options);
    };
  
  

    return (

      <div>
        <AssignmentControls /><br /><br /><br /><br />
        <ListGroup className="rounded-0" id="wd-assignments">
          <ListGroup.Item className="wd-assignments p-0 mb-5 fs-5 border-gray">
            
            <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical className="me-2 fs-3" /> ASSIGNMENTS <AssignControlButtons />
             </div>


            <ListGroup className="wd-assignment-list rounded-0">
                
            {assignments.map((assignment: any) => (

            <ListGroup.Item as={Link} to={`/Kambaz/Courses/${cid}/Assignments/${assignment._id}`}
                  className="wd-assignment-list-item p-3 ps-1 d-flex align-items-center justify-content-between" >
                
                <div className="d-flex align-items-center ">
                  <BsGripVertical className="me-2 fs-3" />
                  <RiFileEditLine className="me-2 fs-3 green-file" />

                  
                  <div className="d-flex flex-column ms-2">
                    <h3>{assignment.title}</h3>
                    <p>{assignment.description}</p>
                   
                    <span className="assignment-details">
                      Multiple Modules | <b>Available from</b> {formatDate(assignment.availableFrom)} | <b>Available until</b> {formatDate(assignment.availableUntil)}
                    </span>
                    
                    <span className="assignment-due">
                      <b>Due</b> {formatDate(assignment.dueDate)} | {assignment.points} pts
                    </span>
                  </div>

                </div>

                  <AControlButtons
                  assignmentId={assignment._id}
                  deleteAssignment={removeAssignment}
                  />


              </ListGroup.Item>))}


            </ListGroup>

          </ListGroup.Item>
        
        </ListGroup>



      </div>
);}



  
  
  