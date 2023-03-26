import { useState } from "react";
// faker stuff
import { faker } from "@faker-js/faker";
import { Avatar, Typography, Box, Grid } from "@mui/material";
// icons
import { BsThreeDotsVertical, BsChat } from "react-icons/bs";
import { TbSend } from "react-icons/tb";
import { FiHeart } from "react-icons/fi";

const Posts = () => {
  const [isLiked, setIsLiked] = useState(false);
  return (
    <Grid item mt={10}>
      <Box
        sx={{
          border: "solid 1px #dfdfdf",
          borderRadius: "8px",
        }}
      >
        <Box
          sx={{
            borderRadius: "8px",
            maxWidth: "650px",
          }}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            sx={{ p: 1 }}
          >
            <Box display="flex" alignItems="center">
              <Avatar
                variant="circular"
                src={faker.image.avatar()}
                alt="profile"
                sx={{ width: "35px", height: "35px", ml: 1 }}
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
              width: "100%",
              objectFit: "fill",
            }}
          />
        </Box>
        {/* like & share & cm & save */}
        <Box display="flex" alignItems="center" mt={2}>
          <FiHeart
            style={{
              margin: "0 5px",
              fontSize: "24px",
              fill: isLiked && "red",
              color: isLiked && "red",
              cursor: "pointer",
            }}
            onClick={() => setIsLiked(!isLiked)}
          />
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
        {/* comments & time*/}
        <Box sx={{ ml: 2, mb: 3 }}>
          <Typography color="text.secondary" fontWeight="normal">
            view all {faker.datatype.number()} comments
          </Typography>
          <span
            style={{
              color: "#a7a7a7",
              fontSize: "12px",
            }}
          >
            5 Hours ago
          </span>
        </Box>
      </Box>
    </Grid>
  );
};

export default Posts;
