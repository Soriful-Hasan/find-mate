import React from "react";

const AskQuestion = ({ theme }) => {
  const bgClass =
    theme === "light"
      ? "bg-base-100 border-base-300"
      : "bg-[#191E24] border-gray-700";
  const titleClass = theme === "light" ? "text-gray-800" : "text-white";
  const contentClass = theme === "light" ? "text-gray-600" : "text-gray-300";
  const containerTitleClass =
    theme === "light" ? "text-gray-800" : "text-white";
  const containerTextClass =
    theme === "light" ? "text-gray-600" : "text-gray-300";

  return (
    <div>
      <div>
        <div className={`text-center mt-20 mb-10`}>
          <h1 className={`text-2xl font-bold ${containerTitleClass}`}>
            Frequently Ask Question
          </h1>
          <p className={`${containerTextClass} mt-2`}>
            Here are answers to some of the most common questions from our
            users. <br />
            Still have questions? Feel free to contact us anytime!
          </p>
        </div>

        <div className="space-y-4">
          <div
            tabIndex={0}
            className={`collapse collapse-plus rounded-box border ${bgClass}`}
          >
            <div className={`collapse-title font-semibold ${titleClass}`}>
              How do I find a suitable roommate on this site?
            </div>
            <div className={`collapse-content text-sm ${contentClass}`}>
              You can explore listings based on your preferred location and
              budget.
              <br />
              Use the search and filter tools for better results.
              <br />
              Verified users post regularly, so keep checking back.
              <br />
              All posts are updated in real-time from our database.
            </div>
          </div>

          <div
            tabIndex={0}
            className={`collapse collapse-plus rounded-box border ${bgClass}`}
          >
            <div className={`collapse-title font-semibold ${titleClass}`}>
              Do I need an account to contact someone or post a room?
            </div>
            <div className={`collapse-content text-sm ${contentClass}`}>
              Yes, you must be logged in to access full features.
              <br />
              Without an account, you can only browse listings.
              <br />
              The signup is quick and completely free.
              <br />
              After login, you can post or contact instantly.
            </div>
          </div>

          <div
            tabIndex={0}
            className={`collapse collapse-plus rounded-box border ${bgClass}`}
          >
            <div className={`collapse-title font-semibold ${titleClass}`}>
              How can I manage my posts after submitting them?
            </div>
            <div className={`collapse-content text-sm ${contentClass}`}>
              Go to your dashboard after logging in.
              <br />
              There you can edit, update, or delete your posts.
              <br />
              It helps you keep your listing up to date.
              <br />
              Changes take effect immediately across the site.
            </div>
          </div>

          <div
            tabIndex={0}
            className={`collapse collapse-plus rounded-box border ${bgClass}`}
          >
            <div className={`collapse-title font-semibold ${titleClass}`}>
              Is my personal information safe on this platform?
            </div>
            <div className={`collapse-content text-sm ${contentClass}`}>
              We prioritize user safety and data security.
              <br />
              Your contact info is only shared with logged-in users.
              <br />
              Suspicious activity can be reported from user profiles.
              <br />
              We review all reports and take action promptly.
            </div>
          </div>

          <div
            tabIndex={0}
            className={`collapse collapse-plus rounded-box border ${bgClass}`}
          >
            <div className={`collapse-title font-semibold ${titleClass}`}>
              Is there any cost to use this website?
            </div>
            <div className={`collapse-content text-sm ${contentClass}`}>
              No, the website is completely free to use.
              <br />
              You don’t need to pay to post or find roommates.
              <br />
              We don't charge for messaging or dashboard access.
              <br />
              Just create an account and start exploring.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AskQuestion;
