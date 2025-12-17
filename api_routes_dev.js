//getting express module
const express = require('express');

// create router 
const router = express.Router();

// handling file system
const fs = require('fs');

// read JSON data
let rawdata = fs.readFileSync('./info.json'); // Adjusted to match the file location
let employee = JSON.parse(rawdata); //getting the employee data

// get all employees
router.get('/', (req, res) => {
  res.json({ employees: employee.data }); //sending all employee data as JSON response
});

// filter by name
router.get('/by_name/:qname', (req, res) => { //parameter in browser url
  let query = req.params.qname; //getting the parameter value

  let filtered_employees = employee.data.filter(e =>
    e.employee_name.includes(query) //filtering logic
  );

  res.json({ employees: filtered_employees }); //sending filtered data as JSON response
});

// filter by age range
router.get('/by_age/:start_age/:end_age', (req, res) => {
  let start_age = parseInt(req.params.start_age); //getting start age parameter value
  let end_age = parseInt(req.params.end_age); //getting end age parameter value

  let filtered_employees = employee.data.filter(e => //filtering employees by age range
    e.employee_age > start_age && e.employee_age < end_age //filtering logic
  );

  res.json({ employees: filtered_employees }); //sending filtered data as JSON response
});

//exporting the router
module.exports = router;
