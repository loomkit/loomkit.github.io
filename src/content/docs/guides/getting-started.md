---
title: Getting Started with Loom 🚀
description: Step-by-step guide to install and launch Loom with a new or existing Laravel project.
---

This guide will help you install Loom, configure your environment, run migrations and seeders, and start your first Laravel + Loom project.

---

## 1️⃣ New Project

Start a completely new Laravel application with the Loom Starter Kit:

```sh
composer create-project loomkit/starter my-loom-app
cd my-loom-app
bun install
php artisan migrate --seed
composer dev
````

### Notes:

* `bun install` → installs frontend dependencies (Tailwind, Alpine, Livewire).
* `php artisan migrate --seed` → runs database migrations and seeders. Seeds will create a default admin user and sample data.
* `composer dev` → starts the development environment with hot-reloading.

---

## 2️⃣ Existing Project

Add Loom to an existing Laravel project:

```sh
composer require loomkit/loom -W
php artisan loom:install
composer dev
```

### Notes:

* `loom:install` will configure your project, publish Core assets, and optionally install default modules.
* After installation, verify your `.env` and run migrations if needed.

---

## 3️⃣ Configuration

Before running your app, make sure your `.env` file is correctly configured:

```txt
APP_NAME="My Loom App"
APP_ENV=local
APP_KEY=base64:GENERATED_KEY
APP_DEBUG=true
APP_URL=http://localhost:5173

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=loom_db
DB_USERNAME=root
DB_PASSWORD=

BROADCAST_DRIVER=log
CACHE_DRIVER=file
QUEUE_CONNECTION=sync
SESSION_DRIVER=file
```

### Tips:

* **APP\_URL** must match your frontend dev server if you are using Vite / Bun.
* Ensure database credentials are correct before running migrations.
* You can customize additional modules in `config/loom.php`.

---

## 4️⃣ Migrations & Seeders

Run the database setup:

```sh
php artisan migrate
php artisan db:seed
```

* Seeds include **default users, roles, permissions, and sample modules**.
* To reset the database during development:

```sh
php artisan migrate:fresh --seed
```

---

## 5️⃣ Launching the App

Start your development server:

```sh
php artisan serve
```

Then visit:

```
http://localhost:8000
```

* Login with the default admin credentials (from seeds).
* Explore the Filament admin panel and activate modules as needed.

---

## 6️⃣ Next Steps

* Explore the **Starter Kit** features → `/guides/starter-kit/`
* Learn about **Loom Core** → `/guides/core/`
* Check CLI commands → `/reference/commands/`
* Configure additional modules in `config/loom.php`
