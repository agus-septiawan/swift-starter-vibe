import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  PenTool,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });

    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "muhammad.mahathir.id@email.com",
      href: "mailto:muhammad.mahathir@email.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+62 813 9718 1617",
      href: "tel:+6281397181617",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Indonesia",
      href: "#",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white relative">
      {/* Hand-drawn style top border */}
      <svg
        className="absolute top-0 left-0 right-0 w-full h-4"
        viewBox="0 0 1200 20"
        preserveAspectRatio="none"
      >
        <path
          d="M0,8 Q300,15 600,10 T1200,12"
          stroke="#8B4513"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
      </svg>

      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Title with message doodles */}
          <div className="text-center mb-16 relative">
            <h2 className="font-handwrite text-4xl md:text-6xl text-warm font-bold mb-4 relative">
              Let's Connect
              {/* Message bubble doodle */}
              <MessageCircle
                className="absolute -top-6 -right-20 text-warm opacity-50 transform rotate-12"
                size={28}
              />
              <PenTool
                className="absolute -top-4 -left-16 text-warm opacity-40 transform -rotate-12"
                size={20}
              />
            </h2>
            <p className="font-sans text-xl text-sketch/70 max-w-2xl mx-auto">
              Have a project in mind? I'd love to hear about it and discuss how
              we can work together.
            </p>

            {/* Hand-drawn underline */}
            <svg
              className="mx-auto mt-4"
              width="180"
              height="20"
              viewBox="0 0 180 20"
            >
              <path
                d="M10,15 Q55,8 100,12 T170,10"
                stroke="#2D2D2D"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d="M15,12 Q60,18 105,14"
                stroke="#2D2D2D"
                strokeWidth="1"
                fill="none"
                strokeLinecap="round"
                opacity="0.4"
              />
            </svg>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info with decorative elements */}
            <div className="space-y-8 relative">
              {/* Coffee ring stain */}
              <div className="absolute top-0 right-8 w-12 h-12 border-2 border-warm/20 rounded-full opacity-30"></div>

              <div>
                <h3 className="font-handwrite text-3xl text-sketch font-bold mb-6 relative">
                  Get in Touch
                  {/* Small arrow doodle */}
                  <svg
                    className="absolute -right-8 top-0 w-6 h-6 text-warm opacity-50"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M5,10 L15,10 M12,7 L15,10 L12,13"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                </h3>
                <p className="font-sans text-lg text-sketch/70 leading-relaxed mb-8">
                  I'm always excited to work on new projects and collaborate
                  with creative people. Whether you have a specific project in
                  mind or just want to say hello, feel free to reach out!
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center gap-4 p-4 bg-cream border-2 border-warm/20 transition-colors duration-200 relative"
                  >
                    {/* Small decorative corner */}
                    <div className="absolute top-1 right-1 w-2 h-2 bg-warm/20 transform rotate-45"></div>

                    <div className="bg-warm text-cream p-3 transition-colors">
                      <info.icon size={24} />
                    </div>
                    <div>
                      <div className="font-sketch text-sm text-sketch/60 uppercase tracking-wide">
                        {info.label}
                      </div>
                      <div className="font-sans text-lg text-sketch font-medium">
                        {info.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Form with paper-like styling */}
            <div className="bg-cream p-8 border-2 border-warm/20 relative">
              {/* Paper holes effect */}
              <div className="absolute left-4 top-8 w-2 h-2 bg-white rounded-full border border-warm/30"></div>
              <div className="absolute left-4 top-16 w-2 h-2 bg-white rounded-full border border-warm/30"></div>
              <div className="absolute left-4 top-24 w-2 h-2 bg-white rounded-full border border-warm/30"></div>

              {/* Red margin line */}
              <div className="absolute left-12 top-0 bottom-0 w-px bg-red-300 opacity-30"></div>

              <h3 className="font-handwrite text-3xl text-sketch font-bold mb-6 ml-4">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6 ml-4">
                <div>
                  <label className="block font-sketch text-sketch mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 bg-white border-2 border-warm/30 focus:border-warm outline-none font-sans transition-colors"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block font-sketch text-sketch mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 bg-white border-2 border-warm/30 focus:border-warm outline-none font-sans transition-colors"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block font-sketch text-sketch mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full p-3 bg-white border-2 border-warm/30 focus:border-warm outline-none font-sans transition-colors resize-vertical"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-warm text-cream py-4 px-6 font-sketch text-lg transition-colors duration-200 flex items-center justify-center gap-2 relative"
                >
                  Send Message
                  <Send size={20} />
                  {/* Small paper plane doodle */}
                  <svg
                    className="absolute -top-3 -right-3 w-4 h-4 text-cream opacity-40"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2,10 L18,2 L10,18 L8,12 Z" fill="currentColor" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom hand-drawn border */}
      <svg
        className="absolute bottom-0 left-0 right-0 w-full h-4"
        viewBox="0 0 1200 20"
        preserveAspectRatio="none"
      >
        <path
          d="M0,12 Q300,8 600,15 T1200,10"
          stroke="#8B4513"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    </section>
  );
};

export default Contact;
