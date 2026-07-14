# Project Rules

These rules apply to every change in this repository.

## Execution

- BẮT BUỘC: Khi người dùng đưa ra yêu cầu triển khai rõ ràng, phải lập tức đọc context cần thiết và code trong cùng lượt làm việc; không dừng chỉ để xin xác nhận, duyệt phương án hoặc chọn cách thực hiện.
- BẮT BUỘC: Không hỏi lại người dùng nếu họ không chủ động yêu cầu trao đổi. Khi chi tiết còn thiếu nhưng có thể suy ra an toàn từ source, asset, tài liệu hoặc pattern hiện có, phải tự chọn giả định ít ảnh hưởng nhất, có thể đảo ngược và tiếp tục triển khai.
- Chỉ dừng khi có blocker thật sự: thiếu quyền hoặc dữ liệu không tồn tại, hành động phá huỷ, thay đổi hệ thống bên ngoài, hoặc một lựa chọn không thể đảo ngược có thể làm sai đáng kể ý định của người dùng. Khi đó báo rõ blocker và bằng chứng đã kiểm tra.
- Luôn bảo toàn thay đổi đang có của người dùng và tránh chỉnh sửa ngoài phạm vi yêu cầu.

## Verification

- Kiểm tra giao diện responsive trên desktop và mobile khi thay đổi HTML/CSS.
- Kiểm tra tương tác thực tế, liên kết, asset, nội dung và lỗi console trước khi kết luận hoàn thành.
- Không tuyên bố hoàn thành nếu chưa chạy lại các kiểm tra phù hợp và đọc kết quả mới nhất.
