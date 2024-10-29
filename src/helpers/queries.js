export const login = (usuario) => {
    if (
      usuario.email === userAdmin.email &&
      usuario.password === userAdmin.password
    ) {
      sessionStorage.setItem("Chill Hotel", JSON.stringify(usuario.email));
      return true;
    } else {
      return false;
    }
  };