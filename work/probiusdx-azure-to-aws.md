---
layout: default
title: ProbiusDx Azure to AWS Migration
description: "A legacy bioanalytical platform moved from Azure to AWS behind new REST APIs, with 35% less operational overhead and no interruption to the labs using it."
keywords: Azure to AWS migration case study, cloud migration, legacy platform migration, biotech platform, REST API microservices, ProbiusDx
permalink: /work/probiusdx-azure-to-aws/
breadcrumbs:
  - name: Work
    url: /work/
  - name: ProbiusDx Azure to AWS Migration
    url: /work/probiusdx-azure-to-aws/
---

<header class="header">
    <div class="profile-section">
        <div class="profile-info">
            <h1>ProbiusDx Azure to AWS Migration</h1>
            <span class="title">35% less operational overhead, no interruption to the labs</span>
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
                <span itemprop="name">ProbiusDx Azure to AWS Migration</span>
                <meta itemprop="position" content="3" />
            </li>
        </ol>
    </nav>
</header>

<main class="main-content">
    <section id="case-overview">
        <div class="service-hero">
            <div class="service-hero-content">
                <div class="case-company"><span class="case-company-name">ProbiusDx</span></div>
                <h2>A legacy bioanalytical platform moved from Azure to AWS with 35% less operational overhead</h2>
                <p class="case-study-meta">ProbiusDx | Biotech, bioanalytical platform | Senior Backend Engineer / Cloud Architect, consulting through IkTech | 2020 to 2022</p>
            </div>
        </div>
    </section>

    <section id="problem">
        <h2>The Problem</h2>
        <p>ProbiusDx ran a bioanalytical platform on Azure. It had grown expensive to operate and hard to extend. The business wanted it on AWS, with a stronger security posture and faster ML inference.</p>
    </section>

    <section id="constraints">
        <h2>Constraints</h2>
        <ul class="solution-details">
            <li>Labs depended on the platform every day, so the move could not interrupt them</li>
            <li>Compute-intensive analysis workflows had to keep running</li>
            <li>Security had to improve during the move, not after it</li>
        </ul>
    </section>

    <section id="what-i-did">
        <h2>What I Did</h2>
        <ul class="solution-details">
            <li>Designed REST APIs and microservices that wrapped the legacy components, so they could move one at a time</li>
            <li>Rebuilt the infrastructure on AWS with Docker and infrastructure as code</li>
            <li>Chose instance types for the analysis workloads and added auto-scaling based on real usage</li>
            <li>Hardened authentication, secrets handling and network boundaries during the move</li>
            <li>Ran old and new side by side until each service was verified, then cut over</li>
        </ul>
    </section>

    <section id="result">
        <h2>Result</h2>
        <div class="results-metrics">
            <div class="metric">
                <div class="metric-value">35%</div>
                <div class="metric-label">Less Operational Overhead</div>
            </div>
            <div class="metric">
                <div class="metric-value">Lower</div>
                <div class="metric-label">ML Inference Latency</div>
            </div>
            <div class="metric">
                <div class="metric-value">0</div>
                <div class="metric-label">Lab Interruptions</div>
            </div>
        </div>
        <p>The platform runs on AWS with 35% less operational overhead, a stronger security posture and lower inference latency. The labs using it were not interrupted.</p>
    </section>

    <section id="stack">
        <h2>Stack</h2>
        <div class="tech-list">
            <span class="tech-item">Python</span>
            <span class="tech-item">FastAPI</span>
            <span class="tech-item">AWS</span>
            <span class="tech-item">Docker</span>
            <span class="tech-item">Kubernetes</span>
            <span class="tech-item">Terraform</span>
            <span class="tech-item">PostgreSQL</span>
            <span class="tech-item">Jenkins</span>
        </div>
    </section>

    <section id="contact">
        <div class="contact-container">
            <h2>Planning a Move Between Clouds?</h2>
            <p>Tell me what runs where today. See how I work on <a href="/services/systems-integration/">systems integration</a> and <a href="/services/cloud-devops/">cloud infrastructure</a>.</p>
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
  "headline": "ProbiusDx Azure to AWS Migration: 35% less operational overhead",
  "author": { "@type": "Person", "name": "Henrique Lobato", "url": "{{ site.url }}" },
  "about": { "@type": "Organization", "name": "ProbiusDx" },
  "image": "{{ site.url }}/assets/images/og-card.png",
  "mainEntityOfPage": "{{ site.url }}{{ page.url }}"
}
</script>
