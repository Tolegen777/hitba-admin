// library
import { Box, Grid, Paper } from "@mui/material";

// modules
import { UserFilter } from "../modules/Filter";
import UserTable from "../modules/UserTable";
// import { StyledUsers } from "./StyledUsers";

const UsersPage = () => {
  const Item = (props: any) => <Paper {...props} />;

  return (
    <Box>
      <Grid container spacing={3} sx={{ mb: "30px" }}>
        <Grid item xs>
          {/* <StyledUsers text={"Всего пользователей"} price={"57 462"} /> */}
        </Grid>
        <Grid item xs>
          {/* <StyledUsers text={"Новые пользователи"} price={"+8 400"} /> */}
        </Grid>
        <Grid item xs>
          {/* <StyledUsers text={"Активные пользователей"} price={"19 200"} /> */}
        </Grid>
        <Grid item xs>
          {/* <StyledUsers text={"Рост пользователей"} price={"+9 900"} /> */}
        </Grid>
      </Grid>
      <UserFilter />
      <UserTable />
    </Box>
  );
};
export default UsersPage;