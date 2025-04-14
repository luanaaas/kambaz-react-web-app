import { Link, useLocation } from "react-router";
import { useSelector } from "react-redux";


export default function AccountNavigation() {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { pathname } = useLocation();
    const active = (path: string) => (pathname.includes(path) ? "active" : "");

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

            {currentUser && currentUser.role === "ADMIN" && (
       <Link to={`/Kambaz/Account/Users`} className={`list-group-item ${active("Users")}`}> Users </Link> )}

            

        </div>
    );
}