import { 
  Button, 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  DialogActions, 
  TextField, 
  Box, 
  IconButton,
  Typography,
  Alert,
  CircularProgress,
  Fade,
  Slide,
  Divider
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import CloseIcon from "@mui/icons-material/Close";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIcon from "@mui/icons-material/Phone";
import MessageIcon from "@mui/icons-material/Message";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import { useState } from "react";
import emailjs from '@emailjs/browser';
import type { TransitionProps } from '@mui/material/transitions';
import { forwardRef } from 'react';

interface EmailButtonProps {
  message: string;
  subject?: string;
  buttonText?: string;
  showIcon?: boolean;
  variant?: 'text' | 'outlined' | 'contained' | 'gradient' | any;
  color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning' | any;
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  disabled?: boolean;
  className?: string;
  sx?: any;
}

const SlideTransition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const EmailButton: React.FC<EmailButtonProps> = ({
  message,
  subject = "Consulta desde INSIIC",
  buttonText = "Enviar Correo",
  showIcon = true,
  variant = "contained",
  color = "primary",
  size = "medium",
  fullWidth = false,
  disabled = false,
  className,
  sx,
}) => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: message
  });
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setStatus('idle');
  };

  const handleChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [field]: event.target.value
    }));
  };

  const handleSubmit = async () => {
    setSending(true);
    setStatus('idle');

    try {
      // Configuración de EmailJS
      const serviceID = 'service_gh5qcag'; 
      const templateID = 'template_fo0rgg6';  
      const publicKey = 'AcLspHtiSBQB0TdQP';

      const templateParams = {
        subject: subject,
        from_name: formData.nombre,
        from_email: formData.email,
        phone: formData.telefono,
        message: formData.mensaje
      };

      await emailjs.send(serviceID, templateID, templateParams, publicKey);
      
      setStatus('success');
      setTimeout(() => {
        handleClose();
        // Resetear formulario
        setFormData({
          nombre: '',
          email: '',
          telefono: '',
          mensaje: message
        });
      }, 2000);

    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('error');
    } finally {
      setSending(false);
    }
  };

  const isFormValid = formData.nombre && formData.email && formData.mensaje;

  return (
    <>
      <Button
        onClick={handleOpen}
        startIcon={showIcon ? <EmailIcon /> : undefined}
        variant={variant as any}
        color={color as any}
        size={size}
        fullWidth={fullWidth}
        disabled={disabled}
        className={className}
        sx={{
          boxShadow: variant === 'gradient' 
            ? '0 8px 25px rgba(38, 89, 168, 0.3)'
            : undefined,
          '&:hover': {
            boxShadow: variant === 'gradient' 
              ? '0 12px 35px rgba(38, 89, 168, 0.4)'
              : undefined,
            transform: 'translateY(-2px)',
          },
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          ...sx
        }}
      >
        {buttonText}
      </Button>

      <Dialog 
        open={open} 
        onClose={handleClose}
        maxWidth="sm"
        fullWidth
        TransitionComponent={SlideTransition}
        keepMounted
        PaperProps={{
          elevation: 24,
          sx: {
            borderRadius: 4,
            background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
            border: '1px solid rgba(38, 89, 168, 0.1)',
            overflow: 'visible',
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '4px',
              background: 'linear-gradient(90deg, #2659A8 4.4%, #ED2A38 100%)',
              borderRadius: '16px 16px 0 0',
            }
          }
        }}
        BackdropProps={{
          sx: {
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            backdropFilter: 'blur(8px)',
          }
        }}
      >
        <DialogTitle sx={{ 
          pt: 4, 
          pb: 2, 
          px: 4,
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          background: 'transparent',
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box sx={{
              width: 48,
              height: 48,
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #2659A8 0%, #ED2A38 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 25px rgba(38, 89, 168, 0.3)',
            }}>
              <EmailIcon sx={{ color: 'white', fontSize: 24 }} />
            </Box>
            <Box>
              <Typography variant="h6" component="div" sx={{ 
                fontWeight: 700, 
                color: '#2659A8',
                fontSize: '1.3rem',
                lineHeight: 1.2,
              }}>
                Contactar a INSIIC
              </Typography>
              <Typography variant="body2" sx={{ 
                color: '#78797B',
                fontSize: '0.85rem',
                mt: 0.5
              }}>
                Nos pondremos en contacto contigo pronto
              </Typography>
            </Box>
          </Box>
          <IconButton 
            onClick={handleClose} 
            size="small"
            sx={{
              backgroundColor: 'rgba(120, 121, 123, 0.1)',
              color: '#78797B',
              '&:hover': {
                backgroundColor: 'rgba(237, 42, 56, 0.1)',
                color: '#ED2A38',
                transform: 'rotate(90deg)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent sx={{ px: 4, py: 2 }}>
          <Fade in={status === 'success'} timeout={300}>
            <Box>
              {status === 'success' && (
                <Alert 
                  severity="success" 
                  sx={{ 
                    mb: 3,
                    borderRadius: 2,
                    backgroundColor: 'rgba(76, 175, 80, 0.05)',
                    border: '1px solid rgba(76, 175, 80, 0.2)',
                    '& .MuiAlert-icon': {
                      color: '#4CAF50'
                    }
                  }}
                  icon={<CheckCircleIcon />}
                >
                  <Typography sx={{ fontWeight: 600, color: '#2E7D32' }}>
                    ¡Mensaje enviado exitosamente!
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#388E3C', mt: 0.5 }}>
                    Te contactaremos pronto
                  </Typography>
                </Alert>
              )}
            </Box>
          </Fade>
          
          <Fade in={status === 'error'} timeout={300}>
            <Box>
              {status === 'error' && (
                <Alert 
                  severity="error" 
                  sx={{ 
                    mb: 3,
                    borderRadius: 2,
                    backgroundColor: 'rgba(244, 67, 54, 0.05)',
                    border: '1px solid rgba(244, 67, 54, 0.2)',
                    '& .MuiAlert-icon': {
                      color: '#F44336'
                    }
                  }}
                  icon={<ErrorIcon />}
                >
                  <Typography sx={{ fontWeight: 600, color: '#C62828' }}>
                    Error al enviar el mensaje
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#D32F2F', mt: 0.5 }}>
                    Por favor intenta nuevamente
                  </Typography>
                </Alert>
              )}
            </Box>
          </Fade>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, mt: 3  }}>
            <TextField
              label="Nombre completo"
              value={formData.nombre}
              onChange={handleChange('nombre')}
              fullWidth
              required
              variant="outlined"
              InputProps={{
                startAdornment: <PersonIcon sx={{ mr: 1, color: '#78797B' }} />,
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: 2,
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 1)',
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#2659A8',
                    },
                  },
                  '&.Mui-focused': {
                    backgroundColor: 'rgba(255, 255, 255, 1)',
                    boxShadow: '0 0 0 3px rgba(38, 89, 168, 0.1)',
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#2659A8',
                      borderWidth: '2px',
                    },
                  },
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: '#2659A8',
                  fontWeight: 600,
                },
              }}
            />

            <TextField
              label="Correo electrónico"
              type="email"
              value={formData.email}
              onChange={handleChange('email')}
              fullWidth
              required
              variant="outlined"
              InputProps={{
                startAdornment: <EmailIcon sx={{ mr: 1, color: '#78797B' }} />,
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: 2,
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 1)',
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#2659A8',
                    },
                  },
                  '&.Mui-focused': {
                    backgroundColor: 'rgba(255, 255, 255, 1)',
                    boxShadow: '0 0 0 3px rgba(38, 89, 168, 0.1)',
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#2659A8',
                      borderWidth: '2px',
                    },
                  },
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: '#2659A8',
                  fontWeight: 600,
                },
              }}
            />

            <TextField
              label="Teléfono (opcional)"
              value={formData.telefono}
              onChange={handleChange('telefono')}
              fullWidth
              variant="outlined"
              InputProps={{
                startAdornment: <PhoneIcon sx={{ mr: 1, color: '#78797B' }} />,
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: 2,
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 1)',
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#2659A8',
                    },
                  },
                  '&.Mui-focused': {
                    backgroundColor: 'rgba(255, 255, 255, 1)',
                    boxShadow: '0 0 0 3px rgba(38, 89, 168, 0.1)',
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#2659A8',
                      borderWidth: '2px',
                    },
                  },
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: '#2659A8',
                  fontWeight: 600,
                },
              }}
            />

            <TextField
              label="Mensaje"
              value={formData.mensaje}
              onChange={handleChange('mensaje')}
              fullWidth
              required
              multiline
              rows={4}
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <MessageIcon sx={{ 
                    mr: 1, 
                    color: '#78797B',
                    alignSelf: 'flex-start',
                    mt: 1
                  }} />
                ),
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: 2,
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 1)',
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#2659A8',
                    },
                  },
                  '&.Mui-focused': {
                    backgroundColor: 'rgba(255, 255, 255, 1)',
                    boxShadow: '0 0 0 3px rgba(38, 89, 168, 0.1)',
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#2659A8',
                      borderWidth: '2px',
                    },
                  },
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: '#2659A8',
                  fontWeight: 600,
                },
              }}
            />
          </Box>
        </DialogContent>

        <Divider sx={{ mx: 2, backgroundColor: 'rgba(38, 89, 168, 0.1)' }} />

        <DialogActions sx={{ px: 4, py: 3, gap: 2 }}>
          <Button 
            onClick={handleClose} 
            variant="outlined"
            disabled={sending}
            sx={{
              borderColor: '#78797B',
              color: '#78797B',
              borderRadius: 2,
              px: 3,
              py: 1,
              fontWeight: 600,
              '&:hover': {
                borderColor: '#ED2A38',
                color: '#ED2A38',
                backgroundColor: 'rgba(237, 42, 56, 0.05)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            Cancelar
          </Button>
          <Button 
            onClick={handleSubmit}
            variant="gradient"
            disabled={!isFormValid || sending}
            startIcon={sending ? (
              <CircularProgress 
                size={18} 
                sx={{ color: 'white !important' }} 
              />
            ) : (
              <EmailIcon />
            )}
            sx={{
              px: 4,
              py: 1,
              minWidth: 160,
              fontWeight: 700,
              fontSize: '0.95rem',
              boxShadow: '0 8px 25px rgba(38, 89, 168, 0.3)',
              '&:hover': {
                boxShadow: '0 12px 35px rgba(38, 89, 168, 0.4)',
                transform: 'translateY(-1px)',
              },
              '&:disabled': {
                opacity: 0.7,
                transform: 'none',
              },
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            {sending ? 'Enviando...' : 'Enviar Mensaje'}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default EmailButton;