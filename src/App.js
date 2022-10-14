// faker stuff
import { faker } from "@faker-js/faker";
import { Avatar, Typography, Box, Grid } from "@mui/material";
// icons
import { BsThreeDotsVertical, BsChat } from "react-icons/bs";
import { TbSend } from "react-icons/tb";
import { FiHeart } from "react-icons/fi";
// components

const App = () => {
  return (
    <Grid container display="flex" justifyContent="center">
      <Grid item mt={10}>
        <Box
          sx={{
            border: "solid 1px #dfdfdf",
            borderRadius: "8px",
            maxWidth: "650px",
          }}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            sx={{ border: "solid 1px #dfdfdf", p: 1 }}
          >
            <Box display="flex" alignItems="center">
              <Avatar
                variant="circular"
                src={faker.image.avatar()}
                alt="profile"
                sx={{ width: "35px", height: "35px", ml: 2 }}
              />
              <Typography variant="body1" color="initial" ml={1}>
                {faker.name.firstName()}
              </Typography>
            </Box>
            <BsThreeDotsVertical />
          </Box>

          <img
            src={faker.image.image()}
            alt="post"
            style={{
              display: "flex",
              margin: "auto",
              width: "66%",
              objectFit: "fill",
            }}
          />
        </Box>
        {/* like & share & cm & save */}
        <Box display="flex" alignItems="center" mt={2}>
          <FiHeart style={{ margin: "0 5px", fontSize: "24px" }} />
          <BsChat style={{ margin: "0 5px", fontSize: "24px" }} />
          <TbSend style={{ margin: "0 5px", fontSize: "24px" }} />
        </Box>
        {/* likes */}
        <Box display="flex" alignItems="center" mt={2}>
          <Avatar
            variant="circular"
            src={faker.image.avatar()}
            alt="profile"
            sx={{ width: "20px", height: "20px", ml: 2 }}
          />
          <Typography
            fontWeight="normal"
            variant="body2"
            color="initial"
            ml={1}
          >
            Liked by
            <strong>{` ${faker.name.firstName()}`}</strong> and{" "}
            <strong>others</strong>
          </Typography>
        </Box>
        {/* comments */}
        <Box>
          <span>5h</span>
          <span>Reply</span>
        </Box>
      </Grid>
    </Grid>
  );
};

export default App;
