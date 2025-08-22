---
title: Loom CLI Commands 🦾
description: List of CLI commands provided by Loom Core and Starter Kit.
---

Loom provides a set of **artisan commands** to manage modules, features, and the application itself.  
Use these commands in your terminal inside your Laravel project.

---

## Installation & Setup

### `loom:install`

Installs Loom into an existing Laravel project.

```bash
php artisan loom:install
````

* Publishes Core assets
* Sets up default configuration in `config/loom.php`
* Optionally installs default modules (Blog, Shop, etc.)

---

## Module Management

### `loom:add {module}`

Adds a module to your project:

```bash
php artisan loom:add blog
```

* Downloads or enables the module
* Publishes module assets and resources
* Registers module routes automatically

---

### `loom:remove {module}`

Removes a module from your project:

```bash
php artisan loom:remove blog
```

* Unregisters routes and features
* Optionally removes module files

---

### `loom:list`

List all available modules and features:

```bash
php artisan loom:list
```

* Shows modules, their status (enabled/disabled), and version
* Useful to verify installed modules

---

## Maintenance & Utilities

### `loom:seed`

Runs the seeders for Core and enabled modules:

```bash
php artisan loom:seed
```

* Seeds default users, roles, permissions, and sample module data

### `loom:reset`

Resets Loom database tables (Core + modules):

```bash
php artisan loom:reset
```

* Equivalent to `migrate:fresh --seed` for all Loom tables
* Useful in development or testing

---

## Next Steps

* Explore **Core concepts** → `/guides/core/`
* Learn about **modules** → `/tutorials/add-blog-module/`
* See **Starter Kit features** → `/guides/starter-kit/`
