import axios from "axios";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const ENROLLMENTS_API = `${REMOTE_SERVER}/api/enrollments`;
console.log("REMOTE_SERVER:", REMOTE_SERVER);
console.log("ENROLLMENTS_API:", ENROLLMENTS_API);

export const retrieveEnrollments = async () => {
    const response = await axios.get(`${ENROLLMENTS_API}`);
    return response.data;
};

export const unenroll = async (userId: string, courseId: string) => {
    try {
      const response = await axios.delete(`${REMOTE_SERVER}/api/users/${userId}/courses/${courseId}`);
      return response.data;
    } catch (error) {
      console.error("Error unenrolling from course:", error);
      throw error;
    }
  };

export const enroll = async (userId: string, courseId: string) => {
    try {
      const response = await axios.post(`${REMOTE_SERVER}/api/users/${userId}/courses/${courseId}`, {});
      return response.data;
    } catch (error) {
      console.error("Error enrolling in course:", error);
      throw error;
    }
  };

export const getUsersForCourse = async (courseId : any) => {
    const response = await axios.get(`${REMOTE_SERVER}/api/courses/${courseId}/users`);
    return response.data;
};