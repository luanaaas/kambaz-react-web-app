import { ListGroup } from "react-bootstrap";
import { Link } from "react-router";
import { useSelector } from "react-redux";


export default function AccountNavigation() {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
    return (
        <ListGroup id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
            {!currentUser && (<>
            <ListGroup.Item as={Link} to="/Kambaz/Account/Signin"
                className="list-group-item active border border-0" >Signin</ListGroup.Item>
            <br />
            <ListGroup.Item as={Link} to="/Kambaz/Account/Signup"
                className="list-group-item text-danger border border-0">Signup</ListGroup.Item>
            <br />
            </>)}
            {currentUser && <ListGroup.Item as={Link} to="/Kambaz/Account/Profile"
                className="list-group-item text-danger border border-0">Profile</ListGroup.Item>}
        </ListGroup>
    );

    
}
