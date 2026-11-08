import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import {
  SHOP,
  BANK_INFO,
  PRODUCTS,
  REVIEWS,
  FAQS,
  BLOG_POSTS,
  HERO_SLIDES,
  SCENERY,
  fmt,
} from './data'

/* ══════════════════════════════════════════════
   ANALYTICS TRACKER HELPER
══════════════════════════════════════════════ */
const trackEvent = (action, params = {}) => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    try {
      window.gtag('event', action, params)
    } catch {
      /* ignore */
    }
  }
}

/* ══════════════════════════════════════════════
   CART HOOK
══════════════════════════════════════════════ */
const useCart = () => {
  const [cart, setCart] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('dns-cart-v3')) || {}
    } catch {
      return {}
    }
  })
  useEffect(() => localStorage.setItem('dns-cart-v3', JSON.stringify(cart)), [cart])
  const add = (id, n = 1) => setCart((c) => ({ ...c, [id]: (c[id] || 0) + n }))
  const set = (id, n) =>
    setCart((c) => {
      const x = { ...c }
      if (n <= 0) delete x[id]
      else x[id] = n
      return x
    })
  const clear = () => setCart({})
  return { cart, add, set, clear }
}

/* ══════════════════════════════════════════════
   TOAST SYSTEM (CHỈ DÙNG TEXT VÀ DẤU CHECK)
══════════════════════════════════════════════ */
function ToastContainer({ toasts }) {
  return (
    <div className="toast-wrap" aria-live="polite">
      {toasts.map((t) => (
        <div key={t.id} className={`toast ${t.leaving ? 'toast-out' : 'toast-in'}`}>
          <span className="toast-check">✓</span>
          <span>{t.msg}</span>
        </div>
      ))}
    </div>
  )
}

const useToast = () => {
  const [toasts, setToasts] = useState([])
  const push = useCallback((msg) => {
    const id = Date.now()
    setToasts((t) => [...t, { id, msg, leaving: false }])
    setTimeout(() => {
      setToasts((t) => t.map((x) => (x.id === id ? { ...x, leaving: true } : x)))
      setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 400)
    }, 2600)
  }, [])
  return { toasts, push }
}

/* ══════════════════════════════════════════════
   TOP PROMO MARQUEE BAR
══════════════════════════════════════════════ */
function PromoMarqueeBar() {
  return (
    <div className="promo-bar">
      <div className="promo-track">
        <span>MIỄN PHÍ VẬN CHUYỂN TOÀN QUỐC CHO ĐƠN TỪ {fmt(SHOP.freeShipFrom)}</span>
        <span className="dot-sep">•</span>
        <span>HỖ TRỢ SHIP COD ĐỒNG KIỂM · THANH TOÁN CHUYỂN KHOẢN QR · ĐẶT QUA ZALO</span>
        <span className="dot-sep">•</span>
        <span>100% CHÈ SHAN TUYẾT CỔ THỤ TÀ XÙA 1.800M</span>
        <span className="dot-sep">•</span>
        <span>BỘ ĐÔI CHỦ LỰC: LỤC TRÀ THANH TAO & HỒNG TRÀ NGỌT ẤM</span>
        <span className="dot-sep">•</span>
        <span>HOTLINE: {SHOP.hotlineDisplay} · TƯ VẤN QUA ZALO · FACEBOOK: {SHOP.facebookDisplay}</span>
      </div>
    </div>
  )
}

/* ══════════════════════════════════════════════
   SCROLL PROGRESS BAR
══════════════════════════════════════════════ */
function ScrollProgress() {
  const [pct, setPct] = useState(0)
  useEffect(() => {
    const update = () => {
      const el = document.documentElement
      const max = el.scrollHeight - el.clientHeight
      setPct(max > 0 ? (el.scrollTop / max) * 100 : 0)
    }
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])
  return <div className="scroll-progress" style={{ width: `${pct}%` }} />
}

/* ══════════════════════════════════════════════
   HERO SLIDESHOW
══════════════════════════════════════════════ */
function HeroSlideshow({ onExplore }) {
  const [idx, setIdx] = useState(0)
  const [fading, setFading] = useState(false)
  const timerRef = useRef(null)

  const goTo = (next) => {
    setFading(true)
    setTimeout(() => {
      setIdx(next)
      setFading(false)
    }, 600)
  }

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setIdx((i) => {
        const next = (i + 1) % HERO_SLIDES.length
        setFading(true)
        setTimeout(() => setFading(false), 600)
        return next
      })
    }, 5500)
    return () => clearInterval(timerRef.current)
  }, [])

  return (
    <header className="hero" id="top">
      {HERO_SLIDES.map((s, i) => (
        <div
          key={i}
          className={`slide-bg ${i === idx ? (fading ? 'slide-fade' : 'slide-active') : ''}`}
          style={{ backgroundImage: `url('${s.url}')` }}
          aria-hidden={i !== idx}
        />
      ))}
      <div className="hero-inner">
        <div className="hero-logo-badge">
          <img src={SHOP.logo} alt={SHOP.name} className="hero-badge-img" />
          <span>Trà Cổ Thụ Tà Xùa · 1.800m Sơn La</span>
        </div>
        <h1>
          Chè Shan Tuyết <em>{SHOP.name}</em>
        </h1>
        <p className="lead">
          Đặc sản trà cổ thụ hơn 200 năm tuổi trên đỉnh Tà Xùa mây phủ. Chuyên sâu bộ đôi{' '}
          <strong>Lục Trà thanh tao</strong> và <strong>Hồng Trà ngọt ấm</strong>, sao tay chảo gang
          giữ trọn vẹn hương vị đại ngàn Tây Bắc.
        </p>
        <div className="cta">
          <button className="btn btn-hero-primary" onClick={onExplore}>
            Khám phá Lục Trà & Hồng Trà
          </button>
          <a
            className="btn ghost"
            href={`https://zalo.me/${SHOP.zalo}`}
            target="_blank"
            rel="noreferrer"
          >
            Tư vấn qua Zalo
          </a>
        </div>
        <p className="slide-caption">{HERO_SLIDES[idx].caption}</p>
        <div className="slide-dots">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              className={`dot ${i === idx ? 'on' : ''}`}
              onClick={() => {
                clearInterval(timerRef.current)
                goTo(i)
              }}
              aria-label={`Ảnh ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </header>
  )
}

/* ══════════════════════════════════════════════
   SCENIC SECTION (TÀ XÙA)
══════════════════════════════════════════════ */
function ScenerySection() {
  return (
    <section className="scenic" id="ta-xua">
      <div className="scenic-header">
        <p className="eyebrow">Vùng Đất Di Sản</p>
        <h2>Tà Xùa · Chiếc Nôi Nuôi Dưỡng Chè Cổ Thụ</h2>
        <p className="scenic-lead">
          Nằm ở độ cao 1.500 – 1.800m thuộc huyện Bắc Yên, Sơn La, Tà Xùa là xứ sở của sương mù, mây
          trắng và những thân chè Shan Tuyết cổ thụ hàng trăm năm tuổi vươn mình giữa trời xanh.
        </p>
      </div>
      <div className="scenic-grid">
        {SCENERY.map((s) => (
          <div key={s.title} className="scenic-card">
            <div className="scenic-img" style={{ backgroundImage: `url('${s.url}')` }} />
            <div className="scenic-body">
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="stats-row">
        {[
          ['1.800m', 'Độ cao vùng chè'],
          ['200+ năm', 'Tuổi thọ cổ thụ'],
          ['100%', 'Thu hái thủ công'],
          ['Di sản', 'Cây Di sản Việt Nam'],
        ].map(([n, l]) => (
          <div key={l} className="stat">
            <strong>{n}</strong>
            <span>{l}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════
   PRODUCT CARD (KHÔNG DÙNG ICON GIỎ HÀNG)
══════════════════════════════════════════════ */
function ProductCard({ p, onAdd, onView }) {
  const [imgLoaded, setImgLoaded] = useState(false)
  return (
    <article className="card card-hero-item" id={`product-${p.id}`}>
      <div className="card-img" onClick={() => onView(p)} style={{ cursor: 'pointer' }}>
        {!imgLoaded && <div className="card-skeleton" />}
        <img
          src={p.image}
          alt={p.name}
          loading="lazy"
          onLoad={() => setImgLoaded(true)}
          className={imgLoaded ? 'loaded' : ''}
        />
        <span className="tag">{p.type}</span>
        {p.badge && <span className="card-badge">{p.badge}</span>}
        <div className="card-overlay">Xem chi tiết sản phẩm →</div>
      </div>
      <div className="card-body">
        <h3 onClick={() => onView(p)} style={{ cursor: 'pointer' }}>
          {p.name}
        </h3>
        <p>{p.desc}</p>
        <div className="card-foot">
          <div>
            <strong>{fmt(p.price)}</strong>
            <small> / {p.unit}</small>
          </div>
          <button className="btn btn-sm" id={`add-${p.id}`} onClick={() => onAdd(p.id)}>
            Thêm vào giỏ
          </button>
        </div>
      </div>
    </article>
  )
}

/* ══════════════════════════════════════════════
   FULL-SCREEN PRODUCT DETAIL VIEW
══════════════════════════════════════════════ */
function ProductDetailView({ product: p, onBack, onAddToCart, onViewOther }) {
  const [variantIdx, setVariantIdx] = useState(0)
  const [qty, setQty] = useState(1)
  const [imgLoaded, setImgLoaded] = useState(false)
  const variant = p.variants[variantIdx] || p.variants[0]

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    trackEvent('view_item', { item_id: p.id, item_name: p.name, price: p.price })
  }, [p])

  const handleAdd = () => {
    onAddToCart(p.id, qty, p.name, variant)
  }

  const otherProduct = PRODUCTS.find((x) => x.id !== p.id)

  return (
    <div className="product-page">
      <div className="product-page-nav">
        <button className="back-btn" onClick={onBack}>
          ← Quay lại danh mục trà
        </button>
        <div className="breadcrumbs">
          <span onClick={onBack} style={{ cursor: 'pointer' }}>
            Trang chủ
          </span>
          <span>/</span>
          <span>{p.type}</span>
          <span>/</span>
          <strong>{p.name}</strong>
        </div>
      </div>

      <div className="product-page-container">
        {/* Left Column: Media & Trust */}
        <div className="product-page-media">
          <div className="product-main-img-box">
            {!imgLoaded && <div className="card-skeleton" />}
            <img
              src={p.image}
              alt={p.name}
              className={`product-main-img ${imgLoaded ? 'loaded' : ''}`}
              onLoad={() => setImgLoaded(true)}
            />
            <span className="tag-lg">{p.type}</span>
            {p.badge && <span className="p-hero-badge">{p.badge}</span>}
          </div>

          <div className="trust-badges-grid">
            <div className="badge-item">
              <span className="badge-icon">📦</span>
              <div>
                <strong>Hỗ Trợ Ship COD</strong>
                <small>Đồng kiểm trước khi trả tiền</small>
              </div>
            </div>
            <div className="badge-item">
              <span className="badge-icon">💳</span>
              <div>
                <strong>Thanh Toán Chuyển Khoản</strong>
                <small>Mã VietQR tự động tiện lợi</small>
              </div>
            </div>
            <div className="badge-item">
              <span className="badge-icon">💬</span>
              <div>
                <strong>Đặt Qua Zalo</strong>
                <small>Tư vấn chuyên sâu tận tâm</small>
              </div>
            </div>
            <div className="badge-item">
              <span className="badge-icon">🚚</span>
              <div>
                <strong>Miễn Phí Ship Toàn Quốc</strong>
                <small>Cho đơn từ {fmt(SHOP.freeShipFrom)}</small>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Info & Buy */}
        <div className="product-page-info">
          <div className="p-meta-tags">
            <span className="p-tag origin">📍 {p.origin}</span>
            <span className="p-tag harvest">🌾 {p.harvest}</span>
            <span className="p-rating">⭐⭐⭐⭐⭐ 5.0 (Khách hàng đánh giá)</span>
          </div>

          <h1 className="p-title">{p.name}</h1>

          <div className="p-price-row">
            <span className="p-price">{fmt(variant.price)}</span>
            <span className="p-unit">/ {variant.weight}</span>
            <span className="p-freeship-tag">Miễn phí ship đơn từ {fmt(SHOP.freeShipFrom)}</span>
          </div>

          {/* Highlights */}
          <div className="p-highlights-box">
            <h4>Đặc tính nổi bật:</h4>
            <ul>
              {p.highlights.map((h) => (
                <li key={h}>
                  <span className="check">✓</span> {h}
                </li>
              ))}
            </ul>
          </div>

          {/* Variant Selector */}
          <div className="p-section">
            <label className="p-label">Chọn quy cách đóng gói:</label>
            <div className="p-variants-list">
              {p.variants.map((v, i) => (
                <button
                  key={v.weight}
                  className={`p-variant-card ${i === variantIdx ? 'active' : ''}`}
                  onClick={() => {
                    setVariantIdx(i)
                    setQty(1)
                  }}
                >
                  <span className="p-v-weight">{v.weight}</span>
                  <span className="p-v-price">{fmt(v.price)}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="p-section p-quantity-row">
            <label className="p-label">Số lượng:</label>
            <div className="p-qty-controls">
              <button onClick={() => setQty((q) => Math.max(1, q - 1))}>−</button>
              <span>{qty}</span>
              <button onClick={() => setQty((q) => q + 1)}>+</button>
            </div>
            <div className="p-total-preview">
              <small>Tạm tính:</small>
              <strong>{fmt(variant.price * qty)}</strong>
            </div>
          </div>

          {/* CTA Buttons: ĐÃ BỎ HÌNH GIỎ HÀNG, ĐỂ MỖI TEXT */}
          <div className="p-actions">
            <button className="btn btn-primary-lg" onClick={handleAdd}>
              Thêm vào giỏ hàng ({qty})
            </button>
            <a
              className="btn btn-zalo-lg"
              href={`https://zalo.me/${SHOP.zalo}?text=${encodeURIComponent(
                `Chào Đỉnh Nương Sơn, tôi quan tâm sản phẩm ${p.name} (${variant.weight}). Hãy tư vấn cho tôi!`
              )}`}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackEvent('contact_zalo', { product: p.name })}
            >
              Đặt hàng nhanh qua Zalo
            </a>
          </div>

          {/* Brewing Guide */}
          {p.brewing && (
            <div className="brewing-box">
              <h4>🍵 Nghệ thuật pha trà ngon:</h4>
              <div className="brewing-grid">
                <div>
                  <strong>Nhiệt độ nước:</strong>
                  <span>{p.brewing.waterTemp}</span>
                </div>
                <div>
                  <strong>Tỉ lệ chuẩn:</strong>
                  <span>{p.brewing.ratio}</span>
                </div>
                <div>
                  <strong>Thời gian hãm:</strong>
                  <span>{p.brewing.steepTime}</span>
                </div>
              </div>
            </div>
          )}

          {/* Detailed Story */}
          <div className="p-long-desc">
            <h3>Câu chuyện & Quy trình chế biến</h3>
            {p.descLong.split('\n\n').map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>
        </div>
      </div>

      {/* Switch to the other signature tea */}
      {otherProduct && (
        <section className="related-section">
          <h3>Khám phá dòng trà đối trọng</h3>
          <div className="grid grid-center-single">
            <ProductCard
              key={otherProduct.id}
              p={otherProduct}
              onAdd={(id) => onAddToCart(id, 1, otherProduct.name, otherProduct.variants[0])}
              onView={onViewOther}
            />
          </div>
        </section>
      )}
    </div>
  )
}

/* ══════════════════════════════════════════════
   FULL-PAGE SHOPPING CART (TEXT ONLY CHO NÚT GIỎ HÀNG)
══════════════════════════════════════════════ */
function FullPageCartView({ cart, onUpdateQty, onClear, onBackToShop }) {
  const [info, setInfo] = useState({ name: '', phone: '', address: '', note: '' })
  const [paymentMethod, setPaymentMethod] = useState('cod')
  const [orderDone, setOrderDone] = useState(false)
  const [lastOrderDetails, setLastOrderDetails] = useState(null)

  const items = useMemo(
    () =>
      PRODUCTS.filter((p) => cart[p.id]).map((p) => ({
        ...p,
        qty: cart[p.id],
      })),
    [cart]
  )

  const total = items.reduce((s, i) => s + i.price * i.qty, 0)
  const isFreeShip = total >= SHOP.freeShipFrom
  const shippingFee = isFreeShip ? 0 : 30000
  const finalTotal = total + shippingFee
  const neededForFreeShip = Math.max(0, SHOP.freeShipFrom - total)
  const freeShipPercent = Math.min(100, (total / SHOP.freeShipFrom) * 100)

  const isValid = items.length > 0 && info.name.trim() && info.phone.trim() && info.address.trim()

  const handleCompleteOrder = async () => {
    if (!isValid) {
      alert('Vui lòng điền đủ Họ tên, Số điện thoại và Địa chỉ nhận hàng!')
      return
    }

    const orderData = {
      items,
      total,
      shippingFee,
      finalTotal,
      info,
      method: paymentMethod,
      date: new Date().toLocaleString('vi-VN'),
    }

    if (paymentMethod === 'zalo') {
      const lines = items
        .map((i) => `• ${i.name} x${i.qty} = ${fmt(i.price * i.qty)}`)
        .join('\n')
      const msg = `ĐƠN HÀNG ${SHOP.name.toUpperCase()} (TÀ XÙA):\n${lines}\n\nTạm tính: ${fmt(
        total
      )}\nPhí ship: ${isFreeShip ? 'MIỄN PHÍ' : fmt(shippingFee)}\nTổng thanh toán: ${fmt(
        finalTotal
      )}\n\nKhách hàng: ${info.name}\nSố điện thoại: ${info.phone}\nĐịa chỉ: ${info.address}\nGhi chú: ${
        info.note || 'Không có'
      }\nPhương thức: Đặt hàng qua Zalo`

      try {
        await navigator.clipboard.writeText(msg)
      } catch {
        /* ignore */
      }
      trackEvent('purchase_zalo', { value: finalTotal, items_count: items.length })
      alert('Đã sao chép nội dung đơn hàng! Bạn chỉ cần dán (Ctrl+V) vào khung chat Zalo của shop.')
      window.open(`https://zalo.me/${SHOP.zalo}`, '_blank')
      setLastOrderDetails(orderData)
      setOrderDone(true)
      onClear()
      return
    }

    trackEvent(`purchase_${paymentMethod}`, { value: finalTotal, phone: info.phone })
    setLastOrderDetails(orderData)
    setOrderDone(true)
    onClear()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const vietQrUrl = `https://img.vietqr.io/image/${BANK_INFO.bankCode}-${BANK_INFO.accountNumber}-compact2.png?amount=${finalTotal}&addInfo=DNS%20${encodeURIComponent(
    info.phone || 'DAT HANG'
  )}&accountName=${encodeURIComponent(BANK_INFO.accountHolder)}`

  return (
    <div className="cart-page">
      <div className="cart-page-header">
        <button className="back-btn" onClick={onBackToShop}>
          ← Tiếp tục chọn thêm trà
        </button>
        <h1>Giỏ Hàng Đỉnh Nương Sơn</h1>
        <p className="cart-subtitle">
          {items.length > 0
            ? `Bạn đang có ${items.reduce((a, b) => a + b.qty, 0)} sản phẩm trà trong giỏ hàng`
            : 'Giỏ hàng của bạn đang trống'}
        </p>
      </div>

      {orderDone && lastOrderDetails ? (
        <div className="order-success-screen">
          <div className="order-success-card">
            <span className="success-icon">✓</span>
            <h2>Đặt Hàng Thành Công!</h2>
            <p className="success-lead">
              Cảm ơn quý khách <strong>{lastOrderDetails.info.name}</strong> đã tin tưởng lựa chọn chè
              Shan Tuyết Đỉnh Nương Sơn.
            </p>

            <div className="order-summary-box">
              <h4>Chi tiết đơn hàng:</h4>
              <ul>
                {lastOrderDetails.items.map((it) => (
                  <li key={it.id}>
                    <span>{it.name} (x{it.qty})</span>
                    <strong>{fmt(it.price * it.qty)}</strong>
                  </li>
                ))}
              </ul>
              <div className="summary-split-line" />
              <div className="success-row">
                <span>Phí giao hàng:</span>
                <span>{lastOrderDetails.shippingFee === 0 ? 'MIỄN PHÍ' : fmt(lastOrderDetails.shippingFee)}</span>
              </div>
              <div className="success-row total">
                <span>Tổng tiền cần thanh toán:</span>
                <strong>{fmt(lastOrderDetails.finalTotal)}</strong>
              </div>
            </div>

            {lastOrderDetails.method === 'bank' && (
              <div className="bank-qr-instruction">
                <h4>Quét mã QR để chuyển khoản nhanh:</h4>
                <div className="qr-container">
                  <img src={vietQrUrl} alt="VietQR Đỉnh Nương Sơn" className="vietqr-img" />
                </div>
                <div className="bank-text-details">
                  <p>Ngân hàng: <b>{BANK_INFO.bankName}</b></p>
                  <p>Số tài khoản: <b>{BANK_INFO.accountNumber}</b></p>
                  <p>Chủ tài khoản: <b>{BANK_INFO.accountHolder}</b></p>
                  <p>Nội dung CK: <b>DNS {lastOrderDetails.info.phone}</b></p>
                </div>
              </div>
            )}

            {lastOrderDetails.method === 'cod' && (
              <div className="cod-instruction">
                <p>
                  Đơn hàng của bạn sẽ được gửi chuyển phát nhanh qua bưu điện. Bạn vui lòng chuẩn bị
                  số tiền <strong>{fmt(lastOrderDetails.finalTotal)}</strong> để thanh toán tiền mặt cho
                  shipper sau khi đã đồng kiểm búp trà đúng chuẩn.
                </p>
              </div>
            )}

            <div className="success-actions">
              <a
                href={`https://zalo.me/${SHOP.zalo}?text=${encodeURIComponent(
                  `Tôi vừa đặt đơn hàng tại website. Số điện thoại của tôi là ${lastOrderDetails.info.phone}. Nhờ shop kiểm tra đơn giúp tôi!`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-zalo-lg"
              >
                Nhắn Zalo thông báo đơn hàng
              </a>
              <button
                className="btn btn-primary-lg"
                onClick={() => {
                  setOrderDone(false)
                  onBackToShop()
                }}
              >
                Về trang chủ mua sắm
              </button>
            </div>
          </div>
        </div>
      ) : items.length === 0 ? (
        <div className="cart-empty-box">
          <h2>Giỏ hàng đang trống</h2>
          <p>Hãy khám phá bộ đôi Lục Trà và Hồng Trà Shan Tuyết cổ thụ trứ danh của chúng tôi.</p>
          <button className="btn btn-primary-lg" onClick={onBackToShop}>
            Khám phá Lục & Hồng Trà ngay →
          </button>
        </div>
      ) : (
        <div className="cart-page-grid">
          {/* Left Column: Cart Items List */}
          <div className="cart-items-section">
            <div className="freeship-meter">
              <div className="freeship-text">
                {isFreeShip ? (
                  <span>
                    Chúc mừng! Đơn hàng của bạn được <b>MIỄN PHÍ VẬN CHUYỂN TOÀN QUỐC</b>.
                  </span>
                ) : (
                  <span>
                    Mua thêm <strong>{fmt(neededForFreeShip)}</strong> để được <b>MIỄN PHÍ VẬN CHUYỂN</b>
                  </span>
                )}
              </div>
              <div className="meter-track">
                <div className="meter-fill" style={{ width: `${freeShipPercent}%` }} />
              </div>
            </div>

            <div className="cart-items-list">
              {items.map((i) => (
                <div key={i.id} className="cart-item-row">
                  <img src={i.image} alt={i.name} className="cart-item-img" />
                  <div className="cart-item-info">
                    <span className="cart-item-type">{i.type}</span>
                    <h3>{i.name}</h3>
                    <span className="cart-item-unit">
                      Đơn giá: <b>{fmt(i.price)}</b> / {i.unit}
                    </span>
                  </div>

                  <div className="cart-item-qty-box">
                    <button onClick={() => onUpdateQty(i.id, i.qty - 1)}>−</button>
                    <span>{i.qty}</span>
                    <button onClick={() => onUpdateQty(i.id, i.qty + 1)}>+</button>
                  </div>

                  <div className="cart-item-subtotal">
                    <small>Thành tiền:</small>
                    <strong>{fmt(i.price * i.qty)}</strong>
                  </div>

                  <button
                    className="cart-item-del"
                    onClick={() => onUpdateQty(i.id, 0)}
                    title="Xóa khỏi giỏ"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>

            <div className="cart-actions-bar">
              <button className="btn-outline-clear" onClick={onClear}>
                Dọn sạch giỏ hàng
              </button>
              <button className="btn-text-continue" onClick={onBackToShop}>
                ← Chọn thêm trà
              </button>
            </div>
          </div>

          {/* Right Column: Checkout Details Form with 3 Methods */}
          <div className="cart-checkout-section">
            <div className="checkout-card">
              <h3>Thông Tin Giao Hàng & Thanh Toán</h3>

              <div className="checkout-summary">
                <div className="summary-row">
                  <span>Tạm tính:</span>
                  <strong>{fmt(total)}</strong>
                </div>
                <div className="summary-row">
                  <span>Phí vận chuyển:</span>
                  <span className={isFreeShip ? 'text-free' : ''}>
                    {isFreeShip ? 'MIỄN PHÍ' : fmt(shippingFee)}
                  </span>
                </div>
                <div className="summary-total">
                  <span>Tổng thanh toán:</span>
                  <strong>{fmt(finalTotal)}</strong>
                </div>
              </div>

              <div className="checkout-form">
                <label>
                  <span>Họ và tên người nhận *</span>
                  <input
                    type="text"
                    placeholder="Ví dụ: Nguyễn Văn A"
                    value={info.name}
                    onChange={(e) => setInfo({ ...info, name: e.target.value })}
                  />
                </label>

                <label>
                  <span>Số điện thoại nhận hàng *</span>
                  <input
                    type="tel"
                    placeholder="Ví dụ: 0912 345 678"
                    value={info.phone}
                    onChange={(e) => setInfo({ ...info, phone: e.target.value })}
                  />
                </label>

                <label>
                  <span>Địa chỉ giao hàng chi tiết *</span>
                  <input
                    type="text"
                    placeholder="Số nhà, ngõ/đường, Phường/Xã, Quận/Huyện, Tỉnh/TP"
                    value={info.address}
                    onChange={(e) => setInfo({ ...info, address: e.target.value })}
                  />
                </label>

                <label>
                  <span>Ghi chú đơn hàng</span>
                  <textarea
                    rows="2"
                    placeholder="Ví dụ: Giao giờ hành chính, đóng gói quà biếu..."
                    value={info.note}
                    onChange={(e) => setInfo({ ...info, note: e.target.value })}
                  />
                </label>

                {/* 3 PHƯƠNG THỨC THANH TOÁN */}
                <div className="order-methods">
                  <span className="method-label">Chọn hình thức đặt hàng & thanh toán:</span>
                  <div className="payment-options-grid">
                    {/* 1. Ship COD */}
                    <div
                      className={`payment-option-card ${paymentMethod === 'cod' ? 'active' : ''}`}
                      onClick={() => setPaymentMethod('cod')}
                    >
                      <input
                        type="radio"
                        name="payment"
                        id="pay-cod"
                        checked={paymentMethod === 'cod'}
                        onChange={() => setPaymentMethod('cod')}
                      />
                      <label htmlFor="pay-cod">
                        <strong>Ship COD (Thanh toán khi nhận hàng)</strong>
                        <small>Mở gói hàng đồng kiểm kỹ càng trước khi trả tiền mặt</small>
                      </label>
                    </div>

                    {/* 2. Thanh toán Chuyển khoản QR */}
                    <div
                      className={`payment-option-card ${paymentMethod === 'bank' ? 'active' : ''}`}
                      onClick={() => setPaymentMethod('bank')}
                    >
                      <input
                        type="radio"
                        name="payment"
                        id="pay-bank"
                        checked={paymentMethod === 'bank'}
                        onChange={() => setPaymentMethod('bank')}
                      />
                      <label htmlFor="pay-bank">
                        <strong>Chuyển khoản ngân hàng (Quét mã QR)</strong>
                        <small>Mã VietQR tự động điền sẵn số tiền qua app ngân hàng</small>
                      </label>
                    </div>

                    {/* 3. Đặt hàng qua Zalo */}
                    <div
                      className={`payment-option-card ${paymentMethod === 'zalo' ? 'active' : ''}`}
                      onClick={() => setPaymentMethod('zalo')}
                    >
                      <input
                        type="radio"
                        name="payment"
                        id="pay-zalo"
                        checked={paymentMethod === 'zalo'}
                        onChange={() => setPaymentMethod('zalo')}
                      />
                      <label htmlFor="pay-zalo">
                        <strong>Đặt hàng qua Zalo</strong>
                        <small>Gửi đơn trực tiếp và được tư vấn 1-1 tận tình</small>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Nút hành động */}
                {paymentMethod === 'cod' && (
                  <button
                    className="btn btn-primary-lg w-full"
                    disabled={!isValid}
                    onClick={handleCompleteOrder}
                  >
                    Xác nhận đặt hàng Ship COD ({fmt(finalTotal)})
                  </button>
                )}

                {paymentMethod === 'bank' && (
                  <button
                    className="btn btn-primary-lg w-full"
                    disabled={!isValid}
                    onClick={handleCompleteOrder}
                  >
                    Xác nhận chuyển khoản ({fmt(finalTotal)})
                  </button>
                )}

                {paymentMethod === 'zalo' && (
                  <button
                    className="btn btn-zalo-lg w-full"
                    disabled={!isValid}
                    onClick={handleCompleteOrder}
                  >
                    Gửi đơn hàng qua Zalo ({fmt(finalTotal)})
                  </button>
                )}

                {!isValid && (
                  <small className="form-warn">
                    * Vui lòng điền đủ Họ tên, Số điện thoại và Địa chỉ để hoàn tất đặt hàng.
                  </small>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

/* ══════════════════════════════════════════════
   PHẦN CÂU HỎI THƯỜNG GẶP (FAQ) - THIẾT KẾ CHUYÊN NGHIỆP
══════════════════════════════════════════════ */
function FAQSection() {
  const [activeCategory, setActiveCategory] = useState('Tất cả')
  const [openIdx, setOpenIdx] = useState(0)

  const categories = useMemo(() => {
    return ['Tất cả', ...new Set(FAQS.map((f) => f.category))]
  }, [])

  const displayedFaqs = useMemo(() => {
    if (activeCategory === 'Tất cả') return FAQS
    return FAQS.filter((f) => f.category === activeCategory)
  }, [activeCategory])

  return (
    <section id="faq" className="section faq-pro-section">
      <div className="section-header">
        <p className="eyebrow">Giải đáp thắc mắc</p>
        <h2>Câu Hỏi Thường Gặp</h2>
        <p className="section-sub">
          Tất cả thông tin minh bạch về nguồn gốc, quy trình sao chảo thủ công, phương thức vận
          chuyển và bảo quản chè Shan Tuyết Tà Xùa.
        </p>
      </div>

      <div className="faq-pro-layout">
        {/* Cột trái: Khung hỗ trợ trực tiếp & Danh mục */}
        <div className="faq-pro-sidebar">
          <div className="faq-filter-pills">
            <span className="faq-filter-title">Chủ đề câu hỏi:</span>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`faq-pill-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => {
                  setActiveCategory(cat)
                  setOpenIdx(0)
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="faq-support-box">
            <h4>Bạn vẫn còn thắc mắc?</h4>
            <p>
              Đội ngũ trà nhân Đỉnh Nương Sơn luôn túc trực để giải đáp mọi câu hỏi và tư vấn gu trà
              phù hợp nhất với bạn.
            </p>
            <div className="faq-support-actions">
              <a href={`tel:${SHOP.phone}`} className="btn btn-sm btn-primary-lg">
                Gọi {SHOP.hotlineDisplay}
              </a>
              <a
                href={`https://zalo.me/${SHOP.zalo}`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-sm btn-zalo-lg"
              >
                Chat Zalo tư vấn
              </a>
            </div>
          </div>
        </div>

        {/* Cột phải: Accordion chuyên nghiệp */}
        <div className="faq-pro-accordion">
          {displayedFaqs.map((item, idx) => {
            const isOpen = openIdx === idx
            return (
              <div key={idx} className={`faq-pro-item ${isOpen ? 'active' : ''}`}>
                <button
                  className="faq-pro-question"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-q-category">{item.category}</span>
                  <div className="faq-q-row">
                    <span className="faq-q-text">{item.q}</span>
                    <span className="faq-chevron">{isOpen ? '▲' : '▼'}</span>
                  </div>
                </button>
                {isOpen && (
                  <div className="faq-pro-answer">
                    <p>{item.a}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════
   FULL-PAGE CONTACT VIEW
══════════════════════════════════════════════ */
function FullPageContactView({ onBackToHome }) {
  const [contactForm, setContactForm] = useState({ name: '', phone: '', channel: 'zalo', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!contactForm.name || !contactForm.phone) {
      alert('Vui lòng nhập Họ tên và Số điện thoại để Đỉnh Nương Sơn liên hệ lại.')
      return
    }
    trackEvent('contact_form_submit', contactForm)
    setSubmitted(true)
  }

  return (
    <div className="contact-page">
      <div className="contact-page-header">
        <button className="back-btn" onClick={onBackToHome}>
          ← Quay lại trang chủ
        </button>
        <p className="eyebrow">Kết nối trà hữu</p>
        <h1>Liên Hệ Với Đỉnh Nương Sơn</h1>
        <p className="contact-subtitle">
          Quý khách có thể kết nối ngay qua Facebook, Gọi điện trực tiếp hoặc nhắn tin Zalo.
        </p>
      </div>

      <div className="contact-page-container">
        {/* 3 Kênh kết nối chính */}
        <div className="contact-channels-grid mb-8">
          {/* FB */}
          <div className="channel-card fb-card">
            <div className="channel-icon-wrap fb-icon"><span>f</span></div>
            <span className="channel-badge">Facebook</span>
            <h3>{SHOP.facebookName}</h3>
            <p className="channel-desc">Nhắn tin Messenger để nhận tư vấn và xem video nương chè Tà Xùa.</p>
            <a href={SHOP.facebook} target="_blank" rel="noreferrer" className="btn channel-btn fb-btn">
              Mở Facebook Messenger →
            </a>
          </div>

          {/* SĐT */}
          <div className="channel-card phone-card">
            <div className="channel-icon-wrap phone-icon"><span>📞</span></div>
            <span className="channel-badge hotline-badge">Hotline</span>
            <h3>{SHOP.hotlineDisplay}</h3>
            <p className="channel-desc">Hỗ trợ 24/7 giải đáp mọi thắc mắc và nhận đơn hàng số lượng lớn.</p>
            <a href={`tel:${SHOP.phone}`} className="btn channel-btn phone-btn">
              Gọi điện thoại trực tiếp →
            </a>
          </div>

          {/* ZALO */}
          <div className="channel-card zalo-card">
            <div className="channel-icon-wrap zalo-icon"><span>Zalo</span></div>
            <span className="channel-badge zalo-badge">Zalo Chat</span>
            <h3>Zalo: {SHOP.hotlineDisplay}</h3>
            <p className="channel-desc">Tư vấn chọn vị Lục Trà hay Hồng Trà nhanh chóng và thuận tiện nhất.</p>
            <a href={`https://zalo.me/${SHOP.zalo}`} target="_blank" rel="noreferrer" className="btn channel-btn zalo-btn">
              Mở khung chat Zalo →
            </a>
          </div>
        </div>

        {/* Form gửi yêu cầu tư vấn */}
        <div className="contact-split-section">
          <div className="contact-form-box">
            <h3>Đăng ký nhận cuộc gọi tư vấn miễn phí</h3>
            <p>
              Nếu bạn muốn nhân viên Đỉnh Nương Sơn chủ động gọi lại tư vấn chi tiết về Lục Trà hay
              Hồng Trà, hãy để lại thông tin:
            </p>

            {submitted ? (
              <div className="form-success-box">
                <span className="success-icon">✓</span>
                <h4>Đã ghi nhận thông tin thành công!</h4>
                <p>
                  Chuyên viên trà của Đỉnh Nương Sơn sẽ liên hệ tới số <strong>{contactForm.phone}</strong> trong
                  ít phút nữa.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="c-form">
                <label>
                  <span>Họ và tên quý khách *</span>
                  <input
                    type="text"
                    required
                    placeholder="Ví dụ: Nguyễn Văn A"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                  />
                </label>

                <label>
                  <span>Số điện thoại nhận cuộc gọi *</span>
                  <input
                    type="tel"
                    required
                    placeholder="Ví dụ: 0912 345 678"
                    value={contactForm.phone}
                    onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                  />
                </label>

                <label>
                  <span>Kênh muốn Đỉnh Nương Sơn liên hệ:</span>
                  <select
                    value={contactForm.channel}
                    onChange={(e) => setContactForm({ ...contactForm, channel: e.target.value })}
                    className="c-select"
                  >
                    <option value="phone">Gọi điện thoại trực tiếp</option>
                    <option value="zalo">Nhắn tin qua Zalo</option>
                    <option value="facebook">Nhắn tin qua Facebook</option>
                  </select>
                </label>

                <label>
                  <span>Nội dung cần tư vấn (Lục Trà hoặc Hồng Trà)</span>
                  <textarea
                    rows="3"
                    placeholder="Ví dụ: Tôi muốn tư vấn Lục Trà Cổ Thụ 200g và Hồng Trà 100g..."
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                  />
                </label>

                <button type="submit" className="btn btn-primary-lg">
                  Gửi yêu cầu tư vấn ngay
                </button>
              </form>
            )}
          </div>

          <div className="contact-guide-box">
            <h3>Địa Chỉ Nương Chè & Xưởng Sao</h3>
            <p className="guide-location-lead">
              📍 <strong>Bản Bẹ, Xã Tà Xùa, Huyện Bắc Yên, Tỉnh Sơn La</strong> (Độ cao 1.800m)
            </p>
            <div className="guide-steps">
              <div className="guide-step">
                <span className="g-num">1</span>
                <div>
                  <strong>Từ Hà Nội:</strong>
                  <p>Theo QL32 qua Sơn Tây, Thu Cúc đến Thị trấn Bắc Yên (210km).</p>
                </div>
              </div>
              <div className="guide-step">
                <span className="g-num">2</span>
                <div>
                  <strong>Lên Tà Xùa & Bản Bẹ:</strong>
                  <p>15km đường đèo mây phủ, tiến thẳng vào quần thể Cây Di sản chè Shan Tuyết.</p>
                </div>
              </div>
            </div>

            <div className="guide-cta-call">
              <span>Cần trợ giúp chỉ đường?</span>
              <a href={`tel:${SHOP.phone}`} className="btn btn-sm">
                Gọi: {SHOP.hotlineDisplay}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ══════════════════════════════════════════════
   REVIEWS SECTION
══════════════════════════════════════════════ */
function ReviewsSection() {
  return (
    <section id="danh-gia" className="section reviews-section">
      <div className="section-header">
        <p className="eyebrow">Trải nghiệm thực tế</p>
        <h2>Khách Hàng Nói Gì Về Đỉnh Nương Sơn</h2>
        <p className="section-sub">
          Hơn 1.500+ ấm trà Shan Tuyết Tà Xùa đã đồng hành cùng trà hữu trên khắp cả nước.
        </p>
      </div>

      <div className="reviews-grid">
        {REVIEWS.map((r, i) => (
          <div key={i} className="review-card">
            <div className="review-top">
              <img src={r.avatar} alt={r.name} className="review-avatar" />
              <div>
                <strong>{r.name}</strong>
                <small>{r.location}</small>
                <div className="review-stars">{'⭐'.repeat(r.rating)}</div>
              </div>
              <span className="review-date">{r.date}</span>
            </div>

            <div className="review-badge-prod">
              Đã mua: <b>{r.productName}</b>
            </div>

            <p className="review-text">"{r.text}"</p>

            {r.productPhoto && (
              <div className="review-photo-box">
                <img src={r.productPhoto} alt="Ảnh thực tế từ khách" loading="lazy" />
                <span>Ảnh thật từ khách gửi</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════
   HERITAGE STORY SECTION (CÂU CHUYỆN DI SẢN CHUYÊN NGHIỆP)
══════════════════════════════════════════════ */
function HeritageStorySection() {
  return (
    <section id="cau-chuyen" className="section heritage-story-section">
      <div className="section-header">
        <p className="eyebrow">Di sản đại ngàn Tây Bắc</p>
        <h2>Hành Trình Di Sản Nơi Thiên Đường Mây Tà Xùa</h2>
        <p className="section-sub">
          Bản Bẹ – Chiếc nôi nuôi dưỡng quần thể Cây Di sản chè Shan Tuyết cổ thụ 100 - 300 năm tuổi
          trên đỉnh núi cao 1.800m, được các cơ quan báo chí quốc gia và Hội Cây Di sản Việt Nam ghi nhận.
        </p>
      </div>

      {/* Press Quote Highlight */}
      <div className="heritage-press-quote">
        <div className="press-quote-badge">📰 Trích dẫn từ phóng sự Báo Nhân Dân</div>
        <blockquote>
          “Bản Bẹ, thung lũng ẩn mình giữa chốn 'thiên đường mây' Tà Xùa cao vợi với những rừng chè
          Shan tuyết cổ thụ... Những 'cụ' chè hơn 200 năm tuổi bám rễ sâu vào vách đá núi, ngậm sương
          tuyết bốn mùa để dâng cho đời chén trà ngọt hậu sâu thẳm.”
        </blockquote>
        <div className="press-quote-author">
          <span>— Phóng sự “Đánh thức vàng xanh nơi thiên đường mây” · Báo Nhân Dân</span>
          <a
            href="https://nhandan.vn/danh-thuc-vang-xanh-noi-thien-duong-may-post795922.html"
            target="_blank"
            rel="noreferrer"
            className="press-link-chip"
          >
            Đọc bài gốc trên Báo Nhân Dân ↗
          </a>
        </div>
      </div>

      {/* 3 Pillars Grid */}
      <div className="heritage-pillars-grid">
        <div className="pillar-card">
          <div className="pillar-num">01</div>
          <span className="pillar-tag">Vinh danh quốc gia</span>
          <h3>Quần Thể Cây Di Sản Việt Nam</h3>
          <p>
            Theo Quyết định số 487/QĐ-HĐTĐ của Hội đồng Cây Di sản Việt Nam (VACNE), 200 cây chè Shan
            tuyết cổ thụ từ 100 đến gần 300 năm tuổi tại Bản Bẹ đã được công nhận là Cây Di sản Việt
            Nam, biểu tượng sinh thái vô giá của vùng cao Bắc Yên, Sơn La.
          </p>
          <a
            href="http://vacne.org.vn/200-cay-che-shan-tuyet-co-thu-o-ban-be-son-la-du-tieu-chuan-cay-di-san-viet-nam/218086.html"
            target="_blank"
            rel="noreferrer"
            className="pillar-link"
          >
            Xem quyết định vinh danh (VACNE) →
          </a>
        </div>

        <div className="pillar-card">
          <div className="pillar-num">02</div>
          <span className="pillar-tag">Thổ nhưỡng 1.800m</span>
          <h3>Thiên Nhiên Thuần Khiết Đỉnh Mây</h3>
          <p>
            Ở độ cao 1.800m quanh năm sương tuyết và chìm trong biển mây, biên độ nhiệt ngày đêm lớn
            tạo điều kiện cho búp trà tích tụ lượng polyphenol và EGCG tự nhiên vượt trội. Từng búp
            chè phủ lớp lông tơ trắng mịn màng như tuyết.
          </p>
          <a
            href="https://www.vietnamplus.vn/son-la-nang-tam-thuong-hieu-che-shan-tuyet-ta-xua-post823528.vnp"
            target="_blank"
            rel="noreferrer"
            className="pillar-link"
          >
            Ghi nhận của VietnamPlus (TTXVN) →
          </a>
        </div>

        <div className="pillar-card">
          <div className="pillar-num">03</div>
          <span className="pillar-tag">Nghệ nhân bản địa</span>
          <h3>Sao Chảo Gang Củi Truyền Thống</h3>
          <p>
            Không dùng hương liệu, không chất bảo quản. Từng búp chè sau khi trèo cây hái thủ công vào
            sáng sớm được nghệ nhân người H'Mông sao tay ngay trên chảo gang củi đỏ lửa, đánh thức
            hương thơm cốm non và lưu giữ vị ngọt hậu sâu bền bỉ.
          </p>
          <div className="pillar-badge-bot">
            <span>🌿 100% Thuần Tự Nhiên</span>
            <span>🪵 Chảo Gang Bếp Củi</span>
          </div>
        </div>
      </div>

      {/* Verified Press Citations Bar */}
      <div className="heritage-press-bar">
        <span className="press-bar-title">Nguồn báo chí & Hồ sơ Di sản chính thức:</span>
        <div className="press-pills-list">
          <a
            href="https://nhandan.vn/danh-thuc-vang-xanh-noi-thien-duong-may-post795922.html"
            target="_blank"
            rel="noreferrer"
            className="press-pill"
          >
            <span className="p-dot" /> Báo Nhân Dân: Đánh thức "vàng xanh" Tà Xùa ↗
          </a>
          <a
            href="https://www.vietnamplus.vn/son-la-nang-tam-thuong-hieu-che-shan-tuyet-ta-xua-post823528.vnp"
            target="_blank"
            rel="noreferrer"
            className="press-pill"
          >
            <span className="p-dot" /> VietnamPlus (TTXVN): Nâng tầm thương hiệu chè Tà Xùa ↗
          </a>
          <a
            href="http://vacne.org.vn/200-cay-che-shan-tuyet-co-thu-o-ban-be-son-la-du-tieu-chuan-cay-di-san-viet-nam/218086.html"
            target="_blank"
            rel="noreferrer"
            className="press-pill"
          >
            <span className="p-dot" /> Hội Cây Di sản VN: Bằng công nhận 200 cây cổ thụ Bản Bẹ ↗
          </a>
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════
   BLOG & TEA GUIDES SECTION (VĂN HÓA TRÀ TÀ XÙA)
══════════════════════════════════════════════ */
function BlogSection({ onSelectPost }) {
  return (
    <section id="van-hoa-tra" className="section blog-section">
      <div className="section-header">
        <p className="eyebrow">Văn hóa trà</p>
        <h2>Văn Hóa Trà Shan Tuyết & Cẩm Nang Tà Xùa</h2>
        <p className="section-sub">
          Khám phá câu chuyện những gốc chè cổ thụ Cây Di sản, nghệ thuật sao chảo gang thủ công và
          bí quyết thưởng thức phong vị trà ngàn mây Tây Bắc.
        </p>
      </div>

      <div className="blog-grid">
        {BLOG_POSTS.map((post) => (
          <article key={post.id} className="blog-card" onClick={() => onSelectPost(post)}>
            <div className="blog-thumb">
              <img src={post.thumb} alt={post.title} loading="lazy" />
              <span className="blog-category">{post.category}</span>
            </div>
            <div className="blog-content">
              <div className="blog-meta-row">
                <span className="blog-time">⏱️ {post.readTime}</span>
                {post.sourceName && <span className="blog-source-badge">Nguồn: {post.sourceName}</span>}
              </div>
              <h3>{post.title}</h3>
              <p>{post.summary}</p>
              <div className="blog-card-actions">
                <button className="blog-read-btn">
                  Đọc bài viết chi tiết →
                </button>
                {post.sourceUrl && post.sourceUrl.startsWith('http') && (
                  <a
                    href={post.sourceUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="blog-ext-link"
                    onClick={(e) => e.stopPropagation()}
                    title="Mở bài viết gốc từ nguồn báo chí"
                  >
                    Xem báo chí ↗
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════
   BLOG DETAIL MODAL VIEW
══════════════════════════════════════════════ */
function BlogPostModal({ post, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  return (
    <>
      <div className="modal-overlay" onClick={onClose} />
      <div className="blog-modal" role="dialog" aria-modal="true">
        <button className="modal-close" onClick={onClose} aria-label="Đóng">
          ✕
        </button>
        <div className="blog-modal-content">
          <div className="blog-modal-header">
            <div className="blog-modal-tags">
              <span className="blog-category">{post.category}</span>
              <span className="blog-time">⏱️ {post.readTime}</span>
            </div>
            <h2>{post.title}</h2>
            {post.sourceName && (
              <p className="blog-modal-source">
                Trích dẫn & tham khảo: <strong>{post.sourceName}</strong>
              </p>
            )}
          </div>
          <img src={post.thumb} alt={post.title} className="blog-modal-img" />
          <div className="blog-modal-body">
            {post.content.split('\n\n').map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="blog-modal-footer">
            {post.sourceUrl && post.sourceUrl.startsWith('http') && (
              <a
                href={post.sourceUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-source"
              >
                Mở bài viết gốc trên báo ↗
              </a>
            )}
            <button className="btn btn-primary" onClick={onClose}>
              Đóng bài viết
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

/* ══════════════════════════════════════════════
   MAIN APP COMPONENT
══════════════════════════════════════════════ */
export default function App() {
  const { cart, add, set, clear } = useCart()
  const { toasts, push: pushToast } = useToast()

  // View state: 'home', 'product', 'cart', 'contact'
  const [viewState, setViewState] = useState('home')
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [selectedBlog, setSelectedBlog] = useState(null)
  const [scrolled, setScrolled] = useState(false)

  // Filters: 'Tất cả', 'Lục trà', 'Hồng trà'
  const [typeFilter, setTypeFilter] = useState('Tất cả')

  const count = Object.values(cart).reduce((a, b) => a + b, 0)

  // Filtered products list (only 2 products)
  const filtered = useMemo(() => {
    return PRODUCTS.filter((p) => {
      if (typeFilter !== 'Tất cả' && p.type !== typeFilter) return false
      return true
    })
  }, [typeFilter])

  // Synchronize hash routing with browser history
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash
      if (hash.startsWith('#san-pham/')) {
        const id = hash.replace('#san-pham/', '')
        const found = PRODUCTS.find((p) => p.id === id)
        if (found) {
          setSelectedProduct(found)
          setViewState('product')
        }
      } else if (hash === '#gio-hang') {
        setViewState('cart')
      } else if (hash === '#lien-he') {
        setViewState('contact')
      } else {
        setViewState('home')
        setSelectedProduct(null)
      }
    }

    handleHash()
    window.addEventListener('hashchange', handleHash)
    return () => window.removeEventListener('hashchange', handleHash)
  }, [])

  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', f, { passive: true })
    return () => window.removeEventListener('scroll', f)
  }, [])

  // View actions
  const handleViewProduct = (p) => {
    window.location.hash = `#san-pham/${p.id}`
    setSelectedProduct(p)
    setViewState('product')
  }

  const handleOpenCart = () => {
    window.location.hash = '#gio-hang'
    setViewState('cart')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleOpenContact = () => {
    window.location.hash = '#lien-he'
    setViewState('contact')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleBackToHome = () => {
    window.location.hash = ''
    setViewState('home')
    setSelectedProduct(null)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Quick Add from Card (TEXT ONLY)
  const handleQuickAdd = (id) => {
    add(id)
    const p = PRODUCTS.find((x) => x.id === id)
    pushToast(`Đã thêm "${p.name}" vào giỏ hàng`)
    trackEvent('add_to_cart', { id, name: p.name })
  }

  // Add from Detail View
  const handleDetailAdd = (id, qty, name, variant) => {
    add(id, qty)
    pushToast(`Đã thêm ${qty}× "${name}" (${variant.weight}) vào giỏ hàng`)
    trackEvent('add_to_cart', { id, name, variant: variant.weight, qty })
  }

  return (
    <>
      <ScrollProgress />
      <PromoMarqueeBar />

      {/* Global Navigation - CHỖ NÚT GIỎ HÀNG ĐỂ MỖI TEXT THÔI */}
      <nav className={`nav ${scrolled || viewState !== 'home' ? 'solid' : ''}`}>
        <a
          href="#top"
          className="brand-logo"
          onClick={(e) => {
            e.preventDefault()
            handleBackToHome()
          }}
        >
          <img src={SHOP.logo} alt={SHOP.name} className="brand-logo-img" />
          <div className="brand-text">
            <span className="brand-name">{SHOP.name}</span>
            <small className="brand-tagline">Chè Shan Tuyết Tà Xùa</small>
          </div>
        </a>

        <div className="links">
          <a
            href="#san-pham"
            onClick={() => {
              if (viewState !== 'home') handleBackToHome()
            }}
          >
            Sản phẩm
          </a>
          <a
            href="#ta-xua"
            onClick={() => {
              if (viewState !== 'home') handleBackToHome()
            }}
          >
            Tà Xùa
          </a>
          <a
            href="#cau-chuyen"
            onClick={() => {
              if (viewState !== 'home') handleBackToHome()
            }}
          >
            Câu chuyện di sản
          </a>
          <a
            href="#van-hoa-tra"
            onClick={() => {
              if (viewState !== 'home') handleBackToHome()
            }}
          >
            Văn hóa trà
          </a>
          <a
            href="#danh-gia"
            onClick={() => {
              if (viewState !== 'home') handleBackToHome()
            }}
          >
            Đánh giá
          </a>
          <a
            href="#faq"
            onClick={() => {
              if (viewState !== 'home') handleBackToHome()
            }}
          >
            Hỏi đáp
          </a>
        </div>

        {/* NÚT GIỎ HÀNG: CHỈ TEXT, BỎ ICON GIỎ HÀNG */}
        <div className="nav-actions">
          <button className="cart-btn" id="open-cart" onClick={handleOpenCart}>
            Giỏ hàng{count > 0 && <b>{count}</b>}
          </button>
        </div>
      </nav>

      {/* RENDER CURRENT VIEW */}
      {viewState === 'product' && selectedProduct && (
        <ProductDetailView
          product={selectedProduct}
          onBack={handleBackToHome}
          onAddToCart={handleDetailAdd}
          onViewOther={handleViewProduct}
        />
      )}

      {viewState === 'cart' && (
        <FullPageCartView
          cart={cart}
          onUpdateQty={(id, n) => set(id, n)}
          onClear={clear}
          onBackToShop={handleBackToHome}
        />
      )}

      {viewState === 'contact' && (
        <FullPageContactView onBackToHome={handleBackToHome} />
      )}

      {viewState === 'home' && (
        <>
          <HeroSlideshow
            onExplore={() => {
              const el = document.getElementById('san-pham')
              if (el) el.scrollIntoView({ behavior: 'smooth' })
            }}
          />

          <section className="usp">
            {[
              ['🌱', 'Cổ thụ Tà Xùa 200+ năm'],
              ['📦', 'Giao hàng Ship COD toàn quốc'],
              ['💳', 'Thanh toán chuyển khoản VietQR'],
              ['💬', 'Tư vấn tận tâm qua Zalo'],
            ].map(([i, t]) => (
              <div key={t}>
                <span>{i}</span>
                {t}
              </div>
            ))}
          </section>

          <ScenerySection />

          <main>
            {/* Products Catalog: Gộp chung thành danh mục Sản Phẩm chủ lực */}
            <section id="san-pham" className="section">
              <div className="section-header">
                <p className="eyebrow">Trà Shan Tuyết Cổ Thụ Tà Xùa</p>
                <h2>Sản Phẩm Đỉnh Nương Sơn</h2>
                <p className="section-sub">
                  Hai tuyệt phẩm trà Shan Tuyết cổ thụ 100% tự nhiên thu hái tại Bản Bẹ, xã Tà Xùa ở
                  độ cao 1.800m: Lục Trà thanh tao và Hồng Trà ngọt ấm.
                </p>
              </div>

              <div className="grid grid-two-products">
                {PRODUCTS.map((p) => (
                  <ProductCard
                    key={p.id}
                    p={p}
                    onAdd={handleQuickAdd}
                    onView={handleViewProduct}
                  />
                ))}
              </div>
            </section>

            {/* Câu chuyện di sản: Code lại chuyên nghiệp & trích dẫn báo chí xác thực 100% */}
            <HeritageStorySection />

            {/* Văn hóa trà & Cẩm nang Tà Xùa */}
            <BlogSection onSelectPost={setSelectedBlog} />

            {/* Customer Reviews */}
            <ReviewsSection />

            {/* FAQ Section - THIẾT KẾ CHUYÊN NGHIỆP */}
            <FAQSection />
          </main>
        </>
      )}

      {/* Global Footer */}
      <footer className="footer" id="lien-he-footer">
        <div className="footer-brand">
          <img src={SHOP.logo} alt={SHOP.name} className="footer-logo-img" />
          <h2>Chè Shan Tuyết {SHOP.name}</h2>
          <p>
            Chuyên sâu bộ đôi Lục Trà và Hồng Trà Shan Tuyết cổ thụ 100% tự nhiên từ độ cao 1.800m
            Bản Bẹ, Tà Xùa, Bắc Yên, Sơn La. Hỗ trợ Ship COD đồng kiểm toàn quốc, thanh toán chuyển khoản và đặt
            hàng tiện lợi qua Zalo.
          </p>
        </div>

        <div className="footer-links-grid">
          <div>
            <h4>Bộ Đôi Sản Phẩm Chủ Lực</h4>
            <ul>
              <li>
                <a
                  href="#san-pham"
                  onClick={() => {
                    handleBackToHome()
                    setTypeFilter('Lục trà')
                  }}
                >
                  Lục Trà Shan Tuyết Cổ Thụ Đặc Biệt
                </a>
              </li>
              <li>
                <a
                  href="#san-pham"
                  onClick={() => {
                    handleBackToHome()
                    setTypeFilter('Hồng trà')
                  }}
                >
                  Hồng Trà Shan Tuyết Lên Men Tự Nhiên
                </a>
              </li>
              <li>
                <a
                  href="#cau-chuyen"
                  onClick={() => {
                    handleBackToHome()
                  }}
                >
                  Hành trình Cây Di sản Tà Xùa
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4>3 Kênh Liên Lạc Trực Tiếp</h4>
            <ul>
              <li>
                <a href={SHOP.facebook} target="_blank" rel="noreferrer">
                  📘 Facebook: {SHOP.facebookDisplay}
                </a>
              </li>
              <li>
                <a href={`tel:${SHOP.phone}`}>
                  📞 Hotline: {SHOP.hotlineDisplay}
                </a>
              </li>
              <li>
                <a href={`https://zalo.me/${SHOP.zalo}`} target="_blank" rel="noreferrer">
                  💬 Zalo: {SHOP.hotlineDisplay}
                </a>
              </li>
              <li>📍 {SHOP.address}</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <small>
            © {new Date().getFullYear()} {SHOP.name} · Bản quyền thuộc về Chè Shan Tuyết Cổ Thụ Tà Xùa
          </small>
        </div>
      </footer>

      {/* FLOATING ACTION BUTTONS: QUICK CALL & QUICK ZALO */}
      <div className="floating-actions-bar">
        {/* Nút Gọi Điện Thoại Nhanh */}
        <a
          href={`tel:${SHOP.phone}`}
          className="fab fab-call"
          aria-label="Gọi điện thoại tư vấn ngay"
          title={`Gọi ngay ${SHOP.hotlineDisplay}`}
          onClick={() => trackEvent('fab_call_click')}
        >
          <span className="fab-icon">📞</span>
          <span className="fab-text">Gọi ngay</span>
        </a>

        {/* Nút Chat Zalo */}
        <a
          href={`https://zalo.me/${SHOP.zalo}`}
          target="_blank"
          rel="noreferrer"
          className="fab fab-zalo"
          aria-label="Chat Zalo tư vấn"
          title="Chat Zalo Đỉnh Nương Sơn"
          onClick={() => trackEvent('fab_zalo_click')}
        >
          <span className="fab-icon">Zalo</span>
        </a>
      </div>

      {/* Blog Detail Modal */}
      {selectedBlog && (
        <BlogPostModal post={selectedBlog} onClose={() => setSelectedBlog(null)} />
      )}

      {/* Toast Notifications */}
      <ToastContainer toasts={toasts} />
    </>
  )
}
