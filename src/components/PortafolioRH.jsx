import React, { useState, useEffect } from 'react';

const PortafolioRH = () => {
    const [profileData, setProfileData] = useState({
        name: 'Cargando...',
        title: 'Cargando...',
        about: 'Cargando...'
    });

    useEffect(() => {
        // fetch('https://localhost:5151/api/profile')
        fetch('http://localhost:5151/api/profile')
            .then(response => response.json())
            .then(data => {
                setProfileData(data);
            })
            .catch(error => console.error("Error conectando a la API:", error));
    }, []);

    return (
        <div className="font-sans antialiased">
            <section className="bg-slate-900 text-white py-24 px-6 text-center flex flex-col items-center justify-center min-h-[70vh]">
                <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">{profileData.name}</h1>
                <h2 lassName="text-xl md:text-3xl text-blue-400 font-semibold mb-6">{profileData.title}</h2>
                <p className="max-w-2xl mx-auto text-slate-300 mb-10 text-lg md:text-xl leading-relaxed">{profileData.about}</p>
            </section>
        </div>
    );
};

// const PortafolioRH = () => {
//     return (
//         <div className="font-sans antialiased">

//             {/* 1. HERO SECTION: Impacto en los primeros 5 segundos */}
//             <section className="bg-slate-900 text-white py-24 px-6 text-center flex flex-col items-center justify-center min-h-[70vh]">
//                 <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">
//                     Ing. Ramón René Corona Bandín
//                 </h1>
//                 <h2 className="text-xl md:text-3xl text-blue-400 font-semibold mb-6">
//                     Full Stack Engineer | Arquitectura .NET, Oracle & Microservicios
//                 </h2>
//                 <p className="max-w-2xl mx-auto text-slate-300 mb-10 text-lg md:text-xl leading-relaxed">
//                     Diseño y desarrollo sistemas empresariales de alto rendimiento. Conecto la solidez de las bases de datos relacionales con arquitecturas modernas en la nube para crear soluciones escalables.
//                 </p>

//                 {/* Call to Actions (CTAs) para RRHH */}
//                 <div className="flex flex-col sm:flex-row gap-4 w-full justify-center max-w-md">
//                     <button className="bg-blue-600 hover:bg-blue-500 transition-colors text-white font-bold py-3 px-8 rounded-lg shadow-lg flex items-center justify-center">
//                         📄 Descargar CV (PDF)
//                     </button>
//                     <button className="border-2 border-slate-600 hover:border-blue-400 hover:text-blue-400 transition-colors font-bold py-3 px-8 rounded-lg flex items-center justify-center">
//                         ✉️ Contactar
//                     </button>
//                 </div>
//             </section>

//             {/* 2. RESUMEN EJECUTIVO Y HABILIDADES: Lectura rápida de 30 segundos */}
//             <section className="py-20 px-6 bg-slate-50 text-slate-800">
//                 <div className="max-w-5xl mx-auto">

//                     <div className="mb-16">
//                         <h3 className="text-3xl font-bold border-b-4 border-blue-600 inline-block pb-2 mb-6">
//                             Perfil Profesional
//                         </h3>
//                         <p className="text-lg leading-relaxed text-slate-600">
//                             Ingeniero en Computación con 9 años de especialización en el ecosistema Oracle. Transformo lógica de negocio compleja en bases de datos relacionales (PL/SQL) hacia arquitecturas de microservicios robustas. Mi enfoque integral abarca desde la optimización del backend en C# y Node.js hasta la entrega de interfaces de usuario dinámicas con React, asegurando rendimiento, escalabilidad y una excelente experiencia de usuario.
//                         </p>
//                     </div>

//                     <h3 className="text-2xl font-bold mb-8 text-slate-800">Stack Tecnológico</h3>

//                     {/* Matriz de Habilidades - Estructura de tarjetas */}
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

//                         {/* Tarjeta 1 */}
//                         <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
//                             <h4 className="font-bold text-blue-600 text-lg mb-3 flex items-center gap-2">
//                                 🗄️ Bases de Datos
//                             </h4>
//                             <ul className="text-slate-600 space-y-2">
//                                 <li>• Oracle Database</li>
//                                 <li>• PL/SQL (Tuning, Triggers, SPs)</li>
//                                 <li>• SQLite</li>
//                                 <li>• Modelado Relacional</li>
//                             </ul>
//                         </div>

//                         {/* Tarjeta 2 */}
//                         <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
//                             <h4 className="font-bold text-blue-600 text-lg mb-3 flex items-center gap-2">
//                                 ⚙️ Backend & APIs
//                             </h4>
//                             <ul className="text-slate-600 space-y-2">
//                                 <li>• C# / .NET Core</li>
//                                 <li>• Node.js (API Gateway)</li>
//                                 <li>• Python / Django</li>
//                                 <li>• Arquitectura RESTful</li>
//                             </ul>
//                         </div>

//                         {/* Tarjeta 3 */}
//                         <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
//                             <h4 className="font-bold text-blue-600 text-lg mb-3 flex items-center gap-2">
//                                 💻 Frontend
//                             </h4>
//                             <ul className="text-slate-600 space-y-2">
//                                 <li>• React.js</li>
//                                 <li>• HTML5 / CSS3</li>
//                                 <li>• JavaScript</li>
//                                 <li>• XAML / .NET MAUI</li>
//                             </ul>
//                         </div>

//                         {/* Tarjeta 4 */}
//                         <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
//                             <h4 className="font-bold text-blue-600 text-lg mb-3 flex items-center gap-2">
//                                 ☁️ Cloud & Entorno
//                             </h4>
//                             <ul className="text-slate-600 space-y-2">
//                                 <li>• Microsoft Azure</li>
//                                 <li>• Visual Studio Community</li>
//                                 <li>• Git / GitHub</li>
//                                 <li>• Metodologías Ágiles</li>
//                             </ul>
//                         </div>

//                     </div>
//                 </div>
//             </section>

//         </div>
//     );
// };

export default PortafolioRH;