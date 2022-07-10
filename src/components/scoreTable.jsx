import React from "react";
import Input from "./input";
import TableContainer from "./tableContainer";
import Games from "./games";
import {Col, Row} from 'antd';
import {useSelector} from "react-redux";

function ScoreTable() {
    const teamData = useSelector(state => state.scoreTableData.teamData);
    const gamesData = useSelector(state => state.scoreTableData.gamesData);

    return (
        <div>
            <Row>
                <Col span={20} offset={2}>
                    <Input/>
                </Col>
            </Row>
            <Row>
                <Col offset={2}></Col>
                <Col span={12}><TableContainer
                    teamData={teamData}
                    gamesData={gamesData}/></Col>
                <Col span={10}> <Games/> </Col>
            </Row>
        </div>
    );
}

export default ScoreTable;
