import React from 'react'
import classNames from "classnames";

import "./Agenda.scss"
import {companyMeetingQuery} from "../queries";
import {useQuery} from "@apollo/client";
import {Meeting} from "../models";

interface AgendaProps {
    companyId: string
    className: string;
}

export const Agenda: React.FC<AgendaProps> = (props) => {
    const {className, companyId} = props;

    const queryMeting = useQuery(companyMeetingQuery, {variables: {companyId}})

    if (queryMeting.loading) return (<div>Loading</div>)
    if (queryMeting.error) return (<div>error</div>)

    return (
        <div className={classNames('Agenda', className)}>
            {queryMeting.data.getMeeting.map((m : Meeting) =>{
                return <div key={m.id}> name : {m.name}  room:{m.room.name}  hour:{m.hour}
                    partners: {m.partners.map(( p )=> <label key={p.id}>{p.name}</label>)}
                </div>
            })}
        </div>
    );
}