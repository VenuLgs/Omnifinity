import dotenv from "dotenv";
import express from "express";
import nodemailer from "nodemailer";
import bodyParser from "body-parser";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.post("/contact", async (req, res) => {
  const {
    email,
    phoneNumber,
    firstName,
    lastName,
    companyName,
    countryRegion,
    message,
  } = req.body;

  // Create a transporter
  let transporter = nodemailer.createTransport({

    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT),
    service: process.env.SMTP_SERVICE,
    auth: {
      user: process.env.SMTP_MAIL,
      pass: process.env.SMTP_PASS,
    },
  });

  // Email options for the owner
  let mailOptionsToOwner = {
    from: process.env.SMTP_MAIL,
    to: process.env.SMTP_MAIL,
    subject: "New Contact Us Message",
    text: `
      Email: ${email}
      Phone Number: ${phoneNumber}
      First Name: ${firstName}
      Last Name: ${lastName}
      Company Name: ${companyName}
      Country/Region: ${countryRegion}
      Message: ${message}
    `,
  };

  // Email options for the customer
  let mailOptionsToCustomer = {
    from: process.env.SMTP_MAIL,
    to: email,
    subject: "Thank you for contacting us",
    text: `Dear ${firstName} ${lastName},

Thank you for reaching out to us. We have received your message and will get back to you shortly.


`,
  };

  // Send the emails
  try {
    await transporter.sendMail(mailOptionsToOwner);
    await transporter.sendMail(mailOptionsToCustomer);
    res.status(200).json({ message: "Messages sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send messages" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
