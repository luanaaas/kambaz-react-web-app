import { Button, Card, Col, FormControl, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { unenroll, enroll } from "./reducer";
import { addNewCourse, deleteCourse, updateCourse } from "./Courses/reducer"
import { v4 as uuidv4 } from 'uuid';

export default function Dashboard() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
  const { courses } = useSelector((state: any) => state.coursesReducer);

  const newCourse = {
    _id: uuidv4(),
    name: "New course",
    number: "New number",
    startDate: "2024-01-01",
    endDate: "2024-02-01",
    department: "New department",
    credits: "4",
    description: "New description",
    image: "images/reactjs.jpg"
  };

  const [course, setCourse] = useState(newCourse);
  const [showAll, setShowAll] = useState(false);
  const dispatch = useDispatch();

  return (
    <div id="wd-dashboard">

      <h1 id="wd-dashboard-title">Dashboard {currentUser.firstName}
        {currentUser.role !== "FACULTY" &&
        <Button className="float-end" onClick={() => setShowAll(!showAll)}>Enrollments</Button>}
      </h1>

      <hr />
      {currentUser.role === "FACULTY" && (
        <>
           <h3>Course Editor</h3>
        
            <Button className="float-end mb-2" onClick={() => {
                const updatedCourse = { ...course, _id: uuidv4(), image: "images/reactjs.jpg" }
                setCourse(updatedCourse)
                dispatch(addNewCourse({ course: updatedCourse }))
                dispatch(enroll({ user: currentUser, course: updatedCourse }))
              }}>Add New Course</Button>

            <Button variant="success" className="float-end me-2"
              onClick={() => dispatch(updateCourse({ course }))}>
              Update Course
            </Button>
          
          
          <br />
          <FormControl onChange={(e) => setCourse({ ...course, name: e.target.value })}
            value={course.name}
          />
          <FormControl onChange={(e) => setCourse({ ...course, description: e.target.value })}
            value={course.description}
          />
          <hr />
        </>
      )}

      <h2 id="wd-dashboard-published"> Published Courses ({
          showAll
            ? courses.length
            : courses.filter((course: any) =>
              enrollments.some(
                (enrollment: any) =>
                  enrollment.user === currentUser._id &&
                  enrollment.course === course._id
              )
            ).length
        })
      </h2>

      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {courses.filter((course: any) =>
            showAll || enrollments.some(
              (enrollment: any) =>
                enrollment.user === currentUser._id &&
                enrollment.course === course._id
            ))

            .map((course: any) => (
              <Col className="wd-dashboard-course" style={{ width: "300px" }} key={course._id}>
                <Card>
                  <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                        to={`/Kambaz/Courses/${course._id}/Home`}
                        >
                    <Card.Img variant="top" src={course.image} width="100%" height={160} />
                    <Card.Body>
                      <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">{course.name}</Card.Title>
                      <Card.Text  className="wd-dashboard-course-description overflow-hidden"
                              style={{height: "100px"}}
                      >{course.description}</Card.Text>
                      <Button variant="primary">Go</Button>

                      {currentUser.role === "FACULTY" && <>
                          <Button variant="danger" onClick={(e) => {
                            e.preventDefault();
                            dispatch(deleteCourse({ courseId: course._id }));
                          }} 
                            className="float-end">
                            Delete
                          </Button>
                          <Button onClick={(e) => {
                              e.preventDefault();
                              setCourse(course);
                            }} variant="warning" className="float-end me-2">Edit</Button>
                            
                        </>}

                      {currentUser.role !== "FACULTY" && (
                        enrollments.some((enrollment: any) => enrollment.user === currentUser._id && enrollment.course === course._id) ?
                          <Button variant="danger" className="me-2 float-end"
                            onClick={(e) => {
                            e.preventDefault();
                            dispatch(unenroll({ user: currentUser, course: course }))
                          }}>Unenroll</Button>
                          :
                          <Button variant="success" className="me-2 float-end"
                            onClick={(e) => {
                            e.preventDefault();
                            dispatch(enroll({ user: currentUser, course: course }))
                          }}>Enroll</Button>
                      )}
                    </Card.Body>

                  </Link>
                </Card>
              </Col>
            ))}
        </Row>
      </div>
    </div>
  );
}





