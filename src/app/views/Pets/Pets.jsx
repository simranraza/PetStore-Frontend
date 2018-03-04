import React from 'react';
import Jumbotron from '../../components/jumbotron/Jumbotron.jsx';
import classNames from 'classnames';
import { Link } from 'react-router';
import Request from 'superagent';
import _ from 'lodash';


class Pets extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pets: null
        }
        this.loadData = this.loadData.bind(this);
    }

    init() {
        console.log('init triggered');

    }

    componentDidMount() {
        console.log('component did mount');
        this.loadData()
    }
    loadData() {
        const BASE_URL = 'http://localhost:8086/';
        const FETCH_URL = BASE_URL + 'pets';

        fetch(FETCH_URL, {
            method: 'GET'
        })
            .then(response => response.json()
                .then(json => {
                    //console.log('art: ' + json.artists.total);
                    let pets = null;
                    pets = json.length > 0 ? json : null;
                    //console.log('art2: ' + artist);
                    this.setState({ pets: pets })
                })
            );
    }

    render() {
        const pets = this.state.pets;
        if (pets) {
            var list = pets.map((pet, index) => {
                return (
                    <tr>
                        <td>{index + 1}</td>
                        <td>{pet.name}</td>
                        <td>{pet.birthday}</td>
                        <td>{pet.owner != null ? pet.owner.first_name : ''}</td>

                    </tr>
                );
            });
        }
        return (
            <div>
                <div>
                    <h2 className="text-center"> Pets List </h2>
                    <br></br>
                    <table className="table">
                        <thead>
                            <tr>
                                <td>No.</td>
                                <td>Name</td>
                                <td>Birthday</td>
                                <td>Owner</td>

                            </tr>
                        </thead>
                        <tbody>
                            {list}
                        </tbody>
                    </table>
                </div>
                <a className="btn">
                    <Link to="/pet">
                        Add New Pet
                    </Link>
                </a>
            </div>
        )
    }
};

export default Pets;