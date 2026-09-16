---
layout: default
title: "Systems Integration Services"
description: "Connect third-party APIs, legacy platforms and SaaS tools with zero-downtime cut-overs. 20+ enterprise clients migrated with zero data loss."
permalink: /services/systems-integration/
breadcrumbs:
  - name: Services
    url: /services/
  - name: Systems Integration
    url: /services/systems-integration/
---

<header class="header">
    <div class="profile-section">
        <div class="profile-info">
            <h1>Systems Integration Services</h1>
            <span class="title">Make the systems you already run work as one</span>
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
                <span itemprop="name">Systems Integration</span>
                <meta itemprop="position" content="3" />
            </li>
        </ol>
    </nav>
</header>

<main class="main-content">
    <section id="service-hero">
        <div class="service-hero">
            <div class="service-hero-content">
                <h2>Connect the Systems Your Business Already Runs On</h2>
                <p>Most companies do not need a new platform. They need the platforms they already pay for to share data reliably: the CRM with the billing system, the legacy database with the new API, the SaaS tool with the warehouse. I design and build those connections in Python, with idempotent writes, replayable flows and phased cut-overs, so the integration keeps working long after launch.</p>
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
                <div class="service-icon"><i class="fas fa-plug"></i></div>
                <h3>Third-Party API Integrations</h3>
                <p>Payment processors, auth providers, CRMs, ERPs, messaging and analytics tools. I handle authentication, rate limits, retries and webhook delivery so your team does not have to.</p>
            </div>

            <div class="service-card">
                <div class="service-icon"><i class="fas fa-exchange-alt"></i></div>
                <h3>System-to-System Data Sync</h3>
                <p>Keep two or more systems of record consistent: one-way feeds, two-way sync, or a migration from one platform to another with validation at every step.</p>
            </div>

            <div class="service-card">
                <div class="service-icon"><i class="fas fa-history"></i></div>
                <h3>Legacy System Modernization</h3>
                <p>Put a clean API in front of an old database or monolith so new products can use it, then move pieces out gradually instead of a risky big-bang rewrite.</p>
            </div>

            <div class="service-card">
                <div class="service-icon"><i class="fas fa-stream"></i></div>
                <h3>Event-Driven Workflows</h3>
                <p>Replace nightly batch jobs and polling with events over Kafka, RabbitMQ or Celery, so downstream systems react in seconds and failures are retried, not lost.</p>
            </div>

            <div class="service-card">
                <div class="service-icon"><i class="fas fa-cloud-upload-alt"></i></div>
                <h3>Platform and Cloud Migrations</h3>
                <p>Move a platform between clouds or between SaaS vendors with a phased plan, dual-running where needed and a rollback path at each stage.</p>
            </div>

            <div class="service-card">
                <div class="service-icon"><i class="fas fa-search"></i></div>
                <h3>Integrations That Keep Breaking</h3>
                <p>Audit an existing integration that fails silently, duplicates records or drifts out of sync, then fix the root cause and add the monitoring that was missing.</p>
            </div>
        </div>
    </section>

    <section id="value-delivered">
        <h2>Value I Deliver</h2>

        <div class="value-props">
            <div class="value-prop">
                <i class="fas fa-check-double"></i>
                <h4>Zero Data Loss Cut-Overs</h4>
                <p>Phased validation across environments before production. The OneTrust migration moved 20+ enterprise clients with zero data loss and zero production incidents.</p>
            </div>
            <div class="value-prop">
                <i class="fas fa-redo"></i>
                <h4>Idempotent and Replayable</h4>
                <p>Every write can be retried safely and every batch can be replayed. A failed run is a re-run, not a data clean-up project.</p>
            </div>
            <div class="value-prop">
                <i class="fas fa-eye"></i>
                <h4>Visible Failures</h4>
                <p>Dead-letter queues, alerts and dashboards on every flow. You find out from a metric, not from a customer.</p>
            </div>
            <div class="value-prop">
                <i class="fas fa-file-contract"></i>
                <h4>Documented Contracts</h4>
                <p>OpenAPI specs, schema definitions and mapping tables your team can read, so the integration outlives the engagement.</p>
            </div>
            <div class="value-prop">
                <i class="fas fa-user-clock"></i>
                <h4>Less Manual Work</h4>
                <p>Spreadsheet exports, copy-paste between tools and manual reconciliations go away once the systems talk directly.</p>
            </div>
            <div class="value-prop">
                <i class="fas fa-shield-alt"></i>
                <h4>Security at the Boundary</h4>
                <p>Secrets managed properly, least-privilege credentials per system, input validated at the edge, audit trail on sensitive data.</p>
            </div>
        </div>
    </section>

    <section id="case-studies">
        <h2>Real-World Implementations</h2>

        <div class="case-study">
            <div class="case-study-header">
                <h3>Cross-Platform Compliance Data Migration</h3>
                <p class="case-study-meta">OneTrust | Convercent to OneTrust, 20+ enterprise clients, zero data loss</p>
            </div>

            <div class="case-study-content">
                <div class="case-challenge">
                    <h4>Challenge</h4>
                    <p>After OneTrust acquired Convercent, compliance records for 20+ enterprise customers had to move between two SaaS platforms with different data models: 100+ custom fields, 50+ data types and strict privacy rules. Any loss or corruption would be a compliance incident for the customer.</p>
                </div>

                <div class="case-solution">
                    <h4>Solution</h4>
                    <p>I owned the migration end to end, from design to production cut-over:</p>
                    <ul class="solution-details">
                        <li>Mapping engine that transforms records between the two schemas, driven by configuration rather than one-off scripts</li>
                        <li>Django REST endpoints on Kubernetes with idempotent writes, schema validation and transactional rollback</li>
                        <li>Phased validation across DEV, QA1, QA2 and PROD, each stage signed off before the next</li>
                        <li>Parallel batch processing for throughput without sacrificing ordering guarantees</li>
                        <li>Reconciliation reports comparing source and target counts per client and per data type</li>
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
                        <div class="metric">
                            <div class="metric-value">4</div>
                            <div class="metric-label">Environments, Phased</div>
                        </div>
                    </div>
                    <p>Every client moved with zero data loss and zero production incidents. The configuration-driven mapping meant each new client was a config change, not a new project.</p>
                </div>

                <div class="case-technologies">
                    <h4>Technologies Used</h4>
                    <div class="tech-list">
                        <span class="tech-item">Python</span>
                        <span class="tech-item">Django REST Framework</span>
                        <span class="tech-item">PostgreSQL</span>
                        <span class="tech-item">Kubernetes</span>
                        <span class="tech-item">AWS</span>
                        <span class="tech-item">Datadog</span>
                    </div>
                </div>
            </div>
            <a href="/work/onetrust-compliance-migration/" class="service-link">Read the full case study <i class="fas fa-arrow-right"></i></a>
        </div>

        <div class="case-study">
            <div class="case-study-header">
                <h3>Legacy Platform Migration Between Clouds</h3>
                <p class="case-study-meta">ProbiusDx (Biotech) | Azure to AWS, REST APIs and microservices</p>
            </div>

            <div class="case-study-content">
                <div class="case-challenge">
                    <h4>Challenge</h4>
                    <p>A bioanalytical platform running on Azure had grown expensive to operate and hard to extend. The business wanted to move it to AWS, improve its security posture and speed up ML inference, without interrupting the labs that depended on it.</p>
                </div>

                <div class="case-solution">
                    <h4>Solution</h4>
                    <ul class="solution-details">
                        <li>Designed REST APIs and microservices that wrapped the legacy components so they could be moved one at a time</li>
                        <li>Rebuilt the infrastructure on AWS with Docker and infrastructure as code</li>
                        <li>Hardened authentication, secrets handling and network boundaries during the move rather than after</li>
                        <li>Ran old and new side by side until each service was verified, then cut over</li>
                    </ul>
                </div>

                <div class="case-results">
                    <h4>Results</h4>
                    <div class="results-metrics">
                        <div class="metric">
                            <div class="metric-value">35%</div>
                            <div class="metric-label">Lower Overhead</div>
                        </div>
                        <div class="metric">
                            <div class="metric-value">Faster</div>
                            <div class="metric-label">ML Inference</div>
                        </div>
                        <div class="metric">
                            <div class="metric-value">Hardened</div>
                            <div class="metric-label">Security Posture</div>
                        </div>
                    </div>
                    <p>The platform ran on AWS with 35% less operational overhead, a stronger security posture and lower inference latency, with no interruption to the labs using it.</p>
                </div>

                <div class="case-technologies">
                    <h4>Technologies Used</h4>
                    <div class="tech-list">
                        <span class="tech-item">Python</span>
                        <span class="tech-item">FastAPI</span>
                        <span class="tech-item">AWS</span>
                        <span class="tech-item">Docker</span>
                        <span class="tech-item">Terraform</span>
                        <span class="tech-item">PostgreSQL</span>
                    </div>
                </div>
            </div>
            <a href="/work/probiusdx-azure-to-aws/" class="service-link">Read the full case study <i class="fas fa-arrow-right"></i></a>
        </div>

        <div class="case-study">
            <div class="case-study-header">
                <h3>High-Throughput Media Migration Across Microservices</h3>
                <p class="case-study-meta">Globo.com | Django REST Framework + Firebase, zero downtime</p>
            </div>

            <div class="case-study-content">
                <div class="case-challenge">
                    <h4>Challenge</h4>
                    <p>Thousands of media records a day had to move between microservices and into Firebase for one of Brazil's largest media companies, while the products reading that data stayed online.</p>
                </div>

                <div class="case-solution">
                    <h4>Solution</h4>
                    <ul class="solution-details">
                        <li>Built a migration pipeline on Django REST Framework that pulled from the source services and wrote to Firebase in batches</li>
                        <li>Made every write idempotent so partial failures could be retried without duplicates</li>
                        <li>Kept the old read path live until the new one was verified record by record</li>
                    </ul>
                </div>

                <div class="case-results">
                    <h4>Results</h4>
                    <div class="results-metrics">
                        <div class="metric">
                            <div class="metric-value">1000s</div>
                            <div class="metric-label">Records per Day</div>
                        </div>
                        <div class="metric">
                            <div class="metric-value">0</div>
                            <div class="metric-label">Downtime</div>
                        </div>
                    </div>
                    <p>The migration ran daily with zero downtime for the products depending on the data.</p>
                </div>

                <div class="case-technologies">
                    <h4>Technologies Used</h4>
                    <div class="tech-list">
                        <span class="tech-item">Python</span>
                        <span class="tech-item">Django REST Framework</span>
                        <span class="tech-item">Firebase</span>
                        <span class="tech-item">Celery</span>
                        <span class="tech-item">Redis</span>
                        <span class="tech-item">AWS</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="technologies">
        <h2>Technologies &amp; Tools I Work With</h2>

        <div class="tech-container">
            <div class="tech-category">
                <h3>Integration Layer</h3>
                <div class="tech-list">
                    <span class="tech-item">Python</span>
                    <span class="tech-item">Django</span>
                    <span class="tech-item">FastAPI</span>
                    <span class="tech-item">Flask</span>
                    <span class="tech-item">Celery</span>
                </div>
            </div>

            <div class="tech-category">
                <h3>Protocols &amp; Contracts</h3>
                <div class="tech-list">
                    <span class="tech-item">REST / OpenAPI</span>
                    <span class="tech-item">GraphQL</span>
                    <span class="tech-item">gRPC</span>
                    <span class="tech-item">WebSockets</span>
                    <span class="tech-item">Webhooks</span>
                    <span class="tech-item">SNMP</span>
                </div>
            </div>

            <div class="tech-category">
                <h3>Messaging &amp; Events</h3>
                <div class="tech-list">
                    <span class="tech-item">Apache Kafka</span>
                    <span class="tech-item">RabbitMQ</span>
                    <span class="tech-item">AWS SQS / SNS</span>
                    <span class="tech-item">Redis</span>
                </div>
            </div>

            <div class="tech-category">
                <h3>Data Stores</h3>
                <div class="tech-list">
                    <span class="tech-item">PostgreSQL</span>
                    <span class="tech-item">MySQL</span>
                    <span class="tech-item">MongoDB</span>
                    <span class="tech-item">DynamoDB</span>
                    <span class="tech-item">Snowflake</span>
                    <span class="tech-item">Firebase</span>
                </div>
            </div>

            <div class="tech-category">
                <h3>Cloud &amp; Infrastructure</h3>
                <div class="tech-list">
                    <span class="tech-item">AWS</span>
                    <span class="tech-item">GCP</span>
                    <span class="tech-item">Kubernetes</span>
                    <span class="tech-item">Terraform</span>
                    <span class="tech-item">Docker</span>
                    <span class="tech-item">AWS Lambda</span>
                </div>
            </div>

            <div class="tech-category">
                <h3>Observability</h3>
                <div class="tech-list">
                    <span class="tech-item">Datadog</span>
                    <span class="tech-item">OpenTelemetry</span>
                    <span class="tech-item">Prometheus</span>
                    <span class="tech-item">Grafana</span>
                </div>
            </div>
        </div>
    </section>

    <section id="how-i-work">
        <h2>How I Work</h2>

        <div class="process-steps">
            <div class="process-step">
                <div class="step-number">1</div>
                <h3>Map the Systems</h3>
                <p>Which systems, which data, which direction, how often, and what happens today when it fails. I read the existing code and the vendor docs before proposing anything.</p>
            </div>

            <div class="process-step">
                <div class="step-number">2</div>
                <h3>Design for Failure First</h3>
                <p>Every integration fails at some point: rate limits, timeouts, schema changes on the other side. I design retries, idempotency, dead-letter handling and alerts before writing the happy path.</p>
            </div>

            <div class="process-step">
                <div class="step-number">3</div>
                <h3>Build With Replay in Mind</h3>
                <p>Flows are built so any batch or event can be re-run safely. Tests cover the contract with each external system, with recorded responses so the suite does not depend on the vendor being up.</p>
            </div>

            <div class="process-step">
                <div class="step-number">4</div>
                <h3>Cut Over in Phases</h3>
                <p>Dual-run, compare, then switch. Each stage has a go/no-go check and a rollback path. Nobody finds out about the migration from a broken report.</p>
            </div>

            <div class="process-step">
                <div class="step-number">5</div>
                <h3>Hand Over With Monitoring</h3>
                <p>Dashboards, alerts, runbooks and a mapping document your team can read. I stay available after launch for the first weeks of real traffic.</p>
            </div>
        </div>
    </section>

    <section id="engagement-models">
        <h2>How We Can Work Together</h2>

        <div class="services-grid">
            <div class="service-card">
                <div class="service-icon"><i class="fas fa-search"></i></div>
                <h3>Integration Review</h3>
                <p>A short, fixed-scope look at an existing or planned integration. You get a written report: risks, failure modes, what to fix first and a plan you can execute with or without me.</p>
            </div>

            <div class="service-card">
                <div class="service-icon"><i class="fas fa-project-diagram"></i></div>
                <h3>Fixed-Scope Project</h3>
                <p>A defined integration or migration with a written scope, timeline and deliverables. Best when the systems and the goal are already clear.</p>
            </div>

            <div class="service-card">
                <div class="service-icon"><i class="fas fa-calendar-check"></i></div>
                <h3>Monthly Retainer</h3>
                <p>Ongoing ownership of your integrations: new connections, vendor API changes, monitoring and fixes, with predictable monthly cost and priority response.</p>
            </div>
        </div>
        <p class="services-intro">Not sure which fits? <a href="/consulting/">See how consulting engagements work</a> or <a href="{{ site.booking_url }}">book a call</a>.</p>
    </section>

    <section id="faq">
        <h2>Frequently Asked Questions</h2>

        <div class="faq-container">
            <div class="faq-item">
                <h3>Which systems can you integrate?</h3>
                <div class="faq-answer">
                    <p>Anything with an API, a database or a file export: SaaS tools (CRM, ERP, billing, support desks), payment providers, auth providers, internal services and legacy databases. If a vendor has no API, I work from exports, webhooks or a database replica, whichever is safest.</p>
                </div>
            </div>

            <div class="faq-item">
                <h3>Will the integration break when the vendor changes their API?</h3>
                <div class="faq-answer">
                    <p>It will change, so the integration is built to notice. Contract tests with recorded vendor responses, schema validation at the boundary and alerts on unexpected payloads mean you find out from a failing check, not from missing data weeks later.</p>
                </div>
            </div>

            <div class="faq-item">
                <h3>How do you avoid downtime during a migration?</h3>
                <div class="faq-answer">
                    <p>Phased cut-over: the new path runs alongside the old one, results are compared, and traffic moves only when the numbers match. Each phase has a rollback. This is how the OneTrust migration moved 20+ clients with zero production incidents.</p>
                </div>
            </div>

            <div class="faq-item">
                <h3>Can you work inside our existing codebase and team?</h3>
                <div class="faq-answer">
                    <p>Yes. Most integration work lives inside an existing system. I follow your repo's conventions, open pull requests your team reviews, and document decisions where your team will find them.</p>
                </div>
            </div>

            <div class="faq-item">
                <h3>How long does an integration take?</h3>
                <div class="faq-answer">
                    <p>A single third-party API integration is typically a few weeks. A multi-system migration with validation phases is typically a few months. I give a written estimate after the first call, once I have seen the systems involved.</p>
                </div>
            </div>
        </div>
    </section>

    <section id="contact">
        <div class="contact-container">
            <h2>Have Two Systems That Need to Talk?</h2>
            <p>Tell me which systems and what data, and I will tell you the safest way to connect them.</p>

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
  "serviceType": "Systems Integration",
  "provider": {
    "@type": "Person",
    "name": "Henrique Lobato",
    "url": "{{ site.url }}"
  },
  "description": "Systems integration consulting: third-party API integrations, system-to-system data sync, legacy modernization, event-driven workflows and zero-downtime platform migrations built in Python.",
  "areaServed": {
    "@type": "Country",
    "name": "Worldwide"
  }
}
</script>
