# TechNest-Frontend-Mentorship
 
Welcome to the TechNest Mentorship Program! This repository documents the weekly progress and projects undertaken as part of the program. The project involves building a dynamic Friends-themed web application, with features growing in complexity each week.

## Table of Contents
- [Overview](#overview)
- [Week 2: Single Character Static Page](#week-2-single-character-static-page)
- [Week 3: Multi-Character Index and Individual Pages](#week-3-multi-character-index-and-individual-pages)
- [Week 4: Adding JavaScript for Dynamic Content](#week-4-adding-javascript-for-dynamic-content)

---
## Overview

This project demonstrates fundamental frontend development skills and best practices for building scalable, reusable web applications. Key skills include:
- HTML and CSS for layout and styling.
- JavaScript for dynamic content rendering.
- Modular structure to improve maintainability.

The project was developed as part of the **TechNest Community** mentorship program, focusing on progressive skill-building through weekly milestones.

---

## Week 2: Single Character Static Page

### What I Did
1. Designed a single-character page for `Peppermint Paws`:
  - Included a title, an image placeholder, and a descriptive paragraph.
  - Added animated snowflakes for a festive touch.
2. Styled the page using Google Fonts (`Futura` and `Glory`) and a card layout.

### File Changes
#### `index.html`
- Created a basic static page with animations and a character card:
```html
<div class="card">
  <div class="image-box"></div>
  <h1>Peppermint Paws</h1>
  <p>
    Festive Ice/Fairy creature who spreads joy and leaves a trail of minty magic in its snowy wake!
  </p>
</div>
```

#### `styles.css`
- Added animation for snowflakes:
```css
.snowflake {
  position: absolute;
  top: 0;
  animation: fall linear infinite;
}
@keyframes fall {
  0% { top: -50px; }
  100% { top: 100%; }
}
```

## Week 3: Multi-Character Index and Individual Pages

### What I Did
1. Updated Index Page:
- Created a multi-character index.html displaying all six characters.
- Each card includes:
    - An image, the character’s name, and a "Learn More" button linking to their individual page.
2. Individual Pages:
- Created separate HTML pages for each character (ross.html, rachel.html, etc.).
- Each page includes:
    - A unique image, description, and fun facts.
    - A "Back to Main Page" button linking to the index page.
3. Styling Enhancements:
- Used styles.css for the index page and individual.css for character pages.
- Ensured consistent and responsive design across all pages.

### File Changes
#### `index.html`
- Added cards for each character:
```html
<div class="cast-member">
  <img src="../assets/ross.png" alt="Ross Geller" class="cast-image">
  <h2>Ross Geller</h2>
  <button class="learn-more" onclick="window.location.href='ross.html'">Learn More</button>
</div>
```

#### `Individual Pages (e.g., ross.html)`
- Each page contains unique character information:
```html
<header class="header">
  <h1 class="title">Ross Geller</h1>
</header>
<main class="cast-profile">
  <img src="../assets/ross.png" alt="Ross Geller" class="profile-image">
  <section class="character-info">
    <h2>About Ross</h2>
    <p>
      Ross Geller, played by David Schwimmer, is a paleontologist and Monica’s older brother. Known for his humorous "pivot!" moment.
    </p>
  </section>
  <section class="fun-facts">
    <h2>Fun Facts</h2>
    <ul>
      <li>Has been married three times.</li>
      <li>Has a son named Ben and a daughter named Emma.</li>
    </ul>
  </section>
</main>
```

## Week 4: Adding JavaScript for Dynamic Content

### What I Did
1. Refactored the Index Page:
- Replaced hardcoded character data with JavaScript to populate the index dynamically.
- Added a script.js file containing character data and rendering logic.
2. Reusable Individual Page:
- Replaced static individual pages with a single individual.html file.
- Used JavaScript (individual.js) to dynamically load content based on the - character parameter in the URL.
3. Code Cleanup:
- Removed redundant static pages.
- Ensured modularity by separating data and rendering logic into scripts.
- Adjusted layouts to ensure better image fitting

### File Changes
#### `script.js`
- Populates the index page dynamically:
```js
const images = [
    "../assets/ross.png",
    "../assets/rachel.png",
    "../assets/monica.png",
    "../assets/chandler.png",
    "../assets/joey.png",
    "../assets/phoebe.png"
];

const headers = [
    "Ross Geller",
    "Rachel Green",
    "Monica Geller",
    "Chandler Bing",
    "Joey Tribbiani",
    "Phoebe Buffay"
];

$(document).ready(function() {
    $(".cast-member").each(function(index) {
        $(this).find(".cast-image").attr("src", images[index]);
        $(this).find("h2").text(headers[index]);
        $(this).find(".learn-more").attr("onclick", `window.location.href='individual.html?character=${headers[index].toLowerCase().split(" ")[0]}'`);
    });
});
```

#### `individual.js`
- Dynamically loads character data on individual.html:
```js
const profiles = {
    ross: { /* data for Ross */ },
    rachel: { /* data for Rachel */ },
    // Other characters...
};

$(document).ready(function() {
    const params = new URLSearchParams(window.location.search);
    const characterKey = params.get("character");
    const profile = profiles[characterKey];

    if (profile) {
        $(".title").text(profile.name);
        $(".profile-image").attr("src", profile.image);
        $(".character-info p").text(profile.description);
        $(".fun-facts ul").html(profile.facts.map(fact => `<li>${fact}</li>`).join(""));
    }
});
```
