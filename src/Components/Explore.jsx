import {
  Card,
  CardHeader,
  CardBody,
  Input,
} from "@material-tailwind/react";
import { CiSearch } from "react-icons/ci";
const Explore = () => {
  const arr = Array.from({ length: 20 }, () => Math.floor(Math.random() * 100));
  return (
    <Card className="w-full">
      <CardBody>
        <div className="mb-4 md:hidden">
          <Input size="lg" className="" color="blue" label="Explore" icon={<CiSearch type="button" size={24} className="hover:text-blue-500"/>} />
        </div>
        <div className="grid grid-cols-3 md:grid-cols-4 gap-2 mt-3">
          {arr.map((a, index) => (
            <Card
              key={index}
              shadow={false}
              className="relative grid h-40 md:h-[28rem] max-w-[28rem] items-end justify-center overflow-hidden text-center"
            >
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')] bg-cover bg-center"
              >
                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
              </CardHeader>
            </Card>
          ))}
        </div>
      </CardBody>
    </Card>
  );
};

export default Explore;
