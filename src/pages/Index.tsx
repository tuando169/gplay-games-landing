import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FeaturedGames from "@/components/FeaturedGames";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import office1 from "@/assets/office-1.jpg";
import office2 from "@/assets/office-2.jpg";
import office3 from "@/assets/office-3.jpg";
import office4 from "@/assets/office-4.jpg";
import office5 from "@/assets/office-5.jpg";
import office6 from "@/assets/office-6.jpg";

const Index = () => {
  const { t } = useLanguage();

  const officeImages = [
    { src: office1, alt: t('home.gallery.alt1') },
    { src: office2, alt: t('home.gallery.alt2') },
    { src: office3, alt: t('home.gallery.alt3') },
    { src: office4, alt: t('home.gallery.alt4') },
    { src: office5, alt: t('home.gallery.alt5') },
    { src: office6, alt: t('home.gallery.alt6') },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <FeaturedGames />
      
      <section className="container px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black mb-8 text-center">{t('home.gallery.title')}</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            {t('home.gallery.description')}
          </p>
          
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {officeImages.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <Card className="border-2 hover:border-primary/50 transition-all overflow-hidden group">
                      <CardContent className="p-0">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
