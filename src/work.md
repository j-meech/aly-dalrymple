---
title: "Work"
layout: "layouts/work-feed.html"
pagination:
  data: collections.work
  size: 6
permalink: "work{% if pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber }}{% endif %}/index.html"
paginationPrevText: "Newer work"
paginationNextText: "Older work"
paginationAnchor: "#work-list"
---

My latest work.
