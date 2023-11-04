// Context api 

import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props)=>{
    const notesInitial =
    [
        {
          "_id": "653cbd3f0ce2fea81dff3f7f",
          "user": "653cbcd462746ccb0afd2206",
          "title": "Title for Pramod",
          "description": "also description",
          "tag": " also tagishere",
          "date": "2023-10-28T07:50:23.907Z",
          "__v": 0
        },
        {
          "_id": "653cbd3f0ce2fea81dff3f7f",
          "user": "653cbcd462746ccb0afd2206",
          "title": "Title for Ram ",
          "description": "also description",
          "tag": " also tagishere",
          "date": "2023-10-28T07:50:23.907Z",
          "__v": 0
        },
        {
          "_id": "653cbd3f0ce2fea81dff3f7f",
          "user": "653cbcd462746ccb0afd2206",
          "title": "Title for Shyam",
          "description": "This is description",
          "tag": " also tagishere",
          "date": "2023-10-28T07:50:23.907Z",
          "__v": 0
        },
        {
            "_id": "653cbd3f0ce2fea81dff3f7f",
            "user": "653cbcd462746ccb0afd2206",
            "title": "Title for Shyam",
            "description": "This is description",
            "tag": " also tagishere",
            "date": "2023-10-28T07:50:23.907Z",
            "__v": 0
          },
          {
            "_id": "653cbd3f0ce2fea81dff3f7f",
            "user": "653cbcd462746ccb0afd2206",
            "title": "Title for Shyam",
            "description": "This is description",
            "tag": " also tagishere",
            "date": "2023-10-28T07:50:23.907Z",
            "__v": 0
          },
          {
            "_id": "653cbd3f0ce2fea81dff3f7f",
            "user": "653cbcd462746ccb0afd2206",
            "title": "Title for Shyam",
            "description": "This is description",
            "tag": " also tagishere",
            "date": "2023-10-28T07:50:23.907Z",
            "__v": 0
          },
          {
            "_id": "653cbd3f0ce2fea81dff3f7f",
            "user": "653cbcd462746ccb0afd2206",
            "title": "Title for Shyam",
            "description": "This is description",
            "tag": " also tagishere",
            "date": "2023-10-28T07:50:23.907Z",
            "__v": 0
          },
          {
            "_id": "653cbd3f0ce2fea81dff3f7f",
            "user": "653cbcd462746ccb0afd2206",
            "title": "Title for Shyam",
            "description": "This is description",
            "tag": " also tagishere",
            "date": "2023-10-28T07:50:23.907Z",
            "__v": 0
          },
          {
            "_id": "653cbd3f0ce2fea81dff3f7f",
            "user": "653cbcd462746ccb0afd2206",
            "title": "Title for Shyam",
            "description": "This is description",
            "tag": " also tagishere",
            "date": "2023-10-28T07:50:23.907Z",
            "__v": 0
          },
          
      ]
      
      const [notes, setNotes] = useState(notesInitial)
    
    return (
         <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;