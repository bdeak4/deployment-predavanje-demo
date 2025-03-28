import { PrismaClient, UserRole } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.user.createMany({
    data: [
      {
        email: 'admin@gmail.com',
        password: 'admin123',
        role: UserRole.ADMIN,
      },
      {
        email: 'josip@gmail.com',
        password: 'josip123',
        role: UserRole.USER,
      },
      {
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
