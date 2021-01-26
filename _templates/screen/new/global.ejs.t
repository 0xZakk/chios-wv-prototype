---
inject: true
to: ./styles/globals.scss
append: true
---
@import "../screens/<%= name %>/<%= h.changeCase.paramCase(name) %>.scss";

