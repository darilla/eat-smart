import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';

class Date extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            startDate: moment()
        }
    }
    handleChange = (date) => {
        // console.log(moment(date).second());
        this.setState({
            startDate: date
        })
    }
    render() {
        return (
            <div>
                <DatePicker
                    dateFormat="DD/MM/YYYY"
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                    showMonthDropdown
                    showYearDropdown
                    withPortal
                />
            </div>
        )
    }
}

export default Date;