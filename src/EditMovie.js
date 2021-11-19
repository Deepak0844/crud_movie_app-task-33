import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useParams } from "react-router-dom";
import { useState,useEffect } from 'react';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useHistory } from "react-router-dom";

export function EditMovie() {
  const { id } = useParams();
  const [movie,setMovie] = useState(null)
  useEffect(()=>{
    fetch(`https://6166c4db13aa1d00170a66fd.mockapi.io/movies/${id}`)
    .then((data)=>data.json())
    .then((mv)=>setMovie(mv))
  },[id])
return movie ? <UpdateMovie movie={movie}/> :" "
}
function UpdateMovie({movie}){
  const history = useHistory();
  const [movieName, setMovieName] = useState(movie.title);
  const [movieRating, setMovieRating] = useState(movie.rating);
  const [movieSummary, setMovieSummary] = useState(movie.summary);
  const [moviePoster, setMoviePoster] = useState(movie.image);
  const [movieRunningtime, setMovieRunningtime] = useState(movie.runningtime);
  const [movieReleasedate, setMovieReleasedate] = useState(movie.releasedate);
  const [movieGenres, setMovieGenres] = useState(movie.Genres);
  const [movietrailer, setMovieTrailer] = useState(movie.trailer);
  const editMovie = () => {
    const UpdatedMovie = {
      title: movieName,
      image: moviePoster,
      rating: movieRating,
      summary: movieSummary,
      runningtime: movieRunningtime,
      releasedate: movieReleasedate,
      Genres: movieGenres,
      trailer: movietrailer
    };
    fetch(`https://6166c4db13aa1d00170a66fd.mockapi.io/movies/${movie.id}`,
    {method:"PUT",
  body:JSON.stringify(UpdatedMovie),
  headers: {
    'Content-Type': 'application/json'
  }
}).then(()=>history.push("/movies"));
  }
  return (
    <div className="inputs">
      <TextField value={movieName} onChange={(event) => setMovieName(event.target.value)} id="standard-basic" label="Movie Name" variant="standard" />
      <TextField value={movieRating} onChange={(event) => setMovieRating(event.target.value)} id="standard-basic" label="Rating" variant="standard" />
      <TextField value={movieSummary} onChange={(event) => setMovieSummary(event.target.value)} id="standard-basic" label="Summary" variant="standard" />
      <TextField value={moviePoster} onChange={(event) => setMoviePoster(event.target.value)} id="standard-basic" label="Poster" variant="standard" />
      <TextField value={movieRunningtime} onChange={(event) => setMovieRunningtime(event.target.value)} id="standard-basic" label="Runningtime" variant="standard" />
      <TextField value={movieReleasedate} onChange={(event) => setMovieReleasedate(event.target.value)} id="standard-basic" label="Releasedate" variant="standard" />
      <TextField value={movieGenres} onChange={(event) => setMovieGenres(event.target.value)} id="standard-basic" label="Genres" variant="standard" />
      <TextField value={movietrailer} onChange={(event) => setMovieTrailer(event.target.value)} id="standard-basic" label="Trailer" variant="standard" />
      <div className="addSaveBtn">
        <Button className="button"
          onClick={editMovie}
          variant="outlined">Save</Button>
      </div>
      <div>
        <Button variant="outlined" onClick={() => history.goBack()} startIcon={<KeyboardBackspaceIcon />}>
          Back
        </Button>
      </div>
    </div>
  );
}