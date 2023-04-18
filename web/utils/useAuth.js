import { useEffect, useState } from "react";
import { getCurrentUser } from "../src/axios/axios";

export function useAuth() {
  const [authState, setAuthState] = useState({
    loading: true,
    user: null,
  });
  useEffect(() => {
    const fetchUser = async () => {
      const res = await getCurrentUser();
      // console.log("res", res);
      if (!res.errors) {
        setAuthState({
          loading: false,
          user: res,
        });
      } else {
        setAuthState({
          loading: false,
          user: null,
        });
      }
    };
    fetchUser();
  }, []);
  return { ...authState };
}
