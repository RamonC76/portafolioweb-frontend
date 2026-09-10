import React from 'react';

export default function AboutSection() {
    const languages = [
        { name: 'Spanish', level: 'Native', percentage: 100 },
        { name: 'English', level: 'B2', percentage: 70 },
        { name: 'French', level: 'B1', percentage: 55 },
    ];

    const certifications = [
        { name: 'Certified SAFe 4 Scrum Master', issuer: 'SAFe by Scaled Agile, Inc.', year: '2019' },
        { name: 'ANALYST', issuer: 'Strategy', year: '2020' },
        { name: 'Python Essentials 1', issuer: 'Cisco', year: '2024' },
        { name: 'Introductory Secure Coding in PL/SQL', issuer: 'SecureFlag', year: '2024' },
        { name: 'Certificado EF SET Inglés 56/100 (B2 Intermedio Alto)', issuer: 'EF SET', year: '2025' },
    ];

    return (
        <section id="sobre-mi" className="py-16 max-w-5xl mx-auto px-6">
            <div className="mb-12 text-center">
                <h2 className="text-3xl font-extrabold text-slate-900 mb-3">About Me</h2>
                <p className="text-slate-600 max-w-2xl mx-auto">
                    A bit more about my background, languages, and certifications.
                </p>
            </div>

            <div className="flex flex-col gap-8">

                {/* Background */}
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                    <h3 className="text-lg font-bold text-slate-800 mb-4 border-b border-slate-100 pb-2">
                        Background
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                        Software and database engineer with hands-on experience across companies like
                        Thomson Reuters, Grupo Salinas, and HDI Seguros, specializing in Oracle PL/SQL,
                        .NET backend development, and cloud integrations between OCI and Azure. Certified
                        Scrum Master with a strong foundation in building scalable, secure data solutions —
                        from database architecture to RESTful microservices. Currently exploring the
                        intersection of AI, data analytics, and enterprise automation, always looking to
                        bridge solid backend engineering with modern cloud-native practices.
                    </p>
                </div>

                {/* Certifications + Languages */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                        <h3 className="text-lg font-bold text-slate-800 mb-4 border-b border-slate-100 pb-2">
                            Certifications
                        </h3>
                        <ul className="space-y-3">
                            {certifications.map((cert) => (
                                <li key={cert.name} className="text-sm">
                                    <p className="font-semibold text-slate-700">{cert.name}</p>
                                    <p className="text-slate-500">{cert.issuer} · {cert.year}</p>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                        <h3 className="text-lg font-bold text-slate-800 mb-4 border-b border-slate-100 pb-2">
                            Languages
                        </h3>
                        <ul className="space-y-5">
                            {languages.map((lang) => (
                                <li key={lang.name}>
                                    <div className="flex justify-between items-center text-sm mb-1.5">
                                        <span className="font-semibold text-slate-700">{lang.name}</span>
                                        <span className="text-slate-500">{lang.level}</span>
                                    </div>
                                    <div className="w-full bg-slate-100 rounded-full h-2">
                                        <div
                                            className="bg-gradient-to-r from-blue-600 to-cyan-500 h-2 rounded-full"
                                            style={{ width: `${lang.percentage}%` }}
                                        />
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <p className="text-xs text-slate-400 mt-6 italic">
                            Always open to improving proficiency and working with international teams.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}