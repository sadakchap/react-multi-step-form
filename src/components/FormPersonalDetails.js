import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton'

export class FormPersonalDetails extends Component {

    continue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    previous = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values, handleChange } = this.props;

        return (
            <MuiThemeProvider>
                <React.Fragment>

                    <AppBar title="Enter User Details" />
                    <TextField
                        hintText="Enter your City Name"
                        floatingLabelText="City"
                        onChange={handleChange('city')}
                        defaultValue={values.city}
                    />
                    <br />

                    <TextField
                        hintText="Enter your current Occupation"
                        floatingLabelText="Occupation"
                        onChange={handleChange('occupation')}
                        defaultValue={values.occupation}
                    />
                    <br />

                    <TextField
                        hintText="Enter something about you"
                        floatingLabelText="Bio"
                        onChange={handleChange('bio')}
                        defaultValue={values.bio}
                    />
                    <br />

                    <RaisedButton
                        label="Previous"
                        primary={false}
                        style={styles.button}
                        onClick={this.previous}
                    />

                    <RaisedButton
                        label="Continue"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                    />

                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    button: {
        margin: 15
    }
}

export default FormPersonalDetails