"use client";
import Content from "../components/Content";
import Header from "../components/Header";
import { useEffect, useState } from "react";

export default function Home() {
  const [active, setActive] = useState<string | undefined>(undefined);

  useEffect(() => {
    // ketika pertama load langsung set active sesuai paramny
    const url = new URL(window.location.href);
    const idParam = url.searchParams.get("id");
    setActive(idParam || undefined);
  }, []);
  return (
    <>
      <Header title={active} />
      <Content
        TaskProps={[
          {
            column: "to do",
            tasks: [
              { label: "Build UI for onboarding flow", progress: 2 },
              { label: "Build UI for onboarding flow", progress: 1 },
              { label: "Build UI for onboarding flow", progress: 3 },
            ],
          },
        ]}
      />
    </>
  );
}
