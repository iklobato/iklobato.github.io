---
layout: default
title: "Articles on Python, APIs and AI"
description: Practical tutorials and insights on Python development, API architecture, cloud optimization, and AI integration from Senior Python Developer Henrique Lobato.
breadcrumbs:
  - name: Blog
    url: /blog/
---

<header class="header">
    <div class="profile-section">
        <div class="profile-info">
            <h1>Python Development & Engineering Blog</h1>
            <span class="title">Technical insights on building high-performance backend systems, APIs, and AI solutions</span>
            <p class="blog-intro">Practical tutorials, case studies, and technical deep-dives from a Senior Python Developer with 10+ years of experience building scalable systems.</p>
        </div>
    </div>
    
    <nav aria-label="Breadcrumb" class="breadcrumb">
        <ol itemscope itemtype="https://schema.org/BreadcrumbList">
            <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
                <a href="/" itemprop="item"><span itemprop="name">Home</span></a>
                <meta itemprop="position" content="1" />
            </li>
            <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
                <span itemprop="name">Blog</span>
                <meta itemprop="position" content="2" />
            </li>
        </ol>
    </nav>
</header>

<main class="main-content">
    <section id="featured-post">
        <h2>Featured Technical Guides</h2>
        
        <div class="blog-post featured">
            <div class="post-image">
                <img src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*y7kPWCR2Oe_5vR7KXQzX1w.png" 
                     alt="FastAPI with Gunicorn and Uvicorn Deployment Architecture"
                     width="800"
                     height="450"
                     loading="lazy">
            </div>
            <div class="post-content">
                <h3>Mastering Gunicorn and Uvicorn: The Right Way to Deploy FastAPI Applications</h3>
                <p class="post-meta">Published: May 27, 2025 • 22 min read</p>
                <p class="post-excerpt">A comprehensive guide to properly deploying FastAPI applications in production using Gunicorn and Uvicorn workers. Learn about optimal configurations, performance tuning, and best practices for scalable Python web applications.</p>
                <div class="post-tags">
                    <span class="tag">FastAPI</span>
                    <span class="tag">Python</span>
                    <span class="tag">Deployment</span>
                    <span class="tag">Production</span>
                </div>
                <a href="/blog/gunicorn-uvicorn-fastapi-deployment/" class="post-link">Read the article <i class="fas fa-arrow-right"></i></a>
            </div>
        </div>
        
        <div class="blog-post featured">
            <div class="post-image">
                <img src="https://miro.medium.com/v2/resize:fit:1400/1*VJPr-UdjHpmucPrs5RsSwQ.png" 
                     alt="Ollama on Remote GPU Setup Architecture Diagram"
                     width="800"
                     height="450"
                     loading="lazy">
            </div>
            <div class="post-content">
                <h3>How to Run Ollama Securely on a Remote GPU with Vast.ai</h3>
                <p class="post-meta">Published: May 7, 2025 • 3 min read</p>
                <p class="post-excerpt">Need affordable GPU power for AI experiments without relying on API tokens? This step-by-step guide shows you how to set up a secure, private Ollama environment on Vast.ai's GPUs, perfect for developers who want full control over their AI infrastructure.</p>
                <div class="post-tags">
                    <span class="tag">AI Infrastructure</span>
                    <span class="tag">GPU Setup</span>
                    <span class="tag">Ollama</span>
                    <span class="tag">Self-hosted LLM</span>
                </div>
                <a href="/blog/run-ollama-on-remote-gpu-vast-ai/" class="post-link">Read the article <i class="fas fa-arrow-right"></i></a>
            </div>
        </div>
    </section>
    
    
</main>

<style>
    .blog-intro {
        font-size: 1.1rem;
        color: var(--light-text);
        margin: 1rem 0 2rem;
        max-width: 700px;
    }
    
    .breadcrumb {
        margin: 1rem 0;
        font-size: 0.9rem;
    }
    
    .breadcrumb ol {
        display: flex;
        list-style: none;
        padding: 0;
        margin: 0;
    }
    
    .breadcrumb li:not(:last-child)::after {
        content: '/';
        margin: 0 0.5rem;
        color: var(--light-text);
    }
    
    .breadcrumb a {
        color: var(--primary-color);
        text-decoration: none;
    }
    
    .breadcrumb a:hover {
        text-decoration: underline;
    }
    
    .blog-post {
        margin-bottom: 2rem;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        border: 1px solid var(--border-color);
        background-color: var(--card-bg);
    }
    
    .blog-post.featured {
        display: grid;
        grid-template-columns: 1fr;
        margin-bottom: 2rem;
    }
    
    .post-image {
        overflow: hidden;
        max-height: 300px;
    }
    
    .post-image img {
        width: 100%;
        height: auto;
        object-fit: cover;
    }
    
    .post-content {
        padding: 1.5rem;
    }
    
    .post-content h3 {
        margin-top: 0;
        font-size: 1.4rem;
        color: var(--secondary-color);
    }
    
    .post-meta {
        font-size: 0.9rem;
        color: var(--light-text);
        margin-bottom: 1rem;
    }
    
    .post-excerpt {
        color: var(--text-color);
        margin-bottom: 1.5rem;
        line-height: 1.6;
    }
    
    .post-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-bottom: 1.5rem;
    }
    
    .tag {
        background-color: var(--highlight-bg);
        color: var(--primary-color);
        padding: 0.3rem 0.8rem;
        border-radius: 4px;
        font-size: 0.85rem;
        font-family: 'Roboto Mono', monospace;
        border: 1px solid var(--border-color);
    }
    
    .post-link {
        display: inline-flex;
        align-items: center;
        color: var(--primary-color);
        text-decoration: none;
        font-weight: 500;
    }
    
    .post-link i {
        margin-left: 0.5rem;
        transition: transform 0.2s ease;
    }
    
    .post-link:hover i {
        transform: translateX(3px);
    }
    
    .blog-posts-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }
    
    .coming-soon {
        padding: 1.5rem;
        background-color: var(--highlight-bg);
        border: 1px solid var(--border-color);
        border-radius: 8px;
    }
    
    
    @media (min-width: 768px) {
        .blog-post.featured {
            grid-template-columns: 1fr 1fr;
        }
        
        .blog-posts-grid {
            grid-template-columns: repeat(3, 1fr);
        }
        
        .newsletter-form {
            flex-direction: row;
        }
        
        .subscribe-button {
            width: auto;
        }
    }
</style>


<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Blog",
  "headline": "Python Development & Engineering Blog",
  "description": "Practical tutorials and insights on Python development, API architecture, cloud optimization, and AI integration from Senior Python Developer Henrique Lobato.",
  "url": "https://iklobato.com/blog/",
  "author": {
    "@type": "Person",
    "name": "Henrique Lobato",
    "url": "https://iklobato.com"
  },
  "publisher": {
    "@type": "Person",
    "name": "Henrique Lobato",
    "url": "https://iklobato.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://avatars.githubusercontent.com/u/18133417?v=4"
    }
  },
  "blogPost": [
    {
      "@type": "BlogPosting",
      "headline": "Mastering Gunicorn and Uvicorn: The Right Way to Deploy FastAPI Applications",
      "description": "A comprehensive guide to properly deploying FastAPI applications in production using Gunicorn and Uvicorn workers with performance tuning.",
      "url": "https://iklobato.com/blog/gunicorn-uvicorn-fastapi-deployment/",
      "datePublished": "2025-05-27",
      "author": {
        "@type": "Person",
        "name": "Henrique Lobato"
      },
      "publisher": {
        "@type": "Person",
        "name": "Henrique Lobato",
        "url": "https://iklobato.com"
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://iklobato.com/blog/gunicorn-uvicorn-fastapi-deployment/"
      }
    },
    {
      "@type": "BlogPosting",
      "headline": "How to Run Ollama Securely on a Remote GPU with Vast.ai",
      "description": "Step-by-step guide to setting up Ollama on Vast.ai GPUs for a secure, token-free AI environment with cost optimization tips.",
      "url": "https://iklobato.com/blog/run-ollama-on-remote-gpu-vast-ai/",
      "datePublished": "2025-05-07",
      "author": {
        "@type": "Person",
        "name": "Henrique Lobato"
      },
      "publisher": {
        "@type": "Person",
        "name": "Henrique Lobato",
        "url": "https://iklobato.com"
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://iklobato.com/blog/run-ollama-on-remote-gpu-vast-ai/"
      }
    }
  ]
}
</script>