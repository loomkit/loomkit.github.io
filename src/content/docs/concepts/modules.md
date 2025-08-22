---
title: Loom Modules 🧩
description: Learn how Loom modules work, how to enable/disable them, and extend the system.
---

Loom is **modular by design**.  
Each module is a **self-contained feature** that can be enabled, disabled, or customized without affecting the rest of the application.

---

## What is a Module?

A module is a **package of features** that can include:

- Routes
- Controllers
- Policies
- Views / Components
- Migrations / Seeders
- Config files
- Event listeners / Notifications

Modules allow you to **pick only what you need** for your application.

---

## Feature Flags

Loom uses [Laravel Pennant](https://laravel.com/docs/10.x/pennant) for feature flags.  

Enable or disable a module in `config/loom.php`:

```php
return [
    'modules' => [
        'blog' => true,
        'shop' => false,
        'newsletter' => true,
    ],
];
````

Or programmatically:

```php
use Laravel\Pennant\Feature;

if (Feature::active('blog')) {
    // Module code will run
}
```

---

## Adding a Module

Use the CLI to add a module:

```bash
php artisan loom:add blog
```

* Publishes routes, controllers, views, and seeders
* Automatically enables the module if feature flag is active
* Updates module list (`loom:list`)

---

## Removing / Disabling a Module

Disable a module via feature flag:

```php
Feature::off('shop');
```

Remove a module entirely (optional):

```bash
php artisan loom:remove shop
```

* Removes routes, controllers, and views
* Leaves database tables if needed (can run `loom:reset` for full cleanup)

---

## Module Structure

A typical module has the following layout:

```
Modules/
 ├─ Blog/
 │   ├─ Http/
 │   │   └─ Controllers/
 │   ├─ Models/
 │   ├─ Views/
 │   ├─ database/
 │   │   ├─ migrations/
 │   │   └─ seeders/
 │   └─ config.php
 └─ Shop/
     └─ ...
```

* **Http/Controllers** → module routes and business logic
* **Models** → module-specific models
* **Views** → Livewire components / Blade templates
* **Database** → migrations & seeders
* **Config** → module-specific configuration

---

## Extending Modules

You can:

* **Override resources** (Models, Policies, Views)
* **Add your own seeders or migrations**
* **Create custom commands** for the module
* **Trigger events / notifications** from the module

---

## Next Steps

* Add your first module → `/tutorials/add-blog-module/`
* Learn about Core architecture → `/guides/core-package/`
* Check CLI commands → `/reference/commands/`
