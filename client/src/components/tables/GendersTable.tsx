
const GendersTable = () => {
    return (
        <>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Gender</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Male</td>
                        <td>
                            <button className="btn btn-success me-1">EDIT</button>
                            <button className="btn btn-danger">DELETE</button>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Female</td>
                        <td>
                            <button className="btn btn-success me-1">EDIT</button>
                            <button className="btn btn-danger">DELETE</button>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Others</td>
                        <td>
                            <button className="btn btn-success me-1">EDIT</button>
                            <button className="btn btn-danger">DELETE</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    );
};

export default GendersTable;