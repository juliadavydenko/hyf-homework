import React from 'react';
import ReactDOM from 'react-dom'; 

function UserList1(props) {
    const users = [
        {
          fullname: "testy mc testy face",
          address: "test alley",
          age: 35,
          height: 185,
          languages: ["danish", "arabic"],
        },
        {
          fullname: "Ahmad Hansen",
          address: "test alley 2",
          age: 89,
          height: 167,
          languages: ["english", "polish"],
        },
        {
          fullname: "Peter Petersen",
          address: "alley 2",
          age: 19,
          height: 176,
          languages: ["english", "danish"],
        },
      ];
     
     
      
      return (
        <ul>{users.map((user) => {
     return <UserItem name = {user.fullname} age = {user.age} 
     height = {user.height} languages = {user.languages}/>})}
     </ul>);
      };

      function UserItem(props) {
        return (
            <li>
{props.name} - <h3>Age:</h3>{props.age} - <h3>Height:</h3>{props.height} -
{props.languages}</li>
        )
      };




export {UserList1};