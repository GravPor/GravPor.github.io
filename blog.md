---
layout: default
title: Blog
permalink: /blog/
---

## 記事一覧
<ul>
{% for post in site.posts %}
  <li>
    <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
    <small>({{ post.date | date: "%Y-%m-%d" }})</small>
  </li>
{% endfor %}
</ul>
