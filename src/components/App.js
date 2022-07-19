import { data } from "../data";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import React from "react";
import { addMovies } from "../actions";
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
  render() {
    // console.log("render");
    const {list} = this.props.store.getState(); //{list:[], favoourites: []}
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
            {list.map((movie, index) => (
              <MovieCard movie={movie} key={`movies-${index}`} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;