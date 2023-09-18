import {Container, Typography} from "@mui/material";

export default function Report() {

    return (
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
                Relatório
            </Typography>
            <Typography
                variant="h5"
                align="center"
                color="textSecondary"
                paragraph
            >
                Relatório do Projeto e tal
            </Typography>
        </Container>
    )
}