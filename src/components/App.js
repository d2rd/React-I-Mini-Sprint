// Step 1: Import React, and Component from react.
import React from 'react';  //pre-loaded in package.json

// Step 2: Import render from react-dom
import { render } from 'react-dom'; 

// Step 3: Import MoviesList from MoviesList
import MoviesList from 'MoviesList.js';  // File in components folder

class App extends Component {  // Step 4: Write a class called App, extending Component.

  constructor() {  // Step 5: Write a constructor function without passing anything into it.

    super();  // Step 6: Inside the constructor function, call super without passing anything into it.

    this.state = { // Step 7: Inside the constructor function, create a state on this, and set it to an object.

      movies: ['movie1', 'movie2', 'movie3'],  // Step 8: Inside the object, set a key to movies, and the value to an array of movies

    };
  }
  render() {  // Step 9: Write a render function.
    return (  // Step 10: Inside the render function, write a return statement.

              // Step 11: Inside the return statement, write a selfclosing tag called MoviesList
              // Step 12: Inside the selfclosing tag, give it an attribute called movies, and pass it this.state.movies inside a set of curly bracket.
      <div>
        <MoviesList movies={this.state.movies} />  

      </div>
    )
  }
}

// Step 13: Outside the class, export the App class as a default.
export default App;