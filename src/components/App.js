import { data } from "../data";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import React from "react";
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
    store.dispatch({
      type: 'ADD_MOVIES',
      movies: data
    })
    // console.log('state', store.getState());
  }
  render() {
    // console.log("render");
    const movies = this.props.store.getState();
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favourites</div>
          </div>
          {/* tabs closed */}
          <div className="list">
            {movies.map((movie) => (
              <MovieCard movie={movie} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;