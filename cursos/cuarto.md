---
tags: curso
title: Cuarto
materia: Historia
etapa: ESO
orden: 10
layout: post
---

<picture>
    <source
      srcset="../../assets/img/nazis-oscuro.png"
      media="(prefers-color-scheme: dark)"
    />
    <img src="https://libraries.uta.edu/ettahulme/sites/ettahulme/files/2020-11/20116695.jpg" />
</picture>

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

<table>

{%- for post in collections.post -%}
  <tr>
    <td>
      <a href="{{ post.url }}">{{ post.data.title }}</a>
    </td>
    <td>
      {{ curso.data.materia }}
    </td>
    <td>
      {{ curso.data.etapa }}
    </td>
  </tr>
{%- endfor -%}

</table>
