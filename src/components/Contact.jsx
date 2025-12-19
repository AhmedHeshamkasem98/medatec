import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill in all required fields.");
      return;
    }

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/meshodevaloper@gmail.com",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("Failed to send message. Try again later.");
      }
    } catch (error) {
      setStatus("An error occurred. Try again later.");
    }
  };

  return (
    <section className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Title */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-gray-600">
            Have questions? We’d love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <Mail className="w-6 h-6 text-blue-600" />
              <div>
                <h3 className="font-bold text-gray-900">Email</h3>
                <p className="text-gray-600">meshodevaloper@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="w-6 h-6 text-blue-600" />
              <div>
                <h3 className="font-bold text-gray-900">Phone / WhatsApp</h3>
                <p className="text-gray-600">+20 109 501 4554</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="w-6 h-6 text-blue-600" />
              <div>
                <h3 className="font-bold text-gray-900">Location</h3>
                <p className="text-gray-600">Egypt</p>
              </div>
            </div>

            <a
              href="https://wa.me/201095014554"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition"
            >
              Contact on WhatsApp
            </a>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Send Us a Message
            </h2>
            <p className="text-gray-600 mb-6">
              Fill the form and we’ll get back to you as soon as possible.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="5"
                required
              ></textarea>

              {status && <p className="text-red-500">{status}</p>}

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
