# minions-oss-releases

**Release definitions, changelogs, and publish receipts**

Built on the [Minions SDK](https://github.com/mxn2020/minions).

---

## Quick Start

```bash
# TypeScript / Node.js
npm install @minions-oss-releases/sdk minions-sdk

# Python
pip install minions-oss-releases

# CLI (global)
npm install -g @minions-oss-releases/cli
```

---

## CLI

```bash
# Show help
oss-releases --help
```

---

## Python SDK

```python
from minions_oss_releases import create_client

client = create_client()
```

---

## Project Structure

```
minions-oss-releases/
  packages/
    core/           # TypeScript core library (@minions-oss-releases/sdk on npm)
    python/         # Python SDK (minions-oss-releases on PyPI)
    cli/            # CLI tool (@minions-oss-releases/cli on npm)
  apps/
    web/            # Playground web app
    docs/           # Astro Starlight documentation site
    blog/           # Blog
  examples/
    typescript/     # TypeScript usage examples
    python/         # Python usage examples
```

---

## Development

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm run build

# Run tests
pnpm run test

# Type check
pnpm run lint
```

---

## Documentation

- Docs: [oss-releases.minions.help](https://oss-releases.minions.help)
- Blog: [oss-releases.minions.blog](https://oss-releases.minions.blog)
- App: [oss-releases.minions.wtf](https://oss-releases.minions.wtf)

---

## License

[MIT](LICENSE)
