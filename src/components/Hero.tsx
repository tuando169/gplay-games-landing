import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import heroImage from "@/assets/hero-characters.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div 
        className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.15
        }}
      />
      
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-up">
          <h1 className="text-7xl sm:text-8xl md:text-9xl font-black tracking-tighter">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-glow">
              GPLAY
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl md:text-3xl font-medium text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Creators of legendary games that bring millions together
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:shadow-[0_0_50px_rgba(59,130,246,0.7)] transition-all text-lg px-8 py-6 rounded-full"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Video
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-foreground/20 hover:border-primary hover:text-primary text-lg px-8 py-6 rounded-full transition-all"
            >
              Explore Games
            </Button>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { label: "Games", value: "7+" },
            { label: "Players", value: "500M+" },
            { label: "Countries", value: "150+" },
            { label: "Years", value: "10+" },
          ].map((stat, index) => (
            <div 
              key={stat.label} 
              className="text-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all hover:scale-105 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-3xl sm:text-4xl font-black text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
