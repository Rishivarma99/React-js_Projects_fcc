import Tabs from "./Tabs";

const RandomTabContent = () => {
  return <div>Random content </div>;
};

const TabsTest = () => {
  const data = [
    {
      tab: 1,
      content: <div>Tab1 content</div>,
    },
    {
      tab: 2,
      content: <div>Tab2 content</div>,
    },
    {
      tab: 3,
      content: <RandomTabContent></RandomTabContent>, // using function component
    },
  ];

  return <Tabs tabsArray={data}></Tabs>;
};

export default TabsTest;
