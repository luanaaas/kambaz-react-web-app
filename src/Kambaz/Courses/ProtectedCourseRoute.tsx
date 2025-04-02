import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { useParams } from "react-router";
import { retrieveEnrollments } from "../enrollmentsClient";
import { setEnrollments } from "../reducer";
import { useEffect, useState } from "react";


export default function ProtectedCourseRoute({ children }: { children: JSX.Element }) {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { cid } = useParams();
    const dispatch = useDispatch();

    const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        const fetchEnrollments = async () => {
            try {
                const enrollments = await retrieveEnrollments();
                dispatch(setEnrollments(enrollments));
            } catch (error) {
                console.error(error);
            } finally {
                setChecked(true);
            }
        };
        fetchEnrollments();
    }, [dispatch]);

    const isEnrolled = enrollments.some(
        (enrollment: any) => enrollment.user === currentUser._id && enrollment.course === cid
    );

    if (!checked) {
        return null;
    }

    if (!isEnrolled) {
        return <Navigate to="/Kambaz/Dashboard" />;
    }

    return children;
}

// import { useSelector } from "react-redux";
// import { Navigate } from "react-router-dom";
// import { useParams } from "react-router";
// export default function ProtectedRouteCourses({ children }: { children: JSX.Element }) {
//     const { currentUser } = useSelector((state: any) => state.accountReducer);
//     const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
//     const { cid } = useParams();
//     const isEnrolled = enrollments.some(
//         (enrollment: any) => enrollment.user === currentUser._id && enrollment.course === cid
//     );
//     if (!isEnrolled) {
//         return <Navigate to="/Kambaz/Dashboard" />;
//     }
//     return children;
// }
