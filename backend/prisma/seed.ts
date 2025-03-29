import { PrismaClient, UserRole } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.user.createMany({
    data: [
      {
        name: 'Admin',
        email: 'admin@gmail.com',
        password: 'admin123',
        role: UserRole.ADMIN,
      },
      {
        name: 'Josip',
        email: 'josip@gmail.com',
        password: 'josip123',
        role: UserRole.USER,
      },
      {
        name: 'Jelena',
        email: 'jelena@gmail.com',
        password: 'jelena123',
        role: UserRole.USER,
      },
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
