import React , {Component, Fragment} from 'react'
import './style.css'
class CourseList extends Component{
    state = {
        isEdit : false
    }
    renderCourse = () => {
        return(
            <li className="row">
                <span className="col-sm-6">{this.props.details.name}</span> 
                <button onClick={ () => {this.toggaleState()}} className="col-sm-3 edit text-center">Edit <span>Course</span></button> 
                <button onClick={ () => {this.props.deleteCourse(this.props.index)}} className="col-sm-3 text-center">Delete <span>Course</span></button>
            </li>
        )
    }
    toggaleState = () => {
        let {isEdit} = this.state ; 
        this.setState({
            isEdit : ! isEdit
        })
    }
    updateCourseItem = (e) =>{
        e.preventDefault();
        this.props.editCourse(this.props.index , this.input.value )
        this.toggaleState() ;
    }
    renserUpdateCourse = () => {
        return(
            <form onSubmit={this.updateCourseItem} className="row"> 
                <input type="text" ref={ (v) => {this.input = v }} defaultValue={this.props.details.name} className="col-sm-9"/>
                <button className="col-sm-3">Update <span>Course</span></button>
            </form>
        )
    }
    render(){
        let {isEdit} = this.state ;
        return(
            <Fragment>
                {isEdit ? this.renserUpdateCourse() : this.renderCourse()}
            </Fragment>
        )
    }
}
export default CourseList;