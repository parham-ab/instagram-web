// mui components
import { Box, Divider } from "@mui/material";
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
      <Box display="flex" alignItems="center">
        <h3>instagram</h3>
        <BsChevronDown style={{ fontSize: "15", paddingLeft: 3 }} />
      </Box>

      <Box display="flex" alignItems="center">
        <input type="" placeholder="Search" style={{ marginRight: "130px" }} />
        <Box className="header-icons-container">
          <MdHomeFilled />
          <TbSend />
          <CgAddR />
          <ImCompass2 />
          <FiHeart />
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
