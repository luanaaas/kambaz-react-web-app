import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import db from "./Database";

export default function Dashboard() {
  const courses = db.courses;

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> {" "}<hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {courses.map((course) => (
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                    to={`/Kambaz/Courses/${course._id}/Home`}
                    >
                <Card.Img variant="top"  src={course.image} width="100%" height={160}/>
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">{course.name}</Card.Title>
                  <Card.Text  className="wd-dashboard-course-description overflow-hidden"
                              style={{height: "100px"}}
                  >{course.description}</Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>
        ))}

        </Row>
      </div>
    </div>

);}






// export default function Dashboard() {
//   return (
//     <div id="wd-dashboard">
//       <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
//       <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
//       <div id="wd-dashboard-courses">
//         <div className="wd-dashboard-course">
//           <img src="/images/reactjs.jpg" width={200} />
//           <div>
//             <Link className="wd-dashboard-course-link"
//                   to="/Kambaz/Courses/1234/Home"> CS1234 React JS </Link>
//             <p className="wd-dashboard-course-title">
//               Full Stack software developer </p>
//             <Link to="/Kambaz/Courses/1234/Home"> Go </Link>
//           </div>
//         </div>
//         <div className="wd-dashboard-course">
//           <img src="/images/reactjs.jpg" width={200} />
//           <div>
//             <Link className="wd-dashboard-course-link"
//                   to="/Kambaz/Courses/1234/Home"> CS1234 React JS </Link>
//             <p className="wd-dashboard-course-title">
//               Full Stack software developer </p>
//             <Link to="/Kambaz/Courses/1234/Home"> Go </Link>
//           </div>
//         </div>
//         <div className="wd-dashboard-course">
//           <img src="/images/reactjs.jpg" width={200} />
//           <div>
//             <Link className="wd-dashboard-course-link"
//                   to="/Kambaz/Courses/1234/Home"> CS1234 React JS </Link>
//             <p className="wd-dashboard-course-title">
//               Full Stack software developer </p>
//             <Link to="/Kambaz/Courses/1234/Home"> Go </Link>
//           </div>
//         </div>
//       </div>
//     </div>
// );}
