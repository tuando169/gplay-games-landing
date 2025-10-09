import { Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "Games",
      links: ["Realm Warriors", "Neon Rush", "Bubble Quest", "Coming Soon"],
    },
    {
      title: "Company",
      links: ["About Us", "Careers", "Press Kit", "Contact"],
    },
    {
      title: "Support",
      links: ["Help Center", "Terms of Service", "Privacy Policy", "Community"],
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "Youtube" },
    { icon: Linkedin, href: "#", label: "Linkedin" },
  ];

  return (
    <footer className="bg-foreground text-background border-t border-background/10">
      <div className="container px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-4xl font-black tracking-tight">GPLAY</h3>
            <p className="text-background/70 text-lg max-w-md">
              Building games that bring people together and create unforgettable experiences.
            </p>
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="bg-background/10 hover:bg-primary p-3 rounded-full transition-all hover:scale-110 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {footerSections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h4 className="text-lg font-bold">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-background/70 hover:text-background transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-background/10 text-center text-background/60">
          <p>© 2025 GPlay. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
