import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import game1 from "@/assets/game-1.jpg";
import game2 from "@/assets/game-2.jpg";
import game3 from "@/assets/game-3.jpg";
import { Gamepad2, Zap, Heart, Download, Users, Star } from "lucide-react";

const allGames = [
  {
    id: 1,
    title: "Realm Warriors",
    description: "Epic fantasy battles with magical powers and legendary heroes",
    fullDescription: "Dive into an immersive fantasy world where magic meets strategy. Build your army, master powerful spells, and conquer kingdoms in this epic multiplayer battle game.",
    image: game1,
    category: "Action RPG",
    icon: Gamepad2,
    color: "from-purple-500 to-blue-500",
    players: "50M+",
    rating: 4.8,
    downloads: "100M+",
    status: "Live"
  },
  {
    id: 2,
    title: "Neon Rush",
    description: "High-speed futuristic racing through cyberpunk cities",
    fullDescription: "Experience the thrill of extreme speed in a neon-lit future. Customize your vehicles, compete in tournaments, and dominate the leaderboards.",
    image: game2,
    category: "Racing",
    icon: Zap,
    color: "from-orange-500 to-cyan-500",
    players: "30M+",
    rating: 4.6,
    downloads: "75M+",
    status: "Live"
  },
  {
    id: 3,
    title: "Bubble Quest",
    description: "Charming puzzle adventures with adorable characters",
    fullDescription: "Join cute characters on a colorful journey through hundreds of challenging puzzle levels. Match, pop, and solve your way to victory!",
    image: game3,
    category: "Puzzle",
    icon: Heart,
    color: "from-pink-500 to-yellow-500",
    players: "80M+",
    rating: 4.9,
    downloads: "150M+",
    status: "Live"
  },
  {
    id: 4,
    title: "Shadow Legends",
    description: "Dark fantasy RPG with intense combat",
    fullDescription: "Enter a world of shadows and legends. Battle fearsome monsters, collect legendary weapons, and become the ultimate warrior.",
    image: game1,
    category: "Action RPG",
    icon: Gamepad2,
    color: "from-red-500 to-purple-500",
    players: "40M+",
    rating: 4.7,
    downloads: "90M+",
    status: "Live"
  },
  {
    id: 5,
    title: "Sky Strikers",
    description: "Aerial combat in stunning environments",
    fullDescription: "Take to the skies in the most thrilling aerial combat game. Pilot legendary aircraft and dominate the battlefield.",
    image: game2,
    category: "Action",
    icon: Zap,
    color: "from-blue-500 to-cyan-500",
    players: "25M+",
    rating: 4.5,
    downloads: "60M+",
    status: "Live"
  },
  {
    id: 6,
    title: "Mystery Mansion",
    description: "Solve mysteries in a haunted mansion",
    fullDescription: "Uncover secrets, solve puzzles, and reveal the truth behind the mysterious mansion. A captivating story-driven adventure.",
    image: game3,
    category: "Adventure",
    icon: Heart,
    color: "from-purple-500 to-pink-500",
    players: "15M+",
    rating: 4.8,
    downloads: "40M+",
    status: "Live"
  },
  {
    id: 7,
    title: "Project Phoenix",
    description: "Next-generation multiplayer experience",
    fullDescription: "Our most ambitious project yet. Revolutionary gameplay mechanics and stunning visuals. Coming soon!",
    image: game1,
    category: "MMO",
    icon: Gamepad2,
    color: "from-orange-500 to-red-500",
    players: "TBA",
    rating: 0,
    downloads: "Pre-register",
    status: "Coming Soon"
  },
];

const Games = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <section className="container px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center space-y-4 animate-fade-up max-w-3xl mx-auto">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight">
              Our Games
            </h1>
            <p className="text-xl text-muted-foreground">
              Explore our collection of legendary games played by millions worldwide
            </p>
          </div>
        </section>

        <section className="container px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {allGames.map((game, index) => {
              const Icon = game.icon;
              return (
                <Card
                  key={game.id}
                  className="group overflow-hidden border-2 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(59,130,246,0.3)] animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden aspect-video">
                      <img
                        src={game.image}
                        alt={game.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${game.color} opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
                      
                      <div className="absolute top-4 left-4 flex gap-2">
                        <Badge className="bg-background/90 backdrop-blur-sm text-foreground border-0">
                          <Icon className="h-3 w-3 mr-1 text-primary" />
                          {game.category}
                        </Badge>
                        {game.status === "Coming Soon" && (
                          <Badge className="bg-accent/90 backdrop-blur-sm text-accent-foreground border-0">
                            Coming Soon
                          </Badge>
                        )}
                      </div>
                    </div>

                    <div className="p-6 space-y-4">
                      <div>
                        <h3 className="text-2xl font-bold group-hover:text-primary transition-colors mb-2">
                          {game.title}
                        </h3>
                        <p className="text-muted-foreground text-sm line-clamp-2">
                          {game.fullDescription}
                        </p>
                      </div>

                      {game.status === "Live" && (
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            <span>{game.players}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-primary text-primary" />
                            <span>{game.rating}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Download className="h-4 w-4" />
                            <span>{game.downloads}</span>
                          </div>
                        </div>
                      )}

                      <Button 
                        className="w-full"
                        variant={game.status === "Coming Soon" ? "outline" : "default"}
                      >
                        {game.status === "Coming Soon" ? "Pre-Register" : "Play Now"}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        <section className="container px-4 sm:px-6 lg:px-8 mt-24">
          <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-3xl p-12 text-center space-y-6 max-w-4xl mx-auto">
            <h2 className="text-4xl font-black">Join Millions of Players</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Download our games and become part of the global GPlay community
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                <Download className="mr-2 h-5 w-5" />
                Download on iOS
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                <Download className="mr-2 h-5 w-5" />
                Download on Android
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Games;
