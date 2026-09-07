'use client'

import { useState } from 'react'
import {
  ArrowUpRight, BrainCircuit, Check, ChevronDown, Code2, Database,
  ExternalLink, GitBranch as Github, Globe2, GraduationCap, Heart,
  Laptop, BriefcaseBusiness as Linkedin, Mail, MapPin, Menu, MessageCircle, Phone,
  Send, Sparkles, Terminal, Trophy, X, Zap
} from 'lucide-react'

const projects = [
  { title: '2D Graphics Editor', description: 'A graphics-based application for creating and editing 2D objects.', tech: ['C++', 'Graphics'], icon: Code2 },
  { title: 'AI-Based Bus Ticketing Chatbot', description: 'An AI-based chatbot designed to assist users with bus ticketing-related queries.', tech: ['Python', 'AI'], icon: MessageCircle },
  { title: 'Automated Table Lamp Using IoT', description: 'An IoT-based project developed to automate a table lamp and demonstrate smart device control.', tech: ['IoT', 'C'], icon: Zap },
  { title: 'Think Byte App and Website', description: 'A technology-focused application and website project designed to provide an interactive digital experience.', tech: ['HTML', 'Web'], icon: Globe2 },
  { title: 'Memory Game', description: 'An interactive browser-based memory game developed using HTML to practice web development and create an engaging user experience.', tech: ['HTML'], icon: BrainCircuit },
]

const skills = [
  { group: 'Programming', icon: Terminal, items: ['Python', 'C', 'C++', 'Advanced C'] },
  { group: 'Database', icon: Database, items: ['SQL'] },
  { group: 'Web Development', icon: Globe2, items: ['HTML'] },
  { group: 'IoT', icon: Zap, items: ['Internet of Things'] },
]

const certifications = [
  ['IBM Certificate in Python', 'IBM'], ['Wadhwani Foundation Certificate', 'Wadhwani Foundation'],
  ['Instagram Design System Online Course Certificate', 'Instagram'], ['Infosys Course Completion Certificates', 'Infosys'],
  ['Udemy Course Completion Certificate', 'Udemy'],
]

const interests = ['Coding', 'Programming', 'Artificial Intelligence', 'Data Science', 'Learning New Technologies', 'Building Innovative Projects', 'Web Development', 'IoT']
const navItems = ['About', 'Education', 'Skills', 'Projects', 'Certifications', 'Contact']

function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return <div className="section-heading reveal"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{copy && <p>{copy}</p>}</div>
}

function Character() {
  return <div className="character-wrap" aria-label="Illustration of a student working on a laptop">
    <div className="orbit orbit-one" /><div className="orbit orbit-two" />
    <span className="float-token token-one">AI</span><span className="float-token token-two">&lt;/&gt;</span><span className="float-token token-three">SQL</span><span className="float-token token-four">DATA</span>
    <div className="character-glow" />
    <svg className="character" viewBox="0 0 420 460" role="img" aria-label="Original cartoon AI student with a laptop" xmlns="http://www.w3.org/2000/svg">
      <defs><linearGradient id="hoodie" x1="0" x2="1"><stop stopColor="#635bff"/><stop offset="1" stopColor="#9d7bff"/></linearGradient><linearGradient id="screen" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#55e7d0"/><stop offset="1" stopColor="#6d72ff"/></linearGradient></defs>
      <ellipse cx="210" cy="420" rx="145" ry="17" fill="#6d72ff" opacity=".16" />
      <path d="M104 321c10-66 54-88 106-88s96 22 106 88v67H104z" fill="url(#hoodie)" stroke="#b6b7ff" strokeWidth="3"/>
      <path d="M170 296c14 14 66 14 80 0v54c-22 25-58 25-80 0z" fill="#f0b99b"/>
      <ellipse cx="210" cy="174" rx="74" ry="84" fill="#f3bea0" stroke="#f7d1bd" strokeWidth="3"/>
      <path d="M138 171c-5-57 18-103 72-103 54 0 82 37 72 105l-20-30-11 21-38-31c-22 26-44 39-75 38z" fill="#242447"/>
      <path d="M157 134c15-33 43-47 74-44 25 2 42 13 51 34-29-15-67-18-125 10z" fill="#36345f"/>
      <circle cx="181" cy="180" r="7" fill="#272745"/><circle cx="239" cy="180" r="7" fill="#272745"/><path d="M195 214c10 8 20 8 30 0" fill="none" stroke="#a95159" strokeWidth="4" strokeLinecap="round"/>
      <path d="M130 161c-10-3-17 4-16 15 1 11 10 17 19 13M290 161c10-3 17 4 16 15-1 11-10 17-19 13" fill="#f3bea0" stroke="#f7d1bd" strokeWidth="3"/>
      <path d="M135 318c-30 5-54 26-57 63l66 7 9-56zM285 318c30 5 54 26 57 63l-66 7-9-56z" fill="url(#hoodie)" stroke="#b6b7ff" strokeWidth="3"/>
      <path d="M110 369h200l39 37H71z" fill="#222449" stroke="#878cfb" strokeWidth="3"/><path d="M137 369h146l-18-82H155z" fill="#19213d" stroke="#878cfb" strokeWidth="3"/><path d="M151 355h118l-13-57H164z" fill="url(#screen)" opacity=".9"/><path d="m174 328 18-15 12 10 22-22" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/><circle cx="210" cy="329" r="3" fill="#fff"/>
    </svg>
  </div>
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [sent, setSent] = useState(false)
  const [active, setActive] = useState('Home')
  const [scrolled, setScrolled] = useState(false)

  if (typeof window !== 'undefined' && !scrolled) {
    window.onscroll = () => setScrolled(window.scrollY > 24)
  }

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); setSent(true); e.currentTarget.reset()
  }

  return <main className="site-shell">
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`} aria-label="Primary navigation">
      <a href="#home" className="brand">MANJUSHREE<span>.</span></a>
      <div className={`nav-links ${menuOpen ? 'nav-open' : ''}`}>
        {['Home', ...navItems].map(item => <a key={item} href={`#${item.toLowerCase()}`} className={active === item ? 'active' : ''} onClick={() => { setActive(item); setMenuOpen(false) }}>{item}</a>)}
      </div>
      <div className="nav-social"><a href="https://github.com/manjushree622" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18}/></a><a href="https://www.linkedin.com/in/manjushree-601783413" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18}/></a></div>
      <button className="menu-button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
    </nav>

    <section id="home" className="hero section-pad"><div className="grid-lines"/><div className="hero-copy reveal"><div className="status-pill"><span/> Open to learning & building</div><p className="kicker">HELLO, I&apos;M</p><h1>MANJU<span>SHREE</span></h1><h2>Computer Science Student <b>|</b> <em>Artificial Intelligence &amp; Data Science</em></h2><p className="hero-intro">I am a second-year B.Tech student at REVA University, passionate about coding, emerging technologies, and building innovative solutions.</p><p className="tagline">Learning. <span>Building.</span> Innovating.</p><div className="hero-actions"><a className="button button-primary" href="#projects">View My Projects <ArrowUpRight size={17}/></a><a className="button button-ghost" href="#contact">Contact Me <Mail size={17}/></a></div><div className="hero-social"><span>Find me on</span><a href="https://github.com/manjushree622" target="_blank" rel="noreferrer"><Github size={18}/> GitHub</a><a href="https://www.linkedin.com/in/manjushree-601783413" target="_blank" rel="noreferrer"><Linkedin size={18}/> LinkedIn</a></div></div><div className="hero-art reveal"><Character/></div><a href="#about" className="scroll-cue"><span>Scroll to explore</span><ChevronDown size={17}/></a></section>

    <section id="about" className="section-pad section-dark"><SectionHeading eyebrow="01 / ABOUT ME" title="Curious by nature. Building with purpose." copy="A little bit about where I am, what I care about, and the direction I am heading."/><div className="about-grid"><div className="about-copy reveal"><p>I am a second-year B.Tech student in Artificial Intelligence and Data Science at REVA University, Yelahanka, Bengaluru. I have completed my first year of engineering and am passionate about learning programming, exploring emerging technologies, and creating innovative solutions.</p><p>I enjoy developing my technical skills through practical projects and continuously learning new concepts in computer science and artificial intelligence.</p><a className="text-link" href="#contact">Let&apos;s connect <ArrowUpRight size={16}/></a></div><div className="fact-grid reveal">{[['Name','Manjushree'],['Degree','B.Tech – AI & Data Science'],['University','REVA University'],['Current Year','2nd Year'],['1st Year CGPA','9.785',true],['Location','Karnataka, India'],['Interests','Coding & Technology']].map(([label,value,highlight])=><div className={`fact-card ${highlight?'fact-highlight':''}`} key={label as string}><span>{label}</span><strong>{value}</strong></div>)}</div></div></section>

    <section id="education" className="section-pad"><SectionHeading eyebrow="02 / EDUCATION" title="The foundation I&apos;m building on."/><div className="timeline reveal"><div className="timeline-dot"/><div className="timeline-content"><span className="date-label">2025 — 2029 <i>Current</i></span><h3>B.Tech – Artificial Intelligence &amp; Data Science</h3><p className="muted">REVA University, Yelahanka, Bengaluru</p><p>Currently in 2nd Year <span className="slash">/</span> Completed 1st Year</p><div className="academic-badge"><GraduationCap size={21}/><span>1st Year CGPA<strong>9.785</strong></span></div></div></div><div className="timeline reveal"><div className="timeline-dot muted-dot"/><div className="timeline-content"><span className="date-label">Completed</span><h3>Pre-University Course (PUC)</h3><p className="muted">Janatha Independent PU College, Udupi</p></div></div></section>

    <section id="skills" className="section-pad section-dark"><SectionHeading eyebrow="03 / SKILLS" title="Tools I use to turn ideas into reality."/><div className="skills-grid">{skills.map(({group,icon:Icon,items}, i)=><div className="skill-card reveal" style={{'--delay': `${i*80}ms`} as React.CSSProperties} key={group}><div className="icon-box"><Icon size={21}/></div><h3>{group}</h3><div className="skill-list">{items.map(item=><span key={item}>{item}</span>)}</div></div>)}</div></section>

    <section id="projects" className="section-pad"><SectionHeading eyebrow="04 / PROJECTS" title="Learning by building." copy="A selection of projects that helped me turn classroom concepts into practical experiences."/><div className="projects-grid">{projects.map(({title,description,tech,icon:Icon},i)=><article className="project-card reveal" key={title}><div className="project-top"><span className="project-number">0{i+1}</span><div className="project-icon"><Icon size={22}/></div></div><h3>{title}</h3><p>{description}</p><div className="tech-tags">{tech.map(t=><span key={t}>{t}</span>)}</div><div className="project-links"><a href="#" onClick={e=>e.preventDefault()}>GitHub <Github size={15}/></a><a href="#" onClick={e=>e.preventDefault()}>Details <ArrowUpRight size={15}/></a></div></article>)}</div></section>

    <section id="certifications" className="section-pad section-dark"><SectionHeading eyebrow="05 / CERTIFICATIONS" title="Milestones along the way."/><div className="cert-grid">{certifications.map(([title,org],i)=><div className="cert-card reveal" key={title}><div className="cert-icon"><Trophy size={18}/></div><div><span className="cert-org">{org}</span><h3>{title}</h3><a href="#" onClick={e=>e.preventDefault()}>View certificate <ExternalLink size={13}/></a></div><span className="cert-index">0{i+1}</span></div>)}</div><div className="learning-card reveal"><div className="learning-icon"><Sparkles size={21}/></div><div><span className="eyebrow">CURRENTLY LEARNING</span><h3>Studio Course</h3><p>Currently exploring a Studio course to strengthen my technical knowledge and practical development skills.</p></div><span className="progress-badge"><span/> In Progress</span></div></section>

    <section className="section-pad interests-section"><SectionHeading eyebrow="06 / INTERESTS" title="What keeps me curious."/><div className="interest-cloud">{interests.map((item,i)=><div className="interest-pill reveal" key={item}><span>0{i+1}</span>{item}<ArrowUpRight size={15}/></div>)}</div></section>

    <section className="objective section-pad"><div className="objective-inner reveal"><div className="objective-mark"><Heart size={22}/></div><div><span className="eyebrow">CAREER OBJECTIVE</span><h2>Growing today, contributing tomorrow.</h2><p>To continuously develop my technical and problem-solving skills, gain practical experience through innovative projects, and build a successful career in the fields of Artificial Intelligence, Data Science, and Software Development.</p></div></div></section>

    <section id="contact" className="section-pad section-dark contact-section"><SectionHeading eyebrow="07 / CONTACT" title="Let&apos;s build something thoughtful." copy="Have an idea, an opportunity, or just want to say hello? My inbox is always open."/><div className="contact-grid"><div className="contact-info reveal"><a href="mailto:manjushree6450@gmail.com" className="contact-line"><Mail/><span><small>Email</small>manjushree6450@gmail.com</span></a><a href="tel:+916360416450" className="contact-line"><Phone/><span><small>Phone</small>+91 63604 16450</span></a><div className="contact-line"><MapPin/><span><small>Location</small>Byndoor, Kundapura, Udupi District, Karnataka – 576214</span></div><div className="contact-line"><Github/><span><small>GitHub</small>github.com/manjushree622</span></div></div><form className="contact-form reveal" onSubmit={submit}>{sent && <div className="success-message"><Check size={17}/> Thanks for reaching out. I&apos;ll get back to you soon.</div>}<div className="form-row"><label>Name<input name="name" required placeholder="Your name"/></label><label>Email<input name="email" type="email" required placeholder="you@example.com"/></label></div><label>Subject<input name="subject" required placeholder="What&apos;s on your mind?"/></label><label>Message<textarea name="message" required rows={5} placeholder="Tell me a little about it..."/></label><button className="button button-primary" type="submit">Send Message <Send size={16}/></button></form></div></section>

    <footer className="footer"><div><a href="#home" className="brand">MANJUSHREE<span>.</span></a><p>Computer Science Student | Artificial Intelligence &amp; Data Science</p></div><div className="footer-social"><a href="https://github.com/manjushree622" target="_blank" rel="noreferrer" aria-label="GitHub"><Github/></a><a href="https://www.linkedin.com/in/manjushree-601783413" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin/></a><a href="mailto:manjushree6450@gmail.com" aria-label="Email"><Mail/></a></div><p className="copyright">© 2026 Manjushree. All Rights Reserved.</p></footer>
  </main>
}
