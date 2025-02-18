import { NextResponse } from "next/server";
import { db } from "@/lib/firebaseAdmin";

export async function POST(req: Request) {
  try {
    // get request body
    const { date, title, description } = await req.json();

    // validate fields
    if (!date || !title || !description) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    // set new task
    const newTask = {
      date,
      title,
      description,
      createdAt: new Date().toString(),
    };

    // add task to firestore
    const docRef = await db.collection("tasks").add(newTask);

    // return response
    return NextResponse.json({ id: docRef.id, ...newTask }, { status: 201 });
  } catch (error) {
    // return error response
    return NextResponse.json({ error: "Failed to add task" }, { status: 500 });
  }
}
