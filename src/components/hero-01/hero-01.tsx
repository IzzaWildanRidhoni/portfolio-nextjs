import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CirclePlay } from "lucide-react";
import React from "react";

const Hero01 = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        <Badge className="bg-gradient-to-br via-70% from-primary via-muted/30 to-primary rounded-full py-1 border-none">
          Just released v1.0.0
        </Badge>
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl md:leading-[1.2] font-bold">
          Hi, I'm Izza Wildan Ridhoni Fullstack Web Developer
        </h1>
        <p className="mt-6 text-[17px] md:text-lg">
          I specialize in building modern, high-performance web applications
          using React.js, Next.js, Laravel, and more. Explore my portfolio to
          see how I turn ideas into functional and beautiful digital solutions.
        </p>
        <div className="mt-12 flex items-center justify-center gap-4">
          <Button size="lg" className="rounded-full text-base">
            Showcase <ArrowUpRight className="!h-5 !w-5" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full text-base shadow-none"
          >
            <CirclePlay className="!h-5 !w-5" /> Contact Me
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero01;
