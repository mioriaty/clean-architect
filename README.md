# Box shadow

## Mô tả bài toán

Người dùng có thể thêm, sửa, xoá các lớp box shadow. Mỗi lớp sẽ có tuỳ chỉnh cho từng thuộc tính của box shadow (chỉnh chiều dọc, ngang, độ phủ, độ mờ, màu, đảo ngược). Giao diện quản lý lớp box shadow sẽ cung cấp các ô nhập thông tin cho từng thuộc tính của lớp box shadow. Các thuộc tính của lớp box shadow có thể được nhập dưới dạng số hoặc giá trị văn bản.

## Từ mô tả, ta có

- Các thực thể:
  - Layer (lớp): chứa id, label, box shadow settings (các tuỳ chỉnh của box shadow).
  - Box shadow settings: chỉnh đổ bóng theo chiều: dọc + ngang, chỉnh độ mờ, độ phủ, đảo ngược bóng đổ, chỉnh màu bóng.
  
- Actor: Nguời dùng.
  
- Use cases:
  - Thêm lớp box shadow:
    1. Người dùng mở giao diện quản lý lớp box shadow.
    2. Người dùng nhấn nút "Add layer" để tạo 1 lớp box shadow.
  - Sửa lớp box shadow:
    1. Người dùng mở giao diện quản lý lớp box shadow.
    2. Nguời dùng chọn layer cần sửa.
    3. Người dùng sửa các thông tin về lớp box shadow, thông tin sẽ được tự động cập nhật lúc sửa.
  - Xoá lớp box shadow:
    1. Người dùng mở giao diện quản lý lớp box shadow.
    2. Người dùng chọn lớp box shadow cần xoá.
    3. Người dùng nhấn biểu tuợng xoá.
