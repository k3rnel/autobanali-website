# Cloudflare origin certificate

nginx expects exactly two files in this directory. **Neither is committed** (see `.gitignore`):

| File | What it is |
| --- | --- |
| `origin.pem` | Cloudflare **Origin Certificate** (the cert body) |
| `origin.key` | Its **private key** |

## Getting them

Cloudflare dashboard → **SSL/TLS → Origin Server → Create Certificate**. Let Cloudflare
generate the private key, hostnames `autobanali.am, *.autobanali.am`, 15-year validity.
Copy the two blocks it shows you (the key is shown **once**) into the files above.

Then set **SSL/TLS → Overview → Full (strict)**. Origin certs are only trusted by
Cloudflare, so a browser hitting the origin IP directly will still show a cert warning.
That is expected and fine: traffic is supposed to arrive through Cloudflare.

Lock the key down on the server:

```bash
chmod 600 nginx/certs/origin.key
```

## Optional but recommended: Authenticated Origin Pulls

Stops anyone from bypassing Cloudflare by hitting the origin IP directly.

1. Cloudflare → **SSL/TLS → Origin Server → Authenticated Origin Pulls**: on.
2. Download Cloudflare's origin-pull CA and save it here as `cloudflare-origin-pull-ca.pem`:
   <https://developers.cloudflare.com/ssl/origin-configuration/authenticated-origin-pull/>
3. Uncomment the `ssl_client_certificate` / `ssl_verify_client` lines in
   `nginx/templates/default.conf.template`, then `docker compose restart nginx`.