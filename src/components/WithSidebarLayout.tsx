import * as React from "react";
import { useState, useEffect } from "react";
import { RecentPublications } from "./RecentPublications";
import { About } from "./About";
import { Heading } from "./Heading";
import { SidebarControls } from "./SidebarControls";

export function WithSidebarLayout({
  children,
  additionalKeywords = undefined,
}) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768; // md breakpoint
      setIsMobile(mobile);
      // On mobile, sidebar starts collapsed
      if (mobile) {
        setIsSidebarCollapsed(true);
      } else {
        // On desktop, keep current state or default to expanded
        setIsSidebarCollapsed(false);
      }
    };

    // Check on mount
    checkMobile();

    // Listen for resize
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div className="container max-w-5xl mx-auto px-4 sm:px-6 xl:max-w-7xl xl:px-0 py-16">
      <Heading additionalKeywords={additionalKeywords} />

      <div className="relative">
        {/* Mobile header with blog name and hamburger button - visible on mobile when collapsed */}
        {isMobile && isSidebarCollapsed && (
          <div className="mb-4 flex justify-between items-center">
            <div className="text-xl font-semibold text-gray-900 dark:text-white">
              DevLoop Blog
            </div>
            <button
              onClick={toggleSidebar}
              className="p-3 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200 md:hidden"
              aria-label="Open sidebar"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-12 shadow-lg bg-white dark:bg-gray-800">
          {/* Sidebar */}
          <div
            className={`
						${
              isMobile
                ? isSidebarCollapsed
                  ? "hidden"
                  : "fixed inset-0 z-50 bg-white dark:bg-gray-800 p-6"
                : isSidebarCollapsed
                  ? "md:col-span-1 col-span-3"
                  : "md:col-span-3 col-span-3"
            }
						${!isMobile ? "p-6 border-r dark:border-gray-700" : ""}
						transition-all duration-300 overflow-y-auto
					`}
          >
            <div className={isMobile ? "" : "sticky top-0"}>
              <SidebarControls
                isCollapsed={isSidebarCollapsed}
                isMobile={isMobile}
                onToggleCollapse={toggleSidebar}
              />

              {/* Content is always visible on mobile when sidebar is open */}
              {(!isSidebarCollapsed || isMobile) && (
                <>
                  <About />
                  <RecentPublications />
                </>
              )}
            </div>
          </div>

          {/* Mobile overlay when sidebar is open */}
          {isMobile && !isSidebarCollapsed && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={toggleSidebar}
            />
          )}

          {/* Main content */}
          <main
            className={`
						${!isMobile && isSidebarCollapsed ? "md:col-span-11" : "md:col-span-9"}
						${isMobile ? "col-span-1" : isSidebarCollapsed ? "col-span-11" : "col-span-9"}
						py-6 pl-9 pr-10 bg-white dark:bg-gray-800
						transition-all duration-300
					`}
          >
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
