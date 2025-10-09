import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Heart, Zap, Globe, Users, Trophy, Rocket, Star } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Players First",
    description: "Every decision we make starts with our players. Their experience, enjoyment, and feedback drive everything we do.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "We constantly push boundaries and experiment with new ideas to create unique gaming experiences.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Great games are built by great teams. We believe in open communication and working together.",
  },
  {
    icon: Trophy,
    title: "Excellence",
    description: "We set high standards and strive for quality in every aspect of our games and company culture.",
  },
];

const milestones = [
  {
    year: "2015",
    title: "GPlay Founded",
    description: "Started with a small team of passionate game developers in Ho Chi Minh City",
  },
  {
    year: "2016",
    title: "First Game Launch",
    description: "Released our first mobile game, reaching 1 million downloads in the first month",
  },
  {
    year: "2018",
    title: "Global Expansion",
    description: "Expanded to international markets with games available in 50+ countries",
  },
  {
    year: "2020",
    title: "100M Players",
    description: "Reached the milestone of 100 million players across all our games",
  },
  {
    year: "2022",
    title: "Award Winning",
    description: "Won multiple industry awards for game design and innovation",
  },
  {
    year: "2024",
    title: "500M+ Players",
    description: "Now serving over 500 million players worldwide with 7+ hit games",
  },
];

const stats = [
  { icon: Users, value: "500M+", label: "Active Players" },
  { icon: Globe, value: "150+", label: "Countries" },
  { icon: Rocket, value: "7+", label: "Games" },
  { icon: Star, value: "4.8", label: "Avg Rating" },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <section className="container px-4 sm:px-6 lg:px-8 mb-24">
          <div className="text-center space-y-6 animate-fade-up max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight">
              About GPlay
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We're a passionate team of game developers, artists, and dreamers dedicated to creating 
              legendary gaming experiences that bring people together from around the world.
            </p>
          </div>
        </section>

        <section className="container px-4 sm:px-6 lg:px-8 mb-24">
          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card
                  key={stat.label}
                  className="border-2 hover:border-primary/50 transition-all hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6 text-center space-y-3">
                    <Icon className="h-10 w-10 text-primary mx-auto" />
                    <div className="text-4xl font-black text-primary">{stat.value}</div>
                    <div className="text-sm font-medium text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        <section className="container px-4 sm:px-6 lg:px-8 mb-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 mb-4">
                <Target className="h-8 w-8 text-primary" />
                <h2 className="text-4xl font-black">Our Mission</h2>
              </div>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                To create games that transcend boundaries, cultures, and languages—bringing joy, 
                excitement, and connection to millions of players worldwide.
              </p>
            </div>

            <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-3xl p-12 text-center space-y-4">
              <h3 className="text-3xl font-black">Our Vision</h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                To be the most beloved game company in the world, known for creating unforgettable 
                experiences that stand the test of time and inspire the next generation of gamers.
              </p>
            </div>
          </div>
        </section>

        <section className="container px-4 sm:px-6 lg:px-8 mb-24">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-black mb-12 text-center">Our Values</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card
                    key={value.title}
                    className="border-2 hover:border-primary/50 transition-all hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] animate-scale-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardContent className="p-8 space-y-4">
                      <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon className="h-7 w-7 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold">{value.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section className="container px-4 sm:px-6 lg:px-8 mb-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-black mb-12 text-center">Our Journey</h2>
            <div className="space-y-6">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className="flex gap-6 animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0">
                    <Badge className="text-lg px-4 py-2 bg-primary text-primary-foreground">
                      {milestone.year}
                    </Badge>
                  </div>
                  <Card className="flex-1 border-2 hover:border-primary/50 transition-all">
                    <CardContent className="p-6 space-y-2">
                      <h3 className="text-xl font-bold">{milestone.title}</h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-3xl p-12 text-center space-y-6 max-w-4xl mx-auto">
            <h2 className="text-4xl font-black">Join Our Story</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're always looking for talented, passionate people to join our team. 
              Be part of creating the next generation of legendary games.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a href="/careers">
                <button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-4 rounded-full shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:shadow-[0_0_50px_rgba(59,130,246,0.7)] transition-all">
                  View Open Positions
                </button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
