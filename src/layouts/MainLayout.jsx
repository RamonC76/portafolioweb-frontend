import React, { useState } from 'react';
export default function MainLayout({ children }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { href: '#experiencia', label: 'Job Experience' },
        { href: '#proyectos', label: 'Projects' },
        { href: '#demo', label: 'Transactional Demo' },
        { href: '#contacto', label: 'Contact' },
    ];

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-200">
            <nav className="sticky top-0 z-50 bg-slate-900 border-b border-slate-800 shadow-md">
                <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
                    <span className="text-xl font-black uppercase text-white tracking-wider">
                        <span><a href="#home" className="hover:text-blue-400 transition-colors">RAMON RENE CORONA BANDIN</a></span>
                    </span>

                    {/* Menú desktop */}
                    <ul className="hidden md:flex space-x-8 text-sm font-bold text-slate-300">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <a href={link.href} className="hover:text-blue-400 transition-colors">{link.label}</a>
                            </li>
                        ))}
                    </ul>

                    {/* Botón hamburguesa (solo móvil) */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden text-white p-2"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Panel desplegable móvil */}
                {isMenuOpen && (
                    <ul className="md:hidden flex flex-col bg-slate-900 border-t border-slate-800 px-6 py-4 space-y-4 text-sm font-bold text-slate-300">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <a href={link.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="block hover:text-blue-400 transition-colors">
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                )}
            </nav>

            <main className="w-full">
                {children}
            </main>

            <footer className="bg-slate-900 text-slate-400 py-8 text-center text-sm">
                <p>© 2026 Ramón Corona. Built with React and Tailwind CSS.</p>
            </footer>
        </div >
    );
}