import React, {useState} from 'react'
import classNames from "classnames";
import {Company, Partner, Room} from "../models";

import "./Booker.scss"
import {MeetingInput} from "../queries";

interface BookerProps {
    className: string;
    company: Company;
    rooms: Room[];
    partners: Partner[];
    onBook: (meeting: MeetingInput)=> void;
}

export const Booker: React.FC<BookerProps> = (props) => {
    const {className, rooms, partners, company, onBook} = props;

    const [name, setName] = useState<string>()
    const [hour, setHour] = useState<number>()
    const [room, setRoom] = useState<string>()
    const [selectedPartners, setPartners] = useState<string[]>([])

    const handleClick = () => {
        return onBook({
            companyId: company.id,
            name: name!,
            hour: 2,
            partnersID: selectedPartners,
            roomId: room!
        })
    }

    return (
        <div className={classNames('Booker', className)}>
            {company.name}
            <div>event name <input value={name} onChange={event =>  setName(event.target.value)}/></div>
            <div>event hour <input type="number" value={hour} onChange={event =>  setHour(parseInt(event.target.value))}/></div>
            <div>
                Room:
                <select onChange={(event) => setRoom(event.target.value)}>
                    {rooms?.map(r => <option key={r.id} value={r.id}>{r.name}</option>)}
                 </select>
            </div>
            <div>
                Partners:
                <select onChange={(event) => {setPartners(prevState => prevState.concat(event.target.value))}}>
                    {partners?.map(r => <option key={r.id} value={r.id}>{r.name}</option>)}
                </select>
                {selectedPartners?.join(",")}
            </div>
            <button onClick={handleClick}>book</button>
        </div>
    );
}