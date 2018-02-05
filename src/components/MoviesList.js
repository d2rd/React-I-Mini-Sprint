// Import React from react.
import React from 'react';  //pre-loaded in package.json
// Create a const arrow function called MoviesList.
// Return an unordered list
// Inside the unordered list, embed a javascript expression (curly brackets).
// Inside the javascript expression, map the movies array
// The function inside map should take in two arguments, movie and i (for index).
// The function should return a list item, with a javascript expression movie (the same variable as map).
// The list item should have an attribute called key, that takes in i as a javascript expression.
// Outside the arrow function, export the function MoviesList as a default.

import Movie from './Movie';

class MovieList extends React.component {
  state = {
    movies: [
      {
        id: 1,
        title: 'The Lord of The Rings',

      },
      {
        id: 2, 
        title: 'The Hobbit',
      },
      {
        id: 3,
        title: 'Star Wars',
      },
    ],
    message: 'old message'
  };

  changeMessage = () =>{
    // this.state.message = 'new Message';
              // this.setState.message({ message: 'new Message'});  delete '.message'
    this.setState({ message: 'new Message'});
  }

  // deleteMovie = () => {
  //   this.
  // }
  render() {
    //console.log('movies', this.props.films)
    return (
      <div className="movie-list">
        <h1>Movies List Component</h1>
        <ul>
          {this.props.films.map((movie) => {
            return <Movie key={this.props.movie.id} movie={movie} />;            
          })}
          </ul>
        </div>
    );
  }
}


export default MovieList; 