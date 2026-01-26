---
layout: default
title: Home
---

## ここは何？

- **Game**：作ったゲーム
- **Blog**：日記・進捗・記事
- **Memos**：思いつき・小ネタ

---

## 最新ブログ（5件）
<ul>
{% for post in site.posts limit:5 %}
  <li>
    <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
    <small>({{ post.date | date: "%Y-%m-%d" }})</small>
  </li>
{% endfor %}
</ul>

## 最新メモ（5件）
<ul>
{% for p in site.memos limit:5 %}
  <li>
    <a href="{{ p.url | relative_url }}">{{ p.title }}</a>
  </li>
{% endfor %}
</ul>
