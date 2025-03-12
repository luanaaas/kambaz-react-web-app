
import { Link, useLocation } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { Container, Nav, Navbar } from "react-bootstrap";


export default function KambazNavigation() {
  const { pathname } = useLocation();
  const links = [
    { label: "Dashboard", path: "/Kambaz/Dashboard", icon: AiOutlineDashboard },
    { label: "Courses",   path: "/Kambaz/Dashboard", icon: LiaBookSolid },
    { label: "Calendar",  path: "/Kambaz/Calendar",  icon: IoCalendarOutline },
    { label: "Inbox",     path: "/Kambaz/Inbox",     icon: FaInbox },
    { label: "Labs",      path: "/Labs",             icon: LiaCogSolid },
  ];

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
              className={`text-center border-0 bg-black
                ${pathname.includes("Account") ? "bg-white text-danger" : "bg-black text-white"}`}>
              <FaRegCircleUser className={`fs-1 ${pathname.includes("Account") ? "text-danger" : "text-white"}`} />
              <br />
              Account
            </Nav.Link>

            {links.map((link) => (
              <Nav.Item key={link.path} as={Link} to={link.path} className={`bg-black text-center border-0
                    ${pathname.includes(link.label) ? "text-danger bg-white" : "text-white bg-black"}`}>
                {link.icon({ className: "fs-1 text-danger"})}
                <br />
                {link.label}
              </Nav.Item>
            ))}

          </Nav>
       </Navbar.Collapse>
       </Container>
       </Navbar>


);}


 
 