import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "motion/react";
import { Mail, Phone, Linkedin, Github } from "lucide-react";
import emailjs from "@emailjs/browser";
import { profile } from "@/data/profile";
import { DiamondMarker, StampBadge, ZigzagDivider } from "@/components/decorative/Decorations";
import { PageTransition } from "@/components/layout/PageTransition";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Ankit Bind" },
      { name: "description", content: "Get in touch with Ankit Bind — open to remote opportunities, collaborations, and conversations about data." },
      { property: "og:title", content: "Contact — Ankit Bind" },
      { property: "og:description", content: "Email, phone, LinkedIn, GitHub — or send a message directly." },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().min(2, "Please share your name"),
  email: z.string().email("Enter a valid email"),
  subject: z.string().min(2, "Add a subject"),
  message: z.string().min(10, "A little more detail, please"),
});
type FormData = z.infer<typeof schema>;

const channels = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/[^+\d]/g, "")}` },
  { icon: Linkedin, label: "LinkedIn", value: "/in/ankit-bind-518858287", href: profile.linkedin },
  { icon: Github, label: "GitHub", value: "@ankit-bind", href: profile.github },
];

function ContactPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setStatus("submitting");
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      reset();
    } catch (error: any) {
      console.error("EmailJS error:", error);
      setErrorMsg(error?.text || error?.message || "Unknown error");
      setStatus("error");
    }
  };

  return (
    <PageTransition>
      <section className="px-4 pb-20 pt-6">
        <div className="mx-auto max-w-6xl rounded-[36px] bg-surface p-6 sm:p-10 lg:p-14">
          <div className="grid gap-12 lg:grid-cols-[5fr_6fr]">
            <div>
              <div className="eyebrow flex items-center gap-2"><DiamondMarker size={6} className="text-accent-warm" /> Contact</div>
              <h1 className="mt-3 font-display text-5xl uppercase leading-[1.05] tracking-[0.04em] text-ink sm:text-6xl">
                Let's talk.
              </h1>
              <div className="mt-5 text-ink"><ZigzagDivider /></div>
              <p className="mt-5 text-ink/70">
                Open to remote roles, internships, and project collaborations. The fastest way to reach me is email — usually a reply within a day.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {channels.map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="editorial-card group grid grid-cols-[auto_minmax(0,1fr)] items-center gap-4 p-5 transition-colors hover:bg-accent-warm/15"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border-[1.5px] border-ink/40 text-ink">
                      <c.icon className="h-4 w-4" />
                    </span>
                    <span className="min-w-0">
                      <p className="text-[11px] uppercase tracking-[0.22em] text-ink/55">{c.label}</p>
                      <p className="break-all font-display text-[15px] leading-snug text-ink">{c.value}</p>
                    </span>
                  </a>
                ))}
              </div>

              <div className="mt-8 flex items-center gap-4">
                <StampBadge size={96}>Reply<br/>within 24h</StampBadge>
                <p className="text-sm text-ink/65 max-w-xs">Based in {profile.location}. Available across IST and remote-friendly hours.</p>
              </div>
            </div>

            {/* Form */}
            <div className="editorial-card p-7 sm:p-9">
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center py-10 text-center"
                >
                  <StampBadge size={140}>Message<br/>Received</StampBadge>
                  <h3 className="mt-6 font-display text-3xl text-ink">Thank you.</h3>
                  <p className="mt-2 text-ink/70">I'll be back in your inbox shortly.</p>
                  <button onClick={() => setStatus("idle")} className="pill-btn mt-6">Send another</button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <h3 className="font-display text-2xl text-ink">Send a message</h3>

                  <Field label="Name" error={errors.name?.message}>
                    <input {...register("name")} className="field-input" placeholder="Your name" />
                  </Field>
                  <Field label="Email" error={errors.email?.message}>
                    <input {...register("email")} type="email" className="field-input" placeholder="you@example.com" />
                  </Field>
                  <Field label="Subject" error={errors.subject?.message}>
                    <input {...register("subject")} className="field-input" placeholder="What's it about?" />
                  </Field>
                  <Field label="Message" error={errors.message?.message}>
                    <textarea {...register("message")} rows={5} className="field-input resize-none" placeholder="Tell me a bit more…" />
                  </Field>

                  {status === "error" && (
                    <div className="text-[12px] text-destructive">
                      <p className="uppercase tracking-[0.18em]">Something went wrong. Please try again or email directly.</p>
                      <p className="mt-1 text-[10px] tracking-[0.1em] opacity-80">Error: {errorMsg}</p>
                    </div>
                  )}

                  <button type="submit" disabled={status === "submitting"} className="pill-btn-filled w-full justify-center disabled:opacity-70">
                    {status === "submitting" ? (
                      <>
                        <motion.span animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} className="inline-block">
                          <DiamondMarker size={9} />
                        </motion.span>
                        Sending…
                      </>
                    ) : (
                      "Send message"
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .field-input {
          width: 100%;
          background: transparent;
          border: 0;
          border-bottom: 1.25px solid color-mix(in oklab, var(--color-ink) 30%, transparent);
          padding: 0.6rem 0;
          font-family: var(--font-sans);
          color: var(--color-ink);
          outline: none;
          transition: border-color 200ms ease;
        }
        .field-input::placeholder { color: color-mix(in oklab, var(--color-ink) 40%, transparent); }
        .field-input:focus { border-bottom-color: var(--color-accent-warm); }
      `}</style>
    </PageTransition>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="eyebrow block">{label}</span>
      <div className="mt-1">{children}</div>
      {error && <span className="mt-1 block text-[11px] uppercase tracking-[0.18em] text-destructive">{error}</span>}
    </label>
  );
}
