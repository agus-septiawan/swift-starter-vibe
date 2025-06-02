
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-handwrite text-4xl md:text-5xl text-warm font-bold mb-8 animate-fade-in">
            Mari Berkolaborasi
          </h2>
          <p className="font-sans text-xl text-sketch/70 mb-12 animate-fade-in-up">
            Punya project menarik? Mari diskusikan bagaimana kita bisa bekerja sama!
          </p>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8 animate-fade-in-up">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-warm/10 rounded-full flex items-center justify-center">
                  <Mail className="text-warm" size={20} />
                </div>
                <div className="text-left">
                  <h3 className="font-handwrite text-xl text-warm font-bold">Email</h3>
                  <p className="font-sans text-sketch/70">muhammad.mahathir@email.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-warm/10 rounded-full flex items-center justify-center">
                  <Phone className="text-warm" size={20} />
                </div>
                <div className="text-left">
                  <h3 className="font-handwrite text-xl text-warm font-bold">Telepon</h3>
                  <p className="font-sans text-sketch/70">+62 123 456 789</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-warm/10 rounded-full flex items-center justify-center">
                  <MapPin className="text-warm" size={20} />
                </div>
                <div className="text-left">
                  <h3 className="font-handwrite text-xl text-warm font-bold">Lokasi</h3>
                  <p className="font-sans text-sketch/70">Indonesia</p>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="flex gap-4 pt-4">
                <a href="#" className="w-10 h-10 bg-warm/10 rounded-full flex items-center justify-center hover:bg-warm hover:text-white transition-colors">
                  <Github size={18} />
                </a>
                <a href="#" className="w-10 h-10 bg-warm/10 rounded-full flex items-center justify-center hover:bg-warm hover:text-white transition-colors">
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="animate-fade-in-up delay-200">
              <form className="space-y-6">
                <div>
                  <input 
                    type="text" 
                    placeholder="Nama Anda"
                    className="w-full px-4 py-3 border-2 border-warm/20 rounded-lg focus:border-warm outline-none font-sans"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Email Anda"
                    className="w-full px-4 py-3 border-2 border-warm/20 rounded-lg focus:border-warm outline-none font-sans"
                  />
                </div>
                <div>
                  <textarea 
                    placeholder="Pesan Anda"
                    rows={5}
                    className="w-full px-4 py-3 border-2 border-warm/20 rounded-lg focus:border-warm outline-none font-sans resize-none"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-warm text-cream px-6 py-3 rounded-lg font-sketch text-lg hover:bg-warm/90 transition-colors"
                >
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
