/*
  Warnings:

  - You are about to drop the column `employeeId` on the `profiles` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "auth"."profiles" DROP COLUMN "employeeId";

-- AddForeignKey
ALTER TABLE "employee"."employees" ADD CONSTRAINT "employees_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "auth"."profiles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "storage"."units" ADD CONSTRAINT "units_userId_fkey" FOREIGN KEY ("userId") REFERENCES "auth"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
