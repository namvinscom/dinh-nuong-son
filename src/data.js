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

// ====== BÀI VIẾT & CẨM NANG VĂN HÓA TRÀ ======
export const BLOG_POSTS = [
  {
    id: 'cay-di-san-che-shan-tuyet-ban-be',
    title: 'Quần thể Cây Di sản chè Shan Tuyết cổ thụ Bản Bẹ trên đỉnh mây Tà Xùa',
    readTime: '6 phút đọc',
    category: 'Di sản Tà Xùa',
    thumb: 'https://images.pexels.com/photos/20834988/pexels-photo-20834988.jpeg?auto=compress&cs=tinysrgb&w=900',
    summary: 'Nằm ở độ cao gần 1.800m, quần thể hàng trăm cây chè Shan Tuyết cổ thụ 200 – 300 năm tuổi tại Bản Bẹ đã được công nhận là Cây Di sản Việt Nam, là báu vật sống của đại ngàn Tây Bắc.',
    sourceName: 'Báo Sơn La & Cổng TTĐT Du lịch Sơn La',
    sourceUrl: 'https://baosonla.org.vn/du-lich/kham-pha-vung-che-shan-tuyet-co-thu-ban-be-ta-xua',
    content: `Quần thể chè Shan Tuyết cổ thụ tại Bản Bẹ, xã Tà Xùa (huyện Bắc Yên, tỉnh Sơn La) là một trong những vùng chè cổ thụ tự nhiên quý giá nhất Việt Nam. Những gốc chè ở đây có tuổi đời từ 200 đến hơn 300 năm, thân cây to lớn mốc thếch, phủ kín rêu xanh và phong lan rừng.

1. Báu vật nơi mây ngàn Tà Xùa:
Ở độ cao 1.800m so với mực nước biển, Bản Bẹ quanh năm được bao phủ bởi những biển mây bồng bềnh và không khí lạnh tinh khiết. Khí hậu này giúp cây chè sinh trưởng chậm, tích tụ lượng khoáng chất, amino acid và polyphenol dồi dào trong từng búp lá.

2. Cây Di sản Việt Nam:
Năm 2019, Hội Bảo vệ Thiên nhiên và Môi trường Việt Nam đã trao bằng công nhận Cây Di sản Việt Nam cho quần thể cây chè Shan Tuyết cổ thụ tại Bản Bẹ. Đây không chỉ là niềm tự hào của đồng bào H'Mông mà còn là minh chứng cho giá trị lịch sử và sinh thái vô giá.

3. Thu hái hoàn toàn tự nhiên:
Cây chè cao lớn hàng mét, người dân H'Mông phải trèo lên những cành cây cổ thụ to lớn để hái từng búp chè ngậm sương sớm. Chè sinh trưởng hoang dã, không có sự can thiệp của phân bón hay thuốc hóa học, tạo nên hương vị thuần khiết nhất của đất trời Tây Bắc.`,
  },
  {
    id: 'sao-che-chao-gang-thu-cong',
    title: 'Kỹ nghệ sao chè chảo gang truyền thống của người H’Mông Tà Xùa',
    readTime: '5 phút đọc',
    category: 'Nghệ nhân bản địa',
    thumb: 'https://images.pexels.com/photos/2161448/pexels-photo-2161448.jpeg?auto=compress&cs=tinysrgb&w=900',
    summary: 'Bí quyết giữ nguyên lớp tuyết trắng muốt và hương cốm ngào ngạt nằm ở đôi bàn tay cảm nhận nhiệt độ điêu luyện trên chảo gang củi đỏ lửa của các nghệ nhân cao tuổi.',
    sourceName: 'Tạp chí Văn hóa Dân tộc',
    sourceUrl: 'https://baosonla.org.vn/van-hoa-xa-hoi/nghe-thuat-che-bien-che-shan-tuyet-ta-xua',
    content: `Dù máy móc hiện đại ngày càng phổ biến, chè Shan Tuyết Đỉnh Nương Sơn vẫn trung thành với phương pháp sao chảo gang thủ công truyền thống do chính các nghệ nhân H'Mông giàu kinh nghiệm đảm nhiệm.

1. Bắt lửa và giữ nhiệt chảo gang:
Chảo gang đúc dày được đốt bằng củi gỗ rừng khô để lửa cháy đều và đượm. Nghệ nhân dùng lòng bàn tay hơ trên miệng chảo để cảm nhận chính xác độ nóng trước khi cho búp chè tươi vào sao.

2. Kỹ thuật đảo tay liên tục:
Búp chè sau khi hái phải được sao ngay để diệt men. Đôi bàn tay thoăn thoắt đảo đều, nâng búp chè lên cao rồi thả nhẹ xuống lòng chảo, giúp búp chè thoát hơi ẩm mà không bị gãy vụn lớp lông tuyết quý giá.

3. Vò tay tạo hương và sấy khô:
Sau giai đoạn diệt men, trà được đổ ra nia tre để vò nhẹ bằng tay theo chuyển động tròn. Động tác này kích thích tinh dầu trà tiết ra bề mặt cánh trà, tạo tiền đề cho hương thơm cốm non bùng nổ khi pha với nước sôi. Cuối cùng, trà được hong sấy trên than hồng liu riu cho đến khi khô giòn rụm.`,
  },
  {
    id: 'so-sanh-luc-tra-va-hong-tra',
    title: 'Phân biệt Lục Trà & Hồng Trà Shan Tuyết: Khi nào nên chọn loại nào?',
    readTime: '4 phút đọc',
    category: 'Cẩm nang trà',
    thumb: './images/product-luc-tra.jpg',
    summary: 'Cùng sinh ra từ một gốc chè cổ thụ Tà Xùa nhưng qua bàn tay người thợ sao chè, Lục Trà và Hồng Trà mang hai phong vị hoàn toàn khác biệt.',
    sourceName: 'Đỉnh Nương Sơn Tea Lab',
    sourceUrl: '#so-sanh',
    content: `Lục Trà và Hồng Trà Đỉnh Nương Sơn đều được thu hái từ những cây chè Shan Tuyết cổ thụ hàng trăm năm tuổi tại Bản Bẹ, Tà Xùa. Tuy nhiên, sự khác biệt trong quy trình chế biến đã tạo nên hai trường phái thưởng trà riêng biệt:

1. Lục Trà (Trà Xanh Cổ Thụ):
- Chế biến: Búp chè sau khi hái được diệt men ngay trên chảo gang nóng để ngăn chặn quá trình oxy hóa, giữ lại màu xanh ngọc và chất diệp lục.
- Hương vị: Hương thơm cốm non nồng nàn, nước trà vàng óng ánh hổ phách nhạt. Vị chát thanh ban đầu và bùng nổ hậu ngọt sâu kéo dài nhiều giờ.
- Thời điểm thưởng thức: Thích hợp nhất vào buổi sáng sau bữa ăn, giúp tinh thần tỉnh táo, minh mẫn.

2. Hồng Trà (Trà Lên Men Tự Nhiên):
- Chế biến: Búp chè được ủ và lên men tự nhiên 100% trong phòng kiểm soát vi khí hậu, tạo ra màu đỏ hổ phách và chuyển hóa tanin thành các hợp chất thơm ngọt ngào.
- Hương vị: Vị ngọt dịu êm mượt, không hề chát, thoang thoảng mùi mật ong và quả chín mọng. Rất ấm bụng và dễ chịu.
- Thời điểm thưởng thức: Có thể uống bất cứ lúc nào trong ngày, đặc biệt phù hợp trong những ngày se lạnh hoặc sau bữa tối thư giãn.`,
  },
  {
    id: 'nghe-thuat-pha-tra-ta-xua',
    title: 'Nghệ thuật pha chè Shan Tuyết Tà Xùa đúng chuẩn: Nhiệt độ, ấm chén và tuần nước',
    readTime: '5 phút đọc',
    category: 'Nghệ thuật pha trà',
    thumb: './images/product-hong-tra.jpg',
    summary: 'Pha chè Shan Tuyết không dùng nước sôi sùng sục 100°C và không ngâm lâu. Khám phá bí quyết đánh thức hương vị trà cổ thụ.',
    sourceName: 'Cẩm nang Thưởng Trà Việt Nam',
    sourceUrl: '#so-sanh',
    content: `Chè Shan Tuyết Tà Xùa là món quà quý giá từ thiên nhiên vùng cao Sơn La. Để chén trà tỏa trọn hương thơm rừng núi và vị ngọt hậu tinh túy, nghệ thuật pha trà đòi hỏi sự tỉ mỉ trong từng thao tác:

1. Nước pha trà:
Nên dùng nước tinh khiết hoặc nước suối tự nhiên. Nhiệt độ lý tưởng nhất là từ 85°C – 90°C đối với Lục trà và 90°C – 95°C đối với Hồng trà (không dùng nước sôi sục 100°C vì sẽ làm nát búp lông tơ của trà).

2. Đánh thức trà (Tráng trà):
Cho khoảng 5g trà vào ấm (ấm tử sa hoặc ấm gốm là tốt nhất). Rót nước nóng ngập mặt trà rồi rót ra ngay trong vòng 3 giây để búp tuyết giãn nở nhẹ.

3. Thời gian hãm & Tuần nước:
- Nước 1: Hãm từ 20 – 25 giây rồi rót hết nước ra chén tống trước khi chia ra chén con (không để ngâm trà trong ấm).
- Nước 2 và 3: Hãm khoảng 25 – 30 giây.
- Từ nước 4 trở đi: Tăng thêm 5 - 10 giây mỗi lần nước. Một ấm trà cổ thụ Đỉnh Nương Sơn có thể pha tới 7-8 tuần nước mà vẫn ngọt thơm.`,
  },
]

export const fmt = (n) => n.toLocaleString('vi-VN') + '₫'
