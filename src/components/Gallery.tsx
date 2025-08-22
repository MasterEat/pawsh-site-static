import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import happyPets1 from "@/assets/happy-pets-1.jpg";
import happyPets2 from "@/assets/happy-pets-2.jpg";
import happyPets3 from "@/assets/happy-pets-3.jpg";

const Gallery = () => {
  const images = [
    {
      src: happyPets1,
      alt: "Happy groomed pets at Pawsh Salon",
      title: "Beautiful Results"
    },
    {
      src: happyPets2,
      alt: "Persian cat getting pampered",
      title: "Gentle Care"
    },
    {
      src: happyPets3,
      alt: "Professional nail trimming service",
      title: "Professional Service"
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <section id="gallery" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-primary">Gallery</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See the amazing transformations and happy pets that make our work so rewarding. 
            Every grooming session is a work of art.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto fade-in">
          <div className="relative overflow-hidden rounded-3xl shadow-strong">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((image, index) => (
                <div key={index} className="w-full flex-shrink-0 relative">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-96 md:h-[500px] object-cover"
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-2xl font-semibold mb-2">{image.title}</h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <Button
              variant="outline"
              size="icon"
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-card/80 backdrop-blur-sm border-border/50 hover:bg-card"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-card/80 backdrop-blur-sm border-border/50 hover:bg-card"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>

            {/* Indicators */}
            <div className="absolute bottom-6 right-6 flex space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-white' 
                      : 'bg-white/50 hover:bg-white/80'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Auto-play indicator */}
          <div className="flex justify-center mt-6">
            <div className="flex items-center space-x-2 text-muted-foreground text-sm">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span>Auto-playing gallery</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;