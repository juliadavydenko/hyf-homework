const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const doc = require('./documents.json');
// Support parsing JSON requests
app.use(express.json());

app.get("/search", (req, res) => {
//   res.send(doc);
console.log(req.query.q);
    for (let i = 0; i < doc.length; i++) {
    console.log(doc[i]);
    for (const property in doc[i]) {
    console.log(`${property}: ${doc[i][property]}`);
    // if (typeof parseInt(req.query.q) === number) {
        console.log(doc[i][property], typeof String(doc[i][property]));
        if (String(property) === req.query.q || String(doc[i][property]) === req.query.q) {
            res.json(doc[i]); 
     } else {
       res.json("There is no such thing here((")
        }
    
     
    }
}
}
);
// //   }
//   const filteredDocument = documents.filter((info) => {
//     for (const [key, value] of Object.entries(info)) {
//       const valueString = String(value).toLowerCase();
//       const keyString = String(key).toLowerCase();
//       if (keyString.includes(userQuery) || valueString.includes(userQuery)) {
//         return true;
//       };}
app.listen(port, () => {
console.log(`Listening on port ${port}`)})
