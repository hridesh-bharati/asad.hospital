import React from 'react';

export default function AboutSection() {
  return (
    <div className="bg-light text-dark font-sans" style={{ fontFamily: "'Poppins', sans-serif" }}>
      
      {/* 1. HERO / HEADER SECTION */}
      <section className="bg-dark text-white py-5 text-center position-relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #111 0%, #222 100%)' }}>
        <div className="container py-5">
          <span className="badge bg-danger mb-3 px-3 py-2 text-uppercase tracking-wider">Who We Are</span>
          <h1 className="display-4 fw-bold mb-3">Empowering Innovation & <br/><span className="text-danger">Digital Excellence</span></h1>
          <p className="lead text-muted mx-auto" style={{ maxWidth: '700px' }}>
            We deliver state-of-the-art technology solutions tailored to supercharge your business growth and streamline operations.
          </p>
          <div className="mt-4">
            <button className="btn btn-danger btn-lg me-3 px-4 shadow">Get Started Now</button>
            <button className="btn btn-outline-light btn-lg px-4">Learn More</button>
          </div>
        </div>
        {/* Subtle decorative bottom border */}
        <div className="position-absolute bottom-0 start-0 w-100" style={{ height: '4px', backgroundColor: '#dc3545' }}></div>
      </section>

      {/* 2. STATS OVERVIEW */}
      <section className="py-5 bg-white border-bottom">
        <div className="container">
          <div className="row g-4 text-center">
            <div className="col-6 col-md-3">
              <h2 className="display-5 fw-bold text-danger">10K+</h2>
              <p className="text-muted small text-uppercase fw-semibold mb-0">Active Clients</p>
            </div>
            <div className="col-6 col-md-3">
              <h2 className="display-5 fw-bold text-dark">250+</h2>
              <p className="text-muted small text-uppercase fw-semibold mb-0">Projects Delivered</p>
            </div>
            <div className="col-6 col-md-3">
              <h2 className="display-5 fw-bold text-danger">99%</h2>
              <p className="text-muted small text-uppercase fw-semibold mb-0">Satisfaction Rate</p>
            </div>
            <div className="col-6 col-md-3">
              <h2 className="display-5 fw-bold text-dark">15+</h2>
              <p className="text-muted small text-uppercase fw-semibold mb-0">Global Awards</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE SERVICES / VALUES SECTION */}
      <section className="py-5">
        <div className="container py-4">
          <div className="text-center mb-5">
            <h2 className="fw-bold text-dark position-relative d-inline-block pb-2">
              Our Core Expertise
              <span className="position-absolute bottom-0 start-50 translate-middle-x bg-danger" style={{ width: '50px', height: '3px' }}></span>
            </h2>
            <p className="text-muted mt-2">Discover how we can transform your digital landscape.</p>
          </div>

          <div className="row g-4">
            {/* Card 1 */}
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm p-4 text-center hover-top transition">
                <div className="d-inline-flex align-items-center justify-content-center bg-danger-subtle text-danger rounded-circle mb-4 mx-auto" style={{ width: '60px', height: '60px' }}>
                  <i className="bi bi-cpu-fill fs-3">⚙️</i>
                </div>
                <h4 className="fw-bold mb-3">Core Engine Boost</h4>
                <p className="text-muted small">
                  Optimize your backend systems with industry-grade performance enhancements and scalable cloud architecture.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm p-4 text-center border-top border-danger border-3 hover-top transition">
                <div className="d-inline-flex align-items-center justify-content-center bg-danger text-white rounded-circle mb-4 mx-auto" style={{ width: '60px', height: '60px' }}>
                  <i className="bi bi-lightning-charge-fill fs-3">⚡</i>
                </div>
                <h4 className="fw-bold mb-3">High-Speed Execution</h4>
                <p className="text-muted small">
                  Experience lightning-fast data processing pipelines designed for modern real-time analytical reporting frameworks.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm p-4 text-center hover-top transition">
                <div className="d-inline-flex align-items-center justify-content-center bg-danger-subtle text-danger rounded-circle mb-4 mx-auto" style={{ width: '60px', height: '60px' }}>
                  <i className="bi bi-shield-lock-fill fs-3">🔒</i>
                </div>
                <h4 className="fw-bold mb-3">Secured Solutions</h4>
                <p className="text-muted small">
                  Top-tier enterprise data encryption layer protocols ensuring complete transparency and multi-layered security.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DETAIL FEATURE SECTIONS ( alternating image/text style ) */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <span className="text-danger fw-bold text-uppercase small tracking-wide">Advanced Dashboard</span>
              <h2 className="fw-bold display-6 mt-2 mb-4">Monitor Everything from One Unified Portal</h2>
              <p className="text-muted">
                Our intuitive platform aggregates complex analytical metrics into smooth visual reporting charts, enabling lightning-fast decisions.
              </p>
              <ul className="list-unstyled my-4">
                <li className="mb-2 d-flex align-items-center"><span className="text-danger me-2">✔</span> Real-time latency tracking updates</li>
                <li className="mb-2 d-flex align-items-center"><span className="text-danger me-2">✔</span> Fully automated daily back-ups</li>
                <li className="mb-2 d-flex align-items-center"><span className="text-danger me-2">✔</span> Multi-account user role provisioning</li>
              </ul>
              <button className="btn btn-outline-danger px-4">Explore Dashboard</button>
            </div>
            <div className="col-lg-6">
              {/* Mockup Placeholder Box styled cleanly with Bootstrap */}
              <div className="bg-dark text-white p-5 rounded-4 shadow-lg text-center position-relative overflow-hidden" style={{ minHeight: '300px' }}>
                <div className="bg-gradient p-4 rounded border border-secondary bg-opacity-10">
                  <h5 className="text-danger mb-3">⚡ System Health Active</h5>
                  <div className="progress mb-2" style={{ height: '8px' }}>
                    <div className="progress-bar bg-danger" role="progressbar" style={{ width: '75%' }}></div>
                  </div>
                  <div className="progress mb-2" style={{ height: '8px' }}>
                    <div className="progress-bar bg-warning" role="progressbar" style={{ width: '90%' }}></div>
                  </div>
                  <div className="progress" style={{ height: '8px' }}>
                    <div className="progress-bar bg-success" role="progressbar" style={{ width: '60%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION FOOTER BANNER */}
      <section className="bg-dark text-white text-center py-5">
        <div className="container py-4">
          <h2 className="fw-bold mb-3 text-uppercase tracking-wide">Ready to Elevate Your Strategy?</h2>
          <p className="text-muted mb-4 mx-auto" style={{ maxWidth: '600px' }}>
            Join thousands of modern teams building faster, smarter architectures globally.
          </p>
          <div className="d-flex justify-content-center gap-3">
            <button className="btn btn-danger btn-lg px-5">Contact Us</button>
            <button className="btn btn-secondary btn-lg px-4 bg-transparent border-secondary text-white">View Pricing</button>
          </div>
        </div>
      </section>

      {/* INLINE CSS HELPER STYLES */}
      <style>{`
        .hover-top {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .hover-top:hover {
          transform: translateY(-8px);
          box-shadow: 0 1rem 3rem rgba(0,0,0,.125)!important;
        }
        .tracking-wider { letter-spacing: 2px; }
        .tracking-wide { letter-spacing: 1px; }
      `}</style>

    </div>
  );
}