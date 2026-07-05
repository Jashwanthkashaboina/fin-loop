import { useEffect, useState } from "react";
import axios from "axios";
import TopBar from "./TopBar";
import Dashboard from "./Dashboard";

function Home() {
  console.log("Home rendered");
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    console.log("useEffect fired");

    const checkAuth = async () => {
      try {
        console.log("checking auth");
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/me`,
          {
            withCredentials: true,
          }
        );

        console.log("response received");
        console.log(res.data);

        if (!res.data.loggedIn) {
          console.log("redirecting");
          window.location.href =
            `${import.meta.env.VITE_DASHBOARD_URL}/login`;
        } else {
          console.log("authenticated");
          setChecking(false);
        }
      } catch (err) {
        console.log("auth error");
        console.log(err);

        window.location.href =
          `${import.meta.env.VITE_DASHBOARD_URL}/login`;
    }
  };

    // checkAuth();
  }, []);

  // if (checking) {
  //   return <h3 style={{ padding: "20px" }}>Loading dashboard...</h3>;
  // }

  return (
    <>
      <TopBar />
      <Dashboard />
    </>
  );
}

export default Home;
