---
layout: page
title: Blog
---

{% for post in site.posts %}
<article>
  <h3>
    <a href="{{ post.url }}">{{ post.title }}</a>
  </h3>
  <small>{{ post.date | date: "%Y-%m-%d" }}</small>
</article>
{% endfor %}
