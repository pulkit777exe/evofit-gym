export default function Hero(){
    return (
        <section className="h-screen relative flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507398941214-572c25f4b1dc?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-fixed" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center space-y-6 max-w-4xl mx-auto px-4">
          <h1 className="text-7xl md:text-8xl font-bold text-white tracking-tight animate-fadeIn">
            EVOFIT
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Transform your body and mind through our signature training programs
          </p>
        </div>
      </section>
    )
}