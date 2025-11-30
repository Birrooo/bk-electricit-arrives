import { Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center p-6 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--primary)/0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(var(--primary)/0.03),transparent_50%)]" />
      
      <div className="relative z-10 max-w-2xl w-full text-center space-y-12 animate-in fade-in duration-1000">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img 
            src="/bk-elec-logo.png" 
            alt="BK ELEC - Électricité, Chauffage, Sanitaire" 
            className="h-20 w-auto animate-in slide-in-from-top duration-700"
          />
        </div>

        {/* Main message */}
        <div className="space-y-4 animate-in slide-in-from-bottom duration-700 delay-150">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground font-['Poppins']">
            Site bientôt disponible
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-medium">
            Notre nouveau site web est en cours de construction
          </p>
        </div>

        {/* Contact section */}
        <div className="space-y-6 animate-in slide-in-from-bottom duration-700 delay-300">
          <p className="text-lg text-foreground font-medium">
            En attendant, contactez-nous :
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="outline" 
              size="lg"
              className="group border-primary/20 hover:border-primary hover:bg-primary/5 transition-all duration-300 min-w-[280px]"
              asChild
            >
              <a href="tel:0669168846" className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                <span className="font-semibold">06.69.16.88.46</span>
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="group border-primary/20 hover:border-primary hover:bg-primary/5 transition-all duration-300 min-w-[280px]"
              asChild
            >
              <a href="tel:0663185071" className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                <span className="font-semibold">06.63.18.50.71</span>
              </a>
            </Button>
          </div>

          <Button 
            size="lg"
            className="group bg-primary hover:bg-primary-hover text-primary-foreground transition-all duration-300 shadow-lg hover:shadow-[var(--shadow-glow)] min-w-[280px]"
            asChild
          >
            <a href="mailto:contact@bk-electricite.fr" className="flex items-center gap-3">
              <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
              <span className="font-semibold">contact@bk-electricite.fr</span>
            </a>
          </Button>
        </div>

        {/* Services list */}
        <div className="pt-8 border-t border-border animate-in slide-in-from-bottom duration-700 delay-500">
          <p className="text-muted-foreground">
            <span className="font-semibold text-primary">Électricité</span> • 
            <span className="font-semibold text-primary"> Chauffage</span> • 
            <span className="font-semibold text-primary"> Sanitaire</span>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Index;
