import { NextResponse } from "next/server";
import { db } from "@/lib/firebaseAdmin";

export async function POST(req: Request) {
  try {
    const { date, title, description } = await req.json();

    if (!date || !title || !description) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    const newTask = {
      date,
      title,
      description,
      createdAt: new Date().toISOString(),
    };

    const docRef = await db.collection("tasks").add(newTask);

    return NextResponse.json({ id: docRef.id, ...newTask }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to add task" }, { status: 500 });
  }
}
