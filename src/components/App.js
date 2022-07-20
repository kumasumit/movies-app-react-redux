import { data } from "../data";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import React from "react";
import { addMovies, setShowFavourites } from "../actions";
class App extends React.Component {
  componentDidMount(){
    const {store} = this.props;
    //make api call
    //subscribe to the store 
    store.subscribe(()=>{
    //  console.log("Updated");
     this.forceUpdate();
     //this is to forcefully 
    });
    // as soon as state changes control goes to subscribe callback and then the control goes back to this.componentDidMount console 
    //dispatch action
    store.dispatch(addMovies(data));
    // console.log('state', store.getState());
  }
  isMovieFavourite = (movie) => {
    const {movies} = this.props.store.getState();
    // console.log(favourites);
    const index = movies.favourites.indexOf(movie);
    if(index !== -1){
      //found the movie, it is already present in favourites tab
      return true;
    }
    //else make it false
    return false;

  }
  onChangeTab = (val) =>
  {
    this.props.store.dispatch(setShowFavourites(val));
  }
  render() {
    // console.log("render");
    const {movies, search} = this.props.store.getState();
    const {list, favourites, showFavourites} = movies;
    console.log('Render', this.props.store.getState()); 
    const displayMovies = showFavourites ? favourites : list; 
    return (
      <div className="App">
        <Navbar dispatch={this.props.store.dispatch} search={search}/>
        <div className="main">
          <div className="tabs">
            <div className={`tab ${showFavourites ? '':'active-tabs'}`} onClick = {() => this.onChangeTab(false)}>Movies</div>
            <div className={`tab ${showFavourites ? 'active-tabs':''}`} onClick = {() => this.onChangeTab(true)}>Favourites</div>
          </div>
          {/* tabs closed */}
          <div className="list">
            {displayMovies.map((movie, index) => (
              <MovieCard 
              movie={movie} 
              key={`movies-${index}`} 
              dispatch={this.props.store.dispatch}
              isFavourite = {this.isMovieFavourite(movie)}
              />
            ))}
          </div>
          {displayMovies.length === 0 ? <div className="no-movies">No movies to display!</div>: null}
        </div>
      </div>
    );
  }
}

export default App;