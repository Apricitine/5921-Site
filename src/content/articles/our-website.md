---
title: Our Website
author: Luke
---

# **Our Website**
##### *Written by: Luke*

Here is a sample bit of code that generated this page for this website:
<?prettify?>
```
import { Params } from "astro";
import Base from "../../layouts/base.astro";
import { CollectionEntry, getEntryBySlug } from "astro:content";

const { slug }: Params = Astro.params;
const entry = await getEntryBySlug("articles", slug);
const { Content } = entry === undefined ? new Error() : await entry.render();
```