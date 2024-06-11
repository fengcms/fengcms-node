-- CreateTable
CREATE TABLE "Article" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "channel_id" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "tags" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "markdown" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "video" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "origin" TEXT NOT NULL,
    "editor" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL,
    "istop" INTEGER NOT NULL DEFAULT 0,
    "hits" INTEGER NOT NULL DEFAULT 0,
    "type" INTEGER NOT NULL,
    "status" INTEGER NOT NULL,
    "time" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
