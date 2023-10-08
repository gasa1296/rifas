export const getStatusOptions = (status: string) => {


    switch (status) {
        case 'Canjeado':
            return '#C3286D'
        case 'Abonado':
            return '#00A650'
      
            default:
                return 'status-vigente'
    }


}
