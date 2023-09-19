import Head from "next/head";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import {
  Typography,
  AppBar,
  CssBaseline,
  Toolbar,
  Tabs,
  Tab,
  Box,
} from "@mui/material";
import {useState} from "react";
import Description from "@/components/Description";
import Report from "@/components/Report";
import Assigments from "@/components/Assigments";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function HomePage() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Head>
        <title>Projeto IPM</title>
        <meta name="description" content="Página do projeto de IPM" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <AppBar position="relative">
          <Toolbar>
            <Typography variant="h5">HomePal</Typography>
            <Box sx={{ flexGrow: 1 }}>
              <Tabs value={value} onChange={handleChange} centered>
                <Tab label="Descrição" />
                <Tab label="Relatório" />
                <Tab label="Tarefas" />
              </Tabs>
            </Box>
          </Toolbar>
        </AppBar>
        <main>
          {value === 0 && <Description />}
          {value === 1 && <Report />}
          {value === 2 && <Assigments />}
        </main>
      </ThemeProvider>
    </>
  );
}
