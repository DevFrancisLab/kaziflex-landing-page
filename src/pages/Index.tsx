import { Button } from "@/components/ui/button";
import { Clock, ShieldCheck, Lock, CalendarDays, ClipboardList, UserCheck, Award, Menu, X } from "lucide-react";
import { useState } from "react";

/* ─── Navbar ─── */
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "About", href: "#about" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="text-2xl font-extrabold tracking-tight text-primary">
          Kazi<span className="text-accent">Flex</span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              {l.label}
            </a>
          ))}
          <Button asChild size="sm">
            <a href="#cta">Get Started</a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="flex flex-col gap-4 border-t px-6 pb-6 pt-4 md:hidden">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm font-medium text-muted-foreground">
              {l.label}
            </a>
          ))}
          <Button asChild size="sm" className="w-full">
            <a href="#cta" onClick={() => setOpen(false)}>Get Started</a>
          </Button>
        </div>
      )}
    </nav>
  );
};

/* ─── Device Mockup ─── */
const DesktopMockup = () => (
  <div className="w-full max-w-md rounded-xl border-2 border-border bg-card shadow-xl">
    {/* Browser chrome */}
    <div className="flex items-center gap-2 border-b px-4 py-2.5">
      <span className="h-3 w-3 rounded-full bg-destructive/60" />
      <span className="h-3 w-3 rounded-full bg-accent/80" />
      <span className="h-3 w-3 rounded-full bg-primary/40" />
      <div className="ml-3 flex-1 rounded-md bg-muted px-3 py-1 text-xs text-muted-foreground">kaziflex.app/dashboard</div>
    </div>
    {/* Screen content */}
    <div className="space-y-3 p-5">
      <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Today's Tasks</div>
      {[
        { task: "Kitchen Cleaning", hours: "2h", value: "KSh 600" },
        { task: "Laundry & Ironing", hours: "3h", value: "KSh 900" },
        { task: "Cooking (Lunch)", hours: "1.5h", value: "KSh 450" },
      ].map((t) => (
        <div key={t.task} className="flex items-center justify-between rounded-lg bg-muted/50 px-4 py-2.5 text-sm">
          <span className="font-medium text-foreground">{t.task}</span>
          <div className="flex gap-4 text-xs text-muted-foreground">
            <span>{t.hours}</span>
            <span className="font-semibold text-primary">{t.value}</span>
          </div>
        </div>
      ))}
      <div className="flex items-center justify-between pt-1 text-sm font-semibold">
        <span>Total</span>
        <span className="text-primary">KSh 1,950</span>
      </div>
    </div>
  </div>
);

const MobileMockup = () => (
  <div className="w-48 rounded-[1.75rem] border-2 border-border bg-card shadow-xl">
    {/* Notch */}
    <div className="flex justify-center pt-2">
      <div className="h-1.5 w-16 rounded-full bg-border" />
    </div>
    {/* Screen */}
    <div className="space-y-3 p-4">
      <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Employer Confirmation</div>
      <div className="space-y-2">
        <div className="rounded-md bg-primary/10 px-3 py-2 text-xs">
          <div className="font-medium text-foreground">Jane M. — Cleaning</div>
          <div className="text-muted-foreground">2h · KSh 600</div>
        </div>
        <div className="flex gap-2">
          <div className="flex-1 rounded-md bg-primary py-1.5 text-center text-[10px] font-semibold text-primary-foreground">Confirm</div>
          <div className="flex-1 rounded-md border py-1.5 text-center text-[10px] text-muted-foreground">Dispute</div>
        </div>
      </div>
      <div className="mt-2 rounded-md bg-muted/60 p-2">
        <div className="text-[9px] font-medium text-muted-foreground">Proof Hash</div>
        <div className="mt-0.5 truncate font-mono text-[8px] text-primary">0x7f3a...e91c</div>
      </div>
    </div>
  </div>
);

/* ─── Hero ─── */
const Hero = () => (
  <section className="relative overflow-hidden py-20 md:py-28">
    <div className="mx-auto max-w-6xl px-6">
      <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
        {/* Text */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            Flex Your Work.{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Show Your Value.
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-lg text-muted-foreground lg:mx-0">
            KaziFlex helps domestic workers log tasks, get verified, and build a proof-of-labor history.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
            <Button size="lg" asChild className="rounded-full px-8 shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30">
              <a href="#cta">Get Started</a>
            </Button>
            <Button size="lg" variant="outline" asChild className="rounded-full px-8">
              <a href="#how-it-works">Learn More</a>
            </Button>
          </div>
        </div>

        {/* Device mockups */}
        <div className="relative flex flex-1 items-end justify-center gap-6">
          <DesktopMockup />
          <div className="-mb-4 -ml-8 lg:-ml-12">
            <MobileMockup />
          </div>
        </div>
      </div>
    </div>
    {/* Decorative blobs */}
    <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
    <div className="pointer-events-none absolute -bottom-32 left-0 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
  </section>
);

/* ─── Features ─── */
const features = [
  { icon: Clock, title: "Log Tasks & Hours", desc: "Simple task selection with automatic hours and value calculation. Track every minute of your work." },
  { icon: ShieldCheck, title: "Employer Confirmation", desc: "Employers review your work, confirm completion, and approve payment — all in one place." },
  { icon: Lock, title: "Tamper-Proof Proof", desc: "Every verified record is hashed on-chain, creating a permanent, tamper-proof work history." },
  { icon: CalendarDays, title: "Work History", desc: "A chronological record of all your verified work and earnings, accessible anytime." },
];

const Features = () => (
  <section id="features" className="bg-muted/30 py-20 md:py-28">
    <div className="mx-auto max-w-6xl px-6">
      <div className="mb-14 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">Features</p>
        <h2 className="mt-2 text-3xl font-bold md:text-4xl">Everything you need to prove your work</h2>
      </div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <div key={f.title} className="group rounded-2xl border border-border/60 bg-card p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
            <div className="mb-5 inline-flex rounded-xl bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <f.icon className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-lg font-semibold">{f.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── How It Works ─── */
const steps = [
  { icon: ClipboardList, title: "Log Your Tasks", desc: "Select your tasks, enter hours, and let KaziFlex calculate your earnings." },
  { icon: UserCheck, title: "Employer Reviews", desc: "Your employer reviews the logged work and confirms completion and payment." },
  { icon: Award, title: "Get Your Proof", desc: "A tamper-proof blockchain record is created — your verified work history, forever." },
];

const HowItWorks = () => (
  <section id="how-it-works" className="py-20 md:py-28">
    <div className="mx-auto max-w-6xl px-6">
      <div className="mb-14 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">How It Works</p>
        <h2 className="mt-2 text-3xl font-bold md:text-4xl">Three simple steps</h2>
      </div>
      <div className="relative grid gap-12 md:grid-cols-3 md:gap-8">
        {/* Connecting line */}
        <div className="absolute left-1/2 top-12 hidden h-0.5 w-2/3 -translate-x-1/2 bg-gradient-to-r from-primary/20 via-primary to-primary/20 md:block" />

        {steps.map((s, i) => (
          <div key={s.title} className="relative flex flex-col items-center text-center">
            <div className="relative z-10 mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/25">
              <s.icon className="h-7 w-7" />
              <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">
                {i + 1}
              </span>
            </div>
            <h3 className="mb-2 text-lg font-semibold">{s.title}</h3>
            <p className="max-w-xs text-sm text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── Task Icons Showcase ─── */
const taskIcons = [
  { emoji: "🧹", label: "Cleaning" },
  { emoji: "👕", label: "Laundry" },
  { emoji: "🍳", label: "Cooking" },
  { emoji: "🤱", label: "Caregiving" },
  { emoji: "🌿", label: "Gardening" },
  { emoji: "🧽", label: "Dishes" },
];

const TaskShowcase = () => (
  <section id="about" className="bg-muted/30 py-20 md:py-28">
    <div className="mx-auto max-w-6xl px-6 text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-primary">Built For Real Work</p>
      <h2 className="mt-2 text-3xl font-bold md:text-4xl">Tasks everyday workers do</h2>
      <p className="mx-auto mt-4 max-w-md text-muted-foreground">
        KaziFlex is designed around the tasks domestic workers perform every day.
      </p>
      <div className="mt-12 flex flex-wrap justify-center gap-6">
        {taskIcons.map((t) => (
          <div key={t.label} className="flex flex-col items-center gap-2 rounded-2xl border border-border/60 bg-card px-6 py-5 shadow-sm transition-transform hover:scale-105">
            <span className="text-4xl">{t.emoji}</span>
            <span className="text-sm font-medium text-muted-foreground">{t.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── CTA ─── */
const CTA = () => (
  <section id="cta" className="py-20 md:py-28">
    <div className="mx-auto max-w-3xl px-6 text-center">
      <div className="rounded-3xl bg-gradient-to-br from-primary to-primary/80 px-8 py-16 shadow-2xl shadow-primary/20 md:px-16">
        <h2 className="text-3xl font-bold text-primary-foreground md:text-4xl">Start tracking your work today!</h2>
        <p className="mx-auto mt-4 max-w-md text-primary-foreground/80">
          Join thousands of domestic workers building verified, tamper-proof work histories with KaziFlex.
        </p>
        <Button size="lg" className="mt-8 rounded-full bg-accent px-10 text-accent-foreground shadow-lg hover:bg-accent/90">
          Sign Up Now
        </Button>
      </div>
    </div>
  </section>
);

/* ─── Footer ─── */
const Footer = () => (
  <footer className="border-t bg-muted/20 py-12">
    <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 md:flex-row md:justify-between">
      <a href="#" className="text-xl font-extrabold text-primary">
        Kazi<span className="text-accent">Flex</span>
      </a>
      <div className="flex gap-6 text-sm text-muted-foreground">
        <a href="#about" className="hover:text-foreground">About</a>
        <a href="#features" className="hover:text-foreground">Features</a>
        <a href="#" className="hover:text-foreground">Contact</a>
      </div>
      <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} KaziFlex. All rights reserved.</p>
    </div>
  </footer>
);

/* ─── Page ─── */
const Index = () => (
  <div className="min-h-screen scroll-smooth">
    <Navbar />
    <main>
      <Hero />
      <Features />
      <HowItWorks />
      <TaskShowcase />
      <CTA />
    </main>
    <Footer />
  </div>
);

export default Index;
