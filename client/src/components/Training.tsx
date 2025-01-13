import { Button } from "./ui/button"

export default function Training(){
    return (
        <section className="py-32 w-full bg-gym-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-white">PERSONAL TRAINING</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Designed to overcome obstacles, accelerate the pace and achieve lasting results,
                personal training combines the knowledge of a solid team with the discipline of
                a tailor-made approach.
              </p>
              <Button variant="outline" className="text-gym-dark border-gym-accent hover:bg-gym-accent hover:text-gym-dark transition-all duration-300">
                LEARN MORE
              </Button>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <img
                src="https://images.squarespace-cdn.com/content/v1/588f4b68197aeae36a70f70b/1002a810-d906-4cba-8aea-ce14c3643928/DSC08191.jpg?format=1000w"
                alt="Personal Training"
                className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
              />
            </div>
          </div>
        </div>
      </section>
    )
}