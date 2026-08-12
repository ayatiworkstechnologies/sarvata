"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";

/**
 * Testimonials — Sarvata Educators Collective, 25 July 2026
 * Source: SEC_2026_Testimonials_for_website.docx
 *
 * Drop this section anywhere in the page flow, e.g.:
 *   <Header />
 *   <Hero />
 *   <Testimonials />
 *   <Services />
 *   <Footer />
 */

const TRACKS = [
  "All",
  "Event Highlight",
  "The Leadership Engine",
  "The Unseen Curriculum",
  "The Learner's Blueprint",
  "The Conscious Educator",
  "The Cognitive Spectrum",
  "The ASUDE Simulation Lab",
];

const TESTIMONIALS = [
  // --- Event Highlight ---
  {
    id: "t001",
    quote:
      "SARVATA is more than a professional learning platform. It is a transformative community that nurtures educators to lead with awareness, empathy, and purpose. Every session is thoughtfully curated, inspiring us to reflect on our practices and grow not only as teachers but also as individuals.",
    name: "Nagasudaa Karthick",
    school: "DAV Public School, Velachery",
    track: "Event Highlight",
  },

  // --- Track 1: The Leadership Engine ---
  {
    id: "t002",
    quote:
      "Today's Sarvata learning session was highly engaging, insightful, and relevant to my role as a school leader. The practical strategies, interactive discussions, and real-life examples provided valuable ideas that I can implement to enhance teaching, learning, and school management. I sincerely appreciate the efforts of the Sarvata team in organizing such a meaningful and enriching professional development programme.",
    name: "Dr. K. Vanitha",
    school: "Periyar Centenary Memorial Matriculation HSS, Trichy",
    track: "The Leadership Engine",
  },
  {
    id: "t003",
    quote:
      "A deep, immersive experience with an opportunity to design the future the right way...",
    name: "Jyoti Kothari",
    school: "Success Vidyapeeth",
    track: "The Leadership Engine",
  },
  {
    id: "t004",
    quote:
      "The topics explored in today's session were highly relevant to the times we live in. Beyond introducing the possibilities and challenges of AI in education, the session highlighted the importance of developing thoughtful policies and ethical practices within schools. What I appreciated most was that the session was not just about technology... it encouraged deep self-reflection and reminded me of the importance of responding with mindfulness, empathy, and responsibility.",
    name: "Sreelekha Ramachandran",
    school: "Heartfulness International School (Omega)",
    track: "The Leadership Engine",
  },
  {
    id: "t005",
    quote: "Informative and engaging session.",
    name: "Uma K",
    school: "DAV Public School, Velachery",
    track: "The Leadership Engine",
  },

  // --- Track 2: The Unseen Curriculum ---
  {
    id: "t006",
    quote: "It was informative and interesting.",
    name: "Arun Anthony",
    school: "Anna Gem Science Park Matric HSS",
    track: "The Unseen Curriculum",
  },
  {
    id: "t007",
    quote:
      "A very interactive session, well-facilitated. It gave a lot of opportunities to think creatively as well as collaborate.",
    name: "Aruna Arun",
    school: "Budding Minds International School",
    track: "The Unseen Curriculum",
  },
  {
    id: "t008",
    quote:
      "The idea of empowering educators is appreciable, as educators need that consistently. Looking forward to more sessions.",
    name: "Bhuvaneswari. R",
    school: "Arsha Vidya Mandir",
    track: "The Unseen Curriculum",
  },
  {
    id: "t009",
    quote: "Very informative. Created deep thinking.",
    name: "Jayalekshmi R",
    school: "APL Global School",
    track: "The Unseen Curriculum",
  },
  {
    id: "t010",
    quote:
      "Today's session with Sarvata was a powerful reminder of the unseen impact we have as educators beyond the daily syllabus. It provided a rare, meaningful space to pause, reflect on my core purpose, and reconnect with the quiet qualities I hope to build in my learners.",
    name: "Leena Duraiarasan",
    school: "",
    track: "The Unseen Curriculum",
  },
  {
    id: "t011",
    quote: "I was impressed by the trainer's patience in answering questions.",
    name: "Madasamy B",
    school: "",
    track: "The Unseen Curriculum",
  },
  {
    id: "t012",
    quote: "It was a very engaging and creative session.",
    name: "Meenakshi",
    school: "",
    track: "The Unseen Curriculum",
  },
  {
    id: "t013",
    quote:
      "This experience broadened my perspective, helping me recognise that meaningful learning extends far beyond the boundaries of textbooks — it's about nurturing reflective thinkers who can critically examine their values, morals, and ethical responsibilities.",
    name: "Navitha Raj",
    school: "SV High International School",
    track: "The Unseen Curriculum",
  },
  {
    id: "t014",
    quote: "It gave us a different perspective to plan our lessons.",
    name: "Nithya Palaniappan",
    school: "Cakewalk English Academy",
    track: "The Unseen Curriculum",
  },
  {
    id: "t015",
    quote: "It was interesting and informative.",
    name: "Pradeepa Sivakumar",
    school: "",
    track: "The Unseen Curriculum",
  },
  {
    id: "t016",
    quote:
      "I had a wonderful learning opportunity while having a meaningful discussion with the group and exploring multiple perspectives and thoughts.",
    name: "Preetha Gadigachalan",
    school: "",
    track: "The Unseen Curriculum",
  },
  {
    id: "t017",
    quote: "It was a good session to learn beyond the curriculum.",
    name: "Anonymous",
    school: "",
    track: "The Unseen Curriculum",
  },
  {
    id: "t018",
    quote: "The world is filled with different perspectives; we should respect and support each other.",
    name: "Anonymous",
    school: "",
    track: "The Unseen Curriculum",
  },
  {
    id: "t019",
    quote:
      "It's been riveting to learn about how teachers put thought into designing their curriculum, and how it's not restricted to textbooks. I wish I had grown up with more of this!",
    name: "Anonymous",
    school: "",
    track: "The Unseen Curriculum",
  },
  {
    id: "t020",
    quote:
      "Today's session initiated a conversation about the emphasis on the human touch in education within the context of AI.",
    name: "Sivakumar S",
    school: "",
    track: "The Unseen Curriculum",
  },
  {
    id: "t021",
    quote: "Collaboration felt very good and empowering.",
    name: "Anonymous",
    school: "",
    track: "The Unseen Curriculum",
  },
  {
    id: "t022",
    quote: "A good session for understanding the essential qualities to be built that are not visible in the curriculum.",
    name: "Anonymous",
    school: "",
    track: "The Unseen Curriculum",
  },
  {
    id: "t023",
    quote: "Today's training was awesome. I learnt how to nurture children's development.",
    name: "T. A. Priya",
    school: "Marg Vidhyalaya Senior Secondary School",
    track: "The Unseen Curriculum",
  },
  {
    id: "t024",
    quote: "It was an eye-opening and wonderful session with short activities to refresh us.",
    name: "Anonymous",
    school: "",
    track: "The Unseen Curriculum",
  },

  // --- Track 3: The Learner's Blueprint ---
  {
    id: "t025",
    quote: "It is an eye-opener in the education field. We will try to implement the takeaways from today's session.",
    name: "B. Seethalakshmi",
    school: "",
    track: "The Learner's Blueprint",
  },
  {
    id: "t026",
    quote:
      "Today's session on 'The Learner's Blueprint' was highly engaging, insightful, and thought-provoking. It helped me understand learners from a deeper perspective and reflect on my own teaching practices.",
    name: "Dr. Chhaya Bhadauria",
    school: "Ramana Vidyalaya, Chengalpet",
    track: "The Learner's Blueprint",
  },
  {
    id: "t027",
    quote:
      "Thank you, Sarvata, for organizing such a meaningful workshop. The sessions were well-structured, interactive, and filled with practical ideas that can be implemented in classrooms immediately.",
    name: "Dr. K. Vanitha",
    school: "Periyar Centenary Memorial Matriculation HSS, Trichy",
    track: "The Learner's Blueprint",
  },
  {
    id: "t028",
    quote:
      "This is something beyond what teachers are taught in B.Ed. classes. Very informative and eye-opening for both teachers and parents.",
    name: "K. Geetha",
    school: "Marg Vidhyalaya Senior Secondary School",
    track: "The Learner's Blueprint",
  },
  {
    id: "t029",
    quote: "A great takeaway session. Too good... but for a very brief period. Would like to learn more from you in the future.",
    name: "P. Hemalatha",
    school: "",
    track: "The Learner's Blueprint",
  },
  {
    id: "t030",
    quote: "Today's session was excellent. The everyday challenges faced by teachers were well-explained.",
    name: "Anonymous Participant",
    school: "",
    track: "The Learner's Blueprint",
  },
  {
    id: "t031",
    quote: "Good session! We would like to have a more elaborate one.",
    name: "S. V. Narmatha",
    school: "",
    track: "The Learner's Blueprint",
  },
  {
    id: "t032",
    quote:
      "It is an eye-opening event for me. Each student is a world... understanding them takes a lot of work, and you made it simple.",
    name: "Sakthi Sarguna",
    school: "Milton International School",
    track: "The Learner's Blueprint",
  },
  {
    id: "t033",
    quote: "The session was highly relatable. The tools provided will help us deal with learners better.",
    name: "Shenbaga Priya G",
    school: "DAV Public School",
    track: "The Learner's Blueprint",
  },
  {
    id: "t034",
    quote: "Worth attending; got a lot of insights.",
    name: "Uma K",
    school: "DAV Public School",
    track: "The Learner's Blueprint",
  },
  {
    id: "t035",
    quote:
      "The sessions I attended gave me a different experience, and I learned how to identify children with different learning paces and support them.",
    name: "Anonymous",
    school: "",
    track: "The Learner's Blueprint",
  },
  {
    id: "t036",
    quote:
      "Today's session was informative and engaging, executed with the utmost care and interest in the audience. Every educator will definitely benefit from these sessions.",
    name: "Vijayalakshmi K",
    school: "",
    track: "The Learner's Blueprint",
  },
  {
    id: "t037",
    quote:
      "The session was engaging. Loved the takeaway... we can use the mapping tool to identify the root cause of behavior.",
    name: "Divya S.",
    school: "",
    track: "The Learner's Blueprint",
  },

  // --- Track 4: The Conscious Educator ---
  {
    id: "t038",
    quote:
      "Loved the idea that digital well-being was included along with physical and emotional well-being. The energy level and the connection established by the facilitators with the audience were superb! Handouts and interactive activities complemented the session's theme tremendously.",
    name: "Devitha Kannan",
    school: "APL Global School",
    track: "The Conscious Educator",
  },
  {
    id: "t039",
    quote:
      "Felt good... that teachers' emotional well-being is also important, and that institutions and others are taking note of our well-being.",
    name: "Divya S",
    school: "",
    track: "The Conscious Educator",
  },
  {
    id: "t040",
    quote:
      "The Conscious Educator session was truly insightful and thought-provoking. It reminded us that education is not merely about imparting knowledge, but about nurturing minds with awareness, empathy, and purpose. I leave with renewed inspiration to teach not just with my mind, but with my heart.",
    name: "Nagasudaa Karthick",
    school: "DAV Public School",
    track: "The Conscious Educator",
  },
  {
    id: "t041",
    quote:
      "The 'Conscious Educator' session was a much-needed pause. It reminded me that teacher well-being and student well-being are connected — it's learning that actually translates into action.",
    name: "Rutika Jayaram",
    school: "",
    track: "The Conscious Educator",
  },
  {
    id: "t042",
    quote:
      "As teachers, we go through the daily grind with no personal time. The session made me realize that I need to PAUSE and listen to my body, be more empathetic, and respond rather than react.",
    name: "Shenbaga Priya",
    school: "DAV Public School",
    track: "The Conscious Educator",
  },

  // --- Track 5: The Cognitive Spectrum ---
  {
    id: "t043",
    quote: "Engaging.",
    name: "Anonymous",
    school: "",
    track: "The Cognitive Spectrum",
  },
  {
    id: "t044",
    quote: "A refreshing and mind-enriching session.",
    name: "Mrs. J. Gayathri",
    school: "Fathima Central Senior Secondary School",
    track: "The Cognitive Spectrum",
  },
  {
    id: "t045",
    quote:
      "The session was exceptionally informative and professionally enriching, reinforcing the importance of adopting inclusive, evidence-based teaching practices for equitable, learner-centred classrooms.",
    name: "Nagasudaa Karthick",
    school: "DAV Public School",
    track: "The Cognitive Spectrum",
  },
  {
    id: "t046",
    quote:
      "The session was an engaging and insightful beginning, addressing the needs of the current educational landscape by providing a platform for educators to share their diverse professional expertise.",
    name: "Sunil Sibi Boniface",
    school: "Pushpalata British International School",
    track: "The Cognitive Spectrum",
  },
  {
    id: "t047",
    quote:
      "Every classroom has learners whose needs are very different. Creating an inclusive lesson plan that caters to everyone's learning is not difficult. That was my learning for the day.",
    name: "Anonymous",
    school: "",
    track: "The Cognitive Spectrum",
  },
  {
    id: "t048",
    quote:
      "Amazing coordination, well-organized, and a clear pathway for each track. Getting to learn from peer teachers through collaboration was the key aspect.",
    name: "Anonymous Participant",
    school: "",
    track: "The Cognitive Spectrum",
  },

  // --- Track 6: The ASUDE Simulation Lab ---
  {
    id: "t049",
    quote:
      "The human element vs. AI has been a topic of concern for a decade. AI interference, especially ChatGPT, is something I always thought was limiting out-of-the-box thinking and reducing students' creativity and linguistic skills.",
    name: "Abitha R.",
    school: "Sree Iyappa Matriculation HSS",
    track: "The ASUDE Simulation Lab",
  },
  {
    id: "t050",
    quote:
      "With more skills, you are well-prepared for the challenges in life, which in turn improves your emotional well-being towards yourself and others.",
    name: "Grace Jeyakumar",
    school: "Vaels International School",
    track: "The ASUDE Simulation Lab",
  },
  {
    id: "t051",
    quote: "It was a really thought-provoking session throughout the day... very informative, and the way they organized it was awesome...",
    name: "Sakthi",
    school: "Milton International School",
    track: "The ASUDE Simulation Lab",
  },
];

export default function Testimonials() {
  const [activeTrack, setActiveTrack] = useState("All");

  const filtered =
    activeTrack === "All" ? TESTIMONIALS : TESTIMONIALS.filter((t) => t.track === activeTrack);

  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_20%_20%,rgba(0,0,0,0.03),transparent_45%)] py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-[12px] font-bold uppercase tracking-wider text-primary">
            Sarvata Educators Collective · 25 July 2026
          </span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Testimonials  
          </h2>
          {/* <p className="mt-3 text-[15px] leading-relaxed text-muted">
            Reflections from school leaders, teachers, and counsellors straight from the
            Collective's six learning tracks.
          </p> */}
        </div>

        {/* Track filter */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {TRACKS.map((track) => (
            <button
              key={track}
              onClick={() => setActiveTrack(track)}
              className={`rounded-full px-4 py-2 text-[13px] font-semibold transition-all duration-300 ${
                activeTrack === track
                  ? "bg-primary text-white shadow-md shadow-primary/20"
                  : "bg-black/[0.03] text-foreground/60 hover:bg-black/[0.06] hover:text-foreground"
              }`}
            >
              {track}
            </button>
          ))}
        </div>

        {/* Cards */}
        <motion.div layout className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((t, i) => (
              <motion.figure
                key={t.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
                className="group relative flex h-full flex-col rounded-[1.5rem] border border-black/5 bg-white p-6 shadow-[0_4px_20px_rgba(15,23,42,0.04)] transition-shadow duration-300 hover:shadow-[0_20px_50px_rgba(15,23,42,0.10)]"
              >
                <Quote className="h-6 w-6 text-primary/30" strokeWidth={2.5} />
                <blockquote className="mt-4 flex-1 text-[14.5px] leading-relaxed text-foreground/80">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-6 border-t border-black/5 pt-4">
                  <p className="text-[14px] font-bold text-foreground">{t.name}</p>
                  {t.school && <p className="text-[12.5px] text-muted">{t.school}</p>}
                  <span className="mt-2 inline-block rounded-full bg-primary/8 px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-wide text-primary/70">
                    {t.track}
                  </span>
                </figcaption>
              </motion.figure>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}