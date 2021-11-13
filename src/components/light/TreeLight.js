import React from 'react'
import { Row, Col } from 'antd'

export default function TreeLight() {
  return (
    <div className="m-tree-wrap">
      <Row gutter={[16, 16]}>
        <Col className="gutter-row" span={6}>
          <div className="m-tree-col">col-6</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div className="m-tree-col">col-6</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div className="m-tree-col">col-6</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div className="m-tree-col">col-6</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div className="m-tree-col">col-6</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div className="m-tree-col">col-6</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div className="m-tree-col">col-6</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div className="m-tree-col">col-6</div>
        </Col>
      </Row>
    </div>
  )
}
