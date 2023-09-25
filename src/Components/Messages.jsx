import {
  Card,
  CardBody,
  Typography,
  Input,
  Avatar,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { TbEdit } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";
import React from "react";

const Messages = () => {
  const [activeTab, setActiveTab] = React.useState("html");
  const data = [
    {
      label: "Primary",
      value: "html",
      desc: (
        <div className="flex flex-col">
          <div className="flex items-center gap-1 my-3">
            <Avatar
              src="/img/face-2.jpg"
              className="bg-blue-500 flex-shrink-0"
              alt=""
            />
            <div>
              <Typography>
                <span className="font-bold">user</span> started following you
              </Typography>
            </div>
          </div>
        </div>
      ),
    },
    {
      label: "General",
      value: "react",
      desc: `Because it's about motivating the doers. Because I'm here
        to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "Requests",
      value: "vue",
      desc: `We're not always in the position that we want to be at.
        We're constantly growing. We're constantly making mistakes. We're
        constantly trying to express ourselves and actualize our dreams.`,
    },
  ];
  return (
    <Card className="mt-3 w-full md:w-80 h-screen md:h-full flex flex-col flex-shrink-0">
      <CardBody>
        <div className="flex justify-between">
          <Typography variant="h5" color="blue-gray" className="mb-2">
            Messages
          </Typography>
          <TbEdit type="button" className="hover:text-blue-500" size={25} />
        </div>

        <div className="flex flex-col my-2">
          <div className="">
            <Input
              color="blue"
              label="Search messages"
              icon={
                <CiSearch
                  type="button"
                  className="hover:text-blue-500"
                  size={24}
                />
              }
            />
          </div>
        </div>

        <Tabs value={activeTab}>
          <TabsHeader
            className="rounded-none border-b border-blue-gray-50 bg-transparent p-0 my-2"
            indicatorProps={{
              className:
                "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
            }}
          >
            {data.map(({ label, value }) => (
              <Tab
                key={value}
                value={value}
                onClick={() => setActiveTab(value)}
                className={activeTab === value ? "text-gray-900" : ""}
              >
                {label}
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody>
            {data.map(({ value, desc }) => (
              <TabPanel key={value} value={value}>
                {desc}
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </CardBody>
    </Card>
  );
};

export default Messages;
