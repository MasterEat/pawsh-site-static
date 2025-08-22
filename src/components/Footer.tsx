import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0 opacity-80" />
                <div>
                  <p>Agiás Glykérias 62</p>
                  <p>Galátsi 111 47</p>
                  <p>Athens, Greece</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 opacity-80" />
                <a href="tel:2104404084" className="hover:text-accent transition-colors duration-300">
                  210 440 4084
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 opacity-80" />
                <a href="mailto:pawsh@gmail.com" className="hover:text-accent transition-colors duration-300">
                  pawsh@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Logo & Social */}
          <div className="text-center">
            <div className="mb-6">
              <img
                src="/lovable-uploads/2977abfa-0391-4641-9972-da3cc39b2361.png"
                alt="Pawsh Pet Beauty Salon"
                className="h-20 w-auto mx-auto opacity-90"
              />
            </div>
            
            <div className="flex justify-center space-x-6 mb-6">
              <a
                href="https://www.facebook.com/profile.php?id=61578078265850"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-foreground/10 p-3 rounded-2xl hover:bg-primary-foreground/20 transition-colors duration-300"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/pawsh_pet_salon/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-foreground/10 p-3 rounded-2xl hover:bg-primary-foreground/20 transition-colors duration-300"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>

            <p className="text-sm opacity-80 max-w-xs mx-auto">
              Professional pet grooming with love, care, and attention to detail since 2024.
            </p>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Opening Hours</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 opacity-80" />
                <div className="flex-1">
                  <div className="flex justify-between">
                    <span>Tuesday - Friday</span>
                    <span>10:00 - 18:00</span>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between pl-8">
                <span>Saturday</span>
                <span>10:00 - 15:00</span>
              </div>
              
              <div className="flex justify-between pl-8">
                <span>Sunday - Monday</span>
                <span className="text-accent">Closed</span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-primary-foreground/10 rounded-2xl">
              <p className="text-sm">
                <strong>Need an appointment?</strong><br />
                Call us or send a message through our contact form.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
            <p className="opacity-80">
              © 2024 Pawsh Pet Beauty Salon. All rights reserved.
            </p>
            <p className="opacity-80 mt-2 sm:mt-0">
              Made with ❤️ for happy pets and their families
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;