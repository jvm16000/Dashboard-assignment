import React, { useState } from 'react'
import "antd/dist/antd.css";
import { Form, Input, Button, Checkbox, Row, Col, Card, Select } from "antd";
import { useNavigate } from 'react-router-dom'
import "./HomePage.css"
import { Link } from 'react-router-dom';

const { Option } = Select;

const HomePage = () => {
 
    const navigate = useNavigate();
    const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };


  const onSubmit = (values) => {
    // e.preventDefault()
    console.log(values);
    localStorage.setItem("user", values)
    navigate('/dashboard')
  }

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="91">+91</Option>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );
    // const validateMessages = {
    //   required: "${label} is required!",
    //   types: {
    //     email: "${label} is not valid!",
    //     number: "${label} is not a valid number!",
    //   },
    // };


  return (
    <Card style={{ backgroundColor: "#f2f2f2" }}>
      <Row gutter={[3]}>
        <Col span={12}>
          <Card className="main card">
            <div className="card-text">
              <p className="card-text-head">Choose a date range</p>
              <p className="card-text-data">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                tortor dolorhen the text-align
              </p>
            </div>
          </Card>
        </Col>
        <Col span={12}>
          <Card className="card">
            <p className="text">Create an account</p>
            <Form
              layout="vertical"
              name="basic"
              initialValues={{
                remember: true,
              }}
              onFinish={onSubmit}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="Your email address"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please enter a valid email!",
                    type: "email",
                  },
                ]}
              >
                <Input className="input" />
              </Form.Item>

              <Form.Item
                name="password"
                label="Password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
                hasFeedback
              >
                <Input.Password className="input" />
              </Form.Item>

              <Form.Item
                name="confirm"
                label="Confirm Password"
                dependencies={["password"]}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please confirm your password!",
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error(
                          "The two passwords that you entered do not match!"
                        )
                      );
                    },
                  }),
                ]}
              >
                <Input.Password className="input" />
              </Form.Item>

              <Form.Item
                label="Your full name"
                name="Name"
                rules={[
                  {
                    required: true,
                    message: "Please enter your full name!",
                  },
                ]}
              >
                <Input className="input" />
              </Form.Item>

              <Form.Item
                name="phone"
                label="Your phone Number"
                rules={[
                  {
                    required: true,
                    message: "Please enter a valid phone number!",
                  },
                ]}
              >
                <Input
                  addonBefore={prefixSelector}
                  className="input"
                  style={{ height: "100" }}
                />
              </Form.Item>

              <Form.Item
                name=""
                valuePropName="checked"
                rules={[
                  {
                    required: true,
                    message: "Please check the box to continue.",
                  },
                ]}
              >
                <Checkbox className="checkbox">
                  I read and agree to the Terms and Conditions.
                </Checkbox>
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="card-button"
                >
                  Create Account
                </Button>
              </Form.Item>
              {}
            </Form>
          </Card>
        </Col>
      </Row>
    </Card>
  );
}

export default HomePage