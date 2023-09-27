import {Container, Divider, Typography} from "@mui/material";

export default function Reports() {

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
                Relatórios
            </Typography>
            <Typography
                variant="h5"
                align="left"
                color="textSecondary"
                sx={{ fontWeight: "bold" }}
            >
                1ª Fase - Project Proposal
            </Typography>
            <Typography
                variant="paragraph"
                align="left"
                color="textSecondary"
                mt={2}
                paragraph
            >
                Link para o relatório
            </Typography>
            <Divider sx={{marginBottom: "50px", marginTop: "50px"}} />
            <Typography
                variant="h5"
                align="left"
                color="textSecondary"
                sx={{ fontWeight: "bold" }}
            >
                2ª Fase - User and Task Analysis
            </Typography>
            <Typography
                variant="paragraph"
                align="left"
                color="textSecondary"
                mt={2}
                paragraph
            >
                Link para o relatório
            </Typography>
            <Divider sx={{marginBottom: "50px", marginTop: "50px"}} />
            <Typography
                variant="h5"
                align="left"
                color="textSecondary"
                sx={{ fontWeight: "bold" }}
            >
                3ª Fase - 1st Prototype
            </Typography>
            <Typography
                variant="paragraph"
                align="left"
                color="textSecondary"
                mt={2}
                paragraph
            >
                Link para o relatório
            </Typography>
            <Divider sx={{marginBottom: "50px", marginTop: "50px"}} />
            <Typography
                variant="h5"
                align="left"
                color="textSecondary"
                sx={{ fontWeight: "bold" }}
            >
                4ª Fase - Computational Prototype
            </Typography>
            <Typography
                variant="paragraph"
                align="left"
                color="textSecondary"
                mt={2}
                paragraph
            >
                Link para o relatório
            </Typography>
            <Divider sx={{marginBottom: "50px", marginTop: "50px"}} />
            <Typography
                variant="h5"
                align="left"
                color="textSecondary"
                sx={{ fontWeight: "bold" }}
            >
                5ª Fase - Heuristic Evaluation
            </Typography>
            <Typography
                variant="paragraph"
                align="left"
                color="textSecondary"
                mt={2}
                paragraph
            >
                Link para o relatório
            </Typography>
            <Divider sx={{marginBottom: "50px", marginTop: "50px"}} />
            <Typography
                variant="h5"
                align="left"
                color="textSecondary"
                sx={{ fontWeight: "bold" }}
            >
                6ª Fase - Evaluation Results and Presentation
            </Typography>
            <Typography
                variant="paragraph"
                align="left"
                color="textSecondary"
                mt={2}
                paragraph
            >
                Link para o relatório
            </Typography>
        </Container>
    )
}