import { createSlice } from "@reduxjs/toolkit";

const manageSlice = createSlice({
  name: "manage",
  initialState: {
    students: [],
  },
  reducers: {
    addStudent: (state, action) => {
      console.log("state", state.students);
      console.log("action", action);
      const newStudent = {
        id: state.students.length + 1,
        name: action.payload,
        courses: [],
      };
      state.students.push(newStudent);
    },
    removeStudent: (state, action) => {
      state.students = state.students.filter(
        (student) => student.id !== action.payload
      );
    },
    addCourse: (state, action) => {
      console.log("state", state.courses);
      console.log("action", action);
      state.students = state.students.map((student) => {
        if (student.id === action.payload.id) {
          const newCourse = {
            id: student.courses.length + 1,
            name: action.payload.course,
          };
          student.courses.push(newCourse);
        }
        return student;
      });
    },
    removeCourse: (state, action) => {
      state.students = state.students.map((student) => {
        if (student.id === action.payload.id) {
          student.courses = student.courses.filter((course) => {
            return course.id !== action.payload.courseID;
          });
        }
        return student;
      });
    },
  },
});
const manageReducer = manageSlice.reducer;
export const { addStudent, removeStudent, addCourse, removeCourse } =
  manageSlice.actions;
export default manageReducer;
