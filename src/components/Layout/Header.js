// mui components
import { Box, Divider, Avatar, Typography } from "@mui/material";
// faker
import { faker } from "@faker-js/faker";
// icons
import { MdHomeFilled } from "react-icons/md";
import { TbSend } from "react-icons/tb";
import { CgAddR } from "react-icons/cg";
import { ImCompass2 } from "react-icons/im";
import { BsChevronDown } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";

const Header = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-around"
      className="header"
    >
      <Box display="flex" alignItems="center" sx={{ display: { xs: "none", sm: "flex" } }}>
        <Typography
          variant="h5"
          color="initial"
          component="h1"
          className="title"
        >
          Instagram
        </Typography>
        <BsChevronDown style={{ fontSize: "15", paddingLeft: 3 }} />
      </Box>

      <Box display="flex" alignItems="center">
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <input
            type="text"
            placeholder="Search"
            style={{ marginRight: "130px" }}
          />
        </Box>
        <Box
          className="header-icons-container"
          display="flex"
          alignItems="center"
        >
          <MdHomeFilled />
          <TbSend />
          <CgAddR />
          <ImCompass2 />
          <FiHeart />
          <Avatar
            variant="circular"
            src={faker.image.avatar()}
            alt="profile"
            sx={{ width: "25px", height: "25px", ml: 2 }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
