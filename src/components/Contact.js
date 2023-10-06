import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { Button, Container, Row, Textarea, TextInput, Icon } from "react-materialize"

function Contact() {
  const { theme } = useContext(ThemeContext)


  const handleSubmit =(e)=> {
    e.preventDefault()
  }


  return (
    <div style={{ backgroundColor: theme.backdropBackgroundColor, color: theme.contentTextColor }}>
      <Container id='contact'>
        <h3>Liên hệ với chúng tôi</h3>
        <form onSubmit={handleSubmit}>
          <Row>
            <TextInput icon={<Icon>face</Icon>} label="Họ của bạn" s={6} />
            <TextInput icon={<Icon>face</Icon>} label="Tên của bạn" s={6} />
          </Row>
          <Row>
            <TextInput icon={<Icon>contact_phone</Icon>} label="Số điện thoại của bạn" s={12} />
          </Row>
          <Row>
            <TextInput icon={<Icon>contact_phone</Icon>} label="Email của bạn" email validate s={12} />
          </Row>
          {/* <span class="helper-text" data-error="Định dạng email không đúng" data-success="Đã sẵn sàng">Helper text</span> */}
          <Textarea icon={<Icon>mode_edit</Icon>} label="Hãy để lại lời nhắn cho chúng tôi"></Textarea>
          <Button className="wave-effects wave-circle">Gửi</Button>
        </form>
      </Container>
    </div>
  );
}

export default Contact