import React from 'react';

export default function ExperienceTimeline() {
    const experiences = [
        {
            period: 'February 2024 - July 2026',
            role: 'Sr. Software Engineer',
            company: 'Thomson Reuters',
            description: [
                'Drove the adoption of AI agents within the development team, improving development time by 60%, testing by 50%, and incident resolution by 70%.',
                'Developed 3 new entities in Oracle PL/SQL for the company’s global tax system, used worldwide.',
                'Reduced bulk rule registration processing time by 35% through backend code optimization.',
                'Optimized Oracle materialized views, improving system performance by an average of 40%.',
                'Built a Python backend application integrated with Azure to automate sprint reports and Demo Sessions.',
                'Maintained a 24-hour SLA for user support on complex incidents, collaborating within a multinational team using the Scrum methodology.'],
            tech: ['AI', 'Process Automation', 'Oracle', 'PL/SQL', 'GitHub', 'Scrum']
        },
        {
            period: 'December 2021 - February 2024',
            role: 'Specialized Developer',
            company: 'Grupo Salinas',
            description: [
                'Designed, developed, and implemented from scratch the database and backend for the legal department’s new document management system.',
                'Modified and optimized Oracle PL/SQL procedures under the Scrum methodology.'
            ],
            tech: ['Oracle', 'PL/SQL', 'AWS', 'C#.NET', 'GitHub', 'Scrum']
        },
        {
            period: 'September 2017 - December 2021',
            role: 'Software Developer Proficient',
            company: 'Softtek México (asignado a BBVA)',
            description: [
                'Led 2 banking projects as Scrum Master with a 5-person team, delivering both as planned.',
                'Migrated 5 backend modules of the human resources system from VB6 to .NET C#.',
                'Was part of the team that migrated the HR system to Workday.',
                'Maintained PL/SQL procedures in the Oracle database used by the human resources department.'
            ],
            tech: ['Oracle', 'PL/SQL', 'Scrum Master', 'VB6', 'C#.NET', 'Microstrategy']
        },
        {
            period: 'Septembre 2003 - August 2017',
            role: 'Broker Collections Coordinator / Payroll Deduction Coordinator / Payroll Deduction Executive',
            company: 'HDI Seguros',
            description: [
                'Reduced automatic cancellations in key accounts and fraud rates related to unrecognized charges.',
                'Achieved a maximum response time of 24 hours by redesigning internal processes.',
                'Developed applications and macros for metrics and report generation; managed databases and projects.',
                'Sustained annual sales growth of more than 7% for 8 consecutive years.',
                'Increased the effectiveness of recurring collections and direct debits to more than 90%.',
                'Implemented direct debit collections in the channel and launched the collections call center operation.',
                'Developed the local sales-channel management application.',
                'Implemented the Insurerview program and established the initial procedures for the sales channel.'
            ],
            tech: ['Sybase', 'VB For Apps', 'VB6']
        }
    ];

    return (
        <section className="py-12 mt-8 border-t border-slate-200">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-12">Professional Experience</h2>

            <div className="relative border-l-2 border-slate-200 ml-4 md:ml-6">

                {experiences.map((exp, index) => (
                    <div key={index} className="mb-12 ml-8 md:ml-10 group">

                        <span className="absolute flex items-center justify-center w-4 h-4 bg-slate-300 rounded-full -left-[9px] ring-4 ring-white group-hover:bg-blue-600 transition-colors duration-300"></span>

                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                            <h3 className="text-xl font-bold text-slate-900">{exp.role}</h3>
                            <time className="text-sm font-bold text-blue-700 bg-blue-50 px-3 py-1 rounded-full w-max mt-2 md:mt-0 shadow-sm border border-blue-100">
                                {exp.period}
                            </time>
                        </div>

                        <h4 className="text-md font-semibold text-slate-500 mb-3">{exp.company}</h4>

                        <ul className="list-disc list-outside ml-5 mb-5 space-y-2 max-w-3xl text-slate-600">
                            {exp.description.map((bullet, bulletIndex) => (
                                <li key={bulletIndex} className="leading-relaxed">
                                    {bullet}
                                </li>
                            ))}
                        </ul>

                        <div className="flex flex-wrap gap-2">
                            {exp.tech.map((tech, techIndex) => (
                                <span key={techIndex} className="text-xs font-semibold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">
                                    {tech}
                                </span>
                            ))}
                        </div>

                    </div>
                ))}
            </div>
        </section>
    );
}