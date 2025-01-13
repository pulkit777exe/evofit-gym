import Navigation from "@/components/Navigation";
import CourseCard from "@/components/CourseCard";
import Newsletter from "@/components/Newsletter";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="bg-gym-dark min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="h-screen relative flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/4ef9f5b4-f901-4ae7-8ab9-01895bd45cce.png')] bg-cover bg-center bg-fixed" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center space-y-6 max-w-4xl mx-auto px-4">
          <h1 className="text-7xl md:text-8xl font-bold text-white tracking-tight animate-fadeIn">
            LOCOMOTION
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Transform your body and mind through our signature training programs
          </p>
        </div>
      </section>

      {/* Classic Courses */}
      <section id="classic" className="py-32 bg-gym-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold text-white">CLASSIC COURSES</h2>
            <p className="text-gray-300 max-w-3xl mx-auto text-lg">
              To enrich your training program, they create a powerful dynamic between energy expenditure,
              active recovery and improved mobility.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <CourseCard
              title="BOXING"
              description="An authentic discipline that offers a series of rounds to channel energy and work on the body's overall endurance."
              className="bg-gym-darker rounded-lg transition-transform duration-300 hover:scale-105"
            />
            <CourseCard
              title="YOGA"
              description="In a 32°C environment, a meditation in movements with dynamic sequences to develop amplitude and encourage overall muscle strengthening."
              className="bg-gym-darker rounded-lg transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* Signature Courses */}
      <section id="signature" className="py-32 bg-gym-darker">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold text-white">SIGNATURE COURSES</h2>
            <p className="text-gray-300 max-w-3xl mx-auto text-lg">
              Each class is effective on its own, but together they form a complete program for optimal results.
              Designed to complement each other, these sessions provide the perfect balance of strength,
              endurance and body composition.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <CourseCard
              title="ATHLETIC"
              description="Movements performed at varying intensities, with an emphasis on strength, power and endurance, to develop an athletic and balanced physique."
              className="bg-gym-dark rounded-lg transition-transform duration-300 hover:scale-105"
            />
            <CourseCard
              title="METABOLIC"
              description="Movements performed at different intensities to test your endurance, burn calories and boost your metabolism."
              className="bg-gym-dark rounded-lg transition-transform duration-300 hover:scale-105"
            />
            <CourseCard
              title="COMPOSITION"
              description="Movements performed at high volume and controlled tempo to develop muscular endurance and improve body composition."
              className="bg-gym-dark rounded-lg transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* Personal Training */}
      <section className="py-32 bg-gym-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-white">PERSONAL TRAINING</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Designed to overcome obstacles, accelerate the pace and achieve lasting results,
                personal training combines the knowledge of a solid team with the discipline of
                a tailor-made approach.
              </p>
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-gym-dark transition-all duration-300">
                LEARN MORE
              </Button>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <img
                src="/lovable-uploads/ac21f21b-6e6e-4aab-9acd-a5952f1ecbe4.png"
                alt="Personal Training"
                className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Discovery Package */}
      <section className="py-32 bg-gym-darker">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white">DISCOVERY PACKAGE</h2>
            <p className="text-gray-400 text-lg">WITHOUT COMMITMENT</p>
            <p className="text-gray-300 text-lg">
              THE IDEAL TOOL TO TEST THE EFFECTIVENESS OF OUR TRAINING, THE DYNAMICS OF OUR CLASSES
              AND TO DISCOVER THE UNIQUE ATMOSPHERE OF THE STUDIO.
            </p>
            <h3 className="text-6xl font-bold text-white mt-8">21 DAYS</h3>
            <div className="space-y-2">
              <p className="text-gray-400">Available in limited quantities at a price of $159.</p>
              <p className="text-gray-300">As many visits to the Studio as desired for three weeks.</p>
            </div>
            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-gym-dark transition-all duration-300 mt-8">
              LEARN MORE
            </Button>
          </div>
        </div>
      </section>

      <Newsletter />
    </div>
  );
};

export default Index;