import React, { useState } from 'react';
import './Footer.css'; // CSS faylni chaqiring

const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    mobile: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const botToken = '7845717909:AAETw2qo5x-ydS7dIfzHSWE3Q9KY6PP4CJ0'; // Telegram botingizning tokenini bu yerga joylashtiring
    const chatId = '657921393'; // Chat ID (sizning telegram yoki guruhingiz ID)

    const messageText = `
      📩 Yangi habar:
      📧 Email: ${formData.email}
      📱 Mobile: ${formData.mobile}
      💬 Message: ${formData.message}
    `;

    try {
      await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: messageText,
        }),
      });
      alert('Habar yuborildi!');
    } catch (error) {
      console.error('Hato yuz berdi:', error);
      alert('Habar yuborishda xato yuz berdi.');
    }
  };

  return (
    <div className="contact-form">
      <h2>Get In Touch</h2>
      <p className='p'>"Reach out for partnership opportunities. We’re excited to hear from you!"
      "Send us a message to discuss new collaborations and opportunities."</p>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input 
          type="email" 
          name="email" 
          placeholder="Please enter your email" 
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Mobile</label>
        <input 
          type="text" 
          name="mobile" 
          placeholder="Enter mobile" 
          value={formData.mobile}
          onChange={handleChange}
          required
        />

        <label>Message</label>
        <textarea
          name="message"
          placeholder="Enter your message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
