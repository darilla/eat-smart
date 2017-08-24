import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import CircularProgress from 'material-ui/CircularProgress';
import RaisedButton from 'material-ui/RaisedButton';
import { renderTextField } from '../../common/FormFields';
import './addFood.css';
import LinearProgressBar from '../../common/LinearProgress';

const validate = values => {
    const errors = {}
    if (!values.name) {
        errors.name = 'Required'
    }
    else if (values.name.length < 2) {
        errors.name = 'Chosen name is too short'
    }
    if (!values.fat) {
        errors.fat = 'Required'
    }
    if (!values.protein) {
        errors.protein = "Required";
    }
    if (!values.carbs) {
        errors.carbs = "Required";
    }
    return errors
}

const AddFood = props => {

    const clearAndSubmit = values => {
        props.onSubmit(values);
        props.reset();
    }

    const { pristine, reset, invalid, handleSubmit } = props
    const loading = props.isLoading ? <LinearProgressBar /> : null;
    const submit = handleSubmit(clearAndSubmit);
    return (
        <div className="addFoodContainer">
            <div>
                <form onSubmit={submit} className="addFoodFormContainer">
                    <div>
                        <Field className="addFoodField" name="name" type="text" component={renderTextField} label="Name" />
                    </div>
                    <div>
                        <Field className="addFoodField" name="fat" type="number" component={renderTextField} label="Fat" />
                    </div>
                    <div>
                        <Field className="addFoodField" name="protein" type="number" component={renderTextField} label="Protein" />
                    </div>
                    <div>
                        <Field className="addFoodField" name="carbs" type="number" component={renderTextField} label="Carbs" />
                    </div>
                    <div className="buttons">
                        <RaisedButton className="addFoodSubmitButton" label="Submit" type="submit" primary={true} disabled={invalid} />
                        <RaisedButton className="addFoodCleanButton" label=" Clear values" type="submit" disabled={pristine} onClick={reset} backgroundColor="#6DBEC2" labelColor="#F0F2F2" />
                    </div>
                </form>
            </div>
            <div className="addFoodLinearProgress">
                {loading}
            </div>
        </div>
    )
}
AddFood.propTypes = {
    isLoading: PropTypes.bool,
};

export default reduxForm({
    form: 'addFood',
    validate
})(AddFood)


