import React from "react";
import { ChatBubble } from "./ChatBubble";
import { Button } from "./Button";
import { mockRespond } from "../mock/respond";
import { useSession } from "../store/session";

type Item = { id: string; role: "user" | "assistant"; text: string };

export const ChatArea: React.FC<{
  prompt: string;
  onResetPrompt: () => void;
}> = ({ prompt, onResetPrompt }) => {
  const model = useSession((s) => s.model);
  const params = useSession((s) => s.params);
  const [items, setItems] = React.useState<Item[]>([]);
  const [loading, setLoading] = React.useState(false);

  const ask = async () => {
    if (!prompt.trim()) return;
    const u: Item = {
      id: Math.random().toString(36).slice(2),
      role: "user",
      text: prompt,
    };
    setItems((prev) => [...prev, u]);
    onResetPrompt();
    setLoading(true);

    try {
      const res = await mockRespond({ model, prompt, params });

      const assistantText = res?.choices?.[0]?.text ?? "(No response)";
      const a: Item = {
        id: res?.id ?? Math.random().toString(36).slice(2),
        role: "assistant",
        text: assistantText,
      };

      setItems((prev) => [...prev, a]);
    } catch (error) {
      console.error("Error in ask():", error);
    } finally {
      setLoading(false);
    }
  };

  const copy = async (text: string) => {
    await navigator.clipboard.writeText(text);
    alert("Copied to clipboard");
  };

  const downloadJSON = (id: string) => {
    const item = items.find((i) => i.id === id);
    if (!item) return;
    const blob = new Blob([JSON.stringify(item, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `message-${id}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-4" aria-live="polite">
      <div className="space-y-3">
        {items.map((i) => (
          <div key={i.id} className="group">
            <ChatBubble role={i.role} text={i.text} />
            {i.role === "assistant" && (
              <div className="mt-1 opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
                <Button variant="secondary" onClick={() => copy(i.text)}>
                  Copy
                </Button>
                <Button variant="ghost" onClick={() => downloadJSON(i.id)}>
                  Download JSON
                </Button>
              </div>
            )}
          </div>
        ))}
        {loading && (
          <div className="text-sm text-zinc-500">Thinking… (mock)</div>
        )}
      </div>
      <div className="flex gap-2">
        <Button onClick={ask} aria-label="Send prompt">
          Send
        </Button>
        <Button
          variant="secondary"
          onClick={() => setItems([])}
          aria-label="Clear chat"
        >
          Clear
        </Button>
      </div>
    </div>
  );
};
