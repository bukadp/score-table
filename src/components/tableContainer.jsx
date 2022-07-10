import React from "react";
import {Table} from 'antd';
import "antd/dist/antd.css";

function TableContainer(props) {

    const columns = [
        {
            title: 'Place',
            dataIndex: 'place',
            key: 'place',
        },
        {
            title: 'Team',
            dataIndex: 'team',
            key: 'team',
        },
        {
            title: 'Played',
            dataIndex: 'played',
            key: 'played',
        },
        {
            title: 'Win',
            dataIndex: 'win',
            key: 'win',
        },
        {
            title: 'Draw',
            dataIndex: 'draw',
            key: 'draw',
        },
        {
            title: 'Lost',
            dataIndex: 'lost',
            key: 'lost',
        },
        {
            title: 'Points',
            key: 'points',
            dataIndex: 'points',
        },
    ]
    return (
        <div>
            <Table columns={columns}
                   dataSource={props.teamData}
                   pagination={false}
                   bordered/>
        </div>
    )
}

export default TableContainer;
