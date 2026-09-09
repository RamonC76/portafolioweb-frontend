import React from 'react';

const PortafolioTech = () => {
    return (
        <div className="font-sans antialiased bg-slate-900 text-slate-300 py-20 px-6">
            <div className="max-w-6xl mx-auto">

                <div className="mb-16 border-b border-slate-700 pb-6">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                        Casos de Estudio & Arquitectura
                    </h2>
                    <p className="text-lg text-slate-400">
                        Exploración profunda de decisiones de diseño, optimización de bases de datos relacionales e implementación de microservicios.
                    </p>
                </div>

                <div className="space-y-24">

                    {/* CASO DE ESTUDIO 1: CRM & Call Center */}
                    <article className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="flex gap-2 mb-4">
                                <span className="bg-blue-900/50 text-blue-300 text-xs font-bold px-3 py-1 rounded-full border border-blue-700/50">C# .NET 8</span>
                                <span className="bg-red-900/50 text-red-300 text-xs font-bold px-3 py-1 rounded-full border border-red-700/50">Oracle PL/SQL</span>
                                <span className="bg-green-900/50 text-green-300 text-xs font-bold px-3 py-1 rounded-full border border-green-700/50">Node.js Gateway</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">
                                Sistema de Automatización CRM y Call Center
                            </h3>

                            <div className="space-y-4 text-slate-400">
                                <p>
                                    <strong className="text-slate-200">El Problema:</strong> Necesidad de orquestar un alto volumen de datos transaccionales para gestión de cobranza, requiriendo baja latencia y alta disponibilidad para los operadores del Call Center.
                                </p>
                                <p>
                                    <strong className="text-slate-200">La Solución:</strong> Diseño de una arquitectura orientada a microservicios alojada en Azure. Se implementó un API Gateway en Node.js que enruta las peticiones de la SPA en React hacia un microservicio central en C#. La lógica pesada de reportes y cruce de datos financieros se delegó a procedimientos almacenados optimizados en Oracle, reduciendo el tiempo de ejecución de las consultas.
                                </p>
                            </div>

                            <div className="mt-8 flex flex-wrap gap-4">
                                <a href="#" className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-5 py-2 rounded-lg transition-colors border border-slate-600">
                                    <span>🔗 GitHub Repo</span>
                                </a>
                                <a href="#" className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-5 py-2 rounded-lg transition-colors border border-slate-600">
                                    <span>📖 Swagger Docs</span>
                                </a>
                            </div>
                        </div>

                        {/* Representación visual de la arquitectura */}
                        <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-2xl">
                            <h4 className="text-sm font-bold text-slate-400 mb-4 uppercase tracking-wider">Flujo de Datos</h4>
                            <div className="flex flex-col gap-3">
                                <div className="bg-slate-700 p-3 rounded text-center font-mono text-sm text-blue-300 border border-slate-600">Frontend (React)</div>
                                <div className="text-center text-slate-500">↓ REST / JSON ↓</div>
                                <div className="bg-slate-700 p-3 rounded text-center font-mono text-sm text-green-300 border border-slate-600">API Gateway (Node.js)</div>
                                <div className="text-center text-slate-500">↓ ruteo interno ↓</div>
                                <div className="bg-slate-700 p-3 rounded text-center font-mono text-sm text-purple-300 border border-slate-600">Microservicio Core (C# .NET)</div>
                                <div className="text-center text-slate-500">↓ Entity Framework / ADO.NET ↓</div>
                                <div className="bg-slate-700 p-3 rounded text-center font-mono text-sm text-red-300 border border-slate-600 flex justify-between px-4">
                                    <span>Oracle DB</span>
                                    <span>(PL/SQL + Triggers)</span>
                                </div>
                            </div>
                        </div>
                    </article>

                    {/* Separador Visual */}
                    <hr className="border-slate-800" />

                    {/* CASO DE ESTUDIO 2: App Móvil .NET MAUI */}
                    <article className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1 bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-2xl flex items-center justify-center min-h-[300px]">
                            {/* Aquí iría un mockup de la app o un snippet de código XAML/C# */}
                            <pre className="text-xs font-mono text-emerald-400 bg-slate-900 p-4 rounded-lg overflow-x-auto w-full">
                                {`// Implementación de persistencia local SQLite
public async Task<int> GuardarRegistroAsync(Registro item)
{
    await Init();
    if (item.Id != 0)
        return await Database.UpdateAsync(item);
    else
        return await Database.InsertAsync(item);
}`}
                            </pre>
                        </div>

                        <div className="order-1 lg:order-2">
                            <div className="flex gap-2 mb-4">
                                <span className="bg-purple-900/50 text-purple-300 text-xs font-bold px-3 py-1 rounded-full border border-purple-700/50">.NET MAUI</span>
                                <span className="bg-blue-900/50 text-blue-300 text-xs font-bold px-3 py-1 rounded-full border border-blue-700/50">C# / XAML</span>
                                <span className="bg-sky-900/50 text-sky-300 text-xs font-bold px-3 py-1 rounded-full border border-sky-700/50">SQLite</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">
                                Aplicación Móvil Multiplataforma con Persistencia Local
                            </h3>

                            <div className="space-y-4 text-slate-400">
                                <p>
                                    <strong className="text-slate-200">El Problema:</strong> Desarrollo de una interfaz móvil fluida que pudiera operar en entornos con conectividad intermitente, requiriendo un almacenamiento robusto en el dispositivo.
                                </p>
                                <p>
                                    <strong className="text-slate-200">La Solución:</strong> Construcción de la UI utilizando XAML con el framework .NET MAUI. Se implementó una base de datos local embebida con SQLite para garantizar la disponibilidad de los datos offline, utilizando el patrón MVVM (Model-View-ViewModel) para una separación limpia entre la vista y la lógica de negocio en C#.
                                </p>
                            </div>

                            <div className="mt-8 flex flex-wrap gap-4">
                                <a href="#" className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-5 py-2 rounded-lg transition-colors border border-slate-600">
                                    <span>🔗 GitHub Repo</span>
                                </a>
                            </div>
                        </div>
                    </article>

                </div>
            </div>
        </div>
    );
};

export default PortafolioTech;