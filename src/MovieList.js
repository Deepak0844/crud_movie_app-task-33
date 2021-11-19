import { IconButton } from '@mui/material';
import { Movie } from './Movie';
import DeleteIcon from '@mui/icons-material/Delete';
import EditButton from '@mui/icons-material/Edit';
import {useHistory} from "react-router-dom";
import { useEffect, useState } from 'react';
export function MovieList(){
    const [movies,setMovies] = useState([])
    const history=useHistory();
    const getMovies =()=>{
        fetch("https://6166c4db13aa1d00170a66fd.mockapi.io/movies/")
        .then((data)=>data.json())
        .then((mvs)=>setMovies(mvs))
}
    useEffect(getMovies,[]);

    const deleteMovie = (id)=>{
        fetch(`https://6166c4db13aa1d00170a66fd.mockapi.io/movies/${id}`,
        {method:"DELETE",
}).then(()=>getMovies());
}
return(
        <section>
            {movies.map(({title,rating,releasedate,runningtime,Genres,summary,image,id})=>(
                <Movie
                   title={title}
                   rating={rating}
                   summary={summary}
                   releaseDate={releasedate}
                   runningTime={runningtime}
                   Genre={Genres}
                   image={image}
                   id={id}
                   key={id}
                   deleteButton={
                  <IconButton
                  onClick={()=>{deleteMovie(id)}}
                  color="error"
                  aria-label="delete movie"
                  >
                      <DeleteIcon/>
                  </IconButton>
                }
                editButton={
                    <IconButton
                    onClick={()=>history.push("/movies/edit/" + id)}
                  color="secondary"
                  aria-label="delete movie"
                  >
                  <EditButton/>
                  </IconButton>
                }
                />
))}
</section>
);}
