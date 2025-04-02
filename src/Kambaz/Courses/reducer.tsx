import { createSlice } from "@reduxjs/toolkit";
import db from "../Database";

const initialState = {
    courses: db.courses,
};
const coursesSlice = createSlice({
    name: "courses",
    initialState,
    reducers: {

        setCoursesReducer: (state, action) => {
            state.courses = action.payload;
          },

        addNewCourse: (state, { payload: { course }}) => {
            state.courses = [...state.courses, course] as any;
        },
        deleteCourse: (state, { payload : { courseId }}) => {
            state.courses = (state.courses.filter((course) => course._id !== courseId));
        },
        updateCourse: (state, { payload : { course }}) => {
            state.courses = state.courses.map((c) => {
                    if (c._id === course._id) {
                        return course;
                    } else {
                        return c;
                    }
                })
        }
    },
});

export const { addNewCourse, deleteCourse, updateCourse, setCoursesReducer } =
    coursesSlice.actions;
export default coursesSlice.reducer;
