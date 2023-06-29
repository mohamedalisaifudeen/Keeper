import React from "react";
import Delete from '@mui/icons-material/Delete';



function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={() => props.Delete(props.id)}><Delete/> </button>
    </div>
    
  );
}

export default Note;
