import Modules from "../Modules";
import CourseStatus from "./Status";

export default function Home() {
    return (
        <div>
            <table id="wd-home">
                <tr>
                    <td valign="top">
                        <Modules />
                    </td>
                    <td valign="top">
                        {" "}
                         <CourseStatus />
                    </td>
                </tr>
            </table>
        </div>
    );
}