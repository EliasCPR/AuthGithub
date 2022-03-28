/*
  Warnings:

  - You are about to drop the column `user_id` on the `histories` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "histories" DROP COLUMN "user_id",
ADD COLUMN     "userId" TEXT;

-- AddForeignKey
ALTER TABLE "histories" ADD CONSTRAINT "histories_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
