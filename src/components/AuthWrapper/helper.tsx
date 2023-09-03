export const validateAuthPath = (pathname: string, authorizated: boolean) => {
  console.log("first", pathname);
  if (!authorizated) {
    if (
      pathname === "/donaciones" ||
      pathname === "/rifas/crear_rifas" ||
      pathname === "/rifas/[id]"
    ) {
      return true;
    }
  }

  return false;
};
