"use client";

import SyntaxHighlighter from "react-syntax-highlighter";
import { gruvboxDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { useState } from "react";
import { FaCopy, FaChevronDown, FaChevronUp } from "react-icons/fa";

interface Tab {
  label: string;
  language: string;
  code: string;
}

interface CodeBlockProps {
  tabs: Tab[];
  collapsible?: boolean;
}

export default function CodeBlock({ tabs, collapsible = false }: CodeBlockProps) {
  const [activeTab, setActiveTab] = useState(0);
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Sub-components
  const CollapseButton = () => (
    <button
      onClick={() => setIsCollapsed(!isCollapsed)}
      className="w-full text-text-light text-left px-4 py-2 flex items-center"
      aria-label={isCollapsed ? "Expand code block" : "Collapse code block"}
    >
      {isCollapsed ? <FaChevronUp /> : <FaChevronDown />}
    </button>
  );

  const Tabs = () => (
    <div className="flex">
      {tabs.map((tab, index) => (
        <button
          key={index}
          onClick={() => setActiveTab(index)}
          className={`hover:ring-1 mx-1 px-2 py-1 rounded-default ${
            activeTab === index ? "bg-button text-text-dark" : "text-text-light"
          }`}
          aria-label={`Switch to ${tab.label} tab`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );

  const CopyButton = () => (
    <button
      onClick={() => navigator.clipboard.writeText(tabs[activeTab]?.code || "")}
      className="top-2 right-2 bg-component text-text-light px-2 py-1 rounded-default text-sm flex items-center gap-1"
      title="Copy code to clipboard"
    >
      <FaCopy /> Copy
    </button>
  );

  // Main Render
  return (
    <div className="overflow-x-scroll">
      {tabs.length > 0 ? (
        <>
          {tabs.length > 1 && (
            <div className="flex bg-component rounded-default justify-between p-2">
              <Tabs />
              <div className="flex gap-2">
                <CopyButton />
                {collapsible && <CollapseButton />}
              </div>
            </div>
          )}

          {!isCollapsed && (
            <SyntaxHighlighter
              className="rounded-default mt-2"
              language={tabs[activeTab]?.language || "javascript"}
              style={gruvboxDark}
              showLineNumbers
            >
              {tabs[activeTab]?.code || ""}
            </SyntaxHighlighter>
          )}
        </>
      ) : (
        <p className="p-4 text-text-light">No code snippets available.</p>
      )}
    </div>
  );
}
