import icons from "./icons";
import bg_main from "../assets/bg_image.jpg";

const {
  CiLaptop,
  RiCodeView,
  FaHeart,
  FaLocationDot,
  MdOutlinePhoneIphone,
  IoIosSend,
} = icons;

export const serviceExtraInformation = [
  {
    id: 1,
    title: "Digital Design",
    sub: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    icon: <CiLaptop color="white" size={50} />,
  },
  {
    id: 2,
    title: "Web developer",
    sub: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    icon: <RiCodeView color="white" size={50} />,
  },
  {
    id: 3,
    title: "we love you",
    sub: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    icon: <FaHeart color="white" size={50} />,
  },
];

export const portExtraInformation = [
  {
    id: 1,
    title: "creative minds",
    sub: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Standard dummy text ever since the 1500s.",
    image: bg_main,
  },
  {
    id: 2,
    title: "think alike",
    sub: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Standard dummy text ever since the 1500s.",
    image: bg_main,
  },
  {
    id: 3,
    title: "pixel perfection",
    sub: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Standard dummy text ever since the 1500s.",
    image: bg_main,
  },
];

export const footerInformation = [
  {
    id: 1,
    icon: <FaLocationDot  size={20}/>,
    title: "address",
    sub: "Level 6, 23 Pitit Sydney",
  },
  {
    id: 2,
    icon: <MdOutlinePhoneIphone  size={20}/>,
    title: "phone",
    sub: "0362595858",
  },
  {
    id: 3,
    icon: <IoIosSend  size={20}/>,
    title: "email",
    sub: "bqminh30@gmail.com",
  },
];

export const iconsFooter = [
    {
        id: 1,
        icon: <FaHeart size={16} color="white"/>
    },
    {
        id: 2,
        icon: <FaHeart size={16} color="white"/>
    },
    {
        id: 3,
        icon: <FaHeart size={16} color="white"/>
    }
]