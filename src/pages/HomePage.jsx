import { Link } from 'react-router-dom'
import { useGlobalContext } from '../contexts/GlobalContext'

const HomePage = () => {

    const { setSelectedTrip } = useGlobalContext();

    const { trip } = useGlobalContext();
    return (
        <div className="container mt-5">
            <ul className="list-group">
                {trip.map(trip => (
                    <li className="list-group-item" key={trip.id}>
                        <Link to={`/trips/${trip.id}`} onClick={() => setSelectedTrip(trip)}>{trip.destinazione}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default HomePage