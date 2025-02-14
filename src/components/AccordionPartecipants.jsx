
const AccordionPartecipants = ({ selectedTrip }) => {

    return (
        <div>
            <div className="accordion" id="accordionExample">
                {selectedTrip.partecipanti.map((partecipant, index) => (
                    <div className="accordion-item" key={`${partecipant.id}.${partecipant.nome}`}>
                        <h2 className="accordion-header">
                            <button
                                className="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#collapse${index}`}
                                aria-expanded="false"
                                aria-controls={`collapse${index}`}
                            >
                                {partecipant.nome}
                            </button>
                        </h2>

                        <div
                            id={`#collapse${index}`}
                            className="accordion-collapse collapse"
                        >
                            <div className="accordion-body">
                                <strong>Informazioni su {partecipant.nome}.</strong>
                                Qui puoi inserire i dettagli del partecipante.
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default AccordionPartecipants