const http = require("http");
const { MongoClient } = require("mongodb");
const cors = require("cors"); // Import cors package

// Define the hostname and port
const hostname = "127.0.0.1";
const port = 1234;

// MongoDB connection details (still connected but not used here)
const mongoUrl = "mongodb://localhost:27017/";
const dbName = "Jwell";

// Hardcoded admin credentials
const adminEmail = "admin@gmail.com";
const adminPassword = "admin";

let db;

// Function to connect to MongoDB
async function connectToMongoDB() {
  try {
    const client = new MongoClient(mongoUrl);
    await client.connect();
    console.log("Connected to MongoDB successfully!");
    db = client.db(dbName);
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    process.exit(1); // Exit the process if the connection fails
  }
}

// Create the server
const server = http.createServer((req, res) => {
  // Enable CORS for all origins
  cors()(req, res, () => {});

  // Check for POST request at '/signin' endpoint
  if (req.url === "/signin" && req.method === "POST") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      try {
        const { email, password } = JSON.parse(body);

        // Check if the provided email and password match the hardcoded values
        if (email === adminEmail && password === adminPassword) {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify({ message: "Sign In Successful" }));
        } else {
          res.statusCode = 401; // Unauthorized
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify({ message: "Invalid Credentials" }));
        }
      } catch (error) {
        res.statusCode = 400; // Bad Request
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({ message: "Invalid Request Body" }));
      }
    });
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    res.end("Endpoint not found.");
  }
});

// Connect to MongoDB and then start the server
connectToMongoDB().then(() => {
  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
});
