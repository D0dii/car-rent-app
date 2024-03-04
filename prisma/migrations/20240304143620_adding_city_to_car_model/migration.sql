-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Car" (
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
    "latitude" REAL NOT NULL,
    "longitude" REAL NOT NULL,
    "city" TEXT NOT NULL,
    "isAvailable" BOOLEAN NOT NULL DEFAULT true,
    "isElectric" BOOLEAN NOT NULL DEFAULT false,
    "isAutomatic" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_Car" ("capacity", "carCategory", "carImage", "city", "class", "engine", "hasMileageLimit", "id", "isAutomatic", "isAvailable", "isElectric", "latitude", "longitude", "mileageLimit", "name", "pricePerDay", "rentalId", "seats", "securityDeposit", "typeOfFuel") SELECT "capacity", "carCategory", "carImage", "city", "class", "engine", "hasMileageLimit", "id", "isAutomatic", "isAvailable", "isElectric", "latitude", "longitude", "mileageLimit", "name", "pricePerDay", "rentalId", "seats", "securityDeposit", "typeOfFuel" FROM "Car";
DROP TABLE "Car";
ALTER TABLE "new_Car" RENAME TO "Car";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
