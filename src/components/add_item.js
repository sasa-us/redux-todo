import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link} from 'react-router-dom';
import { Field, reduxForm} from 'redux-form';
import { sentTodoItem } from '../actions';

class AddItem extends Component {

    async handleAddItem(values) {
        console.log('form values: ', values);
        await this.props.sentTodoItem(values);
        this.props.history.push('/');
    }

    renderInput(props) {
        console.log('renderInput props ', props); //{input: {…}, meta: {…}}
        //props.label    ...props.input  props.meta.touched && props.meta.error
        const {label, input, meta: {touched, error}} = props;

        return (
            <div className="col s8 offset-s2">
                <label>{label}</label>
                <input {...input} type="text" autoComplete="off"/>
                <p className="red-text">{touched && error}</p>
            </div>
        );
    }

    render() {
       console.log('Add Item props', this.props);
        const {handleSubmit} = this.props;
        return (
            <div>
                <h1 className="center">Add item</h1>
                <div className="row right-align">
                    <Link to="/" className="btn red darken-2">back list homepage</Link>
                </div>

                <form onSubmit={handleSubmit(this.handleAddItem.bind(this))}>
                    <div className="row">
                        {/* <div className="col s8 offset-s2">
                            <label >Title</label>
                            <Field name="title" component="input"/>
                        </div> */}
                        <Field name="title" component={this.renderInput} label="Title"/>
                    </div>

                    <div className="row">
                        <Field name="details" component={this.renderInput} label="Details"/>
                    </div>

                    <div className="row right-align">
                        <button className="btn blue lighten-1">Add item</button>
                    </div>
                </form>
            </div>
        );
    }
}

function validate(values) {
    const { title, details } = values;
    const errors = {};

    if(!title) {
        errors.title = 'please add a title';
    }
    if(!details) {
        errors.details = 'please add details about todo item'
    }
    return errors;
}
AddItem = reduxForm({
    form: 'add-item',
    validate: validate
})(AddItem);



export default connect(null, { sentTodoItem: sentTodoItem } )(AddItem);