/**
 * @file Aire.tsx
 * @brief This component renders the service page for "Sistemas de Aire" (Air Systems).
 *
 * It is divided into three main sections: Lavado (Washing), Mecánico (Mechanical), and Acondicionado (Conditioning).
 * The component uses framer-motion for entry animations.
 */

import {
    Box,
    Card,
    CardContent,
    Container,
    Divider,
    Typography,
    useTheme,
} from "@mui/material";
import BuildIcon from "@mui/icons-material/Build";
import LocalCarWashIcon from "@mui/icons-material/LocalCarWash";
import FormatPaintIcon from "@mui/icons-material/FormatPaint";
import AirIcon from "@mui/icons-material/Air";
import { motion, easeOut } from "framer-motion";

const MotionCard = motion(Card);
const MotionBox = motion(Box);

/**
 * @function fadeInFrom
 * @brief A utility function to create fade-in animations from a specified direction.
 * @param {"left" | "right"} direction - The direction from which to fade in.
 * @returns {object} The animation variants for framer-motion.
 */
const fadeInFrom = (direction: "left" | "right") => ({
    hidden: { opacity: 0, x: direction === "left" ? -50 : 50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: easeOut
        }
    },
});

/**
 * @function ServiceUno
 * @brief A functional component that renders the Air Systems service page.
 *
 * @returns {JSX.Element} The rendered service page.
 */
const ServiceUno = () => {
    const theme = useTheme();

    return (
        <Box sx={{ minHeight: "100dvh", py: 8 }}>
            <Container maxWidth="lg">
                {/* Main Title */}
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
                        Sistemas de Aire
                    </Typography>

                    <Typography
                        variant="h6"
                        color="text.secondary"
                        textAlign="center"
                        mb={6}
                    >
                        Soluciones Profesionales en Aire Lavado, Mecánico y Acondicionado.
                    </Typography>
                </MotionBox>

                {/* Lavado y Acondicionado */}
                <MotionBox
                    initial="hidden"
                    animate="visible"
                    variants={fadeInFrom("right")}
                >
                    <Typography
                        variant="h4"
                        fontWeight={600}
                        color={theme.palette.secondary.main}
                        mb={2}
                    >
                        Lavado
                    </Typography>
                    <Divider sx={{ mb: 4 }} />
                </MotionBox>

                <Box display="flex" flexWrap="wrap" gap={4} justifyContent="center">
                    <MotionCard
                        initial="hidden"
                        animate="visible"
                        variants={fadeInFrom("left")}
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
                                <LocalCarWashIcon
                                    sx={{ fontSize: 36, color: theme.palette.primary.main }}
                                />
                                <Typography variant="h6" fontWeight={600}>
                                    Cabinas de Pintura
                                </Typography>
                            </Box>

                            {/* Image Placeholder */}
                            <Box
                                height={160}
                                mb={2}
                                sx={{
                                    backgroundColor: "#ccc",
                                    borderRadius: 2,
                                }}
                            />

                            <Typography color="text.secondary">
                                Instalamos cabinas de pintura con sistemas de extracción, filtrado y presurización para un acabado libre de contaminantes.
                            </Typography>
                        </CardContent>
                    </MotionCard>

                    <MotionCard
                        initial="hidden"
                        animate="visible"
                        variants={fadeInFrom("right")}
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
                                <FormatPaintIcon
                                    sx={{ fontSize: 36, color: theme.palette.primary.main }}
                                />
                                <Typography variant="h6" fontWeight={600}>
                                    Lavado y Secado Controlado
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
                                Sistemas para lavado y secado mediante aire caliente, ideales para procesos delicados o normativos.
                            </Typography>
                        </CardContent>
                    </MotionCard>
                </Box>

                {/* Sistemas Mecánico */}
                <Box mt={8}>
                    <MotionBox
                        initial="hidden"
                        animate="visible"
                        variants={fadeInFrom("left")}
                    >
                        <Typography
                            variant="h4"
                            fontWeight={600}
                            color={theme.palette.secondary.main}
                            mb={2}
                        >
                            Mecánico
                        </Typography>
                        <Divider sx={{ mb: 4 }} />
                    </MotionBox>

                    <Box display="flex" flexWrap="wrap" gap={4} justifyContent="center">
                        <MotionCard
                            initial="hidden"
                            animate="visible"
                            variants={fadeInFrom("left")}
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
                                    <BuildIcon
                                        sx={{ fontSize: 36, color: theme.palette.primary.main }}
                                    />
                                    <Typography variant="h6" fontWeight={600}>
                                        Mantenimiento de Compresores
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
                                    Servicio completo a compresores industriales, ya sean de tornillo o pistón.
                                </Typography>
                            </CardContent>
                        </MotionCard>

                        <MotionCard
                            initial="hidden"
                            animate="visible"
                            variants={fadeInFrom("right")}
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
                                    <AirIcon
                                        sx={{ fontSize: 36, color: theme.palette.primary.main }}
                                    />
                                    <Typography variant="h6" fontWeight={600}>
                                        Colectores de Polvo
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
                                    Instalación de sistemas de extracción con filtros ciclónicos o HEPA para ambientes industriales limpios.
                                </Typography>
                            </CardContent>
                        </MotionCard>
                    </Box>
                </Box>

                {/* Sistemas Acondicionado */}
                <Box mt={8}>
                    <MotionBox
                        initial="hidden"
                        animate="visible"
                        variants={fadeInFrom("left")}
                    >
                        <Typography
                            variant="h4"
                            fontWeight={600}
                            color={theme.palette.secondary.main}
                            mb={2}
                        >
                            Acondicionado
                        </Typography>
                        <Divider sx={{ mb: 4 }} />
                    </MotionBox>

                    <Box display="flex" flexWrap="wrap" gap={4} justifyContent="center">
                        <MotionCard
                            initial="hidden"
                            animate="visible"
                            variants={fadeInFrom("left")}
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
                                    <BuildIcon
                                        sx={{ fontSize: 36, color: theme.palette.primary.main }}
                                    />
                                    <Typography variant="h6" fontWeight={600}>
                                        Mantenimiento de Compresores
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
                                    Servicio completo a compresores industriales, ya sean de tornillo o pistón.
                                </Typography>
                            </CardContent>
                        </MotionCard>

                        <MotionCard
                            initial="hidden"
                            animate="visible"
                            variants={fadeInFrom("right")}
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
                                    <AirIcon
                                        sx={{ fontSize: 36, color: theme.palette.primary.main }}
                                    />
                                    <Typography variant="h6" fontWeight={600}>
                                        Colectores de Polvo
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
                                    Instalación de sistemas de extracción con filtros ciclónicos o HEPA para ambientes industriales limpios.
                                </Typography>
                            </CardContent>
                        </MotionCard>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default ServiceUno;