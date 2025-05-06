---
layout: default
title: Home
---

# Henrique Lobato

**Senior Python Developer | Tech Lead | Cloud Architect**  
📞 Brazil: +55 11 9 8434 8555  
📞 USA: +1 415 851 6951  
📧 Email: h.lobato001@gmail.com  
📨 Telegram: [@iklobato](https://t.me/iklobato)  
🔗 [LinkedIn](https://linkedin.com/in/iklobato-sr-python) | [GitHub](https://github.com/iklobato) | [Book a call](https://calendly.com/hlobato/30mincall)

---

## Professional Summary

Senior Software Engineer with 10+ years of experience leading and building robust **backend systems**, scalable **data pipelines**, and **cloud infrastructures**. I've architected distributed systems used by **1M+ daily users**, migrated critical infrastructures across AWS and Kubernetes, and built ML-driven pipelines processing **10M+ records/day**. Recognized for lateral problem-solving, attention to detail, and delivering resilient systems under minimal supervision.

---

## Technical Skills

### Platforms & Cloud
- **AWS**: Lambda, EC2, S3, RDS, VPC, CloudWatch, CloudFormation
- **GCP**: Cloud Run, App Engine, Compute Engine
- **Containerization**: Docker, Kubernetes, Container Orchestration
- **Other**: Ubuntu, MacOS, Jira, GitHub, Snowflake

### Programming & Frameworks
- **Core**: Python (10+ years), Django, Flask, FastAPI, JavaScript
- **API Design**: RESTful APIs, Django REST Framework, WebSockets, Microservices
- **Data Processing**: SQLAlchemy, PySpark, ETL Pipeline Design, Batch Processing

### Databases & Caching
- **SQL**: PostgreSQL (Primary Experience), MySQL, SQLAlchemy
- **NoSQL**: DynamoDB, Redis
- **Caching**: Redis, Memcache, Query Optimization
- **Performance**: Indexing Strategies, Data Partitioning

### DevOps & CI/CD
- **CI/CD**: GitHub Actions, Jenkins, Automated Deployments
- **Infrastructure as Code**: Terraform, CloudFormation
- **Monitoring**: Prometheus, Grafana, CloudWatch, Alerting Systems
- **Security**: OWASP Best Practices, Penetration Testing, OAuth, JWT

### Data Engineering & ETL
- **Big Data**: Apache Spark, Hadoop, Data Lakes, Data Warehousing
- **ETL/ELT**: Custom Python ETL tooling, Data Pipeline Design
- **Processing**: Streaming Data, Batch Processing, Real-time Analytics
- **Quality**: Schema Validation, Data Quality Checks, Reconciliation

### AI & Machine Learning
- **Frameworks**: Langchain, HuggingFace, OpenCV, TensorFlow, Keras
- **Applications**: Computer Vision, LLM Integration, Natural Language Processing

### Project Management
- **Methodologies**: Agile, Scrum
- **Tools**: Jira, GitHub Projects

---

## Professional Experience

### OneTrust — *Senior Python Developer*  
**Remote, USA** | *Sep 2023 – Present*  
Privacy and compliance software platform

**Project Context:** Led the development of a mission-critical data migration platform following OneTrust's acquisition of Convercent, a major compliance management platform. The challenge involved migrating terabytes of sensitive compliance data across different database schemas while maintaining strict data integrity and privacy requirements.

**Key Contributions:**
- **Migration Architecture:** Designed and implemented an enterprise-grade ETL pipeline for transferring complex compliance data from Convercent to OneTrust's platform, achieving 99.9% data accuracy with zero privacy violations
- **Technical Challenges:** Overcame significant data structure differences between platforms by developing a flexible mapping engine that dynamically handled schema transformations across 50+ complex data types
- **Performance Optimization:** Identified database performance bottlenecks and reduced data processing time by 45% through implementing parallel batch processing and strategic database indexing
- **Implementation:** Created robust Django APIs with PostgreSQL integrations for reliable compliance data ingestion handling 100+ custom fields and complex relational data
- **Infrastructure:** Designed Kubernetes-based client tools for streamlined ingestion that could be deployed in varying customer environments, including air-gapped networks
- **Process Improvement:** Implemented comprehensive automated validation frameworks ensuring data integrity through multi-phase verification with 15+ validation rules
- **Deployment:** Led CI/CD orchestration using Jira-triggered pipelines, enabling automated testing and deployment across three environments (DEV/QA/PROD)
- **Security:** Ensured GDPR and CCPA compliance through proper data anonymization and secure data handling processes

**Business Impact:** Successfully migrated over 20+ enterprise clients with zero data loss incidents, positioning OneTrust to fully integrate Convercent's capabilities into their ethics and compliance suite and accelerating time-to-value for acquired customer base.

**Technologies:** Python, Django, PostgreSQL, Kubernetes, AWS, Docker, Microservices

---

### SecurityScorecard — *Senior Python Developer*  
**Remote, USA** | *Apr 2022 – Sep 2023*  
Cybersecurity rating platform

**Project Context:** Joined SecurityScorecard to enhance their cybersecurity rating platform, which continuously monitors and assesses the security posture of organizations worldwide. Faced challenges in scaling their data collection infrastructure and making complex security insights more accessible to business users.

**Key Contributions:**
- **AI Integration:** Architected and built a Langchain-powered chatbot with FastAPI that translated complex security findings into business-friendly insights, enabling non-technical users to interact naturally with security scoring data
- **Infrastructure Scaling:** Designed and implemented microservices architecture handling 1M+ hourly API requests with 99.95% uptime, scaling to support a growing customer base of 50K+ global organizations
- **Data Pipeline Development:** Created resilient data ingestion pipelines for security metrics that maintained consistency across heterogeneous data sources (network scans, vulnerability data, breach information)
- **API Enhancement:** Implemented comprehensive versioning strategy and backward compatibility layer for legacy clients, ensuring smooth transitions during major platform updates
- **Technical Excellence:** Developed extensive unit test suites and Jenkins CI pipelines improving code quality metrics by 35% and reducing regression issues
- **Documentation:** Created comprehensive API documentation with OpenAPI/Swagger standards, significantly reducing onboarding time for partner integrations
- **Containerization:** Reimplemented internal systems using Docker and Kubernetes, reducing deployment time from hours to minutes and enabling consistent environments across development stages

**Business Impact:** The systems I built directly contributed to a 30% increase in API usage by enterprise clients and enabled SecurityScorecard to scale their platform to handle 3x more vendors per customer, a key competitive differentiator in large enterprise sales.

**Technologies:** Python, Django, Langchain, FastAPI, Networking, Snowflake, AWS, Jenkins, Docker

---

### IKTech — *Senior Python Developer & Cloud Architect*  
**Remote, USA** | *Jul 2020 – Present*  
Consulting firm with projects for Fortune 500 clients

**Project: PayPal / Venmo**  
**Context:** Joined a critical initiative to strengthen authentication flows for Venmo's financial transaction systems handling millions of daily transfers. Focused on improving security while maintaining seamless user experience.

**Contributions:**
- **Security Enhancement:** Created sophisticated Python validation decorators for Venmo authentication flows that prevented common attack vectors while collecting telemetry on suspicious activities
- **Testing Framework:** Developed comprehensive QA testing framework that simulated 20+ edge case scenarios to validate authentication integrity under various attack conditions
- **Infrastructure:** Deployed CI/CD pipelines using Kubernetes and SSO workflows, enabling rapid rollout of security patches with minimal disruption
- **Data Validation:** Implemented ETL-like testing and validation logic that processed 10TB+ of transaction data to identify potential security anomalies

**Project: ProbiusDx**  
**Context:** Led cloud migration for a bioinformatics startup analyzing medical diagnostic data. Faced challenges in optimizing performance for compute-intensive analysis while ensuring regulatory compliance.

**Contributions:**
- **Cloud Migration:** Successfully migrated critical bioinformatics services from Azure to AWS, reducing infrastructure costs by 40% while improving performance
- **API Development:** Created REST APIs and integrated AI models for bioanalysis insights, enabling real-time analysis of complex biological data
- **Architecture:** Designed high-availability microservices that maintained 99.9% uptime while serving 100K+ daily API requests from medical devices
- **ML Integration:** Built real-time analysis pipelines using OpenCV/Keras that processed medical imaging data with sub-second response times
- **Quality Assurance:** Maintained >95% test coverage through extensive unit and integration testing, crucial for medical data reliability

**Business Impact:** The PayPal/Venmo work resulted in a measurable reduction in fraudulent authentication attempts, while the ProbiusDx project accelerated their time-to-market for a critical medical diagnostics platform.

**Technologies:** Python, Flask, SQLAlchemy, AWS, Docker, Jenkins, Microservices, OpenCV, Keras

---

### BairesDev — *Senior Cloud Developer & AWS Solutions Architect*  
**Remote, Canada** | *Dec 2020 – Feb 2021*  
Technology services company

**Project: Swimlane (Security Orchestration Platform)**  
**Context:** Tasked with modernizing Swimlane's legacy security orchestration platform that was struggling with scalability issues and high operational costs.

**Contributions:**
- **Architecture Transformation:** Refactored monolithic Flask application into a distributed microservices architecture using AWS Lambda and S3, enabling independent scaling of components
- **Serverless Migration:** Led migration from legacy PHP system to Django-based serverless infrastructure, eliminating server management overhead
- **Performance Optimization:** Achieved 85% performance improvement and 99.9% uptime through strategic caching and optimized database access patterns
- **Database Optimization:** Developed PostgreSQL data backends with carefully optimized SQLAlchemy layers that reduced query times by 60%
- **Deployment Automation:** Built CI/CD pipelines reducing deployment time by 70% and enabling multiple daily releases versus weekly deployments

**Project: TIVIT (Cybersecurity Monitoring)**  
**Context:** Developed dashboard systems for a major cybersecurity operations center monitoring critical infrastructure.

**Contributions:**
- **Security Visualization:** Created comprehensive dashboards and KPIs for cybersecurity SOC, enabling real-time visibility into threat landscapes
- **Security Testing:** Performed vulnerability analysis and penetration testing using OWASP methodology, identifying and remediating 15+ critical vulnerabilities
- **Authentication:** Implemented zero-trust security architecture with multi-factor authentication to protect sensitive security monitoring data

**Business Impact:** The Swimlane migration reduced their infrastructure costs by 40% while improving customer response times, and the TIVIT project enhanced their ability to detect and respond to security incidents in minutes rather than hours.

**Technologies:** Python, Flask, Django, Docker, Peewee, RabbitMQ, AWS, Terraform

---

### Integritas — *Senior Python Developer*  
**Remote, USA** | *Jul 2020 – Dec 2020*  
Financial technology company

**Project Context:** Joined Integritas to improve their banking transaction processing system that was suffering from inconsistent state management and performance issues during peak load periods.

**Key Contributions:**
- **Banking Integration:** Refactored mission-critical bank SDKs handling thousands of daily financial transactions, ensuring atomic operations under heavy load
- **Transaction System:** Built custom transaction point tracking systems that maintained accurate ledger states even during partial system failures
- **Data Consistency:** Improved internal ORM logic for consistent stateful banking operations, eliminating race conditions that had previously caused accounting discrepancies
- **API Development:** Created fault-tolerant API endpoints with comprehensive retry logic and circuit breakers to handle intermittent downstream banking system failures
- **Performance:** Implemented PostgreSQL optimization strategies that maintained transaction throughput during 3x normal peak loads

**Business Impact:** Eliminated transaction reconciliation issues that had previously affected approximately 0.5% of transactions, significantly reducing manual intervention and improving customer confidence.

**Technologies:** Python, Flask, Tornado, PostgreSQL, Banking APIs

---

### Dextra Digital (Globo, Serasa Experian, Caixa)  
**Brazil** | *2019 – 2020*  
Digital transformation company working with Brazil's largest enterprises

**Project: Serasa Experian (Credit Scoring)**  
**Context:** Led development of machine learning pipelines for Brazil's largest credit bureau, processing massive datasets to generate consumer credit scores.

**Contributions:**
- **Big Data Processing:** Built PySpark/Hadoop ML pipelines processing 10M+ daily records for credit scoring algorithms with strict latency requirements
- **Data Engineering:** Designed data lake architecture supporting incremental ETL processes with resilient error handling for unreliable source systems
- **Security:** Implemented comprehensive data masking and encryption for sensitive financial information to maintain regulatory compliance

**Project: Globo.com (Media Platform)**  
**Context:** Worked on Globo's digital media platform serving millions of concurrent users during peak Brazilian television events.

**Contributions:**
- **High-Volume APIs:** Developed Flask and Django APIs processing 500K+ requests/hour with stable response times during traffic spikes
- **Content Delivery:** Created content distribution pipelines that maintained consistent performance across multiple CDN providers
- **Analytics:** Built real-time user behavior analytics system providing immediate insight into content performance

**Project: Caixa (Banking)**  
**Context:** Developed stress testing solutions for Brazil's largest government-owned bank to validate their system resilience.

**Contributions:**
- **Load Testing:** Designed WebSocket stress test suite simulating 130K concurrent connections for critical banking systems
- **Performance Analysis:** Created detailed performance reporting identifying bottlenecks in transaction processing paths
- **Remediation:** Implemented fixes for identified performance issues, reducing transaction latency by 40%

**Business Impact:** The Serasa scoring system significantly improved credit decision accuracy, Globo's platform maintained stability during World Cup traffic spikes, and Caixa validated their system's capacity to handle projected growth.

**Technologies:** Python, Django, Hadoop, PySpark, Flask, scikit-learn, Docker, PostgreSQL

---

### GPr Sistemas — *Python Engineer | Network Security*  
**Brazil** | *Jul 2019 – Nov 2019*  
Financial services infrastructure provider

**Project Context:** Joined GPr to develop a critical monitoring system for banking ATM networks that were experiencing undetected downtime and security issues across Brazil's diverse geographic regions.

**Key Contributions:**
- **Network Monitoring:** Developed sophisticated SNMP-based real-time monitoring for 10,000+ geographically distributed ATM devices, providing the first comprehensive view of network health
- **Alert System:** Created intelligent alerting system achieving <1s response time for critical security events by implementing a prioritization algorithm
- **Reliability:** Engineered high-availability monitoring infrastructure achieving 99.99% network uptime tracking – a significant improvement from previous 97% visibility
- **Visualization:** Built intuitive Django dashboard and network visualizer using Bootstrap + jQuery that enabled non-technical staff to identify and respond to outages
- **Security Enhancement:** Implemented anomaly detection identifying potential security breaches based on unusual behavior patterns

**Business Impact:** Reduced average ATM downtime by 35%, significantly improving service availability in remote locations and preventing an estimated $2M in annual lost transaction revenue.

**Technologies:** Python, Django, SNMP, Network Monitoring, PostgreSQL, Redis

---

### Sintecsys — *Python Developer | Computer Vision Engineer*  
**Brazil** | *Apr 2019 – Jul 2019*  
Environmental technology company

**Project Context:** Worked on an innovative wildfire detection system for Brazil's agricultural and forest regions using satellite imagery and ground cameras to prevent catastrophic fires.

**Key Contributions:**
- **Computer Vision Pipeline:** Built real-time wildfire detection system processing 100K+ images daily from remote camera stations and satellite feeds
- **Algorithm Improvement:** Reduced false positives by 75% through implementing advanced image filtering and multi-stage verification checks
- **Response Time:** Decreased detection time to under 30 seconds (from previous 3-5 minutes), providing crucial early warning for fire response teams
- **API Development:** Created scalable Django Rest Framework APIs enabling mobile apps to receive real-time alerts in remote regions
- **Edge Computing:** Developed lightweight ML models that could run on resource-constrained edge devices in remote monitoring stations

**Business Impact:** The system successfully detected over 500 early-stage fires in its first season of operation, preventing potential widespread damage to agricultural land and natural reserves.

**Technologies:** Python, OpenCV, TensorFlow, Django REST Framework, AWS S3

---

### Multiway (Smart City) — *Computer Vision Engineer | Fullstack Dev*  
**Brazil** | *Jan 2016 – Feb 2019*  
Smart city technology provider

**Project Context:** Led development of Automatic License Plate Recognition (ALPR) systems for urban traffic management, law enforcement, and smart city initiatives across multiple Brazilian municipalities.

**Key Contributions:**
- **ALPR System:** Architected and built computer vision system scanning 1M+ vehicles daily with 98% detection accuracy across varying lighting conditions and camera angles
- **Technology Transformation:** Successfully migrated legacy Java codebase to Python ML stack using TensorFlow and Flask APIs, achieving 70% performance improvement
- **Infrastructure:** Designed distributed processing architecture enabling real-time vehicle identification across hundreds of camera feeds
- **Edge Computing:** Optimized ML models to run efficiently on edge devices, reducing bandwidth requirements by 80%
- **Security:** Implemented comprehensive data protection measures achieving full SOC2 compliance for sensitive law enforcement data
- **Integration:** Created APIs for seamless integration with existing city traffic management systems and law enforcement databases

**Business Impact:** The system was adopted by 15+ Brazilian cities, significantly improving traffic flow management and contributing to a 25% reduction in stolen vehicle recovery time.

**Technologies:** Python, Computer Vision, TensorFlow, Flask, PostgreSQL, Redis, Linux

---

## Certifications & Education

- **B.Sc. Computer Science**, University of London — *2023*  
- **Software Analyst**, USF — *2017–2020*  
- **AWS Certified Cloud Practitioner** — *2021*
- **Professional Pentest Certifications**, Desec Security — *2017*  
- **Modern Web Exploitation** | 100+ hrs Alura
- **Advanced PostgreSQL Administration & Performance Tuning**

---

## Languages

- 🇧🇷 Portuguese: Native  
- 🇺🇸 English: Advanced  
- 🇷🇺 Russian: Basic