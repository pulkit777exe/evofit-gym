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
              content="The term 'athletic' refers to a physical state or performance characterized by strength, endurance, agility, and speed. Individuals with an athletic profile often engage in regular physical activity or sports, which promotes overall fitness and physical health. This category can encompass a wide range of activities, from competitive sports to recreational fitness routines, aimed at improving physical performance and skill development"
            />
            <CourseCard
              title="METABOLIC"
              description="Movements performed at different intensities to test your endurance, burn calories and boost your metabolism."
              className="bg-gym-dark rounded-lg transition-transform duration-300 hover:scale-105"
              content="Metabolic health focuses on the processes your body uses to generate energy, break down nutrients, and regulate key functions such as hormone balance, blood sugar levels, and fat storage. A healthy metabolism supports efficient energy use, aids in weight management, and promotes overall well-being. Understanding metabolic health is essential for improving fitness, managing chronic conditions like diabetes, and enhancing physical performance by optimizing the body's ability to process food and nutrients."
            />
            <CourseCard
              title="COMPOSITION"
              description="Movements performed at high volume and controlled tempo to develop muscular endurance and improve body composition."
              className="bg-gym-dark rounded-lg transition-transform duration-300 hover:scale-105"
              content="Body composition refers to the proportion of fat, muscle, bone, and other tissues that make up an individual's body weight. A well-balanced body composition, with healthy levels of muscle mass and low levels of body fat, contributes to better physical performance, improved metabolism, and overall health. Achieving an optimal body composition is often a goal in fitness programs to improve strength, endurance, and aesthetics while reducing the risk of diseases associated with excess body fat."
            />
          </div>
        </div>
      </section>
    )
}