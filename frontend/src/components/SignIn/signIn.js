import React, { useState } from "react";

const SignInPage = () => {
  // State variables for email and password input
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // State variable for error messages

  // Handle sign-in form submission
  const handleSignIn = (e) => {
    e.preventDefault();

    // Check if the entered email and password match the default credentials
    if (email === "admin@gmail.com" && password === "admin") {
      console.log("Successfully logged in as admin.");
      setError(""); // Clear any previous errors
    } else {
      setError("Incorrect email or password!"); // Set error message if incorrect credentials
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Sign In</h1>
      <form onSubmit={handleSignIn} style={styles.form}>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
            placeholder="Enter your email"
            required
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            placeholder="Enter your password"
            required
          />
        </div>
        {error && <p style={styles.error}>{error}</p>}{" "}
        {/* Display error message if exists */}
        <button type="submit" style={styles.button}>
          Sign In
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: "2rem",
    marginBottom: "20px",
    color: "#333",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    width: "300px",
    padding: "20px",
    borderRadius: "8px",
    backgroundColor: "#fff",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    marginBottom: "5px",
    color: "#333",
    fontSize: "1rem",
  },
  input: {
    padding: "10px",
    fontSize: "1rem",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  error: {
    color: "red",
    fontSize: "1rem",
    textAlign: "center",
  },
  button: {
    padding: "10px 20px",
    fontSize: "1rem",
    color: "#fff",
    backgroundColor: "#007bff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
};

export default SignInPage;
