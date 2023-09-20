import {
  Accordion, AccordionDetails, AccordionSummary,
  Button,
  Card, CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
  Modal,
  Box,
  Link
} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React, { useState } from 'react';

export default function Description() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      bgcolor: 'background.paper',
      border: '2px solid #000',
      boxShadow: 24,
      p: 4,
    };

  return (
    <>
      <Container
        maxWidth="sm"
        sx={(theme) => ({
          padding: theme.spacing(5),
        })}
      >
        <Typography
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
          sx={{ fontWeight: "bold" }}
        >
          HomePal
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          HomePal é uma aplicação que procura facilitar a
          organização das tarefas de casa.
        </Typography>
      </Container>

      <Container maxWidth="xl">
        <Typography variant="body1" mb={1}>
          O HomePal ajuda-o na cozinha, podendo gerir os ingredientes que tem em
          casa, adicionar as suas próprias receitas e acedê-las facilmente em
          qualquer lado através da aplicação.
        </Typography>
        <Typography variant="body1" mb={1}>
          Também o ajuda nas suas compras, permitindo criar uma lista de compras
          e registar o que já foi comprado para não ter de andar com um papel e
          uma caneta atrás quando vai ao supermercado.
        </Typography>
        <Typography variant="body1" mb={1}>
          Pode registar na aplicação as suas tarefas, quer diárias como únicas,
          impedindo esquecimentos e ajudando-o a organizar melhor a sua vida
          diária.
        </Typography>
      </Container>

      <Container
          maxWidth="sm"
          sx={(theme) => ({
            padding: theme.spacing(5),
          })}
      >
        <Typography
            variant="h6"
            align="center"
            color="textSecondary"
            gutterBottom
            sx={{ fontWeight: "bold" }}
        >
          Membros do grupo (P3)
        </Typography>
      </Container>
      <Container sx={{padding: "20px 0"}} maxWidth="md">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{display: "flex", flexDirection: "column"}}>
              <CardMedia image="/images/DiogoS.jpg" sx={{paddingTop: "100%"}}/>
              <CardContent sx={{ flexGrow: 1}}>
                <Typography gutterBottom variant="h5">
                  Diogo Santos
                </Typography>
                <Typography>
                  Número: 60003
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{display: "flex", flexDirection: "column"}}>
              <CardMedia image="/images/JorgeF.jpg" sx={{paddingTop: "100%"}}/>
              <CardContent sx={{ flexGrow: 1}}>
                <Typography gutterBottom variant="h5">
                  Jorge Fresco
                </Typography>
                <Typography>
                  Número: 60209
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{display: "flex", flexDirection: "column"}}>
              <CardMedia image="" sx={{paddingTop: "56.25%"}}/>
              <CardContent sx={{ flexGrow: 1}}>
                <Typography gutterBottom variant="h5">
                  Liubov Mikhailovna
                </Typography>
                <Typography>
                  Número: 60204
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ display: "flex", flexDirection: "column"}}>
              <CardMedia image="" sx={{paddingTop: "56.25%"}}/>
              <CardContent sx={{ flexGrow: 1}}>
                <Typography gutterBottom variant="h5">
                  Wilker Martins
                </Typography>
                <Typography>
                  Número: 58535
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
