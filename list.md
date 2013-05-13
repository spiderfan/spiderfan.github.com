---
layout: page
title: "List"
description: ""
---
{% include JB/setup %}
<div id="main">      
  <div id="magazine_teaser" style="margin-top:   0px; margin-bottom:  0px;">
    <div class="teaser_container">
{% for post in site.posts%}
      <div class="news_teaser" onclick="window.location.href='{{ BASE_PATH }}{{ post.url }}'">
        <h4>{{post.title}}</h4>
        <div class="teaser_text">{{post.description}}</div>
        <div class="infos">{{ post.date | date_to_string }}</div>
      </div>
{% endfor %}
    </div>
  </div>
</div>
