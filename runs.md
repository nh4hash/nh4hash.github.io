[Old News]({% link /Archive/2009/NH4_Archives.htm %}) | 
[Ancient News]({% link /Archive/2009/NH4_Arch2000.htm %})
{% capture now %}{{'now' | date: '%s' | plus: 0 %}}{% endcapture %}
{% assign runlist = site.data.runlist | sort: 'RunNo' %}
<table id="runlist-tbl">
  {% for row in runlist %}
  {% capture date %}{{post.date | date: '%s' | plus: 0 %}}{% endcapture %}
    {% if forloop.first %}
    <tr id="runlist-head">
      <th class="runno">Run No.</th>
      <th class="where">Where</th>
      <th class="when">When</th>
      <th class="who hideonmobile">Who</th>
      <th class="oninn hideonmobile">On Inn</th>
      <th class="note hideonmobile">Notes</th>
    </tr>
    {% endif %}
    {% if date != nil and date <= now and row.RunNo != nil %}
    <tr id="runno_{{ row.RunNo }}">
        <td class="runno">{{ row.RunNo }}</td>
        <td id="location"><div class="location">
            {% if row.coordinates == nil %}
                {{row.Location}}
            {% else %}
                <a href='https://www.google.com/maps/search/?api=1&query={{ row.coordinates }}' target='_blank'>{{row.Location}}</a>
            {% endif %}</div>
            <span class="location-links">
                {{ row["PostCode"] }}<br/>
                <a href ="https://w3w.co/{{ row["What3Words"] }}" target='_blank'>{{ row["What3Words"] }}</a><br/>
                {% if row.OSGrid != nil and row.coordinates != nil %}<a href ="https://streetmap.co.uk/loc/{{ row.coordinates }}" target='_blank'>{{ row.OSGrid }}</a>{% endif %}
            </span>
        </td>
        <td>{{ row["Date"] | date: "%b %d" }}<br/>{{ row["Time"] | date: "%I:%M %p" }}</td>
        <td class="hideonmobile">{{ row["Hares"] }}</td>
        <td class="hideonmobile">{{ row["On Inn"] }}</td>
        <td class="hideonmobile">{{ row["Notes"] }}</td>
    </tr>
    {% endif %}
  {% endfor %}
</table>