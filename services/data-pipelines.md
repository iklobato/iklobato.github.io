---
layout: default
title: Data Pipeline Engineering Services
description: "Batch and streaming data pipelines with Spark, Airflow and Kafka: data your teams can trust, with freshness and correctness checks, lineage and clear ownership."
keywords: Data pipeline engineering, ETL pipelines, Apache Airflow, PySpark developer, Spark, Kafka, data quality, data engineering consultant, streaming pipelines, data migration
permalink: /services/data-pipelines/
breadcrumbs:
  - name: Services
    url: /services/
  - name: Data Pipeline Engineering
    url: /services/data-pipelines/
---

<header class="header">
    <div class="profile-section">
        <div class="profile-info">
            <h1>Data Pipeline Engineering</h1>
            <span class="title">Data that arrives on time and numbers people trust</span>
        </div>
    </div>

    <nav aria-label="Breadcrumb" class="breadcrumb">
        <ol itemscope itemtype="https://schema.org/BreadcrumbList">
            <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
                <a href="/" itemprop="item"><span itemprop="name">Home</span></a>
                <meta itemprop="position" content="1" />
            </li>
            <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
                <a href="/services/" itemprop="item"><span itemprop="name">Services</span></a>
                <meta itemprop="position" content="2" />
            </li>
            <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
                <span itemprop="name">Data Pipeline Engineering</span>
                <meta itemprop="position" content="3" />
            </li>
        </ol>
    </nav>
</header>

<main class="main-content">
    <section id="service-hero">
        <div class="service-hero">
            <div class="service-hero-content">
                <h2>Pipelines That Keep Running After Launch</h2>
                <p>A pipeline is easy to write and hard to keep correct. Sources change their schema, jobs fail at 3am, a dashboard shows a number nobody can explain, and people go back to spreadsheets. I build batch and streaming pipelines with Spark, Airflow and Kafka, with freshness and correctness checks, lineage and alerts built in. Today I own the pipelines that measure infrastructure cost and usage at Pinterest, a platform with 500M+ monthly users.</p>
                <div class="hero-cta">
                    <a href="{{ site.booking_url }}" class="primary-cta">Schedule a Free Consultation</a>
                    <a href="mailto:me@iklobato.com" class="secondary-cta">Email Me About Your Project</a>
                </div>
            </div>
        </div>
    </section>

    <section id="problems-solved">
        <h2>What Problems I Solve</h2>

        <div class="services-grid">
            <div class="service-card">
                <div class="service-icon"><i class="fas fa-table"></i></div>
                <h3>Manual Data Work</h3>
                <p>Replace exports, copy-paste and hand-run scripts with scheduled pipelines that retry on failure and alert when something is wrong.</p>
            </div>

            <div class="service-card">
                <div class="service-icon"><i class="fas fa-question-circle"></i></div>
                <h3>Numbers Nobody Trusts</h3>
                <p>Schemas, freshness and correctness checks, and lineage, so when a number looks wrong you can see where it came from and why.</p>
            </div>

            <div class="service-card">
                <div class="service-icon"><i class="fas fa-layer-group"></i></div>
                <h3>Pipelines That Do Not Scale</h3>
                <p>Move jobs that time out or fall behind onto Spark, with partitioning and incremental processing that grow with the data.</p>
            </div>

            <div class="service-card">
                <div class="service-icon"><i class="fas fa-stream"></i></div>
                <h3>Batch or Streaming</h3>
                <p>Choose the right mode for each use case. Nightly batch where it is enough, Kafka and Flink streaming where minutes matter.</p>
            </div>

            <div class="service-card">
                <div class="service-icon"><i class="fas fa-exchange-alt"></i></div>
                <h3>Data Migrations</h3>
                <p>Move data between systems with different schemas, with validation and reconciliation at every phase and a safe way to re-run.</p>
            </div>

            <div class="service-card">
                <div class="service-icon"><i class="fas fa-chart-bar"></i></div>
                <h3>Self-Serve Analytics</h3>
                <p>Data models, a semantic layer and dashboards that let teams answer their own questions without waiting for a data engineer.</p>
            </div>
        </div>
    </section>

    <section id="value-delivered">
        <h2>Value I Deliver</h2>

        <div class="value-props">
            <div class="value-prop">
                <i class="fas fa-check-double"></i>
                <h4>Trusted Numbers</h4>
                <p>Checks on schema, freshness and correctness run with every load, so bad data is stopped before it reaches a report.</p>
            </div>
            <div class="value-prop">
                <i class="fas fa-redo"></i>
                <h4>Safe Re-Runs</h4>
                <p>Idempotent jobs that can be re-run for any date or batch without duplicates. A failed run is a retry, not a clean-up project.</p>
            </div>
            <div class="value-prop">
                <i class="fas fa-bell"></i>
                <h4>Failures You Hear About</h4>
                <p>Alerts on late, failed or suspicious runs, so the data team finds out before the people reading the dashboard do.</p>
            </div>
            <div class="value-prop">
                <i class="fas fa-project-diagram"></i>
                <h4>Lineage</h4>
                <p>Every dataset shows where it came from and what depends on it, so a change upstream is not a surprise downstream.</p>
            </div>
            <div class="value-prop">
                <i class="fas fa-users"></i>
                <h4>Fewer Data Requests</h4>
                <p>Self-serve tooling and dashboards that answer the common questions, so engineers spend time on the hard ones.</p>
            </div>
            <div class="value-prop">
                <i class="fas fa-book"></i>
                <h4>Documented Models</h4>
                <p>Definitions for every metric and table, written where analysts and engineers will find them.</p>
            </div>
        </div>
    </section>

    <section id="case-studies">
        <h2>Real-World Implementations</h2>

        <div class="case-study">
            <div class="case-study-header">
                <h3>Infrastructure Cost and Usage Pipelines</h3>
                <p class="case-study-meta">Pinterest | Spark and Airflow, batch and streaming, 500M+ monthly users</p>
            </div>

            <div class="case-study-content">
                <div class="case-challenge">
                    <h4>Challenge</h4>
                    <p>Engineering teams at Pinterest need to see what their infrastructure costs and how it is used, so they can reduce their own spend. That only works if the cost and efficiency numbers are trusted across the company.</p>
                </div>

                <div class="case-solution">
                    <h4>Solution</h4>
                    <ul class="solution-details">
                        <li>Own the production ETL pipelines that measure infrastructure cost and usage</li>
                        <li>Build and maintain batch and streaming pipelines on Spark and Airflow, from ingestion and data modeling to the semantic layer</li>
                        <li>Define schemas, freshness and correctness checks, and lineage for infrastructure datasets</li>
                        <li>Ship tooling and dashboards so infrastructure teams answer their own cost and capacity questions</li>
                    </ul>
                </div>

                <div class="case-results">
                    <h4>Results</h4>
                    <p>Infrastructure teams answer their own cost and capacity questions without a data engineer in the loop, from numbers backed by quality checks and lineage. <a href="/work/">See all case studies <i class="fas fa-arrow-right"></i></a></p>
                </div>

                <div class="case-technologies">
                    <h4>Technologies Used</h4>
                    <div class="tech-list">
                        <span class="tech-item">Python</span>
                        <span class="tech-item">SQL</span>
                        <span class="tech-item">Spark</span>
                        <span class="tech-item">Airflow</span>
                        <span class="tech-item">Kafka</span>
                        <span class="tech-item">Trino</span>
                        <span class="tech-item">Apache Iceberg</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="case-study">
            <div class="case-study-header">
                <h3>Credit Decisioning Engine</h3>
                <p class="case-study-meta">Serasa Experian | PySpark and a neural network, team of 6 engineers</p>
            </div>

            <div class="case-study-content">
                <div class="case-challenge">
                    <h4>Challenge</h4>
                    <p>Brazil's largest credit bureau needed "New Score", a credit decisioning engine that businesses across the country would rely on.</p>
                </div>

                <div class="case-solution">
                    <h4>Solution</h4>
                    <ul class="solution-details">
                        <li>Led a team of 6 engineers and owned the technical direction, sprint planning and code quality</li>
                        <li>Built the data processing on PySpark to feed a neural network model</li>
                    </ul>
                </div>

                <div class="case-results">
                    <h4>Results</h4>
                    <div class="results-metrics">
                        <div class="metric">
                            <div class="metric-value">6</div>
                            <div class="metric-label">Engineers Led</div>
                        </div>
                        <div class="metric">
                            <div class="metric-value">1000s</div>
                            <div class="metric-label">Companies Using It</div>
                        </div>
                    </div>
                    <p>New Score is used by thousands of Brazilian companies. <a href="/work/serasa-credit-scoring/">Read the full case study <i class="fas fa-arrow-right"></i></a></p>
                </div>

                <div class="case-technologies">
                    <h4>Technologies Used</h4>
                    <div class="tech-list">
                        <span class="tech-item">Python</span>
                        <span class="tech-item">PySpark</span>
                        <span class="tech-item">Neural Networks</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="case-study">
            <div class="case-study-header">
                <h3>Compliance Record Migration</h3>
                <p class="case-study-meta">OneTrust | Convercent to OneTrust, 20+ enterprise clients, zero data loss</p>
            </div>

            <div class="case-study-content">
                <div class="case-challenge">
                    <h4>Challenge</h4>
                    <p>Compliance records had to move from Convercent to OneTrust, across two different data models, where any lost or corrupted record is a compliance incident for the customer.</p>
                </div>

                <div class="case-solution">
                    <h4>Solution</h4>
                    <ul class="solution-details">
                        <li>Owned the migration pipeline end to end, from design to production</li>
                        <li>Idempotent writes, schema validation and transactional rollback across millions of records</li>
                        <li>Phased validation across DEV, QA1, QA2 and PROD before each step went further</li>
                    </ul>
                </div>

                <div class="case-results">
                    <h4>Results</h4>
                    <div class="results-metrics">
                        <div class="metric">
                            <div class="metric-value">20+</div>
                            <div class="metric-label">Clients Migrated</div>
                        </div>
                        <div class="metric">
                            <div class="metric-value">0</div>
                            <div class="metric-label">Data Loss Incidents</div>
                        </div>
                        <div class="metric">
                            <div class="metric-value">0</div>
                            <div class="metric-label">Production Incidents</div>
                        </div>
                    </div>
                    <p>Every client moved with zero data loss and zero production incidents. <a href="/work/onetrust-compliance-migration/">Read the full case study <i class="fas fa-arrow-right"></i></a></p>
                </div>

                <div class="case-technologies">
                    <h4>Technologies Used</h4>
                    <div class="tech-list">
                        <span class="tech-item">Python</span>
                        <span class="tech-item">Django REST Framework</span>
                        <span class="tech-item">PostgreSQL</span>
                        <span class="tech-item">Kubernetes</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="technologies">
        <h2>Technologies &amp; Tools I Work With</h2>

        <div class="tech-container">
            <div class="tech-category">
                <h3>Processing</h3>
                <div class="tech-list">
                    <span class="tech-item">Apache Spark</span>
                    <span class="tech-item">PySpark</span>
                    <span class="tech-item">Scala</span>
                    <span class="tech-item">Flink</span>
                    <span class="tech-item">Hadoop</span>
                </div>
            </div>

            <div class="tech-category">
                <h3>Orchestration</h3>
                <div class="tech-list">
                    <span class="tech-item">Apache Airflow</span>
                    <span class="tech-item">Celery</span>
                </div>
            </div>

            <div class="tech-category">
                <h3>Streaming</h3>
                <div class="tech-list">
                    <span class="tech-item">Apache Kafka</span>
                    <span class="tech-item">Flink</span>
                    <span class="tech-item">AWS SQS / SNS</span>
                </div>
            </div>

            <div class="tech-category">
                <h3>Storage &amp; Query</h3>
                <div class="tech-list">
                    <span class="tech-item">Apache Iceberg</span>
                    <span class="tech-item">Trino</span>
                    <span class="tech-item">Snowflake</span>
                    <span class="tech-item">PostgreSQL</span>
                    <span class="tech-item">S3</span>
                </div>
            </div>

            <div class="tech-category">
                <h3>Languages</h3>
                <div class="tech-list">
                    <span class="tech-item">Python</span>
                    <span class="tech-item">SQL</span>
                    <span class="tech-item">Scala</span>
                </div>
            </div>

            <div class="tech-category">
                <h3>Infrastructure</h3>
                <div class="tech-list">
                    <span class="tech-item">AWS</span>
                    <span class="tech-item">GCP</span>
                    <span class="tech-item">Kubernetes</span>
                    <span class="tech-item">Docker</span>
                </div>
            </div>
        </div>
    </section>

    <section id="how-i-work">
        <h2>How I Work</h2>

        <div class="process-steps">
            <div class="process-step">
                <div class="step-number">1</div>
                <h3>Start From the Question</h3>
                <p>Which decisions the data supports, who reads it and how fresh it has to be. That decides batch or streaming, and how much checking is enough.</p>
            </div>

            <div class="process-step">
                <div class="step-number">2</div>
                <h3>Map Sources and Contracts</h3>
                <p>Every source, its schema, its update pattern and what happens when it is late or wrong.</p>
            </div>

            <div class="process-step">
                <div class="step-number">3</div>
                <h3>Build With Checks In</h3>
                <p>Schema, freshness and correctness checks are part of the pipeline from the first run, not a later project.</p>
            </div>

            <div class="process-step">
                <div class="step-number">4</div>
                <h3>Run in Parallel, Then Switch</h3>
                <p>When replacing an existing pipeline, old and new run side by side until the numbers match.</p>
            </div>

            <div class="process-step">
                <div class="step-number">5</div>
                <h3>Hand Over</h3>
                <p>Runbooks, metric definitions, alerts and a walkthrough, so your team can operate and extend the pipelines.</p>
            </div>
        </div>
    </section>

    <section id="engagement-models">
        <h2>How We Can Work Together</h2>

        <div class="services-grid">
            <div class="service-card">
                <div class="service-icon"><i class="fas fa-search"></i></div>
                <h3>Pipeline Review</h3>
                <p>A short, fixed-scope look at your pipelines and data quality. You get a written report: risks, what to fix first and a plan you can execute with or without me.</p>
            </div>

            <div class="service-card">
                <div class="service-icon"><i class="fas fa-project-diagram"></i></div>
                <h3>Fixed-Scope Project</h3>
                <p>A defined pipeline, migration or data model with a written scope, timeline and deliverables.</p>
            </div>

            <div class="service-card">
                <div class="service-icon"><i class="fas fa-calendar-check"></i></div>
                <h3>Monthly Retainer</h3>
                <p>Ongoing ownership of your pipelines: new sources, schema changes, quality checks and incident follow-ups, with priority response.</p>
            </div>
        </div>
        <p class="services-intro">Not sure which fits? <a href="/consulting/">See how consulting engagements work</a> or <a href="{{ site.booking_url }}">book a call</a>.</p>
    </section>

    <section id="faq">
        <h2>Frequently Asked Questions</h2>

        <div class="faq-container">
            <div class="faq-item">
                <h3>Do we need streaming, or is batch enough?</h3>
                <div class="faq-answer">
                    <p>Most reporting is fine with batch, and batch is cheaper and simpler to run. Streaming is worth it when someone acts on the data within minutes. I pick per use case, and many systems use both.</p>
                </div>
            </div>

            <div class="faq-item">
                <h3>How do you handle schema changes in the sources?</h3>
                <div class="faq-answer">
                    <p>Schemas are checked on every load. A change that is safe passes through, a change that would break something stops the load and raises an alert before bad data reaches a report.</p>
                </div>
            </div>

            <div class="faq-item">
                <h3>What happens when a job fails?</h3>
                <div class="faq-answer">
                    <p>It retries, and if it still fails, someone is alerted. Jobs are idempotent, so once the cause is fixed the run is repeated for the affected dates without creating duplicates.</p>
                </div>
            </div>

            <div class="faq-item">
                <h3>Can you work with our existing warehouse and tools?</h3>
                <div class="faq-answer">
                    <p>Yes. I work with what you already run and change tools only when there is a clear reason, which I explain in writing.</p>
                </div>
            </div>

            <div class="faq-item">
                <h3>How long does a pipeline project take?</h3>
                <div class="faq-answer">
                    <p>A single pipeline for a known source is typically a few weeks. A migration or a new data platform is planned in phases. I give a written estimate after the first call, once I have seen the sources.</p>
                </div>
            </div>
        </div>
    </section>

    <section id="contact">
        <div class="contact-container">
            <h2>Is Your Data Late, Wrong or Stuck in Spreadsheets?</h2>
            <p>Tell me where the data comes from and who needs it, and I will tell you the simplest reliable way to get it there.</p>

            <div class="contact-cta">
                <a href="{{ site.booking_url }}" class="primary-cta">Schedule a Free Consultation</a>
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
  "serviceType": "Data Pipeline Engineering",
  "provider": {
    "@type": "Person",
    "name": "Henrique Lobato",
    "url": "{{ site.url }}"
  },
  "description": "Data pipeline engineering: batch and streaming pipelines with Spark, Airflow and Kafka, data quality checks, lineage, data migrations and self-serve analytics.",
  "areaServed": {
    "@type": "Country",
    "name": "Worldwide"
  }
}
</script>
