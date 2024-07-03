const express = require('express');
const app = express();
const port = 3000;

// Correctly define the courses array
let courses = [
    { id: 1, name: "java" },
    { id: 2, name: "python" },
    { id: 3, name: "node" }
];

// Define the route to get the list of courses
app.get("/courses", (req, res) => {
    res.json(courses);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
