import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useHistory } from "react-router-dom";
import { useState } from 'react';
//to add movie in api
export function AddMovie() {
  const history = useHistory();
  const [movieName, setMovieName] = useState("");
  const [movieRating, setMovieRating] = useState("");
  const [movieSummary, setMovieSummary] = useState("");
  const [moviePoster, setMoviePoster] = useState("");
  const [movieRunningtime, setMovieRunningtime] = useState("");
  const [movieReleasedate, setMovieReleasedate] = useState("");
  const [movieGenres, setMovieGenres] = useState("");
  const [movietrailer, setMovieTrailer] = useState("");
  const addMovie = () => {
    const newMovie = {
      title: movieName,
      image: moviePoster,
      rating: movieRating,
      summary: movieSummary,
      runningtime: movieRunningtime,
      releasedate: movieReleasedate,
      Genres: movieGenres,
      trailer: movietrailer
};
    fetch(`https://6166c4db13aa1d00170a66fd.mockapi.io/movies`,
    {method:"POST",
  body:JSON.stringify(newMovie),//adding movie 
  headers: {
    'Content-Type': 'application/json'
  }
}).then(()=>history.push("/movies"));//after adding movie move to movies list page
  }
  return (
    //input field
    <div className="inputs">
    <TextField placeholder="Enter Movie Title"
      onChange={(event) => setMovieName(event.target.value)} variant="standard" />
    <TextField placeholder="Enter Movie Rating"
      onChange={(event) => setMovieRating(event.target.value)} variant="standard"/>
    <TextField placeholder="Enter Movie Summary"
      onChange={(event) => setMovieSummary(event.target.value)} variant="standard" />
    <TextField placeholder="Enter Movie poster Url"
      onChange={(event) => setMoviePoster(event.target.value)} variant="standard" />
    <TextField placeholder="Enter Movie Running Time"
      onChange={(event) => setMovieRunningtime(event.target.value)} variant="standard" /> 
        <TextField placeholder="Enter Movie Release Date"
      onChange={(event) => setMovieReleasedate(event.target.value)} variant="standard" />        
        <TextField placeholder="Enter Movie Genere"
      onChange={(event) => setMovieGenres(event.target.value)} variant="standard" />   
        <TextField placeholder="Enter Movie Trailer"
      onChange={(event) => setMovieTrailer(event.target.value)} variant="standard" />  
       <div className="addSaveBtn">
    <Button onClick= {addMovie} variant="contained" className="add-button">Add Movie</Button>
    </div>
    <div>
      {/* back button */}
        <Button variant="outlined" onClick={() => history.goBack()} startIcon={<KeyboardBackspaceIcon />}>
          Back
        </Button>
      </div>
  </div>);
}