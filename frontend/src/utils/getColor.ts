import { Colors } from "./constants"

export const getColor = (regionId: any): string => {
    if (regionId < 10) {
        return Colors.green
    }
    if (regionId > 10 && regionId < 30) {
        return Colors.yellow
    }
    if (regionId > 30) {
        return Colors.red
    }
    return Colors.gray
}