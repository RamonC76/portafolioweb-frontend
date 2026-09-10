import React, { useState } from 'react';

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [status, setStatus] = useState({
        submitting: false,
        success: false,
        error: null
    });

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ submitting: true, success: false, error: null });

        try {
            const response = await fetch('https://formspree.io/f/xqpzkbjn', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus({ submitting: false, success: true, error: null });
                setFormData({ name: '', email: '', message: '' });
            } else {
                const data = await response.json();
                throw new Error(data.error || 'There was an error sending the message.');
            }
        } catch (error) {
            setStatus({ submitting: false, success: false, error: error.message });
        }
    };

    return (
        <section className="py-16 mt-8 border-t border-slate-200">
            <div className="mb-12 text-center">
                <h2 className="text-3xl font-extrabold text-slate-900 mb-3">Contact & Oportunities</h2>
                <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
                    ¿Are you interested in optimizing your database architecture, implementing AI automations, or developing a scalable backend solution? Let's talk.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

                <div className="bg-slate-900 text-slate-300 p-8 rounded-2xl shadow-lg flex flex-col justify-between">
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-8">Direct Information</h3>

                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center flex-shrink-0 border border-slate-700">
                                    <span className="text-blue-400 font-bold text-lg">📍</span>
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold text-white">Geographic Availability</h4>
                                    <p className="text-sm text-slate-400 mt-1">Mexico City (Agrícola Oriental) <br /> León, Guanajuato</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center flex-shrink-0 border border-slate-700">
                                    <span className="text-blue-400 font-bold text-lg">✉️</span>
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold text-white">Professional Email</h4>
                                    <p className="text-sm text-slate-400 mt-1">ramon.r.corona76@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center flex-shrink-0 border border-slate-700">
                                    <span className="text-blue-400 font-bold text-lg">🔗</span>
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold text-white">Social Media</h4>
                                    <p className="text-sm text-slate-400 mt-1 flex space-x-3">
                                        <a href="https://www.linkedin.com/in/ramon-corona-2b2071130/" target="_blank" className="hover:text-blue-400 transition-colors">LinkedIn</a>
                                        <span>&bull;</span>
                                        <a href="https://github.com/RamonC76" target="_blank" className="hover:text-blue-400 transition-colors">GitHub</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                    {status.success ? (
                        <div className="text-center py-8">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                                <span className="text-2xl">✅</span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-2">Message sent successfully!</h3>
                            <p className="text-slate-600 mb-6">Thank you for reaching out. I'll get back to you shortly.</p>
                            <button
                                onClick={() => setStatus({ submitting: false, success: false, error: null })}
                                className="text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                            >
                                Send another message
                            </button>
                        </div>
                    ) : (
                        <form className="space-y-5" onSubmit={handleSubmit}>
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-1">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition bg-slate-50 focus:bg-white"
                                    placeholder="Your full name"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-1">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition bg-slate-50 focus:bg-white"
                                    placeholder="your.email@company.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-1">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="4"
                                    className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition resize-none bg-slate-50 focus:bg-white"
                                    placeholder="How can I help you?"
                                ></textarea>
                            </div>

                            {status.error && (
                                <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg">
                                    {status.error}
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={status.submitting}
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition shadow-md shadow-blue-500/20 disabled:bg-slate-400 disabled:shadow-none flex justify-center items-center"
                            >
                                {status.submitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}