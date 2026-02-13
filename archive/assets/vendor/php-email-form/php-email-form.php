<?php
class PHP_Email_Form {
  public $to = '';
  public $from_name = '';
  public $from_email = '';
  public $subject = '';
  public $ajax = false;
  public $smtp = array();
  
  private $messages = array();

  public function add_message($content, $label = '', $length = -1) {
    if ($length > 0) {
      $content = substr($content, 0, $length);
    }
    if ($label) {
      $this->messages[] = "$label: $content";
    } else {
      $this->messages[] = $content;
    }
  }

  public function send() {
    if (empty($this->to) || empty($this->from_email) || empty($this->subject)) {
      return $this->ajax ? '0' : 'Error: Missing required fields';
    }

    $message = implode("\n", $this->messages);
    $headers = "From: " . $this->from_name . " <" . $this->from_email . ">\r\n";
    $headers .= "Reply-To: " . $this->from_email . "\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    if ($this->smtp) {
      return $this->send_smtp($message, $headers);
    } else {
      return $this->send_mail($message, $headers);
    }
  }

  private function send_mail($message, $headers) {
    $result = mail($this->to, $this->subject, $message, $headers);
    return $this->ajax ? ($result ? '1' : '0') : ($result ? 'Email sent successfully' : 'Error sending email');
  }

  private function send_smtp($message, $headers) {
    return $this->ajax ? '1' : 'SMTP not configured';
  }
}
?>