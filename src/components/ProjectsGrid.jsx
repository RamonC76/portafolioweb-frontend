import React from 'react';

export default function ProjectsGrid() {
    const projects = [
        {
            title: 'Corporativo CORMEN',
            category: 'Identidad Corporativa & IA',
            description: 'Creación del concepto de marca y desarrollo de videos promocionales mediante modelos avanzados de generación de video por inteligencia artificial.',
            tags: ['AI Video Generation', 'Prompt Engineering', 'Brand Concept'],
            color: 'from-blue-500 to-indigo-600'
        },
        {
            title: 'La Casa del Panqué',
            category: 'Branding Comercial',
            description: 'Desarrollo integral de la identidad visual, diseño de logotipos y generación de gráficos de marketing impulsados por IA para una línea de productos artesanales.',
            tags: ['Generación de Imágenes', 'Diseño de Logos', 'Marketing'],
            color: 'from-amber-500 to-orange-600'
        },
        {
            title: 'Los Chilanguitos',
            category: 'Identidad Visual',
            description: 'Diseño de marca y líneas de productos mediante herramientas generativas para posicionamiento comercial y creación de material gráfico promocional.',
            tags: ['AI Art', 'Concepto de Producto', 'Identidad Visual'],
            color: 'from-emerald-500 to-teal-600'
        }
    ];

    return (
        <section className="py-12 mt-4 border-t border-slate-200">
            <div className="mb-10">
                <h2 className="text-3xl font-extrabold text-slate-900 mb-2">Proyectos Generativos & Marcas</h2>
                <p className="text-slate-600">
                    Aplicación de modelos de inteligencia artificial para la automatización del diseño, creación de identidades visuales y material promocional.
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