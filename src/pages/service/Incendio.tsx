import {
    Box,
    Card,
    CardContent,
    Container,
    Divider,
    Typography,
    useTheme,
} from "@mui/material";
import FireExtinguisherIcon from "@mui/icons-material/FireExtinguisher";
import SecurityIcon from "@mui/icons-material/Security";
import SensorsIcon from "@mui/icons-material/Sensors";
import AlarmIcon from "@mui/icons-material/Alarm";
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

const ServiceDos = () => {
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
                        Sistemas contra Incendio
                    </Typography>

                    <Typography
                        variant="h6"
                        color="text.secondary"
                        textAlign="center"
                        mb={6}
                    >
                        Soluciones integrales para prevención, detección y combate de incendios en entornos industriales y comerciales.
                    </Typography>
                </MotionBox>

                {/* Detección y Alarma */}
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
                        Detección y Alarma
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
                                <SensorsIcon
                                    sx={{ fontSize: 36, color: theme.palette.primary.main }}
                                />
                                <Typography variant="h6" fontWeight={600}>
                                    Sensores Inteligentes
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
                                Instalación de sensores de humo, calor y llama con tecnología de punta para detección temprana.
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
                                <AlarmIcon
                                    sx={{ fontSize: 36, color: theme.palette.primary.main }}
                                />
                                <Typography variant="h6" fontWeight={600}>
                                    Sistemas de Alarma
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
                                Centrales de alarma con notificación automática a cuerpos de emergencia y protocolos de evacuación.
                            </Typography>
                        </CardContent>
                    </MotionCard>
                </Box>

                {/* Sistemas de Supresión */}
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
                            Sistemas de Supresión
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
                                    <FireExtinguisherIcon
                                        sx={{ fontSize: 36, color: theme.palette.primary.main }}
                                    />
                                    <Typography variant="h6" fontWeight={600}>
                                        Rociadores Automáticos
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
                                    Redes de rociadores diseñadas según NFPA para protección de áreas específicas con activación automática.
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
                                    <SecurityIcon
                                        sx={{ fontSize: 36, color: theme.palette.primary.main }}
                                    />
                                    <Typography variant="h6" fontWeight={600}>
                                        Sistemas de Gas
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
                                    Sistemas de supresión con gases limpios (FM-200, Novec 1230) para proteger equipos sensibles y áreas críticas.
                                </Typography>
                            </CardContent>
                        </MotionCard>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default ServiceDos;