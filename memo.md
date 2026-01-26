---
layout: default
title: Memos
permalink: /memo/
---

## メモ一覧
<ul>
{% for p in site.memos %}
  <li>
    <a href="{{ p.url | relative_url }}">{{ p.title }}</a>
  </li>
{% endfor %}
</ul>
