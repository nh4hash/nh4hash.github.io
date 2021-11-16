---
layout: page
title: Run Notes
subtitle: Select ramblings from our scribe.
---

{% for scribe_notes in site.scribe %}
  <span class="post-teaser__title">
    <a href="{{ scribe_notes.url }}">{{ scribe_notes.title }}</a>
    </span>
<span class="post-teaser__date">{{ scribe_notes.date | date: "%d %B %Y" }}</span>
{% endfor %}