<img src="{{ '/assets/img/NH4_Front_Page.jpg' | prepend: site.baseurl }}" id="about-img" alt="logo">

{% include run.html runno=site.nextrun HaresTitle='Brought to you by' RunTitle='Next Run' %}
{% assign post = site.scribe.last %}
{% assign runs = site.data.runlist | where:'RunNo', post.run %}
{% assign run = runs.first %}
<div class="h2">
     <p class="page-title__text">Run Report</p>
     <p class="page-title__subtext">Run {{post.run}} - {{run.Date | date: "%d %b %Y"}}, {{ run.Time }}</p>
</div>

[{{run.Location}}]({{post.url}})
<div class="page-title__subtext"><strong>{{run.Hares}}</strong></div>
<div>{{post.excerpt}}</div>

<div class="h2"><p class="page-title__text">Events</p></div>

{% for event in site.posts limit:1 %}
<div class="h2">
     <p class="page-title__subtext">{{event.title}}</p>
</div>
[Details]({{event.url}})
<div class="page-title__subtext"><strong>{{event.author}}</strong></div>
<div>{{event.excerpt}}</div>
{% endfor %} 