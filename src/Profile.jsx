import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Chip,
  Button,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

export default function Profile() {
  const base64Data = localStorage.getItem("image");
  const mimetype = localStorage.getItem("imgtype");
  const name = localStorage.getItem("name");
  const data = [
    {
      label: "HTML",
      value: "html",
      desc: (
        <Card className="w-full">
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              UI/UX Review Check
            </Typography>
            <Typography>
              The place is close to Barceloneta Beach and bus stop just 2 min by
              walk and near to &quot;Naviglio&quot; where you can enjoy the main
              night life in Barcelona.
            </Typography>
          </CardBody>
        </Card>
      ),
    },
    {
      label: "React",
      value: "react",
      desc: (
        <Card className="w-full">
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              UI/UX Review Check
            </Typography>
            <Typography>
              The place is close to Barceloneta Beach and bus stop just 2 min by
              walk and near to &quot;Naviglio&quot; where you can enjoy the main
              night life in Barcelona.
            </Typography>
          </CardBody>
        </Card>
      ),
    },
    {
      label: "Vue",
      value: "vue",
      desc: (
        <Card className="w-full">
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              UI/UX Review Check
            </Typography>
            <Typography>
              The place is close to Barceloneta Beach and bus stop just 2 min by
              walk and near to &quot;Naviglio&quot; where you can enjoy the main
              night life in Barcelona.
            </Typography>
          </CardBody>
        </Card>
      ),
    },
    {
      label: "Angular",
      value: "angular",
      desc: (
        <Card className="w-full">
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              UI/UX Review Check
            </Typography>
            <Typography>
              The place is close to Barceloneta Beach and bus stop just 2 min by
              walk and near to &quot;Naviglio&quot; where you can enjoy the main
              night life in Barcelona.
            </Typography>
          </CardBody>
        </Card>
      ),
    },
    {
      label: "Svelte",
      value: "svelte",
      desc: (
        <Card className="w-full">
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              UI/UX Review Check
            </Typography>
            <Typography>
              The place is close to Barceloneta Beach and bus stop just 2 min by
              walk and near to &quot;Naviglio&quot; where you can enjoy the main
              night life in Barcelona.
            </Typography>
          </CardBody>
        </Card>
      ),
    },
  ];
  return (
    <div className="flex flex-col items-center">
      <Card
        shadow={false}
        className="relative mt-1 flex justify-end h-72 md:h-96 w-full overflow-hidden text-center"
      >
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')] bg-cover bg-center"
        >
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
        </CardHeader>
        <CardBody className="relative pt-14">
          <Avatar
            size="xxl"
            variant="circular"
            alt="tania andrew"
            className="border-2 border-white"
            src={`data:${mimetype};base64,${base64Data}`}
          />
          <Typography variant="h2" className="mb-4 mt-2 text-gray-400">
            {name}
          </Typography>
          <div className="flex justify-around items-center">
            <Chip
              size="lg"
              color="blue-gray"
              variant="ghost"
              value="628"
              className="text-white"
            />
            <Chip
              size="lg"
              color="blue-gray"
              variant="ghost"
              value="5.1M"
              className="text-white"
            />
            <Chip
              size="lg"
              color="blue-gray"
              variant="ghost"
              value="620"
              className="text-white"
            />
          </div>
          <div className="flex justify-around items-center">
            <Typography color="white" variant="paragraph" className="p-2 ml-5">
              Posts
            </Typography>
            <Typography color="white" variant="paragraph" className="p-2 ml-5">
              Followers
            </Typography>
            <Typography color="white" variant="paragraph" className="p-2 ml-5">
              Following
            </Typography>
          </div>
        </CardBody>
      </Card>
      <Button size="lg" color="blue" className="my-3 w-3/4 md:w-1/2">
        Edit Profile
      </Button>
      <div className="flex">
        <Tabs value="html">
          <TabsHeader>
            {data.map(({ label, value }) => (
              <Tab key={value} value={value}>
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
      </div>
    </div>
  );
}
