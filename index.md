<img src="{{ '/assets/img/NH4_Front_Page.jpg' | prepend: site.baseurl }}" id="about-img" alt="logo">
{% include run.html runno='2195' HaresTitle='Brought to you by' RunTitle='Your Next Run' %}
{% assign post = site.scribe.last %}
<div class="h2">
     <p class="page-title__text">Run Report</p>
     <p class="page-title__subtext">{{post.title}} {{post.date | date: "%b %d"}} @ {{post.date | date: "%I:%M %p" }}</p>
     <div class="page-title__subtitle">{{post.subtitle}}</div>
</div>

[{{post.location}}]({{post.url}})
<div class="page-title__subtext"><strong>{{post.hares}}</strong></div>
<div>{{post.excerpt}}</div>


{% assign event = site.posts.last %}
<div class="h2">
     <p class="page-title__text">Events</p>
     <p class="page-title__subtext">{{event.title}}</p>
</div>

[Details]({{event.url}})
<div class="page-title__subtext"><strong>{{event.author}}</strong></div>
<div>{{event.excerpt}}</div>
