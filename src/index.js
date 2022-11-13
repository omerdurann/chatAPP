import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthContextProvider } from './context/AuthContext';
import { ChatContextProvider } from './context/ChatContext';
import { ThemeProvider } from "./context/ThemeContext";
import './i18n'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
    <ChatContextProvider>
    <ThemeProvider>
        <React.StrictMode>
            <Suspense fallback={<div>Loading...</div>}>
              <App />
            </Suspense>
        </React.StrictMode>
      </ThemeProvider>
    </ChatContextProvider>
  </AuthContextProvider>
);
