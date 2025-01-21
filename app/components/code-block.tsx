"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useState } from "react";
import { FaCopy, FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function CodeBlock({ tabs = ["test"], collapsible = false }) {
  const [activeTab, setActiveTab] = useState(0);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleCopy = async (code) => {
    try {
      await navigator.clipboard.writeText(code);
      alert("Code copied to clipboard!");
    } catch (err) {
      alert("Failed to copy code.");
    }
  };

  return (
    <div className="bg-gray-900 rounded-md shadow-lg overflow-hidden">
      {tabs.length > 1 && (
        <div className="flex bg-gray-800 p-2">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-4 py-1 rounded ${
                activeTab === index ? "bg-gray-700 text-white" : "text-gray-400"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      )}

      {collapsible && (
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="w-full bg-gray-800 text-gray-400 text-left px-4 py-2 flex items-center justify-between"
        >
          <span>Code</span>
          {isCollapsed ? <FaChevronDown /> : <FaChevronUp />}
        </button>
      )}

      {!isCollapsed && (
        <div className="relative">
          <button
            onClick={() => handleCopy(tabs[activeTab].code)}
            className="absolute top-2 right-2 bg-gray-700 text-white px-2 py-1 rounded text-sm flex items-center gap-1"
          >
            <FaCopy /> Copy
          </button>

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
