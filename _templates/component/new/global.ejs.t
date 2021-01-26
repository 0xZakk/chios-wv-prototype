---
inject: true
to: ./styles/globals.scss
append: true
---
@import "../components/<%= name %>/<%= h.changeCase.paramCase(name) %>.scss";