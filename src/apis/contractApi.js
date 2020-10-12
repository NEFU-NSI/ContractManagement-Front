import axiosInstance from "@/plugins/axios";

export const getContractList = () => {
    return axiosInstance({
        method: 'GET',
        url: 'contract/list'
    })
}

export const getContractByYear = (year) => {
    return axiosInstance({
        method: "GET",
        url: 'contract/statistics',
        params: {
            year: year
        }
    })
}
