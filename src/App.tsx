import React from "react";
import { initTheme, useThemeStore } from "./store/theme";
import { ModelSelector } from "./components/ModelSelector";
import { PromptEditor } from "./components/PromptEditor";
import { ParametersPanel } from "./components/ParametersPanel";
import { ChatArea } from "./components/ChatArea";
import { Button } from "./components/Button";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

export const App: React.FC = () => {
  React.useEffect(() => {
    initTheme();
  }, []);
  const toggle = useThemeStore((s) => s.toggle);
  const [prompt, setPrompt] = React.useState("");

  const openStorybook = () => {
    window.open("http://localhost:6006", "_blank");
  };

  return (
    <div className="min-h-screen text-zinc-900 dark:text-zinc-100">
      <header className="sticky top-0 z-40 bg-white/70 dark:bg-zinc-950/70 backdrop-blur border-b border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="text-lg font-semibold">Interface Prototype</div>
          <Button
            variant="secondary"
            onClick={toggle}
            aria-label="Toggle theme"
          >
            <Sun className="w-4 h-4 hidden dark:inline" />
            <Moon className="w-4 h-4 inline dark:hidden" />
            <span className="ml-2">Theme</span>
          </Button>
          <Button onClick={openStorybook}>Go to Storybook</Button>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-6 grid gap-6 md:grid-cols-3">
        <motion.aside
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:col-span-1 space-y-6"
        >
          <section className="rounded-2xl p-4 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-soft">
            <h2 className="font-semibold mb-3">Model</h2>
            <ModelSelector />
          </section>
          <section className="rounded-2xl p-4 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-soft">
            <h2 className="font-semibold mb-3">Parameters</h2>
            <ParametersPanel />
          </section>
        </motion.aside>

        <motion.section
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:col-span-2 space-y-6"
        >
          <section className="rounded-2xl p-4 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-soft">
            <h2 className="font-semibold mb-3">Prompt</h2>
            <PromptEditor value={prompt} setValue={setPrompt} />
          </section>
          <section className="rounded-2xl p-4 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-soft">
            <h2 className="font-semibold mb-3">Chat</h2>
            <ChatArea prompt={prompt} onResetPrompt={() => setPrompt("")} />
          </section>
        </motion.section>
      </main>

      <footer className="mx-auto max-w-6xl px-4 py-8 text-sm text-zinc-500">
        Frontend-only prototype. No real API calls.
      </footer>
    </div>
  );
};
