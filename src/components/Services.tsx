import { Scissors, Droplets, Heart, Sparkles, Wind, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Scissors,
      title: "Full Groom",
      description: "Complete grooming service including wash, cut, nail trim, and styling. Your pet will look and feel amazing.",
      duration: "2-3 hours",
    },
    {
      icon: Droplets,
      title: "Bath & Brush",
      description: "Gentle cleansing bath with premium products, thorough brushing, and basic hygiene care.",
      duration: "1-1.5 hours",
    },
    {
      icon: Heart,
      title: "Puppy Package",
      description: "Special gentle introduction to grooming for puppies. Building positive associations with care.",
      duration: "45 min - 1 hour",
    },
    {
      icon: Sparkles,
      title: "Nail Trimming",
      description: "Professional nail care with precision trimming and filing for your pet's comfort and health.",
      duration: "15-30 min",
    },
    {
      icon: Wind,
      title: "Deshedding",
      description: "Specialized treatment to reduce shedding using professional tools and techniques.",
      duration: "30-45 min",
    },
    {
      icon: Crown,
      title: "Spa Add-ons",
      description: "Luxury treatments including aromatherapy, special shampoos, and relaxation sessions.",
      duration: "Additional 30 min",
    },
  ];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We offer comprehensive grooming services tailored to your pet's needs, 
            ensuring they look great and feel comfortable throughout the process.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={service.title} 
                className={`card-elegant fade-in group hover:scale-105 transition-transform duration-300`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-4">
                  <div className="bg-primary/10 rounded-2xl p-3 mr-4">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <span className="text-sm text-muted-foreground">{service.duration}</span>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <Button 
                  onClick={scrollToContact}
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                >
                  Learn More
                </Button>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12 fade-in">
          <p className="text-muted-foreground mb-6">
            All services include a complimentary health check and personalized care plan
          </p>
          <Button 
            onClick={scrollToContact}
            size="lg"
            className="btn-primary"
          >
            Book Your Service Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;