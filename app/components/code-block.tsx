"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { useState } from "react";
import { FaCopy, FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function CodeBlock({ tabs = ["test"], collapsible = false }) {
  const [activeTab, setActiveTab] = useState(0);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleCopy = async (code) => {
    try {
      await navigator.clipboard.writeText(code);
      //   alert("Code copied to clipboard!"); // TODO Add animation
    } catch (err) {
      //   alert("Failed to copy code.");
    }
  };

  return (
    <div className="bg-component rounded-default shadow-default overflow-hidden w-[500px]">
      {tabs.length > 1 && (
        <div className="flex bg-component p-2 ">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-4 py-1 rounded-default ${
                activeTab === index
                  ? "bg-button text-text-dark"
                  : "text-text-light"
              }`}
            >
              {tab.label}
            </button>
          ))}
          {collapsible && (
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="w-full  text-text-light text-left px-4 py-2 flex items-center"
            >
              {isCollapsed ? <FaChevronDown /> : <FaChevronUp />}
            </button>
          )}
          {
            <button
              onClick={() => handleCopy(tabs[activeTab].code)}
              className="top-2 right-2 bg-component text-text-light px-2 py-1 rounded-default text-sm flex items-center gap-1"
            >
              <FaCopy /> Copy
            </button>
          }
        </div>
      )}

      {!isCollapsed && (
        <div className="relative">
          <SyntaxHighlighter
            language={tabs[activeTab].language || "javascript"}
            style={dark}
            showLineNumbers
          >
            {tabs[activeTab].code}
          </SyntaxHighlighter>
        </div>
      )}
    </div>
  );
}
