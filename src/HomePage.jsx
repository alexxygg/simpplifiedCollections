import { React, useEffect } from "react";
import { useLocation } from "react-router-dom";
import HeaderOtherLinks from "./HeaderOtherLinks";

function HomePage() {
  const location = useLocation();

  useEffect(() => {
    document.body.style.backgroundColor = "Grey";

    return () => {
      // reset the background color when leaving the route
      document.body.style.backgroundColor = null;
    };
  }, [location]);

  return (
    <>
      <HeaderOtherLinks />
      <div id="paddedList2">
        <div className="homepage">
          <h1 className="featureTitle homepageTitle logo">DebtDynamic</h1>
          <h2 className="goldColor leftAlign featureTitle">
            "Revolutionize account managing."
          </h2>{" "}
          <h3 className="leftAlign h3">
            With DebtDynamic, you will have access to a fully customizable
            interface that allows you to tailor your account management to your
            specific needs. The data editing feature ensures that you can make
            changes to your accounts easily and quickly, with just a few clicks.
          </h3>
          <div className="video">
            <video controls>
              <source src="copyFeature.mp4" type="video/mp4" />
            </video>{" "}
            <div>
              <h1 className="featureTitle leftAlign">Click to Copy!</h1>
              <div className="feature">
                {" "}
                With our <span className="goldColor">Click to Copy</span>{" "}
                feature, you can easily copy text to your clipboard, eliminating
                the need for tedious and error-prone manual copying and pasting.
              </div>
              <li className="featureSmaller">
                Ability to enable/disable copy feature for any requested data
                value.
              </li>
            </div>
          </div>{" "}
          <h3 className="leftAlign h3 ">
            With individual account notes, you can keep track of important
            information related to each account. This makes it easy to organize
            and manage your accounts, so you can focus on other important
            aspects of your business.
          </h3>
          <div className="video">
            <div>
              <h1 className="featureTitle leftAlign">Don't miss a thing...</h1>
              <div className="feature">
                {" "}
                With our <span className="goldColor">Important Note</span>{" "}
                feature you can mark your most critical notes as important with
                a simple checkbox. The text color will change, making it much
                easier to spot at a glance.
              </div>
              <li className="featureSmaller">
                Categories can be added or removed to adapt system.
              </li>
              <li className="featureSmaller">
                Color can be modified to likings.
              </li>{" "}
            </div>
            <video controls>
              <source src="importantFeature.mp4" type="video/mp4" />
            </video>
          </div>{" "}
          <div className="feature">
            <h2 className="leftAlign h3 center">
              Improve your productivity, streamline your workflow, and manage
              your accounts more efficiently than ever before. Try our software
              today and experience the difference in your account management!
            </h2>
          </div>
          <a href="/accountsList" className="searchBtn">
            Try the DEMO!
          </a>
        </div>
      </div>
    </>
  );
}

export default HomePage;
