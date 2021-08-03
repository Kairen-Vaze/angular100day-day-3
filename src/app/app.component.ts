import { Component, VERSION } from '@angular/core';

//* Khi gán './app.component.html' vào AppComponent như vầy, thực sự thì bản thân 2 thằng đó ko hề liên quan gì đến nhau. Chỉ Angular hiểu là 'à, 2 thằng này liên quan đến nhau', vì './app.component.html' được bỏ vào trong metadata

//* Angular cũng có 1 số cách để 2 thằng đó giao tiếp với nhau
//* Cách 1: interpolation: nội suy: thêm vào (sử dụng expression add thẳng vô)
//* Cách 2: Data binding: Những thẻ HTML có thể tương tác được sẽ được browser parse thành DOM (Document object Model), để người dùng có thể tương tác các thẻ này trên browser thông qua DOM
//* Data binding có thể chia ra làm 2: property binding & attribute binding
//* Tương tác, bind dữ liệu từ component --> template = property binding
//* tương tác từ template --> component = event binding
//* Nếu kết hợp cả 2 cách binding --> 2 ways data binding, cú pháp cũng là kết hợp property ngoài và event trong [()]
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //* Bản thân name và user được xem như là 1 model và có thể gọi ở view(template)
  //* Tất nhiên khai báo biến là public thì gọi ở template mới được
  name = 'Angular ' + VERSION.major;

  //* property binding #2
  inputType = 'text';

  //* interpolation: Tạo 1 obj
  user = {
    name: 'Kairen',
    ages: 22
  };

  handler() {
    console.log('clicked');
  }

  input = '';
}
