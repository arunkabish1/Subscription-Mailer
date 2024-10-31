// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();


const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Create a transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'process.env.GMAIL_APP_ID',
    pass: 'process.env.GMAIL_APP_PASSWORD', 
  },
});

// POST endpoint to send emails
app.post('/send-email', async (req, res) => {
  const { clientEmail, userEmail } = req.body;

  const clientMailOptions = {
    from: 'process.env.GMAIL_APP_ID',
    to: clientEmail, // Client's email address
    subject: 'New Contact Form Submission',
    text: `You have received a new message from: ${from}`,
  };

  const userMailOptions = {
    from: 'process.env.GMAIL_APP_ID',
    to: userEmail, // User's email address
    subject: 'Thank You for Contacting Us!',
    text: 'We have received your message and will get back to you shortly.',
  };

  try {
    await transporter.sendMail(clientMailOptions);
    await transporter.sendMail(userMailOptions);
    res.status(200).send({ message: 'Emails sent successfully' });
  } catch (error) {
    console.error('Error sending emails:', error);
    res.status(500).send({ message: 'Error sending emails', error });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
