"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion";
import { cn } from "@workspace/ui/lib/utils";
import type * as React from "react";

import {
  CodeBlock,
  CodeBlockActions,
  CodeBlockContent,
  CodeBlockCopyButton,
  CodeBlockFilename,
  CodeBlockHeader,
  CodeBlockTitle,
} from "./ai-elements/code-block";
import {
  FileTree,
  FileTreeFile,
  FileTreeFolder,
} from "./ai-elements/file-tree";
import {
  Message,
  MessageActions,
  MessageContent,
  MessageResponse,
} from "./ai-elements/message";
import {
  PromptInput,
  PromptInputButton,
  PromptInputFooter,
  PromptInputSubmit,
  PromptInputTextarea,
  PromptInputTools,
} from "./ai-elements/prompt-input";
import {
  Reasoning,
  ReasoningContent,
  ReasoningTrigger,
} from "./ai-elements/reasoning";
import { Shimmer } from "./ai-elements/shimmer";
import {
  Source,
  Sources,
  SourcesContent,
  SourcesTrigger,
} from "./ai-elements/sources";
import { Suggestion, Suggestions } from "./ai-elements/suggestion";
import { Terminal } from "./ai-elements/terminal";
import {
  Tool,
  ToolContent,
  ToolHeader,
  ToolInput,
  ToolOutput,
} from "./ai-elements/tool";

// ── NAV ─────────────────────────────────────────────────────────────────────

const NAV_ITEMS = [
  { id: "messages", label: "Messages" },
  { id: "input", label: "Prompt Input" },
  { id: "code", label: "Code & Terminal" },
  { id: "reasoning", label: "Reasoning" },
  { id: "tools", label: "Tool Calls" },
  { id: "sources", label: "Sources" },
  { id: "helpers", label: "Helpers" },
];

// ── SHARED CARD & SECTION ────────────────────────────────────────────────────

function ComponentCard({
  name,
  preview,
  usage,
  className,
  previewClassName,
}: {
  name: string;
  preview: React.ReactNode;
  usage: string;
  className?: string;
  previewClassName?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col overflow-hidden rounded-xl border bg-background",
        className,
      )}
    >
      <div className="border-b px-4 py-3">
        <h3 className="text-sm font-medium">{name}</h3>
      </div>
      <div
        className={cn(
          "flex flex-1 items-start justify-start p-6 bg-muted/20 min-h-36",
          previewClassName,
        )}
      >
        {preview}
      </div>
      <Accordion className="border-t">
        <AccordionItem value="code" className="border-none">
          <AccordionTrigger className="px-4 py-2.5 text-xs text-muted-foreground hover:no-underline [&>svg]:size-3.5">
            View code
          </AccordionTrigger>
          <AccordionContent>
            <pre className="mx-4 mb-3 overflow-x-auto rounded-lg bg-muted px-3 py-3 text-xs font-mono leading-relaxed">
              <code>{usage}</code>
            </pre>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

function ComponentSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-4 space-y-4">
      <h2 className="text-lg font-semibold tracking-tight">{title}</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {children}
      </div>
    </section>
  );
}

// ── DEMO DATA ────────────────────────────────────────────────────────────────

const PYTHON_CODE = `def fibonacci(n: int) -> list[int]:
    """Return the first n Fibonacci numbers."""
    sequence = [0, 1]
    for _ in range(2, n):
        sequence.append(sequence[-1] + sequence[-2])
    return sequence[:n]

print(fibonacci(10))`;

const TS_CODE = `import { useChat } from "ai/react";

export function Chat() {
  const { messages, input, handleSubmit, setInput } = useChat();

  return (
    <form onSubmit={handleSubmit}>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button type="submit">Send</button>
    </form>
  );
}`;

const TERMINAL_OUTPUT = `$ npm run build

> my-app@1.0.0 build
> next build

   ▲ Next.js 16.1.6

   Creating an optimized production build ...
 ✓ Compiled successfully
 ✓ Linting and checking validity of types
 ✓ Collecting page data
 ✓ Generating static pages (4/4)
 ✓ Finalizing page optimization

Route (app)                    Size    First Load JS
┌ ○ /                         2.4 kB     102 kB
├ ○ /design                   4.1 kB     104 kB
└ ○ /design/ai                3.9 kB     104 kB

○  (Static)  prerendered as static content`;

const REASONING_TEXT = `The user wants to know the capital of France.

France is a country in Western Europe. Its capital city is Paris, which has been the capital since the 10th century. Paris is also the largest city in France with a population of over 2 million in the city proper.

Answer: Paris`;

const TOOL_INPUT = { query: "React hooks best practices 2025", limit: 5 };
const TOOL_OUTPUT = {
  results: [
    {
      title: "React Docs: Built-in Hooks",
      url: "https://react.dev/reference/react",
    },
    {
      title: "useEffect patterns",
      url: "https://react.dev/learn/synchronizing-with-effects",
    },
  ],
  total: 2,
};

// ── MAIN COMPONENT ───────────────────────────────────────────────────────────

export function AiDesignGuide() {
  return (
    <div className="mx-auto max-w-5xl space-y-12 px-4 py-10">
      <header>
        <h1 className="text-3xl font-bold tracking-tight">AI Design</h1>
        <p className="mt-2 text-muted-foreground">
          AI chat interface components from the ai-elements library.
        </p>
      </header>

      <nav aria-label="Jump to section">
        <ul className="m-0 flex list-none flex-wrap gap-2 p-0">
          {NAV_ITEMS.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className="rounded-full border px-3 py-1 text-sm font-medium transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* ── MESSAGES ── */}
      <ComponentSection id="messages" title="Messages">
        <ComponentCard
          name="User Message"
          preview={
            <div className="w-full">
              <Message from="user">
                <MessageContent>
                  How do I implement a binary search tree in TypeScript?
                </MessageContent>
              </Message>
            </div>
          }
          usage={`<Message from="user">
  <MessageContent>
    How do I implement a BST in TypeScript?
  </MessageContent>
</Message>`}
        />
        <ComponentCard
          name="Assistant Message"
          className="sm:col-span-2"
          preview={
            <div className="w-full">
              <Message from="assistant">
                <MessageContent>
                  <MessageResponse>
                    {
                      "A **binary search tree** (BST) is a node-based data structure where each node has at most two children.\n\n- **Left** child is always **less than** the parent\n- **Right** child is always **greater than** the parent\n\nThis property enables `O(log n)` average search, insert, and delete operations."
                    }
                  </MessageResponse>
                </MessageContent>
                <MessageActions />
              </Message>
            </div>
          }
          usage={`<Message from="assistant">
  <MessageContent>
    <MessageResponse>
      {"A **binary search tree** (BST) enables O(log n) operations."}
    </MessageResponse>
  </MessageContent>
</Message>`}
        />
      </ComponentSection>

      {/* ── PROMPT INPUT ── */}
      <ComponentSection id="input" title="Prompt Input">
        <ComponentCard
          name="Basic Input"
          className="sm:col-span-3"
          previewClassName="items-center justify-center"
          preview={
            <div className="w-full max-w-xl">
              <PromptInput onSubmit={() => {}}>
                <PromptInputTextarea placeholder="Ask anything..." />
                <PromptInputFooter>
                  <PromptInputTools />
                  <PromptInputSubmit />
                </PromptInputFooter>
              </PromptInput>
            </div>
          }
          usage={`<PromptInput onSubmit={({ text, files }) => handleSubmit(text, files)}>
  <PromptInputTextarea placeholder="Ask anything..." />
  <PromptInputFooter>
    <PromptInputTools />
    <PromptInputSubmit />
  </PromptInputFooter>
</PromptInput>`}
        />
      </ComponentSection>

      {/* ── CODE & TERMINAL ── */}
      <ComponentSection id="code" title="Code & Terminal">
        <ComponentCard
          name="Code Block"
          className="sm:col-span-2"
          preview={
            <div className="w-full">
              <CodeBlock code={PYTHON_CODE} language="python">
                <CodeBlockHeader>
                  <CodeBlockTitle>
                    <CodeBlockFilename>fibonacci.py</CodeBlockFilename>
                  </CodeBlockTitle>
                  <CodeBlockActions>
                    <CodeBlockCopyButton />
                  </CodeBlockActions>
                </CodeBlockHeader>
              </CodeBlock>
            </div>
          }
          usage={`<CodeBlock code={code} language="python">
  <CodeBlockHeader>
    <CodeBlockTitle>
      <CodeBlockFilename>fibonacci.py</CodeBlockFilename>
    </CodeBlockTitle>
    <CodeBlockActions>
      <CodeBlockCopyButton />
    </CodeBlockActions>
  </CodeBlockHeader>
</CodeBlock>`}
        />
        <ComponentCard
          name="Code (line numbers)"
          preview={
            <div className="w-full">
              <CodeBlock code={TS_CODE} language="typescript" showLineNumbers />
            </div>
          }
          usage={`<CodeBlock
  code={tsCode}
  language="typescript"
  showLineNumbers
/>`}
        />
        <ComponentCard
          name="Terminal"
          className="sm:col-span-3"
          preview={
            <div className="w-full">
              <Terminal output={TERMINAL_OUTPUT} />
            </div>
          }
          usage={`<Terminal output={buildOutput} />

// With streaming:
<Terminal output={liveOutput} isStreaming />`}
        />
      </ComponentSection>

      {/* ── REASONING ── */}
      <ComponentSection id="reasoning" title="Reasoning">
        <ComponentCard
          name="Thinking Block"
          className="sm:col-span-2"
          preview={
            <div className="w-full">
              <Reasoning defaultOpen>
                <ReasoningTrigger />
                <ReasoningContent>{REASONING_TEXT}</ReasoningContent>
              </Reasoning>
            </div>
          }
          usage={`<Reasoning defaultOpen>
  <ReasoningTrigger />
  <ReasoningContent>{thinkingText}</ReasoningContent>
</Reasoning>`}
        />
        <ComponentCard
          name="Streaming (Shimmer)"
          preview={
            <div className="w-full">
              <Reasoning isStreaming defaultOpen>
                <ReasoningTrigger />
                <ReasoningContent>
                  {"Analyzing the question to determine the best approach..."}
                </ReasoningContent>
              </Reasoning>
            </div>
          }
          usage={`<Reasoning isStreaming>
  <ReasoningTrigger />
  <ReasoningContent>
    {streamingText}
  </ReasoningContent>
</Reasoning>`}
        />
      </ComponentSection>

      {/* ── TOOLS ── */}
      <ComponentSection id="tools" title="Tool Calls">
        <ComponentCard
          name="Tool — Completed"
          className="sm:col-span-2"
          preview={
            <div className="w-full">
              <Tool defaultOpen>
                <ToolHeader
                  type="dynamic-tool"
                  toolName="search_web"
                  state="output-available"
                />
                <ToolContent>
                  <ToolInput input={TOOL_INPUT} />
                  <ToolOutput output={TOOL_OUTPUT} errorText={undefined} />
                </ToolContent>
              </Tool>
            </div>
          }
          usage={`<Tool defaultOpen>
  <ToolHeader
    type="dynamic-tool"
    toolName="search_web"
    state="output-available"
  />
  <ToolContent>
    <ToolInput input={{ query: "...", limit: 5 }} />
    <ToolOutput output={results} errorText={undefined} />
  </ToolContent>
</Tool>`}
        />
        <ComponentCard
          name="Tool — Running"
          preview={
            <div className="w-full">
              <Tool>
                <ToolHeader
                  type="dynamic-tool"
                  toolName="read_file"
                  state="input-available"
                />
              </Tool>
            </div>
          }
          usage={`<Tool>
  <ToolHeader
    type="dynamic-tool"
    toolName="read_file"
    state="input-available"
  />
</Tool>`}
        />
      </ComponentSection>

      {/* ── SOURCES ── */}
      <ComponentSection id="sources" title="Sources">
        <ComponentCard
          name="Source Citations"
          preview={
            <Sources>
              <SourcesTrigger count={3} />
              <SourcesContent>
                <Source href="#" title="React Documentation" />
                <Source href="#" title="TypeScript Handbook" />
                <Source href="#" title="MDN Web Docs" />
              </SourcesContent>
            </Sources>
          }
          usage={`<Sources defaultOpen>
  <SourcesTrigger count={3} />
  <SourcesContent>
    <Source href={url} title="React Documentation" />
    <Source href={url} title="TypeScript Handbook" />
  </SourcesContent>
</Sources>`}
        />
        <ComponentCard
          name="File Tree"
          preview={
            <FileTree
              defaultExpanded={new Set(["src", "src/components"])}
              className="w-full text-sm"
            >
              <FileTreeFolder name="src" path="src">
                <FileTreeFolder name="components" path="src/components">
                  <FileTreeFile
                    name="Button.tsx"
                    path="src/components/Button.tsx"
                  />
                  <FileTreeFile
                    name="Input.tsx"
                    path="src/components/Input.tsx"
                  />
                </FileTreeFolder>
                <FileTreeFile name="App.tsx" path="src/App.tsx" />
                <FileTreeFile name="main.tsx" path="src/main.tsx" />
              </FileTreeFolder>
              <FileTreeFile name="package.json" path="package.json" />
            </FileTree>
          }
          usage={`<FileTree defaultExpanded={new Set(["src"])}>
  <FileTreeFolder name="src" path="src">
    <FileTreeFile name="App.tsx" path="src/App.tsx" />
  </FileTreeFolder>
</FileTree>`}
        />
      </ComponentSection>

      {/* ── HELPERS ── */}
      <ComponentSection id="helpers" title="Helpers">
        <ComponentCard
          name="Shimmer"
          previewClassName="items-center justify-center"
          preview={
            <div className="flex flex-col gap-3">
              <Shimmer duration={2}>Thinking about your question...</Shimmer>
              <Shimmer duration={1.5} spread={3}>
                Generating a response...
              </Shimmer>
            </div>
          }
          usage={"<Shimmer duration={2}>Thinking...</Shimmer>"}
        />
        <ComponentCard
          name="Suggestions"
          previewClassName="items-center justify-center"
          preview={
            <Suggestions>
              <Suggestion suggestion="Explain this code" />
              <Suggestion suggestion="Write unit tests" />
              <Suggestion suggestion="Refactor this" />
              <Suggestion suggestion="Add error handling" />
            </Suggestions>
          }
          usage={`<Suggestions>
  <Suggestion
    suggestion="Explain this code"
    onClick={(s) => setInput(s)}
  />
  <Suggestion suggestion="Write unit tests" />
</Suggestions>`}
        />
      </ComponentSection>
    </div>
  );
}
