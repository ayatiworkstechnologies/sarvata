"use client";

import React, { useState } from 'react';

const workshops = [
  {
    title: "The Leadership Engine",
    audience: "For Principals & School Directors",
    question: "How can school leaders reimagine governance, digital policy, and professional growth for the future of education?",
    facilitators: [
      {
        name: "Sarija Santhosh",
        title: "Principal, APL Global School",
        image: "/team/Sarija.jpg",
        bio: ""
      },
      {
        name: "Ms Fiza Abubacker",
        title: "Head of Senior, APL Global School",
        image: "/team/Fiza.jpg",
        bio: "Ms Fiza is a dedicated educator with a strong foundation in English literature and specialized training in teaching language proficiency exams like IELTS and PTE. Her journey at APL reflects a story of continuous growth and development, from her initial role as a faculty member to her current position as the Head of School. She is also a certified Cambridge International Trainer. She strongly believes in Inclusion and is of the opinion that every child is unique and it is our responsibility to bring out the best in them. She brings this belief to life through her practice, inspiring students to become confident communicators and lifelong learners. At the summit, she will leverage her leadership experience to guide schools in building sustainable peer mentorship and internal capacity-building systems."
      },
      {
        name: "Dr Indira Subramanian",
        title: "Teacher Educator & Researcher",
        image: "/team/Indira.jpg",
        bio: "Dr Indira is an award-winning educator, researcher, and professional learning specialist with over 20 years of international experience in teacher education, instructional leadership, and curriculum design. A Doctorate in Education from NIE-NTU Singapore, she collaborates globally on research-informed professional learning, lesson study, and evidence-based educational innovation that empowers educators and improves student outcomes. She is also a member of the World Association of Lesson Studies (WALS). She will introduce leaders to the Japanese Lesson Study model as a transformative tool for institutional professional development."
      }
    ]
  },
  {
    title: "The Unseen Curriculum",
    audience: "For Academic Coordinators & Senior Subject Teachers",
    question: "How can you embed human values and future competencies into everyday learning?",
    facilitators: [
      {
        name: "Ms Sangeetha Rajamani",
        title: "APL Global School",
        image: "/team/Sangeetha Rajamani.jpg",
        bio: "Ms Sangeetha is an educator and school leader with over two decades of experience in curriculum planning, teacher training, mentoring, and inclusive education. Her distinguished career encompasses Special Education, Psychology, Mathematics, and Education Management, with roles in special schools, mainstream schools, and inclusive schools in both India and the USA.\nShe is passionate about helping teachers see beyond content and connect classroom learning with the skills, values, and dispositions that shape students' growth. She believes every educator can make a difference when given the space to learn, grow, and thrive."
      },
      {
        name: "Ms Gomathi Prabhakar",
        title: "Head Teacher-Mentor Centre, APL Global School",
        image: null,
        bio: "Ms Gomathi is an educator, school leader, and teacher trainer with extensive experience as the Head of Senior School and Head- Teacher Mentor Centre and Training at APL Global School. She has done her masters in History and holds the Cambridge International Diploma for Teachers and Trainers. She has also acquired the IB certificate in Holistic Teaching and Training and trained in Mindfulness Fundamentals. Passionate about nurturing thriving learning communities, she mentors' educators in their professional and personal growth while helping the school build a culture where both teachers and students thrive. Her work focuses on supporting educators in designing human-centered curriculum frameworks that foster both academic excellence and holistic development."
      }
    ]
  },
  {
    title: "The Learner’s Blueprint",
    audience: "For SEN Coordinators, Mentors & Counsellors",
    question: "Could a deeper understanding of student behaviour unlock better learning outcomes?",
    facilitators: [
      {
        name: "Ms Gayathri Jayaraman",
        title: "CIDTL Programme Leader, APL Global School",
        image: "/team/Gayathri.jpeg",
        bio: "Ms Gayatri, as the CIDTL Programme leader guides aspiring educators to complete their professional development journey. She is also a part of the Training department at APL, contributing towards pedagogical design and teacher development. With more than a decade of experience in implementing instructional frameworks, her expertise lies in transforming teachers' outlook towards pedagogy.\nAt Sarvata Educators Collective 2026, she will guide teachers to look past basic demographics, decoding students' psychological drivers to implement responsive, real-time micro-interventions and dynamic scaffolding."
      },
      {
        name: "Ms Meenakshi",
        title: "Deputy Head Special Education, APL Global School",
        image: "/team/Meenakshi.R.jpg",
        bio: "Ms Meenakshi is a Special Educator supporting teenagers with learning and self-regulation challenges. Her strength lies in observing students across settings to identify root causes behind their challenges. She believes observable behaviors often mask underlying needs, and targeted interventions can help students overcome challenges and unlock their full potential which makes them a confident individual. She will guide participants in moving beyond standard behavior plans to map individual cognitive profiles and build true psychological safety in the classroom."
      }
    ]
  },
  {
    title: "The Conscious Educator",
    audience: "For Core Teachers & Homeroom Mentors",
    question: "How can reflective practice improve both educator wellbeing and student outcomes in high-demand school environments?",
    facilitators: [
      {
        name: "Ms Mahalakshmi",
        title: "Head of Lower Secondary, APL Global School",
        image: "/team/Mahalakshmi Sankaran.png",
        bio: "Ms Mahalakshmi considers herself a lifelong learner. An educator with experience in both education and the IT industry, she is passionate about nurturing reflective, resilient, and compassionate educators. She advocates continuous learning, inclusion and teacher well-being. She is particularly interested in new-age teaching practices and pedagogies that will help teachers recognize students’ varied learning styles and practice differentiation in the classrooms. Through The Conscious Educator, she will help participants strengthen self-awareness, emotional intelligence, and digital wellness while developing practical strategies to prevent burnout, fostering resilient, empathetic educators equipped to thrive in today’s demanding classrooms."
      },
      {
        name: "Cimpu Susana Thomas",
        title: "Head of Kindergarten, APL Global School",
        image: "/team/Susana.jpg",
        bio: "Ms Susana considers her journey in education her true calling. Bringing two decades of experience in shaping early learning spaces, she is a strong advocate for mindful and compassionate teaching. She is deeply committed to helping educators develop self-awareness, emotional resilience, and purposeful leadership. Through workshops and mentoring, she will empower teachers to audit their inner operating systems and establish the professional boundaries required to create sustainable learning environments."
      }
    ]
  },
  {
    title: "The Cognitive Spectrum",
    audience: "For Subject HODs & Inclusion Champions",
    question: "How can education be designed to meet the needs of diverse ways of thinking and learning?",
    facilitators: [
      {
        name: "Ms Soumya Rajan",
        title: "Head of Kamalam, APL Global School",
        image: null,
        bio: "Ms Soumya is an educator and school leader with nearly two decades of experience in special and inclusive education. A dynamic and deeply committed special educator, she has dedicated herself to empowering children with diverse learning needs. she is guided by the unwavering belief that every child has the ability to succeed when educators are empowered to meet diverse learning needs.\nShe is passionate about supporting educators in creating inclusive, student-centred learning environments through practical strategies and reflective practice. Her work is guided by the belief that every child can thrive when educators are equipped to respond to diverse learning needs."
      },
      {
        name: "Jolly Francis",
        title: "Head of Primary, APL Global School",
        image: "/team/Jolly-Photo.jpg",
        bio: "Ms Jolly is an educator and a school leader passionate about nurturing young learners and supporting teachers through collaboration, mentorship, and professional growth. She is committed to helping educators create meaningful learning experiences by connecting classroom concepts to real-world contexts and fostering students' confidence, curiosity, and critical thinking skills. Her work is guided by the belief that every child can flourish in a nurturing environment and that every educator has the potential to make a lasting impact through continuous learning, reflection, and growth."
      }
    ]
  },
  {
    title: "The ASUDE Simulation Lab",
    audience: "For Homeroom Teachers, Mentors, Counselors & Value Education Facilitators",
    question: "How can simulation-based learning be used to meaningfully develop life skills, ethics, and social consciousness?",
    facilitators: [
      {
        name: "Mr Abdul Rahaman",
        title: "Inventor of ASUDE & Founder, ASUDE Research & Development Foundation",
        image: "/team/Abdul Rahaman.jpg",
        bio: "Mr. Abdul Rahman is an award-winning psychologist, psychotherapist, and the inventor of ASUDE—the world’s first social thinking game. With a profound commitment to mental wellness and socio-emotional development, his innovative, game-based therapeutic frameworks have positively impacted over 27,000 children, 1,200 educators, and hundreds of law enforcement personnel across the region. Recognized with numerous accolades, including the Outstanding Young Person Award and the Best Social Worker Award for Madurai District, his work focuses heavily on utilizing tactile, experiential therapy to combat digital addiction, foster positive attitudes, and build cognitive resilience. At the Collective, he will lead The ASUDE Simulation Lab, equipping pastoral leads and educators with a continuous, simulation-based framework to meaningfully develop life skills, ethical clarity, and social consciousness in their learners."
      }
    ]
  }
];

export default function WorkshopsList() {
  const [activeIndex, setActiveIndex] = useState(0);

  const renderFacilitators = (facilitators) => {
    if (!facilitators || facilitators.length === 0) return null;
    return (
      <div className="mt-8 space-y-8">
        <h4 className="text-xl font-bold text-foreground border-b border-black/10 pb-2">Facilitators</h4>
        {facilitators.map((fac, idx) => (
          <div key={idx} className="flex flex-col md:flex-row gap-6 items-start">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden shrink-0 border-2 border-primary/20 bg-gray-100 flex items-center justify-center">
              {fac.image ? (
                <img src={fac.image} alt={fac.name} className="w-full h-full object-cover" />
              ) : (
                <span className="text-gray-400 text-sm">No Photo</span>
              )}
            </div>
            <div className="flex-1">
              <h5 className="text-lg font-bold text-foreground">{fac.name}</h5>
              <p className="text-sm font-bold text-primary mb-2">{fac.title}</p>
              {fac.bio && (
                <p className="text-sm text-foreground/80 font-secondary leading-relaxed whitespace-pre-line">
                  {fac.bio}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section id="workshops" className="py-24 bg-white relative z-10">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">Curated Workshops</h2>
          <p className="text-lg text-foreground/70 font-secondary max-w-2xl mx-auto">
            As part of this event, we invite you to register and engage in a series of thoughtfully curated workshops.
          </p>
        </div>

        {/* Desktop side-by-side tabs layout */}
        <div className="hidden lg:grid grid-cols-12 gap-10">
          <div className="col-span-4 xl:col-span-3 flex flex-col gap-2">
            {workshops.map((ws, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`text-left px-5 py-4 rounded-xl font-medium transition-all duration-200 border ${
                  activeIndex === idx 
                    ? 'bg-primary text-white border-primary shadow-md' 
                    : 'bg-white border-black/5 text-foreground/70 hover:bg-gray-50'
                }`}
              >
                {ws.title}
              </button>
            ))}
          </div>

          <div className="col-span-8 xl:col-span-9 flex items-stretch">
            <div className="w-full bg-gray-50 border border-black/5 rounded-2xl p-8 md:p-12 relative flex flex-col min-h-[300px]">
              {activeIndex >= 0 && workshops[activeIndex] && (
                <div 
                  className="relative z-10 animate-fade-in-up flex-1" 
                  key={activeIndex} 
                >
                  <div className="inline-block px-3 py-1 rounded-md bg-white border border-black/5 shadow-sm text-xs font-bold tracking-wide text-primary mb-4 uppercase">
                    {workshops[activeIndex].audience}
                  </div>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-foreground leading-tight">
                    {workshops[activeIndex].title}
                  </h3>
                  <p className="text-lg md:text-xl text-foreground/70 font-secondary leading-relaxed border-l-4 border-primary pl-4 py-1 italic mb-6">
                    "{workshops[activeIndex].question}"
                  </p>
                  
                  {renderFacilitators(workshops[activeIndex].facilitators)}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Accordion Layout */}
        <div className="lg:hidden flex flex-col gap-3">
          {workshops.map((ws, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <div 
                key={idx} 
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen ? 'border-primary/30 bg-gray-50/50' : 'border-black/5 bg-white'
                }`}
              >
                <button
                  onClick={() => setActiveIndex(isOpen ? -1 : idx)}
                  className={`w-full text-left px-5 py-4 font-bold flex justify-between items-center transition-colors ${
                    isOpen ? 'bg-primary text-white border-primary' : 'bg-white border-black/5 text-foreground/80 hover:bg-gray-50'
                  }`}
                >
                  <span className="pr-4">{ws.title}</span>
                  <span className="text-xl font-light shrink-0">{isOpen ? '−' : '+'}</span>
                </button>
                
                <div 
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className={`p-6 ${isOpen ? 'border-t border-black/5' : ''}`}>
                      <div className="inline-block px-3 py-1 rounded-md bg-white border border-black/5 shadow-sm text-xs font-bold tracking-wide text-primary mb-4 uppercase">
                        {ws.audience}
                      </div>
                      <p className="text-base text-foreground/75 font-secondary leading-relaxed border-l-4 border-primary pl-4 py-1 italic mb-6">
                        "{ws.question}"
                      </p>
                      
                      {renderFacilitators(ws.facilitators)}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

