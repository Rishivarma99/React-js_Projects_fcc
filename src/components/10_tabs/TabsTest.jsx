import Tabs from "./Tabs";

const RandomTabContent = () => {
  return <div>Random content </div>;
};

const TabsTest = () => {
  const data = [
    {
      tab: 1,
      content: (
        <div>
          <center>
            <h1>Content of tab 1 </h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Provident sapiente quasi aut nemo, impedit voluptates, officiis
              ratione odio dolores laudantium eius inventore. Esse doloremque
              perferendis commodi dolorum unde architecto expedita.
            </p>
          </center>
        </div>
      ),
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
