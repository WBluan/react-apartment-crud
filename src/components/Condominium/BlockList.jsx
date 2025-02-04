import ApartmentTable from "./ApartmentTable";


export default function BlockList({ blocks, apartments, onFetchApartments }) {
    return (
        <>
        {blocks.map((bloco) => (
            <details
                key={bloco.id}
                className="collapse collapse-arrow border border-base-200 bg-base-100 rounded-box mb-2"
                onToggle={() => onFetchApartments(bloco.id)}>
                    <summary className="collapse-title font-medium">{bloco.blockName}</summary>
                    <div className="collapse-content">
                        <ApartmentTable apartments={apartments[bloco.id]}/>
                    </div>
                </details>
        ))}
        </>
    )
}