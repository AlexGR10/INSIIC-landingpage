import {
    Box,
    Card,
    CardContent,
    Container,
    Divider,
    Typography,
    useTheme,
} from "@mui/material";
import EngineeringIcon from "@mui/icons-material/Engineering";
import WaterIcon from "@mui/icons-material/Water";
import CleanHandsIcon from "@mui/icons-material/CleanHands";
import StorageIcon from "@mui/icons-material/Storage";
import { motion, easeOut } from "framer-motion";

const MotionCard = motion(Card);
const MotionBox = motion(Box);

const fadeInFrom = (direction: "left" | "right", delay = 0) => ({
    hidden: { opacity: 0, x: direction === "left" ? -50 : 50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: easeOut,
            delay: 0.2
        }
    },
});

const ServiceTres = () => {
    const theme = useTheme();

    return (
        <Box sx={{ minHeight: "100dvh", py: 8 }}>
            <Container maxWidth="lg">
                {/* Título principal */}
                <MotionBox
                    initial="hidden"
                    animate="visible"
                    variants={fadeInFrom("left")}
                >
                    <Typography
                        variant="h3"
                        fontWeight={700}
                        textAlign="center"
                        color={theme.palette.primary.main}
                        gutterBottom
                    >
                        Sistemas de Supresión
                    </Typography>

                    <Typography
                        variant="h6"
                        color="text.secondary"
                        textAlign="center"
                        mb={6}
                    >
                        Tecnología avanzada para la supresión eficiente de incendios en entornos especializados.
                    </Typography>
                </MotionBox>

                {/* Sistemas Especializados */}
                <MotionBox
                    initial="hidden"
                    animate="visible"
                    variants={fadeInFrom("right", 0.1)}
                >
                    <Typography
                        variant="h4"
                        fontWeight={600}
                        color={theme.palette.secondary.main}
                        mb={2}
                    >
                        Sistemas Especializados
                    </Typography>
                    <Divider sx={{ mb: 4 }} />
                </MotionBox>

                <Box display="flex" flexWrap="wrap" gap={4} justifyContent="center">
                    <MotionCard
                        initial="hidden"
                        animate="visible"
                        variants={fadeInFrom("left", 0.2)}
                        sx={{
                            flex: "1 1 300px",
                            maxWidth: 500,
                            borderRadius: 3,
                            p: 2,
                            backgroundColor: theme.palette.background.paper,
                            boxShadow: 3,
                        }}
                    >
                        <CardContent>
                            <Box display="flex" alignItems="center" gap={2} mb={2}>
                                <EngineeringIcon
                                    sx={{ fontSize: 36, color: theme.palette.primary.main }}
                                />
                                <Typography variant="h6" fontWeight={600}>
                                    Supresión Química
                                </Typography>
                            </Box>

                            <Box
                                height={160}
                                mb={2}
                                sx={{
                                    backgroundColor: "#ccc",
                                    borderRadius: 2,
                                }}
                            />

                            <Typography color="text.secondary">
                                Sistemas con agentes químicos secos para áreas con equipos eléctricos o combustibles líquidos.
                            </Typography>
                        </CardContent>
                    </MotionCard>

                    <MotionCard
                        initial="hidden"
                        animate="visible"
                        variants={fadeInFrom("right", 0.3)}
                        sx={{
                            flex: "1 1 300px",
                            maxWidth: 500,
                            borderRadius: 3,
                            p: 2,
                            backgroundColor: theme.palette.background.paper,
                            boxShadow: 3,
                        }}
                    >
                        <CardContent>
                            <Box display="flex" alignItems="center" gap={2} mb={2}>
                                <WaterIcon
                                    sx={{ fontSize: 36, color: theme.palette.primary.main }}
                                />
                                <Typography variant="h6" fontWeight={600}>
                                    Nebulización de Agua
                                </Typography>
                            </Box>

                            <Box
                                height={160}
                                mb={2}
                                sx={{
                                    backgroundColor: "#ccc",
                                    borderRadius: 2,
                                }}
                            />

                            <Typography color="text.secondary">
                                Tecnología de agua nebulizada para supresión eficiente con mínimo consumo hídrico.
                            </Typography>
                        </CardContent>
                    </MotionCard>
                </Box>

                {/* Aplicaciones Industriales */}
                <Box mt={8}>
                    <MotionBox
                        initial="hidden"
                        animate="visible"
                        variants={fadeInFrom("left", 0.1)}
                    >
                        <Typography
                            variant="h4"
                            fontWeight={600}
                            color={theme.palette.secondary.main}
                            mb={2}
                        >
                            Aplicaciones Industriales
                        </Typography>
                        <Divider sx={{ mb: 4 }} />
                    </MotionBox>

                    <Box display="flex" flexWrap="wrap" gap={4} justifyContent="center">
                        <MotionCard
                            initial="hidden"
                            animate="visible"
                            variants={fadeInFrom("left", 0.2)}
                            sx={{
                                flex: "1 1 300px",
                                maxWidth: 500,
                                borderRadius: 3,
                                p: 2,
                                backgroundColor: theme.palette.background.paper,
                                boxShadow: 3,
                            }}
                        >
                            <CardContent>
                                <Box display="flex" alignItems="center" gap={2} mb={2}>
                                    <CleanHandsIcon
                                        sx={{ fontSize: 36, color: theme.palette.primary.main }}
                                    />
                                    <Typography variant="h6" fontWeight={600}>
                                        Cocinas Industriales
                                    </Typography>
                                </Box>

                                <Box
                                    height={160}
                                    mb={2}
                                    sx={{
                                        backgroundColor: "#ccc",
                                        borderRadius: 2,
                                    }}
                                />

                                <Typography color="text.secondary">
                                    Sistemas ANSUL para protección de cocinas y áreas de preparación de alimentos.
                                </Typography>
                            </CardContent>
                        </MotionCard>

                        <MotionCard
                            initial="hidden"
                            animate="visible"
                            variants={fadeInFrom("right", 0.3)}
                            sx={{
                                flex: "1 1 300px",
                                maxWidth: 500,
                                borderRadius: 3,
                                p: 2,
                                backgroundColor: theme.palette.background.paper,
                                boxShadow: 3,
                            }}
                        >
                            <CardContent>
                                <Box display="flex" alignItems="center" gap={2} mb={2}>
                                    <StorageIcon
                                        sx={{ fontSize: 36, color: theme.palette.primary.main }}
                                    />
                                    <Typography variant="h6" fontWeight={600}>
                                        Centros de Datos
                                    </Typography>
                                </Box>

                                <Box
                                    height={160}
                                    mb={2}
                                    sx={{
                                        backgroundColor: "#ccc",
                                        borderRadius: 2,
                                    }}
                                />

                                <Typography color="text.secondary">
                                    Soluciones con gases limpios para protección de servidores y equipos electrónicos sensibles.
                                </Typography>
                            </CardContent>
                        </MotionCard>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default ServiceTres;