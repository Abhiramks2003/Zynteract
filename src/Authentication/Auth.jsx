import { useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  Input,
  Button,
  Typography,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  IconButton,
} from "@material-tailwind/react";
import axios from "axios";
import { BanknotesIcon } from "@heroicons/react/24/solid";
import { MdOutlineAddAPhoto } from "react-icons/md";

export default function Auth() {
  const picRef = useRef(null);
  let navigate = useNavigate();
  const [type, setType] = useState("login");
  const [credentials, setCredentials] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
    cpassword: "",
    image: null,
  });
  const [loginCreds, setLoginCreds] = useState({
    id: "",
    password: "",
  });

  const { id, name, email, password } = credentials;
  const host = "https://tellus-1kkz.onrender.com";

  //function for signup
  const handleSignup = async (e) => {
    e.preventDefault();
    let url = `${host}/api/signup`;
    const formDataObj = new FormData();
    formDataObj.append("id", id);
    formDataObj.append("name", name);
    formDataObj.append("email", email);
    formDataObj.append("password", password);
    formDataObj.append("image", credentials.image);
    try {
      const res = await axios.post(url, formDataObj);
      console.log(res.data);
      if (res.data.signup) {
        setType("login");
      } else {
        console.log("Signup failed");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(loginCreds);
    let url = `${host}/api/login`;
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: loginCreds.id,
          password: loginCreds.password,
        }),
      });
      const json = await response.json();
      console.log(json);

      const { _doc, image } = json;
      const { data, mimetype } = image;
      const { name, id } = _doc;
      console.log(mimetype);
      localStorage.setItem("imgtype", mimetype);

      if (json.login) {
        localStorage.setItem("login", json.login);
        localStorage.setItem("name", name);
        localStorage.setItem("userId", id);
        let str = "";
        for (let i = 0; i < data.data.length; i++) {
          str += String.fromCharCode(data.data[i]);
        }
        const base64Data = btoa(str);
        //setImageData(`data:${mimetype};base64,` + base64Data);
        localStorage.setItem("image", base64Data);
        navigate("/");
      } else {
        console.log("Login Failed!!!");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  const changeHandler = (e) => {
    setCredentials({ ...credentials, image: e.target.files[0] });
  };
  const location = useLocation();
  const currentPath = location.pathname;
  localStorage.setItem("currentpath", currentPath);
  return (
    <div className="w-full flex justify-center">
      <Card className="w-full max-w-[24rem]">
        <CardHeader
          color="gray"
          floated={false}
          shadow={false}
          className="m-0 grid place-items-center rounded-b-none py-8 px-4 text-center"
        >
          <div className="mb-4 rounded-full border border-white/10 bg-white/10 p-6 text-white">
            <BanknotesIcon className="h-10 w-10" />
          </div>
          <Typography variant="h4" color="white">
            Zynteract
          </Typography>
        </CardHeader>
        <CardBody>
          <Tabs value={type} className="overflow-visible">
            <TabsHeader className="relative z-0 ">
              <Tab value="login" onClick={() => setType("login")}>
                Login
              </Tab>
              <Tab value="signup" onClick={() => setType("signup")}>
                Signup
              </Tab>
            </TabsHeader>
            <TabsBody
              className="!overflow-x-hidden !overflow-y-hidden"
              animate={{
                initial: {
                  x: type === "login" ? 400 : -400,
                },
                mount: {
                  x: 0,
                },
                unmount: {
                  x: type === "login" ? 400 : -400,
                },
              }}
            >
              <TabPanel value="login" className="p-0">
                <form
                  onSubmit={handleLogin}
                  className="mt-6 flex flex-col gap-4"
                >
                  <Input
                    onChange={(e) => {
                      setLoginCreds({
                        ...loginCreds,
                        [e.target.name]: e.target.value,
                      });
                    }}
                    color="blue"
                    name="id"
                    label="userID"
                    required
                  />

                  <div className="">
                    <div className="my-2 flex items-center gap-4">
                      <Input
                        onChange={(e) => {
                          setLoginCreds({
                            ...loginCreds,
                            [e.target.name]: e.target.value,
                          });
                        }}
                        color="blue"
                        name="password"
                        type="password"
                        label="Password"
                        containerProps={{ className: "min-w-[72px]" }}
                        required
                      />
                    </div>
                  </div>
                  <Button type="submit" color="blue" size="lg">
                    Login
                  </Button>
                </form>
              </TabPanel>

              <TabPanel value="signup" className="p-0">
                <form
                  onSubmit={handleSignup}
                  className="mt-12 flex flex-col gap-4"
                >
                  <Input
                    onChange={onChange}
                    name="id"
                    color="blue"
                    label="UserID"
                  />
                  <Input
                    onChange={onChange}
                    name="name"
                    color="blue"
                    label="Name"
                  />
                  <div className="flex gap-3 items-center ml-2">
                    <IconButton
                      color="blue"
                      className="rounded-full"
                      onClick={() => {
                        picRef.current.click();
                      }}
                    >
                      <MdOutlineAddAPhoto size={25} />
                    </IconButton>
                    <Typography>Add Profile Photo</Typography>
                  </div>
                  <input
                    ref={picRef}
                    onChange={changeHandler}
                    className="hidden"
                    name="image"
                    color="blue"
                    type="file"
                    label="Profile Pic"
                  />
                  <Input
                    onChange={onChange}
                    color="blue"
                    name="email"
                    type="email"
                    label="Email"
                  />
                  <Input
                    color="blue"
                    onChange={onChange}
                    name="password"
                    type="password"
                    label="Password"
                  />
                  <Input
                    color="blue"
                    onChange={onChange}
                    name="cpassword"
                    type="password"
                    label="Confirm Password"
                  />
                  <Button
                    type="submit"
                    size="lg"
                    color="blue"
                    className="relative h-12"
                  >
                    Signup
                  </Button>
                </form>
              </TabPanel>
            </TabsBody>
          </Tabs>
        </CardBody>
      </Card>
    </div>
  );
}
