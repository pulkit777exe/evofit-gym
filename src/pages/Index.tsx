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
        <div className="absolute inset-0 bg-[url('/lovable-uploads/4ef9f5b4-f901-4ae7-8ab9-01895bd45cce.png')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/50" />
        <h1 className="text-8xl font-bold text-white relative z-10 animate-fadeIn">
          LOCOMOTION
        </h1>
      </section>

      {/* Classic Courses */}
      <section id="classic" className="py-20 bg-gym-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-8">CLASSIC COURSES</h2>
          <p className="text-gray-300 mb-12 max-w-3xl">
            To enrich your training program, they create a powerful dynamic between energy expenditure,
            active recovery and improved mobility.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <CourseCard
              title="BOXING"
              description="An authentic discipline that offers a series of rounds to channel energy and work on the body's overall endurance."
            />
            <CourseCard
              title="YOGA"
              description="In a 32°C environment, a meditation in movements with dynamic sequences to develop amplitude and encourage overall muscle strengthening."
            />
          </div>
        </div>
      </section>

      {/* Signature Courses */}
      <section id="signature" className="py-20 bg-gym-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-8">SIGNATURE COURSES</h2>
          <p className="text-gray-300 mb-12 max-w-3xl">
            Each class is effective on its own, but together they form a complete program for optimal results.
            Designed to complement each other, these sessions provide the perfect balance of strength,
            endurance and body composition.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <CourseCard
              title="ATHLETIC"
              description="Movements performed at varying intensities, with an emphasis on strength, power and endurance, to develop an athletic and balanced physique."
            />
            <CourseCard
              title="METABOLIC"
              description="Movements performed at different intensities to test your endurance, burn calories and boost your metabolism."
            />
            <CourseCard
              title="COMPOSITION"
              description="Movements performed at high volume and controlled tempo to develop muscular endurance and improve body composition."
            />
          </div>
        </div>
      </section>

      {/* Personal Training */}
      <section className="py-20 bg-gym-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">PERSONAL TRAINING</h2>
              <p className="text-gray-300 mb-8">
                Designed to overcome obstacles, accelerate the pace and achieve lasting results,
                personal training combines the knowledge of a solid team with the discipline of
                a tailor-made approach.
              </p>
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-gym-dark">
                LEARN MORE
              </Button>
            </div>
            <div className="relative h-[400px]">
              <img
                src="/lovable-uploads/ac21f21b-6e6e-4aab-9acd-a5952f1ecbe4.png"
                alt="Personal Training"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Discovery Package */}
      <section className="py-20 bg-gym-darker text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">DISCOVERY PACKAGE</h2>
          <p className="text-gray-400 mb-4">WITHOUT COMMITMENT</p>
          <p className="text-gray-300 mb-8 max-w-3xl mx-auto">
            THE IDEAL TOOL TO TEST THE EFFECTIVENESS OF OUR TRAINING, THE DYNAMICS OF OUR CLASSES
            AND TO DISCOVER THE UNIQUE ATMOSPHERE OF THE STUDIO.
          </p>
          <h3 className="text-5xl font-bold text-white mb-8">21 DAYS</h3>
          <p className="text-gray-400 mb-2">Available in limited quantities at a price of $159.</p>
          <p className="text-gray-300 mb-8">As many visits to the Studio as desired for three weeks.</p>
          <Button variant="outline" className="text-white border-white hover:bg-white hover:text-gym-dark">
            LEARN MORE
          </Button>
        </div>
      </section>

      <Newsletter />
    </div>
  );
};

export default Index;