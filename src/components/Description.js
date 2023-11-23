import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";

export default function Description() {

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
            Let Me Cook
          </Typography>
          <Typography variant="h5" align="center" color="textSecondary" paragraph>
            A Let Me Cook é uma aplicação que procura facilitar a
            confeção de alimentos.
          </Typography>
        </Container>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '40px' }}>
          <Image src="/images/logo.jpg" alt="Logo da nossa aplicação" width={300} height={300} style={{border: '4px solid white', borderRadius: "50%"}} />
        </Box>
        <Container maxWidth="xl">
          <Typography variant="body1" mb={1}>
            A aplicação &quot;Let Me Cook&quot; é uma aplicação de telemóvel dedicada a entusiastas da culinária e amantes de gastronomia.
            Com uma vasta biblioteca de receitas, recursos nutricionais detalhados e a possibilidade de gerir os ingredientes de cada utilizador,
            a “Let Me Cook” é um ajudante de confiança na cozinha. É possível, também, manter a despensa pessoal organizada com a funcionalidade disponibilizada pela aplicação.
          </Typography>
          <Typography variant="body1" mb={1}>
            A &quot;Let Me Cook&quot; é a aplicação perfeita para todos, desde novatos na cozinha até chefs experientes, que desejam aprimorar as suas habilidades culinárias enquanto mantêm um controle rigoroso das informações nutricionais de suas refeições.
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
                <CardMedia image="/images/LiubovM.png" sx={{paddingTop: "100%"}}/>
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
                <CardMedia image="/images/WilkerM.jpeg" sx={{paddingTop: "100%"}}/>
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
