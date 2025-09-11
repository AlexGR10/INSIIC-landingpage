/**
 * @file Incendio.tsx
 * @brief This component renders the service page for "Sistemas de Supresión y Redes Contra Incendio" (Suppression Systems and Fire Networks).
 *
 * It is divided into three main sections: Equipos de Supresión (Suppression Equipment), Redes Contra Incendio (Fire Networks), and Aplicaciones Industriales (Industrial Applications).
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
import EngineeringIcon from "@mui/icons-material/Engineering";
import WaterIcon from "@mui/icons-material/Water";
import CleanHandsIcon from "@mui/icons-material/CleanHands";
import StorageIcon from "@mui/icons-material/Storage";
import { motion, easeOut } from "framer-motion";
import EmailButton from "../../components/EmailButton";
import Supresion from "../../assets/images/contraIncendio/sistemaSupresion3.jpeg";
import CocinaIndustrial from "../../assets/images/contraIncendio/cocinaIndustrial.jpeg"
import MantenimientoIncendio from "../../assets/images/contraIncendio/mantenimientoContaIncendio.jpeg"
import EquipoCertificado from "../../assets/images/contraIncendio/equiposCertificados.jpeg"
import SupresionAgua from "../../assets/images/contraIncendio/supresionAgua.jpeg"
import DeteccionHumo from "../../assets/images/contraIncendio/deteccionHumo.jpeg"

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

const generalContactMessage = `Estoy interesado en los servicios de INSIIC. Me gustaría recibir más información sobre:

- Redes Contra Incendio
- Equipos de Supresión

Por favor, contactarme para conocer más detalles sobre sus servicios y solicitar una cotización.

Quedo atento a su respuesta.

Saludos cordiales.`;

/**
 * @function ServiceTres
 * @brief A functional component that renders the Fire Suppression and Networks service page.
 *
 * @returns {JSX.Element} The rendered service page.
 */
const ServiceTres = () => {
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
                        Sistemas de Supresión y Redes Contra Incendio
                    </Typography>

                    <Typography
                        variant="h6"
                        color="text.secondary"
                        textAlign="center"
                        mb={6}
                    >
                        Tecnología certificada contra incendio. Tales como: Sistemas de Supresión, Sistemas Contra Incendio con Agua y Espuma, Sistemas de Detección.
                    </Typography>
                </MotionBox>

                {/* Suppression Equipment */}
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
                        Equipos de Supresión
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
                                    backgroundImage: `url(${Supresion})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
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
                                <WaterIcon
                                    sx={{ fontSize: 36, color: theme.palette.primary.main }}
                                />
                                <Typography variant="h6" fontWeight={600}>
                                    Supresión en Cocinas Industriales
                                </Typography>
                            </Box>

                            <Box
                                height={160}
                                mb={2}
                                sx={{
                                    backgroundColor: "#ccc",
                                    borderRadius: 2,
                                    backgroundImage: `url(${CocinaIndustrial})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                }}
                            />

                            <Typography color="text.secondary">
                                Tecnología de supresión para entornos de cocinas industriales.
                            </Typography>
                        </CardContent>
                    </MotionCard>
                </Box>

                {/* Fire Networks */}
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
                            Redes Contra Incendio
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
                                    <CleanHandsIcon
                                        sx={{ fontSize: 36, color: theme.palette.primary.main }}
                                    />
                                    <Typography variant="h6" fontWeight={600}>
                                        Mantenimientos Preventivos y Correctivos
                                    </Typography>
                                </Box>

                                <Box
                                    height={160}
                                    mb={2}
                                    sx={{
                                        backgroundColor: "#ccc",
                                        borderRadius: 2,
                                        backgroundImage: `url(${MantenimientoIncendio})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        backgroundRepeat: "no-repeat",
                                    }}
                                />

                                <Typography color="text.secondary">
                                    Proyectos de redes contra incendio de todo tipo equipos UL/ FM  normados y certificados NOM del país.
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
                                    <StorageIcon
                                        sx={{ fontSize: 36, color: theme.palette.primary.main }}
                                    />
                                    <Typography variant="h6" fontWeight={600}>
                                        Sistemas de Detección Certificados
                                    </Typography>
                                </Box>

                                <Box
                                    height={160}
                                    mb={2}
                                    sx={{
                                        backgroundColor: "#ccc",
                                        borderRadius: 2,
                                        backgroundImage: `url(${EquipoCertificado})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        backgroundRepeat: "no-repeat",
                                    }}
                                />

                                <Typography color="text.secondary">
                                    Mantenimientos preventivos y correctivos en sistemas de detección certificados.
                                </Typography>
                            </CardContent>
                        </MotionCard>
                    </Box>
                </Box>

                {/* Industrial Applications */}
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
                            Aplicaciones Industriales
                        </Typography>
                        <Divider sx={{ mb: 4 }} />
                    </MotionBox>

                    <Box display="flex" flexWrap="wrap" gap={4} justifyContent="center" mb={8}>
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
                                    <WaterIcon
                                        sx={{ fontSize: 36, color: theme.palette.primary.main }}
                                    />
                                    <Typography variant="h6" fontWeight={600}>
                                        Sistemas de Supresión en Agua
                                    </Typography>
                                </Box>

                                <Box
                                    height={160}
                                    mb={2}
                                    sx={{
                                        backgroundColor: "#ccc",
                                        borderRadius: 2,
                                        backgroundImage: `url(${SupresionAgua})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        backgroundRepeat: "no-repeat",
                                    }}
                                />

                                <Typography color="text.secondary">
                                    Sistemas de supresión en agua y espumas normados para tanques de almacenamiento. Ingeniería y mantenimientos.
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
                                    <EngineeringIcon
                                        sx={{ fontSize: 36, color: theme.palette.primary.main }}
                                    />
                                    <Typography variant="h6" fontWeight={600}>
                                        Detección de Humo y Calor
                                    </Typography>
                                </Box>

                                <Box
                                    height={160}
                                    mb={2}
                                    sx={{
                                        backgroundColor: "#ccc",
                                        borderRadius: 2,
                                        backgroundImage: `url(${DeteccionHumo})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        backgroundRepeat: "no-repeat",
                                    }}
                                />

                                <Typography color="text.secondary">
                                    Proyectos en detección de humo, calor y gases. Ingeniería e instalación.
                                </Typography>
                            </CardContent>
                        </MotionCard>
                    </Box>
                </Box>

                <Box 
                    sx={{ 
                        display: "flex", 
                        justifyContent: "center", 
                        mt: 8,
                        mb: 4 
                    }}
                >
                    <EmailButton
                        message={generalContactMessage}
                        subject="Consulta - Sistemas Contra Incendio"
                        buttonText="SOLICITAR INFORMACIÓN"
                        variant="gradient"
                        size="medium"
                        showIcon={false}
                        sx={{
                            maxWidth: { xs: "280px", sm: "320px" },
                            py: 1.5,
                            px: 4,
                            borderRadius: 3,
                            fontSize: { xs: "0.9rem", sm: "1rem" },
                            fontWeight: 600,
                        }}
                    />
                </Box>
            </Container>
        </Box>
    );
};

export default ServiceTres;
