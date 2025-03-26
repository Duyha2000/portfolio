import { Request, Response } from "express";
import transporter from "../utils/mail";

export const sendEmail = async (req: Request, res: Response) => {
  const { name, email, phone, message } = req.body;

  const mailOptions = {
    from: email,
    to: "tranduy10a@gmail.com",
    subject: `New Contact Request from ${name}`,
    html: `
      <h3>Contact Information</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong><br/>${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Failed to send email:", error);
    res
      .status(500)
      .json({ message: "Failed to send email. Please try again later." });
  }
};
