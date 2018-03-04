import React from 'react';
import Jumbotron from '../../components/jumbotron/Jumbotron.jsx';
import classNames from 'classnames';
import { Link } from 'react-router';
import Request from 'superagent';
import _ from 'lodash';


class Pet extends React.Component {
    constructor(props) {
        super(props);
        this.state =  {
            name: '',
            birthday: '',
            owner: undefined
        }
    }

    handleSubmit(e) {
        console.dir(this.state);
    }

    render() {
        return (
            <div>
                <form name="petForm" className="form" onSubmit={this.handleSubmit}>
                    <h2>Add New Pet</h2>
                    <fieldset>
                    <input
                    
                    type="text"
                    placeholder="Name"
                    value={this.state.name}
                    onChange={event => this.setState({name:event.target.value})}
                  />
              
                        <br /><br />
                        <input type="text"
                            value={this.state.birthday}
                            onChange={event => this.setState({birthday:event.target.value})}
                            placeholder="BIrthday"
                            text="Pet Birthday">
                        </input>
                        <br /> <br />
                    </fieldset>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}
export default Pet;