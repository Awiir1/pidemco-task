"use client";

import { Input, Button, Calendar, theme, CalendarProps } from "antd";
import { useState } from "react";
import type { Dayjs } from "dayjs";
import TaskImg from "@/../public/task.jpg";
import { motion } from "framer-motion";

const onPanelChange = (value: Dayjs, mode: CalendarProps<Dayjs>["mode"]) => {
  console.log(value.format("YYYY-MM-DD"), mode);
};

export default function page() {
  const [value, setValue] = useState("");
  const [loadings, setLoadings] = useState<boolean[]>([]);
  const { TextArea } = Input;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleDateSelect = (date: Dayjs) => {
    setSelectedDate(date.format("YYYY-MM-DD"));
  };

  const handleSaveTask = async () => {
    if (!title || !description || !selectedDate) {
      console.error("Please fill in all fields!");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/api/addTask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, description, date: selectedDate }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Task added successfully!");
        setTitle("");
        setDescription("");
        setSelectedDate(null);
      } else {
        console.error(data.error || "Something went wrong!");
      }
    } catch (error) {
      console.error("Failed to add task!");
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
      <div className="bg-white w-1/3 h-fit rounded-3xl drop-shadow-xl p-8">
        <h1 className="text-center text-5xl drop-shadow-xl font-bold mb-5">
          Create Task
        </h1>
        <Input
          placeholder="Task Topic"
          className="text-xl w-full"
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
            onPanelChange={onPanelChange}
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
        <img
          className="w-full h-full drop-shadow-xl rounded-3xl object-cover"
          src={TaskImg.src}
          alt=""
        />
      </motion.div>
    </div>
  );
}
