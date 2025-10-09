import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Search, MessageCircle, Mail, BookOpen, HelpCircle } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    category: "Account & Login",
    questions: [
      {
        q: "How do I create a GPlay account?",
        a: "Download any of our games and follow the sign-up process. You can use your email, phone number, or connect with social media accounts. Your GPlay account works across all our games.",
      },
      {
        q: "I forgot my password. How do I reset it?",
        a: "Click on 'Forgot Password' on the login screen. Enter your email or phone number, and we'll send you a reset link. Follow the instructions to create a new password.",
      },
      {
        q: "Can I play on multiple devices?",
        a: "Yes! Your GPlay account syncs across all devices. Just log in with the same account on any device to continue your progress.",
      },
    ],
  },
  {
    category: "Gameplay",
    questions: [
      {
        q: "How do I report a bug in the game?",
        a: "Use the in-game support button or contact us through the form below. Include your device model, game version, and a description of the issue. Screenshots are very helpful!",
      },
      {
        q: "Are there any in-app purchases?",
        a: "Our games are free to play with optional in-app purchases. You can enjoy all core gameplay without spending money. Purchases are for cosmetic items or to speed up progression.",
      },
      {
        q: "How do I connect with friends?",
        a: "Open the Friends menu in any game, search for their username or connect your social media accounts. You can also use invite codes to add friends directly.",
      },
    ],
  },
  {
    category: "Technical Issues",
    questions: [
      {
        q: "The game won't load. What should I do?",
        a: "Try these steps: 1) Check your internet connection, 2) Restart the app, 3) Clear app cache, 4) Update to the latest version, 5) Restart your device. If the issue persists, contact support.",
      },
      {
        q: "Why is my game lagging?",
        a: "Lag can be caused by slow internet, low device memory, or running multiple apps. Close background apps, ensure you have a stable connection, and consider lowering graphics settings in-game.",
      },
      {
        q: "How do I update my game?",
        a: "Visit your app store (iOS App Store or Google Play Store), search for the game, and tap 'Update'. Enable automatic updates to always have the latest version.",
      },
    ],
  },
  {
    category: "Purchases & Payments",
    questions: [
      {
        q: "I made a purchase but didn't receive my items",
        a: "First, restart the game to check if items appear. If not, contact support with your purchase receipt. Most issues are resolved within 24 hours.",
      },
      {
        q: "Can I get a refund?",
        a: "Refund policies depend on your app store (Apple or Google). Generally, you can request refunds within a specific timeframe. Check your app store's refund policy or contact their support.",
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept all payment methods supported by your app store, including credit cards, debit cards, PayPal, and app store gift cards.",
      },
    ],
  },
];

const supportChannels = [
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Chat with our support team",
    action: "Start Chat",
    available: "24/7",
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "support@gplay.com",
    action: "Send Email",
    available: "Response within 24h",
  },
  {
    icon: BookOpen,
    title: "Knowledge Base",
    description: "Browse help articles",
    action: "Visit Help Center",
    available: "Always available",
  },
];

const Support = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <section className="container px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center space-y-6 animate-fade-up max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight">
              How Can We Help?
            </h1>
            <p className="text-xl text-muted-foreground">
              Get answers to your questions and solutions to your problems
            </p>
            
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search for help..."
                className="pl-12 h-14 text-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </section>

        <section className="container px-4 sm:px-6 lg:px-8 mb-24">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-black mb-8 text-center">Contact Support</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {supportChannels.map((channel, index) => {
                const Icon = channel.icon;
                return (
                  <Card
                    key={channel.title}
                    className="border-2 hover:border-primary/50 transition-all hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] animate-scale-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardContent className="p-6 space-y-4 text-center">
                      <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{channel.title}</h3>
                        <p className="text-muted-foreground mb-1">{channel.description}</p>
                        <p className="text-sm text-muted-foreground">{channel.available}</p>
                      </div>
                      <Button className="w-full">{channel.action}</Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section className="container px-4 sm:px-6 lg:px-8 mb-24">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <HelpCircle className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-black">Frequently Asked Questions</h2>
            </div>
            
            <div className="space-y-8">
              {faqs.map((category, categoryIndex) => (
                <div key={category.category} className="animate-fade-up" style={{ animationDelay: `${categoryIndex * 100}ms` }}>
                  <h3 className="text-2xl font-bold mb-4">{category.category}</h3>
                  <Accordion type="single" collapsible className="space-y-2">
                    {category.questions.map((faq, index) => (
                      <AccordionItem
                        key={index}
                        value={`${category.category}-${index}`}
                        className="border-2 rounded-lg px-6 hover:border-primary/50 transition-colors"
                      >
                        <AccordionTrigger className="text-left font-semibold hover:no-underline">
                          {faq.q}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground pt-2">
                          {faq.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Card className="border-2">
              <CardContent className="p-8 space-y-6">
                <div className="text-center space-y-2">
                  <h2 className="text-3xl font-black">Submit a Request</h2>
                  <p className="text-muted-foreground">
                    Can't find what you're looking for? Send us a message and we'll get back to you soon.
                  </p>
                </div>

                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold">Name</label>
                      <Input placeholder="Your name" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold">Email</label>
                      <Input type="email" placeholder="your.email@example.com" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold">Subject</label>
                    <Input placeholder="What's your issue about?" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold">Message</label>
                    <Textarea
                      placeholder="Describe your issue in detail..."
                      className="min-h-[150px]"
                    />
                  </div>

                  <Button size="lg" className="w-full">
                    Submit Request
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Support;
