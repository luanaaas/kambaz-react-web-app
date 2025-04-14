
import Account from "./Account";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import { Navigate, Route, Routes } from "react-router";
import KambazNavigation from "./Navigation";
import "./styles.css";
import ProtectedRoute from "./Account/ProtectedRoute";
import Session from "./Account/Session";
// import * as courseClient from "./Courses/client";

// import * as userClient from "./Account/client";
// import { useState, useEffect } from "react";
// import { useSelector } from "react-redux";


export default function Kambaz() {
  
  
  // const [courses, setCourses] = useState<any[]>([]);
  // const { currentUser } = useSelector((state: any) => state.accountReducer);
  // const [course, setCourse] = useState<any>({
  //   _id: "0", name: "New Course", number: "New Number",
  //   startDate: "2023-09-10", endDate: "2023-12-15",
  //   image: "/images/reactjs.jpg", description: "New Description"
  // });
  // const fetchCourses = async () => {
  //   try {
  //     // const courses = await userClient.findMyCourses() as any[];
  //     const courses = await userClient.findMyCourses();
  //     setCourses(courses);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  
  // useEffect(() => {
  //   fetchCourses();
  // }, [currentUser])

  // // const fetchCourses = async () => {
  // //   try {
  // //   const courses = await client.fetchAllCourses();
  // //   setCourses(courses);
  // //   } catch (error) {
  // //   console.error(error);
  // //   }
  // //   };
  // //   useEffect(() => {
  // //   fetchCourses();

  // const addNewCourse = async () => {
  //   const newCourse = await userClient.createCourse(course);
  //   setCourses([ ...courses, newCourse ]);
  // };

  // const deleteCourse = async (courseId: string) => {
  //   await courseClient.deleteCourse(courseId);
  //   setCourses(courses.filter((course) => course._id !== courseId));
  // };

  // const updateCourse = async () => {
  //   await courseClient.updateCourse(course);
  //   setCourses(courses.map((c) => {
  //       if (c._id === course._id) { return course; }
  //       else { return c; }
  //   })
  // );};


      return (
      <Session>
        <div id="wd-kambaz">
          <KambazNavigation />
          <div className="wd-main-content-offset p-3">
            <Routes>
            <Route path="/" element={<Navigate to="Account" />} />
              <Route path="/Account/*" element={<Account />} />
              <Route path="/Dashboard" element={
                <ProtectedRoute>
                <Dashboard/>
                  </ProtectedRoute>} />
              <Route path="/Courses/:cid/*" element={
                <ProtectedRoute><Courses/></ProtectedRoute>} />
              <Route path="/Calendar" element={<h1>Calendar</h1>} />
              <Route path="/Inbox" element={<h1>Inbox</h1>} />
            </Routes>
          </div>
        </div> 
      </Session>
    );

}
  
