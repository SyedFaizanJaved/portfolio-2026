import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Send, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { SITE, SOCIALS } from "@/constants/site";
import { sendContactEmail } from "@/services/emailjs";
import { staggerContainer, fadeUp, viewportOnce } from "@/utils/motion";

const schema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Please enter a valid email."),
  subject: z.string().min(3, "Add a short subject."),
  message: z.string().min(10, "Tell me a little more (10+ characters)."),
});

type FormValues = z.infer<typeof schema>;

const CONTACT_INFO = [
  { icon: Mail, label: "Email", value: SITE.email, href: SOCIALS.email },
  {
    icon: Github,
    label: "GitHub",
    value: "SyedFaizanJaved",
    href: SOCIALS.github,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "syedfaizanjaved",
    href: SOCIALS.linkedin,
  },
  { icon: MapPin, label: "Location", value: SITE.location },
];

const THROTTLE_MS = 30_000;
const THROTTLE_KEY = "contact-last-submit";

export function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const honeypotRef = useRef<HTMLInputElement>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormValues) => {
    // Honeypot: a real user never fills this hidden field.
    if (honeypotRef.current?.value) {
      toast.success("Message sent — I'll get back to you soon!");
      reset();
      return;
    }

    // Throttle rapid re-submits.
    const now = Date.now();
    const last = Number(localStorage.getItem(THROTTLE_KEY) || 0);
    if (now - last < THROTTLE_MS) {
      toast.error("Please wait a moment before sending another message.");
      return;
    }

    setSubmitting(true);
    try {
      await sendContactEmail(data);
      localStorage.setItem(THROTTLE_KEY, String(Date.now()));
      toast.success("Message sent — I'll get back to you soon!");
      reset();
    } catch (err) {
      if (err instanceof Error && err.message === "EMAIL_NOT_CONFIGURED") {
        toast.error("Email isn't configured yet. Opening your mail app instead.");
        const body = encodeURIComponent(
          `${data.message}\n\n— ${data.name} (${data.email})`
        );
        window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(
          data.subject
        )}&body=${body}`;
      } else {
        toast.error("Something went wrong. Please try again or email me directly.");
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative scroll-mt-24 overflow-hidden py-24 sm:py-32">
      <div className="absolute bottom-0 left-1/2 -z-10 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-brand-cyan/10 blur-[130px]" />
      <div className="container-px">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build"
          highlight="something great."
          description="Have a project, a role, or just a question? Send a message — I read every one."
        />

        <div className="mx-auto mt-16 grid max-w-5xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Info */}
          <motion.div
            variants={staggerContainer(0.08)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex flex-col gap-4"
          >
            {CONTACT_INFO.map((info) => {
              const Icon = info.icon;
              const content = (
                <div className="gradient-border flex items-center gap-4 rounded-2xl bg-card/60 p-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary/10 text-secondary ring-1 ring-secondary/20">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-wide text-muted-foreground">
                      {info.label}
                    </span>
                    <span className="block font-medium">{info.value}</span>
                  </span>
                </div>
              );
              return (
                <motion.div key={info.label} variants={fadeUp}>
                  {info.href ? (
                    <a
                      href={info.href}
                      target={info.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="block transition-transform hover:-translate-y-0.5"
                    >
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </motion.div>
              );
            })}
          </motion.div>

          {/* Form */}
          <Reveal>
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="gradient-border space-y-5 rounded-3xl bg-card/60 p-6 sm:p-8"
            >
              {/* Honeypot — hidden from users, catches bots */}
              <input
                ref={honeypotRef}
                type="text"
                name="company"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="absolute left-[-9999px] h-0 w-0 opacity-0"
              />
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Name" error={errors.name?.message}>
                  <Input
                    placeholder="Jane Doe"
                    aria-invalid={!!errors.name}
                    {...register("name")}
                  />
                </Field>
                <Field label="Email" error={errors.email?.message}>
                  <Input
                    type="email"
                    placeholder="jane@company.com"
                    aria-invalid={!!errors.email}
                    {...register("email")}
                  />
                </Field>
              </div>
              <Field label="Subject" error={errors.subject?.message}>
                <Input
                  placeholder="Project inquiry"
                  aria-invalid={!!errors.subject}
                  {...register("subject")}
                />
              </Field>
              <Field label="Message" error={errors.message?.message}>
                <Textarea
                  placeholder="Tell me about your project or role…"
                  aria-invalid={!!errors.message}
                  {...register("message")}
                />
              </Field>

              <Button
                type="submit"
                size="lg"
                disabled={submitting}
                className="w-full"
              >
                {submitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      {children}
      {error && <p className="text-xs text-red-400">{error}</p>}
    </div>
  );
}
