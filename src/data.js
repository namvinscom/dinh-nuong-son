// ====== CẤU HÌNH SHOP ĐỈNH NƯƠNG SƠN ======
export const SHOP = {
  name: 'Đỉnh Nương Sơn',
  shortName: 'Đỉnh Nương Sơn',
  logo: './images/logo-xanh-tinh-te.png',
  zalo: '0961805129',
  phone: '0961805129',
  hotlineDisplay: '0961.805.129',
  facebook: 'https://www.facebook.com/dinhnuongson.taxua',
  facebookDisplay: 'fb.com/dinhnuongson.taxua',
  facebookName: 'Chè Shan Tuyết Đỉnh Nương Sơn - Tà Xùa',
  address: 'Bản Bẹ, Xã Tà Xùa, Huyện Bắc Yên, Tỉnh Sơn La',
  farmAltitude: '1.800m so với mực nước biển',
  workingHours: '7:30 - 21:30 (Tất cả các ngày trong tuần)',
  freeShipFrom: 500000,
}

// ====== THÔNG TIN TÀI KHOẢN CHUYỂN KHOẢN ======
export const BANK_INFO = {
  bankName: 'MB Bank (Ngân hàng Quân Đội)',
  bankCode: 'MB',
  accountNumber: '0961805129',
  accountHolder: 'ĐỈNH NƯƠNG SƠN',
  branch: 'Chi nhánh Sơn La',
}

// ====== SLIDESHOW HERO ======
export const HERO_SLIDES = [
  {
    url: 'https://images.pexels.com/photos/38504043/pexels-photo-38504043.jpeg?auto=compress&cs=tinysrgb&w=1920',
    caption: 'Hoàng hôn đỉnh Tà Xùa · 1.800m Sơn La',
  },
  {
    url: 'https://images.pexels.com/photos/29640382/pexels-photo-29640382.jpeg?auto=compress&cs=tinysrgb&w=1920',
    caption: 'Biển mây Tà Xùa cuộn sóng quanh nương chè',
  },
  {
    url: 'https://images.pexels.com/photos/20834988/pexels-photo-20834988.jpeg?auto=compress&cs=tinysrgb&w=1920',
    caption: 'Gốc chè cổ thụ Shan Tuyết hơn 200 năm tuổi',
  },
  {
    url: 'https://images.pexels.com/photos/2161448/pexels-photo-2161448.jpeg?auto=compress&cs=tinysrgb&w=1920',
    caption: 'Nắng sớm xuyên sương trên triền núi Bắc Yên',
  },
]

// ====== SCENIC GALLERY ======
export const SCENERY = [
  {
    url: 'https://images.pexels.com/photos/38504043/pexels-photo-38504043.jpeg?auto=compress&cs=tinysrgb&w=900',
    title: 'Biển mây Tà Xùa',
    desc: 'Ở độ cao 1.800m, biển mây bao phủ nương chè cổ thụ tạo nên vi khí hậu mát lạnh đặc hữu.',
  },
  {
    url: 'https://images.pexels.com/photos/29640382/pexels-photo-29640382.jpeg?auto=compress&cs=tinysrgb&w=900',
    title: 'Sống lưng khủng long Bản Bẹ',
    desc: 'Cung đường huyền thoại uốn lượn giữa những cánh rừng chè Shan Tuyết cổ thụ di sản.',
  },
  {
    url: 'https://images.pexels.com/photos/2161448/pexels-photo-2161448.jpeg?auto=compress&cs=tinysrgb&w=900',
    title: 'Rừng chè cổ thụ trăm năm',
    desc: 'Thân cây xù xì bám rêu phong mốc thếch, sinh trưởng hoàn toàn tự nhiên không hóa chất.',
  },
]

// ====== SO SÁNH LỤC TRÀ VÀ HỒNG TRÀ ======
export const TEA_COMPARISON = {
  title: 'Bộ Đôi Trà Chủ Lực Đỉnh Nương Sơn',
  subtitle: 'Hai phong vị thượng hạng được chế biến từ những gốc chè Shan Tuyết cổ thụ hơn 200 năm tuổi',
  items: [
    {
      name: 'Lục Trà Shan Tuyết (Trà Xanh Cổ Thụ)',
      tag: 'Dòng Trà Thanh Tao',
      colorBadge: '#1e4620',
      waterColor: 'Vàng óng ánh hổ phách nhạt, nước trong veo không gợn cặn',
      flavor: 'Vị chát thanh êm dịu nơi đầu lưỡi, hậu ngọt sâu và đượm đà kéo dài nhiều giờ',
      aroma: 'Thơm ngát hương cốm non quyện sương mai núi rừng Tây Bắc',
      process: 'Hái tay 1 tôm 2 lá -> Diệt men trên chảo gang củi -> Vò nhẹ -> Sao khô thủ công',
      bestTime: 'Uống sáng sớm sau bữa ăn, giúp tinh thần minh mẫn, sảng khoái và tỉnh táo',
      target: 'Người yêu vị trà mộc truyền thống, mê hậu ngọt sâu bền bỉ',
      image: './images/product-luc-tra.jpg',
      id: 'luc-tra-co-thu',
    },
    {
      name: 'Hồng Trà Shan Tuyết (Lên Men Tự Nhiên)',
      tag: 'Dòng Trà Ấm Áp',
      colorBadge: '#8c2d19',
      waterColor: 'Đỏ hổ phách quý phái, lấp lánh ánh hồng ngọc',
      flavor: 'Ngọt dịu êm mượt, hoàn toàn không chát đắng, vị đậm đà ấm áp vùng cổ họng',
      aroma: 'Nồng nàn hương mật ong rừng xen lẫn hoa quả quả chín mọng và gỗ quý',
      process: 'Lên men tự nhiên 100% kiểm soát vi khí hậu -> Sấy nhiệt chậm giữ trọn vi chất',
      bestTime: 'Uống mọi thời điểm trong ngày, hợp mùa lạnh, thư giãn buổi tối, rất êm dạ dày',
      target: 'Người mới uống trà, phụ nữ, người thích vị ngọt êm, không lo cồn ruột hay mất ngủ',
      image: './images/product-hong-tra.jpg',
      id: 'hong-tra-shan-tuyet',
    },
  ],
}

// ====== DANH MỤC DUY NHẤT 2 SẢN PHẨM CHỦ LỰC ======
export const PRODUCTS = [
  {
    id: 'luc-tra-co-thu',
    name: 'Lục Trà Shan Tuyết Cổ Thụ Đặc Biệt',
    type: 'Lục trà',
    badge: 'Bán chạy số 1',
    price: 450000,
    unit: '100g',
    image: './images/product-luc-tra.jpg',
    desc: 'Hái tay từ gốc chè 200+ năm tuổi trên đỉnh Tà Xùa (1.800m). Búp phủ lông tuyết trắng, vị chát dịu êm, hậu ngọt sâu lắng kéo dài.',
    descLong: `Lục Trà Shan Tuyết Cổ Thụ Đặc Biệt là linh hồn của thương hiệu Đỉnh Nương Sơn — được kết tinh từ những cây chè cổ thụ trên 200 năm tuổi tại Bản Bẹ, xã Tà Xùa ở độ cao 1.800m quanh năm mây mù che phủ.

Từng búp chè được đồng bào H'Mông thu hái thủ công vào sáng sớm khi sương núi còn đọng trên từng sợi lông tơ trắng muốt. Quá trình sao chè thực hiện hoàn toàn thủ công trên chảo gang bằng củi lửa liu riu, đòi hỏi đôi bàn tay nghệ nhân cảm nhận chính xác nhiệt độ để búp chè không bị cháy xém mà vẫn giữ nguyên màu xanh ngọc và lớp tuyết óng ánh.

Khi pha nước sôi 85°C - 90°C, trà tỏa ngát hương cốm non quyện mùi đại ngàn. Ngụm đầu tiên thoảng vị chát thanh dịu êm ái nơi đầu lưỡi, ngay sau đó bừng nở vị ngọt hậu đậm sâu nơi vòm họng bền bỉ đến hàng giờ đồng hồ.`,
    highlights: [
      'Gốc chè cổ thụ trên 200 năm tuổi tại Bản Bẹ',
      'Hái tay búp tuyết 1 tôm 2 lá lúc sáng sớm',
      'Sao chảo gang thủ công lửa củi truyền thống',
      'Pha được 6 - 8 tuần nước vẫn còn đượm vị ngọt',
    ],
    harvest: 'Vụ Xuân 2026',
    origin: 'Bản Bẹ, Tà Xùa, Bắc Yên, Sơn La (Độ cao 1.800m)',
    brewing: {
      waterTemp: '85°C – 90°C',
      ratio: '5g trà cho 150ml nước',
      steepTime: '20 – 30 giây mỗi lần hãm',
    },
    variants: [
      { weight: '100g', price: 450000 },
      { weight: '200g (Tiết kiệm 50k)', price: 850000 },
      { weight: '500g (Tặng quà)', price: 1950000 },
    ],
  },
  {
    id: 'hong-tra-shan-tuyet',
    name: 'Hồng Trà Shan Tuyết Lên Men Tự Nhiên',
    type: 'Hồng trà',
    badge: 'Tuyệt phẩm Tây Bắc',
    price: 380000,
    unit: '100g',
    image: './images/product-hong-tra.jpg',
    desc: 'Lên men hoàn toàn tự nhiên từ búp chè Tà Xùa. Nước đỏ hổ phách lấp lánh, ngọt dịu hương hoa mật ong, làm ấm bụng và an thần.',
    descLong: `Hồng Trà Shan Tuyết Đỉnh Nương Sơn là dòng trà được chế biến bằng phương pháp lên men toàn phần có kiểm soát từ búp chè Shan Tuyết cổ thụ giàu nội chất và khoáng chất tại đỉnh Tà Xùa.

Qua quá trình héo, vò nhẹ và lên men tự nhiên, các hợp chất tanin chuyển hóa tạo nên màu nước đỏ hổ phách tuyệt mỹ và hương thơm ngọt ngào nồng nàn tựa mật ong rừng quyện cùng hoa trái chín Tây Bắc.

Vị trà đậm đà, mềm mượt như nhung, hoàn toàn không có cảm giác chát đắng hay cồn ruột. Uống vào giúp làm ấm cơ thể, dễ chịu cho dạ dày, rất thích hợp thưởng thức vào sáng sớm, chiều muộn hoặc những ngày thời tiết se lạnh.`,
    highlights: [
      'Lên men tự nhiên 100% không hương liệu',
      'Sắc nước đỏ hổ phách sang trọng quý phái',
      'Ấm bụng, không gây mất ngủ hay cồn cào ruột',
      'Hương mật ong rừng và quả chín tự nhiên',
    ],
    harvest: 'Đông 2025 - Xuân 2026',
    origin: 'Bản Bẹ, Tà Xùa, Bắc Yên, Sơn La (Độ cao 1.800m)',
    brewing: {
      waterTemp: '90°C – 95°C',
      ratio: '5g trà cho 150ml nước',
      steepTime: '25 – 35 giây mỗi lần hãm',
    },
    variants: [
      { weight: '100g', price: 380000 },
      { weight: '200g (Tiết kiệm 40k)', price: 720000 },
      { weight: '500g (Tặng quà)', price: 1650000 },
    ],
  },
]

// ====== ĐÁNH GIÁ KHÁCH HÀNG ======
export const REVIEWS = [
  {
    name: 'Chị Lan Hương',
    location: 'Cầu Giấy, Hà Nội',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
    productPhoto: './images/product-luc-tra.jpg',
    rating: 5,
    date: '02/11/2026',
    productName: 'Lục Trà Shan Tuyết Cổ Thụ',
    text: 'Trà thơm tự nhiên không hề nồng gắt, ngụm đầu tiên thấy vị chát rất êm, sau đó cổ họng ngọt thanh suốt cả buổi sáng. Bố mình sành trà mấy chục năm nay mà khen tấm tắc.',
  },
  {
    name: 'Anh Hùng Cường',
    location: 'Quận 1, TP. Hồ Chí Minh',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
    productPhoto: './images/product-hong-tra.jpg',
    rating: 5,
    date: '28/10/2026',
    productName: 'Hồng Trà Shan Tuyết',
    text: 'Mình hay bị xót ruột khi uống trà xanh lúc đói, chuyển sang Hồng Trà Đỉnh Nương Sơn thấy êm hẳn, vị ngọt mật hoa rất lạ miệng và thư thái. Đóng gói hộp rất kỹ càng.',
  },
  {
    name: 'Cô Mai Thanh',
    location: 'Hải Châu, Đà Nẵng',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
    productPhoto: './images/product-hong-tra.jpg',
    rating: 5,
    date: '19/10/2026',
    productName: 'Hồng Trà Shan Tuyết',
    text: 'Nước trà đỏ hổ phách rất đẹp, uống vào ấm bụng và thơm ngát hương hoa quả rừng. Ship bưu điện vào Đà Nẵng 2 ngày là nhận được, đóng gói túi thiếc rất cẩn thận.',
  },
]

// ====== CÂU HỎI THƯỜNG GẶP (CHUYÊN NGHIỆP PHÂN DANH MỤC) ======
export const FAQS = [
  {
    category: 'Về Chất Lượng & Hương Vị Trà',
    q: 'Lục Trà và Hồng Trà Shan Tuyết Đỉnh Nương Sơn khác nhau như thế nào?',
    a: 'Lục Trà (Trà xanh) được sao chảo gang ngay sau khi hái để ngăn oxy hóa, giữ trọn sắc nước vàng óng hổ phách nhạt, hương cốm non tươi mới, vị chát thanh êm dịu và hậu ngọt sâu lắng kéo dài. Trong khi đó, Hồng Trà trải qua quá trình lên men tự nhiên 100%, nước trà có màu đỏ hổ phách sang trọng, thơm nồng mùi mật ong rừng và quả chín, vị ngọt êm không chát, đặc biệt làm ấm bụng và không gây cồn cào dạ dày.',
  },
  {
    category: 'Về Chất Lượng & Hương Vị Trà',
    q: 'Cây chè Shan Tuyết cổ thụ Tà Xùa có gì đặc biệt so với chè đồng bằng?',
    a: 'Chè Shan Tuyết Tà Xùa sinh trưởng hoang dã ở độ cao 1.800m quanh năm ngậm sương mù và gió lạnh Tây Bắc. Rễ cây ăn sâu vào lòng núi đá hút khoáng chất tinh khiết. Thân cây to lớn bám đầy rêu phong và địa y hàng trăm năm tuổi. Búp trà mập mạp phủ lớp lông tơ trắng muốt như tuyết, hoàn toàn tự nhiên không dùng phân bón hóa học hay thuốc trừ sâu. Trà pha được từ 6 - 8 tuần nước mà vẫn giữ được độ ngọt đậm đà.',
  },
  {
    category: 'Giao Hàng & Đổi Trả',
    q: 'Shop có hỗ trợ giao hàng Ship COD đồng kiểm không?',
    a: 'Có, 100% các đơn hàng của Đỉnh Nương Sơn đều được gửi Ship COD toàn quốc. Quý khách hoàn toàn được quyền MỞ GÓI HÀNG ĐỒNG KIỂM TRA chất lượng búp trà trước khi thanh toán tiền mặt cho nhân viên giao hàng. Nếu sản phẩm không đúng như cam kết, quý khách có quyền từ chối nhận hàng mà không phải chịu bất kỳ khoản phí nào.',
  },
  {
    category: 'Giao Hàng & Đổi Trả',
    q: 'Đơn hàng bao nhiêu thì được miễn phí vận chuyển toàn quốc?',
    a: 'Tất cả các đơn hàng từ 500.000₫ trở lên đều được MIỄN PHÍ VẬN CHUYỂN TOÀN QUỐC. Đối với các đơn hàng dưới 500.000₫, phí vận chuyển được áp dụng đồng giá ưu đãi là 30.000₫ trên cả nước. Thời gian giao hàng: Hà Nội và miền Bắc từ 1 - 2 ngày; TP.HCM và miền Trung, miền Nam từ 2 - 3 ngày.',
  },
  {
    category: 'Thanh Toán & Đặt Hàng',
    q: 'Shop hỗ trợ những hình thức thanh toán và đặt hàng nào?',
    a: 'Đỉnh Nương Sơn hỗ trợ 3 hình thức tiện lợi: 1. Thanh toán tiền mặt khi nhận hàng (Ship COD đồng kiểm); 2. Thanh toán chuyển khoản ngân hàng qua mã VietQR tự động điền sẵn số tiền của MB Bank; 3. Đặt hàng và tư vấn trực tiếp 1-1 qua Zalo số 0961.805.129.',
  },
  {
    category: 'Thưởng Thức & Bảo Quản',
    q: 'Cách pha và bảo quản chè Shan Tuyết để giữ trọn vị ngon?',
    a: 'Nên dùng nước tinh khiết đun sôi để nguội bớt xuống 85°C - 90°C (không dùng nước sôi sùng sục 100°C làm cháy búp lông tơ). Tráng trà nhanh trong 3 giây, hãm từ 20 - 30 giây mỗi lần và rót hết nước ra chén tống. Sau khi dùng, đậy kín túi zip hoặc hũ thiếc, bảo quản nơi khô ráo, tránh ánh nắng trực tiếp và tránh xa các gia vị nặng mùi.',
  },
]

// ====== BÀI VIẾT & CẨM NANG VĂN HÓA TRÀ (XÁC THỰC BÁO CHÍ 100%) ======
export const BLOG_POSTS = [
  {
    id: 'cay-di-san-che-shan-tuyet-ban-be',
    title: 'Quần thể 200 cây chè Shan tuyết cổ thụ Bản Bẹ được công nhận Cây Di sản Việt Nam',
    readTime: '5 phút đọc',
    category: 'Cây Di sản Việt Nam',
    thumb: 'https://images.pexels.com/photos/20834988/pexels-photo-20834988.jpeg?auto=compress&cs=tinysrgb&w=900',
    summary: 'Hội đồng Cây Di sản Việt Nam (VACNE) đã họp và chính thức trao Bằng công nhận Cây Di sản Việt Nam cho quần thể 200 cây chè Shan tuyết cổ thụ từ 100 đến gần 300 năm tuổi tại Bản Bẹ, xã Tà Xùa, huyện Bắc Yên, tỉnh Sơn La.',
    sourceName: 'Hội Bảo vệ Thiên nhiên & Môi trường Việt Nam (VACNE)',
    sourceUrl: 'http://vacne.org.vn/200-cay-che-shan-tuyet-co-thu-o-ban-be-son-la-du-tieu-chuan-cay-di-san-viet-nam/218086.html',
    content: `Quần thể chè Shan tuyết cổ thụ tại Bản Bẹ, xã Tà Xùa, huyện Bắc Yên (Sơn La) là một trong những báu vật tự nhiên quý giá nhất của núi rừng Tây Bắc.

1. Quyết định công nhận chính thức từ Hội đồng Cây Di sản:
Theo thông tin chính thức từ Hội đồng Cây Di sản Việt Nam (Hội Bảo vệ Thiên nhiên và Môi trường Việt Nam - VACNE), quần thể 200 cây chè Shan tuyết cổ thụ tại bản Bẹ, xã Tà Xùa đã xuất sắc vượt qua các tiêu chí khắt khe về độ tuổi (từ 100 đến gần 300 năm tuổi), kích thước thân cây, giá trị lịch sử, văn hóa và hệ sinh thái bản địa để được trao bằng công nhận Cây Di sản Việt Nam.

2. Không gian sinh trưởng 1.800m quanh năm mây phủ:
Cây chè Shan tuyết Bản Bẹ mọc hoang dã trên triền núi đá dốc đứng ở độ cao từ 1.500m đến 1.800m. Thân cây to lớn, xù xì, vỏ mốc trắng và phủ kín rêu phong, địa y. Khí hậu lạnh giá quanh năm cùng những đợt mây mù bồng bềnh nuôi dưỡng những búp chè mập mạp phủ lớp lông tơ trắng muốt như tuyết.

3. Di sản sống của đồng bào H'Mông Tà Xùa:
Đối với người H'Mông bản Bẹ, rừng chè cổ thụ không chỉ là sinh kế giúp bà con thoát nghèo mà còn là báu vật linh thiêng của tổ tiên truyền lại. Mọi thao tác chăm sóc, thu hái đều hoàn toàn tự nhiên, không sử dụng hóa chất hay phân bón nhân tạo, giữ vẹn nguyên hương vị thuần khiết của đại ngàn.`,
  },
  {
    id: 'danh-thuc-vang-xanh-noi-thien-duong-may',
    title: 'Đánh thức "vàng xanh" nơi thiên đường mây Tà Xùa',
    readTime: '6 phút đọc',
    category: 'Phóng sự Báo Nhân Dân',
    thumb: 'https://images.pexels.com/photos/29640382/pexels-photo-29640382.jpeg?auto=compress&cs=tinysrgb&w=900',
    summary: 'Phóng sự trên Báo Nhân Dân: Bản Bẹ, thung lũng ẩn mình giữa chốn "thiên đường mây" Tà Xùa cao vợi với những rừng chè Shan tuyết cổ thụ – hành trình đánh thức tiềm năng vùng chè đặc sản xuất khẩu.',
    sourceName: 'Báo Nhân Dân',
    sourceUrl: 'https://nhandan.vn/danh-thuc-vang-xanh-noi-thien-duong-may-post795922.html',
    content: `Theo phóng sự của Báo Nhân Dân: Bản Bẹ là một thung lũng nguyên sơ nép mình giữa thiên đường mây Tà Xùa, nơi lưu giữ một trong những quần thể chè cổ thụ tự nhiên đẹp nhất Việt Nam.

1. Báu vật nơi lưng chừng mây:
Toàn xã Tà Xùa có gần 300 ha chè Shan tuyết, trong đó có khoảng 40 ha chè cổ thụ với hàng nghìn cây mọc tự nhiên trên các đỉnh núi cao, tập trung nhiều nhất ở bản Bẹ. Người H'Mông bản địa gọi chè là "chi pâu" (có từ ngàn xưa không rõ nguồn gốc). Những cây chè thân gỗ cao hàng mét, vỏ rêu mốc thếch, vươn mình sừng sững trong sương gió.

2. Tiêu chuẩn thu hái 1 tôm 2 lá:
Để làm ra những mẻ trà Shan tuyết trứ danh, người làm trà phải vào bản từ sáng sớm khi sương mai còn đọng trên búp non. Đồng bào H'Mông trèo lên thân cây cổ thụ cao 5 - 10 mét, hái tay từng búp non đạt chuẩn "1 tôm 2 lá". Búp trà được bảo quản trong gùi tre thoáng khí trước khi đưa vào sao chảo gang để giữ trọn vẹn lớp tuyết tơ quý giá.

3. Giá trị vượt khỏi ranh giới bản làng:
Từ chỗ chỉ là thức uống dân dã của bà con vùng cao, ngày nay chè Shan tuyết Tà Xùa đã trở thành biểu tượng của trà đặc sản cao cấp Việt Nam, đạt chuẩn OCOP cấp tỉnh và giành được nhiều giải thưởng trà quốc tế uy tín, tạo nên sức bật kinh tế và thu hút khách du lịch đến với Bắc Yên, Sơn La.`,
  },
  {
    id: 'nang-tam-thuong-hieu-che-ta-xua',
    title: 'Sơn La: Nâng tầm thương hiệu chè Shan tuyết Tà Xùa',
    readTime: '4 phút đọc',
    category: 'Thông tấn xã Việt Nam',
    thumb: 'https://images.pexels.com/photos/2161448/pexels-photo-2161448.jpeg?auto=compress&cs=tinysrgb&w=900',
    summary: 'Báo điện tử VietnamPlus (Thông tấn xã Việt Nam) phản ánh: Sơn La đang đẩy mạnh các giải pháp đồng bộ từ bảo tồn rừng chè cổ thụ Bản Bẹ, chuẩn hóa quy trình sao thủ công đến phát triển du lịch sinh thái trà.',
    sourceName: 'VietnamPlus – TTXVN',
    sourceUrl: 'https://www.vietnamplus.vn/son-la-nang-tam-thuong-hieu-che-shan-tuyet-ta-xua-post823528.vnp',
    content: `Báo điện tử VietnamPlus (Thông tấn xã Việt Nam) phản ánh: Vùng chè Shan tuyết Tà Xùa (huyện Bắc Yên, tỉnh Sơn La) đang có những bước chuyển mình mạnh mẽ, khẳng định vị thế "vàng xanh" của vùng cao Tây Bắc.

1. Điều kiện tự nhiên khác biệt:
Tà Xùa nằm ở độ cao 1.500m – 1.800m so với mực nước biển, quanh năm mát lạnh và mây mù bao phủ. Biên độ nhiệt ngày đêm lớn kết hợp sương tuyết mùa đông đã giúp cây chè tích tụ hàm lượng tanin, polyphenol và chất chống oxy hóa tự nhiên cao vượt trội so với chè trung du.

2. Đa dạng hóa dòng sản phẩm:
Không chỉ dừng lại ở cách chế biến mộc, nghệ nhân trà Tà Xùa đã hoàn thiện kỹ thuật sản xuất cả hai dòng trà chủ lực:
- Lục Trà Cổ Thụ: Diệt men ngay sau hái, giữ trọn sắc nước vàng óng và hương cốm ngào ngạt.
- Hồng Trà Lên Men: Lên men tự nhiên 100%, sắc nước đỏ hổ phách quý phái, hương mật ong rừng và quả chín ấm áp.

3. Du lịch trải nghiệm văn hóa trà:
Sự phát triển của vùng chè Bản Bẹ gắn liền với tuyến du lịch "săn mây" nổi tiếng. Du khách đến Tà Xùa có cơ hội tự tay trèo cây hái chè cổ thụ cùng đồng bào H'Mông và thưởng thức ấm trà nóng ngay bên chảo gang đỏ lửa.`,
  },
  {
    id: 'nghe-thuat-thuong-tra-dinh-nuong-son',
    title: 'Nghệ thuật thưởng thức Lục Trà & Hồng Trà Shan Tuyết Đỉnh Nương Sơn',
    readTime: '5 phút đọc',
    category: 'Nghệ thuật trà đạo',
    thumb: './images/product-luc-tra.jpg',
    summary: 'Bí quyết đánh thức hương vị trà cổ thụ ngàn mây: Cách chọn nguồn nước, kiểm soát nhiệt độ từ 85°C – 90°C và nghệ thuật hãm trà qua 8 tuần nước ngọt thơm bền bỉ.',
    sourceName: 'Đỉnh Nương Sơn Trà Quán',
    sourceUrl: '',
    content: `Thưởng thức chè Shan Tuyết cổ thụ Tà Xùa là một trải nghiệm thanh tịnh của giác quan, kết tinh giữa hương vị thiên nhiên kỳ vĩ và kỹ nghệ sao chảo gang tinh xảo.

1. Nguồn nước & Nhiệt độ lý tưởng:
- Nước pha: Tốt nhất là nước suối tự nhiên hoặc nước tinh khiết đun sôi.
- Nhiệt độ nước: Đối với Lục Trà cổ thụ, nhiệt độ lý tưởng là 85°C – 90°C; đối với Hồng Trà là 90°C – 95°C. Tuyệt đối không dùng nước sôi sùng sục 100°C vì sẽ làm cháy lớp lông tuyết và làm nước trà bị nồng gắt.

2. Kỹ thuật đánh thức búp trà (Tráng trà):
Cho 5g - 8g trà vào ấm (ấm đất nung hoặc ấm tử sa giữ nhiệt tốt). Rót nước nóng ngập mặt trà và rót ra ngay trong vòng 3 giây. Động tác này giúp cánh trà giãn nở nhẹ và giải phóng lớp hương cốm non mộc mạc.

3. Thời gian hãm & Tuần nước:
- Nước 1: Hãm từ 20 – 25 giây rồi rót sạch toàn bộ nước ra chén tống (không ngâm trà trong ấm).
- Nước 2 và 3: Hãm khoảng 25 – 30 giây, đây là lúc trà đạt độ đậm đà và bùng nổ hậu ngọt sâu nhất.
- Từ nước 4 đến nước 8: Mỗi tuần nước tăng thêm 5 – 10 giây. Chè cổ thụ Đỉnh Nương Sơn có thể pha tới 7 - 8 tuần nước mà nước vẫn vàng óng sánh và vị ngọt thanh đượm mãi nơi cổ họng.`,
  },
]

export const fmt = (n) => n.toLocaleString('vi-VN') + '₫'
