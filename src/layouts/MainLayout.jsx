import React from 'react';

export default function MainLayout({ children }) {
    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-200">
            <nav className="sticky top-0 z-50 bg-slate-900 border-b border-slate-800 shadow-md">
                <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
                    <span className="text-xl font-black uppercase text-white tracking-wider">
                        <span><a href="#home" className="hover:text-blue-400 transition-colors">RAMON RENE CORONA BANDIN</a></span>
                    </span>
                    <ul className="hidden md:flex space-x-8 text-sm font-bold text-slate-300">
                        <li>
                            <a href="#experiencia" className="hover:text-blue-400 transition-colors">Job Experience</a>
                        </li>
                        <li>
                            <a href="#proyectos" className="hover:text-blue-400 transition-colors">Projects</a>
                        </li>
                        <li>
                            <a href="#demo" className="hover:text-blue-400 transition-colors">Transactional Demo</a>
                        </li>
                        <li>
                            <a href="#contacto" className="hover:text-blue-400 transition-colors">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>

            <main className="w-full">
                {children}
            </main>

            <footer className="bg-slate-900 text-slate-400 py-8 text-center text-sm">
                <p>© 2026 Ramón Corona. Built with React and Tailwind CSS.</p>
            </footer>
        </div>
    );
}