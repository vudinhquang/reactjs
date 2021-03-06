import React, { Component } from 'react';

import FormAddTask from './FormAddTask';
import TaskDoingItem from './TaskDoingItem';
import { tasksRef } from './../firebase';

class TaskDoingList extends Component {
    constructor(props) {
		super(props);

		this.state = {
            items: []
		};
    }

    UNSAFE_componentWillMount(){
        tasksRef.on('value', items => {
            let data = [];
            items.forEach(item => {
                const {email, name} = item.val();
                data.push({email, name, key: item.key} );
            })

            this.setState({items: data});
        })
    }

    render() {
        let { items } = this.state;
        let {user} = this.props;
        return (                            
            <div className="panel panel-info">
                <div className="panel-heading">
                    <h3 className="panel-title">Task Doing</h3>
                </div>
                <div className="panel-body">
                    <ul className="list-group">
                        { this.showElementBody(items) }
                    </ul>
                </div>
                <div className="panel-footer text-right">
                    <FormAddTask user={ user } changeNotify={this.props.changeNotify} />
                </div>
            </div>
        );
    }

    showElementBody(items){
        let xhtml = null;
        if(items.length > 0 ){
            xhtml = items.map((item, index)=> {
                return (
                    <TaskDoingItem 
                        key={index } 
                        item={item} 
                        index={index} 
                        changeNotify={this.props.changeNotify} />
                );
            });
        }
        return <ul className="list-group">{xhtml}</ul>;
    }
}

export default TaskDoingList;
