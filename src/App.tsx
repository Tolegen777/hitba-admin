// library
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";

// store
import { useTypedSelector } from "./redux/store";

// pages
import Main from "./pages/Main";
import LoginPaper from "./pages/SignIn";
import Error from "./pages/Error";
import {useMediaQuery, useTheme} from "@mui/material";

function App() {
  const { isAuth } = useTypedSelector((state) => state.auth);
  const navigate = useNavigate();

    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
      <>
          {isMobile?<div style={{marginLeft:"5px", marginTop:"10px"}}>Сайт недоступен на мобильных устройствах</div>:
              <Routes>
                  {/* <Route path="/" element={<Navigate to={isAuth ? "/app" : "/auth"} />} /> */}
                  <Route
                      path="/app/*"
                      element={isAuth ? <Main /> : <Navigate to="/auth" />}
                  />
                  <Route
                      path="/auth"
                      element={isAuth ? <Navigate to="/app" /> : <LoginPaper />}
                  />
                  <Route path="*" element={<Navigate to={"/app"} />} />
              </Routes>}
      </>

  );
}

export default App;
