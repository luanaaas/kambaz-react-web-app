import { Form, Button, Row, Col } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { addAssignment, updateAssignment } from './reducer';
import { useDispatch, useSelector } from 'react-redux';
import * as coursesClient from "../client";
import * as assignmentsClient from "./client";


export default function AssignmentEditor() {
  const { aid, cid } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);

  const initialAssignment =
    aid !== "new"
      ? assignments.find((assignment: any) => assignment._id === aid)
      : {
        title: "",
        description: "",
        points: "",
        assignmentGroup: "ASSIGNMENTS",
        gradeAs: "PERCENTAGE",
        submissionType: "ONLINE",
        onlineEntryOptions: [
          { id: "wd-text-entry", label: "Text Entry" },
          { id: "wd-website-url", label: "Website URL" },
          { id: "wd-media-recordings", label: "Media Recordings" },
          { id: "wd-student-annotation", label: "Student Annotation" },
          { id: "wd-file-upload", label: "File Uploads" },
        ],
        dueDate: "",
        availableFrom: "",
        availableUntil: "",
      };

  const [assignment, setAssignment] = useState(initialAssignment);


  useEffect(() => {
    if (aid !== "new") {
      const existingAssignment = assignments.find((a: any) => a._id === aid);
      if (existingAssignment) {
        setAssignment(existingAssignment);
      }
    }
  }, [aid, assignments]);

  // may need edits
  const handleSave = async () => {
    if (aid !== "new") {
      await assignmentsClient.updateAssignment(assignment);
      dispatch(updateAssignment(assignment));
    } else {
      if (cid) {
        await coursesClient.createAssignmentForCourse(cid, assignment);
      }
      dispatch(addAssignment({ ...assignment, course: cid }));
    }
    navigate(`/Kambaz/Courses/${cid}/Assignments`);
  };

 

  return (
    <div id="wd-assignments-editor" className="me-3">
      <Form onSubmit={(e) => { 
  e.preventDefault(); 
  handleSave();
}}>

        <Form.Group controlId="wd-name">
        <Form.Label className="mb-3">
          <b>Assignment Name</b>
        </Form.Label>
        <Row className="row mb-3">
          <Col className="col-sm-12">
            <Form.Control
              type="text"
              id="wd-name"
              placeholder="Assignment Title"
              value={assignment.title}
              onChange={(e) => setAssignment({ ...assignment, title: e.target.value })
              }
              required
              readOnly={currentUser.role !== "FACULTY"}
            />
          </Col>
        </Row>
        </Form.Group>

        <Form.Group controlId="wd-description">
        <Row className="mb-3">
          <Col className="col-sm-12">
            <Form.Control
              as="textarea"
              value={assignment.description}
              placeholder="Assignment Description"
              onChange={(e) =>
                setAssignment({ ...assignment, description: e.target.value })
              }
              id="wd-description"
              rows={10}
              required
              readOnly={currentUser.role !== "FACULTY"}
            ></Form.Control>
          </Col>
        </Row>
        </Form.Group>


        <Form.Group controlId="wd-points">
        <Row className="mb-3">
          <Form.Label  className="col-sm-2 col-form-label">
            <span className="float-end">Points</span>
          </Form.Label>
          <Col className="col-sm-10">
            <Form.Control
              type="number"
              id="wd-points"
              value={assignment.points}
              placeholder="Points"
              onChange={(e) =>
                setAssignment({ ...assignment, points: Number(e.target.value) })
              }
              min="1"
              required
              readOnly={currentUser.role !== "FACULTY"}
            />
          </Col>
        </Row>
        </Form.Group>

        <Form.Group controlId="wd-group">
        <Row className="row mb-3">
          <Form.Label className="col-sm-2 col-form-label">
            <span className="float-end">Assignment Group</span>
          </Form.Label>
          <Col className="col-sm-10">
            <Form.Control
              as="select"
              id="wd-group"
              disabled={currentUser.role !== "FACULTY"}
            >
              <option value="ASSIGNMENTS">{assignment.assignmentGroup}</option>
            </Form.Control>
          </Col>
        </Row>
        </Form.Group>

        <Form.Group controlId="wd-display-grade-as">
        <Row className="row mb-3">
          <Form.Label
            
            className="col-sm-2 col-form-label"
          >
            <span className="float-end">Display Grade as</span>
          </Form.Label>
          <Col className="col-sm-10">
            <Form.Control
              as="select"
              id="wd-display-grade-as"
              disabled={currentUser.role !== "FACULTY"}
            >
              <option value="PERCENTAGE">{assignment.gradeAs}</option>
            </Form.Control>
          </Col>
        </Row>
        </Form.Group>


        <Form.Group controlId="wd-submission-type">
        <Row className="row mb-3">
          <Form.Label
            
            className="col-sm-2 col-form-label"
          >
            <span className="float-end">Submission Type</span>
          </Form.Label>
          <Col className="col-sm-10">
            <div className="border border-gray rounded">
              <div className="ms-3 me-3">
                <div className="pt-3 pb-3">
                  <Form.Control
                    id="wd-submission-type"
                    as="select"
                    disabled={currentUser.role !== "FACULTY"}
                  >
                    <option value="ONLINE">{assignment.submissionType}</option>
                  </Form.Control>
                </div>
                <b>Online Entry Options</b>
                <div className="pt-2">
                  {assignment.onlineEntryOptions.map(
                    (option: { id: string; label: string }) => (
                      <div className="form-check pb-3" key={option.id}>
                        <Form.Check
                          type="checkbox"
                          name="check-entry"
                          id={option.id}
                          disabled={currentUser.role !== "FACULTY"}
                        />
                        <Form.Label className="form-check-label">
                          {option.label}
                        </Form.Label>
                        
                        
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </Col>
        </Row>

        </Form.Group>

        <Form.Group>
        <Row className="row mb-5">
          <Form.Label  className="col-sm-2 col-form-label">
            <span className="float-end">Assign</span>
          </Form.Label>
          <Col className="col-sm-10">
            <div className="border border-gray rounded">
              
              <div className="ms-3 me-3 mt-3 mb-3">

                <Form.Group controlId="wd-assign-to">
                <Form.Label  className="form-label">
                  <b>Assign to</b>
                </Form.Label>
                <div className="d-flex align-items-center border border-gray rounded">
                  <span className="border border-gray bg-light rounded p-2 m-2">
                    Everyone X
                  </span>
                </div>
                </Form.Group>

                <Form.Group controlId="wd-due-date">
                <Form.Label className="form-label">
                  <b>Due</b>
                </Form.Label>
                <div className="input-group mb-3">
                  <Form.Control
                    type="datetime-local"
                    id="wd-due-date"
                    value={`${assignment.dueDate}`}
                    onChange={(e) =>
                      setAssignment({ ...assignment, dueDate: e.target.value })
                    }
                    required
                    readOnly={currentUser.role !== "FACULTY"}
                  />
                </div>
                </Form.Group>

                
                <div className="row mb-3 d-flex">

                <Form.Group controlId="wd-available-from">
                  <div className="col-sm-6">
                    <Form.Label >
                      <b>Available from</b>
                    </Form.Label>
                    <div className="input-group mb-3">
                      <Form.Control
                        id="wd-available-from"
                        type="datetime-local"
                        value={`${assignment.availableFrom}`}
                        onChange={(e) =>
                          setAssignment({
                            ...assignment,
                            availableFrom: e.target.value,
                          })
                        }
                        required
                        readOnly={currentUser.role !== "FACULTY"}
                      />
                    </div>
                  </div>
                  </Form.Group>
                  

                  <Form.Group controlId="wd-available-until">
                  <div className="col-sm-6">
                    <Form.Label >
                      <b>Until</b>
                    </Form.Label>
                    <div className="input-group mb-3">
                      <Form.Control
                        id="wd-available-until"
                        type="datetime-local"
                        value={`${assignment.availableUntil}`}
                        onChange={(e) =>
                          setAssignment({
                            ...assignment,
                            availableUntil: e.target.value,
                          })
                        }
                        required
                        readOnly={currentUser.role !== "FACULTY"}
                      />
                    </div>
                  </div>
                  </Form.Group>

                </div>
              </div>
            </div>
          </Col>
        </Row>

        </Form.Group>

        <hr />
        {currentUser.role === "FACULTY" && (
          <Row className="row mb-3d-flex justify-content-between float-end">
            <div>
              <Link to={`/Kambaz/Courses/${cid}/Assignments`}>
                <Button
                  id="wd-edit-assignment-cancel"
                  variant="secondary"
                  type="button"
                  className="me-2"
                >
                  Cancel
                </Button>
              </Link>
              <Button
                id="wd-edit-assignment-save"
                variant="danger"
                type="submit"
              >
                Save
              </Button>
            </div>
          </Row>
        )}
      </Form>
    </div>

  );
}


