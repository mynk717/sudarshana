// After you share your logo.png colors, we'll update these
export const logoColors = {
    primary: '#1a56db',     // Main brand blue (extract from logo)
    secondary: '#f59e0b',   // Accent orange/yellow (extract from logo)
    dark: '#0f172a',        // Dark text/accent
    light: '#f8fafc',       // Light background
    steel: '#64748b',       // Industrial gray
  };
  
  // Color utility functions
  export const getLogoGradient = () => 
    `linear-gradient(135deg, ${logoColors.primary}, ${logoColors.secondary})`;
  
  export const getLogoPrimaryRgb = () => {
    // Convert hex to RGB for transparency usage
    const hex = logoColors.primary.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    return `${r}, ${g}, ${b}`;
  };
  