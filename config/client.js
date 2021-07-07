/* eslint-disable import/no-mutable-exports */
const { PrismaClient } = require('@prisma/client');

// eslint-disable-next-line prefer-const
let prisma = new PrismaClient();

export default prisma;
