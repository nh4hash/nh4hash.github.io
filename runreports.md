---
layout: page
title: Run Notes
subtitle: Select ramblings from our scribe.
---
[Shrinky's Page](https://old.nh4.org/2009/shrinky_dink.htm){:target="_blank"} \
[Shrinky's Page 2020](https://old.nh4.org/2009/shrinky_2020.htm){:target="_blank"} \
[Shrinky's Old Posts](https://old.nh4.org/2009/shrinky_2000.htm){:target="_blank"} \
[Old News](https://old.nh4.org/2009/NH4_Run%20Reports.htm){:target="_blank"}

{% assign posts = site.scribe | reverse %}
{% for post in posts %}
<p><a href="{{ post.url | prepend: site.baseurl }}">
<span class="post-teaser__title">{{ post.title }}</span>
<span class="post-teaser__date">{{ post.date | date: "%d %B %Y" }}</span>
</a></p>
{% endfor %}