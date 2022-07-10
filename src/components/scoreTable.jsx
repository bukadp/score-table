import React from "react";
import Input from "./input";
import TableContainer from "./tableContainer";
import Games from "./games";
import {Col, Row} from 'antd';

function ScoreTable() {


    return (

        <div>
            <Row>
                <Col span={20} offset={2}>
                    <Input/>
                </Col>
            </Row>
            <Row>
                <Col offset={2}></Col>
                <Col span={10}><TableContainer/></Col>
                <Col span={10}>
                    <Games/>
                </Col>
            </Row>
        </div>
    );
}

export default ScoreTable;
