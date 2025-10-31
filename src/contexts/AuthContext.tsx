// Authentication Context
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface AuthContextType {
  token: string | null;
  loading: boolean;
  isSuperuser: boolean;
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [isSuperuser, setIsSuperuser] = useState(false);

  useEffect(() => {
    // Check for existing token in localStorage
    const storedToken = localStorage.getItem('authToken');
    if (storedToken) {
      setToken(storedToken);
      // In a real app, you would validate the token and check user permissions
      setIsSuperuser(true); // Mock: assume superuser for demo
    }
    setLoading(false);
  }, []);

  const login = (newToken: string) => {
    localStorage.setItem('authToken', newToken);
    setToken(newToken);
    setIsSuperuser(true); // Mock: assume superuser for demo
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    setToken(null);
    setIsSuperuser(false);
  };

  return (
    <AuthContext.Provider value={{ token, loading, isSuperuser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
