import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Briefcase, MapPin, Clock, Heart, Users, Rocket, Coffee, Trophy } from "lucide-react";

const jobOpenings = [
  {
    id: 1,
    title: "Senior Game Designer",
    department: "Game Development",
    location: "Remote",
    type: "Full-time",
    description: "Lead the design of innovative gameplay mechanics for our next hit title. Work with a passionate team to create unforgettable gaming experiences.",
  },
  {
    id: 2,
    title: "3D Character Artist",
    department: "Art",
    location: "Ho Chi Minh City",
    type: "Full-time",
    description: "Create stunning 3D characters that bring our games to life. Join our talented art team and push the boundaries of visual excellence.",
  },
  {
    id: 3,
    title: "Backend Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "Build and scale backend systems that support millions of concurrent players. Work with cutting-edge cloud technologies.",
  },
  {
    id: 4,
    title: "Game Economy Designer",
    department: "Game Development",
    location: "Hybrid",
    type: "Full-time",
    description: "Design and balance in-game economies that are engaging and fair. Use data to drive decisions and create sustainable game systems.",
  },
  {
    id: 5,
    title: "Community Manager",
    department: "Marketing",
    location: "Remote",
    type: "Full-time",
    description: "Be the voice of GPlay. Build and nurture our global gaming community across multiple platforms and social channels.",
  },
  {
    id: 6,
    title: "QA Engineer",
    department: "Quality Assurance",
    location: "Ha Noi",
    type: "Full-time",
    description: "Ensure our games meet the highest quality standards. Design test strategies and work closely with development teams.",
  },
];

const benefits = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive healthcare for you and your family",
  },
  {
    icon: Coffee,
    title: "Flexible Work",
    description: "Remote-first culture with flexible hours",
  },
  {
    icon: Rocket,
    title: "Growth",
    description: "Professional development and learning budget",
  },
  {
    icon: Users,
    title: "Team Events",
    description: "Regular team building and social activities",
  },
  {
    icon: Trophy,
    title: "Performance Bonus",
    description: "Competitive salary with performance bonuses",
  },
  {
    icon: Briefcase,
    title: "Equipment",
    description: "Top-tier hardware and software tools",
  },
];

const Careers = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <section className="container px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center space-y-6 animate-fade-up max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight">
              Join Our Team
            </h1>
            <p className="text-xl text-muted-foreground">
              Build legendary games with passionate people who love what they do
            </p>
          </div>
        </section>

        <section className="container px-4 sm:px-6 lg:px-8 mb-24">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-black mb-8">Why GPlay?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <Card
                    key={benefit.title}
                    className="border-2 hover:border-primary/50 transition-all hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] animate-scale-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardContent className="p-6 space-y-3">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold">{benefit.title}</h3>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section className="container px-4 sm:px-6 lg:px-8 mb-24">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-black">Open Positions</h2>
              <Badge variant="outline" className="text-lg px-4 py-2">
                {jobOpenings.length} Openings
              </Badge>
            </div>
            
            <div className="space-y-4">
              {jobOpenings.map((job, index) => (
                <Card
                  key={job.id}
                  className="border-2 hover:border-primary/50 transition-all hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] animate-fade-up"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                      <div className="space-y-3 flex-1">
                        <div>
                          <h3 className="text-2xl font-bold mb-2">{job.title}</h3>
                          <p className="text-muted-foreground">{job.description}</p>
                        </div>
                        
                        <div className="flex flex-wrap gap-3 text-sm">
                          <Badge variant="outline" className="gap-1">
                            <Briefcase className="h-3 w-3" />
                            {job.department}
                          </Badge>
                          <Badge variant="outline" className="gap-1">
                            <MapPin className="h-3 w-3" />
                            {job.location}
                          </Badge>
                          <Badge variant="outline" className="gap-1">
                            <Clock className="h-3 w-3" />
                            {job.type}
                          </Badge>
                        </div>
                      </div>
                      
                      <Button size="lg" className="lg:w-auto w-full">
                        Apply Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="container px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-3xl p-12 text-center space-y-6 max-w-4xl mx-auto">
            <h2 className="text-4xl font-black">Don't See Your Role?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're always looking for talented people. Send us your resume and let's talk about future opportunities.
            </p>
            <Button size="lg" variant="outline" className="text-lg px-8">
              Send General Application
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Careers;
