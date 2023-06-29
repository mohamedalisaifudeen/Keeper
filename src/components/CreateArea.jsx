import React from "react";
import Note from "./Note";
import AddCircle from '@mui/icons-material/AddCircle';
import {Zoom} from '@mui/material';

function CreateArea() {
  var [content, ChangeContent] = React.useState({
    title: "",
    description: ""
  });

  var [newContent, newChangecontent] = React.useState([]);

  function Change(event) {
    var name = event.target.name;
    var value = event.target.value;
    ChangeContent((previous) => {
      if (name === "title") {
        return { title: value, description: previous.description };
      } else if (name === "content") {
        return { title: previous.title, description: value };
      }
    });
  }

  function Click(event) {
    event.preventDefault();
    console.log(content);
    newChangecontent((previous) => {
      return [...previous, content];
    });
    ChangeContent({
      title: "",
      description: ""
    });
    console.log(newContent);
  }

  function Delete(id) {
    newChangecontent(
      newContent.filter((event, index) => {
        return index !== id;
      })
    );
  }
  var [state,setState]=React.useState(false)
  function Clicked(){
    setState(true)
  }

  return (
    <div>
    
      <form>
      
      <input
          onChange={Change}
          name="title"
          placeholder="Title"
          value={content.title}
          onClick={Clicked}
        /> {state&&<textarea
          onChange={Change}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={content.description}
        />}
      
        {state&&<button onClick={Click}><AddCircle/></button>}
        
      
        
      </form>
      {newContent.map((event, index) => {
        return (
          <div>
            <Note
              key={index}
              id={index}
              Delete={Delete}
              title={event.title}
              content={event.description}
            />
          </div>
        );
      })}
    </div>
  );
}

export default CreateArea;
