const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const cors = require("cors")({ origin: true });

// Email configuration
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: functions.config().email?.user || "msufianasad@gmail.com",
    pass: functions.config().email?.password, // Ensure this is set in Firebase environment variables
  },
});

// Cloud Function to send an email
exports.sendMessage = functions.https.onRequest((req: any, res: any) => {
  cors(req, res, () => {
    if (req.method !== "POST") {
      return res.status(405).send("Method Not Allowed");
    }

    const { name, email, contact, message } = req.body;
    
    // Validate input
    if (!name || !email || !message) {
      return res.status(400).send("Missing required fields");
    }

    const mailOptions = {
      from: functions.config().email?.user || "msufianasad@gmail.com",
      to: functions.config().recipient?.email || "msufianasad@gmail.com",
      subject: `New Contact Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nContact No: ${contact}\nMessage: ${message}`,
    };

    transporter.sendMail(mailOptions, (error: any, info: any) => {
      if (error) {
        console.error("Error sending email:", error);
        return res.status(500).send(error.toString());
      }
      return res.status(200).send("Message Sent Successfully!");
    });
  });
});
