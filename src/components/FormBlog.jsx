import Settings from "./Settings";
import Profile from "./Profile";
import Interest from "./Interest";
import { useState } from "react";

export default TabForm = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [data, setData] = useState({
    name: "phani",
    age: "23",
    email: "phani@gmail.com",
    interest: ["coding", "music"],
    theme: "dark",
  });
  const tabs = [
    {
      name: "Profile",
      component: Profile,
    },
    {
      name: "Interest",
      component: Interest,
    },
    {
      name: "Settings",
      component: Settings,
    },
  ];

  const ActiveTab = tabs[activeTab].component;

  const handleNextClick = () => {
    setActiveTab((prev) => prev + 1);
  };

  const handlePrevClick = () => {
    setActiveTab((prev) => prev - 1);
  };

  const handleSubmit = () => {
    console.log("formData", data);
  };
  return (
    <div>
      <div className="heading-container">
        {tabs.map((t, index) => (
          <div
            key={index}
            className="heading"
            onClick={() => setActiveTab(index)}
          >
            {t.name}
          </div>
        ))}
      </div>
      <div className="tab-body">
        <ActiveTab data={data} setData={setData} />
      </div>
      <div>
        {activeTab > 0 && (
          <button type="submit" onClick={handlePrevClick}>
            Prev
          </button>
        )}
        {activeTab < tabs.length - 1 && (
          <button type="submit" onClick={handleNextClick}>
            Next
          </button>
        )}
        {activeTab === tabs.length - 1 && (
          <button type="submit" onClick={handleSubmit}>
            submit
          </button>
        )}
      </div>
    </div>
  );
};
