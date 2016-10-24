import React      from 'react';
import Jumbotron  from '../../components/jumbotron/Jumbotron.jsx';
import classNames from 'classnames';
import { Link }   from 'react-router';
import Request    from 'superagent';
import _          from 'lodash';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {movies:[],searchText:''}
    this.init();
  }

  init() {
    this.state = {
      animated    : true,
      viewEnters  : false
    };
  }

  componentWillMount() {
        this.search();
      this.state = {
      viewEnters  : true
    };
    
  }

  processViewAnimationClasses() {
    const homeViewClasses = classNames({
      'animatedViews'    : this.state.animated,
      'view-enter'       : this.state.viewEnters
    });
    return homeViewClasses;
  }

    updateSearch = function(st){
        console.log(this.state.searchText);
        this.search(this.state.searchText);
    }
    
    searchTextChange= function(e) {
        console.log(e.target.value);
        this.setState({searchText: e.target.value});
    }
  render() {
     
      var movies = _.map(this.state.movies, (movie)=>{
          return <li>{movie.Title}</li>
      })
      
    return(
      <div
        key="homeView"
        className={this.processViewAnimationClasses()}>
        <div>
            <form>
                <input type="text" name="searchText" onChange={this.searchTextChange.bind(this)}></input>
                <input type="button" name="searchButton" value="Search" onClick={this.updateSearch.bind(this)}></input>
            </form>
        </div>
        <div>
             <ul>{movies}</ul> 
        </div>    
      </div>
    );
  }
    
    search(query = "star"){
    var url = `http://www.omdbapi.com?s=${query}&y=&r=json&plot=short`;
    Request.get(url).then((response) => {
        console.log(response);
      this.setState({
        movies: response.body.Search,
        total: response.body.totalResults
      });
    });
  }
}

export default Home;
