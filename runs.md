[2022 Past Runs](/pastruns) |
[Old News](https://old.nh4.org/2009/NH4_Arch2000.htm){:target="_blank"} | 
[Ancient News](https://old.nh4.org/2009/NH4_Archives.htm){:target="_blank"}
{% assign runlist = site.data.runlist | sort: 'RunNo' %}
<table id="runlist-tbl">
  {% for row in runlist %}
    {% if forloop.first %}{% include runlistheader.html %}{% endif %}
    {% if row.RunNo != nil %}
    {% assign runNo = row.RunNo | times: 1 %}
    {% if runNo < site.nextrun %}
        {% break %}
    {% endif %}
    <tr id="runno_{{ row.RunNo }}">
        <td class="runno">{{ row.RunNo }}</td>
        <td><div class="location">
            {% if row.coordinates != nil %}
                <a href='https://www.google.com/maps/search/?api=1&query={{ row.coordinates }}' target='_blank'>{{row.Location}}</a>
            {% else %}
                {{row.Location}}
            {% endif %}</div>
            <span class="location-links">
                {{ row["PostCode"] }}<br/>
                <a href ="https://w3w.co/{{ row.What3Words }}?maptype=satellite" target='_blank'>{{ row["What3Words"] }}</a><br/>
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