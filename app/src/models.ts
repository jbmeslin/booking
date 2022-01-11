export interface Company {
    id: string
    name: string;
    rooms: Room[]
}


export interface Room {
    id: string
    name: string;
}

export interface Meeting {
    id: string
    name: string;

    room: Room;
    company: Company;
    partners: Partner[];
    hour: number

}

export interface Partner {
    id: string
    name: string;

    companies: Company[];
}