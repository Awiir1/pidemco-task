"use client";

import { Input, Button, Calendar, theme, Modal } from "antd";
import { useState } from "react";
import type { Dayjs } from "dayjs";
import TaskImg from "@/../public/task.jpg";
import { motion } from "framer-motion";
import { addTask } from "@/lib/api";
import PopUp from "@/components/PopUp/PopUp";
import { tasksState } from "@/lib/atomJotai";
import { useAtom } from "jotai";
import Image from "next/image";

// PopUp Props
interface PopUpProps {
  status: "success" | "error" | "info" | "warning" | "404" | "403" | "500";
  title: string;
  description: string;
  isOpen: boolean;
}

export default function page() {
  const { TextArea } = Input;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState<PopUpProps>({
    status: "info",
    title: "",
    description: "",
    isOpen: false,
  });

  // get tasks from atom state
  const [taskList, setTaskList] = useAtom(tasksState);

  // handle date select
  const handleDateSelect = (date: Dayjs) => {
    setSelectedDate(date.format("YYYY-MM-DD"));
  };

  // close pop up
  const closePopUp = () => {
    setModal((prev) => ({ ...prev, isOpen: false }));
  };

  const handleSaveTask = async () => {
    // Validate fields
    if (!title || !description || !selectedDate) {
      setModal({
        status: "warning",
        title: "Incomplete Fields",
        description: "Please fill in all fields!",
        isOpen: true,
      });
      return;
    }

    // set loading state
    setLoading(true);

    // api call to add task
    try {
      const newTask = {
        id: Date.now(), // ایجاد یک ID موقت
        date: selectedDate,
        title,
        description,
      };

      // add task to db firestore
      await addTask(newTask);

      // update task list in atom state
      setTaskList((prevTasks) => [...prevTasks, newTask]);

      // show success message
      setModal({
        status: "success",
        title: "Task Added",
        description: "Task has been added successfully",
        isOpen: true,
      });
      setTitle("");
      setDescription("");
      setSelectedDate(null);
    } catch (error) {
      console.error("Failed to add task!", error);
      setModal({
        status: "error",
        title: "Failed to add task",
        description: "Please try again later",
        isOpen: true,
      });
    } finally {
      setLoading(false);
    }
  };

  const { token } = theme.useToken();

  const wrapperStyle: React.CSSProperties = {
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  };

  return (
    <div className="mt-32 w-full flex gap-x-5">
      <PopUp {...modal} onClose={closePopUp} />
      <div className="bg-white w-1/3 h-fit rounded-3xl drop-shadow-xl p-8">
        <h1 className="text-center text-5xl drop-shadow-xl font-bold mb-5">
          Create Task
        </h1>
        <Input
          placeholder="Task Topic"
          className="text-xl w-full"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextArea
          value={description}
          className="text-xl my-3"
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Task description"
          autoSize={{ minRows: 3, maxRows: 5 }}
        />
        <div style={wrapperStyle} className="w-full">
          <Calendar
            className="text-lg"
            fullscreen={false}
            onSelect={handleDateSelect}
          />
        </div>
        <Button
          className="my-4 text-2xl px-14 py-6"
          type="primary"
          loading={loading}
          onClick={handleSaveTask}
        >
          Save Task
        </Button>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-2/3 h-5/6 mr-5"
      >
        <Image
          className="w-full h-full drop-shadow-xl rounded-3xl object-cover"
          src={TaskImg.src}
          alt="Task Image"
        />
      </motion.div>
    </div>
  );
}
