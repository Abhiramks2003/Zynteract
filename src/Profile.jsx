import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Chip,
  Button,
} from "@material-tailwind/react";

export default function Profile() {
  return (
    <div className="flex flex-col items-center">
      <Card
        shadow={false}
        className="relative mt-1 flex justify-end h-96 w-full overflow-hidden text-center"
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
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          />
          <Typography variant="h2" className="mb-4 mt-2 text-gray-400">
            Tania Andrew
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
      <Button size="lg" color="blue" className="my-3 w-3/4 md:w-1/2">Edit Profile</Button>
    </div>
  );
}
