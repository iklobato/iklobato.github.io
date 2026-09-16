---
layout: default
title: Work and Case Studies
description: "Case studies from 10+ years in production: data migrations, an LLM chatbot, cloud moves and data pipelines, with the problem, the approach and the result."
keywords: software engineering case studies, backend case studies, data engineering case studies, cloud migration case studies, AI integration case study, Python consultant portfolio
permalink: /work/
redirect_from:
  - /backend-engineering-use-cases/
  - /data-engineering-use-cases/
  - /devops-cloud-use-cases/
breadcrumbs:
  - name: Work
    url: /work/
---

<header class="header">
    <div class="profile-section">
        <div class="profile-info">
            <h1>Work</h1>
            <span class="title">What I built, the constraints, and what changed</span>
        </div>
    </div>

    <nav aria-label="Breadcrumb" class="breadcrumb">
        <ol itemscope itemtype="https://schema.org/BreadcrumbList">
            <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
                <a href="/" itemprop="item"><span itemprop="name">Home</span></a>
                <meta itemprop="position" content="1" />
            </li>
            <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
                <span itemprop="name">Work</span>
                <meta itemprop="position" content="2" />
            </li>
        </ol>
    </nav>
</header>

<main class="main-content">
    <section id="featured">
        <h2>Featured Case Studies</h2>
        <p class="services-intro">Four projects written up in full: the problem, the constraints, what I did and the result.</p>

        <div class="services-grid">
            <div class="service-card" data-case>
                <div class="case-company"><img src="/assets/images/company-logos/onetrust.svg" alt="OneTrust" class="case-company-logo case-company-logo--mono"></div>
                <h4>20+ enterprise clients migrated, zero data loss</h4>
                <p>Compliance records moved from Convercent to OneTrust with config-driven mapping, idempotent APIs and phased validation.</p>
                <a href="/work/onetrust-compliance-migration/" class="service-link">Read the case study <i class="fas fa-arrow-right"></i></a>
            </div>
            <div class="service-card" data-case>
                <div class="case-company"><img src="/assets/images/company-logos/securityscorecard.svg" alt="" aria-hidden="true" class="case-company-logo case-company-logo--mono"><span class="case-company-name">SecurityScorecard</span></div>
                <h4>LLM chatbot in production in 6 weeks</h4>
                <p>LangChain, HuggingFace and FastAPI on AWS Kubernetes, answering questions over security data for 12M+ companies.</p>
                <a href="/work/securityscorecard-llm-chatbot/" class="service-link">Read the case study <i class="fas fa-arrow-right"></i></a>
            </div>
            <div class="service-card" data-case>
                <div class="case-company"><span class="case-company-name">ProbiusDx</span></div>
                <h4>Azure to AWS with 35% less operational overhead</h4>
                <p>A legacy bioanalytical platform moved between clouds behind new REST APIs, without interrupting the labs.</p>
                <a href="/work/probiusdx-azure-to-aws/" class="service-link">Read the case study <i class="fas fa-arrow-right"></i></a>
            </div>
            <div class="service-card" data-case>
                <div class="case-company"><img src="/assets/images/company-logos/serasa-experian.svg" alt="Serasa Experian" class="case-company-logo"></div>
                <h4>Credit scoring engine used by thousands of companies</h4>
                <p>Led 6 engineers to deliver a PySpark and neural network decisioning engine for Brazil's largest credit bureau.</p>
                <a href="/work/serasa-credit-scoring/" class="service-link">Read the case study <i class="fas fa-arrow-right"></i></a>
            </div>
        </div>
    </section>

    <section id="backend-integration">
        <h2>Backend and Integration</h2>

        <div class="case-study" data-case>
            <div class="case-study-header">
                <h3>Media Migration Across Microservices</h3>
                <p class="case-study-meta">Globo.com | Through Dextra</p>
            </div>
            <div class="case-study-content">
                <div class="case-challenge">
                    <h4>Challenge</h4>
                    <p>Thousands of media records a day had to move between microservices and into Firebase for one of Brazil's largest media companies, while the products reading that data stayed online.</p>
                </div>
                <div class="case-solution">
                    <h4>What I did</h4>
                    <p>Built a migration pipeline on Django REST Framework that wrote to Firebase in batches. Every write was idempotent, so partial failures could be retried. The old read path stayed live until the new one was verified.</p>
                </div>
                <div class="case-results">
                    <h4>Result</h4>
                    <p>Thousands of records moved daily with zero downtime for the products depending on the data.</p>
                </div>
                <div class="case-technologies">
                    <div class="tech-list"><span class="tech-item">Python</span><span class="tech-item">Django REST Framework</span><span class="tech-item">Firebase</span><span class="tech-item">Celery</span><span class="tech-item">Redis</span><span class="tech-item">AWS</span></div>
                </div>
            </div>
        </div>

        <div class="case-study" data-case>
            <div class="case-study-header">
                <h3>QA Automation for Payment Transactions</h3>
                <p class="case-study-meta">PayPal / Venmo | Through IkTech</p>
            </div>
            <div class="case-study-content">
                <div class="case-challenge">
                    <h4>Challenge</h4>
                    <p>New financial transaction field types had to ship on one of the world's highest-traffic payment platforms without breaking the experience of millions of daily transfers.</p>
                </div>
                <div class="case-solution">
                    <h4>What I did</h4>
                    <p>Built Kubernetes QA automation and Python test suites for the new field types, including validation decorators that reject malformed input.</p>
                </div>
                <div class="case-results">
                    <h4>Result</h4>
                    <p>The new transaction fields were covered by automated tests running in the platform's CI/CD pipelines.</p>
                </div>
                <div class="case-technologies">
                    <div class="tech-list"><span class="tech-item">Python</span><span class="tech-item">Kubernetes</span><span class="tech-item">SSO workflows</span><span class="tech-item">CI/CD pipelines</span></div>
                </div>
            </div>
        </div>

        <div class="case-study" data-case>
            <div class="case-study-header">
                <h3>WebSocket Load Testing for a Banking Platform</h3>
                <p class="case-study-meta">Caixa Bank | Through Dextra</p>
            </div>
            <div class="case-study-content">
                <div class="case-challenge">
                    <h4>Challenge</h4>
                    <p>Caixa needed proof that a new real-time banking platform could handle extreme concurrent load without degrading or dropping connections.</p>
                </div>
                <div class="case-solution">
                    <h4>What I did</h4>
                    <p>Engineered a distributed load-testing framework on AWS that simulated 30,000 concurrent operators and 100,000 virtual clients over WebSockets, with realistic behavior, variable connect and disconnect rates, and detailed metrics.</p>
                </div>
                <div class="case-results">
                    <h4>Result</h4>
                    <p>The tests found critical performance issues before production. The suite became a standard part of Caixa's release process.</p>
                </div>
                <div class="case-technologies">
                    <div class="tech-list"><span class="tech-item">Python</span><span class="tech-item">WebSockets</span><span class="tech-item">AWS</span><span class="tech-item">Distributed testing</span></div>
                </div>
            </div>
        </div>
    </section>

    <section id="data">
        <h2>Data</h2>

        <div class="case-study" data-case>
            <div class="case-study-header">
                <h3>Data Ingestion for Security Ratings</h3>
                <p class="case-study-meta">SecurityScorecard</p>
            </div>
            <div class="case-study-content">
                <div class="case-challenge">
                    <h4>Challenge</h4>
                    <p>Security data came from many sources with inconsistent formats and unreliable delivery, yet the ratings built on it had to stay accurate.</p>
                </div>
                <div class="case-solution">
                    <h4>What I did</h4>
                    <p>Built ETL pipelines that standardized the data, with automated validation, anomaly detection, reconciliation and backfills for source outages.</p>
                </div>
                <div class="case-results">
                    <h4>Result</h4>
                    <p>The platform could rate more third-party vendors per customer while keeping the data accurate.</p>
                </div>
                <div class="case-technologies">
                    <div class="tech-list"><span class="tech-item">Python</span><span class="tech-item">Snowflake</span><span class="tech-item">AWS</span><span class="tech-item">Data validation</span></div>
                </div>
            </div>
        </div>

        <div class="case-study" data-case>
            <div class="case-study-header">
                <h3>Wildfire Detection from Camera Images</h3>
                <p class="case-study-meta">Sintecsys | Apr to Jul 2019</p>
            </div>
            <div class="case-study-content">
                <div class="case-challenge">
                    <h4>Challenge</h4>
                    <p>Images from remote cameras had to be analyzed to catch early-stage wildfires, with corrupted images and changing light producing false alarms.</p>
                </div>
                <div class="case-solution">
                    <h4>What I did</h4>
                    <p>Engineered fire detection APIs with TensorFlow, Keras and OpenCV, plus a pipeline that extracted visual features and validated images before detection.</p>
                </div>
                <div class="case-results">
                    <h4>Result</h4>
                    <p>Detection latency dropped from 5 minutes to 30 seconds.</p>
                </div>
                <div class="case-technologies">
                    <div class="tech-list"><span class="tech-item">Python</span><span class="tech-item">TensorFlow</span><span class="tech-item">Keras</span><span class="tech-item">OpenCV</span></div>
                </div>
            </div>
        </div>

        <div class="case-study" data-case>
            <div class="case-study-header">
                <h3>License Plate Recognition for Smart Cities</h3>
                <p class="case-study-meta">Multiway | Jan 2017 to Feb 2019</p>
            </div>
            <div class="case-study-content">
                <div class="case-challenge">
                    <h4>Challenge</h4>
                    <p>A smart city platform had to recognize vehicles in real time across hundreds of city cameras, with high accuracy.</p>
                </div>
                <div class="case-solution">
                    <h4>What I did</h4>
                    <p>Built neural network pipelines with OpenCV, Keras and TensorFlow for license plate recognition, with Flask APIs and indexed storage for fast vehicle history queries. I also maintained the legacy Java Spring system and ran OWASP penetration tests.</p>
                </div>
                <div class="case-results">
                    <h4>Result</h4>
                    <p>Real-time license plate recognition across hundreds of city cameras.</p>
                </div>
                <div class="case-technologies">
                    <div class="tech-list"><span class="tech-item">Python</span><span class="tech-item">TensorFlow</span><span class="tech-item">OpenCV</span><span class="tech-item">Flask</span><span class="tech-item">PostgreSQL</span><span class="tech-item">Redis</span></div>
                </div>
            </div>
        </div>

        <div class="case-study" data-case>
            <div class="case-study-header">
                <h3>Real-Time Network Monitoring for a Bank</h3>
                <p class="case-study-meta">GPR Sistemas, for Itau Bank | Jul to Oct 2019</p>
            </div>
            <div class="case-study-content">
                <div class="case-challenge">
                    <h4>Challenge</h4>
                    <p>A bank network with thousands of hosts needed real-time monitoring, with strict limits on alert response time.</p>
                </div>
                <div class="case-solution">
                    <h4>What I did</h4>
                    <p>Built a multi-threaded Django and SNMP monitoring system that collected device metrics continuously, stored history as time series and drew the network topology live.</p>
                </div>
                <div class="case-results">
                    <h4>Result</h4>
                    <p>Real-time visualization of thousands of hosts on the bank network.</p>
                </div>
                <div class="case-technologies">
                    <div class="tech-list"><span class="tech-item">Python</span><span class="tech-item">Django REST Framework</span><span class="tech-item">SNMP</span><span class="tech-item">Bootstrap</span><span class="tech-item">jQuery</span></div>
                </div>
            </div>
        </div>
    </section>

    <section id="cloud-platform">
        <h2>Cloud and Platform</h2>

        <div class="case-study" data-case>
            <div class="case-study-header">
                <h3>Microservices for a Security Ratings Platform</h3>
                <p class="case-study-meta">SecurityScorecard</p>
            </div>
            <div class="case-study-content">
                <div class="case-challenge">
                    <h4>Challenge</h4>
                    <p>Growing data collection and API traffic were hitting the limits of a monolithic architecture, slowing deployments and scaling.</p>
                </div>
                <div class="case-solution">
                    <h4>What I did</h4>
                    <p>Split services along business domains, built resilient ingestion across data sources and added API versioning so clients could move over smoothly.</p>
                </div>
                <div class="case-results">
                    <h4>Result</h4>
                    <p>Sole backend owner across three Django systems, shipping features weekly.</p>
                </div>
                <div class="case-technologies">
                    <div class="tech-list"><span class="tech-item">Python</span><span class="tech-item">Docker</span><span class="tech-item">Kubernetes</span><span class="tech-item">AWS</span><span class="tech-item">Jenkins</span></div>
                </div>
            </div>
        </div>

        <div class="case-study" data-case>
            <div class="case-study-header">
                <h3>Kubernetes Deployment Tools for Client Environments</h3>
                <p class="case-study-meta">OneTrust</p>
            </div>
            <div class="case-study-content">
                <div class="case-challenge">
                    <h4>Challenge</h4>
                    <p>The migration platform had to run in very different client environments, including air-gapped networks with strict security policies.</p>
                </div>
                <div class="case-solution">
                    <h4>What I did</h4>
                    <p>Designed containerized client tools on Kubernetes with encryption in transit and at rest, infrastructure-as-code templates and built-in logging and monitoring.</p>
                </div>
                <div class="case-results">
                    <h4>Result</h4>
                    <p>Deployment time went from days to hours, including for the clients with the strictest security requirements.</p>
                </div>
                <div class="case-technologies">
                    <div class="tech-list"><span class="tech-item">Kubernetes</span><span class="tech-item">Docker</span><span class="tech-item">AWS</span><span class="tech-item">Terraform</span><span class="tech-item">GitOps</span></div>
                </div>
            </div>
        </div>

        <div class="case-study" data-case>
            <div class="case-study-header">
                <h3>Legacy PHP to AWS Serverless</h3>
                <p class="case-study-meta">BairesDev</p>
            </div>
            <div class="case-study-content">
                <div class="case-challenge">
                    <h4>Challenge</h4>
                    <p>A legacy PHP system had to move to AWS, get faster and cost less to run.</p>
                </div>
                <div class="case-solution">
                    <h4>What I did</h4>
                    <p>Rebuilt it on AWS Lambda, S3 and API Gateway, tuned the functions for cold starts, added tiered caching to cut database load and built the CI/CD pipelines.</p>
                </div>
                <div class="case-results">
                    <h4>Result</h4>
                    <p>The system ran serverless on AWS with CI/CD in place.</p>
                </div>
                <div class="case-technologies">
                    <div class="tech-list"><span class="tech-item">AWS Lambda</span><span class="tech-item">S3</span><span class="tech-item">API Gateway</span><span class="tech-item">CloudFormation</span><span class="tech-item">Jenkins</span></div>
                </div>
            </div>
        </div>

        <div class="case-study" data-case>
            <div class="case-study-header">
                <h3>CI/CD for Data Processing Teams</h3>
                <p class="case-study-meta">Across several roles</p>
            </div>
            <div class="case-study-content">
                <div class="case-challenge">
                    <h4>Challenge</h4>
                    <p>Data engineers spent too much time on deployments, and differences between environments caused bugs that were hard to trace.</p>
                </div>
                <div class="case-solution">
                    <h4>What I did</h4>
                    <p>Built CI/CD pipelines with GitHub Actions and Jenkins that test, validate and deploy data code, with Terraform for consistent environments and parameterized deployment templates.</p>
                </div>
                <div class="case-results">
                    <h4>Result</h4>
                    <p>Deployments became repeatable across environments.</p>
                </div>
                <div class="case-technologies">
                    <div class="tech-list"><span class="tech-item">GitHub Actions</span><span class="tech-item">Jenkins</span><span class="tech-item">Docker</span><span class="tech-item">Terraform</span><span class="tech-item">AWS / GCP</span></div>
                </div>
            </div>
        </div>
    </section>

    <section id="contact">
        <div class="contact-container">
            <h2>Have a Problem Like One of These?</h2>
            <p>Thirty minutes, no pitch. Tell me what is not working and I will tell you how I would approach it.</p>
            <div class="contact-cta">
                <a href="{{ site.booking_url }}" class="primary-cta">Book a Free 30-Minute Call</a>
                <a href="/services/" class="secondary-cta">See Services</a>
            </div>
        </div>
    </section>
</main>

{% include service-page-style.html %}
