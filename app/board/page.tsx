"use client";
import Content from "../components/Content";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import data from "../data/data.json";

export default function Home() {
  const [active, setActive] = useState<string | undefined>(undefined);

  useEffect(() => {
    // ketika pertama load langsung set active sesuai paramny
    const url = new URL(window.location.href);
    const idParam = url.searchParams.get("id");
    setActive(idParam || undefined);
  }, []);

  interface Task {
    label: string;
    progress: number;
  }

  interface TaskProp {
    column: string;
    tasks: Task[];
  }

  const getColumn: TaskProp[] = data
    .filter((item) => item.label === active)
    .flatMap((item) => item.columns || []);

  // console.log(getColumn);

  return (
    <>
      <Header title={active} />
      <Content TaskProps={getColumn || []} />
    </>
  );
}
