// import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { Container, Nav, Navbar } from "react-bootstrap";


export default function KambazNavigation() {
 return (
  <Navbar id="wd-kam-nav" expand="lg" className="bg-transparent">

        <Container fluid>
        <Navbar.Brand className="text-danger" as={Link} to="/Kambaz/Courses/1234/Home">Kambaz</Navbar.Brand>
        <Navbar.Toggle/>

        <Navbar.Collapse id="wd-kambaz-navigation" className="list-group rounded-0 position-fixed bottom-0 top-0 bg-black z-2">

          <Nav className="flex-column">

            <Nav.Link id="wd-neu-link" target="_blank" 
              href="https://www.northeastern.edu/"
              className="list-group-item bg-black border-0 text-center">
              <img src="/images/NEU.png" width="75px" /></Nav.Link>
            
            <Nav.Link as={Link} to="/Kambaz/Account" id="wd-account-link"
              className="list-group-item text-center border-0 bg-black text-white">
              <FaRegCircleUser className="fs-1 text text-white" /><br />
              Account </Nav.Link>
            
            <Nav.Link as={Link} to="/Kambaz/Dashboard" id="wd-dashboard-link"
              className="list-group-item text-center border-0
                          bg-white text-danger">
              <AiOutlineDashboard className="fs-1 text-danger" /><br />
              Dashboard </Nav.Link>
          
            <Nav.Link as={Link} to="/Kambaz/Courses/:cid/" id="wd-course-link"
              className="list-group-item text-white
                          bg-black text-center border-0">
              <LiaBookSolid className="fs-1 text-danger" /><br />
              Courses </Nav.Link>
            
            <Nav.Link as={Link} to="/Kambaz/Calendar" id="wd-calendar-link"
              className="list-group-item text-white
                          bg-black text-center border-0">
              <IoCalendarOutline className="fs-1 text-danger" /><br />
              Calendar </Nav.Link>

            <Nav.Link as={Link} to="/Kambaz/Inbox" id="wd-inbox-link"
              className="list-group-item text-white
                          bg-black text-center border-0">
              <FaInbox className="fs-1 text-danger" /><br />
              Inbox </Nav.Link>

            <Nav.Link as={Link} to="/Labs" id="wd-labs-link"
              className="list-group-item text-white
                          bg-black text-center border-0">
              <LiaCogSolid className="fs-1 text-danger" /><br />
              Labs </Nav.Link>

          </Nav>
       </Navbar.Collapse>
       </Container>
       </Navbar>


);}

// export default function KambazNavigation() {
//   return (
 
//          <ListGroup id="wd-kambaz-navigation" style={{ width: 120 }} 
//          className="list-group rounded-0 position-fixed
//          bottom-0 top-0 d-none d-md-block bg-black z-2">
 
//            <ListGroup.Item id="wd-neu-link" target="_blank" 
//              href="https://www.northeastern.edu/"
//              className="list-group-item bg-black border-0 text-center">
//              <img src="public/images/NEU.png" width="75px" /></ListGroup.Item>
           
//            <ListGroup.Item as={Link} to="/Kambaz/Account" id="wd-account-link"
//              className="list-group-item text-center border-0 bg-black text-white">
//              <FaRegCircleUser className="fs-1 text text-white" /><br />
//              Account </ListGroup.Item>
           
//            <ListGroup.Item as={Link} to="/Kambaz/Dashboard" id="wd-dashboard-link"
//              className="list-group-item text-center border-0
//                          bg-white text-danger">
//              <AiOutlineDashboard className="fs-1 text-danger" /><br />
//              Dashboard </ListGroup.Item>
         
//            <ListGroup.Item as={Link} to="/Kambaz/Courses/:cid/" id="wd-course-link"
//              className="list-group-item text-white
//                          bg-black text-center border-0">
//              <LiaBookSolid className="fs-1 text-danger" /><br />
//              Courses </ListGroup.Item>
           
//            <ListGroup.Item as={Link} to="/Kambaz/Calendar" id="wd-calendar-link"
//              className="list-group-item text-white
//                          bg-black text-center border-0">
//              <IoCalendarOutline className="fs-1 text-danger" /><br />
//              Calendar </ListGroup.Item>
 
//            <ListGroup.Item as={Link} to="/Kambaz/Inbox" id="wd-inbox-link"
//              className="list-group-item text-white
//                          bg-black text-center border-0">
//              <FaInbox className="fs-1 text-danger" /><br />
//              Inbox </ListGroup.Item>
 
//            <ListGroup.Item as={Link} to="/Labs" id="wd-labs-link"
//              className="list-group-item text-white
//                          bg-black text-center border-0">
//              <LiaCogSolid className="fs-1 text-danger" /><br />
//              Labs </ListGroup.Item>
 
//         </ListGroup>
 
 
//  );}
 
 