import React from "react";
import { ThemeToggle } from "./ThemeToggle";

interface SidebarControlsProps {
  isCollapsed: boolean;
  isMobile: boolean;
  onToggleCollapse: () => void;
}

export const SidebarControls: React.FC<SidebarControlsProps> = ({
  isCollapsed,
  isMobile,
  onToggleCollapse,
}) => {
  return (
    <div
      className={`flex items-center mb-4 pb-2 border-b border-gray-200 dark:border-gray-700 ${isCollapsed && !isMobile ? "justify-center" : "justify-between"}`}
    >
      {/* Theme toggle first (left side) - only show when not collapsed on desktop, or always on mobile */}
      {(!isCollapsed || isMobile) && <ThemeToggle />}

      <button
        onClick={onToggleCollapse}
        className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
        aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        title={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
      >
        {isCollapsed ? (
          // Expand icon (chevron right)
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        ) : (
          // Collapse icon (chevron left)
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        )}
      </button>
    </div>
  );
};
