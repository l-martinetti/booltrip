import { useGlobalContext } from '../contexts/GlobalContext'

const TripDetails = () => {

    const { selectedTrip } = useGlobalContext();

    return (
        <div className='container mt-4'>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{selectedTrip.destinazione}</h5>
                    <p>Data di Partenza: {selectedTrip.dataPartenza}</p>
                    <p>Data di Ritorno: {selectedTrip.dataRitorno}</p>
                    <ul className="list-group list-group-flush">
                        {selectedTrip.partecipanti.map(partecipant => (
                            <li key={partecipant.id} className="list-group-item d-flex justify-content-between">
                                <p>{`${partecipant.nome} ${partecipant.cognome}`}</p>
                                <span>{partecipant.codiceFiscale}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default TripDetails