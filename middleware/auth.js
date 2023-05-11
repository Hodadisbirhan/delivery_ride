import {useAuth}  from "~/store/auth"
export default defineNuxtRouteMiddleware((to, from) => {

 const auth = useAuth();

  
  const cookie = useCookie("_hibirlink");
  console.log(cookie.value.token);
  const token = cookie.value.token 
  const data = JSON.parse(window.atob(token.split(".")[1]));
  console.log("data", " ", data);

  if (cookie.value) {
   auth.setUID(data.metadata.user_id)
   console.log(auth.$state.uid);
   return true;
  }

  return false;
  // if (to.params.id === '1') {
  //   return abortNavigation()
  // }
  // if (to.path !== '/') {
  //   return navigateTo('/')
  // }
});
