import { Button } from "./ui/button"

export default function Discovery(){
  return (
    <section className="py-16 md:py-32 w-full bg-gym-darker">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-6 md:px-12 space-y-8 md:space-y-0 md:space-x-8">
        <div className="rounded-lg overflow-hidden shadow-2xl w-full md:w-1/2">
          <img src="https://images.squarespace-cdn.com/content/v1/588f4b68197aeae36a70f70b/89b1c2fc-aabc-4972-9f8d-af2be6469129/DSC06984.jpg" alt="" className="w-full h-auto object-cover" />
        </div>
        <div className="text-center space-y-6 max-w-3xl mx-auto md:mx-0 md:text-left md:w-1/2 p-6 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">DISCOVERY PACKAGE</h2>
          <p className="text-gray-400 text-base md:text-lg">WITHOUT COMMITMENT</p>
          <p className="text-gray-300 text-sm md:text-lg">
            THE IDEAL TOOL TO TEST THE EFFECTIVENESS OF OUR TRAINING, THE DYNAMICS OF OUR CLASSES
            AND TO DISCOVER THE UNIQUE ATMOSPHERE OF THE STUDIO.
          </p>
          <h3 className="text-4xl md:text-6xl font-bold text-white mt-4 md:mt-8">21 DAYS</h3>
          <div className="space-y-2">
            <p className="text-gray-400 text-sm md:text-base">Available in limited quantities at a price of $159.</p>
            <p className="text-gray-300 text-sm md:text-base">As many visits to the Studio as desired for three weeks.</p>
          </div>
          <Button variant="outline" className="text-gym-dark border-gym-light hover:bg-gym-accent hover:text-gym-dark transition-all duration-300 mt-4 md:mt-8">
            LEARN MORE
          </Button>
        </div>
      </div>
    </section>
  )
}