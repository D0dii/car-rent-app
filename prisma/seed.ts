const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  try {
    // Create cars
    const car1 = await prisma.car.create({
      data: {
        name: "Car 1",
        class: "Class A",
        seats: 4,
        capacity: "4-door",
        hasMileageLimit: false,
        pricePerDay: 50,
        carCategory: "Category A",
        carImage: "car1.jpg",
        latitude: 123.456,
        longitude: 789.012,
        isAvailable: true,
        isElectric: false,
        isAutomatic: true,
      },
    });

    const car2 = await prisma.car.create({
      data: {
        name: "Car 2",
        class: "Class B",
        seats: 6,
        capacity: "4-door",
        hasMileageLimit: true,
        mileageLimit: 1000,
        pricePerDay: 70,
        carCategory: "Category B",
        carImage: "car2.jpg",
        latitude: 456.789,
        longitude: 12.345,
        isAvailable: true,
        isElectric: true,
        isAutomatic: false,
      },
    });

    // Create rental
    const rental = await prisma.rental.create({
      data: {
        carId: car1.id,
        userId: "user123",
        pickupDate: new Date(),
        dropoffDate: new Date(),
        totalCost: 100,
        status: "Completed",
        pickupLongitude: 123.456,
        pickupLatitude: 789.012,
        dropoffLongitude: 456.789,
        dropoffLatitude: 12.345,
      },
    });

    console.log("Data seeded successfully");
  } catch (error) {
    console.error("Error seeding data:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
