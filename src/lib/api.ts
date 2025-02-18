import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const API = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// add task
export const addTask = async (task: {
  date: string;
  title: string;
  description: string;
}) => {
  try {
    const response = await API.post("/addTask", task);
    return response.data;
  } catch (error) {
    console.error("Failed to add task!", error);
    throw error;
  }
};

// get tasks
const fetchTasks = async () => {
  const response = await axios.get("/api/get-tasks");
  return response.data;
};

export const useTasks = () => {
  return useQuery({ queryKey: ["tasks"], queryFn: fetchTasks });
};
