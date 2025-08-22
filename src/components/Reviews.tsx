import { Star } from "lucide-react";

const Reviews = () => {
  const reviews = [
    {
      name: "Stelios M.",
      text: "Querelle, my 47kg Dogo Argentino, was completely satisfied with the care he received, even though bathing isn't his favorite. Alexandra was exceptional in handling and communicating with large breed dogs.",
      rating: 5,
      date: "1 day ago"
    },
    {
      name: "Eleni St.",
      text: "Excellent work, very friendly environment, very bright and well-maintained space! As for Alexandra, I have no words - she took great care of Aritha and treated her as if she were her own! Thank you so much and we will definitely be back!",
      rating: 5,
      date: "2 weeks ago"
    },
    {
      name: "Giota S.",
      text: "For us, bathing is a stressful situation, but Alexandra managed to make it enjoyable with her positive approach! The space is open and bright, and the prices are very reasonable for the times we live in. Thank you Alexandra, you definitely won us over!",
      rating: 5,
      date: "3 weeks ago"
    },
    {
      name: "Galia M.",
      text: "I took my dog to Alexandra's new grooming shop and was very pleased. The space is clean and Alexandra has incredible patience and love for animals. The result was perfect and my dog came out happy and well-groomed. We will definitely go back.",
      rating: 5,
      date: "9 hours ago"
    },
    {
      name: "Christos P.",
      text: "I have the best things to say because Rocky was very calm after the grooming, which had never happened before. Alexandra treated him perfectly and it showed! She explained in detail how she handled his behavior as I had warned her that he is difficult and gets very anxious during grooming. Everything went perfectly, thank you for everything!",
      rating: 5,
      date: "23 hours ago"
    },
    {
      name: "Nitsa F.",
      text: "We were completely satisfied with Alexandra's services! She took care of our little one with professionalism and patience! Very beautiful and clean space that we will visit again! Thank you! Good work!",
      rating: 5,
      date: "1 week ago"
    },
  ];

  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div className="flex space-x-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section id="reviews" className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What Our <span className="text-primary">Customers</span> Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what pet parents have to say about 
            their experience at Pawsh Pet Beauty Salon.
          </p>
          
          {/* Overall Rating */}
          <div className="mt-8 flex items-center justify-center space-x-4">
            <div className="flex items-center space-x-2">
              <StarRating rating={5} />
              <span className="text-2xl font-bold text-primary">5.0</span>
            </div>
            <div className="text-muted-foreground">
              Based on 6+ Google Reviews
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div 
              key={review.name} 
              className={`card-elegant fade-in hover:scale-105 transition-transform duration-300`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-foreground">{review.name}</h3>
                  <p className="text-sm text-muted-foreground">{review.date}</p>
                </div>
                <StarRating rating={review.rating} />
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                "{review.text}"
              </p>
              
              <div className="mt-6 pt-4 border-t border-border/50">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium text-primary">Verified Google Review</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 fade-in">
          <p className="text-muted-foreground mb-6">
            Join our happy customers and give your pet the care they deserve
          </p>
          <a 
            href="https://www.google.com/search?q=pawsh+pet+salon+reviews" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-primary hover:text-primary-hover transition-colors duration-300 font-medium"
          >
            <span>Read More Reviews on Google</span>
            <Star className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;