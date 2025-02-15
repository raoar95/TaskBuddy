import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { IRegisterResponse, IUserData } from "../interface/user";
import { isUserAuth } from "../service/api";

/* Interface */
export interface ITokens {
  accessToken: string;
  refreshToken: string;
}

export interface IErrorData {
  success: boolean;
  statusCode: number;
  errorMessage: string;
}

export interface IApiErrorResponse {
  status: number;
  errorMessage: string;
  data: IErrorData;
}

export interface AuthContextType {
  isAuth: boolean;
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
  userData: IUserData | null;
  setUserData: React.Dispatch<React.SetStateAction<IUserData | null>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

// Initial State
const defaultAuthContext: AuthContextType = {
  isAuth: false,
  setIsAuth: () => {},
  userData: null,
  setUserData: () => {},
  isLoading: false,
  setIsLoading: () => {},
};

export const AuthContext = createContext<AuthContextType>(defaultAuthContext);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [userData, setUserData] = useState<IUserData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getAuthState = useCallback(async () => {
    setIsLoading(true);
    await isUserAuth()
      .then((data) => {
        if (data.status === 200) {
          setIsAuth(true);
          setUserData(data.data);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        setIsAuth(false);
        console.log("Api Error: ", err);
      });
  }, []);

  useEffect(() => {
    getAuthState();
  }, []);

  const contextValue = useMemo(
    () => ({
      isAuth,
      setIsAuth,
      userData,
      setUserData,
      isLoading,
      setIsLoading,
    }),
    [isAuth, userData, isLoading]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

// Custom Hook
const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === null) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};

export { AuthProvider, useAuth };
