import React from "react";

function HomePage() {
  return (
    <div className="homePage">
      <div className="homepage-component">
        <h1 className="homepage-component__title logo">DebtDynamic</h1>
        <p className="homepage-component__subtitle">
          <p>
            Introducing our new software, DebtDynamic. "Revolutionize account
            managing."
          </p>
          <p>
            With our cutting-edge technology, you can easily visualize your
            accounts, our software not only makes it easy to manage them, but it
            also includes individual account notes, data editing, click to copy,
            and other features that will make your account management experience
            effortless and efficient.
          </p>
          <p>
            With DebtDynamic, you will have access to a fully customizable
            interface that allows you to tailor your account management to your
            specific needs. The data editing feature ensures that you can make
            changes to your accounts easily and quickly, with just a few clicks.
            And with the click-to-copy feature, you can easily share account
            information with other team members without the need to manually
            copy and paste data.
          </p>
          <p>
            Our software also includes individual account notes, so you can keep
            track of important information related to each account. This makes
            it easy to organize and manage your accounts, so you can focus on
            other important aspects of your business.
          </p>
          <p>
            Improve your productivity, streamline your workflow, and manage your
            accounts more efficiently than ever before. Try our software today
            and experience the difference in your account management!
          </p>
        </p>
        <a href="/accountsList">
          <button className="homepage-component__button">Demo</button>
        </a>
      </div>
    </div>
  );
}

export default HomePage;
