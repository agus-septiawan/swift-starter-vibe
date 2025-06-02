
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });

    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "muhammad.mahathir@email.com",
      href: "mailto:muhammad.mahathir@email.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+62 123 456 7890",
      href: "tel:+6212345678900"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Indonesia",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white relative">
      {/* Decorative sketchy border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-warm transform -rotate-1"></div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="font-handwrite text-4xl md:text-6xl text-warm font-bold mb-4 transform hover:animate-wiggle cursor-default">
              Let's Connect
            </h2>
            <p className="font-sans text-xl text-sketch/70 max-w-2xl mx-auto">
              Have a project in mind? I'd love to hear about it and discuss how we can work together.
            </p>
            <div className="w-32 h-1 bg-sketch mx-auto mt-4 transform rotate-1"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="font-handwrite text-3xl text-sketch font-bold mb-6">
                  Get in Touch
                </h3>
                <p className="font-sans text-lg text-sketch/70 leading-relaxed mb-8">
                  I'm always excited to work on new projects and collaborate with 
                  creative people. Whether you have a specific project in mind or 
                  just want to say hello, feel free to reach out!
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="group flex items-center gap-4 p-4 bg-cream border-2 border-warm/20 hover:border-warm transition-all duration-300 transform hover:scale-105 hover:rotate-1"
                  >
                    <div className="bg-warm text-cream p-3 group-hover:bg-sketch transition-colors">
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

            {/* Contact Form */}
            <div className="bg-cream p-8 border-2 border-warm/20">
              <h3 className="font-handwrite text-3xl text-sketch font-bold mb-6">
                Send a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
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
                  className="group w-full bg-warm text-cream py-4 px-6 font-sketch text-lg hover:bg-sketch transition-all duration-300 transform hover:scale-105 hover:rotate-1 flex items-center justify-center gap-2"
                >
                  Send Message
                  <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom decorative border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-warm transform rotate-1"></div>
    </section>
  );
};

export default Contact;
