# Migration `20200217131510-about`

This migration has been generated by lena at 2/17/2020, 1:15:10 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "public"."About" (
    "about_text_arm" text  NOT NULL DEFAULT '',
    "about_text_eng" text  NOT NULL DEFAULT '',
    "about_text_rus" text  NOT NULL DEFAULT '',
    "createdAt" timestamp(3)  NOT NULL DEFAULT '1970-01-01 00:00:00',
    "id" text  NOT NULL ,
    "status" text  NOT NULL DEFAULT '',
    "updatedAt" timestamp(3)  NOT NULL DEFAULT '1970-01-01 00:00:00',
    PRIMARY KEY ("id")
) 
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200217131510-about
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,57 @@
+datasource db {
+  provider = "postgresql" // other options are: "mysql" and "sqlite"
+  url      = "postgresql://postgres:1@localhost:5432/lifepack?schema=public"
+}
+generator client {
+  provider = "prisma-client-js"
+}
+
+model About {
+  id              String     @default(uuid())  @id
+  about_text_arm  String
+  about_text_eng  String
+  about_text_rus  String
+  status		  String
+  createdAt       DateTime   @default(now())
+  updatedAt       DateTime   @updatedAt
+}
+
+
+
+
+
+
+
+
+
+
+
+
+
+
+
+
+
+
+// This is your Prisma schema file,
+// learn more about it in the docs: https://pris.ly/d/prisma-schema
+
+// The `datasource` block is used to specify the connection to your DB.
+// Set the `provider` field to match your DB type: "postgresql", "mysql" or "sqlite".
+// The `url` field must contain the connection string to your DB.
+// Learn more about connection strings for your DB: https://pris.ly/d/connection-strings
+// Other examples for connection strings are:
+// SQLite: url = "sqlite:./dev.db"
+// MySQL:  url = "mysql://johndoe:johndoe@localhost:3306/mydb"
+// You can also use environment variables to specify the connection string: https://pris.ly/d/prisma-schema#using-environment-variables
+
+// By adding the `generator` block, you specify that you want to generate Prisma's DB client.
+// The client is generated by runnning the `prisma generate` command and will be located in `node_modules/@prisma` and can be imported in your code as:
+// import { PrismaClient } from '@prisma/client'
+
+
+// Next steps:
+// 1. Add your DB connection string as the `url` of the `datasource` block
+// 2. Run `prisma2 introspect` to get your data model into the schema (this will override this file and delete all comments!)
+// 3. Run `prisma2 generate` to generate Prisma Client JS
+// 4. Start using Prisma Client JS in your application
```


