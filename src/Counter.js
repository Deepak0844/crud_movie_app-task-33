import { useState } from 'react';
import Badge from '@mui/material/Badge';
import ThumbUpSharpIcon from '@mui/icons-material/ThumbUpSharp';
import ThumbDownSharpIcon from '@mui/icons-material/ThumbDownSharp';
import Card from '@mui/material/Card';

export function Counter() {
  const [like, setLike] = useState(0);
  const [disLike, setDisLike] = useState(0);
  const batchStyle={
    marginTop:"30px",
    marginLeft:"0px",
    width:"35px",
    color:"white",
    border:"none"
  }
  const styles={
    border:"none",
    outLine:"none",
    backgroundColor:"transparent"
  }
  return (
    <div>
      {/* when like button click add one value in like */}
      <button className="likedislikebtn" onClick={() => setLike(like + 1)}> <Badge style={batchStyle} badgeContent={like}color="primary">
      <Card style={styles} variant="outlined"><ThumbUpSharpIcon/></Card>
     </Badge></button>
     {/* when dislike button click add one value in dislike */}
     <button className="likedislikebtn" onClick={() => setDisLike(disLike + 1)}> <Badge style={batchStyle} badgeContent={disLike}color="error">
      <Card style={styles} variant="outlined"><ThumbDownSharpIcon/></Card>
     </Badge></button>
      
    </div>
   
  );
}
