import React, { useEffect, useRef, useState } from "react";

const statsData = [
  {
    value: 25000,
    suffix: "+",
    subtitle: "Happy Patients Treated",
    icon: "fa-smile",
    gradient: "linear-gradient(135deg, #2c3e50 0%, #3498db 100%)",
  },
  {
    value: 15,
    suffix: "+",
    subtitle: "Specialist Doctors Team",
    icon: "fa-user-md",
    gradient: "linear-gradient(135deg, #1a5276 0%, #2980b9 100%)",
  },
  {
    value: 50,
    suffix: "+",
    subtitle: "Beds Capacity Ward",
    icon: "fa-procedures",
    gradient: "linear-gradient(135deg, #117a65 0%, #16a085 100%)",
  },
  {
    value: 24,
    suffix: "/7",
    subtitle: "Trauma Emergency Cover",
    icon: "fa-heartbeat",
    gradient: "linear-gradient(135deg, #7b1fa2 0%, #9c27b0 100%)",
  },
];

export default function Counter() {
  const [counts, setCounts] = useState(statsData.map(() => 0));
  const counterRef = useRef(null);

  useEffect(() => {
    let interval;

    const startCounter = () => {
      interval = setInterval(() => {
        setCounts((prev) =>
          prev.map((count, index) => {
            const target = statsData[index].value;

            // 0.5 second speed
            const increment = Math.ceil(target / 160);

            if (count < target) {
              return Math.min(count + increment, target);
            }

            return target;
          })
        );
      }, 45);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // reset counter every scroll view
          setCounts(statsData.map(() => 0));

          clearInterval(interval);
          startCounter();
        } else {
          clearInterval(interval);
        }
      },
      {
        threshold: 0.4,
      }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      clearInterval(interval);

      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  return (
    <div
      className="col-lg-6"
      data-aos="zoom-in"
      data-aos-delay="200"
      ref={counterRef}
    >
      <div className="row g-3 text-center">
        {statsData.map((st, idx) => (
          <div className="col-6" key={idx}>
            <div
              className="premium-service-card p-4 rounded-4 shadow border-0 text-white position-relative overflow-hidden h-100"
              style={{
                background: st.gradient,
              }}
            >
              <i className={`fas ${st.icon} fs-1 mb-3 opacity-75`}></i>

              <h2 className="fw-bold text-white opacity-75 mb-1">
                {counts[idx].toLocaleString()}
                {st.suffix}
              </h2>

              <small
                className="d-block text-white-50 fw-medium"
                style={{ fontSize: "0.85rem" }}
              >
                {st.subtitle}
              </small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}