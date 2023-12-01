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
                <a href="https://drive.google.com/file/d/1CoT1GL2Mo632XKB9rPh2hA9H3JfNPloz/view?usp=drive_link"
                    target='_blank' rel='noopener noreferrer' style={{ color: 'CadetBlue' }}>Link para o relatório</a>
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
                <a href="https://drive.google.com/file/d/1y0To4ur79U084aaOxPNvvAO0Hvf41CF4/view?usp=drive_link"
                    target='_blank' rel='noopener noreferrer' style={{ color: 'CadetBlue' }}>Link para o relatório</a>
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
                <a href="https://drive.google.com/file/d/1oghud0ia4SpTRxIpbzesPzEZXsDM79Wb/view?usp=sharing"
                    target='_blank' rel='noopener noreferrer' style={{ color: 'CadetBlue' }}>Link para o relatório</a>
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
                <a href="https://drive.google.com/file/d/1FaSvuCRCsJSTFw7KiXy8OPamneKp_4DE/view?usp=sharing"
                    target='_blank' rel='noopener noreferrer' style={{ color: 'CadetBlue' }}>Link para o relatório</a>
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
                <a href="https://drive.google.com/file/d/1vxueCssHNKAN_igrfcMmerkCFueehaHF/view?usp=sharing"
                    target='_blank' rel='noopener noreferrer' style={{ color: 'CadetBlue' }}>Link para o relatório recebido</a>
            </Typography>
            <Typography
                variant="paragraph"
                align="left"
                color="textSecondary"
                mt={2}
                paragraph
            >
                <a href="https://drive.google.com/file/d/1vxueCssHNKAN_igrfcMmerkCFueehaHF/view?usp=sharing"
                    target='_blank' rel='noopener noreferrer' style={{ color: 'CadetBlue' }}>Link para o relatório recebido</a>
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
                <a href="https://drive.google.com/file/d/11n64BmC0QrAnOUfC9b0vFlB9XPo-LSef/view?usp=sharing"
                    target='_blank' rel='noopener noreferrer' style={{ color: 'CadetBlue' }}>Link para o relatório</a>
            </Typography>
        </Container>
    )
}