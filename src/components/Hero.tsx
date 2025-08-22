import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-grooming.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="section-padding bg-gradient-hero min-h-[80vh] flex items-center">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Gentle, Stylish
              <span className="text-primary block">Grooming</span>
              for Happy Pets
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0">
              From baths to full grooms, we keep your pets comfy, clean, and camera-ready. 
              Professional care with love and attention to detail.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={scrollToContact}
                size="lg"
                className="btn-primary"
              >
                Book an Appointment
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                asChild
                className="btn-secondary"
              >
                <a href="tel:2104404084">Call Us Now</a>
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative fade-in">
            <div className="relative">
              <img
                src={heroImage}
                alt="Happy dog getting groomed at Pawsh Pet Salon"
                className="rounded-3xl shadow-strong w-full h-auto"
                width="600"
                height="400"
              />
              <div className="absolute inset-0 rounded-3xl bg-gradient-primary opacity-10"></div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-6 shadow-medium border border-border/50">
              <div className="text-2xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Happy Pets</div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-card rounded-2xl p-6 shadow-medium border border-border/50">
              <div className="text-2xl font-bold text-primary">5★</div>
              <div className="text-sm text-muted-foreground">Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;