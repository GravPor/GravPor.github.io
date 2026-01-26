---
layout: default
title: Specs
permalink: /spec/
---

## 仕様書一覧
<ul>
{% for p in site.specs %}
  <li>
    <a href="{{ p.url | relative_url }}">{{ p.title }}</a>
  </li>
{% endfor %}
</ul>
