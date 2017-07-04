import React from 'react';

class Form extends React.Component {
    state = {
        name: "",
        fat: "",
        proteins: "",
        carbs: ""
    }
    handleInGeneral = type => event => {
        this.setState({[type]: event.target.value})
    }

    handleSubmit = event => {
        console.log(this.state);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form className="container" onSubmit={this.handleSubmit}>
                    <label>
                        Name<br/>
                        <input onChange={this.handleInGeneral("name")} type="text" name="name" />
                    </label>
                    <br />
                    <label>
                        Fat <br/>
                        <input onChange={this.handleInGeneral("fat")} type="text" name="fat" />
                    </label>
                    <br />
                    <label>
                        Protein<br/>
                        <input onChange={this.handleInGeneral("proteins")} type="text" name="protein" />
                    </label>
                    <br />
                    <label>
                        Carbs<br/>
                        <input onChange={this.handleInGeneral("carbs")} type="text" name="carbs" />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default Form;