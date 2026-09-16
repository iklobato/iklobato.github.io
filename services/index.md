---
layout: default
title: "Services: Backend, AI, Cloud and Data"
description: "Systems integration, AI integration, backend APIs, cloud infrastructure and data pipelines. Fixed-scope projects, reviews and retainers from a senior engineer."
permalink: /services/
breadcrumbs:
  - name: Services
    url: /services/
---

<header class="header">
    <div class="profile-section">
        <div class="profile-info">
            <h1>Services</h1>
            <span class="title">What I build, and how we can work together</span>
        </div>
    </div>

    <nav aria-label="Breadcrumb" class="breadcrumb">
        <ol itemscope itemtype="https://schema.org/BreadcrumbList">
            <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
                <a href="/" itemprop="item"><span itemprop="name">Home</span></a>
                <meta itemprop="position" content="1" />
            </li>
            <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
                <span itemprop="name">Services</span>
                <meta itemprop="position" content="2" />
            </li>
        </ol>
    </nav>
</header>

<main class="main-content">
    <section id="all-services">
        <h2>Services</h2>
        <p class="services-intro">Each page covers the problems solved, real implementations, the technologies involved and answers to common questions.</p>

        <div class="services-grid">
            <div class="service-card">
                <div class="service-icon"><i class="fas fa-plug"></i></div>
                <h3>Systems Integration</h3>
                <p>Third-party APIs, CRM and ERP connections, legacy modernization, event-driven workflows and zero-downtime migrations.</p>
                <a href="/services/systems-integration/" class="service-link">View details <i class="fas fa-arrow-right"></i></a>
            </div>

            <div class="service-card">
                <div class="service-icon"><i class="fas fa-brain"></i></div>
                <h3>AI Integration</h3>
                <p>LLM features in your product, private LLM infrastructure, ML pipelines and AI security with LangChain, HuggingFace and OpenAI.</p>
                <a href="/services/ai-integration/" class="service-link">View details <i class="fas fa-arrow-right"></i></a>
            </div>

            <div class="service-card">
                <div class="service-icon"><i class="fas fa-server"></i></div>
                <h3>Backend API Development</h3>
                <p>REST and GraphQL APIs with Django and FastAPI, microservices architecture, performance and security for millions of requests.</p>
                <a href="/services/backend-api/" class="service-link">View details <i class="fas fa-arrow-right"></i></a>
            </div>

            <div class="service-card">
                <div class="service-icon"><i class="fas fa-cloud"></i></div>
                <h3>Cloud Infrastructure &amp; DevOps</h3>
                <p>AWS and GCP architecture, Kubernetes, Terraform and CI/CD automation, cloud cost reduction.</p>
                <a href="/services/cloud-devops/" class="service-link">View details <i class="fas fa-arrow-right"></i></a>
            </div>

            <div class="service-card">
                <div class="service-icon"><i class="fas fa-database"></i></div>
                <h3>Data Pipelines</h3>
                <p>ETL and ELT with Airflow, Spark and Kafka, warehousing on Snowflake, data quality and governance.</p>
                <a href="/services/data-pipelines/" class="service-link">View details <i class="fas fa-arrow-right"></i></a>
            </div>

            <div class="service-card">
                <div class="service-icon"><i class="fas fa-handshake"></i></div>
                <h3>Consulting Engagements</h3>
                <p>Architecture reviews, fixed-scope projects and monthly retainers. How an engagement starts, what you get and what happens after the first call.</p>
                <a href="/consulting/" class="service-link">How we work together <i class="fas fa-arrow-right"></i></a>
            </div>
        </div>
    </section>

    <section id="contact">
        <div class="contact-container">
            <h2>Not Sure Which One You Need?</h2>
            <p>Book a free call and describe the problem. I will tell you which service fits, or that none does.</p>

            <div class="contact-cta">
                <a href="{{ site.booking_url }}" class="primary-cta">Schedule a Free Consultation</a>
                <a href="mailto:me@iklobato.com" class="secondary-cta">Email Me About Your Project</a>
            </div>
        </div>
    </section>
</main>

{% include service-page-style.html %}
