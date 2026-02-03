---
layout: page
title: Blog
---

{% for post in site.posts %}
<article>
  <h4>
    <a href="{{ post.url }}">{{ post.title }}</a>
  </h4>
  <small>{{ post.date | date: "%Y-%m-%d" }}</small>
</article>
{% endfor %}
