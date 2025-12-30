# Venila

## Features
* Internalization(i18n) - next-intl
* Environment variable - T3Env
* DataBase - Drizzle-ORM
* Authentication - Better-Auth
* UI - ShadCN
* Map - leaflet ~ React-Leaftlet

## Environment Variables

| KEY | DOCS |
| --- | --- |
| DATABASE_URL | [PostgreSQL](https://www.postgresql.org/) |
| BETTER_AUTH_SECRET | use -> openssl rand -base64 32 |

### Drizzle ORM

Generate migrations:
``` bash
npx drizzle-kit generate
```

Apply migrations:
``` bash
npx drizzle-kit migrate
```

### Better-Auth

``` bash
npx @better-auth/cli generate --output ./lib/db/schemas/users.ts
```

To create the initial user, you must specify the environment variables shown below:

| KEY      | VALUE             |
|----------|-------------------|
| USER_EMAIL    | antonio@mail.com  |
| USER_PASSWORD | password          |
| USER_NAME     | Antonio           |

Then, run the initial data seed:

```bash
npm run db:seed
```
