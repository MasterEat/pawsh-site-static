import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="mb-8">
          <div className="text-6xl font-bold text-primary mb-4">404</div>
          <h1 className="text-2xl font-semibold text-foreground mb-4">Oops! Page not found</h1>
          <p className="text-muted-foreground mb-8">
            The page you're looking for doesn't exist. Let's get you back to our homepage.
          </p>
        </div>
        
        <div className="space-y-4">
          <Button 
            asChild
            size="lg"
            className="btn-primary"
          >
            <a href="/">Return to Home</a>
          </Button>
          
          <div className="flex justify-center space-x-6 text-sm text-muted-foreground">
            <a href="#services" className="hover:text-primary transition-colors">Services</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
            <a href="tel:2104404084" className="hover:text-primary transition-colors">Call Us</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
