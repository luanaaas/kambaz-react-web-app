
import { Navigate, Route, Routes, useParams, useLocation } from "react-router";
import Home from "./Home";
import Modules from "./Modules";
import CourseNavigation from "./Navigation";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import { GiHamburgerMenu } from "react-icons/gi";
import People from "./People";
import ProtectedRouteCourses from "./ProtectedCourseRoute";
import { useSelector } from "react-redux";

export default function Courses() {
  const { cid } = useParams();
  const { pathname } = useLocation();
  const { courses } = useSelector((state: any) => state.coursesReducer);
  const course = courses.find((c: any) => c._id === cid);

  return (
    <div id="wd-courses">
        
        <div className="d-flex align-items-center">
                 <GiHamburgerMenu className="me-2 d-none d-lg-block fs-2 text-danger" /> 
                 <h2 className="text-danger mb-0 flex-grow-1">{course?.name} &gt; {pathname.split("/")[4]}</h2>
                 {/* {course && course.name} */}
        </div>
         <hr />

      <div className="d-flex">
      <div id="wd-courses-navigation" className="">
                         <CourseNavigation />
                 </div>
        
        <div className="flex-grow-1">
          <Routes>
            <Route path="/" element={<ProtectedRouteCourses><Navigate to="Home" /></ProtectedRouteCourses>} />
            <Route path="Home" element={<ProtectedRouteCourses><Home /></ProtectedRouteCourses>} />
            <Route path="Modules" element={<ProtectedRouteCourses><Modules /></ProtectedRouteCourses>} />
            <Route path="Piazza" element={<ProtectedRouteCourses><h2>Piazza</h2></ProtectedRouteCourses>} />
            <Route path="Zoom" element={<ProtectedRouteCourses><h2>Zoom</h2></ProtectedRouteCourses>} />
            <Route path="Assignments" element={<ProtectedRouteCourses><Assignments /></ProtectedRouteCourses>} />
            <Route path="Assignments/:aid" element={<ProtectedRouteCourses><AssignmentEditor /></ProtectedRouteCourses>} />
            <Route path="Quizzes" element={<ProtectedRouteCourses><h2>Quizzes</h2></ProtectedRouteCourses>} />
            <Route path="Grades" element={<ProtectedRouteCourses><h2>Grades</h2></ProtectedRouteCourses>} />
            <Route path="People" element={<ProtectedRouteCourses><People /></ProtectedRouteCourses>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
