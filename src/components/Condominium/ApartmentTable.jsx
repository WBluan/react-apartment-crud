import { User, Edit, Trash2 } from "lucide-react";

export default function ApartmentTable({ apartments }) {
    return (
        <table className="table w-full">
            <thead>
                <tr>
                    <th>Nº apto</th>
                    <th>Proprietário</th>
                    <th className="text-right">Ações</th>
                </tr>
            </thead>
            <tbody>
                {apartments && Array.isArray(apartments) ? (
                    apartments.map((apto) => (
                        <tr key={apto.id}>
                            <td>{apto.apartmentNumber}</td>
                            <td>{apto.owner}</td>
                            <td className="text-right">
                                <button className="btn btn-sm"><User className="w-4 h-4"/></button>
                                <button className="btn btn-sm"><Edit className="w-4 h-4"/></button>
                                <button className="btn btn-sm"><Trash2 className="w-4 h-4"/></button>
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="3">Nenhum apartamento cadastrado</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}