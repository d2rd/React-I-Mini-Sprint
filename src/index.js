import React from 'react';
// import { render } from 'react-dom';
import ReactDOM from 'react-dom';

import './index.css';
import MovieList from './components/MoviesList';

// // import App from './components/App';

// // render(<App />, document.getElementById('root'));

// function Movies(props)

// const movies = [
//  {
//    id: 1,
//    title: 'The Lord of The Rings',
//  },
//  {
//    id: 2,
//    title: 'The Hobbit',
//  },
//  {
//    id: 3,
//    title: 'Sta Wars',
//  }
// ];

// function Movie(props) {  //props is a parameter to pass to a function
//   return <li key={movie.id}>{movie.title}</li>;
// }

// class MovieList extends React.Component {
//   state = {
//     movies: [
//       {
//         id: 1,
//         title: 'The Lord of The Rings',

//       },
//       {
//         id: 2, 
//         title: 'The Hobbit',
//       },
//       {
//         id: 3,
//         title: 'Star Wars',
//       },
//     ],
//     message: 'old message'
//   };

//   changeMessage = () =>{
//     // this.state.message = 'new Message';
//               // this.setState.message({ message: 'new Message'});  delete '.message'
//     this.setState({ message: 'new Message'});
//   }

//   // deleteMovie = () => {
//   //   this.
//   // }
//   render() {
//     //console.log('movies', this.props.films)
//     return (
//       <div className="movie-list">
//         <h1>Movies List Component</h1>
//         <ul>
//           {this.props.films.map((movie) => {
//             return <Movie key={this.props.movie.id} movie={movie} />;            
//           })}
//           </ul>
//         </div>
//     );
//   }
// }

ReactDOM.render(<MovieList films={movies} />, document.getElementById("root"));