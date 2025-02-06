import { Container, ListGroup, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

export default function CourseNavigation() {
  return (

      <div>
      <Navbar expand="lg" className="bg-transparent m-3">

        <Container fluid>
        
         <Navbar.Toggle aria-controls="wd-courses-navigation">
          <GiHamburgerMenu className="fs-2 text-danger" />
        </Navbar.Toggle>

           <Navbar.Collapse id="wd-courses-navigation" className="z-1">

            <Nav id="wd-courses-navigation" className="wd list-group fs-5 rounded-0 flex-column">


              <Nav.Link as={Link} to="/Kambaz/Courses/1234/Home" id="wd-course-home-link"
                className="list-group-item active border border-0"> Home </Nav.Link>
              <Nav.Link as={Link} to="/Kambaz/Courses/1234/Modules" id="wd-course-modules-link"
                className="list-group-item text-danger border border-0"> Modules </Nav.Link>
              <Nav.Link as={Link} to="/Kambaz/Courses/1234/Piazza" id="wd-course-piazza-link"
                className="list-group-item text-danger border border-0"> Piazza </Nav.Link>
              <Nav.Link as={Link} to="/Kambaz/Courses/1234/Zoom" id="wd-course-zoom-link"
                className="list-group-item text-danger border border-0"> Zoom </Nav.Link>
              <Nav.Link as={Link} to="/Kambaz/Courses/1234/Assignments" id="istGroup.Item-course-quizzes-link"
                className="list-group-item text-danger border border-0"> Assignments </Nav.Link>
              <Nav.Link as={Link} to="/Kambaz/Courses/1234/Quizzes" id="wd-course-assignments-link"
                className="list-group-item text-danger border border-0"> Quizzes </Nav.Link>
              <Nav.Link as={Link} to="/Kambaz/Courses/1234/People" id="wd-course-people-link"
                className="list-group-item text-danger border border-0" > People </Nav.Link>



           </Nav>
         </Navbar.Collapse>
        </Container>
       </Navbar>

       </div>


);}




// export default function CourseNavigation() {
//   return (
//     <ListGroup id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
//       <ListGroup.Item as={Link} to="/Kambaz/Courses/1234/Home" id="wd-course-home-link"
//         className="list-group-item active border border-0"> Home </ListGroup.Item>
//       <ListGroup.Item as={Link} to="/Kambaz/Courses/1234/Modules" id="wd-course-modules-link"
//         className="list-group-item text-danger border border-0"> Modules </ListGroup.Item>
//       <ListGroup.Item as={Link} to="/Kambaz/Courses/1234/Piazza" id="wd-course-piazza-link"
//         className="list-group-item text-danger border border-0"> Piazza </ListGroup.Item>
//       <ListGroup.Item as={Link} to="/Kambaz/Courses/1234/Zoom" id="wd-course-zoom-link"
//         className="list-group-item text-danger border border-0"> Zoom </ListGroup.Item>
//       <ListGroup.Item as={Link} to="/Kambaz/Courses/1234/Assignments" id="istGroup.Item-course-quizzes-link"
//         className="list-group-item text-danger border border-0"> Assignments </ListGroup.Item>
//       <ListGroup.Item as={Link} to="/Kambaz/Courses/1234/Quizzes" id="wd-course-assignments-link"
//         className="list-group-item text-danger border border-0"> Quizzes </ListGroup.Item>
//       <ListGroup.Item as={Link} to="/Kambaz/Courses/1234/People" id="wd-course-people-link"
//         className="list-group-item text-danger border border-0" > People </ListGroup.Item>
//     </ListGroup>
// );}



