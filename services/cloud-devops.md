---
layout: default
title: Cloud Infrastructure and DevOps Services
description: Cloud migrations, CI/CD and Kubernetes on AWS and GCP. Releases that take minutes, infrastructure as code, and cloud spend you can see and explain.
keywords: Cloud infrastructure services, DevOps consultant, AWS migration, Azure to AWS migration, Kubernetes consultant, CI/CD automation, infrastructure as code, Terraform, cloud cost visibility
permalink: /services/cloud-devops/
breadcrumbs:
  - name: Services
    url: /services/
  - name: Cloud Infrastructure & DevOps
    url: /services/cloud-devops/
---

<header class="header">
    <div class="profile-section">
        <div class="profile-info">
            <h1>Cloud Infrastructure &amp; DevOps</h1>
            <span class="title">Infrastructure that is cheap to run and boring to deploy</span>
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
                <span itemprop="name">Cloud Infrastructure &amp; DevOps</span>
                <meta itemprop="position" content="3" />
            </li>
        </ol>
    </nav>
</header>

<main class="main-content">
    <section id="service-hero">
        <div class="service-hero">
            <div class="service-hero-content">
                <h2>Move, Automate and Right-Size Your Cloud</h2>
                <p>Cloud problems rarely look urgent until they are: a bill nobody can explain, a release that needs three people and an evening, an environment that takes a day to set up. I move platforms between clouds, build CI/CD that makes releases routine and put infrastructure into code on AWS and GCP. At OneTrust the pipelines I designed cut the release cycle by 60%. At ProbiusDx an Azure to AWS move cut operational overhead by 35%.</p>
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
                <div class="service-icon"><i class="fas fa-cloud-upload-alt"></i></div>
                <h3>Cloud Migrations</h3>
                <p>Move a platform between clouds, or from servers to managed services, in phases, with the old and new running side by side until each piece is verified.</p>
            </div>

            <div class="service-card">
                <div class="service-icon"><i class="fas fa-rocket"></i></div>
                <h3>Slow, Manual Releases</h3>
                <p>CI/CD pipelines that test, build and deploy to every environment on their own, with an audit trail and a rollback path.</p>
            </div>

            <div class="service-card">
                <div class="service-icon"><i class="fas fa-coins"></i></div>
                <h3>A Bill Nobody Can Explain</h3>
                <p>Find where the money goes, tie spend to services and teams, then remove the waste: idle resources, oversized instances, work that could be serverless.</p>
            </div>

            <div class="service-card">
                <div class="service-icon"><i class="fas fa-dharmachakra"></i></div>
                <h3>Kubernetes That Fights Back</h3>
                <p>Clusters, Helm charts and deploy flows that your team understands, instead of YAML only one person dares to change.</p>
            </div>

            <div class="service-card">
                <div class="service-icon"><i class="fas fa-code-branch"></i></div>
                <h3>Hand-Built Environments</h3>
                <p>Infrastructure as code with Terraform, so a new environment is a pull request and a few minutes, not a day of clicking in a console.</p>
            </div>

            <div class="service-card">
                <div class="service-icon"><i class="fas fa-shield-alt"></i></div>
                <h3>Security Left for Later</h3>
                <p>Secrets management, least-privilege access and network boundaries, built in during a migration rather than bolted on after it.</p>
            </div>
        </div>
    </section>

    <section id="value-delivered">
        <h2>Value I Deliver</h2>

        <div class="value-props">
            <div class="value-prop">
                <i class="fas fa-shipping-fast"></i>
                <h4>Releases in Minutes</h4>
                <p>At OneTrust, multi-environment deploys ran in under 30 minutes with full auditability.</p>
            </div>
            <div class="value-prop">
                <i class="fas fa-stopwatch"></i>
                <h4>Environments on Demand</h4>
                <p>For the Hercules ML platform, automated CI/CD cut environment setup from hours to under 5 minutes.</p>
            </div>
            <div class="value-prop">
                <i class="fas fa-chart-pie"></i>
                <h4>Spend You Can See</h4>
                <p>Cost and usage data tied to services and teams. At Pinterest I own the pipelines that measure infrastructure cost and usage across the platform.</p>
            </div>
            <div class="value-prop">
                <i class="fas fa-undo"></i>
                <h4>Rollback on Every Step</h4>
                <p>Phased rollouts with validation between environments, so a bad release is reverted, not debugged live.</p>
            </div>
            <div class="value-prop">
                <i class="fas fa-file-code"></i>
                <h4>Everything in Code</h4>
                <p>Infrastructure, pipelines and configuration in version control, reviewed like any other change.</p>
            </div>
            <div class="value-prop">
                <i class="fas fa-eye"></i>
                <h4>Monitoring From Day One</h4>
                <p>Dashboards and alerts set up with the infrastructure, with Datadog, Grafana or OpenTelemetry, not after the first outage.</p>
            </div>
        </div>
    </section>

    <section id="case-studies">
        <h2>Real-World Implementations</h2>

        <div class="case-study">
            <div class="case-study-header">
                <h3>Azure to AWS Platform Migration</h3>
                <p class="case-study-meta">ProbiusDx (Biotech) | REST APIs and microservices, 35% less operational overhead</p>
            </div>

            <div class="case-study-content">
                <div class="case-challenge">
                    <h4>Challenge</h4>
                    <p>A legacy bioanalytical platform on Azure had to move to AWS. The move also had to improve the security posture and speed up ML inference.</p>
                </div>

                <div class="case-solution">
                    <h4>Solution</h4>
                    <ul class="solution-details">
                        <li>Designed REST APIs and microservices around the legacy components so they could move one at a time</li>
                        <li>Rebuilt the infrastructure on AWS</li>
                        <li>Hardened the security posture as part of the move</li>
                    </ul>
                </div>

                <div class="case-results">
                    <h4>Results</h4>
                    <div class="results-metrics">
                        <div class="metric">
                            <div class="metric-value">35%</div>
                            <div class="metric-label">Less Operational Overhead</div>
                        </div>
                        <div class="metric">
                            <div class="metric-value">Lower</div>
                            <div class="metric-label">ML Inference Latency</div>
                        </div>
                    </div>
                    <p>The platform ran on AWS with 35% less operational overhead, a stronger security posture and lower ML inference latency. <a href="/work/probiusdx-azure-to-aws/">Read the full case study <i class="fas fa-arrow-right"></i></a></p>
                </div>

                <div class="case-technologies">
                    <h4>Technologies Used</h4>
                    <div class="tech-list">
                        <span class="tech-item">AWS</span>
                        <span class="tech-item">Azure</span>
                        <span class="tech-item">Python</span>
                        <span class="tech-item">REST APIs</span>
                        <span class="tech-item">Microservices</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="case-study">
            <div class="case-study-header">
                <h3>Jira-Triggered CI/CD on Kubernetes</h3>
                <p class="case-study-meta">OneTrust | Python, Django and Kubernetes across four environments</p>
            </div>

            <div class="case-study-content">
                <div class="case-challenge">
                    <h4>Challenge</h4>
                    <p>Releases had to move through DEV, QA1, QA2 and PROD for a compliance product serving 14,000+ enterprise customers, with a record of what was deployed where and why.</p>
                </div>

                <div class="case-solution">
                    <h4>Solution</h4>
                    <ul class="solution-details">
                        <li>CI/CD pipelines triggered from Jira, with full auditability of every deploy</li>
                        <li>Python and Django services deployed to Kubernetes in every environment</li>
                        <li>A stack built on Helm, ArgoCD, Terraform, Datadog and OpenTelemetry</li>
                    </ul>
                </div>

                <div class="case-results">
                    <h4>Results</h4>
                    <div class="results-metrics">
                        <div class="metric">
                            <div class="metric-value">60%</div>
                            <div class="metric-label">Shorter Release Cycle</div>
                        </div>
                        <div class="metric">
                            <div class="metric-value">&lt;30 min</div>
                            <div class="metric-label">Multi-Environment Deploys</div>
                        </div>
                    </div>
                    <p>Release cycle time dropped by 60%, and a deploy across environments took under 30 minutes with full auditability. <a href="/work/onetrust-compliance-migration/">Read the OneTrust case study <i class="fas fa-arrow-right"></i></a></p>
                </div>

                <div class="case-technologies">
                    <h4>Technologies Used</h4>
                    <div class="tech-list">
                        <span class="tech-item">Kubernetes</span>
                        <span class="tech-item">Helm</span>
                        <span class="tech-item">ArgoCD</span>
                        <span class="tech-item">Terraform</span>
                        <span class="tech-item">AWS</span>
                        <span class="tech-item">Datadog</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="case-study">
            <div class="case-study-header">
                <h3>Greenfield ML Platform and Serverless Security Automation</h3>
                <p class="case-study-meta">Hercules and Swimlane / TIVIT | AWS, Docker, Lambda and S3</p>
            </div>

            <div class="case-study-content">
                <div class="case-challenge">
                    <h4>Challenge</h4>
                    <p>Two consulting engagements: a new ML platform that needed infrastructure from scratch, and a security automation platform that had to move to AWS serverless.</p>
                </div>

                <div class="case-solution">
                    <h4>Solution</h4>
                    <ul class="solution-details">
                        <li>Hercules: provisioned the full AWS and Docker infrastructure and automated CI/CD for the new platform</li>
                        <li>Swimlane / TIVIT: migrated the platform to AWS Lambda and S3</li>
                        <li>Swimlane / TIVIT: built a centralized threat-intelligence dashboard in Grafana covering 20+ attack vectors</li>
                    </ul>
                </div>

                <div class="case-results">
                    <h4>Results</h4>
                    <div class="results-metrics">
                        <div class="metric">
                            <div class="metric-value">&lt;5 min</div>
                            <div class="metric-label">Environment Setup</div>
                        </div>
                        <div class="metric">
                            <div class="metric-value">20+</div>
                            <div class="metric-label">Attack Vectors Tracked</div>
                        </div>
                    </div>
                    <p>Setting up a Hercules environment went from hours to under 5 minutes. <a href="/work/">See all case studies <i class="fas fa-arrow-right"></i></a></p>
                </div>

                <div class="case-technologies">
                    <h4>Technologies Used</h4>
                    <div class="tech-list">
                        <span class="tech-item">AWS</span>
                        <span class="tech-item">Docker</span>
                        <span class="tech-item">AWS Lambda</span>
                        <span class="tech-item">S3</span>
                        <span class="tech-item">Grafana</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="technologies">
        <h2>Technologies &amp; Tools I Work With</h2>

        <div class="tech-container">
            <div class="tech-category">
                <h3>Cloud Providers</h3>
                <div class="tech-list">
                    <span class="tech-item">AWS</span>
                    <span class="tech-item">GCP</span>
                    <span class="tech-item">Azure</span>
                    <span class="tech-item">Cloudflare</span>
                </div>
            </div>

            <div class="tech-category">
                <h3>Containers &amp; Orchestration</h3>
                <div class="tech-list">
                    <span class="tech-item">Docker</span>
                    <span class="tech-item">Kubernetes</span>
                    <span class="tech-item">Helm</span>
                    <span class="tech-item">ArgoCD</span>
                </div>
            </div>

            <div class="tech-category">
                <h3>Infrastructure as Code</h3>
                <div class="tech-list">
                    <span class="tech-item">Terraform</span>
                    <span class="tech-item">CloudFormation</span>
                </div>
            </div>

            <div class="tech-category">
                <h3>CI/CD</h3>
                <div class="tech-list">
                    <span class="tech-item">GitHub Actions</span>
                    <span class="tech-item">Jenkins</span>
                    <span class="tech-item">ArgoCD</span>
                </div>
            </div>

            <div class="tech-category">
                <h3>Serverless</h3>
                <div class="tech-list">
                    <span class="tech-item">AWS Lambda</span>
                    <span class="tech-item">S3</span>
                    <span class="tech-item">SQS / SNS</span>
                </div>
            </div>

            <div class="tech-category">
                <h3>Observability</h3>
                <div class="tech-list">
                    <span class="tech-item">Datadog</span>
                    <span class="tech-item">OpenTelemetry</span>
                    <span class="tech-item">Grafana</span>
                    <span class="tech-item">Prometheus</span>
                </div>
            </div>
        </div>
    </section>

    <section id="how-i-work">
        <h2>How I Work</h2>

        <div class="process-steps">
            <div class="process-step">
                <div class="step-number">1</div>
                <h3>Look at What Is There</h3>
                <p>The cloud bill, the architecture, the deploy process and the incidents of the last months. The plan starts from real numbers.</p>
            </div>

            <div class="process-step">
                <div class="step-number">2</div>
                <h3>Plan in Phases</h3>
                <p>Each phase has a clear goal, a validation step and a way back. Nothing moves in one big weekend.</p>
            </div>

            <div class="process-step">
                <div class="step-number">3</div>
                <h3>Put It in Code</h3>
                <p>Infrastructure and pipelines are written as code and reviewed in pull requests, so every change is visible and repeatable.</p>
            </div>

            <div class="process-step">
                <div class="step-number">4</div>
                <h3>Move and Verify</h3>
                <p>Old and new run side by side until the new path is verified, then traffic moves over.</p>
            </div>

            <div class="process-step">
                <div class="step-number">5</div>
                <h3>Hand Over</h3>
                <p>Runbooks, dashboards and a walkthrough, so your team can operate the platform without me.</p>
            </div>
        </div>
    </section>

    <section id="engagement-models">
        <h2>How We Can Work Together</h2>

        <div class="services-grid">
            <div class="service-card">
                <div class="service-icon"><i class="fas fa-search"></i></div>
                <h3>Infrastructure Review</h3>
                <p>A short, fixed-scope look at your cloud setup, costs and release process. You get a written report: risks, waste, what to fix first and a plan you can execute with or without me.</p>
            </div>

            <div class="service-card">
                <div class="service-icon"><i class="fas fa-project-diagram"></i></div>
                <h3>Fixed-Scope Project</h3>
                <p>A defined migration, pipeline or Kubernetes setup with a written scope, timeline and deliverables.</p>
            </div>

            <div class="service-card">
                <div class="service-icon"><i class="fas fa-calendar-check"></i></div>
                <h3>Monthly Retainer</h3>
                <p>Ongoing ownership of your platform: upgrades, pipelines, cost reviews and incident follow-ups, with priority response.</p>
            </div>
        </div>
        <p class="services-intro">Not sure which fits? <a href="/consulting/">See how consulting engagements work</a> or <a href="{{ site.booking_url }}">book a call</a>.</p>
    </section>

    <section id="faq">
        <h2>Frequently Asked Questions</h2>

        <div class="faq-container">
            <div class="faq-item">
                <h3>How much can we save on cloud costs?</h3>
                <div class="faq-answer">
                    <p>It depends on how the platform was built and how it is used, so I do not quote a number before looking. The review shows where the money goes and which changes are worth making. At ProbiusDx, moving to AWS cut operational overhead by 35%.</p>
                </div>
            </div>

            <div class="faq-item">
                <h3>Will a migration cause downtime?</h3>
                <div class="faq-answer">
                    <p>The goal is none. Services move in phases, old and new run side by side, and each step has a rollback. Where a short maintenance window is safer than a complex cut-over, I say so up front.</p>
                </div>
            </div>

            <div class="faq-item">
                <h3>AWS, GCP or Azure?</h3>
                <div class="faq-answer">
                    <p>I work mostly on AWS and GCP, and I have moved platforms off Azure. If you are already on one, the answer is usually to stay and use it well.</p>
                </div>
            </div>

            <div class="faq-item">
                <h3>Can you work with our existing team and tools?</h3>
                <div class="faq-answer">
                    <p>Yes. I work in your repositories, your CI system and your cloud accounts, through pull requests your team reviews.</p>
                </div>
            </div>

            <div class="faq-item">
                <h3>How long does a migration take?</h3>
                <div class="faq-answer">
                    <p>A single service or pipeline is typically a few weeks. A full platform move is planned in phases over a few months. I give a written estimate after the first call, once I have seen the setup.</p>
                </div>
            </div>
        </div>
    </section>

    <section id="contact">
        <div class="contact-container">
            <h2>Is Your Cloud Costing More Than It Should?</h2>
            <p>Tell me what you run and where it hurts, and I will tell you what I would change first.</p>

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
  "serviceType": "Cloud Infrastructure and DevOps",
  "provider": {
    "@type": "Person",
    "name": "Henrique Lobato",
    "url": "{{ site.url }}"
  },
  "description": "Cloud infrastructure and DevOps consulting on AWS and GCP: cloud migrations, CI/CD automation, Kubernetes, infrastructure as code and cloud cost visibility.",
  "areaServed": {
    "@type": "Country",
    "name": "Worldwide"
  }
}
</script>
