import React, { useState, useMemo } from 'react';

const FaqSection = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeCategory, setActiveCategory] = useState(0);
    const [openAccordions, setOpenAccordions] = useState({});

    const faqData = useMemo(() => [
        {
            category: "General Hospital",
            icon: "🏥",
            badgeColor: "#0284c7",
            bgColor: "#f0f9ff",
            items: [
                { q: "Is Asad Hospital open 24 hours?", a: "Yes, Asad Hospital is a 24×7 multispeciality hospital. Emergency, trauma, and ambulance services are available round the clock." },
                { q: "Where is Asad Hospital located?", a: "📍 Near Bhagat Singh Circle, Alwar, Rajasthan. You can find the exact location via Google Map on our website." },
                { q: "Is parking available at the hospital?", a: "Yes, patient and visitor parking is available near the hospital entrance." },
                { q: "Does the hospital have Hindi-speaking staff?", a: "Yes, most of our staff and doctors are fluent in Hindi and English for patient convenience." }
            ]
        },
        {
            category: "Emergency & Trauma",
            icon: "🚑",
            badgeColor: "#dc2626",
            bgColor: "#fef2f2",
            items: [
                { q: "What emergency services are available 24/7?", a: "Trauma care, accident and injury management, emergency surgery, critical care support, and ambulance service." },
                { q: "How can I call an ambulance?", a: "Call our emergency numbers: 📞 +91 9587298975 or +91 7976573436" },
                { q: "Is there an ICU available at all times?", a: "Yes, we have a modern ICU facility with continuous monitoring and experienced nursing staff." }
            ]
        },
        {
            category: "Doctors & Specialists",
            icon: "👨‍⚕️",
            badgeColor: "#16a34a",
            bgColor: "#f0fdf4",
            items: [
                { q: "Which specialist doctors are available?", a: "Dr. Sahun Khan (General & Laparoscopic Surgeon), Dr. Parveen (Obstetrician & Gynecologist), Dr. Kanakaroda (Orthopedic Specialist), Dr. Chandrashekar Sharma (Urinary Problem Specialist)." },
                { q: "Are doctors available on Sunday and night time?", a: "Yes, our doctors are available 24 hours for emergencies and scheduled duties." },
                { q: "Do I need an appointment to see a specialist?", a: "Appointments are recommended but not mandatory for emergencies. You can book via phone or WhatsApp." }
            ]
        },
        {
            category: "Insurance & Schemes",
            icon: "💰",
            badgeColor: "#d97706",
            bgColor: "#fffbeb",
            items: [
                { q: "Does Asad Hospital accept government schemes?", a: "Yes, we accept Rajasthan MAA Yojna and Haryana Ayushman Bharat Yojna." },
                { q: "Is cashless treatment available?", a: "Yes, we provide cashless treatment under all major TPAs and government schemes for eligible patients." },
                { q: "How do I check eligibility for cashless treatment?", a: "Contact our front desk or call +91 9587298975 with your scheme/insurance details." }
            ]
        },
        {
            category: "Services & Facilities",
            icon: "🏨",
            badgeColor: "#2563eb",
            bgColor: "#eff6ff",
            items: [
                { q: "What surgeries are performed?", a: "Laparoscopic (gallbladder, appendix, hernia), general surgery, orthopedic surgery, cesarean section, and emergency trauma surgery." },
                { q: "Do you provide maternity services?", a: "Yes. We offer normal delivery, cesarean section, pregnancy care, and high-risk pregnancy management." },
                { q: "Does the hospital have a pharmacy?", a: "Yes, there is an in-house pharmacy for medicines as prescribed by doctors." },
                { q: "Are private rooms available?", a: "Yes, we offer private rooms along with general wards." },
                { q: "Do you have laboratory support?", a: "Yes, we have laboratory and digital monitoring facilities on-site." }
            ]
        },
        {
            category: "Appointment & Contact",
            icon: "📞",
            badgeColor: "#7c3aed",
            bgColor: "#f5f3ff",
            items: [
                { q: "How can I book an appointment?", a: "Call +91 9587298975, use WhatsApp, or visit the hospital directly." },
                { q: "Is there a WhatsApp support number?", a: "Yes, WhatsApp support is available for appointments and inquiries." },
                { q: "Can I see Google reviews?", a: "Yes, Google Reviews are linked on our website and Google Maps listing." }
            ]
        },
        {
            category: "Patient Information",
            icon: "✅",
            badgeColor: "#4b5563",
            bgColor: "#f9fafb",
            items: [
                { q: "Is Asad Hospital affordable?", a: "Yes, we provide affordable treatment with cashless and government scheme options." },
                { q: "Do you treat patients from Haryana?", a: "Yes, patients from Haryana are welcome, especially under Ayushman Bharat Yojna." },
                { q: "What should I bring during admission?", a: "ID proof, scheme/insurance card, previous medical reports, and doctor's reference if any." }
            ]
        }
    ], []);

    const toggleAccordion = (key) => {
        setOpenAccordions(prev => ({ ...prev, [key]: !prev[key] }));
    };

    const normalizedSearch = searchTerm.trim().toLowerCase();

    const filteredData = useMemo(() => {
        if (!normalizedSearch) return faqData;
        return faqData
            .map((cat, catIdx) => ({
                ...cat,
                originalIdx: catIdx,
                items: cat.items.filter(item =>
                    item.q.toLowerCase().includes(normalizedSearch) ||
                    item.a.toLowerCase().includes(normalizedSearch)
                )
            }))
            .filter(cat => cat.items.length > 0);
    }, [normalizedSearch, faqData]);

    return (
        <div className="container py-5" style={{ maxWidth: '1200px' }}>

            {/* Header */}
            <div className="text-center mb-5">
                <span className="badge px-3 py-2 rounded-pill mb-3 shadow-sm"
                    style={{ background: '#E0F2FE', color: '#0369A1', fontWeight: '700', fontSize: '0.85rem' }}>
                    ✨ ASAD HOSPITAL HELP CENTER
                </span>

                <h1 className="display-5 fw-bold mb-3">
                    Assistance & Frequently Asked <span style={{ color: '#0F52BA' }}>Questions</span>
                </h1>

                <p className="text-secondary mx-auto mb-4" style={{ maxWidth: '650px', fontSize: '1.1rem' }}>
                    Everything you need to know about our multi-specialty care, cashless panels, round-the-clock emergency support, and doctor schedules.
                </p>

                {/* Quick Action Buttons */}
                <div className="d-flex flex-wrap justify-content-center gap-3">
                    <a href="tel:+919587298975" className="btn btn-danger px-4 py-2 fw-bold">
                        📞 Emergency: +91 9587298975
                    </a>
                    <a href="https://wa.me/919587298975" target="_blank" rel="noopener noreferrer" className="btn btn-success px-4 py-2 fw-bold">
                        💬 WhatsApp Live Desk
                    </a>
                </div>
            </div>

            {/* Search Box */}
            <div className="row justify-content-center mb-5">
                <div className="col-md-9 col-lg-7">
                    <div className="input-group shadow-sm">
                        <span className="input-group-text bg-white border-end-0 fs-5">🔍</span>
                        <input
                            type="text"
                            className="form-control form-control-lg py-3 border-start-0"
                            placeholder="Type query (e.g. 'Ayushman', 'ICU', 'cashless')..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        {searchTerm && (
                            <button
                                className="btn btn-light border"
                                type="button"
                                onClick={() => setSearchTerm('')}
                            >
                                ✕
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {/* Main Content */}
            {filteredData.length === 0 ? (
                <div className="text-center py-5 bg-light rounded-4 p-5">
                    <div className="fs-1 mb-2">🔎</div>
                    <h3 className="h5 fw-bold">No answers found for "{searchTerm}"</h3>
                    <button className="btn btn-primary mt-3 px-4" onClick={() => setSearchTerm('')}>
                        Clear Search
                    </button>
                </div>
            ) : (
                <div className="row g-4">

                    {/* Sidebar Categories */}
                    {!normalizedSearch && (
                        <div className="col-lg-4 d-none d-lg-block">
                            <div className="sticky-top" style={{ top: '30px' }}>
                                <p className="text-uppercase small fw-bold text-muted mb-3 px-2">
                                    Hospital Departments
                                </p>
                                {faqData.map((cat, idx) => (
                                    <div
                                        key={idx}
                                        onClick={() => setActiveCategory(idx)}
                                        className="d-flex align-items-center justify-content-between p-3 mb-2 rounded-3 border cursor-pointer transition-all"
                                        style={{
                                            backgroundColor: activeCategory === idx ? cat.bgColor : 'white',
                                            borderColor: activeCategory === idx ? cat.badgeColor : '#dee2e6',
                                            fontWeight: activeCategory === idx ? '700' : '500',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        <div className="d-flex align-items-center gap-3">
                                            <span className="fs-4">{cat.icon}</span>
                                            <span>{cat.category}</span>
                                        </div>
                                        <span className={`badge bg-${activeCategory === idx ? 'primary' : 'secondary'} rounded-pill`}>
                                            {cat.items.length}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* FAQ Accordions */}
                    <div className={normalizedSearch ? "col-lg-12" : "col-lg-8"}>
                        {filteredData.map((category, catIdx) => {
                            const currentCatIdx = normalizedSearch ? category.originalIdx : activeCategory;

                            if (!normalizedSearch && catIdx !== activeCategory) return null;

                            return (
                                <div key={catIdx} className="mb-4">
                                    {normalizedSearch && (
                                        <h5 className="fw-bold mb-3">
                                            {category.icon} {category.category}
                                        </h5>
                                    )}

                                    {category.items.map((item, itemIdx) => {
                                        const uniqueIdentifier = `${currentCatIdx}-${itemIdx}`;
                                        const isExpanded = normalizedSearch ? true : !!openAccordions[uniqueIdentifier];

                                        return (
                                            <div key={itemIdx} className="card mb-3 shadow-sm border-0">
                                                <div
                                                    className="card-header bg-white border-0 p-0"
                                                    onClick={() => !normalizedSearch && toggleAccordion(uniqueIdentifier)}
                                                    style={{ cursor: !normalizedSearch ? 'pointer' : 'default' }}
                                                >
                                                    <div className="d-flex justify-content-between align-items-center p-3">
                                                        <h5 className="mb-0 fw-semibold fs-6">{item.q}</h5>
                                                        {!normalizedSearch && (
                                                            <span className="text-secondary">
                                                                {isExpanded ? '▲' : '▼'}
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>

                                                {isExpanded && (
                                                    <div className="card-body pt-0">
                                                        <div className="p-3 bg-light rounded-3"
                                                            style={{ borderLeft: `4px solid ${category.badgeColor}` }}>
                                                            {item.a}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}

            {/* Call to Action */}
            <div className="mt-5 rounded-4 overflow-hidden shadow-lg text-center p-5"
                style={{ background: 'linear-gradient(135deg, #021526 0%, #032B54 100%)' }}>
                <h2 className="fw-bold text-white mb-2">Still have questions?</h2>
                <p className="text-white-50 mx-auto mb-4" style={{ maxWidth: '520px' }}>
                    Our dynamic customer onboarding desk & medical triage support teams are operational 24 hours a day.
                </p>

                <div className="d-flex flex-wrap justify-content-center gap-3">
                    <a href="tel:+919587298975" className="btn btn-light fw-bold px-4 py-2">
                        📞 Call Now
                    </a>
                    <a href="https://wa.me/919587298975" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light px-4 py-2 fw-bold">
                        💬 WhatsApp
                    </a>
                </div>

                <div className="mt-4 pt-3 border-top border-light border-opacity-10 text-white-50 small">
                    <span>📍 Near Bhagat Singh Circle, Alwar, Rajasthan</span>
                    <span className="mx-2">•</span>
                    <span className="text-success">🟢 Open 24×7</span>
                </div>
            </div>

            <style>{`
        .cursor-pointer { cursor: pointer; }
        .transition-all { transition: all 0.2s ease; }
        .card-header:hover {
          background-color: #f8f9fa;
        }
      `}</style>
        </div>
    );
};

export default FaqSection;