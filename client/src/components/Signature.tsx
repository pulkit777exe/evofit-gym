import CourseCard from "./CourseCard";

export default function Signature(){
    return (
        <section id="signature" className="py-32 w-full bg-gym-darker">
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
    )
}