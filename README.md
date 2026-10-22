# Classroom Resource Ideas

A teacher-facing page for Lausanne Collegiate School showing classroom resources built with Claude. Each card shows the need a teacher had, what was built, and a link to open it.

Live site: https://cmarklcs.github.io/classroom-resource-ideas/

Plain HTML, CSS and JavaScript. No framework and no build step. `app.js` reads `cards.json` and draws one card per entry.

## Files

| File | What it does |
| --- | --- |
| `index.html` | Page structure: header, card grid, closing section |
| `styles.css` | Lausanne colors, fonts, layout, dark mode |
| `app.js` | Loads `cards.json` and renders the cards |
| `cards.json` | The list of cards. This is the only file you edit to change cards. |
| `images/` | Preview images (JPEG, about 1200px wide) |

## Card fields

Each card in `cards.json` looks like this:

```json
{
  "title": "A pretend grocery store for reading nutrition labels",
  "need": "What the teacher or class needed.",
  "built": "What was built.",
  "url": "https://example.com/the-page",
  "image": "images/lynx-market.jpg",
  "order": 6
}
```

- **order** sets the position on the page, lowest first. Decimals work, so `1.5` sits between `1` and `2` without renumbering anything.
- **image** is a path inside `images/`. Leave it as `""` to show a "Preview coming" placeholder.

## Add a card

1. Open `cards.json` on GitHub and click the pencil (Edit) icon.
2. Copy an existing card, paste it before the closing `]`, and put a comma after the card above it.
3. Change the fields. Pick an `order` number for where it should appear.
4. Click **Commit changes**. The live site updates in a minute or two.

## Add or replace a preview image

1. Take a screenshot of the page (a wide browser window works best; the card shows the top of the image in a 16:10 frame).
2. Save it as a JPEG about 1200px wide, named after the page, for example `toddle-notifications.jpg`.
3. On GitHub, open the `images` folder, choose **Add file > Upload files**, and upload it.
4. In `cards.json`, set that card's `"image"` to `"images/toddle-notifications.jpg"` and commit.

## Edit or remove a card

- **Edit:** change the text in `cards.json` and commit.
- **Remove:** delete the card's whole `{ ... }` block, plus the comma that separated it from its neighbor, and commit. You can also delete its image from `images/`.

If the page shows "The resource list could not be loaded", `cards.json` usually has a missing or extra comma. Paste it into https://jsonlint.com to find the spot.

## Or ask Claude Code

Open this repository in Claude Code and describe the change, for example:

> Add a card for the new Lower School reading log. The need: ... What was built: ... Link: ... Put it after the name sheets card. Then push.

> Remove the mock trial deck card and push.

> Here is a screenshot for the Toddle grade pages card. Save it to images and hook it up.
