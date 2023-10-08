

export const getStatusColor = (status: string) => {


    switch (status) {
        case 'Vigente':
            return '#00A650'
        case 'En proceso':
            return '#FF8800'
        case 'Cancelada':
            return '#F23D4F'
        case 'Finalizada':
            return '#784B5F'
        default:
            return 'status-vigente'
    }


}
