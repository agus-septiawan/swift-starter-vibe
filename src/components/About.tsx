
const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-handwrite text-4xl md:text-5xl text-warm font-bold mb-8 animate-fade-in">
            Tentang Saya
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-left animate-fade-in-up">
              <p className="font-sans text-lg text-sketch/80 leading-relaxed">
                Saya adalah seorang Creative Developer & Designer yang passionate dalam menciptakan pengalaman digital yang menarik dan fungsional.
              </p>
              <p className="font-sans text-lg text-sketch/80 leading-relaxed">
                Dengan keahlian dalam coding dan design, saya membantu mewujudkan ide-ide kreatif menjadi aplikasi web yang user-friendly dan estetik.
              </p>
            </div>
            <div className="animate-fade-in-up delay-200">
              <div className="bg-cream p-8 rounded-lg shadow-lg">
                <h3 className="font-handwrite text-2xl text-warm font-bold mb-4">Keahlian</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-sketch text-sketch">React & TypeScript</span>
                    <span className="font-handwrite text-warm">90%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-sketch text-sketch">UI/UX Design</span>
                    <span className="font-handwrite text-warm">85%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-sketch text-sketch">Web Development</span>
                    <span className="font-handwrite text-warm">95%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
