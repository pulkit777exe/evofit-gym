import Navigation from '@/components/Navigation';
import { Medal, Clock, Users } from 'lucide-react';

const Trainer = () => {
    return (
        <div className='bg-gym-dark min-h-screen w-full'>
            <Navigation />
            <div className="max-w-7xl mx-auto text-gym-light bg-gym-dark min-h-screen p-8 md:p-16">
                <h2 className="text-4xl font-bold text-center my-8 items-center">Meet Your Trainers</h2>
                <div className="grid md:grid-cols-2 gap-12 items-center py-20">
                    <div className="relative">
                        <div className="aspect-[3/4] rounded-lg overflow-hidden">
                            <img 
                                src="https://images.unsplash.com/photo-1549476464-37392f717541?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="John Davis - Personal Trainer"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-6 -right-6 bg-amber-500 text-black p-4 rounded-lg">
                            <p className="font-bold text-xl">10+ Years</p>
                            <p>Experience</p>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold mb-4">Harish Nagar</h3>
                        <p className="text-xl text-amber-500 mb-6">Elite Personal Trainer</p>
                        <p className="text-gray-300 mb-8">
                            With over a decade of experience in personal training and sports nutrition, 
                            John has helped hundreds of clients achieve their fitness goals. His 
                            specialized approach combines strength training, functional fitness, and 
                            nutrition coaching.
                        </p>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="flex items-center gap-3">
                                <Medal className="w-6 h-6 text-gym-accent" />
                                <div>
                                    <p className="font-bold">Certified</p>
                                    <p className="text-gray-400">NASM Expert</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <Clock className="w-6 h-6 text-gym-accent" />
                                <div>
                                    <p className="font-bold">Flexible</p>
                                    <p className="text-gray-400">Training Hours</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <Users className="w-6 h-6 text-gym-accent" />
                                <div>
                                    <p className="font-bold">500</p>
                                    <p className="text-gray-400">Clients Trained</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="relative">
                        <div className="aspect-[3/4] rounded-lg overflow-hidden">
                            <img 
                                src="https://images.unsplash.com/photo-1549476464-37392f717541?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="John Davis - Personal Trainer"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-6 -right-6 bg-amber-500 text-black p-4 rounded-lg">
                            <p className="font-bold text-xl">10+ Years</p>
                            <p>Experience</p>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold mb-4">Mohin Chaudhary</h3>
                        <p className="text-xl text-amber-500 mb-6">Elite Personal Trainer</p>
                        <p className="text-gray-300 mb-8">
                            With over a decade of experience in personal training and sports nutrition, 
                            John has helped hundreds of clients achieve their fitness goals. His 
                            specialized approach combines strength training, functional fitness, and 
                            nutrition coaching.
                        </p>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="flex items-center gap-3">
                                <Medal className="w-6 h-6 text-gym-accent" />
                                <div>
                                    <p className="font-bold">Certified</p>
                                    <p className="text-gray-400">NASM Expert</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <Clock className="w-6 h-6 text-gym-accent" />
                                <div>
                                    <p className="font-bold">Flexible</p>
                                    <p className="text-gray-400">Training Hours</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <Users className="w-6 h-6 text-gym-accent" />
                                <div>
                                    <p className="font-bold">500</p>
                                    <p className="text-gray-400">Clients Trained</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 gap-12 items-center py-20">
                    <div className="relative">
                        <div className="aspect-[3/4] rounded-lg overflow-hidden">
                            <img 
                                src="https://images.unsplash.com/photo-1549476464-37392f717541?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="John Davis - Personal Trainer"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-6 -right-6 bg-amber-500 text-black p-4 rounded-lg">
                            <p className="font-bold text-xl">10+ Years</p>
                            <p>Experience</p>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold mb-4">Raju Chaudhary</h3>
                        <p className="text-xl text-amber-500 mb-6">Elite Personal Trainer</p>
                        <p className="text-gray-300 mb-8">
                            With over a decade of experience in personal training and sports nutrition, 
                            John has helped hundreds of clients achieve their fitness goals. His 
                            specialized approach combines strength training, functional fitness, and 
                            nutrition coaching.
                        </p>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="flex items-center gap-3">
                                <Medal className="w-6 h-6 text-gym-accent" />
                                <div>
                                    <p className="font-bold">Certified</p>
                                    <p className="text-gray-400">NASM Expert</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <Clock className="w-6 h-6 text-gym-accent" />
                                <div>
                                    <p className="font-bold">Flexible</p>
                                    <p className="text-gray-400">Training Hours</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <Users className="w-6 h-6 text-gym-accent" />
                                <div>
                                    <p className="font-bold">500</p>
                                    <p className="text-gray-400">Clients Trained</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Trainer;