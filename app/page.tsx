import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";

export default function Home() {
  return (
    <div className="flex font-[family-name:var(--font-plus-jakarta)]">
      <Sidebar
        Links={[
          { label: "Platform Launch", active: true },
          { label: "Marketing Plan", active: false },
          { label: "Roadmap", active: false },
        ]}
      />
      <div className="w-screen">
        <Header />
        <Content />
      </div>
    </div>
  );
}
