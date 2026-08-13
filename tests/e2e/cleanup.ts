import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function cleanup() {
  const deleted = await prisma.contactMessage.deleteMany({
    where: {
      OR: [
        { email: { contains: 'e2e-' } },
        { email: { contains: 'ratetest' } },
        { name: { contains: 'DELETEME' } },
        { name: { contains: 'Test E2E' } },
      ],
    },
  });
  console.log(`Limpiados: ${deleted.count} mensajes de test`);
  await prisma.$disconnect();
}

cleanup();
