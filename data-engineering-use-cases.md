---
layout: use-case
title: Data Engineering Use Cases
subtitle: Real-world data pipeline projects and achievements
back_link: /data-engineer/
back_text: Data Engineering CV
permalink: /data-engineering-use-cases/
description: Real-world data engineering projects by Henrique Lobato, showcasing ETL pipelines, data processing systems, and large-scale data solutions with measurable business impacts.
keywords: Data Engineering, ETL pipelines, PySpark, Hadoop, Data Processing, PostgreSQL, Real-time Data, Python Developer, Data Optimization
---

<div class="use-case">
    <h2 class="use-case-title"><i class="fas fa-database"></i> PySpark Data Pipeline for Serasa Experian's Credit Analysis</h2>
    
    <div class="section">
        <div class="section-title">Challenge</div>
        <p>At Dextra Digital, I faced the challenge of processing 10M+ daily records for Serasa Experian's credit analysis system. Their existing solution couldn't handle the growing data volume, causing significant processing delays and affecting business decisions.</p>
    </div>
    
    <div class="section">
        <div class="section-title">Technical Solution</div>
        <p>I designed and implemented ETL data pipelines using PySpark and Hadoop that efficiently processed transaction data across distributed clusters. I focused on optimizing join operations and implementing custom partitioning strategies to handle skewed data distributions.</p>
        
        <div class="tools">
            <span class="tool">PySpark</span>
            <span class="tool">Hadoop</span>
            <span class="tool">PostgreSQL</span>
            <span class="tool">Python</span>
        </div>
    </div>
    
    <div class="section">
        <div class="section-title">Business Impact</div>
        <div class="impact">
            <p>The new data pipeline reduced processing time by 60%, allowing Serasa to analyze credit transactions in near real-time. This improved their ability to detect fraudulent patterns and provide more accurate credit assessments to financial institutions across Brazil.</p>
        </div>
    </div>
</div>

<div class="use-case">
    <h2 class="use-case-title"><i class="fas fa-fire"></i> Wildfire Detection Data Processing at Sintecsys</h2>
    
    <div class="section">
        <div class="section-title">Challenge</div>
        <p>At Sintecsys, I needed to build a reliable system to process and analyze 100K+ images daily from remote cameras to detect early-stage wildfires in real-time—a critical environmental and safety application.</p>
    </div>
    
    <div class="section">
        <div class="section-title">Technical Solution</div>
        <p>I developed an image processing pipeline that extracted key visual features and fed them into a machine learning detection system. The solution included automated data validation to handle corrupted images and varying lighting conditions that could trigger false positives.</p>
        
        <div class="tools">
            <span class="tool">Python</span>
            <span class="tool">OpenCV</span>
            <span class="tool">TensorFlow</span>
        </div>
    </div>
    
    <div class="section">
        <div class="section-title">Business Impact</div>
        <div class="impact">
            <p>The system successfully detected 500+ early-stage fires, significantly reducing response time and environmental damage. The pipeline's 98% accuracy rate provided reliable alerts that forestry agencies could trust, and false positives were reduced by 75%.</p>
        </div>
    </div>
</div>

<div class="use-case">
    <h2 class="use-case-title"><i class="fas fa-car"></i> Vehicle Recognition System at Multiway</h2>
    
    <div class="section">
        <div class="section-title">Challenge</div>
        <p>At Multiway, I needed to build a backend system capable of processing and analyzing 1M+ vehicles daily with high detection accuracy for smart city applications. The existing Java-based system was struggling with performance issues and high maintenance costs.</p>
    </div>
    
    <div class="section">
        <div class="section-title">Technical Solution</div>
        <p>I led the migration from the legacy Java stack to a Python-based solution using TensorFlow for vehicle recognition algorithms. I designed a highly efficient data processing pipeline that handled multiple camera streams simultaneously, implemented license plate recognition algorithms, and created a real-time database indexing system to enable fast querying of vehicle history.</p>
        
        <div class="tools">
            <span class="tool">Python</span>
            <span class="tool">TensorFlow</span>
            <span class="tool">Flask APIs</span>
            <span class="tool">PostgreSQL</span>
            <span class="tool">Redis</span>
        </div>
    </div>
    
    <div class="section">
        <div class="section-title">Business Impact</div>
        <div class="impact">
            <p>The redesigned system achieved 98% detection accuracy while processing over 1 million vehicles daily. We realized a 70% performance improvement compared to the previous solution and achieved full SOC2 compliance for data handling. This enabled the expansion of the smart city platform to additional municipalities.</p>
        </div>
    </div>
</div>

<div class="use-case">
    <h2 class="use-case-title"><i class="fas fa-network-wired"></i> Real-time Network Monitoring at GPr Sistemas</h2>
    
    <div class="section">
        <div class="section-title">Challenge</div>
        <p>GPr Sistemas needed a scalable system to monitor 10,000+ ATM devices across various banks in real-time, with strict requirements for alert response times and uptime monitoring.</p>
    </div>
    
    <div class="section">
        <div class="section-title">Technical Solution</div>
        <p>I developed an SNMP-based monitoring backend that continuously collected performance metrics and operational status from banking network devices. The solution included a specialized time-series database for storing historical data, intelligent anomaly detection for preemptive alerts, and automated failover mechanisms.</p>
        
        <div class="tools">
            <span class="tool">Python</span>
            <span class="tool">Django REST Framework</span>
            <span class="tool">SNMP libraries</span>
            <span class="tool">Bootstrap + jQuery</span>
        </div>
    </div>
    
    <div class="section">
        <div class="section-title">Business Impact</div>
        <div class="impact">
            <p>The system achieved sub-1-second alert response time for critical device failures, enabling immediate intervention before customers were affected. We maintained 99.99% network monitoring uptime, providing banking clients with comprehensive real-time dashboards that significantly improved their operational visibility and reduced mean-time-to-repair for ATM issues.</p>
        </div>
    </div>
</div>

<div class="use-case">
    <h2 class="use-case-title"><i class="fas fa-shield-alt"></i> Machine Learning Data Infrastructure for Security Ratings</h2>
    
    <div class="section">
        <div class="section-title">Challenge</div>
        <p>At SecurityScorecard, I needed to create resilient data ingestion pipelines to handle diverse security data sources with inconsistent formats and reliability issues, all while maintaining data accuracy for cybersecurity rating calculations.</p>
    </div>
    
    <div class="section">
        <div class="section-title">Technical Solution</div>
        <p>I built scalable ETL pipelines that standardized heterogeneous security data into consistent formats for analysis. The system included automated data validation, anomaly detection, and reconciliation processes to ensure data quality. I implemented backfill mechanisms to handle source system outages and recovery.</p>
        
        <div class="tools">
            <span class="tool">Python</span>
            <span class="tool">Snowflake</span>
            <span class="tool">AWS data services</span>
            <span class="tool">Data validation frameworks</span>
        </div>
    </div>
    
    <div class="section">
        <div class="section-title">Business Impact</div>
        <div class="impact">
            <p>The reliable data infrastructure enabled SecurityScorecard to rate 3x more third-party vendors per customer while maintaining data accuracy. This directly supported business growth and improved customer satisfaction as clients could evaluate more of their supply chain partners for security risks.</p>
        </div>
    </div>
</div>