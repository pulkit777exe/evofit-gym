export default function Contact() {
  return (
    <div id="contact" className="items-center justify-center">
      <div className="bg-[#ded8c3] text-black py-24 px-8 rounded-lg shadow-lg">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold tracking-wider mb-8">CONTACT US</h1>
          <p className="text-xl font-light tracking-wide mb-8">
            Have questions? We're here to help. Reach out to us through any of the channels below.
          </p>
          <button className="bg-gym-dark text-gym-light px-6 py-3 rounded-lg transition-all hover:bg-gray-800 hover:shadow-lg">
            Contact
          </button>
        </div>
      </div>
    </div>
  );
}