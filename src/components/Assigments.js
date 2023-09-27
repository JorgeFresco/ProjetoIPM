import {Container, Divider, Typography} from "@mui/material";

export default function Assigments() {

    return (
        <Container
            maxWidth="md"
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
                Tarefas Individuais
            </Typography>
            <Typography
                variant="h5"
                align="left"
                color="textSecondary"
                paragraph
                sx={{ fontWeight: "bold" }}
            >
                Tarefa 1
            </Typography>
            <Typography
                variant="h5"
                align="left"
                color="textSecondary"
            >
                <span style={{ fontSize: 'smaller' }}>
                <a href="https://drive.google.com/file/d/1cABmRM2IYZnpLi-kEHdsD7VKydjvsX11/view?usp=drive_link"
                    target='_blank' rel='noopener noreferrer' style={{ color: 'CadetBlue' }}>Diogo Santos</a> |&nbsp;
                <a href="https://drive.google.com/file/d/1IniKRhy0teXt0sUv-DA_Y44ovtmiEKkI/view?usp=sharing"
                    target='_blank' rel='noopener noreferrer' style={{ color: 'CadetBlue' }}>Jorge Fresco</a> |&nbsp;
                <a href="https://drive.google.com/file/d/17TEFCQbt6yWaJ2V0gpCOr4wMqTq5knq-/view?usp=sharing"
                    target='_blank' rel='noopener noreferrer' style={{ color: 'CadetBlue' }}>Liubov Mikhailovna</a> |&nbsp;
                <a href="https://drive.google.com/file/d/18wikfmN5S2LWJd63dxHTG5i93H0aLqmb/view?usp=share_link"
                    target='_blank' rel='noopener noreferrer' style={{ color: 'CadetBlue' }}>Wilker Martins</a>
                </span>
            </Typography>
            <Divider sx={{marginBottom: "50px", marginTop: "50px"}} />
            <Typography
                variant="h5"
                align="left"
                color="textSecondary"
                paragraph
                sx={{ fontWeight: "bold" }}
            >
                Tarefa 2
            </Typography>
            <Divider sx={{marginBottom: "50px", marginTop: "50px"}} />
            <Typography
                variant="h5"
                align="left"
                color="textSecondary"
                paragraph
                sx={{ fontWeight: "bold" }}
            >
                Tarefa 3
            </Typography>
        </Container>
    )
}