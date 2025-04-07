
import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

// Custom Carbon Icons
const LeafIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 22c1.25-1.25 2.5-2.5 3.5-2.5 1.5 0 1.5 2 3 2s1.5-2 3-2 1.5 2 3 2 1.5-2 3-2 1.5 2 3 2 2.25-1.25 3.5-2.5"></path>
    <path d="M19 16c-1.4-1.2-3-2-5.5-2-3.5 0-5.5 1-7.5 2"></path>
    <path d="M19 9c-1.2-1.2-3-2-5.5-2-3.5 0-6 2-8.5 4"></path>
    <path d="M19 2c-1.2 1.4-3 2-5.5 2-3.5 0-7 2-9.5 4"></path>
  </svg>
);

const CO2Icon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 9c1.5 0 2.5-1 2.5-2.5S6.5 4 5 4 2.5 5 2.5 6.5 3.5 9 5 9ZM5 9v6M8 6h1.5a2 2 0 110 4H8"></path>
    <path d="M8 10h2a2 2 0 100 4H8V6"></path>
    <path d="M19 10v4a2 2 0 01-2 2h-1.5a2.5 2.5 0 110-5H19ZM16 6h.01"></path>
  </svg>
);

const EnergyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2v8"></path>
    <path d="M12 20a8 8 0 100-8"></path>
    <path d="M12 14l4 4"></path>
    <path d="M12 14l-4 4"></path>
  </svg>
);

const RecycleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 19H4.815a1.83 1.83 0 01-1.57-.881 1.785 1.785 0 01-.119-1.784L5.333 12"></path>
    <path d="M14 19h2.185a1.83 1.83 0 001.57-.881 1.785 1.785 0 00.119-1.784L15.667 12"></path>
    <path d="M5 5h4"></path>
    <path d="M15 5h4"></path>
    <path d="M5 5l5 5"></path>
    <path d="M19 5l-5 5"></path>
    <path d="M5.2 19h13.6"></path>
  </svg>
);

const TreeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 22V16a2 2 0 012-2h2a2 2 0 012 2v6"></path>
    <path d="M14.5 9L16 7.5"></path>
    <path d="M18.5 5.5L20 4"></path>
    <path d="M9.5 9L8 7.5"></path>
    <path d="M5.5 5.5L4 4"></path>
    <path d="M7 21h10"></path>
    <path d="M12 3v10"></path>
  </svg>
);

const InnovationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.5 14.5L5.5 18.5"></path>
    <path d="M14.5 9.5L18.5 5.5"></path>
    <circle cx="7" cy="7" r="2"></circle>
    <circle cx="17" cy="17" r="2"></circle>
    <path d="M12 8l4 4"></path>
    <path d="M3 17l2 2"></path>
    <path d="M21 7l-2-2"></path>
  </svg>
);

const AnimateOnScroll = ({ children, classNames }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
      className={classNames}
    >
      {children}
    </motion.div>
  );
};

const Index = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const carouselData = [
    {
      id: 1,
      icon: <CO2Icon />,
      title: "Carbon Reduction",
      value: "45%",
      description: "Reduction in carbon emissions through our sustainable practices and technologies"
    },
    {
      id: 2,
      icon: <EnergyIcon />,
      title: "Energy Efficiency",
      value: "60%",
      description: "Improvement in energy efficiency across all operations and facilities"
    },
    {
      id: 3,
      icon: <RecycleIcon />,
      title: "Waste Recycling",
      value: "85%",
      description: "Of waste materials recycled or repurposed through our circular economy initiatives"
    },
    {
      id: 4,
      icon: <LeafIcon />,
      title: "Green Materials",
      value: "70%",
      description: "Utilization of eco-friendly and sustainable materials in our products"
    },
    {
      id: 5,
      icon: <TreeIcon />,
      title: "Reforestation",
      value: "100K",
      description: "Trees planted through our global reforestation initiatives and partnerships"
    },
    {
      id: 6,
      icon: <InnovationIcon />,
      title: "Innovation",
      value: "35+",
      description: "New sustainable technologies developed and implemented in the last year"
    }
  ];

  if (!isMounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-emerald-50 to-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Building a <span className="text-emerald-600">Sustainable</span> Future
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-10">
            Together we can create a cleaner, greener world through sustainable practices and innovative solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
              Get Started
            </button>
            <button className="bg-white border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 font-semibold px-6 py-3 rounded-lg transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Our Plan Section with Carousel */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <AnimateOnScroll classNames="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Plan</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our comprehensive approach to carbon reduction and sustainability is measured by real results.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll classNames="max-w-7xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full px-4 sm:px-6"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {carouselData.map((card) => (
                <CarouselItem key={card.id} className="pl-2 md:pl-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/3">
                  <Card className="h-full p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex flex-col items-center text-center h-full">
                      <div className="text-emerald-600 mb-4">
                        {card.icon}
                      </div>
                      <h3 className="text-lg font-medium text-gray-900 mb-2">{card.title}</h3>
                      <div className="text-3xl md:text-4xl font-bold text-emerald-600 my-2">
                        {card.value}
                      </div>
                      <p className="text-gray-600 mt-2">{card.description}</p>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-8">
              <CarouselPrevious className="relative inset-0 translate-y-0 bg-emerald-600 text-white hover:bg-emerald-700" />
              <CarouselNext className="relative inset-0 translate-y-0 bg-emerald-600 text-white hover:bg-emerald-700" />
            </div>
          </Carousel>
        </AnimateOnScroll>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <AnimateOnScroll classNames="">
            <img 
              src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" 
              alt="Sustainable practices" 
              className="rounded-lg shadow-lg w-full h-auto object-cover" 
            />
          </AnimateOnScroll>
          <AnimateOnScroll classNames="">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About Our Mission</h2>
            <p className="text-lg text-gray-600 mb-6">
              We are committed to developing innovative solutions that address the challenges of climate change and promote environmental sustainability.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Our team of experts collaborates with global partners to implement proven strategies that reduce carbon footprints and create a more sustainable future for generations to come.
            </p>
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
              Read Our Story
            </button>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
};

export default Index;
