import { BrowserRouter } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@material-ui/core';

import AppRoutes from './routesAndStateManagement';

const theme = createTheme({
  spacing: 10,
  typography: {
    fontFamily: 'Raleway',
  },
});

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <AppRoutes />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
