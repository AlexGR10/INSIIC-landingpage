/**
 * @file SoldaduraPaileria.tsx
 * @brief This component renders the service page for "Soldadura Especial y Pailería Industrial" (Special Welding and Industrial Boilermaking).
 *
 * It is divided into four main sections: Estructuras en Acero (Steel Structures), Escaleras Especializadas (Specialized Stairs), Puertas y Portones (Doors and Gates), and Trabajos Especiales (Special Jobs).
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
import BuildIcon from "@mui/icons-material/Build";
import StairsIcon from "@mui/icons-material/Stairs";
import DoorSlidingIcon from "@mui/icons-material/DoorSliding";
import HomeIcon from "@mui/icons-material/Home";
import ConstructionIcon from "@mui/icons-material/Construction";
import SecurityIcon from "@mui/icons-material/Security";
import BalconyIcon from "@mui/icons-material/Balcony";
import { motion, easeOut } from "framer-motion";
import EmailButton from "../../components/EmailButton";
import AceroCarbon from "../../assets/images/soldaduraEspecial/aceroCarbon.jpeg";
import EscaleraEspiral from "../../assets/images/soldaduraEspecial/escaleraEspiral.jpeg";
import EscaleraPersonalizada from "../../assets/images/soldaduraEspecial/escaleraPersonalizada.jpeg";
import PuertaModerna from "../../assets/images/soldaduraEspecial/puertaModerna.jpeg";
import PortonMedida from "../../assets/images/soldaduraEspecial/portonMedida.jpeg";
import AceroInoxidable from "../../assets/images/soldaduraEspecial/aceroInoxidable.jpeg";
import PuertaEspecial from "../../assets/images/soldaduraEspecial/puertaEspecial.jpeg";
import Terraza from "../../assets/images/soldaduraEspecial/terraza.jpeg";

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

- Soldadura Especial y Pailería Industrial
- Fabricación de estructuras metálicas
- Trabajos personalizados en acero

Por favor, contactarme para conocer más detalles sobre sus servicios y solicitar una cotización.

Quedo atento a su respuesta.

Saludos cordiales.`;

/**
 * @function ServiceTres
 * @brief A functional component that renders the Special Welding and Industrial Boilermaking service page.
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
                        Soldadura Especial y Pailería Industrial
                    </Typography>

                    <Typography
                        variant="h6"
                        color="text.secondary"
                        textAlign="center"
                        mb={6}
                    >
                        Fabricación y soldadura especializada en acero al carbón e inoxidable. Estructuras, escaleras, puertas y trabajos personalizados de alta calidad.
                    </Typography>
                </MotionBox>

                {/* Steel Structures */}
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
                        Estructuras en Acero
                    </Typography>
                    <Divider sx={{ mb: 4 }} />
                </MotionBox>

                <Box display="flex" flexWrap="wrap" gap={4} justifyContent="center" mb={6}>
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
                                    Trabajos en Acero al Carbón
                                </Typography>
                            </Box>

                            <Box
                                height={160}
                                mb={2}
                                sx={{
                                    backgroundColor: "#ccc",
                                    borderRadius: 2,
                                    backgroundImage: `url(${AceroCarbon})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                }}
                            />

                            <Typography color="text.secondary">
                                Fabricación de estructuras robustas en acero al carbón para aplicaciones industriales y comerciales.
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
                                <ConstructionIcon
                                    sx={{ fontSize: 36, color: theme.palette.primary.main }}
                                />
                                <Typography variant="h6" fontWeight={600}>
                                    Soldadura en Acero Inoxidable
                                </Typography>
                            </Box>

                            <Box
                                height={160}
                                mb={2}
                                sx={{
                                    backgroundColor: "#ccc",
                                    borderRadius: 2,
                                    backgroundImage: `url(${AceroInoxidable})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                }}
                            />

                            <Typography color="text.secondary">
                                Trabajos especializados en acero inoxidable con acabados de alta calidad y resistencia a la corrosión.
                            </Typography>
                        </CardContent>
                    </MotionCard>
                </Box>

                {/* Specialized Stairs */}
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
                        Escaleras Especializadas
                    </Typography>
                    <Divider sx={{ mb: 4 }} />
                </MotionBox>

                <Box display="flex" flexWrap="wrap" gap={4} justifyContent="center" mb={6}>
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
                                <StairsIcon
                                    sx={{ fontSize: 36, color: theme.palette.primary.main }}
                                />
                                <Typography variant="h6" fontWeight={600}>
                                    Escaleras en Espiral
                                </Typography>
                            </Box>

                            <Box
                                height={160}
                                mb={2}
                                sx={{
                                    backgroundColor: "#ccc",
                                    borderRadius: 2,
                                    backgroundImage: `url(${EscaleraEspiral})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                }}
                            />

                            <Typography color="text.secondary">
                                Diseño y fabricación de escaleras en espiral con acabados personalizados para espacios industriales y comerciales.
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
                                <BuildIcon
                                    sx={{ fontSize: 36, color: theme.palette.primary.main }}
                                />
                                <Typography variant="h6" fontWeight={600}>
                                    Escaleras Personalizadas
                                </Typography>
                            </Box>

                            <Box
                                height={160}
                                mb={2}
                                sx={{
                                    backgroundColor: "#ccc",
                                    borderRadius: 2,
                                    backgroundImage: `url(${EscaleraPersonalizada})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                }}
                            />

                            <Typography color="text.secondary">
                                Escaleras diseñadas a medida según especificaciones técnicas y estéticas particulares de cada proyecto.
                            </Typography>
                        </CardContent>
                    </MotionCard>
                </Box>

                {/* Doors and Gates */}
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
                        Puertas y Portones
                    </Typography>
                    <Divider sx={{ mb: 4 }} />
                </MotionBox>

                <Box display="flex" flexWrap="wrap" gap={4} justifyContent="center" mb={6}>
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
                                <DoorSlidingIcon
                                    sx={{ fontSize: 36, color: theme.palette.primary.main }}
                                />
                                <Typography variant="h6" fontWeight={600}>
                                    Puertas Modernas
                                </Typography>
                            </Box>

                            <Box
                                height={160}
                                mb={2}
                                sx={{
                                    backgroundColor: "#ccc",
                                    borderRadius: 2,
                                    backgroundImage: `url(${PuertaModerna})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                }}
                            />

                            <Typography color="text.secondary">
                                Fabricación de puertas con diseños modernos y funcionales para aplicaciones industriales y comerciales.
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
                                <SecurityIcon
                                    sx={{ fontSize: 36, color: theme.palette.primary.main }}
                                />
                                <Typography variant="h6" fontWeight={600}>
                                    Portones a Medida
                                </Typography>
                            </Box>

                            <Box
                                height={160}
                                mb={2}
                                sx={{
                                    backgroundColor: "#ccc",
                                    borderRadius: 2,
                                    backgroundImage: `url(${PortonMedida})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                }}
                            />

                            <Typography color="text.secondary">
                                Portones robustos diseñados según especificaciones exactas para máxima seguridad y funcionalidad.
                            </Typography>
                        </CardContent>
                    </MotionCard>
                </Box>

                {/* Special Jobs */}
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
                        Trabajos Especiales
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
                                <HomeIcon
                                    sx={{ fontSize: 36, color: theme.palette.primary.main }}
                                />
                                <Typography variant="h6" fontWeight={600}>
                                    Puertas Especializadas
                                </Typography>
                            </Box>

                            <Box
                                height={160}
                                mb={2}
                                sx={{
                                    backgroundColor: "#ccc",
                                    borderRadius: 2,
                                    backgroundImage: `url(${PuertaEspecial})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                }}
                            />

                            <Typography color="text.secondary">
                                Puertas con características especiales: cortafuego, blindadas o con requerimientos técnicos específicos.
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
                                <BalconyIcon
                                    sx={{ fontSize: 36, color: theme.palette.primary.main }}
                                />
                                <Typography variant="h6" fontWeight={600}>
                                    Estructuras para Terrazas
                                </Typography>
                            </Box>

                            <Box
                                height={160}
                                mb={2}
                                sx={{
                                    backgroundColor: "#ccc",
                                    borderRadius: 2,
                                    backgroundImage: `url(${Terraza})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                }}
                            />

                            <Typography color="text.secondary">
                                Diseño y construcción de estructuras metálicas para terrazas industriales y comerciales con acabados duraderos.
                            </Typography>
                        </CardContent>
                    </MotionCard>
                </Box>

                {/* Contact button with improved spacing */}
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
                        subject="Consulta - Soldadura y Pailería Industrial"
                        buttonText="SOLICITAR COTIZACIÓN"
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
