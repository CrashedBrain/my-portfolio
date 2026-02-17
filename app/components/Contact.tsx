import React from 'react';

export default function Contact() {
    return (
        <section className="relative w-full bg-[#121212] py-20 px-6 md:px-12 text-white z-10 border-t border-white/5">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white/90">
                    Get In Touch
                </h2>
                <p className="text-gray-400 mb-12 text-lg max-w-2xl mx-auto leading-relaxed">
                    Feel free to reach out for collaborations, questions, or just to say hello.
                </p>

                <div className="flex flex-col md:flex-row justify-center gap-6">
                    <a
                        href="mailto:aziz18@cse.pstu.ac.bd"
                        className="group flex flex-col items-center justify-center p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300 w-full md:w-auto min-w-[300px]"
                    >
                        <span className="text-sm font-mono text-purple-400 mb-2 uppercase tracking-wider group-hover:text-purple-300 transition-colors">Academic Email</span>
                        <span className="text-xl font-medium text-white break-all">aziz18@cse.pstu.ac.bd</span>
                    </a>

                    <a
                        href="mailto:arprincedabbu@gmail.com"
                        className="group flex flex-col items-center justify-center p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300 w-full md:w-auto min-w-[300px]"
                    >
                        <span className="text-sm font-mono text-purple-400 mb-2 uppercase tracking-wider group-hover:text-purple-300 transition-colors">Personal Email</span>
                        <span className="text-xl font-medium text-white break-all">arprincedabbu@gmail.com</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
