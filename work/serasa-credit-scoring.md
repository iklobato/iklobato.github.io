---
layout: default
title: Serasa Experian Credit Scoring Engine
description: "Leading 6 engineers to deliver New Score, a PySpark and neural network credit decisioning engine now used by thousands of companies in Brazil."
keywords: credit scoring case study, PySpark pipeline, neural network credit decisioning, data engineering case study, Serasa Experian New Score
permalink: /work/serasa-credit-scoring/
breadcrumbs:
  - name: Work
    url: /work/
  - name: Serasa Experian Credit Scoring Engine
    url: /work/serasa-credit-scoring/
---

<header class="header">
    <div class="profile-section">
        <div class="profile-info">
            <h1>Serasa Experian Credit Scoring Engine</h1>
            <span class="title">A decisioning engine used by thousands of companies</span>
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
                <span itemprop="name">Serasa Experian Credit Scoring Engine</span>
                <meta itemprop="position" content="3" />
            </li>
        </ol>
    </nav>
</header>

<main class="main-content">
    <section id="case-overview">
        <div class="service-hero">
            <div class="service-hero-content">
                <div class="case-company"><img src="/assets/images/company-logos/serasa-experian.svg" alt="Serasa Experian" class="case-company-logo"></div>
                <h2>New Score: a PySpark and neural network credit decisioning engine for Brazil's largest credit bureau</h2>
                <p class="case-study-meta">Serasa Experian | Credit bureau, Brazil | Senior Backend Engineer, Tech Lead at Dextra | Nov 2019 to Jul 2020</p>
            </div>
        </div>
    </section>

    <section id="problem">
        <h2>The Problem</h2>
        <p>Serasa Experian needed a new credit decisioning engine. The existing solution could not keep up with the growing data volume. Processing delays slowed down the credit decisions that depended on it.</p>
    </section>

    <section id="constraints">
        <h2>Constraints</h2>
        <ul class="solution-details">
            <li>Large data volumes with skewed distributions</li>
            <li>Credit decisions for financial institutions across Brazil depended on the output</li>
            <li>A team of 6 engineers to lead through delivery</li>
        </ul>
    </section>

    <section id="what-i-did">
        <h2>What I Did</h2>
        <ul class="solution-details">
            <li>Led 6 engineers and owned technical direction, sprint planning and code quality</li>
            <li>Designed ETL pipelines on PySpark and Hadoop that process transaction data across distributed clusters</li>
            <li>Optimized join operations and added custom partitioning to handle skewed data</li>
            <li>Delivered New Score, a neural network credit decisioning engine fed by those pipelines</li>
        </ul>
    </section>

    <section id="result">
        <h2>Result</h2>
        <div class="results-metrics">
            <div class="metric">
                <div class="metric-value">1000s</div>
                <div class="metric-label">Companies Using It</div>
            </div>
            <div class="metric">
                <div class="metric-value">6</div>
                <div class="metric-label">Engineers Led</div>
            </div>
        </div>
        <p>New Score is used by thousands of Brazilian companies.</p>
    </section>

    <section id="stack">
        <h2>Stack</h2>
        <div class="tech-list">
            <span class="tech-item">Python</span>
            <span class="tech-item">PySpark</span>
            <span class="tech-item">Apache Spark</span>
            <span class="tech-item">Hadoop</span>
            <span class="tech-item">scikit-learn</span>
            <span class="tech-item">PostgreSQL</span>
        </div>
    </section>

    <section id="contact">
        <div class="contact-container">
            <h2>Data Pipeline That Cannot Keep Up?</h2>
            <p>Tell me the volume and where it slows down. See how I work on <a href="/services/data-pipelines/">data pipelines</a>.</p>
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
  "headline": "Serasa Experian Credit Scoring Engine: New Score, used by thousands of companies",
  "author": { "@type": "Person", "name": "Henrique Lobato", "url": "{{ site.url }}" },
  "about": { "@type": "Organization", "name": "Serasa Experian" },
  "image": "{{ site.url }}/assets/images/og-card.png",
  "mainEntityOfPage": "{{ site.url }}{{ page.url }}"
}
</script>
