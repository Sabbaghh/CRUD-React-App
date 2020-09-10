import React from 'react';

const CourseForm = (props) => { 
    const {ChangeTempCourseName,AddItem,value} = props;
    return(
        <form onSubmit={AddItem} className="CourseForm">
            <input type ="text" onChange={ChangeTempCourseName} value={value} placeholder="What do you have for today?" />
            <button type="submit" > <span><i className="fas fa-angle-double-right"></i></span> </button>
        </form>
    )
}

export default CourseForm;