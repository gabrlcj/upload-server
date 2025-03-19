import { pgTable, text, timestamp } from 'drizzle-orm/pg-core'
import { randomUUID } from 'node:crypto'

export const uploads = pgTable('uploads', {
  id: text('id')
    .primaryKey()
    .$defaultFn(() => randomUUID()),
  name: text('name').notNull(),
  remoteKey: text('remote_key').notNull().unique(),
  redirectUrl: text('redirect_url').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
})
