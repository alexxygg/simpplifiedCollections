import React, { useState } from "react";

const Tab = ({ title, selected, onClick }) => (
  <div
    onClick={onClick}
    style={{
      backgroundColor: selected ? "#242424" : "#213547",
      cursor: "pointer",
      width: "100%",
      color: selected ? "rgb(140, 197, 84)" : "",
    }}
  >
    {title}
  </div>
);

const Tabs = ({ object }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleClick = (index) => {
    setSelectedTab(index);
  };

  return (
    <div className="tabs">
      <div onClick={() => handleClick(0)}>
        <a href={`/accounts/${object.id}`}>
          <Tab
            className="tab"
            title="Account Details"
            selected={selectedTab === 0}
          />
        </a>
      </div>
      <div onClick={() => handleClick(1)}>
        <a href="#">
          <Tab
            className="tab"
            title="Payment Plan"
            selected={selectedTab === 1}
          />
        </a>
      </div>
      <div onClick={() => handleClick(2)}>
        <a href="#">
          <Tab className="tab" title="Reminders" selected={selectedTab === 2} />
        </a>
      </div>
      <div onClick={() => handleClick(3)}>
        <a href="#">
          <Tab
            className="tab"
            title="Audit Logs"
            selected={selectedTab === 3}
          />
        </a>
      </div>
    </div>
  );
};

export default Tabs;
