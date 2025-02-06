import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";

export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h1>Profile</h1>

      <Form.Control id="wd-username"
             placeholder="alice"
             className="mb-2"/>
      <Form.Control id="wd-password"
             placeholder="123" type="password"
             className="mb-2"/>
      <Form.Control id="wd-firstname"
             placeholder="Alice"
             className="mb-2"/>
      <Form.Control id="wd-lastname"
             placeholder="Wonderland"
             className="mb-2"/>
       <Form.Control id="wd-lastname"
             type="date"
             className="mb-2"/>
      <Form.Control id="wd-lastname"
             type="email"
             placeholder="alice@wonderland.com"
             className="mb-2"/>

      <Form.Select defaultValue="USER" id="wd-role" className="mb-3">
              <option value="USER">User</option>
              <option value="ADMIN">Admin</option>
              <option value="FACULTY">Faculty</option>
              <option value="STUDENT">Student</option>
      </Form.Select>

      <Link to="/Kambaz/Account/Signin" className="btn btn-danger w-100 mb-3">
              Sign Out
      </Link>

    </div>
);}
