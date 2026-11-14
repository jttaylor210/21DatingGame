# No-Bullshit 21

Twenty-one questions. You pick how deep you go. They decide whether to believe you.

One phone, face-up on the table. The phone is only the deck and the scoreboard.

**Play:** https://jttaylor210.github.io/21DatingGame/

## How it's hosted

GitHub Pages serves the `gh-pages` branch of this repo. It is one static page: `index.html`, a manifest, a service worker and icons. No build step. Push to `gh-pages` and the site updates in about a minute.

## Move it to 21.iamjttaylor.com

1. DNS, wherever iamjttaylor.com is managed: add a `CNAME` record, host `21`, value `jttaylor210.github.io`.
2. This repo → Settings → Pages → Custom domain: `21.iamjttaylor.com` → Save.
3. When the certificate is issued (minutes to an hour), tick *Enforce HTTPS* on the same page.

Do step 1 first. Setting the custom domain before the DNS record exists takes the site offline until it does.

## Edit the deck

All 45 questions live in `BANK` near the top of the script in `index.html`, 15 per tier.
Edit, commit, push. Bump `VERSION` in `sw.js` so phones that installed the app pick the change up on their next open.

## Install on a phone

Open the link, then *Add to Home Screen* (iOS: Share → Add to Home Screen; Android: the install prompt or ⋮ → Install app).
It works offline after the first load.
