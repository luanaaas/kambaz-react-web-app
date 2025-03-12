import { Link, useLocation } from "react-router";
import { useSelector } from "react-redux";


export default function AccountNavigation() {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { pathname } = useLocation();
    const links = currentUser
        ? [{ label: "Profile", path: "/Kambaz/Account/Profile" }]
        : [
            { label: "Sign in", path: "/Kambaz/Account/Signin" },
            { label: "Sign up", path: "/Kambaz/Account/Signup" },
        ];
    return (
        <div id="wd-account-navigation">
            {links.map((link) => (
                <Link to={link.path}
                key={link.label}
                    id={`wd-account-${link.label}`}
                    className={`fs-5 d-block mb-2 ps-1 me-3 ${pathname.includes(link.label) ? "active wd-black-text" : "text-danger"}`}> {link.label} </Link>
            ))}
        </div>
    );
}
//     return (
//         <ListGroup id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
//             {!currentUser && (<>
//             <ListGroup.Item as={Link} to="/Kambaz/Account/Signin"
//                 className="list-group-item active border border-0" >Signin</ListGroup.Item>
//             <br />
//             <ListGroup.Item as={Link} to="/Kambaz/Account/Signup"
//                 className="list-group-item text-danger border border-0">Signup</ListGroup.Item>
//             <br />
//             </>)}
//             {currentUser && <ListGroup.Item as={Link} to="/Kambaz/Account/Profile"
//                 className="list-group-item text-danger border border-0">Profile</ListGroup.Item>}
//         </ListGroup>
//     );

    
// }
