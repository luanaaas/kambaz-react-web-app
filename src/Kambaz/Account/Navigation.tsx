import { ListGroup } from "react-bootstrap";
import { Link } from "react-router";

export default function AccountNavigation() {
    return (
        <ListGroup id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
            <ListGroup.Item as={Link} to="/Kambaz/Account/Signin"
                className="list-group-item active border border-0" >Signin</ListGroup.Item>
            <br />
            <ListGroup.Item as={Link} to="/Kambaz/Account/Signup"
                className="list-group-item text-danger border border-0">Signup</ListGroup.Item>
            <br />
            <ListGroup.Item as={Link} to="/Kambaz/Account/Profile"
                className="list-group-item text-danger border border-0">Profile</ListGroup.Item>
        </ListGroup>
    );

    
}
