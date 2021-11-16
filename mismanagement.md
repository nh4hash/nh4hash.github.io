{% for fools_hash in site.data.mismanagement %}
{% assign people = fools_hash[1] %}
## Hash Committee {{fools_hash[0]}} - {{fools_hash[0] | plus: 1}}
  {% for person in people %}

<ul id="mismanagement">
    <li><strong>{{ person.title }}</strong> - {{ person.name }}</li>
</ul>
  {% endfor %}

{% endfor %}