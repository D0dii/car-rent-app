const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  try {
    // Create cars
    const car1 = await prisma.car.create({
      data: {
        name: "Ford Falcon",
        class: "Class A",
        seats: 4,
        capacity: "4-door",
        hasMileageLimit: false,
        pricePerDay: 75,
        carCategory: "Category A",
        carImage: "ford-falcon.jpg",
        city: "Warszawa",
        isAvailable: true,
        isElectric: false,
        isAutomatic: true,
      },
    });

    const car2 = await prisma.car.create({
      data: {
        name: "Toyota HiLux",
        class: "Class B",
        seats: 6,
        capacity: "4-door",
        hasMileageLimit: true,
        mileageLimit: 1000,
        pricePerDay: 70,
        carCategory: "Category A",
        carImage: "toyota-hilux.jpg",
        city: "Poznań",
        isAvailable: true,
        isElectric: true,
        isAutomatic: false,
      },
    });

    const car3 = await prisma.car.create({
      data: {
        name: "Toyota Corolla",
        class: "Class A",
        seats: 4,
        capacity: "5-door",
        hasMileageLimit: false,
        pricePerDay: 80,
        carCategory: "Category B",
        carImage: "toyota-corolla.jpg",
        city: "Poznań",
        isAvailable: true,
        isElectric: true,
        isAutomatic: false,
      },
    });

    const car4 = await prisma.car.create({
      data: {
        name: "Volkswagen Golf",
        class: "Class B",
        seats: 5,
        capacity: "4-door",
        hasMileageLimit: true,
        mileageLimit: 500,
        pricePerDay: 170,
        carCategory: "Category D",
        carImage: "volkswagen-golf.jpg",
        city: "Poznań",
        isAvailable: false,
        isElectric: false,
        isAutomatic: true,
      },
    });

    const car5 = await prisma.car.create({
      data: {
        name: "Audi A4",
        class: "Class S",
        seats: 4,
        capacity: "4-door",
        hasMileageLimit: true,
        mileageLimit: 1000,
        pricePerDay: 70,
        carCategory: "Category A",
        carImage: "audi-a4.jpg",
        city: "Poznań",
        isAvailable: true,
        isElectric: false,
        isAutomatic: false,
      },
    });

    const car6 = await prisma.car.create({
      data: {
        name: "Ford Falcon",
        class: "Class A",
        seats: 4,
        capacity: "4-door",
        hasMileageLimit: false,
        pricePerDay: 75,
        carCategory: "Category A",
        carImage: "ford-falcon.jpg",
        city: "Warszawa",
        isAvailable: true,
        isElectric: false,
        isAutomatic: true,
      },
    });

    const car7 = await prisma.car.create({
      data: {
        name: "Toyota HiLux",
        class: "Class B",
        seats: 6,
        capacity: "4-door",
        hasMileageLimit: true,
        mileageLimit: 1000,
        pricePerDay: 70,
        carCategory: "Category A",
        carImage: "toyota-hilux.jpg",
        city: "Poznań",
        isAvailable: true,
        isElectric: true,
        isAutomatic: false,
      },
    });

    const car8 = await prisma.car.create({
      data: {
        name: "Toyota Corolla",
        class: "Class A",
        seats: 4,
        capacity: "5-door",
        hasMileageLimit: false,
        pricePerDay: 80,
        carCategory: "Category B",
        carImage: "toyota-corolla.jpg",
        city: "Poznań",
        isAvailable: true,
        isElectric: true,
        isAutomatic: false,
      },
    });

    const car9 = await prisma.car.create({
      data: {
        name: "Volkswagen Golf",
        class: "Class B",
        seats: 5,
        capacity: "4-door",
        hasMileageLimit: true,
        mileageLimit: 500,
        pricePerDay: 170,
        carCategory: "Category D",
        carImage: "volkswagen-golf.jpg",
        city: "Poznań",
        isAvailable: false,
        isElectric: false,
        isAutomatic: true,
      },
    });

    const car10 = await prisma.car.create({
      data: {
        name: "Audi A4",
        class: "Class S",
        seats: 4,
        capacity: "4-door",
        hasMileageLimit: true,
        mileageLimit: 1000,
        pricePerDay: 70,
        carCategory: "Category A",
        carImage: "audi-a4.jpg",
        city: "Poznań",
        isAvailable: true,
        isElectric: false,
        isAutomatic: false,
      },
    });

    const car11 = await prisma.car.create({
      data: {
        name: "Ford Falcon",
        class: "Class A",
        seats: 4,
        capacity: "4-door",
        hasMileageLimit: false,
        pricePerDay: 75,
        carCategory: "Category A",
        carImage: "ford-falcon.jpg",
        city: "Warszawa",
        isAvailable: true,
        isElectric: false,
        isAutomatic: true,
      },
    });

    const car12 = await prisma.car.create({
      data: {
        name: "Toyota HiLux",
        class: "Class B",
        seats: 6,
        capacity: "4-door",
        hasMileageLimit: true,
        mileageLimit: 1000,
        pricePerDay: 70,
        carCategory: "Category A",
        carImage: "toyota-hilux.jpg",
        city: "Poznań",
        isAvailable: true,
        isElectric: true,
        isAutomatic: false,
      },
    });

    const car13 = await prisma.car.create({
      data: {
        name: "Toyota Corolla",
        class: "Class A",
        seats: 4,
        capacity: "5-door",
        hasMileageLimit: false,
        pricePerDay: 80,
        carCategory: "Category B",
        carImage: "toyota-corolla.jpg",
        city: "Poznań",
        isAvailable: true,
        isElectric: true,
        isAutomatic: false,
      },
    });

    const car14 = await prisma.car.create({
      data: {
        name: "Volkswagen Golf",
        class: "Class B",
        seats: 5,
        capacity: "4-door",
        hasMileageLimit: true,
        mileageLimit: 500,
        pricePerDay: 170,
        carCategory: "Category D",
        carImage: "volkswagen-golf.jpg",
        city: "Poznań",
        isAvailable: false,
        isElectric: false,
        isAutomatic: true,
      },
    });

    const car15 = await prisma.car.create({
      data: {
        name: "Audi A4",
        class: "Class S",
        seats: 4,
        capacity: "4-door",
        hasMileageLimit: true,
        mileageLimit: 1000,
        pricePerDay: 70,
        carCategory: "Category A",
        carImage: "audi-a4.jpg",
        city: "Poznań",
        isAvailable: true,
        isElectric: false,
        isAutomatic: false,
      },
    });

    const car16 = await prisma.car.create({
      data: {
        name: "Ford Falcon",
        class: "Class A",
        seats: 4,
        capacity: "4-door",
        hasMileageLimit: false,
        pricePerDay: 75,
        carCategory: "Category A",
        carImage: "ford-falcon.jpg",
        city: "Warszawa",
        isAvailable: true,
        isElectric: false,
        isAutomatic: true,
      },
    });

    const car17 = await prisma.car.create({
      data: {
        name: "Toyota HiLux",
        class: "Class B",
        seats: 6,
        capacity: "4-door",
        hasMileageLimit: true,
        mileageLimit: 1000,
        pricePerDay: 70,
        carCategory: "Category A",
        carImage: "toyota-hilux.jpg",
        city: "Poznań",
        isAvailable: true,
        isElectric: true,
        isAutomatic: false,
      },
    });

    const car18 = await prisma.car.create({
      data: {
        name: "Toyota Corolla",
        class: "Class A",
        seats: 4,
        capacity: "5-door",
        hasMileageLimit: false,
        pricePerDay: 80,
        carCategory: "Category B",
        carImage: "toyota-corolla.jpg",
        city: "Poznań",
        isAvailable: true,
        isElectric: true,
        isAutomatic: false,
      },
    });

    const car19 = await prisma.car.create({
      data: {
        name: "Volkswagen Golf",
        class: "Class B",
        seats: 5,
        capacity: "4-door",
        hasMileageLimit: true,
        mileageLimit: 500,
        pricePerDay: 170,
        carCategory: "Category D",
        carImage: "volkswagen-golf.jpg",
        city: "Poznań",
        isAvailable: false,
        isElectric: false,
        isAutomatic: true,
      },
    });

    const car20 = await prisma.car.create({
      data: {
        name: "Audi A4",
        class: "Class S",
        seats: 4,
        capacity: "4-door",
        hasMileageLimit: true,
        mileageLimit: 1000,
        pricePerDay: 70,
        carCategory: "Category A",
        carImage: "audi-a4.jpg",
        city: "Poznań",
        isAvailable: true,
        isElectric: false,
        isAutomatic: false,
      },
    });

    const car21 = await prisma.car.create({
      data: {
        name: "Ford Falcon",
        class: "Class A",
        seats: 4,
        capacity: "4-door",
        hasMileageLimit: false,
        pricePerDay: 75,
        carCategory: "Category A",
        carImage: "ford-falcon.jpg",
        city: "Warszawa",
        isAvailable: true,
        isElectric: false,
        isAutomatic: true,
      },
    });

    const car22 = await prisma.car.create({
      data: {
        name: "Toyota HiLux",
        class: "Class B",
        seats: 6,
        capacity: "4-door",
        hasMileageLimit: true,
        mileageLimit: 1000,
        pricePerDay: 70,
        carCategory: "Category A",
        carImage: "toyota-hilux.jpg",
        city: "Poznań",
        isAvailable: true,
        isElectric: true,
        isAutomatic: false,
      },
    });

    const car23 = await prisma.car.create({
      data: {
        name: "Toyota Corolla",
        class: "Class A",
        seats: 4,
        capacity: "5-door",
        hasMileageLimit: false,
        pricePerDay: 80,
        carCategory: "Category B",
        carImage: "toyota-corolla.jpg",
        city: "Poznań",
        isAvailable: true,
        isElectric: true,
        isAutomatic: false,
      },
    });

    const car24 = await prisma.car.create({
      data: {
        name: "Volkswagen Golf",
        class: "Class B",
        seats: 5,
        capacity: "4-door",
        hasMileageLimit: true,
        mileageLimit: 500,
        pricePerDay: 170,
        carCategory: "Category D",
        carImage: "volkswagen-golf.jpg",
        city: "Poznań",
        isAvailable: false,
        isElectric: false,
        isAutomatic: true,
      },
    });

    const car25 = await prisma.car.create({
      data: {
        name: "Audi A4",
        class: "Class S",
        seats: 4,
        capacity: "4-door",
        hasMileageLimit: true,
        mileageLimit: 1000,
        pricePerDay: 70,
        carCategory: "Category A",
        carImage: "audi-a4.jpg",
        city: "Poznań",
        isAvailable: true,
        isElectric: false,
        isAutomatic: false,
      },
    });

    const car26 = await prisma.car.create({
      data: {
        name: "Ford Falcon",
        class: "Class A",
        seats: 4,
        capacity: "4-door",
        hasMileageLimit: false,
        pricePerDay: 75,
        carCategory: "Category A",
        carImage: "ford-falcon.jpg",
        city: "Warszawa",
        isAvailable: true,
        isElectric: false,
        isAutomatic: true,
      },
    });

    const car27 = await prisma.car.create({
      data: {
        name: "Toyota HiLux",
        class: "Class B",
        seats: 6,
        capacity: "4-door",
        hasMileageLimit: true,
        mileageLimit: 1000,
        pricePerDay: 70,
        carCategory: "Category A",
        carImage: "toyota-hilux.jpg",
        city: "Poznań",
        isAvailable: true,
        isElectric: true,
        isAutomatic: false,
      },
    });

    const car28 = await prisma.car.create({
      data: {
        name: "Toyota Corolla",
        class: "Class A",
        seats: 4,
        capacity: "5-door",
        hasMileageLimit: false,
        pricePerDay: 80,
        carCategory: "Category B",
        carImage: "toyota-corolla.jpg",
        city: "Poznań",
        isAvailable: true,
        isElectric: true,
        isAutomatic: false,
      },
    });

    const car29 = await prisma.car.create({
      data: {
        name: "Volkswagen Golf",
        class: "Class B",
        seats: 5,
        capacity: "4-door",
        hasMileageLimit: true,
        mileageLimit: 500,
        pricePerDay: 170,
        carCategory: "Category D",
        carImage: "volkswagen-golf.jpg",
        city: "Poznań",
        isAvailable: false,
        isElectric: false,
        isAutomatic: true,
      },
    });

    const car30 = await prisma.car.create({
      data: {
        name: "Audi A4",
        class: "Class S",
        seats: 4,
        capacity: "4-door",
        hasMileageLimit: true,
        mileageLimit: 1000,
        pricePerDay: 70,
        carCategory: "Category A",
        carImage: "audi-a4.jpg",
        city: "Poznań",
        isAvailable: true,
        isElectric: false,
        isAutomatic: false,
      },
    });

    const car31 = await prisma.car.create({
      data: {
        name: "Ford Falcon",
        class: "Class A",
        seats: 4,
        capacity: "4-door",
        hasMileageLimit: false,
        pricePerDay: 75,
        carCategory: "Category A",
        carImage: "ford-falcon.jpg",
        city: "Warszawa",
        isAvailable: true,
        isElectric: false,
        isAutomatic: true,
      },
    });

    const car32 = await prisma.car.create({
      data: {
        name: "Toyota HiLux",
        class: "Class B",
        seats: 6,
        capacity: "4-door",
        hasMileageLimit: true,
        mileageLimit: 1000,
        pricePerDay: 70,
        carCategory: "Category A",
        carImage: "toyota-hilux.jpg",
        city: "Poznań",
        isAvailable: true,
        isElectric: true,
        isAutomatic: false,
      },
    });

    const car33 = await prisma.car.create({
      data: {
        name: "Toyota Corolla",
        class: "Class A",
        seats: 4,
        capacity: "5-door",
        hasMileageLimit: false,
        pricePerDay: 80,
        carCategory: "Category B",
        carImage: "toyota-corolla.jpg",
        city: "Poznań",
        isAvailable: true,
        isElectric: true,
        isAutomatic: false,
      },
    });

    const car34 = await prisma.car.create({
      data: {
        name: "Volkswagen Golf",
        class: "Class B",
        seats: 5,
        capacity: "4-door",
        hasMileageLimit: true,
        mileageLimit: 500,
        pricePerDay: 170,
        carCategory: "Category D",
        carImage: "volkswagen-golf.jpg",
        city: "Poznań",
        isAvailable: false,
        isElectric: false,
        isAutomatic: true,
      },
    });

    const car35 = await prisma.car.create({
      data: {
        name: "Audi A4",
        class: "Class S",
        seats: 4,
        capacity: "4-door",
        hasMileageLimit: true,
        mileageLimit: 1000,
        pricePerDay: 70,
        carCategory: "Category A",
        carImage: "audi-a4.jpg",
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
