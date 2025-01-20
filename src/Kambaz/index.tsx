import Account from "./Account";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import { Navigate, Route, Routes } from "react-router";
import KambazNavigation from "./Navigation";


export default function Kambaz() {
    return (
        <div id="wd-kambaz">
            <table>
                <tr>
                    <td valign="top">
                        <KambazNavigation />
                    </td>
                    <td valign="top">
                        <Routes>
                            <Route path="/" element={<Navigate to="Account" />} />
                            <Route path="/Account/*" element={<Account />} />
                            <Route path="/Dashboard" element={<Dashboard />} />
                            <Route path="/Courses/:cid/*" element={<Courses />} />
                            <Route path="/Calendar" element={<h1>Calendar</h1>} />
                            <Route path="/Inbox" element={<h1>Inbox</h1>} />
                        </Routes>
                    </td>
                </tr>
            </table>
        </div>
    );
}