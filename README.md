# projects.michaellunzer.com

The GitHub Pages user site for [@michaellunzer](https://github.com/michaellunzer).

Its only real job is to own the custom domain `projects.michaellunzer.com`, which
every project repo without its own CNAME inherits as a base. A repo with Pages
enabled and no CNAME of its own lands at `projects.michaellunzer.com/<repo>/`.

Projects that want a clean root URL — or that need their own origin for
cookies, localStorage and service workers, or that have their URL baked into a
client — set a `CNAME` file of their own instead:

| Repo | URL |
|------|-----|
| `archive` | https://archive.michaellunzer.com/ |
| `babystonefruit` | https://babystonefruit.michaellunzer.com/ |
| `pebble-fantasy-football` | https://pebble-fantasy-football.michaellunzer.com/ |

To add a new subdomain: create a Cloudflare CNAME record pointing the label at
`michaellunzer.github.io` with proxy set to **DNS only** (grey cloud — a proxied
record stops GitHub from issuing the TLS certificate), then commit a `CNAME`
file containing the full hostname to that repo.
