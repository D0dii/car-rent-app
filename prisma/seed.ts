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
        carImage: "car.svg",
        city: "Warszawa",
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
        carCategory: "Category A",
        city: "Poznań",
        isAvailable: true,
        isElectric: true,
        isAutomatic: false,
      },
    });

    const car3 = await prisma.car.create({
      data: {
        name: "Car 3",
        class: "Class A",
        seats: 4,
        capacity: "5-door",
        hasMileageLimit: false,
        pricePerDay: 80,
        carCategory: "Category B",
        city: "Poznań",
        isAvailable: true,
        isElectric: true,
        isAutomatic: false,
      },
    });

    const car4 = await prisma.car.create({
      data: {
        name: "Car 4",
        class: "Class B",
        seats: 5,
        capacity: "4-door",
        hasMileageLimit: true,
        mileageLimit: 500,
        pricePerDay: 170,
        carCategory: "Category D",
        city: "Poznań",
        isAvailable: false,
        isElectric: false,
        isAutomatic: true,
      },
    });

    const car5 = await prisma.car.create({
      data: {
        name: "Car 5",
        class: "Class S",
        seats: 4,
        capacity: "4-door",
        hasMileageLimit: true,
        mileageLimit: 1000,
        pricePerDay: 70,
        carCategory: "Category A",
        city: "Poznań",
        isAvailable: true,
        isElectric: false,
        isAutomatic: false,
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
