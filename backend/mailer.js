import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();
console.log(dotenv.config());

const app = express();
const port = 5000;

// Middleware
app.use(cors({
  origin: "http://localhost:5173",  // Allow all origins (replace "*" with specific domain for stricter security)
  methods: ["GET", "POST"],  // Explicitly allow these methods if necessary
  allowedHeaders: ["Content-Type", "Authorization"]  // Allow these headers
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Debugging - Log the values of environment variables to check if they are loaded correctly
console.log('GMAIL_USER:', process.env.GMAIL_USER);
console.log('GMAIL_PASSWORD:', process.env.GMAIL_PASSWORD);

// Email sending function
function sendEmail({ name, email, number, message }) {
  return new Promise((resolve, reject) => {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,   // Use the Gmail user from .env
        pass: process.env.GMAIL_PASSWORD,  // Use the Gmail app password from .env
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mailConfigs = {
      from: process.env.GMAIL_USER,  // Use the sender email from .env
      to: "info.botaneducation@gmail.com",
      subject: "New Contact Request",
      text: `Name: ${name}\nEmail: ${email}\nPhone Number: ${number}\nMessage: ${message}`,
    };

    console.log(mailConfigs.to);  // Debugging log

    transporter.sendMail(mailConfigs, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
        return reject({ message: `Error: ${error.message}` });
      }
      console.log("Email sent successfully:", info.response);  // Log success message
      resolve({ message: `Email sent successfully: ${mailConfigs.to}: ${mailConfigs.from}` });
    });
  });
}

// API endpoint
app.get("/", (req, res) => {
  sendEmail(req.query)
    .then((response) => res.status(200).send(response.message))
    .catch((error) => {
      console.error("Email error:", error);
      res.status(500).send("Failed to send email. Please try again.");
    });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
