'use client'

import { useState } from 'react'
import { Header } from '@/components/header'
import { WhatsAppWidget, WhatsAppIcon } from '@/components/whatsapp-widget'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Scale, Building2, FileText, Users, Briefcase, HomeIcon, Phone, Mail, MapPin, Linkedin, Star, Quote, ChevronDown, CheckCircle2 } from 'lucide-react'

const practiceAreas = [
  {
    icon: Building2,
    title: 'Corporate and Commercial Law',
    description: 'Expert guidance on business formation, mergers, acquisitions, corporate governance, and commercial transactions. Comprehensive support for regulatory compliance and business operations.',
  },
  {
    icon: Users,
    title: 'Employment Practice',
    description: 'Comprehensive employment law services including employment contracts, workplace disputes, labor law compliance, and employee relations matters.',
  },
  {
    icon: Scale,
    title: 'Litigation and Dispute Resolution',
    description: 'Aggressive representation in court proceedings, commercial disputes, and alternative dispute resolution. Expert handling of corporate, labor, family, and real estate litigation.',
  },
  {
    icon: FileText,
    title: 'Private Client Services',
    description: 'Personalized legal services for wills, trusts, estate management, probate and administration, and personal legal matters.',
  },
]

const team = [
  {
    name: 'Isaac Gitere Njuguna',
    role: 'Managing Partner',
    expertise: 'Corporate & Commercial Law',
    credentials: 'LLB, Dip. Law (Kenya School of Law)',
    bio: 'A seasoned Advocate of the High Court of Kenya with over a decade of experience in corporate and property law. Isaac has successfully managed complex high-value banking transactions for Cooperative Bank of Kenya and acted as lead counsel in significant land acquisition matters, including a Kshs 500 million transaction involving change of user and subdivision.',
    // linkedin: 'https://linkedin.com/in/isaacngugi',
    // email: 'isaac@isaaclawadvocates.co.ke',
    image: '/Isaac.jpg',
  },
  {
    name: 'Nuru Munyu Ndanu',
    role: 'Partner',
    expertise: 'Employment & Procurement Law',
    credentials: 'LLB (Daystar), Dip. Law',
    bio: 'A dedicated Partner specializing in public procurement and employment law. Nuru represented Jubilee Health Insurance in a major public procurement matter valued at Kshs 1.4 Billion, navigating the case from the Procurement Board to the Court of Appeal, and successfully handled land transfers valued at Kshs 22 Million for Elinuda Investment Limited.',
    // linkedin: 'https://linkedin.com/in/nurungangu',
    // email: 'nuru@isaaclawadvocates.co.ke',
    image: 'https://placehold.co/400x400/1e3a8a/ffffff?text=NN',
  },
  {
    name: 'Yunis Ibrahim Sheikh',
    role: 'Consultant Partner',
    expertise: 'Property & Corporate Law',
    credentials: 'LLB, MSc Health Systems Management',
    bio: 'An accomplished advocate with over 10 years of professional experience spanning legal, private, and non-profit sectors. Yunis served as Country Director for Rural Heart Kenya and Secretary for the Wajir West Constituency Development Fund (CDF), bringing extensive expertise in health systems management and infrastructure development projects.',
    // linkedin: 'https://linkedin.com/in/yunissheikh',
    // email: 'yunis@isaaclawadvocates.co.ke',
    image: 'https://placehold.co/400x400/1e3a8a/ffffff?text=YS',
  },
  {
    name: 'Joseph Wakaba',
    role: 'Senior Associate',
    expertise: 'Dispute Resolution & ESG Compliance',
    credentials: 'LLB, Dip. Law',
    bio: 'A seasoned dispute resolution and commercial lawyer with nearly a decade of experience. Joseph is a pioneer in the Kenyan legal market for his focus on ESG (Environmental, Social, and Governance) compliance, consulting for major organizations on Responsible Business and Human Rights Due Diligence, providing comprehensive ESG compliance frameworks.',
    // linkedin: 'https://linkedin.com/in/josephwakaba',
    // email: 'joseph@isaaclawadvocates.co.ke',
    image: 'https://placehold.co/400x400/1e3a8a/ffffff?text=JW',
  },
]

const clients = [
  "Yara East Africa Limited",
  "Vaghjiyani Enterprises Limited",
  "Laxmi Estates Limited",
  "Fairshare Limited",
  "Distinction Management Limited"
]

const testimonials = [
  {
    name: 'John Kamau',
    company: 'Tech Innovations Ltd',
    rating: 5,
    text: 'Isaac Law LLP provided exceptional legal guidance during our company formation. Their expertise in corporate law and attention to detail gave us confidence throughout the process.',
  },
  {
    name: 'Mary Njeri',
    company: 'Real Estate Developer',
    rating: 5,
    text: 'Outstanding service! The team handled our property acquisition with professionalism and efficiency. Highly recommend their real estate legal services.',
  },
  {
    name: 'Peter Ochieng',
    company: 'Manufacturing Co.',
    rating: 5,
    text: 'We have worked with Isaac Law LLP for over 3 years. Their commercial law expertise has been invaluable to our business growth. Truly a trusted partner.',
  },
  {
    name: 'Sarah Wambui',
    company: 'Startup Founder',
    rating: 5,
    text: 'As a first-time entrepreneur, I needed clear legal advice. Isaac Law LLP made complex legal matters easy to understand and provided excellent support.',
  },
]

const faqs = [
  {
    question: 'What are your consultation fees?',
    answer: 'We offer a free initial 30-minute consultation to understand your legal needs. After that, our fees vary depending on the complexity of the case and the services required. We provide transparent pricing and will discuss all costs upfront before proceeding with any work.',
  },
  {
    question: 'How long does a typical case take?',
    answer: 'The duration varies significantly depending on the type and complexity of the case. Simple contract reviews may take a few days, while litigation cases can take several months to years. We will provide you with a realistic timeline during your initial consultation.',
  },
  {
    question: 'Do you handle cases outside of Nairobi?',
    answer: 'Yes, we handle cases throughout Kenya. While our main office is in Nairobi, we have experience working with clients and cases across the country. We can arrange virtual consultations and travel when necessary.',
  },
  {
    question: 'What documents should I bring for my first consultation?',
    answer: 'Please bring any relevant documents related to your legal matter, such as contracts, correspondence, court documents, or identification. If you\'re unsure what to bring, contact us beforehand and we\'ll guide you on what would be most helpful.',
  },
  {
    question: 'Can I get legal advice via WhatsApp or phone?',
    answer: 'While we\'re happy to answer general questions via WhatsApp or phone, detailed legal advice requires a formal consultation. This ensures we have all the necessary information and can provide accurate, comprehensive guidance for your specific situation.',
  },
  {
    question: 'Do you offer payment plans?',
    answer: 'Yes, we understand that legal fees can be substantial. We offer flexible payment arrangements for qualifying clients. Discuss your situation with us during the consultation, and we\'ll work out a payment plan that suits your budget.',
  },
]

export default function Home() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Format the message for WhatsApp
      const whatsappMessage = `*New Legal Inquiry*%0A%0A*Name:* ${formData.firstName} ${formData.lastName}%0A*Email:* ${formData.email}%0A*Phone:* ${formData.phone}%0A%0A*Message:*%0A${formData.message}`

      // WhatsApp URL with pre-filled message
      const whatsappUrl = `https://api.whatsapp.com/send?phone=254727554556&text=${whatsappMessage}`

      // Open WhatsApp in new tab
      window.open(whatsappUrl, '_blank')
      setSubmitStatus('success')

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: ''
        })
        setSubmitStatus('idle')
      }, 3000)
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen">
      <Header />
      <WhatsAppWidget />

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/nairobi-cityscape-modern-buildings.jpg')] bg-cover bg-center opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
        </div>
        <div className="mx-auto max-w-7xl">
          <div className="text-center space-y-8">
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-balance">
              Isaac Law Advocates <span className="text-primary">LLP</span>
            </h1>
            <p className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground/90 text-balance">
              Where Clarity Meets Justice
            </p>
            <p className="mx-auto max-w-2xl text-lg sm:text-xl text-muted-foreground text-pretty">
              Professional legal services delivered with integrity, expertise, and a commitment to your success.
              Your trusted partner for all legal matters in Kenya.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" asChild className="text-lg">
                <a href="#contact">Book Consultation</a>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg gap-2">
                <a href="https://api.whatsapp.com/send?phone=254727554556" target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="h-5 w-5" />
                  Chat on WhatsApp
                </a>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto">
              <div className="text-center p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50">
                <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">10+</div>
                <div className="text-sm sm:text-base text-muted-foreground font-medium">Years of Excellence</div>
              </div>
              <div className="text-center p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50">
                <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm sm:text-base text-muted-foreground font-medium">Cases Won</div>
              </div>
              <div className="text-center p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50">
                <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">98%</div>
                <div className="text-sm sm:text-base text-muted-foreground font-medium">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-6">About Isaac Law Advocates LLP</h2>
              <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                <p>
                  Founded on the principle that exceptional legal service shouldn't be complicated,
                  <span className="font-semibold text-foreground"> Isaac Law Advocates LLP </span>
                  has grown into one of Nairobi's most trusted law firms. We're not your typical stuffy
                  law office—we're a team of passionate advocates who genuinely care about getting you results.
                </p>

                <div className="border-l-4 border-primary pl-6 py-2 my-8 bg-muted/50 rounded-r-lg">
                  <p className="italic text-foreground/80 font-medium">
                    "No confusing terms, no hidden surprises—just honest guidance you can trust."
                  </p>
                </div>

                <p>
                  What sets us apart? <span className="text-foreground font-medium">We speak your language.</span> Whether
                  you're a first-time entrepreneur navigating company registration or a seasoned business owner
                  handling a complex merger, we break down the legal jargon and give you clear, actionable advice.
                </p>

                <div className="space-y-4 pt-4">
                  <h3 className="font-serif text-2xl font-bold text-foreground">Our Core Values</h3>
                  <ul className="grid sm:grid-cols-2 gap-4">
                    {[
                      "Clients First",
                      "Practical Solutions",
                      "Integrity and Honesty",
                      "Service to Community"
                    ].map((value) => (
                      <li key={value} className="flex items-center gap-3 bg-card p-3 rounded-lg border shadow-sm">
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                          <CheckCircle2 className="h-5 w-5 text-primary" />
                        </div>
                        <span className="font-medium text-foreground">{value}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="pt-4">
                  From startups to established corporations, from individual legal matters to multi-million shilling
                  transactions, we bring the same energy and dedication to every case. Your success is our success,
                  and we're here to make sure you win.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <img
                src="/modern-law-office-kenya-professional.jpg"
                alt="Isaac Law Advocates LLP Office"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas Section */}
      <section id="practice-areas" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-4">Practice Areas</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive legal services across multiple disciplines to meet all your needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {practiceAreas.map((area) => (
              <Card key={area.title} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-border/50">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <area.icon className="h-6 w-6 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <CardTitle className="font-serif text-xl group-hover:text-primary transition-colors">{area.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{area.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-4">Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experienced legal professionals dedicated to your success
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <Card key={member.name} className="text-center overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="aspect-square overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="font-serif text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-medium text-base">{member.role}</CardDescription>
                  <p className="text-sm text-muted-foreground mt-2 font-medium">{member.expertise}</p>
                  <p className="text-xs text-muted-foreground mt-1">{member.credentials}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed text-left">{member.bio}</p>
                  <div className="flex justify-center gap-3 pt-2">
                    {/* <Button size="sm" variant="outline" asChild className="h-8 w-8 p-0">
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <Linkedin className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" asChild className="h-8 w-8 p-0">
                      <a href={`mailto:${member.email}`} aria-label="Email">
                        <Mail className="h-4 w-4" />
                      </a>
                    </Button> */}
                  </div>
                  <Button size="sm" asChild className="w-full">
                    <a href="#contact">Book Consultation</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-4">Client Testimonials</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it - hear what our clients have to say
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="relative">
                <CardHeader>
                  <div className="absolute top-4 right-4 text-primary/20">
                    <Quote className="h-8 w-8" />
                  </div>
                  <div className="flex gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <CardDescription className="text-base text-foreground leading-relaxed">
                    "{testimonial.text}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section id="clients" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-4">Our Top Clientele</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Trusted by leading organizations across Kenya
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clients.map((client, index) => (
              <Card key={index} className="flex items-center justify-center p-8 hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-0 text-center">
                  <Building2 className="h-12 w-12 mx-auto mb-4 text-primary/40 group-hover:text-primary transition-colors" />
                  <h3 className="font-semibold text-lg text-foreground">{client}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about our legal services
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6 bg-card shadow-sm hover:shadow-md transition-shadow">
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-5">
                  <div className="flex items-start gap-3">
                    <ChevronDown className="h-5 w-5 text-primary shrink-0 transition-transform duration-200" />
                    <span className="text-base">{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5 pt-2 pl-8">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-4">Get in Touch</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to discuss your legal needs? Contact us today for a consultation
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Phone</h3>
                  <p className="text-muted-foreground">+254 727 554556</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email</h3>
                  <p className="text-muted-foreground">info@isaaclawadvocates.co.ke</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Office</h3>
                  <p className="text-muted-foreground">
                    5th Floor, West Park Suites<br />
                    Ojijo Road, Westlands<br />
                    Nairobi, Kenya
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <WhatsAppIcon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">WhatsApp</h3>
                  <Button asChild variant="link" className="px-0 h-auto text-primary">
                    <a href="https://api.whatsapp.com/send?phone=254727554556" target="_blank" rel="noopener noreferrer">
                      Chat with us on WhatsApp →
                    </a>
                  </Button>
                </div>
              </div>
            </div>
            <Card>
              <CardHeader>
                <CardTitle className="font-serif text-2xl">Send us a Message</CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you shortly</CardDescription>
              </CardHeader>
              <CardContent>
                {/* Success Message */}
                {submitStatus === 'success' && (
                  <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 mb-4">
                    <p className="text-green-800 dark:text-green-200 font-medium">✓ Message sent successfully! We'll get back to you soon.</p>
                  </div>
                )}

                {/* Error Message */}
                {submitStatus === 'error' && (
                  <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-4">
                    <p className="text-red-800 dark:text-red-200 font-medium">✗ Something went wrong. Please try again.</p>
                  </div>
                )}

                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First Name</Label>
                      <Input
                        id="first-name"
                        placeholder="John"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last Name</Label>
                      <Input
                        id="last-name"
                        placeholder="Doe"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+254 700 000 000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your legal needs..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Submit Inquiry'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <h3 className="font-serif text-2xl font-bold mb-4">
                Isaac Law Advocates <span className="text-primary">LLP</span>
              </h3>
              <p className="text-muted-foreground mb-4">
                Professional legal services delivered with integrity, expertise, and commitment to your success.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a></li>
                <li><a href="#practice-areas" className="text-muted-foreground hover:text-primary transition-colors">Practice Areas</a></li>
                <li><a href="#team" className="text-muted-foreground hover:text-primary transition-colors">Team</a></li>
                <li><a href="#clients" className="text-muted-foreground hover:text-primary transition-colors">Clients</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>+254 727 554556</li>
                <li>info@isaaclawadvocates.co.ke</li>
                <li>Nairobi, Kenya</li>
              </ul>
            </div>
          </div>
          <div className="border-t pt-8 text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Isaac Law Advocates LLP. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
