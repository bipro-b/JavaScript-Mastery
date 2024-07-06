import React, { useEffect, useState } from 'react';
import Course from './Course';

const Courses = () => {

    const [courses,SetCourses] = useState([]);
    useEffect(()=>{
        fetch("https://l-tech-server.onrender.com/courses")
        .then((res)=>res.json())
        .then((data)=>{
            SetCourses(data);
        })
    },[])

    console.log(courses);
    //props
    return (
        <div>
            <h1>Course Loading</h1>

            {
                courses.map((course)=> <Course course={course} ></Course>)
            }
        </div>
    );
};

export default Courses;