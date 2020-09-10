import React, { Component } from 'react';
import CourseForm from './Component/CourseForm/CourseForm';
import ItemList from './Component/ItemList/ItemList';


class App extends Component {

  state = {
    Items: [{ CourseName: "JavaScript",activeClass:"" },
    { CourseName: "c++",activeClass:"" },
    { CourseName: "HTML",activeClass:""}],
    tempCourseName: "",
  }

  //chaning the temp
  ChangeTempCourseName = (e) => {
    let value = e.target.value; //getting the value from text box and store it into variable
    this.setState({
      tempCourseName: value
    }) // changing the tempCourseName into the variable
  }


  // adding new items
  AddItem = (e) => {
    e.preventDefault();

    if (this.state.tempCourseName !== "") {
      let value = this.state.tempCourseName; //getting the tempcourseName
      let NewList = this.state.Items; // creating an obj from obj we have 
      NewList.unshift({ CourseName: value, activeClass:"" }); //push the TempCouseName
      this.setState({
        Items: NewList,
        tempCourseName: ""
      }) //update state with the new object that we have created
    }
  }

  //delete items 

  Delete = (index) => {
    let value = [...this.state.Items];
    value.splice(index, 1);
    this.setState({
      Items: value
    })
  }

  //editItem 

  EditItems = (eValue, index) => {
    let ModifiedCourses = this.state.Items;
    let course = ModifiedCourses[index];
    course["CourseName"] = eValue;
    this.setState({
      Items: ModifiedCourses
    })
  }

  //shift Items 
  shiftItems = (index) => { 
    let Items = this.state.Items;
    let Item = Items[index];
    let activeClass =Item.activeClass;
    activeClass = activeClass==="active" ? Item.activeClass="" : Item.activeClass="active";
    Items.splice(index,1);
    Items.push(Item);
    this.setState({ 
      Items
    })
    console.log(Items);

  }

  



//rendering

  render() {

    let Items = this.state.Items;
    let listItems = this.state.Items.map((Course, index) => {
      console.log(Course.activeClass)
      return (
        <ItemList Course={Course.CourseName} activeClass={Course.activeClass}
         key={index} Delete={this.Delete} ElmIndex={index} EditItems={this.EditItems} shiftItems={this.shiftItems} 
         />
      )
    })


    return (
      <div className="App">
        <h2 > <span>Today</span> </h2>
        <CourseForm Items = {this.state.Items}ChangeTempCourseName={this.ChangeTempCourseName} AddItem={this.AddItem} value={this.state.tempCourseName} />
        <div className="ItemList">
          <ul>
              {listItems}
          </ul>
        </div>
      </div>
    )
  }

}

export default App;
