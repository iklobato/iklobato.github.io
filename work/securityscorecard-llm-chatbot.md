---
layout: default
title: SecurityScorecard LLM Chatbot in 6 Weeks
description: "An LLM chatbot built from zero and shipped to AWS production in 6 weeks: LangChain, HuggingFace and FastAPI over security data for 12M+ companies."
keywords: LLM chatbot case study, LangChain production, HuggingFace chatbot, FastAPI LLM, AI integration case study, SecurityScorecard
permalink: /work/securityscorecard-llm-chatbot/
breadcrumbs:
  - name: Work
    url: /work/
  - name: SecurityScorecard LLM Chatbot
    url: /work/securityscorecard-llm-chatbot/
---

<header class="header">
    <div class="profile-section">
        <div class="profile-info">
            <h1>SecurityScorecard LLM Chatbot</h1>
            <span class="title">From zero to production in 6 weeks</span>
        </div>
    </div>

    <nav aria-label="Breadcrumb" class="breadcrumb">
        <ol itemscope itemtype="https://schema.org/BreadcrumbList">
            <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
                <a href="/" itemprop="item"><span itemprop="name">Home</span></a>
                <meta itemprop="position" content="1" />
            </li>
            <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
                <a href="/work/" itemprop="item"><span itemprop="name">Work</span></a>
                <meta itemprop="position" content="2" />
            </li>
            <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
                <span itemprop="name">SecurityScorecard LLM Chatbot</span>
                <meta itemprop="position" content="3" />
            </li>
        </ol>
    </nav>
</header>

<main class="main-content">
    <section id="case-overview">
        <div class="service-hero">
            <div class="service-hero-content">
                <div class="case-company"><img src="/assets/images/company-logos/securityscorecard.svg" alt="" aria-hidden="true" class="case-company-logo case-company-logo--mono"><span class="case-company-name">SecurityScorecard</span></div>
                <h2>An LLM chatbot over security data for 12M+ companies, in production 6 weeks after starting from zero</h2>
                <p class="case-study-meta">SecurityScorecard | Cybersecurity SaaS, security ratings for 12M+ companies | Senior Backend Engineer | Apr 2022 to Sep 2023</p>
            </div>
        </div>
    </section>

    <section id="problem">
        <h2>The Problem</h2>
        <p>SecurityScorecard rates the security of 12M+ companies. The data behind those ratings is complex. Non-technical users struggled to work with it, which limited how much of the platform they actually used.</p>
    </section>

    <section id="constraints">
        <h2>Constraints</h2>
        <ul class="solution-details">
            <li>Built from zero, with 6 weeks to production</li>
            <li>A security-critical product, so the chatbot had to be reliable, not a demo</li>
            <li>At the same time I was the sole backend owner of three Django systems: the platform API, the support portal and the intranet</li>
        </ul>
    </section>

    <section id="what-i-did">
        <h2>What I Did</h2>
        <p>I led the full backend of the chatbot.</p>
        <ul class="solution-details">
            <li>Orchestrated the conversation and data retrieval with LangChain</li>
            <li>Used open-source HuggingFace models</li>
            <li>Built the serving layer with FastAPI</li>
            <li>Added context-aware query processing and kept session state, so users could ask follow-up questions</li>
            <li>Deployed it to AWS on Kubernetes</li>
        </ul>
    </section>

    <section id="result">
        <h2>Result</h2>
        <div class="results-metrics">
            <div class="metric">
                <div class="metric-value">6</div>
                <div class="metric-label">Weeks to Production</div>
            </div>
            <div class="metric">
                <div class="metric-value">12M+</div>
                <div class="metric-label">Companies Queryable</div>
            </div>
        </div>
        <p>Users can ask questions in plain language about security score data for 12M+ companies. Business users who could not work with the raw data now get answers directly.</p>
    </section>

    <section id="stack">
        <h2>Stack</h2>
        <div class="tech-list">
            <span class="tech-item">Python</span>
            <span class="tech-item">LangChain</span>
            <span class="tech-item">HuggingFace</span>
            <span class="tech-item">FastAPI</span>
            <span class="tech-item">Snowflake</span>
            <span class="tech-item">AWS</span>
            <span class="tech-item">Kubernetes</span>
        </div>
    </section>

    <section id="contact">
        <div class="contact-container">
            <h2>Want an LLM Feature in Your Product?</h2>
            <p>Tell me what users need to ask and where the data lives. See how I work on <a href="/services/ai-integration/">AI integration</a>.</p>
            <div class="contact-cta">
                <a href="{{ site.booking_url }}" class="primary-cta">Book a Free 30-Minute Call</a>
                <a href="/work/" class="secondary-cta">See More Work</a>
            </div>
        </div>
    </section>
</main>

{% include service-page-style.html %}

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "SecurityScorecard LLM Chatbot: from zero to production in 6 weeks",
  "author": { "@type": "Person", "name": "Henrique Lobato", "url": "{{ site.url }}" },
  "about": { "@type": "Organization", "name": "SecurityScorecard" },
  "image": "{{ site.url }}/assets/images/og-card.png",
  "mainEntityOfPage": "{{ site.url }}{{ page.url }}"
}
</script>
