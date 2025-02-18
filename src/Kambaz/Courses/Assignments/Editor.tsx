import { Form, Button, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router';
import db from "../../Database";


export default function AssignmentEditor() {
    const {aid} = useParams();
    const assignment = db.assignments.find((assignment) => assignment._id === aid);
    return (
      <div id="wd-assignments-editor">

        <Form>
          
          <Form.Group controlId="wd-name">
            <Form.Control type="text" id="wd-name" value={assignment?.title} />
            <br />
            <Form.Control id="wd-description" as="textarea" value={assignment?.description} />
          </Form.Group>

  

          <Form.Group controlId="wd-points" className="mt-4">
            <Row>
              <Col sm={6} className="text-end">
                <Form.Label>Points</Form.Label>
              </Col>
              <Col sm={6} className="text-end">
                <Form.Control type="number" id="wd-points" value={assignment?.points} />
              </Col>
            </Row>
          </Form.Group>

          <Form.Group controlId="wd-group" className="mt-3">
          <Row>
            <Col sm={6} className="text-end">
              <Form.Label>Assignment Group</Form.Label>
            </Col>
            <Col sm={6} className="text-end">
              <Form.Control as="select" id="wd-group">
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
                <Form.Control id="wd-due-date" type="date" defaultValue="2024-05-13" />
              </Form.Group>
            </Col>
          </Row>

          <Row className="justify-content-end mt-3">
            <Col sm={3} >
              <Form.Group controlId="wd-available-from">
                <Form.Label>Available from</Form.Label>
                <Form.Control id="wd-available-from" type="date" defaultValue="2024-05-06" />
              </Form.Group>
            </Col>
            <Col sm={3}>
              <Form.Group controlId="wd-available-until">
                <Form.Label>Until</Form.Label>
                <Form.Control id="wd-available-until" type="date" defaultValue="2024-05-20" />
              </Form.Group>
            </Col>
          </Row>
        </Form.Group>
        <hr />

        <Row className="justify-content-end">
          <Col sm={2} className="text-end">
            <Button variant="secondary" type="button">Cancel</Button>
          </Col>
          <Col sm={2} className="text-end">
            <Button variant="danger" type="button">Save</Button>
          </Col>
        </Row>
    
        </Form>
      </div>
  );}
  