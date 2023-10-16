export const getStatusColor = (status: string) => {
  switch (status) {
    case "0":
      return "#00A650";
    case "1":
      return "#FF8800";
    case "2":
      return "#F23D4F";
    case "3":
      return "#784B5F";
    case "4":
      return "#784B5F";
    case "5":
      return "#784B5F";
    case "6":
      return "#784B5F";
    default:
      return "#784B5F";
  }
};

export const getStatusValue = (status: number) => {
  switch (status.toString()) {
    case "0":
      return "Canceled";
    case "1":
      return "Public";
    case "2":
      return "Completed";
    case "3":
      return "Draft";
    case "4":
      return "Paused";
    case "5":
      return "Requested";
    case "6":
      return "Rejectes";
    default:
      return "Default";
  }
};

export const getStatusColorPrizes = (status: number) => {
  switch (status.toString()) {
    case "0":
      return "#00A650";
    case "1":
      return "#FF8800";

    default:
      return "status-vigente";
  }
};
export const getStatusValuePrizes = (status: number) => {
  switch (status.toString()) {
    case "0":
      return "Nuevo";
    case "1":
      return "Usado";

    default:
      return "status-vigente";
  }
};
