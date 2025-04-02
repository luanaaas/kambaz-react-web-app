import axios from "axios";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const ENROLLMENTS_API = `${REMOTE_SERVER}/api/enrollments`;
console.log("REMOTE_SERVER:", REMOTE_SERVER);
console.log("ENROLLMENTS_API:", ENROLLMENTS_API);

export const retrieveEnrollments = async () => {
    const response = await axios.get(`${ENROLLMENTS_API}`);
    return response.data;
};

export const unenroll = async (userId : any, courseId : any) => {
    const response = await axios.delete(`${ENROLLMENTS_API}/${userId}/${courseId}`);
    return response.data;
};

export const enroll = async (userId : any, courseId : any) => {
    const response = await axios.post(`${ENROLLMENTS_API}/${userId}/${courseId}`);
    return response.data;
};