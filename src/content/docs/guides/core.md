---
title: Loom Core 🧵
description: Understand the Loom Core package, modular architecture, and key features.
---

Loom Core is the **foundation of the Starter Kit**.  
It provides the essential tools, modular architecture, and ready-to-use resources to build **scalable and maintainable Laravel applications**.

---

## Key Concepts

<CardGrid stagger>
  <Card title="Modular Architecture" icon="puzzle">
    Core provides a modular system where each feature (Blog, Shop, etc.) is a **self-contained module**.
    Enable or disable modules using Laravel Pennant feature flags in `config/loom.php`.
  </Card>

  <Card title="Resources & Routes" icon="road">
    Core manages resources like Users, Roles, and Permissions.
    Routes are automatically registered, but can be customized or replaced by the developer.
  </Card>

  <Card title="Configurable Guards" icon="shield">
    Core supports multiple authentication guards.
    You can define guards per module or resource for fine-grained access control.
  </Card>

  <Card title="Commands & CLI" icon="terminal">
    Loom Core provides artisan commands like `loom:install`, `loom:add`, and `loom:list` to manage modules and features easily.
  </Card>

  <Card title="Notifications & Events" icon="bell">
    Core integrates notifications, events, and hooks.
    Modules can trigger notifications or react to application events.
  </Card>
</CardGrid>

---

## Modules

- Modules are **self-contained packages** within Loom.
- Each module can define:
  - Routes
  - Controllers
  - Policies
  - Views
  - Seeders
- Modules can be added via CLI:

```bash
php artisan loom:add blog
````

* Disable a module using feature flags:

```php
use Laravel\Pennant\Feature;

Feature::off('blog');
```

---

## Extending Core

* You can **create custom modules** or extend existing ones.
* All Core resources (User, Role, Permission) are **replaceable**.
* Commands and features are **fully configurable** via `config/loom.php`.

---

## Next Steps

* Explore **Starter Kit features** → `/guides/starter-kit/`
* Check **CLI commands** → `/reference/commands/`
* Learn **module management** → `/tutorials/add-blog-module/`
