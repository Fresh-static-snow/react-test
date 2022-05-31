type TPosition = {
    id: number
    name: string
}

export interface IPositionResponse {
    success: boolean
    positions?: TPosition[]
    message?: string
}