import { API_INFORMATION_URL } from "../utils/constants"

const getInformation = async (id) => {
    const url = `${API_INFORMATION_URL}/${id}?fields=id,title,artist_display,date_display,main_reference_number`
    try {
        const response = await fetch(url)
        const data = await response.json()
        const { data: information } = data
        return information
    } catch (error) {
        console.error('Error fetching information' + error)
    }
}

export default getInformation