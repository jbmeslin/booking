import React from 'react';
import {useMutation, useQuery} from "@apollo/client";
import './App.scss';
import {Booker} from "./components/Booker";
import {companyQuery, createMeetingMutation, MeetingInput} from "./queries";
import {Agenda} from "./components/Agenda";




function App() {

    const queryCompany1 = useQuery(companyQuery, {variables: {companyId: "1"}})
    const queryCompany2 = useQuery(companyQuery, {variables: {companyId: "2"}})


    const [createMeeting, { data, loading, error }] =  useMutation(createMeetingMutation)

    const handleBook = (meeting: MeetingInput) => {
        createMeeting({variables: {input: meeting}});
    }

  return (

        <div className="App">
          <header className="App-header">
            Welcome to mobile day Booking
          </header>
            <div className="body">
                { queryCompany1.loading
                    ? "Loading"
                    : <Booker
                        className="left"
                        key='C1'
                        company={queryCompany1.data.getCompany}
                        rooms={queryCompany1.data.rooms}
                        partners={queryCompany1.data.getPartners}
                        onBook={handleBook} />
                }

                { queryCompany2.loading
                    ? "Loading"
                    : <Booker
                        key='C2'
                        className="right"
                        company={queryCompany2.data.getCompany}
                        rooms={queryCompany2.data.rooms}
                        partners={queryCompany2.data.getPartners}
                        onBook={handleBook} />
                }

                <Agenda className="resume1" companyId="1" key={"keyOne"}/>
                <Agenda className="resume2" companyId="2" key={"keyTwo"}/>

            </div>

        </div>
  );
}

export default App;
