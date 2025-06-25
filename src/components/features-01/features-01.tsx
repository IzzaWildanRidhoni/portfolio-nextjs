import {
  Blocks,
  Bot,
  ChartPie,
  ComputerIcon,
  Film,
  MessageCircle,
  Settings2,
  ShoppingBag,
} from "lucide-react";
import React from "react";

const features = [
  {
    icon: Settings2,
    title: "Custom Website Development",
    description:
      "We create fully customized websites designed to meet your unique business needs using the latest technologies and frameworks.",
  },
  {
    icon: ComputerIcon,
    title: "UI/UX Design",
    description:
      "Delivering modern, intuitive, and responsive designs that offer excellent user experiences across desktop and mobile devices.",
  },
  {
    icon: Bot,
    title: "Web Application Development",
    description:
      "We build custom web applications tailored to your business needs, ensuring seamless integration with existing systems and delivering a secure, scalable, and efficient solution.",
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce Development",
    description:
      "Set up your online store with complete e-commerce features—product catalogs, shopping carts, payment integrations, and order management.",
  },
  {
    icon: ChartPie,
    title: "SEO &  Optimization",
    description:
      "Optimize your website for search engines and improve its performance to ensure fast loading times and a positive user experience.",
  },
  {
    icon: MessageCircle,
    title: "Content Management System",
    description:
      "We provide a user-friendly CMS to manage your website content, ensuring easy updates and maintenance.",
  },
];

const Features01Page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center py-12">
      <div>
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-center">
          About Our Services
        </h2>
        <div className="mt-10 sm:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-screen-lg mx-auto px-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col border rounded-xl py-6 px-5"
            >
              <div className="mb-3 h-10 w-10 flex items-center justify-center bg-muted rounded-full">
                <feature.icon className="h-6 w-6" />
              </div>
              <span className="text-lg font-semibold">{feature.title}</span>
              <p className="mt-1 text-foreground/80 text-[15px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features01Page;
