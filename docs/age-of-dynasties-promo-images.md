# Age of Dynasties — ảnh giới thiệu 24/11/2026

Trang `age-of-dynasties.html` giới thiệu theo thứ tự: chọn chiến trường, Thủ thành, Công thành, Đấu thường, Thử thách. Nội dung, chú thích và alt text có cả VI/EN.

Ảnh menu `assets/games/screenshots/dynasties-menu-20261124.webp` và bốn ảnh trận `assets/games/screenshots/dynasties-*-20261124-hud.webp` có kích thước 1600×900, WebP quality 92. Được xuất trực tiếp bằng widget menu và toàn màn `GameScreen` hiện tại của game, không dùng tranh AI thay cho gameplay.

- Menu: bản sao chỉ dùng để chụp, ẩn cửa hàng và các control phụ tải trận/ngôn ngữ. Không thay đổi menu sản phẩm.
- Thủ thành và Công thành: bản đồ Thăng Long tương ứng, dàn thêm quân, công trình và đạn để thể hiện vai trò của mỗi chế độ.
- Đấu thường: địa hình từ world Đấu thường, dàn căn cứ đang phát triển, công trình xây dở và giao tranh.
- Thử thách: màn 3 **So tài** (`challenge-003`, `GameChallenge.duel`), đúng hai cẩu đá đang giao chiến và né đạn; khán giả chia thành nhóm không cách đều trên các bậc quanh đấu trường.
- Các ảnh gameplay mở toàn bộ tầm nhìn qua `VisionSystem.reveal`; không thay đổi luật hoặc nội dung các trận thật.

Nguồn menu nằm ở `Age_of_Dynasties/artifacts/marketing-20261124/`; nguồn PNG trận, fixture xuất ảnh, metadata và log mới nằm ở `Age_of_Dynasties/artifacts/marketing-20261124-natural/` trên máy làm việc. Fixture Flutter đã chạy thành công; không phải kiểm thử runtime native hoặc trình duyệt của game.

Lưu ý khi chụp lại: precache toàn bộ artwork menu trước khi chụp. Chỉ đặt `revealAll: true` chưa đủ, cần chạy `VisionSystem.reveal` để cập nhật tập ô nhìn thấy/đã khám phá. Tải font thật trong widget test để tránh font Ahem.

Kiểm tra trang: ảnh tải được, mở ảnh gốc đúng file, đổi VI/EN, không tràn ngang ở desktop/mobile. Bộ test hiện có chứa lỗi có sẵn ở `site-shell.test.mjs` (đòi breakpoint 780px trong khi CSS HEAD dùng 1024px); không sửa header ngoài phạm vi.

## Lượt chỉnh bố cục tự nhiên

Bỏ bộ sinh đội hình hàng/cột. Dàn các cặp giao chiến đan xen, nhóm quân đứng tự do có khoảng trống, hướng nhìn và pha animation khác nhau; có quân tiếp viện, kỵ binh giao chiến bên sườn và dân đang xây/carry tài nguyên. Ba ảnh đông quân có lần lượt 11/12/10 quân ngã, 78/95/80 tên cắm đất, cùng đạn đang bay. Ảnh Công thành có đoạn tường đổ ở cổng. Cảnh Đấu thường dùng nền vật liệu của world với vùng đất phẳng để công trình/quân không cắt qua vách địa hình.

Khi xuất tên bay phải gắn target ID/life tồn tại, hoặc dùng trạng thái missed hợp lệ; target giả khiến renderer bỏ qua tên. Sau mỗi lượt chỉnh phải xem đủ bốn ảnh ở kích thước thật; đếm entity không thay thế kiểm tra bố cục, vật cản và hình ảnh. Lưới hàng/cột cộng jitter nhỏ vẫn dễ cho cảm giác đội quân robot, nên bắt đầu từ từng cụm giao tranh và khoảng trống.

## Ảnh toàn màn với HUD

Bốn ảnh trận hiện tại xuất toàn `GameScreen` ở 1600×900, gồm minimap, thanh tài nguyên, dân số, thời gian/tốc độ, các nút điều khiển và kỹ năng đúng từng chế độ. Giữ cảnh giao tranh tự nhiên từ lượt trước. Ảnh Đấu thường chọn ba kỵ binh qua `GameBoxSelected`, hiện vòng chọn và `UnitActionBar` thật. Màn 3 So tài giữ hai kỹ năng; Thủ thành/Công thành giữ bốn kỹ năng.

Fixture dùng snapshot qua `SavedGame`, tải đầy đủ asset và countdown, tắt ticker trong lúc chụp để giữ khoảnh khắc; không ghép HUD lên ảnh. Chờ thông báo mở trận đóng, precache cả `Ink.image` của nút tuyển quân/xây dựng, dùng theme desktop, đối chiếu đồng hồ trận và trạng thái đợt với cảnh giao tranh. Cảnh Đấu thường có thêm nhà để sức chứa phù hợp quân số. Đây là cấu hình dàn cảnh phục vụ ảnh, không thay đổi luật/screen của app.

Nguồn cuối: `Age_of_Dynasties/artifacts/marketing-20261124-hud/` gồm `scenes.dart`, `capture_hud_test.dart`, PNG, log và metadata. Test xác nhận cả bốn màn có minimap/resource bar, kỹ năng khi có, ảnh Đấu thường có nhóm quân được chọn và thanh action; không có countdown hoặc thông báo mở trận che cảnh.
