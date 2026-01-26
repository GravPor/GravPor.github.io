---
layout: default
title: Memo
permalink: /memo/
---

## メモ一覧
<ul>
{% for p in site.memo %}
  <li>
    <a href="{{ p.url | relative_url }}">{{ p.title }}</a>
  </li>
{% endfor %}
</ul>
