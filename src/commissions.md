---
title: "Commissions"
layout: "layouts/commissions-feed.html"
pagination:
  data: collections.commissions
  size: 6
permalink: "commissions{% if pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber }}{% endif %}/index.html"
paginationPrevText: "Newer commissions"
paginationNextText: "Older commissions"
paginationAnchor: "#commissions-list"
---

My latest commissions.
