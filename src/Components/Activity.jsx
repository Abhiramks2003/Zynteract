import { Card, CardBody, Typography, Avatar } from "@material-tailwind/react";

const Activity = () => {
  return (
    <Card className="mt-1 md:mt-3 w-full md:w-80 h-screen md:h-[85vh] flex flex-col flex-shrink-0 font-poppins">
      <CardBody className="p-4">
        <div className="flex justify-between">
          <Typography variant="h5" color="blue-gray" className="mb-2 font-poppins">
            Activity
          </Typography>
          <Typography type="button" variant="h6" color="gray" className="mb-2 font-poppins hover:text-blue-500 cursor-pointer">
            See all
          </Typography>
        </div>

        <div className="flex flex-col">
          <Typography className="font-poppins" variant="h6">Stories About You</Typography>
          <div className="flex items-center gap-1 my-3">
            <Avatar src="/img/face-2.jpg" className="bg-blue-500" alt="" />
            <div>
              <Typography className="font-poppins" variant="h6">Mentions</Typography>
              <Typography variant="small" color="gray" className="font-normal font-poppins">
                2 stories mentions you
              </Typography>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <Typography className="font-poppins" variant="h6">New</Typography>
          <div className="flex items-center gap-1 my-3">
            <Avatar
              src="/img/face-2.jpg"
              className="bg-blue-500 flex-shrink-0"
              alt=""
            />
            <div>
              <Typography className="font-poppins">
                <span className="font-bold">user</span> started following you
              </Typography>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default Activity;
