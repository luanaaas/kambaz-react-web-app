import PeopleTable from "./Table";
import { findUsersForCourse } from "../client";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function People() {
    const { cid } = useParams();
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null); 

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                if (!cid) {
                    console.warn("No course ID available");
                    setLoading(false);
                    return;
                }
                
                console.log("Fetching users for course:", cid);
                const courseUsers = await findUsersForCourse(cid);
                setUsers(courseUsers);
            } catch (err) {
                console.error("Error fetching users for course:", err);
                setError("Failed to load users for this course");
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, [cid]);

    if (loading) {
        return <div>Loading users...</div>;
    }

    if (error) {
        return <div className="alert alert-danger">{error}</div>;
    }
    return (
        <div>
            <h1>People</h1>
            <PeopleTable users={users}/>
        </div>

    );
}