import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { ArrowDown, Download, Mail } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  const handleScrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadCV = () => {
    // Create a dummy CV download for now
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'DataAnalyst_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(33, 41, 52, 0.8), rgba(33, 41, 52, 0.8)), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="container-width section-padding text-center z-10 relative">
        <div className="max-w-4xl mx-auto">
          {/* Profile Picture and Introduction */}
          <div className="mb-8 animate-fade-in">
            {/* Profile Picture */}
            <div className="mb-6 flex justify-center">
              <Avatar className="w-32 h-32 md:w-40 md:h-40 border-4 border-accent shadow-2xl hover:scale-105 transition-transform duration-300">
                <AvatarImage 
                  src="https://i.postimg.cc/9MZc9RfQ/IMG-20250718-202233.jpg" 
                  alt="Ayush Singh - Data Analytics Professional" 
                  className="object-cover"
                />
                <AvatarFallback className="bg-accent text-white text-2xl font-bold">AS</AvatarFallback>
              </Avatar>
            </div>
            
            <h2 className="text-lg md:text-xl text-accent font-medium mb-4">
              Hello, I'm Ayush Singh
            </h2>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Data Analytics
              <span className="block text-gradient">Professional</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Passionate about transforming raw data into actionable insights. 
              Recently completed comprehensive Data Analytics training and eager 
              to apply my skills in real-world scenarios.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              onClick={handleScrollToContact}
              size="lg"
              className="button-gradient text-white px-8 py-3 text-lg font-medium"
            >
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
            </Button>
            <Button
              onClick={handleDownloadCV}
              size="lg"
              variant="outline"
              className="px-8 py-3 text-lg font-medium border-2 border-accent text-accent hover:bg-accent hover:text-white"
            >
              <Download className="w-5 h-5 mr-2" />
              Download CV
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <button
              onClick={handleScrollToAbout}
              className="animate-bounce p-2 rounded-full border-2 border-accent text-accent hover:bg-accent hover:text-white transition-colors duration-300"
            >
              <ArrowDown className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;