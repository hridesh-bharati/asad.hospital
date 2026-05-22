import { useState, useMemo } from "react";

const faqData = [
   {
    category: "Gynaecology & Women's Health",
    icon: "👩‍⚕️",
    badgeColor: "#c2185b",
    bgColor: "#fce4ec",
    items: [
      { q: "What gynaecological services are available at Asad Hospital?", a: "Dr. Parveen Khan (MBBS, MS, FMAS) provides comprehensive women's healthcare including antenatal care, normal delivery, C-section, gynaecological surgeries, and treatment of menstrual and hormonal disorders." },
      { q: "Is Asad Hospital good for pregnancy and delivery?", a: "Yes, Dr. Parveen Khan is an experienced obstetrician with MS qualifications and experience at SMS Hospital Jaipur. She manages normal and complicated pregnancies, deliveries, and post-natal care." },
      { q: "Does the hospital have a labour room?", a: "Yes, the hospital has a labour room equipped for normal and assisted deliveries, with emergency C-section capability available at all times." },
      { q: "What is a C-section (Caesarean section) and is it available here?", a: "A C-section is a surgical procedure to deliver a baby through an abdominal incision when vaginal delivery is not safe. Yes, C-sections are performed at Asad Hospital, both planned and emergency." },
      { q: "What are the signs I should see a gynaecologist?", a: "Consult Dr. Parveen Khan for: irregular or painful periods, white discharge, pelvic pain, pregnancy check-ups, delayed periods, PCOS symptoms, or any reproductive health concern." },
      { q: "Does the hospital provide antenatal (pregnancy) care?", a: "Yes, regular antenatal check-ups including weight monitoring, BP check, USG referrals, blood tests, and iron supplementation guidance are provided throughout pregnancy." },
      { q: "Is PCOS (Polycystic Ovary Syndrome) treated at Asad Hospital?", a: "Yes, Dr. Parveen Khan diagnoses and manages PCOS through lifestyle counselling, hormonal treatment, and surgical options like laparoscopic ovarian drilling if required." },
      { q: "Is laparoscopic gynaecological surgery available?", a: "Yes. Dr. Parveen Khan holds FMAS (Fellow of Minimal Access Surgery), allowing her to perform laparoscopic procedures like diagnostic laparoscopy, ovarian cyst removal, and tubal ligation." },
      { q: "What is hysterectomy and is it performed here?", a: "Hysterectomy is the surgical removal of the uterus, performed for fibroids, cancer, or severe endometriosis. Both open and laparoscopic hysterectomy can be discussed with Dr. Parveen Khan." },
      { q: "What are uterine fibroids and can they be treated here?", a: "Fibroids are non-cancerous growths in the uterus causing heavy bleeding and pelvic pain. They are diagnosed via USG and treated medically or surgically at Asad Hospital." },
      { q: "Is family planning advice available at Asad Hospital?", a: "Yes, Dr. Parveen Khan provides family planning counselling, including contraceptive options, IUD insertion, tubectomy, and vasectomy referrals." },
      { q: "What is the safest place to deliver a baby in Alwar?", a: "Asad Hospital is a trusted choice for delivery in Alwar with a qualified MS Gynaecologist, dedicated labour room, 24×7 emergency surgery capability, and a caring nursing team." },
      { q: "Can I get an ultrasound (USG) done at the hospital?", a: "Sonography (USG) referrals are available. The hospital is located near Sahara Sonography, making diagnostic imaging convenient for patients." },
      { q: "What should I bring for my first gynaecology appointment?", a: "Bring any previous reports (USG, blood tests), your last period date, a list of current medicines, and your insurance card if applicable." },
      { q: "Are female nurses available during gynaecology consultations?", a: "Yes, female nursing staff are available to assist during gynaecological examinations to ensure patient privacy, comfort, and dignity." },
      { q: "Is newborn care available after delivery?", a: "Basic newborn care and initial assessment are provided at the hospital. For neonatal ICU requirements, the team will guide you to appropriate facilities." },
      { q: "What vaccinations are recommended during pregnancy?", a: "Dr. Parveen Khan will advise on vaccines like Td (Tetanus-Diphtheria) and other immunisations as per government maternal health guidelines during antenatal visits." },
      { q: "Can post-menopausal women consult Dr. Parveen Khan?", a: "Yes, Dr. Parveen Khan also manages post-menopausal health concerns including hormonal changes, bone health, vaginal atrophy, and screening for gynaecological cancers." }
    ]
  },
  {
    category: "General Hospital",
    icon: "🏥",
    badgeColor: "#0284c7",
    bgColor: "#f0f9ff",
    items: [

      { q: "Is Asad Hospital open 24 hours?", a: "Yes, Asad Hospital operates 24×7. Emergency, trauma, and critical care services are available round the clock every day of the year." },
      { q: "Where is Asad Hospital located?", a: "📍 13, Kailash Colony, near Sahara Sonography, Bhagat Singh Chauraha, Alwar, Rajasthan – 301001. It is centrally located and easy to reach from all parts of Alwar." },
      { q: "What type of hospital is Asad Hospital?", a: "Asad Hospital is a registered multi-speciality private hospital offering care across General Surgery, Gynaecology, Orthopaedics, Urology, ENT, and Chest & Pulmonology under one roof." },
      { q: "What is the contact number of Asad Hospital?", a: "📞 | Mobile: 9587298975 & 7976573436. These lines are available for appointments, queries, and emergencies." },
      { q: "Is parking available at the hospital?", a: "Yes, patient and visitor parking space is available near the hospital entrance for convenience." },
      { q: "Does the hospital have Hindi-speaking staff?", a: "Yes, all our doctors and staff are fluent in Hindi. English communication is also available for those who need it." },
      { q: "Is Asad Hospital a government or private hospital?", a: "Asad Hospital is a private multi-speciality hospital. It is committed to providing affordable, high-quality healthcare to the people of Alwar and surrounding areas." },
      { q: "How many specialities does Asad Hospital cover?", a: "The hospital currently covers 6 core specialities: General & Laparoscopic Surgery, Gynaecology & Obstetrics, Orthopaedics, Urology, ENT, and Chest & Pulmonology." },
      { q: "Is Asad Hospital equipped with modern medical equipment?", a: "Yes, the hospital uses cutting-edge diagnostic and surgical equipment to ensure accurate diagnosis, safe procedures, and faster patient recovery." },
      { q: "Does Asad Hospital have an ICU?", a: "Yes, intensive care facilities are available for post-operative and critically ill patients requiring continuous monitoring and care." },
      { q: "Is Asad Hospital accessible by public transport?", a: "Yes, the hospital is located near Bhagat Singh Chauraha which is a central landmark in Alwar, well connected by auto-rickshaw, city bus, and private vehicles." },
      { q: "Does the hospital have a pharmacy?", a: "Yes, a pharmacy is available within or near the hospital premises to ensure patients can get prescribed medicines without needing to travel elsewhere." },
      { q: "Is the hospital wheelchair accessible?", a: "Yes, the hospital is designed with patient mobility in mind. Ramps and ground-floor facilities help patients with limited mobility access care comfortably." },
      { q: "Does Asad Hospital provide ambulance services?", a: "Yes, ambulance services are available for emergency patient transport. Call 9587298975 or 7976573436 for immediate ambulance assistance." },
      { q: "Is there a diagnostic/lab facility inside the hospital?", a: "Yes, diagnostic and pathology laboratory services are available to support timely investigation and treatment without requiring external referrals." },
      { q: "Are attendant/visitor entry rules strict?", a: "For patient safety and recovery, visitor access may be regulated, especially in ICU/post-operative areas. General ward visits are usually permitted during specified hours." },
      { q: "Is Asad Hospital suitable for rural patients coming from outside Alwar?", a: "Absolutely. The hospital welcomes patients from Rajasthan and nearby states. Being centrally located in Alwar makes it easily reachable from towns like Behror, Kishangarh, Kotputli, Tijara, and Thanagazi." },
      { q: "Does the hospital provide second opinions?", a: "Yes, you can consult any of our specialists for a second opinion on diagnoses, surgical plans, or treatment choices from other hospitals." },
      { q: "What languages does the hospital support?", a: "Hindi and English are the primary languages of communication. Most of our clinical staff are fluent in local Rajasthani dialects as well." },
      { q: "Is Asad Hospital affiliated with any medical university or association?", a: "Our doctors hold qualifications from reputed institutions and are members of national medical bodies such as FIAGES (Federation of Indian Associations of Gastrointestinal Endoscopic Surgeons) and FMAS." }
    ]
  },
  {
    category: "Our Doctors & Specialists",
    icon: "👨‍⚕️",
    badgeColor: "#673ab7",
    bgColor: "#f3e5f5",
    items: [
      { q: "Who is the General Surgeon at Asad Hospital?", a: "Dr. Sahun Khan (MBBS, MS, FIAGES, FMAS) is the Senior General & Laparoscopic Surgeon. He has previously served at SMS Hospital Jaipur, Safdarjang Hospital Delhi, and ESIC Hospital Delhi." },
      { q: "Who is the Gynaecologist at Asad Hospital?", a: "Dr. Parveen Khan (MBBS, MS, FMAS) is the Gynaecology & Obstetrics specialist. She has prior experience at SMS Hospital Jaipur and Mahatma Gandhi Hospital Jaipur." },
      { q: "Who handles bone and joint problems at Asad Hospital?", a: "Dr. Kanak Arora (M.B.B.S., D.N.B. – Orthopaedics) is the Bone & Joint Specialist (Haddi Rog Visheshagya) handling all orthopaedic conditions and surgeries." },
      { q: "Who is the Urologist at Asad Hospital?", a: "Dr. Chandrashekhar Sharma (M.Ch. – Urology) is the senior Urologist handling all urinary tract, kidney stone, and prostate-related conditions and surgeries." },
      { q: "Who is the ENT Specialist at Asad Hospital?", a: "Dr. Madhavi Kundnani (M.S. – ENT) specialises in Ear, Nose, and Throat disorders including hearing problems, nasal congestion, sinus, tonsils, and throat conditions." },
      { q: "Who is the Chest Physician at Asad Hospital?", a: "Dr. Lokesh Lalwani (MBBS, DNB, FCCS) is the Chest Physician and Interventional Pulmonologist treating lung, breathing, and chest-related conditions." },
      { q: "What is Dr. Sahun Khan's surgical expertise?", a: "Dr. Sahun Khan specialises in laparoscopic (keyhole) and open general surgeries including appendix removal, hernia repair, gallbladder surgery, and intestinal procedures. His FIAGES and FMAS credentials reflect advanced laparoscopic training." },
      { q: "Is Dr. Parveen Khan qualified for high-risk pregnancies?", a: "Yes, Dr. Parveen Khan is an MS-qualified gynaecologist with experience at major government hospitals in Jaipur. She handles high-risk pregnancies, C-sections, and complex gynaecological surgeries." },
      { q: "What does M.Ch. in Urology mean for Dr. Chandrashekhar Sharma?", a: "M.Ch. (Magister Chirurgiae) in Urology is a 3-year super-speciality surgical degree – the highest surgical qualification in urology in India. It means Dr. Sharma has elite training in complex urological surgeries." },
      { q: "Can I get a consultation from multiple specialists in one visit?", a: "Yes, since all specialists are available at Asad Hospital, you can schedule consultations with multiple doctors on the same day or across multiple OPD sessions conveniently." },
      { q: "Do doctors at Asad Hospital have government hospital experience?", a: "Yes. Dr. Sahun Khan has worked at Safdarjang and ESIC Hospitals (Delhi); Dr. Parveen Khan at SMS and Mahatma Gandhi Hospitals (Jaipur) – giving them vast experience with complex cases." },
      { q: "What is FIAGES certification held by Dr. Sahun Khan?", a: "FIAGES stands for Fellow of Indian Association of Gastrointestinal Endo Surgeons – a fellowship awarded for advanced proficiency in laparoscopic gastrointestinal surgeries." },
      { q: "What is FMAS certification?", a: "FMAS – Fellow of Minimal Access Surgery – is a recognised fellowship in minimally invasive (laparoscopic and endoscopic) surgical techniques, held by Dr. Sahun Khan and Dr. Parveen Khan." },
      { q: "Is Dr. Lokesh Lalwani qualified to perform bronchoscopy?", a: "Yes. As an Interventional Pulmonologist with FCCS credentials, Dr. Lalwani is trained in advanced procedures including bronchoscopy, thoracentesis, and other interventional lung procedures." },
      { q: "Does the hospital plan to add more specialists in the future?", a: "The hospital is committed to expanding its team of specialists to meet growing patient demand. Stay updated via the hospital's contact number or Google Business profile." },
      { q: "Can I directly walk in to see a specialist, or is referral required?", a: "No referral is required. You can walk in directly during OPD hours to consult any specialist of your choice." },
      { q: "Are the doctors available for follow-up consultations?", a: "Yes, follow-up consultations are an important part of patient care at Asad Hospital. Patients are encouraged to return within the 10-day prescription validity period for follow-ups." },
      { q: "Does Dr. Kanak Arora perform joint replacement surgeries?", a: "Dr. Kanak Arora (D.N.B. Orthopaedics) handles a wide range of orthopaedic procedures. For specific surgery availability, please call or visit the hospital." },
      { q: "Is Dr. Madhavi Kundnani trained to handle paediatric ENT cases?", a: "Yes, ENT specialists with MS qualifications are trained to handle ear, nose, and throat disorders in both children and adults, including tonsil removal and adenoid issues in kids." },
      { q: "Do specialists at Asad Hospital perform minimally invasive surgeries?", a: "Yes, especially Dr. Sahun Khan (General Surgery) and Dr. Parveen Khan (Gynaecology) who are FMAS-certified in minimal access surgery, ensuring smaller incisions, less pain, and faster recovery." },
      { q: "Are doctors available on Sundays and public holidays?", a: "Emergency doctors are always on call 24×7. For OPD specialist availability on Sundays and holidays, please call ahead to confirm." },
      { q: "Can I get the doctor's credentials verified?", a: "Yes, all doctors' qualifications are displayed on the prescription pad and hospital signage. You can also ask the front desk for verification of certifications." },
      { q: "Is there a resident/on-call doctor available at night?", a: "Yes, since the hospital runs 24×7 emergency services, resident/on-call medical staff are available throughout the night for critical patient care." },
      { q: "Can I choose which doctor I want to see?", a: "Yes, you can request a specific specialist based on your medical condition. The front desk will help guide you to the most appropriate doctor." },
      { q: "Does the hospital have a senior consultant for complex cases?", a: "Yes. With specialists like Dr. Chandrashekhar Sharma (M.Ch. Urology) and Dr. Sahun Khan (FIAGES, FMAS), complex surgical cases are handled at senior consultant level." }
    ]
  },
  {
    category: "OPD, Appointments & Timings",
    icon: "📅",
    badgeColor: "#388e3c",
    bgColor: "#e8f5e9",
    items: [
      { q: "What are the OPD timings at Asad Hospital?", a: "OPD is available twice daily: Morning – 9:00 AM to 2:00 PM | Evening – 4:00 PM to 8:00 PM. These timings apply on all regular working days." },
      { q: "How do I book an appointment at Asad Hospital?", a: "You can book by calling 📞 +91 9587298975 | +91 7976573436 or 📱 9587298975 / 7976573436. Walk-in appointments are also welcome during OPD hours." },
      { q: "Can I get an appointment online?", a: "For the most current online appointment options, please call the hospital or check their Google Business profile. Walk-ins are always accepted during regular OPD hours." },
      { q: "Is there a separate OPD for each speciality?", a: "Yes, each specialist conducts their own OPD. You can visit the front desk to be directed to the relevant specialist's consulting room." },
      { q: "How long does a typical OPD consultation take?", a: "A standard first consultation usually takes 15–30 minutes. Follow-up visits may be shorter. Complex cases may take longer depending on the doctor's assessment." },
      { q: "Is there a long waiting time at OPD?", a: "The hospital works to manage patient flow efficiently. Arriving early during OPD hours and calling ahead for an appointment helps reduce wait times." },
      { q: "Do I need to carry any documents for OPD?", a: "Carry any previous prescriptions, test reports, X-rays, or scan reports related to your condition. First-time visitors should bring a valid ID for patient registration." },
      { q: "Can senior citizens get priority in OPD?", a: "Yes, elderly and physically challenged patients are given priority and special assistance at the front desk and during consultations." },
      { q: "What happens during an OPD consultation?", a: "The doctor will record vital signs (BP, Pulse, Temp, SpO₂), take a detailed history of complaints (C/o), examine you, and prescribe medicines or further investigations as needed." },
      { q: "Is a prescription valid for a second visit?", a: "Each prescription from Asad Hospital is valid for 10 days as noted on the prescription pad. For ongoing treatment, a follow-up consultation is recommended." },
      { q: "Can I get a prescription without physically visiting the doctor?", a: "For patient safety, initial consultations require a physical visit. However, follow-up advice may sometimes be given over phone for established patients." },
      { q: "Are evening OPD slots available for working patients?", a: "Yes, the 4:00 PM to 8:00 PM evening OPD is especially convenient for working professionals, students, and those who cannot visit in the morning." },
      { q: "What vitals are recorded during OPD?", a: "Standard vitals recorded include: Blood Pressure (BP), Pulse Rate (PR), Temperature (Temp), Oxygen Saturation (SpO₂), and Pulse/Abdominal assessment (P/A) when needed." },
      { q: "Is it necessary to book in advance for specialist consultations?", a: "Advance booking is recommended for specialist consultations to avoid waiting. However, walk-ins are also accommodated based on availability." },
      { q: "Can I reschedule or cancel my appointment?", a: "Yes, please inform the hospital at least a few hours before your scheduled appointment to reschedule or cancel. Call +91 9587298975 | +91 7976573436 to make changes." },
      { q: "Is the OPD available on Saturdays?", a: "OPD is generally available on Saturdays. Emergency services are always available. Please call to confirm Saturday specialist availability." },
      { q: "What is the OPD consultation fee?", a: "Consultation fees are reasonable and affordable. Please call 9587298975 for the latest fee schedule as it may vary by specialist." },
      { q: "Can I get a second opinion from another specialist at the same visit?", a: "Yes, since multiple specialists are available, you can consult a second doctor during the same visit if needed. The front desk can help coordinate this." },
      { q: "Does the hospital maintain patient records?", a: "Yes, patient records and consultation history are maintained to ensure continuity of care across multiple visits." },
      { q: "Is there a separate child OPD?", a: "Paediatric patients are seen by relevant specialists based on the condition (e.g., ENT, orthopaedics). For general paediatric care queries, contact the hospital directly." }
    ]
  },
  {
    category: "General Surgery & Laparoscopy",
    icon: "🔬",
    badgeColor: "#d32f2f",
    bgColor: "#ffebee",
    items: [
      { q: "What surgeries does Dr. Sahun Khan perform at Asad Hospital?", a: "Dr. Sahun Khan performs general surgeries (appendectomy, hernia repair, bowel surgeries) as well as advanced laparoscopic procedures including cholecystectomy (gallbladder removal), laparoscopic appendectomy, and diagnostic laparoscopy." },
      { q: "What is laparoscopic surgery?", a: "Laparoscopic (keyhole) surgery uses small incisions and a camera to perform operations inside the abdomen. It results in less pain, smaller scars, reduced blood loss, and a faster recovery compared to open surgery." },
      { q: "Is laparoscopic surgery safe?", a: "Yes, laparoscopic surgery is internationally recognised as a safe and effective technique. Dr. Sahun Khan holds FIAGES and FMAS certifications, indicating advanced training in this field." },
      { q: "How long does recovery take after laparoscopic surgery?", a: "Most laparoscopic surgery patients recover in 3–7 days and can return to normal light activities within 1–2 weeks, compared to 4–6 weeks for open surgery." },
      { q: "Can gallstones be treated at Asad Hospital?", a: "Yes, gallstone disease is treated with laparoscopic cholecystectomy (gallbladder removal surgery), which is one of the most common procedures performed at the hospital." },
      { q: "Is hernia surgery available at Asad Hospital?", a: "Yes, both open and laparoscopic hernia repair surgeries are available. Dr. Sahun Khan handles inguinal, umbilical, and incisional hernia repairs." },
      { q: "What is appendix surgery, and is it available here?", a: "Appendectomy (removal of the inflamed appendix) is available and is commonly performed laparoscopically at Asad Hospital, allowing faster recovery." },
      { q: "Can fistula and piles be treated at Asad Hospital?", a: "Yes, anorectal conditions like piles (haemorrhoids), fissures, and fistulas are managed by Dr. Sahun Khan through both surgical and non-surgical approaches." },
      { q: "What is the difference between open surgery and laparoscopy?", a: "Open surgery involves a large incision; laparoscopy uses 2–4 small holes (0.5–1 cm). Laparoscopy means less pain, faster healing, less infection risk, and shorter hospital stay." },
      { q: "Is surgery available on emergency basis at Asad Hospital?", a: "Yes, emergency surgeries are performed 24×7 at Asad Hospital. The operation theatre team is on call around the clock for urgent cases." },
      { q: "How do I know if I need surgery?", a: "Dr. Sahun Khan will evaluate your condition clinically and through investigations. Surgery is recommended only when it is the most beneficial option for your health." },
      { q: "What preparations are needed before surgery?", a: "Pre-surgical preparation typically includes blood tests, fasting, stopping certain medications, and sometimes an anaesthesia evaluation. The surgical team will guide you through all steps." },
      { q: "Is anaesthesia safe for all age groups?", a: "Modern anaesthesia is safe for patients of all ages, including children and elderly, with proper pre-anaesthetic evaluation. The hospital has qualified anaesthetists for all procedures." },
      { q: "Can I choose between general and local anaesthesia for minor procedures?", a: "The choice of anaesthesia depends on the type of surgery and patient condition. Your surgeon and anaesthetist will recommend the safest and most appropriate option." },
      { q: "What is the hospital's operation theatre like?", a: "The operation theatre is equipped with modern surgical instruments, monitoring equipment, and maintained under strict sterility protocols to ensure patient safety during all procedures." },
      { q: "Can thyroid or neck surgeries be performed here?", a: "For specific surgical procedures outside core specialties, please contact the hospital directly. The team will advise or refer appropriately." },
      { q: "How soon after diagnosis can surgery be scheduled?", a: "Elective surgeries can usually be scheduled within a few days of diagnosis. Emergency surgeries are performed immediately based on clinical urgency." },
      { q: "What post-operative care is provided after surgery?", a: "Post-operative care includes wound dressing, pain management, monitoring of vitals, dietary guidance, and follow-up consultations to ensure smooth recovery." }
    ]
  },
 
  {
    category: "Orthopaedics, Urology & ENT",
    icon: "🦴",
    badgeColor: "#f57c00",
    bgColor: "#fff3e0",
    items: [
      { q: "What conditions does the Orthopaedic department treat?", a: "Dr. Kanak Arora (D.N.B. Orthopaedics) treats fractures, joint pain, sports injuries, back pain, osteoarthritis, ligament tears, and bone infections. He performs both surgical and non-surgical management." },
      { q: "Is Dr. Kanak Arora available for fracture treatment?", a: "Yes, all types of fractures – simple, compound, or complex – are managed by Dr. Kanak Arora, with plaster, splinting, or surgical fixation (ORIF) as appropriate." },
      { q: "What is D.N.B. in Orthopaedics?", a: "D.N.B. (Diplomate of National Board) in Orthopaedics is a nationally recognised post-graduate surgical degree equivalent to M.S. in Orthopaedics, awarded by the National Board of Examinations, India." },
      { q: "Can I get X-rays done at the hospital?", a: "Yes, X-ray and imaging services are available to support orthopaedic diagnosis. The front desk can direct you to the investigation area." },
      { q: "Does Asad Hospital treat knee and hip joint pain?", a: "Yes, knee and hip pain caused by osteoarthritis, ligament injuries, or bursitis is evaluated and treated by Dr. Kanak Arora with appropriate medical or surgical management." },
      { q: "What urological conditions does Dr. Chandrashekhar Sharma treat?", a: "Dr. Sharma (M.Ch. Urology) treats kidney stones, UTI (urinary tract infection), enlarged prostate (BPH), urinary incontinence, bladder issues, male infertility, and urological cancers." },
      { q: "Is kidney stone treatment available at Asad Hospital?", a: "Yes, kidney stones are a core expertise area for Dr. Chandrashekhar Sharma. Treatment options range from medical management and ESWL to endoscopic procedures depending on stone size and location." },
      { q: "What is TURP surgery?", a: "TURP (Transurethral Resection of Prostate) is a minimally invasive surgery for enlarged prostate (BPH) causing urinary difficulty. It is within the scope of Dr. Sharma's M.Ch. Urology expertise." },
      { q: "Can bladder infections (UTI) be treated here?", a: "Yes, urinary tract infections (UTIs) are diagnosed and treated by Dr. Chandrashekhar Sharma with appropriate urine culture testing and targeted antibiotic therapy." },
      { q: "What ENT conditions does Dr. Madhavi Kundnani treat?", a: "Dr. Kundnani (M.S. ENT) treats ear infections, hearing loss, sinusitis, nasal polyps, deviated septum, tonsillitis, adenoids, vertigo, voice disorders, and throat conditions." },
      { q: "Is tonsil removal surgery (tonsillectomy) available at Asad Hospital?", a: "Yes, tonsillectomy and adenoidectomy (removal of tonsils and adenoids) are performed by Dr. Madhavi Kundnani, especially for children with recurrent tonsillitis." },
      { q: "Can sinus problems be treated at Asad Hospital?", a: "Yes, chronic sinusitis and nasal polyps are treated by Dr. Kundnani through medication or endoscopic sinus surgery (FESS) depending on severity." },
      { q: "What is a septoplasty?", a: "Septoplasty is a surgery to correct a deviated nasal septum that causes breathing difficulty. It falls within Dr. Madhavi Kundnani's ENT surgical expertise." },
      { q: "Can hearing problems be evaluated at Asad Hospital?", a: "Yes, hearing assessment and ear-related complaints including ear discharge, pain, tinnitus (ringing), and hearing loss are evaluated by Dr. Kundnani." },
      { q: "Is there treatment for vertigo at Asad Hospital?", a: "Yes, vertigo (dizziness) caused by inner ear disorders like BPPV is diagnosed and treated by Dr. Madhavi Kundnani using canalith repositioning manoeuvres and appropriate medication." }
    ]
  },
  {
    category: "Chest, Pulmonology & Lung Health",
    icon: "🫁",
    badgeColor: "#0097a7",
    bgColor: "#e0f7fa",
    items: [
      { q: "What conditions does the Chest & Pulmonology department treat?", a: "Dr. Lokesh Lalwani (MBBS, DNB, FCCS – Chest Physician & Interventional Pulmonologist) treats asthma, COPD, pneumonia, tuberculosis (TB), lung infections, pleural effusion, and breathlessness." },
      { q: "What does FCCS stand for?", a: "FCCS stands for Fellow of Critical Care Society, indicating Dr. Lalwani's specialised training in critical care and advanced pulmonary medicine." },
      { q: "Can asthma be properly managed at Asad Hospital?", a: "Yes, Dr. Lalwani provides comprehensive asthma management including inhaler technique training, allergen identification, trigger avoidance, and preventive therapy planning." },
      { q: "Is COPD (Chronic Obstructive Pulmonary Disease) treated here?", a: "Yes, COPD is treated with pulmonary rehabilitation, bronchodilator therapy, oxygen therapy, and lifestyle modification plans tailored by Dr. Lalwani." },
      { q: "Can tuberculosis (TB) be diagnosed and treated at Asad Hospital?", a: "Yes, TB diagnosis (sputum tests, GeneXpert, chest X-ray) and DOTS (Directly Observed Treatment, Short-course) guided therapy are available." },
      { q: "What is interventional pulmonology?", a: "Interventional Pulmonology involves advanced procedures to diagnose and treat lung and airway diseases — including bronchoscopy, thoracentesis, and pleural fluid drainage. Dr. Lalwani is trained in these procedures." },
      { q: "Is bronchoscopy available at Asad Hospital?", a: "Yes, flexible bronchoscopy for diagnosing lung cancer, infections, or airway obstructions is within Dr. Lalwani's scope of practice as an Interventional Pulmonologist." },
      { q: "What are common symptoms that require a Pulmonologist?", a: "See Dr. Lalwani for: persistent cough (more than 3 weeks), breathlessness, wheezing, chest tightness, blood in cough (haemoptysis), recurring chest infections, or night sweats with fever." },
      { q: "Is sleep apnoea diagnosed at the hospital?", a: "Dr. Lalwani can evaluate sleep-disordered breathing and obstructive sleep apnoea. Further polysomnography (sleep study) may be referred if needed." },
      { q: "What is pleural effusion and can it be treated here?", a: "Pleural effusion is fluid accumulation around the lungs causing breathing difficulty. Dr. Lalwani performs thoracentesis (pleural fluid drainage) as part of interventional pulmonology care." }
    ]
  },
  {
    category: "Emergency & Critical Care",
    icon: "🚨",
    badgeColor: "#e53935",
    bgColor: "#ffebee",
    items: [
      { q: "Is Asad Hospital open for emergencies 24 hours a day?", a: "Yes, Asad Hospital provides 24×7 emergency care with on-call doctors, nursing staff, and a fully equipped emergency department at all times." },
      { q: "What is the emergency contact number for Asad Hospital?", a: "🚨 Emergency contacts: Ph: +91 9587298975 | +91 7976573436 | Mobile: 9587298975 & 7976573436. Save these numbers for immediate access during medical emergencies." },
      { q: "What emergencies can Asad Hospital handle?", a: "The hospital handles trauma, road accident injuries, acute abdomen (appendicitis, intestinal obstruction), obstetric emergencies, urological emergencies, orthopaedic fractures, respiratory distress, and post-surgical complications." },
      { q: "Is emergency surgery available at night?", a: "Yes, the operation theatre team is on call 24×7 for emergency surgical procedures including appendectomy, C-section, trauma surgery, and other urgent operations." },
      { q: "What should I do in case of a serious accident before reaching the hospital?", a: "Call 9587298975 immediately. Keep the patient still if there is a suspected spine/neck injury. Apply pressure to bleeding wounds. Do not offer food or water. Reach the hospital emergency as fast as safely possible." },
      { q: "Does the hospital have an ICU for post-emergency care?", a: "Yes, intensive care facilities are available for patients requiring continuous monitoring after surgery or during critical illness management." },
      { q: "Is ambulance service available from Asad Hospital?", a: "Yes, ambulance services can be arranged for patient transport. Call the emergency number 9587298975 for immediate ambulance dispatch." },
      { q: "Can acute kidney stone attack be treated as an emergency?", a: "Yes, acute renal colic (severe kidney stone pain) is treated as an emergency. Dr. Chandrashekhar Sharma or on-call staff can provide immediate pain relief and further urological management." },
      { q: "What happens if a pregnant woman needs emergency delivery at night?", a: "The hospital is equipped for emergency obstetric care including emergency C-sections. The on-call team handles all obstetric emergencies round the clock." },
      { q: "Can a child with a broken bone be treated after hours?", a: "Yes, paediatric and adult fracture management is available as an emergency service. The orthopaedic team ensures immediate pain relief, imaging, and definitive treatment." },
      { q: "Is there emergency ENT care for throat or airway obstruction?", a: "Yes, airway-related emergencies including throat swelling, foreign body ingestion, or post-operative bleeding after tonsillectomy can be managed on an emergency basis." },
      { q: "What if I have severe breathing difficulty at night?", a: "Rush to Asad Hospital emergency immediately or call the emergency number. The pulmonology and emergency team will provide oxygen support and immediate respiratory care." },
      { q: "Is blood transfusion available at the hospital?", a: "Blood and blood products can be arranged for emergency surgical and medical needs. Please contact the hospital for blood bank coordination." },
      { q: "What should I bring when arriving at the emergency?", a: "If possible, bring any existing prescriptions, known allergy list, health insurance card, and an ID card. In critical situations, treatment begins immediately without waiting for documents." },
      { q: "Is there a waiting area for patient attendants during emergencies?", a: "Yes, a designated waiting area is available for patient attendants. The nursing staff keeps families informed about the patient's condition at regular intervals." }
    ]
  },
  {
    category: "Billing, Insurance & Patient Services",
    icon: "💳",
    badgeColor: "#2e7d32",
    bgColor: "#e8f5e9",
    items: [
      { q: "Does Asad Hospital accept cashless insurance?", a: "Please contact the hospital billing department at +91 9587298975 | +91 7976573436 to confirm which insurance panels and cashless facilities are currently accepted." },
      { q: "What payment methods are accepted at Asad Hospital?", a: "The hospital accepts cash payments. For UPI, card, or other payment options, please confirm with the billing counter at the time of admission or OPD." },
      { q: "Is treatment at Asad Hospital affordable?", a: "Yes, Asad Hospital is committed to providing high-quality healthcare at affordable rates. The hospital's mission emphasises innovation, patient safety, and affordability for all sections of society." },
      { q: "Can I get an estimate before surgery?", a: "Yes, the hospital provides a cost estimate before elective surgeries. You can ask the billing department or your treating doctor for a detailed breakdown." },
      { q: "Are there any hidden charges at Asad Hospital?", a: "Asad Hospital follows transparent billing practices. All applicable charges are disclosed upfront. Ask for an itemised bill at any time during your stay." },
      { q: "Does the hospital provide discharge summary and medical records?", a: "Yes, a discharge summary detailing diagnosis, treatment, surgery notes, and follow-up advice is provided to all admitted patients at the time of discharge." },
      { q: "Can I get a duplicate copy of my prescription or medical report?", a: "Yes, duplicate records can usually be obtained by contacting the hospital office with patient details. A nominal fee may apply for reprinting." },
      { q: "Is Ayushman Bharat (PMJAY) accepted at Asad Hospital?", a: "Please contact the hospital directly at +91 9587298975 | +91 7976573436 or visit in person to confirm current empanelment with Ayushman Bharat or state health scheme." },
      { q: "Are government employee (CGHS/RGHS) health benefits accepted?", a: "For CGHS, RGHS, or other government employee health scheme empanelment, please contact the billing department for the most up-to-date information." },
      { q: "Can I pay hospital bills in instalments?", a: "For financial difficulties, please speak directly with the hospital administration. Compassionate patient care is a core value at Asad Hospital." },
      { q: "Is there a help desk for billing queries?", a: "Yes, the hospital front desk and billing counter are staffed to answer all patient queries related to costs, bills, insurance, and paperwork." },
      { q: "What documents are needed for insurance claims after treatment?", a: "Typically required: discharge summary, original bills and receipts, investigation reports, doctor's prescription, and insurance policy details. The billing team will assist you in compiling these." },
      { q: "Is there a separate billing for OPD and IPD?", a: "Yes, OPD (outpatient) and IPD (inpatient/admission) billing are maintained separately. Each visit generates a clear receipt." },
      { q: "Does the hospital charge extra for emergency consultations at night?", a: "Emergency consultation and care are available 24×7. For specific emergency charges, please enquire at the billing counter or call in advance." },
      { q: "Can I get a medical certificate from Asad Hospital?", a: "Yes, medical certificates for general illness can be issued by the treating doctor. Note: The hospital prescription is marked 'NOT FOR MEDICO LEGAL PURPOSE', so forensic or legal medical certificates require appropriate legal documentation." },
      { q: "Is nursing home-style room admission available?", a: "Yes, admission beds and rooms are available for surgical and medical inpatients. Room availability and categories can be confirmed with the administration desk." },
      { q: "What is the bed charge per day?", a: "Bed and room charges vary by ward type. Please contact the hospital at +91 9587298975 | +91 7976573436 for the current room rate schedule." },
      { q: "Is diet and food provided during admission?", a: "Basic dietary support may be provided during admission. For special dietary needs post-surgery, the nursing staff will advise accordingly." },
      { q: "How do I obtain a referral letter from Asad Hospital?", a: "If your condition requires referral to a higher centre, the treating doctor will provide a formal referral letter with your diagnosis and treatment history." },
      { q: "Can I get my baby's birth certificate from the hospital?", a: "Yes, Asad Hospital provides birth documentation for all deliveries conducted at the facility, which is required for obtaining the official birth certificate from civic authorities." }
    ]
  }
];

export default function FaqSection() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [openItems, setOpenItems] = useState({});

  const categories = useMemo(() => {
    return ["All", ...new Set(faqData.map((c) => c.category))];
  }, []);

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    return faqData
      .filter((cat) => activeCategory === "All" || cat.category === activeCategory)
      .map((cat) => ({
        ...cat,
        items: cat.items.filter(
          (item) =>
            !q ||
            item.q.toLowerCase().includes(q) ||
            item.a.toLowerCase().includes(q)
        ),
      }))
      .filter((cat) => cat.items.length > 0);
  }, [search, activeCategory]);

  const totalVisible = filtered.reduce((acc, c) => acc + c.items.length, 0);

  const toggle = (key) => {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const androidFontStack = 'Roboto, system-ui, -apple-system, sans-serif';

  return (
    <div
      style={{
        fontFamily: androidFontStack,
        maxWidth: "100%",
        margin: "0 auto",
        padding: "16px",
        color: "#1f1f1f",
        backgroundColor: "#f7f9fc",
        minHeight: "100vh",
        boxSizing: "border-box"
      }}
    >
      {/* App Header Bar */}
      <div style={{ padding: "8px 4px 16px 4px" }}>
        <h1 style={{ fontSize: "22px", fontWeight: "500", margin: "0 0 4px 0", color: "#1f1f1f" }}>
          FAQs & Support
        </h1>
        <p style={{ fontSize: "14px", color: "#616161", margin: 0 }}>
          Asad Hospital 24×7 Help Desk Portal
        </p>
      </div>

      {/* Android Search Bar */}
      <div 
        style={{ 
          position: "relative", 
          marginBottom: "16px",
          boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1)",
          borderRadius: "28px",
          overflow: "hidden"
        }}
      >
        <span style={{ position: "absolute", left: "18px", top: "50%", transform: "translateY(-50%)", fontSize: "18px", color: "#444746", pointerEvents: "none" }}>
          🔍
        </span>
        <input
          type="text"
          placeholder="Search questions, specialists..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: "100%",
            boxSizing: "border-box",
            padding: "16px 44px 16px 52px",
            fontSize: "16px",
            fontFamily: androidFontStack,
            border: "none",
            outline: "none",
            background: "#fff",
            color: "#1f1f1f"
          }}
        />
        {search && (
          <button onClick={() => setSearch("")} style={{ position: "absolute", right: "16px", top: "50%", transform: "translateY(-50%)", background: "transparent", border: "none", cursor: "pointer", fontSize: "16px", color: "#444746", padding: "4px" }}>
            ✕
          </button>
        )}
      </div>

      {/* Category Chips Container with Flex Wrap */}
      <div
        style={{
          display: "flex",
          gap: "8px",
          flexWrap: "wrap", // Niche automatic multiple lines me wrap karne ke liye
          padding: "4px 4px 16px 4px"
        }}
      >
        {categories.map((cat) => {
          const catData = faqData.find((c) => c.category === cat);
          const isSelected = activeCategory === cat;

          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: "8px 14px",
                borderRadius: "8px",
                border: isSelected ? "none" : "1px solid #79747e",
                background: isSelected ? "#0061a4" : "#fff",
                color: isSelected ? "#fff" : "#444746",
                fontSize: "13.5px",
                fontWeight: "500",
                fontFamily: androidFontStack,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "6px"
              }}
            >
              <span>{cat === "All" ? "🗂" : catData?.icon}</span>
              {cat === "All" ? "All" : cat}
            </button>
          );
        })}
      </div>

      {/* Results Status Bar */}
      <div style={{ padding: "0px 4px 12px 4px", fontSize: "13px", color: "#616161" }}>
        Found {totalVisible} info asset{totalVisible !== 1 ? "s" : ""}
        {activeCategory !== "All" && <span> in {activeCategory}</span>}
      </div>

      {/* Main List Container */}
      {filtered.length === 0 ? (
        <div style={{ textAlign: "center", padding: "48px 16px", background: "#fff", borderRadius: "12px", border: "1px solid #e0e0e0" }}>
          <div style={{ fontSize: "40px", marginBottom: "12px" }}>💡</div>
          <h3 style={{ margin: "0 0 4px 0", color: "#1f1f1f", fontSize: "16px", fontWeight: "500" }}>No results match filters</h3>
          <p style={{ fontSize: "14px", color: "#616161", margin: 0 }}>Try clearing your active search keyword.</p>
        </div>
      ) : (
        filtered.map((cat) => (
          <div key={cat.category} style={{ marginBottom: "20px" }}>
            <div style={{ padding: "4px 4px 8px 4px", fontSize: "14px", fontWeight: "500", color: "#0061a4", letterSpacing: "0.1px" }}>
              {cat.category.toUpperCase()}
            </div>

            <div style={{ background: "#fff", borderRadius: "16px", overflow: "hidden", border: "1px solid #e0e0e0" }}>
              {cat.items.map((item, idx) => {
                const key = `${cat.category}-${idx}`;
                const isOpen = !!openItems[key];
                
                return (
                  <div key={key} style={{ borderBottom: idx !== cat.items.length - 1 ? "1px solid #f0f0f0" : "none" }}>
                    <button
                      onClick={() => toggle(key)}
                      style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: "16px",
                        padding: "16px",
                        background: "transparent",
                        border: "none",
                        cursor: "pointer",
                        textAlign: "left",
                        fontFamily: androidFontStack
                      }}
                    >
                      <span style={{ fontSize: "15px", fontWeight: "400", color: "#1f1f1f", lineHeight: "1.4", flex: 1 }}>
                        {item.q}
                      </span>
                      <span style={{ color: "#444746", fontSize: "14px", userSelect: "none", transform: isOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" }}>
                        ▼
                      </span>
                    </button>
                    
                    {isOpen && (
                      <div style={{ padding: "0 16px 16px 16px", backgroundColor: "#f8f9fa" }}>
                        <div style={{ fontSize: "14.5px", color: "#444746", lineHeight: "1.5", wordBreak: "break-word" }}>
                          {item.a}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))
      )}

      {/* Action Footer */}
      <div style={{ marginTop: "24px", padding: "20px", borderRadius: "16px", background: "#fff", border: "1px solid #e0e0e0" }}>
        <h4 style={{ margin: "0 0 6px 0", fontSize: "16px", fontWeight: "500", color: "#1f1f1f" }}>
          Need Instant Medical Help?
        </h4>
        <p style={{ margin: "0 0 16px 0", fontSize: "14px", color: "#616161", lineHeight: "1.4" }}>
          Direct dial hotlines are open 24 hours for emergency ambulance coordination.
        </p>
        
        <div style={{ display: "flex", gap: "8px" }}>
          <a href="tel:9587298975" style={{ flex: 1, padding: "12px", borderRadius: "24px", background: "#b3261e", color: "#ffffff", fontSize: "14px", fontWeight: "500", textDecoration: "none", textAlign: "center" }}>
            🚨 Emergency Call
          </a>
          <a href="https://maps.app.goo.gl/zdWATTcSH9LW4spk8" target="_blank" rel="noreferrer" style={{ flex: 1, padding: "12px", borderRadius: "24px", background: "#fff", color: "#0061a4", fontSize: "14px", fontWeight: "500", textDecoration: "none", border: "1px solid #79747e", textAlign: "center" }}>
            📍 Navigation
          </a>
        </div>
      </div>

      <div style={{ padding: "24px 16px", textAlign: "center", fontSize: "12px", color: "#9e9e9e", lineHeight: "1.5" }}>
        NOT FOR MEDICO LEGAL PURPOSES • Prescription Validity: 10 Days
        <br />
        Asad Hospital, Kailash Colony, Alwar (Rajasthan)
      </div>
    </div>
  );
}