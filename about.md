---
layout: default
title: "About: Senior Python and AI Engineer"
description: "Senior Python and AI engineer from São Paulo with 10+ years owning production systems at Pinterest, OneTrust, SecurityScorecard and PayPal/Venmo."
permalink: /about/
redirect_from:
  - /backend/
  - /data-engineer/
  - /devops/
breadcrumbs:
  - name: About
    url: /about/
---

<header class="header">
    <div class="profile-section">
        <div class="profile-info">
            <h1>About</h1>
            <span class="title">Senior Python and AI engineer, São Paulo, working remotely</span>
        </div>
    </div>

    <nav aria-label="Breadcrumb" class="breadcrumb">
        <ol itemscope itemtype="https://schema.org/BreadcrumbList">
            <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
                <a href="/" itemprop="item"><span itemprop="name">Home</span></a>
                <meta itemprop="position" content="1" />
            </li>
            <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
                <span itemprop="name">About</span>
                <meta itemprop="position" content="2" />
            </li>
        </ol>
    </nav>
</header>

<main class="main-content">
    <section id="who">
        <h2>Who I Am</h2>
        <p>I have spent 10+ years owning production systems in Python: APIs, data pipelines, integrations and, more recently, LLM features. I shipped a LangChain and HuggingFace chatbot to AWS production in 6 weeks at SecurityScorecard, moved 20+ enterprise clients between two SaaS platforms with zero data loss at OneTrust, and led a PySpark and neural network credit decisioning engine at Serasa Experian.</p>
        <p>I have worked on remote US teams every day since 2020, across fintech, cybersecurity, biotech, big data and computer vision. I like the unglamorous part of the job: the migration nobody wants to own, the integration that has to be replayable, the service that needs tests before it can change.</p>
    </section>

    <section id="experience-summary">
        <h2>Experience</h2>
        <div class="services-grid">
            <div class="service-card">
                <h3>Pinterest</h3>
                <p><strong>Sr. Data Engineer, Infrastructure</strong><br>Jun 2026 to present, remote</p>
                <p>Pipelines that show infrastructure cost and usage across a platform with 500M+ monthly users.</p>
            </div>
            <div class="service-card">
                <h3>OneTrust</h3>
                <p><strong>Senior Backend Engineer</strong><br>Sep 2023 to Jun 2026, remote, USA</p>
                <p>Privacy and compliance SaaS. Compliance-record migration, Django APIs on Kubernetes, CI/CD.</p>
                <a href="/work/onetrust-compliance-migration/" class="service-link">Case study <i class="fas fa-arrow-right"></i></a>
            </div>
            <div class="service-card">
                <h3>SecurityScorecard</h3>
                <p><strong>Senior Backend Engineer</strong><br>Apr 2022 to Sep 2023, remote, USA</p>
                <p>Security ratings for 12M+ companies. LLM chatbot in production in 6 weeks.</p>
                <a href="/work/securityscorecard-llm-chatbot/" class="service-link">Case study <i class="fas fa-arrow-right"></i></a>
            </div>
            <div class="service-card">
                <h3>IkTech</h3>
                <p><strong>Senior Backend Engineer / Cloud Architect</strong><br>Jun 2020 to Apr 2022, remote, USA</p>
                <p>Consulting for PayPal/Venmo, Hercules, ProbiusDx, Swimlane and TIVIT.</p>
                <a href="/work/probiusdx-azure-to-aws/" class="service-link">Case study <i class="fas fa-arrow-right"></i></a>
            </div>
            <div class="service-card">
                <h3>Dextra</h3>
                <p><strong>Senior Backend Engineer, Tech Lead</strong><br>Nov 2019 to Jul 2020, Brazil</p>
                <p>Custom software for Serasa Experian, Globo.com and Caixa.</p>
                <a href="/work/serasa-credit-scoring/" class="service-link">Case study <i class="fas fa-arrow-right"></i></a>
            </div>
            <div class="service-card">
                <h3>Multiway, Sintecsys, GPR Sistemas</h3>
                <p><strong>Backend Engineer / Software Developer</strong><br>Jan 2016 to Oct 2019, Brazil</p>
                <p>Public safety, computer vision and network security.</p>
            </div>
        </div>
        <div class="cv-links">
            <a href="/#experience" class="cv-link"><i class="fas fa-list"></i> Full experience details</a>
            <button class="print-cv-btn" onclick="generatePDF()">
                <i class="fas fa-download"></i> Download CV (PDF)
            </button>
        </div>
    </section>

    <section id="background">
        <h2>Education, Certifications and Languages</h2>
        <div class="services-grid">
            <div class="service-card">
                <h3>Education</h3>
                <p>B.Sc. Computer Science, University of London, 2023</p>
                <p>B.Sc. Software Analysis, Universidade São Francisco, 2017 to 2020</p>
            </div>
            <div class="service-card">
                <h3>Certifications</h3>
                <p>AWS Certified Cloud Practitioner, 2021</p>
                <p>Certified Professional Pentester, Desec Security, 2017</p>
                <p>Certified Mobile Pentester, Desec Security, 2017</p>
            </div>
            <div class="service-card">
                <h3>Languages</h3>
                <p>Portuguese, native</p>
                <p>English, professional working proficiency</p>
                <p>Russian, basic</p>
            </div>
        </div>
    </section>

    <section id="open-source-summary">
        <h2>Open Source</h2>
        <p class="services-intro">Tools I built and published on PyPI: <a href="https://github.com/iklobato/avai">avai</a>, a local security monitor with an AI judge; <a href="https://github.com/iklobato/briar">briar</a>, an AI assistant that turns engineering tools into a knowledge base agents can act on; and <a href="https://github.com/iklobato/lightapi">lightapi</a>, which generates REST APIs from a data model.</p>
    </section>

    <section id="contact">
        <div class="contact-container">
            <h2>Working Together</h2>
            <p>I take on architecture reviews, fixed-scope projects and monthly retainers. The first step is a free 30-minute call.</p>
            <div class="contact-cta">
                <a href="{{ site.booking_url }}" class="primary-cta">Book a Free 30-Minute Call</a>
                <a href="/consulting/" class="secondary-cta">How Consulting Works</a>
            </div>
        </div>
    </section>
</main>

{% include service-page-style.html %}
