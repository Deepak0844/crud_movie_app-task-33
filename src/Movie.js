import IconButton from '@mui/material/IconButton';
import { Counter } from "./Counter";
import InfoIcon from '@mui/icons-material/Info';
import {useHistory} from "react-router-dom";
import Card from '@mui/material/Card';

export function Movie({ title, image, rating,releaseDate, runningTime, Genre,id,deleteButton,editButton }) {
  const history=useHistory();
  const styles = {
    color: rating < 9 ? "crimson" : "green",
    fontWeight: "bold",
    paddingTop:"5px"
  };
  return (
    <section className="movies">
    <div className="movieDetails">
    <Card>
      <img className="poster" src={image} alt={title} />
      <h1>{title}</h1>
      <div className="details">
        <p>{releaseDate}</p>
        <p>{runningTime}min</p>
        <p>{Genre}</p>
      </div>
      
      <div className="information">
      <p style={styles}><span className="fa fa-star checked"></span> {rating}</p>
      <div className="text">
        <IconButton
          onClick={() =>{
            history.push("/movies/"+ id);
          }}
          aria-label="delete" color="primary">
           <InfoIcon />
        </IconButton>
        </div>
        </div>
        <div className="edit-delete-button">
        {editButton} {deleteButton}
        </div>
          <Counter />
          </Card>
    </div>
    </section>
    
);
}
