import React, {useEffect} from "react";
import {Table} from 'antd';
import "antd/dist/antd.css";
import {useSelector} from "react-redux";



function TableContainer(props) {

    const render = () => {
console.log('render')
    }
    useEffect(() => {
        render()
    }, [props.teamData])


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
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.points - b.points,
        },
    ]

    const onChange = (sorter) => {
        console.log('params', sorter);
    };
    return (
        <div>
            <Table columns={columns}
                   dataSource={props.teamData}
                   pagination={false}
                   onChange={onChange}/>
        </div>
    )
}

export default TableContainer;
