import React from "react";
import Giscus from "@giscus/react";
import { useTheme } from "../contexts/ThemeContext";

const Comments: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
      <Giscus
        id="comments"
        repo="b1ff/devloop.blog"
        repoId="MDEwOlJlcG9zaXRvcnkzNjU5NjE2ODE="
        category="Show and tell"
        categoryId="DIC_kwDOFdAh0c4CvHFX"
        mapping="pathname"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme={theme}
        lang="en"
        loading="lazy"
      />
    </div>
  );
};

export default Comments;
