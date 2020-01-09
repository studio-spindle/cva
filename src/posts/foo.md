---
title: "The coastal red giants"
author: Watson & Crick
date: 2019-07-10
hero_image: ../static/bali-15.jpg
---

# Live demo
Changes are automatically rendered as you type.

## Table of Contents
* Implements [GitHub Flavored Markdown](https://github.github.com/gfm/)
* Renders actual, "native" React DOM elements
* Allows you to escape or skip HTML (try toggling the checkboxes above)
* If you escape or skip the HTML, no \`dangerouslySetInnerHTML\` is used! Yay!

## HTML block below
<blockquote>
  This blockquote will change based on the HTML settings above.
</blockquote>

## How about some code?

```js
var React = require('react');
var Markdown = require('react-markdown');
React.render(
  <Markdown source="# Your markdown here" />,
  document.getElementById('content')
);
```

Pretty neat, eh?
## Tables?
| Feature   | Support |
| --------- | ------- |
| tables    | ✔ |
| alignment | ✔ |
| wewt      | ✔ |
## More info?
Read usage information and more on [GitHub](//github.com/rexxars/react-markdown)
