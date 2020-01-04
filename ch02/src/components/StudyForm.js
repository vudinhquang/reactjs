import React, { Component } from 'react';
import Search from './Search';
import Sort from './Sort';

class StudyForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fullname: '',
            course  : 'php'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        // const value = target.type === 'checkbox' ? target.checked : target.value;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    handleSubmit(event) {
        console.log(this.state);
        event.preventDefault();
    }

    render() {
        return (
            <div className="row">
                <div className="panel panel-info">
                    <div className="panel-heading">
                        <h3 className="panel-title">Study Form</h3>
                    </div>
                    <div className="panel-body">
                        <form onSubmit={this.handleSubmit}>
                            <legend>Form Register</legend>

                            <div className="form-group">
                                <label htmlFor>Họ tên</label>
                                <input name="fullname" value={this.state.fullname} onChange={this.handleChange} type="text" className="form-control" id placeholder="Fullname" />
                            </div>

                            <div className="form-group">
                                <label htmlFor>Khóa học</label>
                                <select value={this.state.course} onChange={this.handleChange} name="course" id="input" className="form-control" required="required">
                                    <option value="angular">Angular</option>
                                    <option value="react">React</option>
                                    <option value="nodejs">NodeJS</option>
                                    <option value="php">PHP</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor>Đối tượng</label>
                                <div className="radio">
                                    <label>
                                        <input value="old_student" type="radio" name="object"/>Học viên cũ
                                    </label>
                                </div>
                                <div className="radio">
                                    <label>
                                        <input value="student"  type="radio" name="object"/>Học sinh Sinh viên
                                    </label>
                                </div>
                                <div className="radio">
                                    <label>
                                        <input type="radio" name="object"/>Người khuyết tật
                                    </label>
                                </div>
                            </div>

                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default StudyForm;
