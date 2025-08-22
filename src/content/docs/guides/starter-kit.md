---
title: Loom Starter Kit 🚀
description: Explore all features included in Loom Starter Kit.
---

The Loom Starter Kit is a **production-ready Laravel + Filament setup** that lets you start building modern web applications immediately.  
It comes pre-configured with essential features, admin dashboard, modular architecture, and ready-to-use resources.

---

## Key Features

<CardGrid stagger>
  <Card title="Authentication & RBAC" icon="lock">
    User authentication, registration, and password reset are ready out-of-the-box.
    Roles & permissions are fully managed via Spatie Permission.
  </Card>

  <Card title="Filament Admin Panel" icon="cogs">
    Beautiful, responsive admin panel built with Filament.
    Manage users, roles, permissions, and all modules from one place.
  </Card>

  <Card title="User & Organization Management" icon="users">
    Create and manage organizations, teams, and users seamlessly.
  </Card>

  <Card title="Notifications & Emails" icon="envelope">
    Built-in notifications system, email confirmations, and optional newsletters.
  </Card>

  <Card title="Search & Activity Logs" icon="magnifier">
    Full-text search and activity logs for users and modules.
  </Card>

  <Card title="Optional Modules" icon="puzzle">
    Activate or deactivate modules like Blog, Shop, and more via Laravel Pennant feature flags.
  </Card>
</CardGrid>

---

## Modules & Extensibility

Loom Starter Kit is **modular by design**:

- Enable or disable features in `config/loom.php`.  
- Each module can have its **own routes, resources, views, and seeders**.  
- Easily extend the Starter Kit by adding custom modules using `php artisan loom:add <module>`.  

---

## Next Steps

- Learn how to install Loom Core → `/guides/core/`  
- Explore available modules and their configuration → `/concepts/modules/`  
- Check the CLI commands → `/reference/commands/`
