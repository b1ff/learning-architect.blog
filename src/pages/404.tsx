import * as React from "react";
import { Link } from "gatsby";
import { WithSidebarLayout } from "../components/WithSidebarLayout";

// markup
const NotFoundPage = () => {
  return (
    <WithSidebarLayout>
      <title>Not found</title>
      <div className="text-center py-16">
        <h1 className="headline mb-8">Page not found</h1>
        <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg">
          Sorry{" "}
          <span role="img" aria-label="Pensive emoji">
            😔
          </span>{" "}
          we couldn't find what you were looking for.
        </p>
        <Link to="/" className="link-default text-lg font-medium">
          Go home
        </Link>
      </div>
    </WithSidebarLayout>
  );
};

export default NotFoundPage;
