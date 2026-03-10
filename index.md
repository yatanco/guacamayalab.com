---
layout: default
title: Guacamaya Lab
---

An online notebook — unfinished, evolving, honest.

## Posts

{% for post in site.posts %}
### [{{ post.title }}]({{ post.url }})

<small>{{ post.date | date: "%Y-%m-%d" }}</small>

{{ post.excerpt }}

---

{% endfor %}