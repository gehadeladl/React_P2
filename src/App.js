import React , { Component } from 'react'
import './App.css'
import CourseForm from './component/CourseFrom/index'
import CourseList from './component/Courselist/index'
class App extends Component{
  state = {
    courses : [
      {name: "Html"},
      {name: "css"},
      {name: "java"}
    ] ,
    current : ''
  }
  updateCourse = (e) => {
    this.setState({
      current : e.target.value
    })
  }
  addCourse = (e) => {
    e.preventDefault();
    let current = this.state.current ;
    let courses = this.state.courses ;
    courses.push({ name : current})
    this.setState({
      courses,
      current : ""
    })
  }
  deleteCourse = (index) =>{
    let courses = this.state.courses ;
    courses.splice(index , 1) 
    this.setState({courses})
  }
  editCourse = (index , value) => {
    let courses = this.state.courses ;
    let course = courses[index];
    course['name'] = value ;
    this.setState({
      courses
    })
  }
  render(){
    const {courses} = this.state ; 
    const courseList = courses.map( (course , index) => {
      return <CourseList details={course} key={index} index={index} deleteCourse={this.deleteCourse} editCourse={this.editCourse}/>
    })
    
    return(
      <div className="App">
        <h2>Add Course</h2>
           
        <CourseForm updateCourse={this.updateCourse} addCourse={this.addCourse} current={this.state.current}/>
        <ul>
          {courseList}
        </ul>
      </div>
    )
  }
}

export default App;
