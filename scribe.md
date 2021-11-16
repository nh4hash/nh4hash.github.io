---
layout: page
title: Run Notes
subtitle: Select ramblings from our scribe.
---
[Shrinky's Page]({% link /Archive/2009/shrinky_dink.htm %}) \
[Shrinky's Page 2020]({% link /Archive/2009/shrinky_2020.htm %}) \
[Shrinky's Old Posts]({% link /Archive/2009/shrinky_2000.htm %}) \
[Old News]({% link /Archive/2009/NH4_Run Reports.htm %}) 
{% for scribe_notes in site.scribe %}
  <span class="post-teaser__title">
    <a href="{{ scribe_notes.url | prepend: site.baseurl }}">{{ scribe_notes.title }}</a>
    </span>
<span class="post-teaser__date">{{ scribe_notes.date | date: "%d %B %Y" }}</span>
{% endfor %}