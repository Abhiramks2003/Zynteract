import {
    Typography,
    Avatar,
    List,
    ListItem,
    ListItemPrefix,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import "./Message.css"
const Primary = () => {
    let arr = Array.from({ length: 40 }, (_, index) => index + 1);
    const navigate = useNavigate();
    return (
        <div className="flex flex-col -mx-4 overflow-y-scroll h-full md:h-[22.5rem]">
            <List>
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
                                className="bg-black"
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
    )
}

export default Primary