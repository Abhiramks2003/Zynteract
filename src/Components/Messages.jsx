import React from "react";
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
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import { TbEdit } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";
import "../App.css";
import { useNavigate } from "react-router-dom";

const Messages = () => {
  const [activeTab, setActiveTab] = React.useState("html");
  let arr = Array.from({ length: 20 }, (_, index) => index + 1);
  const navigate = useNavigate();
  const data = [
    {
      label: "Primary",
      value: "html",
      desc: (
        <div className="flex flex-col -mx-4 overflow-y-scroll h-fit md:h-[22.5rem]">
          <List className="">
            {arr.map((a, index) => (
              <ListItem
                onClick={() => {
                  navigate("/chat", { state: { a } });
                }}
                key={index}
                className="w-full"
              >
                <ListItemPrefix>
                  <Avatar
                    variant="circular"
                    alt="candice"
                    src="https://docs.material-tailwind.com/img/face-1.jpg"
                  />
                </ListItemPrefix>
                <div>
                  <Typography
                    className="font-poppins"
                    variant="h6"
                    color="blue-gray"
                  >
                    Tania Andrew
                  </Typography>
                  <Typography
                    variant="small"
                    color="gray"
                    className="font-normal font-poppins"
                  >
                    Software Engineer
                  </Typography>
                </div>
              </ListItem>
            ))}
          </List>
        </div>
      ),
    },
    {
      label: "Groups",
      value: "react",
      desc: `Because it's about motivating the doers. Because I'm here
        to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "Calls",
      value: "vue",
      desc: `We're not always in the position that we want to be at.
        We're constantly growing. We're constantly making mistakes. We're
        constantly trying to express ourselves and actualize our dreams.`,
    },
  ];
  return (
    <Card className="mt-3 w-full md:w-80 h-full md:h-[85vh] flex flex-col flex-shrink-0">
      <CardBody className="">
        <div className="flex justify-between">
          <Typography
            variant="h5"
            color="blue-gray"
            className="mb-2 font-poppins"
          >
            Messages
          </Typography>
          <TbEdit
            type="button"
            className="hover:text-blue-500 cursor-pointer"
            size={25}
          />
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

        <Tabs value={activeTab}>
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
          <TabsBody className="w-full">
            {data.map(({ value, desc }) => (
              <TabPanel key={value} value={value} className="font-poppins">
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
