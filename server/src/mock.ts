import {Company, Partner, Room} from "./models";

const room1A: Room = {id:"1", name: "A01"}
const room2A: Room = {id:"2", name: "A02"}
const room3A: Room = {id:"3", name: "A03"}
const room4A: Room = {id:"4", name: "A04"}
const room1S: Room = {id:"1", name: "S01"}
const room2S: Room = {id:"2", name: "S02"}
const room3S: Room = {id:"3", name: "S03"}
const room4S: Room = {id:"4", name: "S04"}

export const rooms: Room[] = [room1A, room2A, room3A, room4A, room1S, room2S, room3S, room4S]

const apple: Company = {
    id:"1",
    name: "Apple",
    rooms: [room1A, room2A, room3A, room4A]
};
const samsung = {
    id:"2",
    name: "Samsung",
    rooms: [room1S, room2S, room3S, room4S]
};

export const companiesMock: Company[] = [
    apple,
    samsung
];

const partnerApple: Partner = {
    id: "1",
    name: "Partner Apple",
    companies: [apple]
};

const partnerSamsung: Partner = {
    id: "2",
    name: "Partner Samsung",
    companies: [samsung]
};

const sharePartner: Partner = {
    id: "3",
    name: "shared partner",
    companies: [apple, samsung]
};


export const partnersMock: Partner[] = [
    partnerApple,
    partnerSamsung,
    sharePartner
];
