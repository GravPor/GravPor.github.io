---
layout: page
title: GravPor
---

ゲーム制作ログと、日々のメモ。

- 🎮 ゲームの紹介
- 📓 日記・開発ログ
- 📷 写真や思いつきメモ

のんびり更新していきます。

---

## 🆕 最新のブログ

<ul>
{% for post in site.posts limit:3 %}
  <li>
    <strong>{{ post.date | date: "%Y-%m-%d" }}</strong><br>
    <a href="{{ post.url }}">{{ post.title }}</a>
  </li>
{% endfor %}
</ul>

---
