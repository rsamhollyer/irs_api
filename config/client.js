/* eslint-disable import/no-mutable-exports */
import { PrismaClient } from '.prisma/client';

// eslint-disable-next-line prefer-const
let prisma = new PrismaClient();

export default prisma;
