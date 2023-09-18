import {Container, Typography} from "@mui/material";

export default function Assigments() {

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
                Tarefas
            </Typography>
            <Typography
                variant="h5"
                align="center"
                color="textSecondary"
                paragraph
            >
                Tarefa 1 -
                Tarefa 2 -
                Tarefa 3 -
            </Typography>
        </Container>
    )
}