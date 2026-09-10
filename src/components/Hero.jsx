import React from 'react';

export default function Hero() {
    return (
        <section className="py-16 md:py-24">
            <div className="max-w-3xl">
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
                    Database & <br className="hidden md:block" />
                    <span className="whitespace-nowrap">
                        Software <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Engineer.</span>
                    </span>
                </h1>

                <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-2xl">
                    Specialist in relational databases, process automation, and backend development. 
                    Designing scalable solutions from Oracle PL/SQL modeling to the implementation of microservices and RESTful APIs using C#.
                </p>

                <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-semibold border border-slate-200">
                        Oracle DB
                    </span>
                    <span className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-semibold border border-slate-200">
                        C# .NET Core
                    </span>
                    <span className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-semibold border border-slate-200">
                        React & Azure
                    </span>
                    <span className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-semibold border border-slate-200">
                        PL/SQL & SQL
                    </span>
                    <span className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-semibold border border-slate-200">
                        Scrum Master
                    </span>
                    <span className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-semibold border border-slate-200">
                        OCI
                    </span>
                </div>
            </div>
        </section>
    );
}