import React from 'react';

export default function ProjectsGrid() {
    const projects = [
        {
            title: 'Chronoteque',
            category: 'Scrum & Project Management',
            description: 'Creation of the application integrated with Azure DevOps to obtain the sprint summary in a more agile way, without requiring each team member to invest additional time. Developed with AI (Claude), using Python as the programming language and a local Oracle database.',
            tags: ['Scrum', 'Prompt Engineering', 'Software Development'],
            color: 'from-blue-500 to-indigo-600'
        },
        {
            title: 'Signature and Document Manager',
            category: 'Databases',
            description: "Creation of the database architecture from scratch for document and signature management for the company's legal department. Oracle database hosted on AWS. Procedures, functions, and tables were developed, and proper performance was verified for use with the web application.",
            tags: ['Oracle', 'Tuning', 'Performance'],
            color: 'from-amber-500 to-orange-600'
        },
        {
            title: 'System Update and Migration',
            category: 'Development',
            description: 'A technological upgrade of the human resources system from VB6 to .NET was carried out, where the legacy functionality had to be completely emulated to minimize the operational impact on users.',
            tags: ['Tech upgrade', '.NET', 'Legacy System'],
            color: 'from-emerald-500 to-teal-600'
        }
    ];

    return (
        <section className="py-12 mt-4 border-t border-slate-200">
            <div className="mb-10">
                <h2 className="text-3xl font-extrabold text-slate-900 mb-2">Work Projects</h2>
                <p className="text-slate-600">
                    Work projects with the greatest impact within each organization
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                    >
                        {/* Encabezado visual de la tarjeta con gradiente */}
                        <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>

                        <div className="p-6 flex flex-col flex-grow">
                            <span className="text-xs font-bold tracking-wider text-slate-400 uppercase mb-2">
                                {project.category}
                            </span>
                            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                                {project.description}
                            </p>

                            {/* Etiquetas */}
                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tags.map((tag, tagIndex) => (
                                    <span
                                        key={tagIndex}
                                        className="text-[11px] font-semibold text-slate-700 bg-slate-100 px-2 py-1 rounded-md"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}