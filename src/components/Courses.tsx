import CourseCard from "./CourseCard";

export default function Courses() {
    return (
        <section id="classic" className="py-32 w-screen bg-gym-dark">
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
              title="WEIGHTLIFTING"
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

    )
}