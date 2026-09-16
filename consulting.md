---
layout: default
title: Backend, AI & Systems Integration Consulting | Henrique Lobato
description: Consulting for teams that need backend systems, AI features and system integrations shipped to production. Architecture reviews, fixed-scope projects and monthly retainers, delivered by a senior Python engineer with 10+ years in production systems.
keywords: backend consultant, AI integration consultant, systems integration consultant, Python consulting, architecture review, fractional backend engineer, LLM consulting, API consulting, technical consultant remote
permalink: /consulting/
breadcrumbs:
  - name: Consulting
    url: /consulting/
---

<header class="header">
    <div class="profile-section">
        <div class="profile-info">
            <h1>Consulting</h1>
            <span class="title">Backend, AI and systems integration, shipped to production</span>
        </div>
    </div>

    <nav aria-label="Breadcrumb" class="breadcrumb">
        <ol itemscope itemtype="https://schema.org/BreadcrumbList">
            <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
                <a href="/" itemprop="item"><span itemprop="name">Home</span></a>
                <meta itemprop="position" content="1" />
            </li>
            <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
                <span itemprop="name">Consulting</span>
                <meta itemprop="position" content="2" />
            </li>
        </ol>
    </nav>
</header>

<main class="main-content">
    <section id="consulting-hero">
        <div class="service-hero">
            <div class="service-hero-content">
                <h2>Senior Engineering Help for the Part of Your System Nobody Wants to Own</h2>
                <p>I work with product and engineering teams that have a backend problem, an AI feature to ship, or two systems that need to talk to each other, and no one with the time or the depth to do it safely. I have spent 10+ years owning production systems at OneTrust, SecurityScorecard, Pinterest and PayPal/Venmo. I bring that to your team for as long as you need it, then hand it over documented and monitored.</p>
                <div class="hero-cta">
                    <a href="{{ site.booking_url }}" class="primary-cta">Book a Free 30-Minute Call</a>
                    <a href="mailto:me@iklobato.com" class="secondary-cta">Email Me About Your Project</a>
                </div>
            </div>
        </div>
    </section>

    <section id="where-i-help">
        <h2>Where I Help</h2>
        <p class="services-intro">Three areas, one person who has shipped all three to production.</p>

        <div class="services-grid">
            <div class="service-card">
                <div class="service-icon"><i class="fas fa-plug"></i></div>
                <h3>Systems Integration</h3>
                <p>Connect the tools you already run: third-party APIs, CRMs and ERPs, legacy databases, SaaS-to-SaaS migrations. Idempotent, replayable, monitored, cut over in phases with zero downtime.</p>
                <div class="service-tech-tags">
                    <span>REST / gRPC</span>
                    <span>Kafka</span>
                    <span>Webhooks</span>
                    <span>Migrations</span>
                </div>
                <a href="/services/systems-integration/" class="service-link">Systems integration details <i class="fas fa-arrow-right"></i></a>
            </div>

            <div class="service-card">
                <div class="service-icon"><i class="fas fa-brain"></i></div>
                <h3>AI Integration</h3>
                <p>Put an LLM feature into your product without a research project: chat over your data, document processing, private model hosting when the data cannot leave. Shipped a LangChain + HuggingFace chatbot to AWS production in 6 weeks.</p>
                <div class="service-tech-tags">
                    <span>LangChain</span>
                    <span>HuggingFace</span>
                    <span>OpenAI</span>
                    <span>RAG</span>
                </div>
                <a href="/services/ai-integration/" class="service-link">AI integration details <i class="fas fa-arrow-right"></i></a>
            </div>

            <div class="service-card">
                <div class="service-icon"><i class="fas fa-server"></i></div>
                <h3>Backend &amp; Platform</h3>
                <p>APIs, microservices and the cloud they run on. Performance and scaling fixes, monolith decomposition, CI/CD and Kubernetes, cloud cost reduction. Django and FastAPI on AWS and GCP.</p>
                <div class="service-tech-tags">
                    <span>Django</span>
                    <span>FastAPI</span>
                    <span>Kubernetes</span>
                    <span>AWS / GCP</span>
                </div>
                <a href="/services/backend-api/" class="service-link">Backend details <i class="fas fa-arrow-right"></i></a>
            </div>
        </div>
        <p class="services-intro">Also: <a href="/services/cloud-devops/">cloud infrastructure and DevOps</a> and <a href="/services/data-pipelines/">data pipelines</a>. <a href="/services/">See all services</a>.</p>
    </section>

    <section id="engagement-models">
        <h2>How We Work Together</h2>
        <p class="services-intro">Three formats. Every engagement starts with a free call and a written proposal, so you know the scope, the timeline and the deliverables before anything is billed.</p>

        <div class="services-grid">
            <div class="service-card">
                <div class="service-icon"><i class="fas fa-search"></i></div>
                <h3>Architecture Review</h3>
                <p><strong>Best for:</strong> a system that is slow, fragile or about to grow, and a team that wants a second opinion before committing.</p>
                <p><strong>You get:</strong> a written report with the risks found, what to fix first and why, and a plan your team can execute with or without me. Delivered in one to two weeks.</p>
            </div>

            <div class="service-card">
                <div class="service-icon"><i class="fas fa-project-diagram"></i></div>
                <h3>Fixed-Scope Project</h3>
                <p><strong>Best for:</strong> a defined deliverable: an integration, an AI feature, an API, a migration.</p>
                <p><strong>You get:</strong> a scope, a timeline and a price agreed up front, weekly progress updates, production-ready code with tests, documentation and a handover session.</p>
            </div>

            <div class="service-card">
                <div class="service-icon"><i class="fas fa-calendar-check"></i></div>
                <h3>Monthly Retainer</h3>
                <p><strong>Best for:</strong> a team that needs a senior backend or AI engineer part of the time, every month, without a full-time hire.</p>
                <p><strong>You get:</strong> a fixed block of hours each month, priority response, and someone who knows your system and owns a slice of it: integrations, the AI layer, or the platform.</p>
            </div>
        </div>
    </section>

    <section id="proof">
        <h2>Selected Work</h2>

        <div class="value-props">
            <div class="value-prop">
                <i class="fas fa-robot"></i>
                <h4>LLM chatbot in production in 6 weeks</h4>
                <p>SecurityScorecard: LangChain + HuggingFace + FastAPI, deployed to AWS Kubernetes, natural-language queries over security data for 12M+ companies.</p>
            </div>
            <div class="value-prop">
                <i class="fas fa-check-double"></i>
                <h4>20+ clients migrated, zero data loss</h4>
                <p>OneTrust: compliance-record migration between two SaaS platforms, phased across four environments, zero production incidents.</p>
            </div>
            <div class="value-prop">
                <i class="fas fa-cloud-upload-alt"></i>
                <h4>Azure to AWS, 35% less overhead</h4>
                <p>ProbiusDx: legacy bioanalytical platform moved between clouds behind new REST APIs, security hardened during the move.</p>
            </div>
            <div class="value-prop">
                <i class="fas fa-rocket"></i>
                <h4>Release cycle 60% faster</h4>
                <p>OneTrust: Jira-triggered CI/CD on Kubernetes, multi-environment deploys in under 30 minutes with full auditability.</p>
            </div>
        </div>
        <p class="services-intro">Full write-ups: <a href="/backend-engineering-use-cases/">backend</a>, <a href="/data-engineering-use-cases/">data</a>, <a href="/devops-cloud-use-cases/">cloud</a>. What clients and colleagues say: <a href="/#testimonials">recommendations</a>.</p>
    </section>

    <section id="how-i-work">
        <h2>What Happens After You Book a Call</h2>

        <div class="process-steps">
            <div class="process-step">
                <div class="step-number">1</div>
                <h3>30-Minute Call</h3>
                <p>You describe the problem. I ask about the systems involved, the team and what "done" looks like. No pitch. If I am not the right fit, I say so and point you somewhere better.</p>
            </div>

            <div class="process-step">
                <div class="step-number">2</div>
                <h3>Written Proposal</h3>
                <p>Within a few days: the format that fits, the scope, the timeline, the deliverables and the price. You decide with everything on paper.</p>
            </div>

            <div class="process-step">
                <div class="step-number">3</div>
                <h3>Delivery With Weekly Updates</h3>
                <p>Code goes into your repo through pull requests your team reviews. You get a short written update every week: done, next, blocked.</p>
            </div>

            <div class="process-step">
                <div class="step-number">4</div>
                <h3>Handover</h3>
                <p>Documentation, monitoring and a walkthrough session with your team. For retainers, this is continuous instead of a single event.</p>
            </div>
        </div>
    </section>

    <section id="faq">
        <h2>Frequently Asked Questions</h2>

        <div class="faq-container">
            <div class="faq-item">
                <h3>We are not sure what we need yet. Where do we start?</h3>
                <div class="faq-answer">
                    <p>Start with the free call. If the problem is still unclear after that, an architecture review is the cheapest way to turn "something is wrong" into a written list of what to fix and in which order.</p>
                </div>
            </div>

            <div class="faq-item">
                <h3>Which time zones do you work in?</h3>
                <div class="faq-answer">
                    <p>I am based in São Paulo (UTC-3) and have worked on remote US teams daily since 2020, with full overlap for US Eastern hours.</p>
                </div>
            </div>

            <div class="faq-item">
                <h3>Do you work inside our existing codebase and process?</h3>
                <div class="faq-answer">
                    <p>Yes. Your repo, your conventions, your review process, your ticketing. I have done this as a senior engineer on remote US teams for years, so nothing about it is new.</p>
                </div>
            </div>

            <div class="faq-item">
                <h3>Can you work with our stack?</h3>
                <div class="faq-answer">
                    <p>Python is home (Django, FastAPI, Flask), on AWS and GCP with Kubernetes and Terraform, with PostgreSQL, Redis, Kafka and Snowflake around it. I have also maintained Java Spring systems and migrated platforms off Azure. If your stack is very different, say so on the call and I will tell you honestly whether I am the right person.</p>
                </div>
            </div>

            <div class="faq-item">
                <h3>How do you price?</h3>
                <div class="faq-answer">
                    <p>Every proposal carries a fixed price for a review or a project, or a fixed monthly amount for a retainer. You will not see an open-ended hourly bill. The number depends on scope, so it comes after the first call, in writing.</p>
                </div>
            </div>
        </div>
    </section>

    <section id="contact">
        <div class="contact-container">
            <h2>Tell Me What Is Not Working</h2>
            <p>Thirty minutes, no pitch. You leave with a clear next step, whether or not that step involves me.</p>

            <div class="contact-cta">
                <a href="{{ site.booking_url }}" class="primary-cta">Book a Free 30-Minute Call</a>
                <a href="mailto:me@iklobato.com" class="secondary-cta">Email Me About Your Project</a>
            </div>
        </div>
    </section>
</main>

{% include service-page-style.html %}

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Software Consulting",
  "provider": {
    "@type": "Person",
    "name": "Henrique Lobato",
    "url": "{{ site.url }}"
  },
  "description": "Backend, AI integration and systems integration consulting for engineering teams: architecture reviews, fixed-scope projects and monthly retainers.",
  "areaServed": {
    "@type": "Country",
    "name": "Worldwide"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Consulting Engagements",
    "itemListElement": [
      { "@type": "Offer", "name": "Architecture Review", "description": "Fixed-scope written review of an existing or planned system: risks, priorities and an execution plan, delivered in one to two weeks." },
      { "@type": "Offer", "name": "Fixed-Scope Project", "description": "A defined integration, AI feature, API or migration with agreed scope, timeline and price." },
      { "@type": "Offer", "name": "Monthly Retainer", "description": "A fixed block of senior backend and AI engineering hours each month with priority response." }
    ]
  }
}
</script>
