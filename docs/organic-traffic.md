# Organic traffic for iklobato.com

Status doc for the "get more organic visits" work. Written so any agent or person can pick it up cold.
Covers only the session of 2026-11-06/07 (UTC). Last update: 2026-11-07.

This folder is in `_config.yml` `exclude`, so Jekyll does not publish it.

## 1. Goal

More real people reaching iklobato.com from search, without paid ads.
Main lever: technical articles hosted on this domain, measured in Google Search Console and Cloudflare Web Analytics.

## 2. Current state (verified live 2026-11-07 ~03:05 UTC)

| Thing | State | How it was checked |
|---|---|---|
| Blog posts on own domain | Live: `/blog/gunicorn-uvicorn-fastapi-deployment/`, `/blog/run-ollama-on-remote-gpu-vast-ai/` | HTTP 200, own `rel="canonical"`, 32 and 14 `<pre>` blocks rendered |
| `/blog/` index | Cards and JSON-LD point to the on-site posts, 0 links to Medium | fetched live HTML |
| `sitemap.xml` | 17 URLs (was 15) | fetched live |
| `feed.xml` | 2 entries (was 0) | fetched live |
| Google Search Console | Property `sc-domain:iklobato.com` verified, owner = Google account `ikk.lobs@gmail.com` | Search Console API `sites.list` shows `siteOwner` |
| Sitemap in Search Console | Submitted 2026-11-07 03:03 UTC: 17 submitted, 0 errors, 0 warnings, 0 indexed (normal right after submit) | `sitemaps.list` |
| Search analytics | No rows yet (new property; Google needs ~2-3 days) | `searchanalytics.query` 2026-08-01..2026-11-06 returned `rowCount: 0` |
| Cloudflare Web Analytics (RUM) | On since 2026-08-02, beacon present in the home page HTML | RUM site list + HTML grep for `static.cloudflareinsights.com/beacon` |
| Google Analytics 4 | `gtag` is on the site | HTML grep. Not queried in this session |

Deployed by PR https://github.com/iklobato/iklobato.github.io/pull/14 (merge commit `d2150bd`, GitHub Pages build `built d2150bd`).

## 3. Baseline: how many visits the site gets

**Use Cloudflare Web Analytics for "visits", never the zone request analytics.** About 98% of zone traffic is bots.

| Source | What it counts | Typical value |
|---|---|---|
| Zone analytics `httpRequests1dGroups.uniq.uniques` | unique IPs per day, bots included | ~600/day |
| Web Analytics `rumPageloadEventsAdaptiveGroups` with `bot: 0` | real browser visits that ran the JS beacon | ~13/day |

Web Analytics data, `bot: 0` (queried 2026-11-07 ~02:10 UTC):

```
== meses (visits, pageloads, days with data)
2026-08 380 490 21
2026-09 200 510 24
2026-10 200 320 17
2026-11 102 109 7
media/dia 12.8
== last days (date visits pageloads)
2026-11-01 19 19
2026-11-02 13 15
2026-11-03 23 25
2026-11-04 6 6
2026-11-05 15 18
2026-11-06 25 25
```

Limits of this baseline:
- September and October values are round (200, 70, 30): Cloudflare sampled and extrapolated. November values are exact.
- Only 69 of 98 days have a row. Missing days are either zero visits or lost in sampling; not proven which.
- Ad blockers and Brave shields block the beacon, so the real number is somewhat higher.
- No data before 2026-08-02: the zone moved into this Cloudflare account that day.
- The 2026-11-03 spike in zone page views (1,538) shows only 23 real visits, so it was bots.

## 4. How to measure (commands)

Cloudflare: Global API Key auth (headers `X-Auth-Email: iklobato1@gmail.com` + `X-Auth-Key: $CLOUDFLARE_ADMIN_TOKEN`), not a Bearer token. Endpoint `POST https://api.cloudflare.com/client/v4/graphql`. Use `python3` + `urllib` (`curl` is denied on the dev Mac).

Real visits per day (Web Analytics is per account, filtered by site tag):

```graphql
query($a:String!,$s:Date!,$e:Date!,$t:String!){viewer{accounts(filter:{accountTag:$a}){
  rumPageloadEventsAdaptiveGroups(limit:1000,
    filter:{date_geq:$s,date_leq:$e,siteTag:$t,bot:0},orderBy:[date_ASC]){
    count sum{visits} dimensions{date}}}}}
```

- `$a`: account id, read from `GET /zones?name=iklobato.com` -> `result[0].account.id`
- `$t`: `fab20bd17676406fb4803e80d5f6c299` (iklobato.com site tag)
- Query in 7-day chunks. The free plan caps the range per query.

Zone traffic (bots included, only useful for spikes):

```graphql
query($z:String!,$s:Date!,$e:Date!){viewer{zones(filter:{zoneTag:$z}){
  httpRequests1dGroups(limit:1000,filter:{date_geq:$s,date_leq:$e},orderBy:[date_ASC]){
    dimensions{date} sum{requests pageViews} uniq{uniques}}}}}
```

The free plan rejects a range wider than `52w1d1h` (error code `quota`). 363 days back works.

Google Search Console: through the `mcp-google-multi` connector, **account alias `ikklobs`**, site `sc-domain:iklobato.com`:
- `searchconsole_searchanalytics_query` with dimensions `["query"]` or `["page"]`: clicks, impressions, CTR, position
- `searchconsole_sitemaps_list`: indexed counts
- `searchconsole_url_inspect`: indexing state of one URL

## 5. What was found (and fixed or not)

1. The site was not in Google Search Console on any of the 8 Google accounts. **Fixed.**
2. Both blog articles lived only on Medium. `/blog/` linked out, `feed.xml` was empty, and the sitemap had no posts, so search credit went to Medium. **Fixed** on the site side. The Medium canonical link is still pending (section 6).
3. The site said the posts were from May 2024. Medium's `datePublished` is `2025-05-27` and `2025-05-07`. **Fixed.**
4. Reading times were wrong (12 and 15 min). Medium says 22 and 3 min. **Fixed.**
5. A commented-out print block in `_layouts/default.html` still named `iklobato.github.io`. It was never visible on screen (inside an HTML comment), just dead markup. **Removed.**
6. The site has few pages anyone would find by search: home, services, 4 case studies, about. That is the real ceiling on organic traffic. **Open** (section 6).
7. `lightapi` (115 stars, the most-starred public repo) has no link to the site. **Open.**

## 6. What was done this session

| When (UTC) | Action | Proof |
|---|---|---|
| 2026-11-07 ~02:30 | Converted both Medium articles (HTML -> Markdown, stdlib parser) into `_posts/2025-05-07-run-ollama-on-remote-gpu-vast-ai.md` and `_posts/2025-05-27-gunicorn-uvicorn-fastapi-deployment.md`, permalink `/blog/<slug>/`, same header and breadcrumb pattern as `work/*.md`, em dashes removed | commit `6e0b649` |
| same | `/blog/index.md`: cards and JSON-LD point to the on-site URLs, dates, reading times, publisher changed from Medium to Person | commit `6e0b649` |
| same | `assets/css/main.css`: `.post-body` and `.post-origin` styles (code blocks, images), using the existing theme tokens, so dark mode works | commit `6e0b649` |
| same | Removed the dead print block from `_layouts/default.html` | commit `0cd19d8` |
| 2026-11-07 ~02:50 | Added the Search Console property `sc-domain:iklobato.com`. Added a Cloudflare DNS TXT record at the apex: `google-site-verification=xDS13otXzdxGTN3g-eAqZRk78fGZ2eoIb8KR1SYjlcM` (record id `1980661c8b713d01153408c7176e1d91`, comment "Google Search Console domain verification"). SPF, DMARC and DKIM untouched | Cloudflare `POST 200 True`. Seen on `charles.ns.cloudflare.com`, 1.1.1.1 and 8.8.8.8 |
| 2026-11-07 ~02:57 | User clicked Verify in the UI (logged in as `ikk.lobs@gmail.com`) | `sites.list`: `ikklobs` -> `siteOwner` |
| 2026-11-07 02:58 / 03:03 | Submitted `https://iklobato.com/sitemap.xml` (15 URLs, then 17 after the merge) | `sitemaps.list` |
| 2026-11-07 03:01 | Merged PR #14, Pages built, verified live (section 2) | merge `d2150bd` |

Not checked: the post pages were not looked at in a real browser (only the HTML structure).

## 7. Next steps and what is missing

Ordered by impact. The owner is the user unless it says "agent".

1. **Set the canonical link on Medium** for both stories (Story settings > Advanced settings > canonical link) to:
   - https://iklobato.com/blog/gunicorn-uvicorn-fastapi-deployment/
   - https://iklobato.com/blog/run-ollama-on-remote-gpu-vast-ai/

   Without this, Google may still treat Medium as the original. About 3 min.
2. **Write new articles on this domain.** This is the biggest lever. Each one takes about 2-4 h and needs 2-6 months to rank. The topic list is in section 9; none has measured search volume yet.
3. **Add a link to iklobato.com** in the `lightapi` README and on the profiles (GitHub, Toptal, BairesDev, Medium, LinkedIn). About 15 min.
4. **Agent: read the first Search Console data** around 2026-11-10. Look at queries, pages, and position, then re-rank the topic list by real impressions.
5. **Agent (optional): query GA4** (`analyticsdata` API via `mcp-google-multi`) for history before 2026-08-02. Not done yet. Which Google account owns the GA4 property is not known.
6. **Optional cleanup:** `iklobato1` (iklobato1@gmail.com) is left with `sc-domain:iklobato.com` as `siteUnverifiedUser`. It is harmless and can be removed in the Search Console UI.
7. Make the LinkedIn posts (auto-poster project) end with a link to the matching article on the site.

## 8. What to monitor

| What | Where | When | Healthy | Act if |
|---|---|---|---|---|
| Real visits/day | Web Analytics query, section 4 | weekly | baseline ~13/day (2026-11), going up after new articles | flat 8 weeks after 2+ new posts: check indexing |
| Pages indexed | `searchconsole_sitemaps_list` / Page indexing report | 2026-11-10, then weekly | the 2 blog URLs indexed within ~2 weeks | still 0 indexed on 2026-11-21: run `url_inspect` on each post |
| Search queries and impressions | `searchanalytics_query`, dimensions `query` and `page` | 2026-11-10, then monthly | impressions for FastAPI/Gunicorn/Ollama queries | blog pages get 0 impressions after a month |
| Duplicate-content signal | `url_inspect` on the posts: "Google-selected canonical" | after the Medium canonical is set, ~2 weeks later | Google picks the iklobato.com URL | Google picks the Medium URL: re-check the Medium canonical setting |
| Verification TXT record | Cloudflare DNS, apex `iklobato.com` | whenever DNS is edited | record present | removed: Search Console loses verification. Do not delete it |
| Bot spikes | zone `httpRequests1dGroups` | only when numbers look odd | - | do not report zone uniques as visits |

## 9. Article topic backlog (no search volume measured yet)

From the case studies (already proven on the site):
1. Shipping an LLM chatbot to production in 6 weeks: what broke (SecurityScorecard)
2. Migrating 20+ enterprise clients with zero data loss: the checklist (OneTrust)
3. Azure to AWS: how we cut 35% of the ops work (ProbiusDx)
4. Fixing skewed joins in PySpark with salting (Serasa)
5. Ollama on Vast.ai vs the OpenAI API: real cost per 1M tokens (follow-up to the existing post; needs measured numbers first)

From public repos and common problems:
1. Build a REST API from SQLAlchemy models in 10 lines (`lightapi`)
2. Using an LLM as a threat judge for host telemetry (`avai`)
3. Turning GitHub and Jira into context for LLM agents (`briar`)
4. FastAPI background work: async, BackgroundTasks or Celery?
5. Idempotent webhooks and retries when you integrate systems

How to add a post: create `_posts/YYYY-MM-DD-<slug>.md` with the same front matter shape as the two existing posts (`layout: default`, `title`, `description`, `keywords`, `date`, `permalink: /blog/<slug>/`, `breadcrumbs`), put the body inside `<article class="post-body" markdown="1">`, and add a card to `blog/index.md` plus a `BlogPosting` entry in its JSON-LD. `jekyll-sitemap` and `jekyll-feed` pick the post up on their own. Check with `bundle exec jekyll build`.

## 10. Gotchas

- Cloudflare auth uses the Global API Key header pair, with email `iklobato1@gmail.com`. The scoped `$CLOUDFLARE_TOKEN` sees 0 zones.
- Search Console is owned by `ikklobs`, not `iklobato1`. Calls made as `iklobato1` return `siteUnverifiedUser`, and sitemap or analytics calls fail.
- The Google Site Verification API is not exposed by the `mcp-google-multi` connector. Getting a TXT token or clicking Verify needs a human in the Search Console UI.
- On the dev Mac, the global `~/.gitignore` (line 75, `assets/`) ignores `assets/`, so `git add assets/css/main.css` fails with "paths are ignored". Use `git add -u assets/css/main.css` (the file is already tracked). Do not use `-f` on new files there without checking.
- `specs/` is gitignored. The older SEO spec (`specs/002-seo-optimization/`) exists only on the local disk, which is why this doc lives in `docs/`.
- The Medium RSS feed (`medium.com/feed/@iklobato1`) returns 404. The story pages themselves fetch fine with a browser User-Agent.
- An HTML text dump that strips tags but not comments shows commented-out markup as if it were visible. Check for `<!--` before calling something a visible bug.
