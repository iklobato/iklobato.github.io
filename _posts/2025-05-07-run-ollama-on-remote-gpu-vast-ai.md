---
layout: default
title: "How to Run Ollama Securely on a Remote GPU with Vast.ai"
description: "Step-by-step guide to running Ollama on a rented Vast.ai GPU: pick the GPU, pull models, lock down access, and call it from the CLI or the API without any API tokens."
keywords: Ollama Vast.ai, run Ollama remote GPU, self-hosted LLM, private LLM setup, Ollama API
date: 2025-05-07
permalink: /blog/run-ollama-on-remote-gpu-vast-ai/
breadcrumbs:
  - name: Blog
    url: /blog/
  - name: "How to Run Ollama Securely on a Remote GPU with Vast.ai"
    url: /blog/run-ollama-on-remote-gpu-vast-ai/
---

<header class="header">
    <div class="profile-section">
        <div class="profile-info">
            <h1>How to Run Ollama Securely on a Remote GPU with Vast.ai</h1>
            <span class="title">A private, token-free AI setup you fully control</span>
            <p class="post-meta">Published: {{ page.date | date: "%B %-d, %Y" }} &bull; 3 min read &bull; Henrique Lobato</p>
        </div>
    </div>

    <nav aria-label="Breadcrumb" class="breadcrumb">
        <ol itemscope itemtype="https://schema.org/BreadcrumbList">
            <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
                <a href="/" itemprop="item"><span itemprop="name">Home</span></a>
                <meta itemprop="position" content="1" />
            </li>
            <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
                <a href="/blog/" itemprop="item"><span itemprop="name">Blog</span></a>
                <meta itemprop="position" content="2" />
            </li>
            <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
                <span itemprop="name">How to Run Ollama Securely on a Remote GPU with Vast.ai</span>
                <meta itemprop="position" content="3" />
            </li>
        </ol>
    </nav>
</header>

<main class="main-content">
<article class="post-body" markdown="1">

Are you looking for a private, secure, and cost-effective way to run advanced language models without relying on OpenAI, Claude, or DeepSeek API tokens? In this guide, I’ll walk you through how to deploy **Ollama** on a remote GPU using **Vast.ai**, turning any LLM into a self-hosted, privacy-first solution that you fully control.

As a freelance developer specializing in backend architecture, devops, and AI deployment, I help businesses and professionals set up custom, secure, and efficient AI environments like this every day. If you’re looking for help with your own setup or want a tailor-made AI infrastructure, [let’s work together](https://iklobato.com/).

## Why Deploy Ollama on Vast.ai?

Here’s why this approach is ideal for developers, startups, and privacy-focused professionals:

- **No API Tokens Needed**: You download and run models locally: no external billing or rate-limiting issues.
- **Full Data Privacy**: Your prompts and files never leave your control.
- **Offline & Autonomous**: Inference runs on your instance, with no internet dependencies.
- **Secure Access**: SSH and WebUI access is protected with your credentials.
- **Cost Control**: Only pay for the GPU time you use, with hourly rates.

## Step-by-Step: Deploy Ollama on a Remote GPU

## 1. Choose the Right GPU on Vast.ai

- Sign in to [Vast.ai](https://vast.ai/)
- Filter for GPUs that meet your model’s VRAM needs
- Check pricing and location to optimize performance and cost

## 2. SSH Into Your Instance

Once your instance is ready, Vast.ai will provide SSH access. You can log in via:

```
ssh -i /path/to/your/private_key root@your_instance_ip
```

Or, if you have SSH defaults configured:

```
ssh your_instance_ip
```

## 3. Install and Pull Ollama Models

Ollama is pre-installed on most Vast.ai images. To get started, simply pull a model:

```
ollama pull llama3
```

Explore the full list of models at [ollama.com/library](https://ollama.com/library).

## Managing Storage and Models

Check your disk usage:

```
df -h
```

List installed models:

```
ollama list
```

Remove unused models:

```
ollama rm llama2
```

Check Ollama’s storage footprint:

```
du -sh ~/.ollama
```

## Custom Models and Configuration

## Build a Custom AI Assistant

Create a `Modelfile`:

```
vim Modelfile
```

Example contents:

```
FROM llama3
SYSTEM You are a helpful coding assistant.
PARAMETER temperature 0.7
```

Build the custom model:

```
ollama create my-coder-assistant -f Modelfile
```

Run with adjusted parameters:

```
ollama run llama3 --temperature 0.8 --top_p 0.95
```

## Web UI Access with Open WebUI

Most Vast.ai templates include **Open WebUI**, a clean interface to chat with your models.

Access the WebUI from the URL provided by Vast.ai

Features:

- Switch between models
- Upload files
- View history
- Change inference parameters
- Use it just like ChatGPT, but self-hosted

## Cost Optimization Tips

- **Use quantized models** to reduce VRAM usage
- **Shut down** your instance when not in use
- **Track usage** via Vast.ai’s billing dashboard
- **Select lower-tier GPUs** for less demanding models

## Security Best Practices

- Always connect with **SSH keys**
- Update your instance regularly:

```
apt update && apt upgrade -y
```

- Never share your instance URL: it contains your admin access token
- Remove sensitive files after use

## Access via Command Line or API

## CLI

```
ollama run llama3
```

## API

For integration into your tools or automations:

```
http://your_instance_ip:11434/api/generate
```

## Final Thoughts: Why This Setup Matters

Running Ollama on Vast.ai gives you **maximum privacy**, **full control**, and **reduced costs**, all without sacrificing performance. Whether you’re building a secure coding assistant, a data extraction tool, or a research chatbot, this setup ensures your data stays with you.

If you’d like help configuring your own private AI system, or need freelance support for backend infrastructure, LLM integration, or devops automation, [visit my portfolio](https://iklobato.com/) and let’s talk.

<p class="post-origin">Also published on <a href="https://medium.com/@iklobato1/how-to-run-ollama-securely-on-a-remote-gpu-with-vast-ai-a-private-token-free-ai-setup-e68287e23951" rel="noopener">Medium</a>.</p>

</article>
</main>
