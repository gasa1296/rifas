import { toast } from "react-hot-toast";

export const handleError = (error: any) => {

  let message = ''

   switch(error.response?.status){
    case 401: message = "Sorry, but you do not have permission to access this page. Please login."; break;
    case 404: message = "Sorry, but the page you're looking for doesn't exist. Please check the URL and try again."; break;
    case 500: message = "Sorry, but there was a server error processing your request. Please try again later."; break;
    default: message = error?.response?.data?.message ?? error.message
  }

   toast.error(message)



}