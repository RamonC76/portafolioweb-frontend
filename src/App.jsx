import React from 'react';
import MainLayout from './layouts/MainLayout';
import Hero from './components/Hero';
import ExperienceTimeline from './components/ExperienceTimeline';
import ProjectsGrid from './components/ProjectsGrid';
import DemoOCISection from './components/DemoOCISection';
import ContactSection from './components/ContactSection';

function App() {
    return (
        <MainLayout>
            <div id="home" className="bg-white w-full">
                <div className="max-w-7xl mx-auto px-6 py-12">
                    <Hero />
                </div>
            </div>
            <div id="experiencia" className="bg-slate-300 w-full scroll-mt-20 border-y border-slate-200">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <ExperienceTimeline />
                </div>
            </div>
            <div id="proyectos" className="bg-white w-full scroll-mt-20">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <ProjectsGrid />
                </div>
            </div>
            <div id="demo" className="bg-slate-300 w-full scroll-mt-20 border-y border-slate-200">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <DemoOCISection />
                </div>
            </div>
            <div id="contacto" className="bg-white w-full scroll-mt-20">
                <div className="max-w-7xl mx-auto px-6 py-4">
            <ContactSection />
                </div>
            </div>
        </MainLayout>
    );
}

export default App;