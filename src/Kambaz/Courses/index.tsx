import { Navigate, Route, Routes } from "react-router";
import Home from "./Home";
import Modules from "./Modules";
import CoursesNavigation from "./Navigation";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import { GiHamburgerMenu } from "react-icons/gi";
import People from "./People";

export default function Courses() {
    return (
        <div id="wd-courses">

            <div className="d-flex align-items-center">
                <GiHamburgerMenu className="me-2 d-none d-lg-block fs-2 text-danger" /> 
                <h2 className="text-danger mb-0 flex-grow-1">Courses</h2>
            </div>
            
            <hr />
            <div className="d-flex">
                <div id="wd-courses-navigation" className="">
                        <CoursesNavigation />
                </div>
                <div className="flex-grow-1">    
                        <Routes> 
                            <Route path="/" element={<Navigate to="Home" />} />
                            <Route path="Home" element={<Home />} />
                            <Route path="Modules" element={<Modules />} />
                            <Route path="Piazza" element={<h1>Piazza</h1>} />
                            <Route path="Zoom" element={<h1>Zoom</h1>} />
                            <Route path="Assignments" element={<Assignments />} />
                            <Route path="Assignments/:aid" element={<AssignmentEditor />} />
                            <Route path="Quizzes" element={<h1>Quizzes</h1>} />
                            <Route path="People" element={<People />} />
                        </Routes>
                </div>
            </div>       
        </div>
    );
}