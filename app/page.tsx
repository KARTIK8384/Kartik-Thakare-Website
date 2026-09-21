import {
  Award,
  ArrowDownRight,
  ArrowUpRight,
  Binary,
  Boxes,
  CircuitBoard,
  CodeXml,
  Cpu,
  FileDown,
  FlaskConical,
  Mail,
  Network,
  Radio,
  ShieldCheck,
  UsersRound,
} from "lucide-react";
import { assetPath } from "../lib/asset-path";

const projects = [
  {
    number: "01",
    period: "FEB — APR 2026",
    status: "1.5 µm optimal design point",
    title: "Silicon p-i-n Photodetector Study",
    description:
      "Modeled 0.5–2.0 µm intrinsic-layer thicknesses in Silvaco ATLAS while holding doping, carrier lifetime, wavelength, and voltage sweeps constant. Compared photogeneration, spectral response, and dark and illuminated I-V behavior to identify a practical performance point.",
    tags: ["Silvaco ATLAS", "TCAD", "Optoelectronics", "I-V analysis", "Device modeling"],
    icon: FlaskConical,
  },
  {
    number: "02",
    period: "SEP — DEC 2025",
    status: "3–4× measured speedup",
    title: "15-bit Pipelined RISC Processor",
    description:
      "Designed a five-stage CPU with hazard handling, forwarding, memory-mapped I/O, and a two-way set-associative cache. Built its Python assembler and scaled the architecture to two- and four-core systems for distributed 4×4 matrix multiplication on a Cyclone V FPGA.",
    tags: ["Verilog", "Computer architecture", "Cache", "Python", "ModelSim", "FPGA"],
    icon: Cpu,
  },
  {
    number: "03",
    period: "OCT — DEC 2025",
    status: "Reusable UVM architecture",
    title: "UVM Verification of a DTMF RCC Block",
    description:
      "Rebuilt a legacy environment around UVM agents, drivers, monitors, a scoreboard, and TLM FIFOs. Integrated an algorithmic C reference model through DPI-C, then closed assertions and functional and cross coverage across RTL and gate-level simulations.",
    tags: ["SystemVerilog", "UVM", "SVA", "DPI-C", "Xcelium", "IMC"],
    icon: ShieldCheck,
  },
  {
    number: "04",
    period: "SEP — NOV 2025",
    status: "Class-based verification",
    title: "SystemVerilog Verification of a DTMF RCC Block",
    description:
      "Rebuilt a Verilog testbench in SystemVerilog with classes, bidirectional mailboxes, a DPI-connected C/C++ model, and a diagnostic scoreboard. Added immediate and concurrent assertions, code/FSM/cross coverage, and watermark-driven simulation control.",
    tags: ["SystemVerilog", "Assertions", "Coverage", "DPI", "Scoreboard", "Cadence"],
    icon: Binary,
  },
  {
    number: "05",
    period: "AUG — SEP 2025",
    status: "Configurable EDA automation",
    title: "Parameterized RTL & Testbench Generator",
    description:
      "Created a Perl and Python flow that turns user-defined parameters into synthesizable Verilog for multistage pipelined registers. Generated matching verification testbenches to improve reuse, consistency, and iteration speed in Cadence flows.",
    tags: ["Perl", "Python", "Verilog", "Automation", "Cadence"],
    icon: CodeXml,
  },
  {
    number: "06",
    period: "JAN — MAY 2025",
    status: "ITU-T G.726 / G.711",
    title: "Multi-Channel ADPCM Voice Codec",
    description:
      "Contributed to a top-down, multi-channel codec implementation using Verilog RTL, synthesis, DFT insertion, and static timing analysis. Used directed and randomized testing with ITU-provided vectors to validate standards compliance at RTL and gate level.",
    tags: ["Verilog", "SystemVerilog", "DSP", "DFT", "STA", "Cadence", "Synopsys"],
    icon: Radio,
  },
  {
    number: "07",
    period: "NOV — DEC 2024",
    status: "TDSP ↔ DMA memory access",
    title: "Memory Access Bus Arbiter & DTMF Integration",
    description:
      "Designed a Verilog arbiter for shared memory access between a Tiny DSP core and DMA controller, then integrated it into a DTMF receiver. Evaluated RTL and gate-level behavior alongside timing and power in a Cadence flow.",
    tags: ["Verilog", "Arbitration", "DTMF", "Cadence", "Timing", "Power"],
    icon: Network,
  },
  {
    number: "08",
    period: "OCT — NOV 2024",
    status: "BSR50 + ADD16 integration",
    title: "Hierarchical Standard Cells & Quarter Pad Frame",
    description:
      "Built D flip-flop and full-adder cells, integrated them into a 50-bit boundary-scan register and 16-bit carry-select adder, and wired a test cell into a quarter-chip pad frame for boundary-scan connectivity and functional testing.",
    tags: ["Cadence Virtuoso", "Place & route", "Boundary scan", "DRC", "LVS", "Verilog"],
    icon: Boxes,
  },
  {
    number: "09",
    period: "AUG — SEP 2024",
    status: "Pre- and post-layout verified",
    title: "45 nm CMOS Standard Cell Library",
    description:
      "Developed inverters, logic gates, and a multiplexer in Cadence Virtuoso. Tuned transistor sizing and layout for current drive and timing, then verified the cells through pre-layout simulation, DRC, LVS, and post-layout analysis.",
    tags: ["Cadence Virtuoso", "CMOS", "ADE XL", "DRC", "LVS", "Layout"],
    icon: CircuitBoard,
  },
  {
    number: "10",
    period: "JUL 2022 — MAY 2023",
    status: "Granted Indian Patent 601471",
    title: "Badminton Player Movement Tracking System",
    description:
      "Co-developed wearable hand and leg sensing devices connected to a microcontroller, wireless network, cloud service, and analysis application. The system uses motion data and a Random Forest model to classify movements and guide player posture and shot correction.",
    tags: ["Embedded systems", "Motion sensors", "Python", "Random Forest", "PCB", "Cloud"],
    icon: CircuitBoard,
  },
];

const independentBuild = {
  status: "INDEPENDENT BUILD / ACTIVE",
  title: "MNIST CNN FPGA Accelerator",
  description:
    "A hardware-first CNN accelerator for the DE0-Nano, built module by module from serial convolution through ReLU and top-level integration. The ROM-based 5×5 demo produces all nine expected outputs in ModelSim.",
  tags: ["Verilog", "SystemVerilog", "Cyclone IV", "Quartus", "ModelSim"],
  href: "https://github.com/KARTIK8384/mnist-cnn-fpga-accelerator",
};

const notes = [
  {
    label: "FIELD NOTE 01",
    title: "Pre-silicon firmware is a simulation problem first",
    text: "How firmware teams validate behavior, build models, and analyze signals before the chip exists.",
  },
  {
    label: "BUILD LOG 02",
    title: "A ROM-based 5×5 convolution engine on Cyclone IV",
    text: "What changed between the first serial convolution demo and a repeatable, verified datapath.",
  },
  {
    label: "METHOD 03",
    title: "Verification before optimization",
    text: "A practical approach to golden outputs, focused testbenches, and small trustworthy milestones.",
  },
];

const focusAreas = [
  { icon: Cpu, name: "RTL design", detail: "Datapaths, processors, memory systems, and synthesizable architecture" },
  { icon: ShieldCheck, name: "Design verification", detail: "UVM, assertions, coverage, scoreboards, and reference models" },
  { icon: Binary, name: "Embedded firmware", detail: "C/C++, Python, Linux, simulation-led validation, and debugging" },
];

const leadership = [
  {
    dates: "GRADUATE ACTIVITY",
    role: "RIT Racing",
    organization: "Rochester Institute of Technology",
    detail: "Contributing within a student engineering team where design decisions, hardware, and race-ready execution meet.",
    icon: CircuitBoard,
  },
  {
    dates: "JUL 2022 — JUL 2023",
    role: "Marketing Head",
    organization: "IEEE Student Chapter at RAIT",
    detail: "Led chapter marketing and helped translate technical programs into clear, engaging communication for the student community.",
    icon: UsersRound,
  },
  {
    dates: "AUG 2021 — AUG 2022",
    role: "Technical Designer",
    organization: "IEEE Student Chapter at RAIT",
    detail: "Designed technical and visual material supporting chapter events, announcements, and engineering initiatives.",
    icon: CodeXml,
  },
  {
    dates: "AUG 2021 — AUG 2022",
    role: "Marketing Team Member",
    organization: "IEEE Student Chapter at RAIT",
    detail: "Supported outreach, event promotion, and consistent communication across the chapter's student programs.",
    icon: Radio,
  },
];

const earlierRoles = [
  {
    dates: "AUG 2025 — MAY 2026",
    role: "Graduate Research Assistant",
    company: "Rochester Institute of Technology",
    detail: "Analyzed signal behavior and system-level effects using electromagnetic and transmission-line concepts; developed technical reference material.",
    tags: ["Electromagnetics", "Signal analysis", "Technical writing"],
    icon: Radio,
  },
  {
    dates: "MAY 2025 — MAY 2026",
    role: "EME General Laboratory Assistant",
    company: "Rochester Institute of Technology",
    detail: "Supported hardware bring-up and root-cause analysis using oscilloscopes, logic analyzers, power supplies, and multimeters.",
    tags: ["Instrumentation", "Debugging", "Lab support"],
    icon: CircuitBoard,
  },
  {
    dates: "OCT 2023 — JUN 2024",
    role: "Systems Engineer",
    company: "Tata Consultancy Services",
    detail: "Administered SAP Basis environments on Linux and Oracle, supported upgrades and migrations, and built enterprise applications with Java Web Dynpro.",
    tags: ["SAP Basis", "Linux", "Oracle", "Java"],
    icon: CodeXml,
  },
];

const education = [
  {
    dates: "AUG 2024 — MAY 2027",
    school: "Rochester Institute of Technology",
    degree: "Master of Science · Electrical & Electronics Engineering",
    detail: "Digital systems, ASIC design and verification, FPGA prototyping, and computer architecture.",
    mark: "RIT",
  },
  {
    dates: "2019 — 2023",
    school: "University of Mumbai",
    degree: "Bachelor of Engineering · Electrical & Electronics Engineering",
    detail: "Dr. D. Y. Patil University Ramrao Adik Institute of Technology · GPA 3.44/4.00",
    mark: "MU",
  },
];

const resumes = [
  {
    label: "RTL / DESIGN VERIFICATION",
    title: "Digital Design & Verification Résumé",
    detail: "Best for RTL, ASIC verification, FPGA, and embedded-firmware opportunities.",
    href: assetPath("/Kartik_Thakare_RTL_Verification_Resume.pdf"),
  },
  {
    label: "VLSI / PHYSICAL DESIGN",
    title: "Physical Design & VLSI Résumé",
    detail: "Best for standard-cell, layout, physical-design, and broader VLSI opportunities.",
    href: assetPath("/Kartik_Thakare_Physical_Design_Resume.pdf"),
  },
];

function CircuitMotif({ className = "" }: { className?: string }) {
  return (
    <div className={`circuit-motif ${className}`} aria-hidden="true">
      {Array.from({ length: 6 }).map((_, index) => <span key={`trace-${index}`} />)}
      {Array.from({ length: 7 }).map((_, index) => <i key={`node-${index}`} />)}
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Kartik Thakare, home">
          <span className="brand-mark" aria-hidden="true">KT</span>
          <span className="brand-name">Kartik Thakare</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#experience">Experience</a>
          <a href="#work">Work</a>
          <a href="#education">Education</a>
          <a href="#volunteering">Volunteering</a>
          <a href="#resume">Résumé</a>
        </nav>
        <a className="header-cta" href="#contact">
          Let&apos;s talk <ArrowDownRight size={16} aria-hidden="true" />
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <CircuitMotif className="hero-circuit" />
        <div className="hero-copy">
          <p className="eyebrow"><span /> Electrical &amp; Electronics Engineer</p>
          <h1>I build close<br />to the <em>hardware.</em></h1>
          <p className="hero-intro">
            I&apos;m Kartik, a graduate student at Rochester Institute of Technology working across
            Digital System Design (RTL &amp; PD), ASIC Verification, Computer Architecture,
            FPGA programming and Embedded systems.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              Explore selected work <ArrowDownRight size={18} aria-hidden="true" />
            </a>
            <a className="button button-ghost" href="#resume">
              <FileDown size={17} aria-hidden="true" /> Résumé
            </a>
            <a className="button button-ghost" href="https://github.com/KARTIK8384" target="_blank" rel="noreferrer">
              <CodeXml size={17} aria-hidden="true" /> GitHub
            </a>
          </div>
        </div>

        <aside className="signal-card" aria-label="Current profile">
          <div className="signal-card-head">
            <span>PROFILE / 2026</span>
            <span className="status-dot">Active</span>
          </div>
          <div className="chip-mark" aria-hidden="true">
            <span className="chip-core">KT</span>
            {Array.from({ length: 12 }).map((_, index) => <i key={index} />)}
          </div>
          <dl>
            <div><dt>Current</dt><dd>Embedded Firmware Co-op</dd></div>
            <div><dt>Studying</dt><dd>M.S. Electrical Engineering</dd></div>
            <div><dt>Based</dt><dd>United States</dd></div>
            <div><dt>Available</dt><dd>Full-time · May 2027</dd></div>
          </dl>
        </aside>

        <div className="scroll-note"><span /> Scroll to inspect selected work</div>
      </section>

      <section className="focus-strip" aria-label="Core focus areas">
        {focusAreas.map(({ icon: Icon, name, detail }) => (
          <article key={name}>
            <Icon size={21} strokeWidth={1.6} aria-hidden="true" />
            <div><h2>{name}</h2><p>{detail}</p></div>
          </article>
        ))}
      </section>

      <section className="section profile-section" id="profile">
        <div className="profile-intro">
          <div>
            <p className="kicker">ABOUT</p>
            <h2>From equations<br />to instruments<br />to gates.</h2>
          </div>
          <div className="profile-copy">
            <p>
              I work at the boundary of software and silicon by writing RTL and firmware,
              building verification environments, and measuring behavior in simulation and on hardware.
            </p>
            <p>
              My RIT research and laboratory roles have made technical communication and practical
              instrumentation part of how I engineer. I&apos;m now targeting full-time work beginning in
              Summer 2027 across physical design, FPGA prototyping, ASIC design, and verification.
            </p>
            <ul aria-label="Primary engineering tools">
              <li>Cadence Virtuoso</li><li>Xcelium</li><li>Vivado</li><li>Quartus Prime</li><li>ModelSim</li><li>Altium</li>
            </ul>
          </div>
        </div>

        <div className="profile-facts" aria-label="Profile highlights">
          <article><span>01 / FOCUS</span><strong>Digital systems</strong><p>ASIC · FPGA · firmware</p></article>
          <article><span>02 / PATENT</span><strong>Indian Patent 601471</strong><p>Granted September 2026</p></article>
          <article><span>03 / TOOLCHAIN</span><strong>Design to validation</strong><p>Cadence · Quartus · ModelSim</p></article>
        </div>
      </section>

      <section className="section experience-section" id="experience">
        <div className="section-heading">
          <div><p className="kicker">EXPERIENCE</p><h2>Engineering through<br />the full stack.</h2></div>
          <p>A journey from enterprise systems and hands-on laboratories to research and embedded firmware.</p>
        </div>

        <div className="current-position-heading">
          <p className="kicker">CURRENT POSITION</p>
          <span><i /> NOW / JUN 2026 — PRESENT</span>
        </div>

        <article className="experience-main">
            <div className="experience-meta"><span>JUN 2026 — PRESENT</span><span>HILLSBORO, OR</span></div>
            <CircuitMotif className="experience-circuit" />
            <p className="company">Skyworks Solutions</p>
            <h3>Embedded Firmware Engineer Co-op</h3>
            <p>
              Developing and validating embedded firmware for wireless communication products using C/C++,
              Git, Python, and Linux, with hands-on testing, debugging, and release validation.
            </p>
            <ul className="experience-tags" aria-label="Current position skills">
              <li>C / C++</li><li>Python</li><li>Linux</li><li>Git</li><li>Validation</li>
            </ul>
            <div className="experience-rule" />
            <p className="disclaimer">Project details are intentionally presented at a non-confidential level.</p>
        </article>

        <div className="experience-subheading">
          <div><p className="kicker">EXPERIENCE JOURNEY</p><h3>Every role shaped<br />the engineer.</h3></div>
          <p>Each stop added a different layer: production systems, practical measurement, research, and technical communication.</p>
        </div>

        <div className="journey" aria-label="Experience journey">
          <div className="journey-line" aria-hidden="true"><span /></div>
          <div className="earlier-roles">
          {earlierRoles.map(({ dates, role, company, detail, tags, icon: Icon }, index) => (
            <article key={role}>
              <span className="journey-node" aria-hidden="true">0{index + 1}</span>
              <div className="role-icon"><Icon size={23} strokeWidth={1.5} aria-hidden="true" /></div>
              <p className="role-dates">{dates}</p>
              <div><h3>{role}</h3><p className="role-company">{company}</p></div>
              <p className="role-detail">{detail}</p>
              <ul className="role-tags" aria-label={`${role} skills`}>
                {tags.map((tag) => <li key={tag}>{tag}</li>)}
              </ul>
            </article>
          ))}
          </div>
        </div>

        <article className="approach-card experience-principle">
          <p className="kicker">MY APPROACH</p>
          <blockquote>“Make the behavior observable. Then make it correct. Then make it fast.”</blockquote>
          <p>Small verified milestones, clear interfaces, and evidence before assumptions.</p>
        </article>
      </section>

      <section className="section work-section" id="work">
        <div className="section-heading">
          <div><p className="kicker">PROJECT ARCHIVE / 01—10</p><h2>Systems that move<br />from idea to signal.</h2></div>
          <p>Ten engineering projects spanning semiconductor devices, RTL, UVM, computer architecture, physical implementation, and embedded systems.</p>
        </div>

        <div className="project-index" aria-label="Project areas">
          <span>PROJECT RECORD / 01—10</span>
          <CircuitMotif className="index-circuit" />
          <strong>TCAD · RTL · DV · FPGA · VLSI · EMBEDDED</strong>
        </div>

        <div className="project-list">
          {projects.map(({ number, period, status, title, description, tags, icon: Icon }) => (
            <article className="project" key={number}>
              <div className="project-number">{number}</div>
              <div className="project-icon"><Icon size={28} strokeWidth={1.4} aria-hidden="true" /></div>
              <div className="project-copy">
                <div className="project-meta"><p className="project-status">{status}</p><span>{period}</span></div>
                <h3>{title}</h3>
                <p>{description}</p>
                <ul aria-label={`${title} technologies`}>
                  {tags.map((tag) => <li key={tag}>{tag}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <article className="independent-build">
          <div className="independent-build-icon"><CircuitBoard size={31} strokeWidth={1.35} aria-hidden="true" /></div>
          <div>
            <p>{independentBuild.status}</p>
            <h3>{independentBuild.title}</h3>
            <span>{independentBuild.description}</span>
            <ul aria-label={`${independentBuild.title} technologies`}>
              {independentBuild.tags.map((tag) => <li key={tag}>{tag}</li>)}
            </ul>
          </div>
          <a href={independentBuild.href} target="_blank" rel="noreferrer">
            View repository <ArrowUpRight size={19} aria-hidden="true" />
          </a>
        </article>

        <article className="patent-strip">
          <div><span>PATENT / GRANTED 2026</span><strong>Indian Patent 601471 · Application 202321058914</strong></div>
          <p>A System and Process for Identifying and Tracking Movements of a Badminton Player</p>
          <a className="patent-download" href={assetPath("/Kartik_Thakare_Badminton_Tracking_Patent.pdf")} download>
            <Award size={18} aria-hidden="true" /> View certificate
          </a>
        </article>
      </section>

      <section className="section education-section" id="education">
        <div className="section-heading">
          <div><p className="kicker">EDUCATION</p><h2>Two institutions.<br />One foundation.</h2></div>
          <p>Graduate specialization and undergraduate fundamentals, presented with equal weight because both shaped the work.</p>
        </div>

        <div className="education-grid">
          {education.map((item) => (
            <article className="education-card" data-mark={item.mark} key={item.school}>
              <div className="education-meta"><span>{item.dates}</span><span>{item.mark} / RECORD</span></div>
              <h3>{item.school}</h3>
              <p className="education-degree">{item.degree}</p>
              <p className="education-detail">{item.detail}</p>
              <div className="education-trace" aria-hidden="true"><i /><i /><i /></div>
            </article>
          ))}
        </div>
      </section>

      <section className="section volunteering-section" id="volunteering">
        <CircuitMotif className="volunteering-circuit" />
        <div className="section-heading">
          <div><p className="kicker">VOLUNTEERING &amp; ACTIVITIES</p><h2>Engineering beyond<br />the coursework.</h2></div>
          <p>Team participation, technical design, and student leadership across RIT Racing and IEEE-RAIT.</p>
        </div>

        <div className="volunteering-grid">
          {leadership.map(({ dates, role, organization, detail, icon: Icon }, index) => (
            <article key={`${role}-${dates}`}>
              <div className="volunteer-topline"><span>0{index + 1}</span><Icon size={21} strokeWidth={1.5} aria-hidden="true" /></div>
              <p className="volunteer-dates">{dates}</p>
              <h3>{role}</h3>
              <p className="volunteer-organization">{organization}</p>
              <p className="volunteer-detail">{detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section notes-section" id="notes">
        <div className="section-heading">
          <div><p className="kicker">ENGINEERING NOTES</p><h2>What I&apos;m learning<br />while I build.</h2></div>
          <p>Short explanations and build logs from current work. Full articles are being prepared.</p>
        </div>
        <div className="notes-grid">
          {notes.map((note) => (
            <article className="note-card" key={note.label}>
              <p className="note-label">{note.label}</p>
              <h3>{note.title}</h3>
              <p>{note.text}</p>
              <span>Draft in progress</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section resume-section" id="resume">
        <div className="section-heading">
          <div><p className="kicker">RÉSUMÉS</p><h2>Choose the version<br />that fits the role.</h2></div>
          <p>Both are one-page engineering résumés; the project emphasis changes with the opportunity.</p>
        </div>
        <div className="resume-grid">
          {resumes.map((resume) => (
            <a className="resume-card" href={resume.href} download key={resume.href}>
              <div className="resume-icon"><FileDown size={24} strokeWidth={1.5} aria-hidden="true" /></div>
              <p>{resume.label}</p>
              <h3>{resume.title}</h3>
              <span>{resume.detail}</span>
              <strong>Download PDF <ArrowDownRight size={17} aria-hidden="true" /></strong>
            </a>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <p className="kicker">CONTACT</p>
        <h2>Let&apos;s make something<br /><em>measurable.</em></h2>
        <p className="contact-copy">
          I&apos;m preparing for full-time roles beginning around May 2027 in RTL design,
          ASIC verification, physical design, and embedded firmware.
        </p>
        <div className="contact-actions">
          <a className="button button-primary large" href="mailto:kartikthakare05@gmail.com">
            <Mail size={18} aria-hidden="true" /> Email me
          </a>
          <a className="button button-ghost large" href="https://www.linkedin.com/in/kartikthakare/" target="_blank" rel="noreferrer">
            LinkedIn <ArrowUpRight size={18} aria-hidden="true" />
          </a>
          <a className="button button-ghost large" href="https://github.com/KARTIK8384" target="_blank" rel="noreferrer">
            GitHub <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
      </section>

      <footer>
        <a className="brand" href="#top"><span className="brand-mark" aria-hidden="true">KT</span></a>
        <p>Designed around systems, signals, and the discipline to verify both.</p>
        <div>
          <span>© 2026 Kartik Thakare</span>
          <a href="mailto:kartikthakare05@gmail.com">Email</a>
          <a href="https://www.linkedin.com/in/kartikthakare/" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={13} aria-hidden="true" /></a>
          <a href="https://github.com/KARTIK8384" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={13} aria-hidden="true" /></a>
        </div>
      </footer>
    </main>
  );
}
