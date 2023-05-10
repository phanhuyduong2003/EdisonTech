import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCourse, addStudent, removeStudent } from "./store/manage";

export default function Manage() {
  const [inputValue, setInputValue] = useState("");
  const [inputCourse, setInputCourse] = useState([]);
  const dispatch = useDispatch();
  const studentList = useSelector((state) => state.manage.students);
  const handleNameChange = (event) => {
    const { value } = event.target;
    setInputValue(value);
  };
  const handleCourseChange = (event, studentID) => {
    const { value } = event.target;
    setInputCourse((prevValue) => {
      const newInput = [...prevValue];
      newInput[studentID] = value;
      return newInput;
    });
  };
  const handleAddStudent = (event) => {
    event.preventDefault();
    const input = inputValue.trim();
    if (input) {
      dispatch(addStudent(input));
      setInputValue("");
    }
  };
  const handleRemoveStudent = (id) => {
    dispatch(removeStudent(id));
  };
  const handleAddCourse = (event, studentID) => {
    event.preventDefault();
    const input = inputCourse[studentID].trim();
    if (input) {
      dispatch(addCourse({ id: studentID, course: input }));
      setInputCourse((prevValue) => {
        const newInput = [...prevValue];
        newInput[studentID] = "";
        return newInput;
      });
    }
  };
  return (
    <div style={{ width: 500 }}>
      <form action="" onSubmit={handleAddStudent}>
        <label htmlFor="name">Name</label>
        <input type="text" value={inputValue} onChange={handleNameChange} />
        <button onClick={handleAddStudent}>Add</button>
      </form>
      <ul>
        {studentList &&
          studentList.map((student) => {
            return (
              <li
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  padding: "5px 0",
                  margin: '10px 0',
                  border: "1px solid black",
                }}
                key={student.id}
              >
                {/* <span>Dương</span> */}
                <span>{student.name}</span>
                <div style={{border: '1px solid black', borderWidth: '0px 1px', padding: '0 5px'}}>
                  <form
                    onSubmit={(event) => handleAddCourse(event, student.id)}
                  >
                    <label htmlFor="course">Course</label>
                    <input
                      type="text"
                      name="course"
                      value={inputCourse[student.id]}
                      onChange={(event) =>
                        handleCourseChange(event, student.id)
                      }
                    />
                    <button
                      onClick={(event) => handleAddCourse(event, student.id)}
                    >
                      Add
                    </button>
                  </form>
                  <ul style={{padding: '5px 0', listStyleType: 'none'}}>
                    {student.courses &&
                      student.courses.map((course, index) => {
                        return (
                          <div>
                            <li key={`${course}_${index}`} style={{padding: '5px 0'}}>
                              <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <span>{course.name}</span>
                                <button>Delete</button>
                              </div>
                            </li>
                          </div>
                        );
                      })}
                  </ul>
                </div>
                <button onClick={() => handleRemoveStudent(student.id)}>
                  Delete
                </button>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
