import React from "react";
import {
  Card,
  CardBody,
  Typography,
  Input,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  IconButton,
} from "@material-tailwind/react";
import { TbEdit } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";
import { IoMdArrowBack } from "react-icons/io";
import Primary from "./Primary";
import { Link } from "react-router-dom";

const Messages = () => {
  const [activeTab, setActiveTab] = React.useState("primary");
  const data = [
    {
      label: "Primary",
      value: "primary",
      desc: <Primary />,
    },
    {
      label: "Groups",
      value: "groups",
      desc: `Because it's about motivating the doers. Because I'm here
        to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "Calls",
      value: "calls",
      desc: `We're not always in the position that we want to be at.
        We're constantly growing. We're constantly making mistakes. We're
        constantly trying to express ourselves and actualize our dreams.`,
    },
  ];
  return (
    <Card className="md:mt-3 w-full md:w-80 h-screen md:h-[85vh] flex flex-col flex-shrink-0">
      <CardBody className="p-4 h-screen">
        <div className="flex justify-between items-center">
          <div className="flex gap-1 items-center">
            <Link to="/" className="md:hidden">
              <IconButton variant="text" className="rounded-full">
                <IoMdArrowBack
                  type="button"
                  className="hover:text-blue-500 cursor-pointer"
                  size={25}
                />
              </IconButton>
            </Link>
            <Typography variant="h5" color="blue-gray" className="font-poppins">
              Messages
            </Typography>
          </div>
          <IconButton variant="text" className="rounded-full">
            <TbEdit
              type="button"
              className="hover:text-blue-500 cursor-pointer"
              size={25}
            />
          </IconButton>
        </div>

        <div className="flex flex-col my-2">
          <div>
            <Input
              className="font-poppins"
              color="blue"
              label="Search messages"
              icon={
                <CiSearch
                  type="button"
                  className="hover:text-blue-500 cursor-pointer"
                  size={24}
                />
              }
            />
          </div>
        </div>
        <Tabs className="h-full" value={activeTab}>
          <TabsHeader
            className="rounded-none border-b font-poppins border-blue-gray-50 bg-transparent p-0 mt-2"
            indicatorProps={{
              className:
                "bg-transparent border-b-2 border-blue-500 font-poppins shadow-none rounded-none",
            }}
          >
            {data.map(({ label, value }) => (
              <Tab
                key={value}
                value={value}
                onClick={() => setActiveTab(value)}
                className={
                  activeTab === value
                    ? "text-blue-500 font-semibold font-poppins"
                    : "text-gray-500 font-poppins hover:text-gray-600"
                }
              >
                {label}
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody className="w-full h-full">
            {data.map(({ value, desc }) => (
              <TabPanel
                key={value}
                value={value}
                className="font-poppins h-full"
              >
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
