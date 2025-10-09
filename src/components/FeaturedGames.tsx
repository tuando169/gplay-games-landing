import { Card, CardContent } from "@/components/ui/card";
import game1 from "@/assets/game-1.jpg";
import game2 from "@/assets/game-2.jpg";
import game3 from "@/assets/game-3.jpg";
import { Gamepad2, Zap, Heart } from "lucide-react";

const games = [
  {
    id: 1,
    title: "Realm Warriors",
    description: "Epic fantasy battles with magical powers",
    image: game1,
    category: "Action RPG",
    icon: Gamepad2,
    color: "from-purple-500 to-blue-500"
  },
  {
    id: 2,
    title: "Neon Rush",
    description: "High-speed futuristic racing",
    image: game2,
    category: "Racing",
    icon: Zap,
    color: "from-orange-500 to-cyan-500"
  },
  {
    id: 3,
    title: "Bubble Quest",
    description: "Charming puzzle adventures",
    image: game3,
    category: "Puzzle",
    icon: Heart,
    color: "from-pink-500 to-yellow-500"
  },
];

const FeaturedGames = () => {
  return (
    <section id="games" className="py-24 bg-muted/30">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4 animate-fade-up">
          <h2 className="text-5xl sm:text-6xl font-black tracking-tight">
            Our Games
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience worlds that millions call home
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {games.map((game, index) => {
            const Icon = game.icon;
            return (
              <Card
                key={game.id}
                className="group overflow-hidden border-2 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(59,130,246,0.3)] animate-scale-in cursor-pointer"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden aspect-video">
                    <img
                      src={game.image}
                      alt={game.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${game.color} opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
                    
                    <div className="absolute top-4 left-4">
                      <div className="flex items-center gap-2 bg-background/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
                        <Icon className="h-4 w-4 text-primary" />
                        <span className="text-sm font-semibold">{game.category}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                      {game.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {game.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedGames;
