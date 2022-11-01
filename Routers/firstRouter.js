const express = require("express");
var router = express.Router();

var data = require("../data");
router.get("/data", (req, res) => {
  res.json(data);
// });
// router.post("/data", (req, res) => {
//   const content = {
//     id: data.length + 1,
//     first_name: req.body.first_name,
//     last_name: req.body.last_name,
//     email: req.body.email,
//     img: req.body.img,
//     content: req.body.content,
//   };
//   data.push(content);
//   console.log(req.body);
//   res.json(content);
// });

// router.put("/update/:id", (req, res) => {
//   let id = req.params.id;
//   let first_name = req.body.first_name;
//   let last_name = req.body.last_name;
//   let email = req.body.email;
//   let img = req.body.img;
//   let content = req.body.content;

//   const index = data.findIndex((d) => {
//     return d.id == Number.parseInt(id);
//   });
//   if (index >= 0) {
//     let std = data[index];
//     std.last_name = last_name;
//     std.first_name = first_name;
//     std.email = email;
//     std.img = img;
//     std.content = content;
//     res.json(std);
//   } else {
//     res.status(404);
//     res.end();
//   }

//   console.log(id);
// });

// router.delete("/delete/:id", (req, res) => {
//   let id = req.params.id;
//   const index = data.findIndex((d) => {
//     return d.id == Number.parseInt(id);
//   });
//   if (index >= 0) {
//     let std = data[index];
//     data.splice(index, 1);
//     res.json(std);
//   } else {
//     res.status(404);
//     res.end();
//   }
// });

module.exports = router;
