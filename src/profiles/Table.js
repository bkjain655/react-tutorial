import React, { Component } from "react";

const TableHeader = () => {
    return (
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Job</th>
                </tr>
            </thead>
    );
}

const TableBody = (props) => {
    const rows = props.profileData.map((v,i) => {
        return (
            <tr key={i}>
                <td>{v.name}</td>
                <td>{v.job}</td>
                <td>
                    <button onClick={() => props.removeProfile(v.name)}>Delete</button>
                </td>
            </tr>
        )
    })
    return (
        <tbody>
            {rows}
        </tbody>
    )
}

class Table extends Component {
    render() {
        const {profileData, removeProfile} = this.props;
        return (
            <table>
                <TableHeader />
                <TableBody profileData={profileData} removeProfile={removeProfile}/>
            </table>
        )
    }
}

export default Table;