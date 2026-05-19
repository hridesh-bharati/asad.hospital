import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaAmbulance, FaBed, FaDesktop, FaFlask, FaHospital, FaMicroscope, FaSyringe, FaUserNurse } from 'react-icons/fa';

const Facilities = () => {
  const facilities = [
    { icon: <FaAmbulance />, name: '24×7 Emergency' },
    { icon: <FaHospital />, name: 'Modern Operation Theatre' },
    { icon: <FaBed />, name: 'ICU Facility' },
    { icon: <FaSyringe />, name: 'Pharmacy' },
    { icon: <FaBed />, name: 'Private Rooms' },
    { icon: <FaUserNurse />, name: 'Experienced Nursing Staff' },
    { icon: <FaAmbulance />, name: 'Ambulance Support' },
    { icon: <FaFlask />, name: 'Laboratory Support' },
    { icon: <FaDesktop />, name: 'Digital Monitoring' },
  ];

  return (
    <section className="py-5 bg-light">
      <Container>
        <div className="section-title">
          <h2>Hospital Facilities</h2>
        </div>
        <Row>
          {facilities.map((facility, index) => (
            <Col lg={3} md={4} sm={6} className="mb-4" key={index}>
              <div className="text-center p-3 bg-white rounded-3 shadow-sm h-100 facility-card">
                <div style={{ color: '#1a3c6e', fontSize: '2.5rem' }} className="mb-2">
                  {facility.icon}
                </div>
                <h6 className="fw-bold">{facility.name}</h6>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Facilities;