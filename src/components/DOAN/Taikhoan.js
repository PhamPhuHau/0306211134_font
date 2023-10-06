import { Form, FormGroup, Label, Input, Button, Col, Row } from 'reactstrap';

function TaiKhoan() {
  return (
    <>
      <div className="QLTK">
        <Form>
          <Row>
            
            <Col md={6}>
              <FormGroup>
                <Label for="HT"> Họ tên </Label>
                <Input
                  id="HT"
                  name="HT"
                  placeholder="with a placeholder"
                  type="HT" />
              </FormGroup>
            </Col>

          </Row>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleEmail">
                  Email
                </Label>
                <Input
                  id="exampleEmail"
                  name="email"
                  placeholder="with a placeholder"
                  type="email"
                />
              </FormGroup>
            </Col>

          </Row>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="TDN">
                  Tên đăng nhập
                </Label>
                <Input
                  id="TDN"
                  name="TDN"
                  placeholder="with a placeholder"
                  type="TDN"
                />
              </FormGroup>
            </Col>

          </Row>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="SDT">
                  Số điện thoại
                </Label>
                <Input
                  id="SDT"
                  name="SDT"
                  placeholder="with a placeholder"
                  type="SDT"
                />
              </FormGroup>
            </Col>

          </Row>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="DC">
                  Địa chỉ
                </Label>
                <Input
                  id="DC"
                  name="DC"
                  placeholder="with a placeholder"
                  type="DC"
                />
              </FormGroup>
            </Col>

          </Row>

          <FormGroup check>
            <Input
              id="exampleCheck"
              name="check"
              type="checkbox"
            />
            <Label
              check
              for="exampleCheck"
            >
              Check me out
            </Label>
            <a className="MKM"href='#'>Đổi mật khẩu</a>
          </FormGroup>
          <Button>
            Sign in
          </Button>
        </Form>
        
      </div>
    </>
  );
}
export default TaiKhoan;