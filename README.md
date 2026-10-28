# No-Bullshit 21

Twenty-one questions. You pick how deep you go. They decide whether to believe you.

One phone, face-up on the table. The phone is only the deck and the scoreboard.

## Run it

It is one static page. Open `index.html`, or serve the folder with anything.

Live: https://21.iamjttaylor.com

## Deploy (GitHub Pages)

1. Push this folder to a public repo on the `main` branch.
2. Settings → Pages → Source: *Deploy from a branch*, branch `main`, folder `/ (root)`.
   The `CNAME` file sets the custom domain to `21.iamjttaylor.com` automatically.
3. DNS: add a `CNAME` record for host `21` pointing to `<your-github-username>.github.io`.
4. Once the certificate is issued (minutes to an hour), tick *Enforce HTTPS* on the Pages settings page.

To use a different subdomain, change the one line in `CNAME` and the DNS record to match.

## Edit the deck

All 45 questions live in `BANK` near the top of the script in `index.html`, 15 per tier.
Edit, commit, push. Bump `VERSION` in `sw.js` so phones that installed the app pick the change up on their next open.

## Install on a phone

Open the link, then *Add to Home Screen* (iOS: Share → Add to Home Screen; Android: the install prompt or ⋮ → Install app).
It works offline after the first load.
