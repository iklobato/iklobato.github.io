---
layout: default
title: AI Integration Services for Your Product
description: I add LLM features to your product with LangChain, HuggingFace and FastAPI, from prototype to production, including private models when data must stay in.
keywords: AI integration services, LLM integration, LangChain developer, HuggingFace integration, RAG development, private LLM infrastructure, Python AI engineer, AI chatbot development
permalink: /services/ai-integration/
breadcrumbs:
  - name: Services
    url: /services/
  - name: AI Integration
    url: /services/ai-integration/
---

<header class="header">
    <div class="profile-section">
        <div class="profile-info">
            <h1>AI Integration Services</h1>
            <span class="title">LLM features shipped to production, not left in a notebook</span>
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
                <span itemprop="name">AI Integration</span>
                <meta itemprop="position" content="3" />
            </li>
        </ol>
    </nav>
</header>

<main class="main-content">
    <section id="service-hero">
        <div class="service-hero">
            <div class="service-hero-content">
                <h2>Put an LLM Feature Into Your Product Without a Research Project</h2>
                <p>Most teams do not need a new model. They need a model wired into the product they already have: answering questions over their own data, reading documents, drafting text, with the same reliability as the rest of the backend. I build that layer in Python, with LangChain, HuggingFace and FastAPI, and deploy it on your cloud. At SecurityScorecard I took an LLM chatbot from zero to AWS production in 6 weeks.</p>
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
                <div class="service-icon"><i class="fas fa-comments"></i></div>
                <h3>Chat Over Your Own Data</h3>
                <p>Let users ask questions in plain language and get answers from your database, documents or APIs, instead of learning a query screen or opening a support ticket.</p>
            </div>

            <div class="service-card">
                <div class="service-icon"><i class="fas fa-file-alt"></i></div>
                <h3>Document Processing</h3>
                <p>Extract fields, classify, summarize and route documents that people read by hand today, with checks that flag low-confidence results for a human.</p>
            </div>

            <div class="service-card">
                <div class="service-icon"><i class="fas fa-flask"></i></div>
                <h3>Prototype to Production</h3>
                <p>A demo works on a laptop. I add what production needs: an API, authentication, rate limits, logging, evaluation, cost tracking and a deploy pipeline.</p>
            </div>

            <div class="service-card">
                <div class="service-icon"><i class="fas fa-lock"></i></div>
                <h3>Private Models</h3>
                <p>When data cannot leave your network, I run open-source models on your own infrastructure with Ollama or HuggingFace, behind the same API your product already calls.</p>
            </div>

            <div class="service-card">
                <div class="service-icon"><i class="fas fa-cogs"></i></div>
                <h3>ML Models in Real Systems</h3>
                <p>Wrap an existing model in a service, feed it clean data and keep it running. I have shipped credit scoring, fire detection and license plate recognition models to production.</p>
            </div>

            <div class="service-card">
                <div class="service-icon"><i class="fas fa-search"></i></div>
                <h3>AI Features That Misbehave</h3>
                <p>Audit an LLM feature that gives wrong answers, costs too much or times out, then fix the retrieval, the prompts or the serving layer and add the evaluation that was missing.</p>
            </div>
        </div>
    </section>

    <section id="value-delivered">
        <h2>Value I Deliver</h2>

        <div class="value-props">
            <div class="value-prop">
                <i class="fas fa-rocket"></i>
                <h4>Weeks, Not Quarters</h4>
                <p>A narrow first feature in production fast, then iterate on real usage. The SecurityScorecard chatbot went from zero to production in 6 weeks.</p>
            </div>
            <div class="value-prop">
                <i class="fas fa-server"></i>
                <h4>Built Like a Backend</h4>
                <p>The AI layer gets the same tests, monitoring and deploy pipeline as the rest of your system, so it does not become the fragile part.</p>
            </div>
            <div class="value-prop">
                <i class="fas fa-balance-scale"></i>
                <h4>Evaluated, Not Guessed</h4>
                <p>A set of real questions with expected answers runs on every change, so you know whether a new prompt or model is better before users do.</p>
            </div>
            <div class="value-prop">
                <i class="fas fa-coins"></i>
                <h4>Cost You Can See</h4>
                <p>Token usage and model cost are logged per feature, so the bill is a number on a dashboard, not a surprise at the end of the month.</p>
            </div>
            <div class="value-prop">
                <i class="fas fa-user-shield"></i>
                <h4>Data Stays Where It Should</h4>
                <p>Hosted API or private model, chosen by what your data and your compliance rules allow, with access controls on what the model can read.</p>
            </div>
            <div class="value-prop">
                <i class="fas fa-exchange-alt"></i>
                <h4>No Lock-In</h4>
                <p>Model calls go through one interface, so moving from one provider or model to another is a configuration change, not a rewrite.</p>
            </div>
        </div>
    </section>

    <section id="case-studies">
        <h2>Real-World Implementations</h2>

        <div class="case-study">
            <div class="case-study-header">
                <h3>LLM Chatbot Over Security Data</h3>
                <p class="case-study-meta">SecurityScorecard | LangChain, HuggingFace and FastAPI on AWS Kubernetes, 6 weeks to production</p>
            </div>

            <div class="case-study-content">
                <div class="case-challenge">
                    <h4>Challenge</h4>
                    <p>SecurityScorecard publishes continuous security ratings for 12M+ companies. The goal was a chatbot that lets people ask questions about that security score data in plain language, built from zero and shipped to production.</p>
                </div>

                <div class="case-solution">
                    <h4>Solution</h4>
                    <p>I led the full backend of the chatbot, from the first design to production:</p>
                    <ul class="solution-details">
                        <li>LangChain orchestration that turns a question into lookups over the security score data</li>
                        <li>Open-source HuggingFace models behind the orchestration layer</li>
                        <li>A FastAPI serving layer the product could call like any other internal API</li>
                        <li>Deployment to AWS on Kubernetes, alongside the rest of the platform</li>
                    </ul>
                </div>

                <div class="case-results">
                    <h4>Results</h4>
                    <div class="results-metrics">
                        <div class="metric">
                            <div class="metric-value">6</div>
                            <div class="metric-label">Weeks to Production</div>
                        </div>
                        <div class="metric">
                            <div class="metric-value">12M+</div>
                            <div class="metric-label">Companies Covered</div>
                        </div>
                    </div>
                    <p>The chatbot went from zero to production on AWS in 6 weeks. <a href="/work/securityscorecard-llm-chatbot/">Read the full case study <i class="fas fa-arrow-right"></i></a></p>
                </div>

                <div class="case-technologies">
                    <h4>Technologies Used</h4>
                    <div class="tech-list">
                        <span class="tech-item">Python</span>
                        <span class="tech-item">LangChain</span>
                        <span class="tech-item">HuggingFace</span>
                        <span class="tech-item">FastAPI</span>
                        <span class="tech-item">Kubernetes</span>
                        <span class="tech-item">AWS</span>
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
                    <p>Brazil's largest credit bureau needed a new credit scoring engine, "New Score", that businesses across the country would use to make lending decisions.</p>
                </div>

                <div class="case-solution">
                    <h4>Solution</h4>
                    <ul class="solution-details">
                        <li>Led a team of 6 engineers and owned the technical direction, sprint planning and code quality</li>
                        <li>Built the data processing in PySpark to feed a neural network model</li>
                                            </ul>
                </div>

                <div class="case-results">
                    <h4>Results</h4>
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
                <h3>Computer Vision in Public Safety</h3>
                <p class="case-study-meta">Sintecsys and Multiway | TensorFlow, Keras and OpenCV</p>
            </div>

            <div class="case-study-content">
                <div class="case-challenge">
                    <h4>Challenge</h4>
                    <p>Two systems where a model had to work on live camera feeds: spotting wildfires early, and reading vehicle license plates across a city.</p>
                </div>

                <div class="case-solution">
                    <h4>Solution</h4>
                    <ul class="solution-details">
                        <li>Sintecsys: fire detection APIs built on TensorFlow, Keras and OpenCV</li>
                        <li>Multiway: neural network pipelines for real-time license plate recognition across hundreds of city cameras</li>
                    </ul>
                </div>

                <div class="case-results">
                    <h4>Results</h4>
                    <div class="results-metrics">
                        <div class="metric">
                            <div class="metric-value">5 min to 30 s</div>
                            <div class="metric-label">Wildfire Detection Time</div>
                        </div>
                        <div class="metric">
                            <div class="metric-value">100s</div>
                            <div class="metric-label">Cameras Covered</div>
                        </div>
                    </div>
                    <p>Wildfire detection latency dropped from 5 minutes to 30 seconds. <a href="/work/">See all case studies <i class="fas fa-arrow-right"></i></a></p>
                </div>

                <div class="case-technologies">
                    <h4>Technologies Used</h4>
                    <div class="tech-list">
                        <span class="tech-item">Python</span>
                        <span class="tech-item">TensorFlow</span>
                        <span class="tech-item">Keras</span>
                        <span class="tech-item">OpenCV</span>
                    </div>
                </div>
            </div>
        </div>
        <p class="services-intro">I also wrote a hands-on guide to <a href="https://medium.com/@iklobato1/how-to-run-ollama-securely-on-a-remote-gpu-with-vast-ai-a-private-token-free-ai-setup-e68287e23951" target="_blank" rel="noopener">running Ollama securely on a remote GPU</a>.</p>
    </section>

    <section id="technologies">
        <h2>Technologies &amp; Tools I Work With</h2>

        <div class="tech-container">
            <div class="tech-category">
                <h3>LLM Frameworks</h3>
                <div class="tech-list">
                    <span class="tech-item">LangChain</span>
                    <span class="tech-item">LlamaIndex</span>
                    <span class="tech-item">HuggingFace</span>
                    <span class="tech-item">OpenAI API</span>
                    <span class="tech-item">Ollama</span>
                </div>
            </div>

            <div class="tech-category">
                <h3>Machine Learning</h3>
                <div class="tech-list">
                    <span class="tech-item">TensorFlow</span>
                    <span class="tech-item">Keras</span>
                    <span class="tech-item">PyTorch</span>
                    <span class="tech-item">scikit-learn</span>
                    <span class="tech-item">OpenCV</span>
                </div>
            </div>

            <div class="tech-category">
                <h3>Serving &amp; APIs</h3>
                <div class="tech-list">
                    <span class="tech-item">Python</span>
                    <span class="tech-item">FastAPI</span>
                    <span class="tech-item">Django</span>
                    <span class="tech-item">Celery</span>
                    <span class="tech-item">Redis</span>
                </div>
            </div>

            <div class="tech-category">
                <h3>Data</h3>
                <div class="tech-list">
                    <span class="tech-item">PySpark</span>
                    <span class="tech-item">PostgreSQL</span>
                    <span class="tech-item">Airflow</span>
                </div>
            </div>

            <div class="tech-category">
                <h3>Infrastructure</h3>
                <div class="tech-list">
                    <span class="tech-item">AWS</span>
                    <span class="tech-item">GCP</span>
                    <span class="tech-item">Kubernetes</span>
                    <span class="tech-item">Docker</span>
                    <span class="tech-item">Terraform</span>
                </div>
            </div>
        </div>
    </section>

    <section id="how-i-work">
        <h2>How I Work</h2>

        <div class="process-steps">
            <div class="process-step">
                <div class="step-number">1</div>
                <h3>Pick One Use Case</h3>
                <p>Which question or task, for which users, and what a good answer looks like. A narrow feature that works beats a broad one that sometimes does.</p>
            </div>

            <div class="process-step">
                <div class="step-number">2</div>
                <h3>Build the Evaluation First</h3>
                <p>Collect real examples with expected results before choosing a model. That set decides between models and prompts, not opinions.</p>
            </div>

            <div class="process-step">
                <div class="step-number">3</div>
                <h3>Ship a Thin Version</h3>
                <p>An API, the retrieval, one model, logging and cost tracking, deployed to your cloud behind a flag. Real users, real data, small blast radius.</p>
            </div>

            <div class="process-step">
                <div class="step-number">4</div>
                <h3>Improve on Real Usage</h3>
                <p>Read the logs, grow the evaluation set with the questions that failed, and change one thing at a time.</p>
            </div>

            <div class="process-step">
                <div class="step-number">5</div>
                <h3>Hand Over</h3>
                <p>Documentation, dashboards and a walkthrough, so your team can change prompts, swap models and read the metrics without me.</p>
            </div>
        </div>
    </section>

    <section id="engagement-models">
        <h2>How We Can Work Together</h2>

        <div class="services-grid">
            <div class="service-card">
                <div class="service-icon"><i class="fas fa-search"></i></div>
                <h3>AI Feasibility Review</h3>
                <p>A short, fixed-scope look at the feature you have in mind and the data behind it. You get a written answer: whether it will work, the risks, the likely cost and a build plan.</p>
            </div>

            <div class="service-card">
                <div class="service-icon"><i class="fas fa-project-diagram"></i></div>
                <h3>Fixed-Scope Project</h3>
                <p>One AI feature taken from idea to production with a written scope, timeline and deliverables.</p>
            </div>

            <div class="service-card">
                <div class="service-icon"><i class="fas fa-calendar-check"></i></div>
                <h3>Monthly Retainer</h3>
                <p>Ongoing ownership of the AI layer: new features, model and prompt updates, evaluation and cost control, with priority response.</p>
            </div>
        </div>
        <p class="services-intro">Not sure which fits? <a href="/consulting/">See how consulting engagements work</a> or <a href="{{ site.booking_url }}">book a call</a>.</p>
    </section>

    <section id="faq">
        <h2>Frequently Asked Questions</h2>

        <div class="faq-container">
            <div class="faq-item">
                <h3>Should we use a hosted API or run our own model?</h3>
                <div class="faq-answer">
                    <p>Start with whatever your data rules allow. A hosted API is the fastest way to learn whether the feature is useful. A private model makes sense when data cannot leave your network or when volume makes per-token pricing expensive. The code is built so you can switch later.</p>
                </div>
            </div>

            <div class="faq-item">
                <h3>How do you stop the model from making things up?</h3>
                <div class="faq-answer">
                    <p>You reduce it, you do not eliminate it. Answers are grounded in data retrieved from your systems, the model is told to say when it does not know, and an evaluation set catches regressions. For high-stakes outputs, a human reviews before anything is acted on.</p>
                </div>
            </div>

            <div class="faq-item">
                <h3>How long does an AI integration take?</h3>
                <div class="faq-answer">
                    <p>A focused first feature is typically a few weeks. The SecurityScorecard chatbot went from zero to production in 6 weeks. I give a written estimate after the first call, once I have seen the data and the use case.</p>
                </div>
            </div>

            <div class="faq-item">
                <h3>Can you work inside our existing codebase and team?</h3>
                <div class="faq-answer">
                    <p>Yes. The AI layer usually lives inside an existing backend. I follow your repo's conventions, open pull requests your team reviews and document decisions where your team will find them.</p>
                </div>
            </div>
        </div>
    </section>

    <section id="contact">
        <div class="contact-container">
            <h2>Have an AI Feature in Mind?</h2>
            <p>Tell me what it should do and what data it needs, and I will tell you whether it will work and how to ship it.</p>

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
  "serviceType": "AI Integration",
  "provider": {
    "@type": "Person",
    "name": "Henrique Lobato",
    "url": "{{ site.url }}"
  },
  "description": "AI integration consulting: LLM features over your own data, document processing, private model hosting and ML models deployed to production with LangChain, HuggingFace and FastAPI.",
  "areaServed": {
    "@type": "Country",
    "name": "Worldwide"
  }
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Should we use a hosted API or run our own model?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Start with whatever your data rules allow. A hosted API is the fastest way to learn whether the feature is useful. A private model makes sense when data cannot leave your network or when volume makes per-token pricing expensive. The code is built so you can switch later."
      }
    },
    {
      "@type": "Question",
      "name": "How do you stop the model from making things up?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You reduce it, you do not eliminate it. Answers are grounded in data retrieved from your systems, the model is told to say when it does not know, and an evaluation set catches regressions. For high-stakes outputs, a human reviews before anything is acted on."
      }
    },
    {
      "@type": "Question",
      "name": "How long does an AI integration take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A focused first feature is typically a few weeks. The SecurityScorecard chatbot went from zero to production in 6 weeks. I give a written estimate after the first call, once I have seen the data and the use case."
      }
    },
    {
      "@type": "Question",
      "name": "Can you work inside our existing codebase and team?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The AI layer usually lives inside an existing backend. I follow your repo's conventions, open pull requests your team reviews and document decisions where your team will find them."
      }
    }
  ]
}
</script>
