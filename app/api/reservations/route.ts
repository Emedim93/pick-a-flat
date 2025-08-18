// app/api/reservations/route.ts
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json();
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
