import { Form, Button, Row, Col } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router';
import { useState, useEffect } from 'react';
import { addAssignment, updateAssignment } from './reducer';
import { useDispatch, useSelector } from 'react-redux';


export default function AssignmentEditor() {
    const {aid, cid} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const { assignments } = useSelector((state: any) => state.assignmentsReducer);
    const assignment = assignments.find((assignment: any) => assignment._id === aid);
    
    const[title, setTitle] = useState("");
    const[availableFrom, setAvailableFrom] = useState("");
    const[availableUntil, setAvailableUntil] = useState( "");
    const[dueDate, setDueDate] = useState("");
    const[points, setPoints] = useState("");
    const[description, setDescription] = useState("");

    useEffect(() => {
      if (assignment) {
          setTitle(assignment.title);
          setAvailableFrom(assignment.availableFrom);
          setAvailableUntil(assignment.availableUntil);
          setDueDate(assignment.dueDate);
          setPoints(assignment.points);
          setDescription(assignment.description);
      }}, [assignment]);
    
      const addOrEditAssignment = () => {
      if (aid === "new"){
        const newAssignment = {
          _id: new Date().getTime().toString(), 
          title,
          course: cid,
          availableFrom,
          availableUntil,
          dueDate,
          points,
          description,
        };
        dispatch(addAssignment(newAssignment))
      } else {
        const editedAssignment = {
          _id: aid, 
          title,
          course: cid,
          availableFrom,
          availableUntil,
          dueDate,
          points,
          description,
        };
        dispatch(updateAssignment(editedAssignment))
      }
      navigate(`/Kambaz/Courses/${cid}/Assignments`);
    };
    
    const handleCancel = () => {
      if (assignments) {
          setTitle(assignments.title);
          setAvailableFrom(assignments.availableFrom);
          setAvailableUntil(assignments.availableUntil);
          setDueDate(assignments.dueDate);
          setPoints(assignments.points);
          setDescription(assignments.description);
      }
      navigate(`/Kambaz/Courses/${cid}/Assignments`);
  };

  


    return (
      <div id="wd-assignments-editor" >

        <Form >
          
          <Form.Group controlId="wd-name">
            <Form.Control type="text" id="wd-name" placeholder={assignment?.title} value={title} onChange={(e) => setTitle(e.target.value)}/>
            <br />
            <Form.Control id="wd-description" as="textarea" placeholder={assignment?.description} value={description} onChange={(e) => setDescription(e.target.value)} />
          </Form.Group>

  

          <Form.Group controlId="wd-points" className="mt-4">
            <Row>
              <Col sm={6} className="text-end">
                <Form.Label>Points</Form.Label>
              </Col>
              <Col sm={6} className="text-end">
                <Form.Control type="number" id="wd-points" placeholder={assignment?.points} value={points} onChange={(e) => setPoints(e.target.value)} />
              </Col>
            </Row>
          </Form.Group>

          <Form.Group controlId="wd-group" className="mt-3">
          <Row>
            <Col sm={6} className="text-end">
              <Form.Label>Assignment Group</Form.Label>
            </Col>
            <Col sm={6} className="text-end">
              <Form.Control as="select" id="wd-group" >
                <option>ASSIGNMENTS</option>
              </Form.Control>
            </Col>
          </Row>
        </Form.Group>

        <Form.Group controlId="wd-display-grade-as" className="mt-3">
          <Row>
            <Col sm={6} className="text-end">
              <Form.Label>Display Grade as</Form.Label>
            </Col>
            <Col sm={6} className="text-end">
              <Form.Control as="select" id="wd-display-grade-as">
                <option>Percentage</option>
              </Form.Control>
            </Col>
          </Row>
        </Form.Group>

        <Form.Group controlId="wd-submission-type" className="mt-3">
          <Row>
            <Col sm={6} className="text-end">
              <Form.Label>Submission Type</Form.Label>
            </Col>
            <Col sm={6} className="text-end">
              <Form.Control as="select" id="wd-submission-type">
                <option>Online</option>
              </Form.Control>
            </Col>
          </Row>
        </Form.Group>

        <Form.Group className="mt-3">
           <Col sm={6} className="text-end">
            <Form.Label>Online Entry Options</Form.Label>
          </Col>
          <Row className="justify-content-end">
            <Col sm={6}>
              <Form.Check type="checkbox" name="check-entry" label="Text Entry" id="wd-text-entry" />
              <Form.Check type="checkbox" name="check-entry" label="Website URL" id="wd-website-url" />
              <Form.Check type="checkbox" name="check-entry" label="Media Recordings" id="wd-media-recordings" />
              <Form.Check type="checkbox" name="check-entry" label="Student Annotation" id="wd-student-annotation" />
              <Form.Check type="checkbox" name="check-entry" label="File Uploads" id="wd-file-upload" />
            </Col>
          </Row>
        </Form.Group>

        <Form.Group controlId="wd-assign-to" className="mt-3">
          <Row >
            <Col sm={6} className="text-end">
              <Form.Label>Assign to</Form.Label>
            </Col>
            <Col sm={6} className="text-end">
              <Form.Control type="text" placeholder="Everyone" id="wd-assign-to"/>
            </Col>
          </Row>
        </Form.Group>


        <Form.Group>

          <Row className="justify-content-end mt-3">
            <Col sm={6}>
              <Form.Group controlId="wd-due-date">
                <Form.Label>Due</Form.Label>
                <Form.Control id="wd-due-date" type="date" placeholder={assignment?.dueDate} value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
              </Form.Group>
            </Col>
          </Row>

          <Row className="justify-content-end mt-3">
            <Col sm={3} >
              <Form.Group controlId="wd-available-from">
                <Form.Label>Available from</Form.Label>
                <Form.Control id="wd-available-from" type="date" placeholder={assignment?.availableFrom} value={availableFrom} onChange={(e) => setAvailableFrom(e.target.value)} />
              </Form.Group>
            </Col>
            <Col sm={3}>
              <Form.Group controlId="wd-available-until">
                <Form.Label>Until</Form.Label>
                <Form.Control id="wd-available-until" type="date" placeholder={assignment?.availableUntil} value={availableUntil} onChange={(e) => setAvailableUntil(e.target.value)} />
              </Form.Group>
            </Col>
          </Row>
        </Form.Group>
        <hr />

        <Row className="justify-content-end">
          <Col sm={2} className="text-end">
            {/* <Button onClick={() => navigate(`/Kambaz/Courses/${cid}/Assignments`)} variant="secondary" type="button">Cancel</Button> */}
            <Button onClick={handleCancel} variant="secondary" type="button">Cancel</Button>
          </Col>
          <Col sm={2} className="text-end">
            <Button onClick={addOrEditAssignment} variant="danger" type="button">Save</Button>
          </Col>
        </Row>
    
        </Form>
      </div>
  );}
  