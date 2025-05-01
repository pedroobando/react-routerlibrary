export const sleep = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const getInitials = (fullName: string): string => {
  // Dividir el nombre completo en partes
  const nameParts = fullName.trim().split(' ');

  // Mapear cada parte a su primera letra y convertirla a mayúsculas
  const initials = nameParts.map((part) => part.charAt(0).toUpperCase());

  // Unir las iniciales en un solo string
  return initials.join('');
};
