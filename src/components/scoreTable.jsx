import React from "react";
import Input from "./input";
import TableContainer from "./tableContainer";
import Games from "./games";
import { Col, Row } from 'antd';

function ScoreTable() {


    return (

        <div>
            <Row>
                <Col span={16} offset={4}>
                    <Input/>
                </Col>
            </Row>
            <Row >
                <Col offset={4}></Col>
                <Col span={12}><TableContainer/></Col>
                <Col span={4}>
                    <Games/>
                </Col>
            </Row>
        </div>
    );
}

export default ScoreTable;
