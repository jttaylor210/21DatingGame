# No-Bullshit 21

Twenty-one questions. You pick how deep you go. They decide whether to believe you.

One phone, face-up on the table. The phone is only the deck and the scoreboard.

**Play:** https://21.iamjttaylor.com

## How it's hosted

GitHub Pages serves the `gh-pages` branch of this repo at the domain in `CNAME`. It is one static page: `index.html`, a manifest, a service worker and icons. No build step. Push to `gh-pages` and the site updates in about a minute.

DNS: a `CNAME` record for host `21` pointing to `jttaylor210.github.io`.

## The deck

101 questions live in `BANK` near the top of the script in `index.html`: 36 Surface, 35 Under, 30 Core.

To add a new set, append the questions to the end of each tier's list and add that tier's old length to `CUTS` just below `BANK`. The newest set is dealt first; older cards come back once the new ones have been played. Then:

- copy `index.html` over `404.html` (they are the same file), and
- bump `VERSION` in `sw.js` so phones that installed the app pick the change up on their next open.

## Passing and history

A pass ends the turn: no points, the round counts, and play moves to the other player. Each player gets two.

*History*, at the bottom of the turn screen and on the final score, lists every round of the current game, latest first: who answered, the stakes, the question, the ruling and the points. It is saved with the game, so it survives a refresh and is cleared when a new game is dealt.

## The deck log

Each phone remembers which cards it has dealt and how they were ruled, so a new game deals the cards that phone hasn't seen first. To read the log, tap the "21" in the title three times, or open the site with `#log` on the end of the address. It lists every played card with how often it was drawn, ruled real, called, or passed, most-called first. It is stored on the phone only.

Changing a question's wording starts its history over.

## Install on a phone

Open the link, then *Add to Home Screen* (iOS: Share → Add to Home Screen; Android: the install prompt or ⋮ → Install app).
It works offline after the first load.
