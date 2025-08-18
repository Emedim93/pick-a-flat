import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request) {
    const body = await request.json();
    const { startDate, endDate, userId } = body;

    const reservation = await prisma.reservation.create({
        data: { startDate, endDate, userId },
    });

    return NextResponse.json(reservation);
}

export async function GET() {
    const reservations = await prisma.reservation.findMany();
    return NextResponse.json(reservations);
}