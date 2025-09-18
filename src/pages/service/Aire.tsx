/**
 * @file Aire.tsx
 * @brief Página de servicio para "Sistemas de Aire".
 *
 * Contiene tres secciones: Aire Húmedo, Aire Mecánico y Aire Acondicionado.
 * Usa framer-motion para animaciones de entrada.
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
import AcUnitIcon from "@mui/icons-material/AcUnit";
import AirIcon from "@mui/icons-material/Air";
import BuildIcon from "@mui/icons-material/Build";
import RoofingIcon from "@mui/icons-material/Roofing";
import { motion, easeOut } from "framer-motion";
import EmailButton from "../../components/EmailButton";

// Imágenes
import EquipoHumedo from "../../assets/images/aire/equipoHumedo.jpeg";
import Extractor36 from "../../assets/images/aire/extractor36.jpeg";
import Extractor18 from "../../assets/images/aire/extractor18.jpeg";
import DucteriaRedonda from "../../assets/images/aire/ducteriaRedonda.jpeg";
import DucteriaCuadrada from "../../assets/images/aire/ducteriaCuadrada.jpeg";
import Campana from "../../assets/images/aire/campana.jpeg";
import Minisplit from "../../assets/images/aire/minisplit.jpeg";
import AireLavado from "../../assets/images/aire/aireLavado.jpeg";
import Extraccion from "../../assets/images/aire/extraccion.jpeg";
import UnidadDucteria from "../../assets/images/aire/unidadDucteria.jpeg";
import CentralLavado from "../../assets/images/aire/centralLavado.jpeg";
import ColectorPolvo from "../../assets/images/aire/colectorPolvo.jpeg";

const MotionCard = motion(Card);
const MotionBox = motion(Box);

const fadeInFrom = (direction: "left" | "right") => ({
    hidden: { opacity: 0, x: direction === "left" ? -50 : 50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: easeOut }
    },
});

const generalContactMessage = `Estoy interesado en los servicios de INSIIC. 
Me gustaría recibir más información sobre sistemas de aire: húmedo, mecánico y acondicionado.
Por favor, envíenme una cotización o detalles adicionales.

Gracias de antemano.`;

/**
 * @function ServiceAire
 * @brief Página de servicios de sistemas de aire.
 */
const ServiceAire = () => {
    const theme = useTheme();

    const cardStyle = {
        flex: "1 1 300px",
        maxWidth: 500,
        borderRadius: 3,
        p: 2,
        backgroundColor: theme.palette.background.paper,
        boxShadow: 3,
    };

    const imageBox = (img: string) => ({
        height: 160,
        mb: 2,
        borderRadius: 2,
        backgroundColor: "#ccc",
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    });

    return (
        <Box sx={{ minHeight: "100dvh", py: 8 }}>
            <Container maxWidth="lg">

                {/* Título principal */}
                <MotionBox initial="hidden" animate="visible" variants={fadeInFrom("left")}>
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
                        Soluciones en aire húmedo, mecánico y acondicionado. Ingeniería, instalación y mantenimiento a la medida.
                    </Typography>
                </MotionBox>

                {/* Aire Húmedo */}
                <MotionBox initial="hidden" animate="visible" variants={fadeInFrom("right")}>
                    <Typography
                        variant="h4"
                        fontWeight={600}
                        color={theme.palette.secondary.main}
                        mb={2}
                    >
                        Aire Húmedo
                    </Typography>
                    <Divider sx={{ mb: 4 }} />
                </MotionBox>

                <Box display="flex" flexWrap="wrap" gap={4} justifyContent="center">
                    <MotionCard initial="hidden" animate="visible" variants={fadeInFrom("left")} sx={cardStyle}>
                        <CardContent>
                            <Box display="flex" alignItems="center" gap={2} mb={2}>
                                <RoofingIcon sx={{ fontSize: 36, color: theme.palette.primary.main }} />
                                <Typography variant="h6" fontWeight={600}>
                                    Manejadoras de Aire y Humedad
                                </Typography>
                            </Box>
                            <Box sx={imageBox(EquipoHumedo)} />
                            <Typography color="text.secondary">
                                Ingeniería, proyecto e instalación de manejadoras de aire acondicionado y humedad industriales.
                            </Typography>
                        </CardContent>
                    </MotionCard>

                    <MotionCard initial="hidden" animate="visible" variants={fadeInFrom("right")} sx={cardStyle}>
                        <CardContent>
                            <Box display="flex" alignItems="center" gap={2} mb={2}>
                                <AirIcon sx={{ fontSize: 36, color: theme.palette.primary.main }} />
                                <Typography variant="h6" fontWeight={600}>
                                    Centrales de Aire Lavado
                                </Typography>
                            </Box>
                            <Box sx={imageBox(CentralLavado)} />
                            <Typography color="text.secondary">
                                Diseño e instalación de centrales de aire lavado y control de humedad industrial.
                            </Typography>
                        </CardContent>
                    </MotionCard>

                    <MotionCard initial="hidden" animate="visible" variants={fadeInFrom("left")} sx={cardStyle}>
                        <CardContent>
                            <Box display="flex" alignItems="center" gap={2} mb={2}>
                                <AcUnitIcon sx={{ fontSize: 36, color: theme.palette.primary.main }} />
                                <Typography variant="h6" fontWeight={600}>
                                    Aparatos de Aire Lavado
                                </Typography>
                            </Box>
                            <Box sx={imageBox(AireLavado)} />
                            <Typography color="text.secondary">
                                Suministro, instalación y mantenimiento de aparatos de aire lavado para uso industrial o residencial.
                            </Typography>
                        </CardContent>
                    </MotionCard>
                </Box>

                {/* Aire Mecánico */}
                <Box mt={8}>
                    <MotionBox initial="hidden" animate="visible" variants={fadeInFrom("left")}>
                        <Typography
                            variant="h4"
                            fontWeight={600}
                            color={theme.palette.secondary.main}
                            mb={2}
                        >
                            Aire Mecánico
                        </Typography>
                        <Divider sx={{ mb: 4 }} />
                    </MotionBox>

                    <Box display="flex" flexWrap="wrap" gap={4} justifyContent="center">
                        <MotionCard initial="hidden" animate="visible" variants={fadeInFrom("left")} sx={cardStyle}>
                            <CardContent>
                                <Box display="flex" alignItems="center" gap={2} mb={2}>
                                    <BuildIcon sx={{ fontSize: 36, color: theme.palette.primary.main }} />
                                    <Typography variant="h6" fontWeight={600}>
                                        Extractores Atmosféricos 36"
                                    </Typography>
                                </Box>
                                <Box sx={imageBox(Extractor36)} />
                                <Typography color="text.secondary">
                                    Fabricación e instalación de extractores atmosféricos de 36" con capacidad de 13,000 m³/h en lámina calibre 24 y 26.
                                </Typography>
                            </CardContent>
                        </MotionCard>

                        <MotionCard initial="hidden" animate="visible" variants={fadeInFrom("right")} sx={cardStyle}>
                            <CardContent>
                                <Box display="flex" alignItems="center" gap={2} mb={2}>
                                    <BuildIcon sx={{ fontSize: 36, color: theme.palette.primary.main }} />
                                    <Typography variant="h6" fontWeight={600}>
                                        Extractores Atmosféricos 18"
                                    </Typography>
                                </Box>
                                <Box sx={imageBox(Extractor18)} />
                                <Typography color="text.secondary">
                                    Fabricación e instalación de extractores atmosféricos de 18" con capacidad de 7,000 m³/h en lámina calibre 24 y 26.
                                </Typography>
                            </CardContent>
                        </MotionCard>

                        <MotionCard initial="hidden" animate="visible" variants={fadeInFrom("left")} sx={cardStyle}>
                            <CardContent>
                                <Box display="flex" alignItems="center" gap={2} mb={2}>
                                    <AirIcon sx={{ fontSize: 36, color: theme.palette.primary.main }} />
                                    <Typography variant="h6" fontWeight={600}>
                                        Sistemas de Extracción e Inyección
                                    </Typography>
                                </Box>
                                <Box sx={imageBox(Extraccion)} />
                                <Typography color="text.secondary">
                                    Fabricación e instalación de sistemas de extracción e inyección de aire mecánico con diseño a medida.
                                </Typography>
                            </CardContent>
                        </MotionCard>

                        <MotionCard initial="hidden" animate="visible" variants={fadeInFrom("right")} sx={cardStyle}>
                            <CardContent>
                                <Box display="flex" alignItems="center" gap={2} mb={2}>
                                    <BuildIcon sx={{ fontSize: 36, color: theme.palette.primary.main }} />
                                    <Typography variant="h6" fontWeight={600}>
                                        Campanas Industriales
                                    </Typography>
                                </Box>
                                <Box sx={imageBox(Campana)} />
                                <Typography color="text.secondary">
                                    Fabricación e instalación de campanas industriales en acero inoxidable, con extracción mecánica a medida.
                                </Typography>
                            </CardContent>
                        </MotionCard>

                        <MotionCard initial="hidden" animate="visible" variants={fadeInFrom("left")} sx={cardStyle}>
                            <CardContent>
                                <Box display="flex" alignItems="center" gap={2} mb={2}>
                                    <BuildIcon sx={{ fontSize: 36, color: theme.palette.primary.main }} />
                                    <Typography variant="h6" fontWeight={600}>
                                        Ductería Redonda y Cuadrada
                                    </Typography>
                                </Box>
                                <Box sx={imageBox(DucteriaRedonda)} />
                                <Typography color="text.secondary">
                                    Fabricación e instalación de ductería redonda o cuadrada de cualquier diámetro en todo tipo de lámina.
                                </Typography>
                            </CardContent>
                        </MotionCard>

                        <MotionCard initial="hidden" animate="visible" variants={fadeInFrom("right")} sx={cardStyle}>
                            <CardContent>
                                <Box display="flex" alignItems="center" gap={2} mb={2}>
                                    <AirIcon sx={{ fontSize: 36, color: theme.palette.primary.main }} />
                                    <Typography variant="h6" fontWeight={600}>
                                        Colectores de Polvo
                                    </Typography>
                                </Box>
                                <Box sx={imageBox(ColectorPolvo)} />
                                <Typography color="text.secondary">
                                    Diseño y fabricación de colectores de polvo industriales.
                                </Typography>
                            </CardContent>
                        </MotionCard>
                    </Box>
                </Box>

                {/* Aire Acondicionado */}
                <Box mt={8}>
                    <MotionBox initial="hidden" animate="visible" variants={fadeInFrom("left")}>
                        <Typography
                            variant="h4"
                            fontWeight={600}
                            color={theme.palette.secondary.main}
                            mb={2}
                        >
                            Aire Acondicionado
                        </Typography>
                        <Divider sx={{ mb: 4 }} />
                    </MotionBox>

                    <Box display="flex" flexWrap="wrap" gap={4} justifyContent="center" mb={8}>
                        <MotionCard initial="hidden" animate="visible" variants={fadeInFrom("left")} sx={cardStyle}>
                            <CardContent>
                                <Box display="flex" alignItems="center" gap={2} mb={2}>
                                    <AcUnitIcon sx={{ fontSize: 36, color: theme.palette.primary.main }} />
                                    <Typography variant="h6" fontWeight={600}>
                                        Minisplits
                                    </Typography>
                                </Box>
                                <Box sx={imageBox(Minisplit)} />
                                <Typography color="text.secondary">
                                    Suministro, instalación y mantenimiento de minisplits de todo tipo y capacidad.
                                </Typography>
                            </CardContent>
                        </MotionCard>

                        <MotionCard initial="hidden" animate="visible" variants={fadeInFrom("right")} sx={cardStyle}>
                            <CardContent>
                                <Box display="flex" alignItems="center" gap={2} mb={2}>
                                    <AcUnitIcon sx={{ fontSize: 36, color: theme.palette.primary.main }} />
                                    <Typography variant="h6" fontWeight={600}>
                                        Unidades de Paquete con Ductería
                                    </Typography>
                                </Box>
                                <Box sx={imageBox(UnidadDucteria)} />
                                <Typography color="text.secondary">
                                    Suministro e instalación de unidades de paquete con ductería y aislamientos térmicos.
                                </Typography>
                            </CardContent>
                        </MotionCard>
                    </Box>
                </Box>

                <Box sx={{ display: "flex", justifyContent: "center", mt: 8, mb: 4 }}>
                    <EmailButton
                        message={generalContactMessage}
                        subject="Consulta - Sistemas de Aire"
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

export default ServiceAire;