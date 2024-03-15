-- CreateTable
CREATE TABLE "Car" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "rentalId" TEXT,
    "name" TEXT NOT NULL,
    "class" TEXT NOT NULL,
    "seats" INTEGER NOT NULL,
    "capacity" TEXT NOT NULL,
    "hasMileageLimit" BOOLEAN NOT NULL DEFAULT false,
    "mileageLimit" INTEGER,
    "pricePerDay" INTEGER NOT NULL,
    "engine" DECIMAL,
    "typeOfFuel" TEXT,
    "carCategory" TEXT NOT NULL,
    "carImage" TEXT,
    "securityDeposit" INTEGER NOT NULL DEFAULT 0,
    "city" TEXT NOT NULL,
    "isAvailable" BOOLEAN NOT NULL DEFAULT true,
    "isElectric" BOOLEAN NOT NULL DEFAULT false,
    "isAutomatic" BOOLEAN NOT NULL DEFAULT false
);

-- CreateTable
CREATE TABLE "Rental" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "carId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "pickupDate" DATETIME NOT NULL,
    "dropoffDate" DATETIME NOT NULL,
    "totalCost" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "pickupLocation" TEXT NOT NULL,
    "dropoffLocation" TEXT NOT NULL,
    CONSTRAINT "Rental_carId_fkey" FOREIGN KEY ("carId") REFERENCES "Car" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Rental_carId_key" ON "Rental"("carId");
