export const validateAuthPath = (pathname: string, authorizated: boolean) => {
  if (!authorizated) {
    if (pathname === "/donaciones" || pathname === "/rifas/crear_rifas") {
      return true;
    }
  }

  return false;
};
