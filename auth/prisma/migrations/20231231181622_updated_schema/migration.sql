/*
  Warnings:

  - You are about to drop the `employees` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `items` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `storages` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `units` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "employees" DROP CONSTRAINT "employees_managerId_fkey";

-- DropForeignKey
ALTER TABLE "employees" DROP CONSTRAINT "employees_profileId_fkey";

-- DropForeignKey
ALTER TABLE "items" DROP CONSTRAINT "items_unitId_fkey";

-- DropForeignKey
ALTER TABLE "units" DROP CONSTRAINT "units_storageId_fkey";

-- DropForeignKey
ALTER TABLE "units" DROP CONSTRAINT "units_userId_fkey";

-- AlterTable
ALTER TABLE "profiles" ADD COLUMN     "employeeId" INTEGER;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "unitsIds" INTEGER[];

-- DropTable
DROP TABLE "employees";

-- DropTable
DROP TABLE "items";

-- DropTable
DROP TABLE "storages";

-- DropTable
DROP TABLE "units";
