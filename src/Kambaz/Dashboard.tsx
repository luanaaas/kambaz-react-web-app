import { Button, Card, Col, FormControl, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { unenroll, enroll, setEnrollments } from "./reducer";
import { setCoursesReducer } from "./Courses/reducer"
import { v4 as uuidv4 } from 'uuid';
import * as courseClient from "./Courses/client";
import * as userClient from "./Account/client";
import * as enrollmentsClient from "./enrollmentsClient"


export default function Dashboard() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [courses, setCourses] = useState<any[]>([]);

  const fetchCourses = async () => {
    try {
      if (showAll) {
        const courses = await userClient.allCourses();
        setCourses(courses);
        dispatch(setCoursesReducer(courses))
      } else {
        const courses = await userClient.findMyCourses();
        setCourses(courses);
        dispatch(setCoursesReducer(courses))
      }

    } catch (error) {
      console.error(error);
    }
  };
    
    useEffect(() => {
      fetchCourses();
    }, [currentUser])

  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);

  const fetchEnrollments = async () => {
    try {
      const enrollments = await enrollmentsClient.retrieveEnrollments();
      dispatch(setEnrollments(enrollments))
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchEnrollments();
  }, []);

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

  useEffect(() => {
    fetchCourses();
  }, [showAll]);

  const dispatch = useDispatch();

  const addNewCourse = async () => {
    const newCourse = await userClient.createCourse(course);
    setCourses([...courses, newCourse]);
  };

  const deleteCourse = async (courseId: string) => {
    await courseClient.deleteCourse(courseId);
    setCourses(courses.filter((course) => course._id !== courseId));
  };

  const updateCourse = async () => {
    await courseClient.updateCourse(course);
    setCourses(courses.map((c) => {
      if (c._id === course._id) { return course; }
      else { return c; }
    }));
  };

  const enrollCourse = async (user : any, course : any) => {
    await enrollmentsClient.enroll(user._id, course._id);
    dispatch(enroll({user, course}))
  };

  const unenrollCourse = async (user : any, course : any) => {
    await enrollmentsClient.unenroll(user._id, course._id);
    dispatch(unenroll({user, course}))
    fetchCourses();
  };

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
                addNewCourse()
                enrollCourse(currentUser, updatedCourse);
              }}>Add New Course</Button>

            <Button variant="success" className="float-end me-2"
                onClick={() => updateCourse()}>
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

      <h2 id="wd-dashboard-published"> Published Courses ({courses.length})
      </h2>

      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {courses.map((course: any) => (
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
                            deleteCourse(course._id);
                          }} 
                            className="float-end">
                            Delete
                          </Button>
                          <Button onClick={(e) => {
                              e.preventDefault();
                              setCourse(course)
                            }} variant="warning" className="float-end me-2">Edit</Button>
                            
                        </>}

                      {currentUser.role !== "FACULTY" && (
                        enrollments.some((enrollment: any) => enrollment.user === currentUser._id && enrollment.course === course._id) ?
                          <Button variant="danger" className="me-2 float-end"
                            onClick={(e) => {
                            e.preventDefault();
                            unenrollCourse(currentUser, course);
                          }}>Unenroll</Button>
                          :
                          <Button variant="success" className="me-2 float-end"
                            onClick={(e) => {
                            e.preventDefault();
                            enrollCourse(currentUser, course);
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











