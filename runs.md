<table id="runlist-tbl">
  {% for row in site.data.runlist %}
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
    <tr id="runno_{{ row["RunNo"] }}">
        <td class="runno">{{ row["RunNo"] }}</td>
        <td id="location"><div class="location">{{ row["Location"] }}</div>
            <span class="location-links">
                {{ row["PostCode"] }}<br/>
                <a href ="https://w3w.co/{{ row["What3Words"] }}">{{ row["What3Words"] }}</a><br/>
                {{ row["OSGrid"] }}
            </span>
        </td>
        <td>{{ row["Date"] | date: "%b %d" }}<br/>{{ row["Time"] | date: "%I:%M %p" }}</td>
        <td class="hideonmobile">{{ row["Hares"] }}</td>
        <td class="hideonmobile">{{ row["On Inn"] }}</td>
        <td class="hideonmobile">{{ row["Notes"] }}</td>
    </tr>
  {% endfor %}
</table>