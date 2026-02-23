---
title: Quick Start
description: Get up and running with Minions Oss-releases in minutes
---

## TypeScript

```typescript
import { createClient } from '@minions-oss-releases/sdk';

const client = createClient();
console.log('Version:', client.version);
```

## Python

```python
from minions_oss_releases import create_client

client = create_client()
print(f"Version: {client['version']}")
```

## CLI

```bash
oss-releases info
```
