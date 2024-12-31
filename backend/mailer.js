import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
require('dotenv').config();


const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Email sending function
function sendEmail({ name, email, number, message }) {
  return new Promise((resolve, reject) => {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD, // Ensure this is an App Password"
      },
    });

    const mailConfigs = {
      from: "prtkchapagain@gmail.com",
      to: "info.botaneducation@gmail.com",
      subject: "New Contact Request",
      text: `Name: ${name}\nEmail: ${email}\nPhone Number: ${number}\nMessage: ${message}`,
    };
    console.log(mailConfigs.to)
    transporter.sendMail(mailConfigs, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
        return reject({ message: `Error: ${error.message}` });
      }
      console.log("Email sent successfully:", info);
      
      resolve({ message: `Email sent successfully:${mailConfigs.to}`} );
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
