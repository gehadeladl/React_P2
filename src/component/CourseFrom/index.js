import React , {Component} from 'react'
import './style.css'
class CourseForm extends Component{
    render(){
        return(
            <div>
                <form onSubmit={this.props.addCourse} className="row">
                    <input type="text" onChange={this.props.updateCourse} value={this.props.current} className="col-9"/>
                    <button type="submit" className="col-3">Add <span>Course</span></button>
                </form>
            </div>
        )
    }
}
export default CourseForm;