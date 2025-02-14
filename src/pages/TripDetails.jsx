import { useParams } from 'react-router-dom';
import { useGlobalContext } from '../contexts/GlobalContext';

import AccordionPartecipants from '../components/AccordionPartecipants'

const TripDetails = () => {

    const { trip } = useGlobalContext();
    const { id } = useParams();

    const selectedTrip = trip.find(trip => trip.id === parseInt(id));

    return (
        <>
            <div className='container mt-4'>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{selectedTrip.destinazione}</h5>
                        <p>Data di Partenza: {selectedTrip.dataPartenza}</p>
                        <p>Data di Ritorno: {selectedTrip.dataRitorno}</p>
                        <AccordionPartecipants selectedTrip={selectedTrip} />
                    </div>
                </div>
            </div>

        </>
    )
}

export default TripDetails