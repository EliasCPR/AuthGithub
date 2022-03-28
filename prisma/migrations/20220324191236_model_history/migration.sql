-- CreateTable
CREATE TABLE "histories" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "history" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "histories_pkey" PRIMARY KEY ("id")
);
