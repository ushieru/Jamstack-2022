// globals.d.ts
import { PrismaClient } from '@prisma/client'

declare module global {
    let prisma: PrismaClient;
}

let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
    prisma = new PrismaClient()
} else {
    if (!global.prisma) {
        global.prisma = new PrismaClient({ log: ['info', 'query'] })
    }
    prisma = global.prisma
}

export default prisma;