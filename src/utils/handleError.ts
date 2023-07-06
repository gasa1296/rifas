import { toast } from "react-hot-toast";

export const handleError = (error: any) => {

  let message = ''

  const detail = error.response.data.detail

   switch(error.response?.status){
    case 401: message = detail || "Sorry, but you do not have permission to access this page. Please login."; break;
    case 404: message =  detail ||"Sorry, but the page you're looking for doesn't exist. Please check the URL and try again."; break;
    case 500: message = detail || "Sorry, but there was a server error processing your request. Please try again later."; break;
    default: message = error?.response?.data?.message ?? error.message
  }

   toast.error(message)



}