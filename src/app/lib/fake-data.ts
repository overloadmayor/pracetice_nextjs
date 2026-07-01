import type { Product, Review, Category, Banner, Order, Cart } from './types';

export const categories: Category[] = [
  {
    id: 'cat-1',
    name: '手机数码',
    slug: 'electronics',
    description: '智能手机、平板、笔记本等数码产品',
    image: 'https://picsum.photos/seed/electronics/400/300',
    subcategories: [
      { id: 'sub-1-1', name: '智能手机', slug: 'smartphones' },
      { id: 'sub-1-2', name: '笔记本电脑', slug: 'laptops' },
      { id: 'sub-1-3', name: '平板电脑', slug: 'tablets' },
      { id: 'sub-1-4', name: '智能手表', slug: 'smartwatches' },
      { id: 'sub-1-5', name: '耳机音箱', slug: 'audio' },
    ],
  },
  {
    id: 'cat-2',
    name: '服饰鞋包',
    slug: 'fashion',
    description: '时尚服饰、鞋靴、箱包配饰',
    image: 'https://picsum.photos/seed/fashion/400/300',
    subcategories: [
      { id: 'sub-2-1', name: '女装', slug: 'womenswear' },
      { id: 'sub-2-2', name: '男装', slug: 'menswear' },
      { id: 'sub-2-3', name: '运动鞋', slug: 'sneakers' },
      { id: 'sub-2-4', name: '箱包', slug: 'bags' },
      { id: 'sub-2-5', name: '配饰', slug: 'accessories' },
    ],
  },
  {
    id: 'cat-3',
    name: '家居生活',
    slug: 'home',
    description: '家具、厨具、家纺、收纳等家居用品',
    image: 'https://picsum.photos/seed/homegoods/400/300',
    subcategories: [
      { id: 'sub-3-1', name: '家具', slug: 'furniture' },
      { id: 'sub-3-2', name: '厨房用具', slug: 'kitchen' },
      { id: 'sub-3-3', name: '家纺', slug: 'textiles' },
      { id: 'sub-3-4', name: '灯具', slug: 'lighting' },
      { id: 'sub-3-5', name: '收纳用品', slug: 'storage' },
    ],
  },
  {
    id: 'cat-4',
    name: '美妆个护',
    slug: 'beauty',
    description: '护肤、彩妆、香水、个人护理',
    image: 'https://picsum.photos/seed/beauty/400/300',
    subcategories: [
      { id: 'sub-4-1', name: '面部护肤', slug: 'skincare' },
      { id: 'sub-4-2', name: '彩妆', slug: 'makeup' },
      { id: 'sub-4-3', name: '香水', slug: 'perfume' },
      { id: 'sub-4-4', name: '身体护理', slug: 'bodycare' },
      { id: 'sub-4-5', name: '男士护理', slug: 'menscare' },
    ],
  },
  {
    id: 'cat-5',
    name: '食品生鲜',
    slug: 'food',
    description: '零食、饮料、生鲜、粮油调味',
    image: 'https://picsum.photos/seed/food/400/300',
    subcategories: [
      { id: 'sub-5-1', name: '休闲零食', slug: 'snacks' },
      { id: 'sub-5-2', name: '饮料冲调', slug: 'beverages' },
      { id: 'sub-5-3', name: '生鲜水果', slug: 'fresh' },
      { id: 'sub-5-4', name: '粮油调味', slug: 'cooking' },
      { id: 'sub-5-5', name: '进口食品', slug: 'imported' },
    ],
  },
  {
    id: 'cat-6',
    name: '运动户外',
    slug: 'sports',
    description: '运动装备、户外用品、健身器材',
    image: 'https://picsum.photos/seed/sports/400/300',
    subcategories: [
      { id: 'sub-6-1', name: '运动鞋服', slug: 'sportswear' },
      { id: 'sub-6-2', name: '健身器材', slug: 'fitness' },
      { id: 'sub-6-3', name: '户外装备', slug: 'outdoor' },
      { id: 'sub-6-4', name: '骑行运动', slug: 'cycling' },
      { id: 'sub-6-5', name: '游泳用品', slug: 'swimming' },
    ],
  },
];

export const products: Product[] = [
  // === 手机数码 ===
  {
    id: 'prod-1',
    name: 'iPhone 17 Pro Max 512GB 暗夜黑',
    slug: 'iphone-17-pro-max',
    description: 'A19 Pro 芯片 | 8K 视频拍摄 | 钛金属边框 | 全天候显示',
    longDescription:
      '全新 iPhone 17 Pro Max，搭载 A19 Pro 芯片，性能飞跃提升。采用 6.9 英寸超视网膜 XDR 显示屏，支持 ProMotion 自适应刷新率。后置三摄系统支持 8K 视频拍摄，夜间模式再升级。钛金属边框，坚固轻盈。IP68 防水防尘，电池续航最长可达 33 小时。',
    price: 10999,
    originalPrice: 11999,
    images: [
      'https://picsum.photos/seed/iphone17-1/600/600',
      'https://picsum.photos/seed/iphone17-2/600/600',
      'https://picsum.photos/seed/iphone17-3/600/600',
      'https://picsum.photos/seed/iphone17-4/600/600',
    ],
    category: '手机数码',
    subcategory: '智能手机',
    tags: ['5G', '旗舰', '苹果'],
    rating: 4.8,
    reviewCount: 2356,
    stock: 120,
    sku: 'IP17PM-512-BK',
    brand: 'Apple',
    specs: {
      屏幕尺寸: '6.9英寸',
      处理器: 'A19 Pro',
      存储容量: '512GB',
      运行内存: '12GB',
      电池容量: '4800mAh',
      充电接口: 'USB-C',
      重量: '227g',
      系统: 'iOS 19',
    },
    isFeatured: true,
    isNew: true,
    createdAt: '2026-06-15T08:00:00Z',
  },
  {
    id: 'prod-2',
    name: '华为 Mate 70 Pro+ 昆仑玻璃版',
    slug: 'huawei-mate-70-pro-plus',
    description: '麒麟 9100 | 卫星通信 | 昆仑玻璃 | 鸿蒙 NEXT',
    longDescription:
      '华为 Mate 70 Pro+，搭载麒麟 9100 芯片，性能强劲。卫星通信功能覆盖更广，昆仑玻璃再升级，耐摔性提升 200%。支持北斗卫星消息，户外无忧。电池容量 5600mAh，支持 100W 有线快充和 80W 无线快充。',
    price: 8999,
    originalPrice: 9499,
    images: [
      'https://picsum.photos/seed/mate70-1/600/600',
      'https://picsum.photos/seed/mate70-2/600/600',
      'https://picsum.photos/seed/mate70-3/600/600',
    ],
    category: '手机数码',
    subcategory: '智能手机',
    tags: ['5G', '旗舰', '卫星通信'],
    rating: 4.7,
    reviewCount: 1823,
    stock: 85,
    sku: 'HW-M70P+-KL',
    brand: '华为',
    specs: {
      屏幕尺寸: '6.82英寸',
      处理器: '麒麟9100',
      存储容量: '512GB',
      运行内存: '16GB',
      电池容量: '5600mAh',
      充电功率: '100W有线/80W无线',
      系统: 'HarmonyOS NEXT',
      重量: '232g',
    },
    isFeatured: true,
    isNew: true,
    createdAt: '2026-06-20T10:00:00Z',
  },
  {
    id: 'prod-3',
    name: 'ThinkPad X1 Carbon Gen 13',
    slug: 'thinkpad-x1-carbon-gen13',
    description: '酷睿Ultra 7 | 32GB | 2.8K OLED | 906g 超轻机身',
    longDescription:
      'ThinkPad X1 Carbon Gen 13，商务旗舰轻薄本。搭载 Intel 酷睿 Ultra 7 处理器，32GB LPDDR5x 内存，1TB PCIe 5.0 SSD。14 英寸 2.8K OLED 屏幕，100% DCI-P3 色域。重量仅 906g，厚度 14.9mm。通过 MIL-STD-810H 军规认证，坚固可靠。',
    price: 12999,
    originalPrice: 13999,
    images: [
      'https://picsum.photos/seed/thinkpad-1/600/600',
      'https://picsum.photos/seed/thinkpad-2/600/600',
    ],
    category: '手机数码',
    subcategory: '笔记本电脑',
    tags: ['商务', '轻薄', '联想'],
    rating: 4.9,
    reviewCount: 567,
    stock: 40,
    sku: 'TP-X1CG13-U7-32G',
    brand: '联想',
    specs: {
      处理器: 'Intel Core Ultra 7 258V',
      内存: '32GB LPDDR5x',
      硬盘: '1TB PCIe 5.0 SSD',
      屏幕: '14英寸 2.8K OLED',
      重量: '906g',
      厚度: '14.9mm',
      电池: '57Wh',
      接口: 'Thunderbolt 5 ×2, USB-A, HDMI 2.1',
    },
    isFeatured: false,
    isNew: true,
    createdAt: '2026-06-01T08:00:00Z',
  },
  {
    id: 'prod-4',
    name: 'MacBook Air 15" M4 芯片',
    slug: 'macbook-air-15-m4',
    description: 'M4 芯片 | 24GB RAM | 15.3英寸 Liquid Retina | 18小时续航',
    longDescription:
      'MacBook Air 15 英寸，搭载 M4 芯片，性能比 M1 提升 2.5 倍。配备 24GB 统一内存和 2TB SSD 存储。15.3 英寸 Liquid Retina 显示屏，500 尼特亮度，10 亿色彩。无风扇设计，静音运行。MagSafe 充电，两个 Thunderbolt 4 端口，18 小时电池续航。',
    price: 10999,
    originalPrice: null,
    images: [
      'https://picsum.photos/seed/macbookair-1/600/600',
      'https://picsum.photos/seed/macbookair-2/600/600',
      'https://picsum.photos/seed/macbookair-3/600/600',
    ],
    category: '手机数码',
    subcategory: '笔记本电脑',
    tags: ['轻薄', '长续航', '苹果'],
    rating: 4.8,
    reviewCount: 1234,
    stock: 65,
    sku: 'MBA15-M4-24G-2TB',
    brand: 'Apple',
    specs: {
      处理器: 'Apple M4',
      内存: '24GB 统一内存',
      存储: '2TB SSD',
      屏幕: '15.3英寸 Liquid Retina',
      分辨率: '2880×1864',
      续航: '最长18小时',
      重量: '1.51kg',
      接口: 'MagSafe, Thunderbolt 4 ×2, 3.5mm',
    },
    isFeatured: true,
    isNew: false,
    createdAt: '2026-05-10T08:00:00Z',
  },
  {
    id: 'prod-5',
    name: 'iPad Pro 12.9" M4 芯片 512GB',
    slug: 'ipad-pro-129-m4',
    description: 'M4 芯片 | XDR 显示屏 | Apple Pencil Pro | 雷雳/USB 5',
    longDescription:
      '全新 iPad Pro 12.9 英寸，搭载 M4 芯片，性能超越多数笔记本电脑。配备 Ultra XDR 双层 OLED 显示屏，峰值亮度 1600 尼特。支持 Apple Pencil Pro 悬停功能和全新妙控键盘。雷雳 / USB 5 端口，传输速度高达 120Gb/s。',
    price: 9499,
    originalPrice: 9999,
    images: [
      'https://picsum.photos/seed/ipadpro-1/600/600',
      'https://picsum.photos/seed/ipadpro-2/600/600',
    ],
    category: '手机数码',
    subcategory: '平板电脑',
    tags: ['平板', '生产力', 'M4'],
    rating: 4.7,
    reviewCount: 876,
    stock: 55,
    sku: 'IPDPRO129-M4-512',
    brand: 'Apple',
    specs: {
      处理器: 'Apple M4',
      屏幕: '12.9英寸 Ultra XDR OLED',
      分辨率: '2752×2064',
      存储: '512GB',
      内存: '16GB',
      摄像头: '12MP广角 + LiDAR',
      重量: '682g (Wi-Fi)',
      接口: '雷雳/USB 5',
    },
    isFeatured: false,
    isNew: false,
    createdAt: '2026-04-20T08:00:00Z',
  },
  {
    id: 'prod-6',
    name: 'Apple Watch Ultra 3 高山回环',
    slug: 'apple-watch-ultra-3',
    description: 'S9 SiP | 钛金属表壳 | 86小时续航 | 100米防水',
    longDescription:
      'Apple Watch Ultra 3，为极限运动而生。49mm 钛金属表壳搭配蓝宝石水晶玻璃表镜。S9 SiP 芯片，支持精确双频 GPS。86 小时正常续航，低电量模式下可达 120 小时。2000 尼特峰值亮度，100 米防水。内置深度计和水温传感器，潜水可达 40 米。',
    price: 6499,
    originalPrice: 6999,
    images: [
      'https://picsum.photos/seed/watchultra-1/600/600',
      'https://picsum.photos/seed/watchultra-2/600/600',
    ],
    category: '手机数码',
    subcategory: '智能手表',
    tags: ['运动', '户外', '长续航'],
    rating: 4.9,
    reviewCount: 453,
    stock: 30,
    sku: 'AWU3-ALP-LOOP',
    brand: 'Apple',
    specs: {
      芯片: 'S9 SiP',
      表壳: '49mm 钛金属',
      屏幕: '蓝宝石水晶玻璃',
      亮度: '2000尼特峰值',
      防水等级: '100米 / 40米潜水',
      续航: '86小时正常 / 120小时低电量',
      定位: '双频GPS (L1+L5)',
    },
    isFeatured: true,
    isNew: false,
    createdAt: '2026-06-01T08:00:00Z',
  },
  {
    id: 'prod-7',
    name: 'Sony WH-1000XM6 头戴式降噪耳机',
    slug: 'sony-wh1000xm6',
    description: '新升级 QN3 降噪芯片 | 空间音频 | 60小时续航',
    longDescription:
      '索尼 WH-1000XM6，搭载全新集成处理器 V3 和 QN3 降噪芯片，降噪性能提升 30%。30mm 驱动单元提供高解析度音频。支持 360 临场音效和头部追踪空间音频。60 小时超长续航（降噪开启），快充 3 分钟播放 3 小时。多点连接，佩戴感应，智能免摘对话。',
    price: 2699,
    originalPrice: 2999,
    images: [
      'https://picsum.photos/seed/sonyxm6-1/600/600',
      'https://picsum.photos/seed/sonyxm6-2/600/600',
      'https://picsum.photos/seed/sonyxm6-3/600/600',
    ],
    category: '手机数码',
    subcategory: '耳机音箱',
    tags: ['降噪', '头戴式', '长续航'],
    rating: 4.6,
    reviewCount: 3456,
    stock: 200,
    sku: 'SONY-WH1000XM6',
    brand: 'Sony',
    specs: {
      驱动单元: '30mm',
      降噪芯片: 'QN3 + V3处理器',
      续航: '60小时(降噪开)',
      充电: 'USB-C, 快充3分钟播放3小时',
      重量: '249g',
      连接: '蓝牙 5.4, 多点连接',
      音频: 'LDAC, Hi-Res Audio, 360RA',
    },
    isFeatured: false,
    isNew: true,
    createdAt: '2026-06-25T08:00:00Z',
  },

  // === 服饰鞋包 ===
  {
    id: 'prod-8',
    name: '极简设计羊绒大衣 经典驼色',
    slug: 'cashmere-coat-camel',
    description: '100% 山羊绒 | 手工缝制 | 经典双排扣 | 中长款',
    longDescription:
      '精选内蒙古阿尔巴斯山羊绒，100% 纯羊绒面料，手感细腻柔软。经典双排扣设计，修身版型。手工缝制衬里，细节考究。驼色百搭经典，适合通勤和日常穿搭。中长款版型，搭配腰带可自由调整廓形。',
    price: 3299,
    originalPrice: 4999,
    images: [
      'https://picsum.photos/seed/coat-1/600/600',
      'https://picsum.photos/seed/coat-2/600/600',
      'https://picsum.photos/seed/coat-3/600/600',
    ],
    category: '服饰鞋包',
    subcategory: '女装',
    tags: ['羊绒', '大衣', '经典款'],
    rating: 4.7,
    reviewCount: 789,
    stock: 45,
    sku: 'WM-COAT-CML-S',
    brand: 'MOLYVIVI',
    specs: {
      面料: '100%山羊绒',
      版型: '中长款修身',
      尺码范围: 'XS-XXL',
      颜色: '驼色/黑色/灰色',
      洗护: '干洗',
      季节: '秋冬',
    },
    isFeatured: true,
    isNew: false,
    createdAt: '2026-05-01T08:00:00Z',
  },
  {
    id: 'prod-9',
    name: '男士弹力修身牛仔裤 深蓝色',
    slug: 'mens-slim-jeans-dark-blue',
    description: '新疆长绒棉 | 1.5% 弹力 | 立体剪裁 | 四季可穿',
    longDescription:
      '选用新疆长绒棉混纺弹力面料，棉质含量 98.5%，1.5% 氨纶提供微弹舒适感。立体剪裁，修身不紧绷。深蓝色经典百搭，水洗工艺自然不褪色。五金配件定制 Logo 铜扣，YKK 拉链。',
    price: 399,
    originalPrice: 599,
    images: [
      'https://picsum.photos/seed/jeans-1/600/600',
      'https://picsum.photos/seed/jeans-2/600/600',
    ],
    category: '服饰鞋包',
    subcategory: '男装',
    tags: ['牛仔裤', '修身', '百搭'],
    rating: 4.5,
    reviewCount: 2341,
    stock: 320,
    sku: 'M-JEANS-SLIM-32',
    brand: 'SENSELEAD',
    specs: {
      面料: '98.5%棉 + 1.5%氨纶',
      版型: '修身直筒',
      尺码范围: '28-40',
      厚度: '中等',
      季节: '四季',
      拉链: 'YKK',
    },
    isFeatured: false,
    isNew: false,
    createdAt: '2026-03-15T08:00:00Z',
  },
  {
    id: 'prod-10',
    name: 'Nike Air Zoom Pegasus 42 男女同款跑鞋',
    slug: 'nike-pegasus-42',
    description: 'Zoom Air 气垫 | Flyknit 鞋面 | ReactX 中底 | 轻量回弹',
    longDescription:
      'Nike Air Zoom Pegasus 42，传奇跑鞋再进化。前掌 Zoom Air + 后掌 ReactX 泡棉组合，回弹性能提升 13%。Flyknit 编织鞋面，透气贴合。外底采用华夫格纹路优化，湿滑路面抓地力提升。男女同款多色可选。',
    price: 899,
    originalPrice: 1099,
    images: [
      'https://picsum.photos/seed/pegasus42-1/600/600',
      'https://picsum.photos/seed/pegasus42-2/600/600',
      'https://picsum.photos/seed/pegasus42-3/600/600',
      'https://picsum.photos/seed/pegasus42-4/600/600',
    ],
    category: '服饰鞋包',
    subcategory: '运动鞋',
    tags: ['跑鞋', 'Nike', '透气'],
    rating: 4.6,
    reviewCount: 5678,
    stock: 450,
    sku: 'NK-PEG42-BLK-42',
    brand: 'Nike',
    specs: {
      中底技术: 'Zoom Air + ReactX',
      鞋面: 'Flyknit编织',
      外底: '华夫格优化橡胶',
      重量: '约265g(男款42码)',
      落差: '10mm(前掌20mm/后掌30mm)',
      适用场景: '公路跑/健身/日常',
    },
    isFeatured: true,
    isNew: true,
    createdAt: '2026-06-10T08:00:00Z',
  },
  {
    id: 'prod-11',
    name: '头层牛皮商务公文包 15.6英寸',
    slug: 'leather-briefcase-156',
    description: '意大利头层牛皮 | 可放笔记本 | YKK 拉链 | 防泼水',
    longDescription:
      '精选意大利进口头层牛皮，纹理自然美观。内部加厚防震隔层，可容纳 15.6 英寸笔记本电脑。YKK 金属拉链，顺滑耐用。背面隐藏式防盗口袋，出行更安心。表面防泼水处理，小雨天无忧。可手提可斜挎，商务出行首选。',
    price: 1299,
    originalPrice: 1899,
    images: [
      'https://picsum.photos/seed/briefcase-1/600/600',
      'https://picsum.photos/seed/briefcase-2/600/600',
    ],
    category: '服饰鞋包',
    subcategory: '箱包',
    tags: ['真皮', '商务', '手提包'],
    rating: 4.8,
    reviewCount: 234,
    stock: 60,
    sku: 'BG-CASE-156-BRN',
    brand: 'TUMIDE',
    specs: {
      材质: '意大利头层牛皮',
      内衬: '涤纶',
      尺寸: '40×29×12cm',
      电脑仓: '15.6英寸',
      重量: '1.2kg',
      闭合方式: '拉链',
      颜色: '棕色/黑色',
    },
    isFeatured: false,
    isNew: false,
    createdAt: '2026-04-01T08:00:00Z',
  },
  {
    id: 'prod-12',
    name: '925银 珍珠锁骨链 淡水珍珠 6-7mm',
    slug: 'pearl-choker-necklace',
    description: '925银镀铂金 | 淡水珍珠 | 手工镶嵌 | 礼盒装',
    longDescription:
      '精选直径 6-7mm 淡水珍珠，颗颗正圆，光泽莹润。925 银镀铂金链身，抗氧化不变色。手工镶嵌每颗珍珠，间距均匀。长度 40cm+5cm 延长链，适合各种颈围。赠送精美礼盒，自用送礼皆宜。',
    price: 399,
    originalPrice: 699,
    images: [
      'https://picsum.photos/seed/pearl-1/600/600',
      'https://picsum.photos/seed/pearl-2/600/600',
      'https://picsum.photos/seed/pearl-3/600/600',
    ],
    category: '服饰鞋包',
    subcategory: '配饰',
    tags: ['珍珠', '锁骨链', '礼盒装'],
    rating: 4.9,
    reviewCount: 1567,
    stock: 180,
    sku: 'AC-PEARL-CHOKER',
    brand: 'PEARLONA',
    specs: {
      材质: '925银镀铂金',
      珍珠: '淡水珍珠 6-7mm',
      长度: '40cm + 5cm延长链',
      颜色: '白色/粉色',
      包装: '精装礼盒',
    },
    isFeatured: true,
    isNew: false,
    createdAt: '2026-02-14T08:00:00Z',
  },

  // === 家居生活 ===
  {
    id: 'prod-13',
    name: '北欧风实木餐桌 白橡木 1.6米 六椅套装',
    slug: 'oak-dining-table-set',
    description: '北美白橡木 | 榫卯结构 | 环保水性漆 | 六椅套装',
    longDescription:
      '选用 FAS 级北美白橡木，纹理清晰美观。传统榫卯结构，稳固耐用。德国欧诗木(OSMO)环保水性漆涂装，安全无味。1.6 米长度适合 4-6 人用餐，配六把温莎椅。圆角处理，防止磕碰。桌腿可调节高度，适应不平地面。',
    price: 5999,
    originalPrice: 7999,
    images: [
      'https://picsum.photos/seed/diningtable-1/600/600',
      'https://picsum.photos/seed/diningtable-2/600/600',
    ],
    category: '家居生活',
    subcategory: '家具',
    tags: ['实木', '餐桌', '套装'],
    rating: 4.8,
    reviewCount: 345,
    stock: 15,
    sku: 'FUR-TABLE-OAK160',
    brand: 'ZAOZUO',
    specs: {
      材质: 'FAS级北美白橡木',
      尺寸: '160×90×75cm',
      涂装: '德国OSMO环保水性漆',
      结构: '传统榫卯',
      包含: '餐桌×1 + 温莎椅×6',
      重量: '约58kg',
    },
    isFeatured: true,
    isNew: false,
    createdAt: '2026-05-20T08:00:00Z',
  },
  {
    id: 'prod-14',
    name: '德国WMF不粘锅套装 三件套',
    slug: 'wmf-nonstick-pan-set',
    description: '德国进口 | 三层不粘涂层 | 电磁炉通用 | 无PFOA',
    longDescription:
      '德国 WMF 不粘锅三件套，包含 24cm 煎锅、28cm 炒锅和 16cm 奶锅。 Cromargan 18/10 不锈钢锅身，三层 Whitford 不粘涂层，无 PFOA 安全放心。TransTherm 全适应锅底，电磁炉、燃气灶通用。人体工学手柄，防烫舒适。可进洗碗机清洗。',
    price: 1499,
    originalPrice: 2499,
    images: [
      'https://picsum.photos/seed/wmfpan-1/600/600',
      'https://picsum.photos/seed/wmfpan-2/600/600',
    ],
    category: '家居生活',
    subcategory: '厨房用具',
    tags: ['不粘锅', '德国', '套装'],
    rating: 4.6,
    reviewCount: 1234,
    stock: 90,
    sku: 'WMF-PANSET-3PC',
    brand: 'WMF',
    specs: {
      材质: 'Cromargan 18/10不锈钢',
      涂层: '三层Whitford不粘涂层',
      套装: '24cm煎锅 + 28cm炒锅 + 16cm奶锅',
      适用: '电磁炉/燃气灶/电陶炉/烤箱',
      耐热: '最高250°C(可进烤箱)',
      清洁: '可进洗碗机',
    },
    isFeatured: false,
    isNew: false,
    createdAt: '2026-04-15T08:00:00Z',
  },
  {
    id: 'prod-15',
    name: '60支长绒棉四件套 贡缎工艺 轻奢纯色',
    slug: 'egyptian-cotton-bedding',
    description: '60支长绒棉 | 贡缎织法 | 亲肤透气 | 多色可选',
    longDescription:
      '精选 60 支长绒棉，贡缎工艺编织，面料密度高达 300TC。丝般顺滑手感，亲肤透气不闷汗。活性印染工艺，色牢度高不褪色。被套四角绑带固定，拉链隐形封口。含被套 200×230cm ×1，床单 250×270cm ×1，枕套 48×74cm ×2。',
    price: 599,
    originalPrice: 899,
    images: [
      'https://picsum.photos/seed/bedding-1/600/600',
      'https://picsum.photos/seed/bedding-2/600/600',
      'https://picsum.photos/seed/bedding-3/600/600',
    ],
    category: '家居生活',
    subcategory: '家纺',
    tags: ['四件套', '长绒棉', '贡缎'],
    rating: 4.5,
    reviewCount: 4567,
    stock: 250,
    sku: 'BED-SET-60S-GRY',
    brand: '梦洁家纺',
    specs: {
      面料: '100%长绒棉',
      支数: '60支',
      工艺: '贡缎',
      密度: '300TC',
      被套: '200×230cm',
      床单: '250×270cm',
      枕套: '48×74cm ×2',
    },
    isFeatured: false,
    isNew: true,
    createdAt: '2026-06-05T08:00:00Z',
  },
  {
    id: 'prod-16',
    name: '智能护眼落地灯 无级调光调色',
    slug: 'smart-floor-lamp',
    description: 'RA98高显色 | 无频闪 | 五种模式 | 手机远程控制',
    longDescription:
      '智能护眼落地灯，采用 168 颗全光谱 LED 灯珠，RA98 高显色指数。支持无级调光 (5%-100%) 和无级调色温 (2700K-6500K)。五种预设模式：阅读、办公、休闲、夜灯、暖光。支持米家 APP 远程控制和语音控制。内置环境光传感器，可自动调节亮度。',
    price: 899,
    originalPrice: 1299,
    images: [
      'https://picsum.photos/seed/lamp-1/600/600',
      'https://picsum.photos/seed/lamp-2/600/600',
    ],
    category: '家居生活',
    subcategory: '灯具',
    tags: ['护眼', '智能', '落地灯'],
    rating: 4.7,
    reviewCount: 890,
    stock: 120,
    sku: 'LAMP-FLOOR-SMART',
    brand: 'Yeelight',
    specs: {
      光源: '168颗全光谱LED',
      显色指数: 'RA98',
      色温范围: '2700K-6500K',
      亮度: '5%-100%无级调光',
      控制: '触控/APP/语音',
      功率: '24W',
      高度: '180cm',
    },
    isFeatured: false,
    isNew: false,
    createdAt: '2026-03-20T08:00:00Z',
  },

  // === 美妆个护 ===
  {
    id: 'prod-17',
    name: '资生堂红妍肌活精华露 第三代 75ml',
    slug: 'shiseido-ultimune-serum',
    description: '全新 ImuMoisture 科技 | 强韧肌底 | 水润透亮',
    longDescription:
      '资生堂红妍肌活精华露第三代（红腰子），全新 ImuMoisture 科技，增强肌肤免疫力。蕴含灵芝精粹、鸢尾根提取物和发酵玫瑰蜜，深层修护肌肤屏障。质地水润轻盈，快速吸收不黏腻。75ml 大容量装，按压泵设计卫生方便。',
    price: 890,
    originalPrice: 1180,
    images: [
      'https://picsum.photos/seed/serum-1/600/600',
      'https://picsum.photos/seed/serum-2/600/600',
    ],
    category: '美妆个护',
    subcategory: '面部护肤',
    tags: ['精华', '修护', '资生堂'],
    rating: 4.8,
    reviewCount: 4567,
    stock: 160,
    sku: 'SH-ULTMUNE3-75ML',
    brand: '资生堂',
    specs: {
      容量: '75ml',
      质地: '精华露',
      主要成分: '灵芝精粹/鸢尾根/发酵玫瑰蜜',
      适用肤质: '所有肤质',
      功效: '强韧肌底/保湿/提亮',
      产地: '日本',
    },
    isFeatured: true,
    isNew: true,
    createdAt: '2026-06-18T08:00:00Z',
  },
  {
    id: 'prod-18',
    name: '兰蔻菁纯唇膏 #196 朱砂橘',
    slug: 'lancome-labsolu-196',
    description: '丝缎质地 | 高饱和显色 | 长效持妆 | 滋润不拔干',
    longDescription:
      '兰蔻菁纯唇膏 #196 朱砂橘，经典胡萝卜色。丝缎质地，高饱和显色，一笔成色。添加玫瑰精油和透明质酸，滋润不拔干。长效持妆 8 小时不褪色。全新黑金外壳，磁吸开合，高级质感。',
    price: 310,
    originalPrice: 360,
    images: [
      'https://picsum.photos/seed/lipstick-1/600/600',
      'https://picsum.photos/seed/lipstick-2/600/600',
      'https://picsum.photos/seed/lipstick-3/600/600',
    ],
    category: '美妆个护',
    subcategory: '彩妆',
    tags: ['口红', '朱砂橘', '滋润'],
    rating: 4.7,
    reviewCount: 6789,
    stock: 300,
    sku: 'LC-LABSOLU-196',
    brand: '兰蔻',
    specs: {
      色号: '#196 朱砂橘',
      质地: '丝缎',
      持久度: '8小时',
      净含量: '3.4g',
      产地: '法国',
    },
    isFeatured: false,
    isNew: false,
    createdAt: '2026-05-01T08:00:00Z',
  },
  {
    id: 'prod-19',
    name: '祖玛珑 蓝风铃香水 100ml',
    slug: 'jo-malone-wild-bluebell',
    description: '花香调 | 蓝风铃 柿子 白麝香 | 清新自然',
    longDescription:
      '祖玛珑蓝风铃香水，经典英伦香氛。前调：蓝风铃，清新花香开场。中调：柿子，甜美果香融入。后调：白麝香，柔和干净收尾。整体香调清新自然，如春日野外漫步。适合日常通勤和约会。100ml 大容量装，性价比更高。',
    price: 680,
    originalPrice: 820,
    images: [
      'https://picsum.photos/seed/perfume-1/600/600',
      'https://picsum.photos/seed/perfume-2/600/600',
    ],
    category: '美妆个护',
    subcategory: '香水',
    tags: ['淡香水', '花香调', '祖玛珑'],
    rating: 4.9,
    reviewCount: 2345,
    stock: 100,
    sku: 'JM-BLUEBELL-100ML',
    brand: 'Jo Malone',
    specs: {
      香调: '花香调',
      前调: '蓝风铃',
      中调: '柿子',
      后调: '白麝香',
      容量: '100ml',
      产地: '英国',
    },
    isFeatured: true,
    isNew: false,
    createdAt: '2026-04-01T08:00:00Z',
  },
  {
    id: 'prod-20',
    name: '科颜氏高保湿面霜 125ml 限量版',
    slug: 'kiehls-ultra-facial-cream',
    description: '冰川保护蛋白 | 角鲨烷 | 24小时保湿 | 极地级滋润',
    longDescription:
      '科颜氏高保湿面霜，畅销 40 年的经典产品。含冰川保护蛋白和橄榄角鲨烷，24 小时持续保湿。质地如冰淇淋般轻盈，快速吸收不油腻。经极地和高原极端环境测试验证保湿力。125ml 限量超大容量装，性价比之选。',
    price: 520,
    originalPrice: 720,
    images: [
      'https://picsum.photos/seed/cream-1/600/600',
      'https://picsum.photos/seed/cream-2/600/600',
    ],
    category: '美妆个护',
    subcategory: '面部护肤',
    tags: ['面霜', '保湿', '科颜氏'],
    rating: 4.8,
    reviewCount: 8901,
    stock: 200,
    sku: 'KIEHLS-UFC-125ML',
    brand: '科颜氏',
    specs: {
      容量: '125ml',
      质地: '冰激凌乳霜',
      主要成分: '冰川保护蛋白/角鲨烷',
      适用肤质: '所有肤质/敏感肌可用',
      功效: '24小时保湿/强韧屏障',
      产地: '美国',
    },
    isFeatured: false,
    isNew: false,
    createdAt: '2026-03-10T08:00:00Z',
  },

  // === 食品生鲜 ===
  {
    id: 'prod-21',
    name: '舟山现捕海鲜礼盒 5斤装',
    slug: 'zhoushan-seafood-gift-box',
    description: '当日现捕 | 顺丰冷链 | 大闸蟹+鲳鱼+带鱼+基围虾+鱿鱼',
    longDescription:
      '舟山渔场当日现捕海鲜礼盒，急冻锁鲜。5 斤豪华组合：大闸蟹 4 只（3 两/只）、东海白鲳鱼 2 条（约 600g）、舟山带鱼 2 条（约 500g）、南美白虾 1 斤、墨鱼仔 1 斤。顺丰冷链全程配送，保证新鲜到家。附赠葱姜蒜调料包。',
    price: 399,
    originalPrice: 599,
    images: [
      'https://picsum.photos/seed/seafood-1/600/600',
      'https://picsum.photos/seed/seafood-2/600/600',
      'https://picsum.photos/seed/seafood-3/600/600',
    ],
    category: '食品生鲜',
    subcategory: '生鲜水果',
    tags: ['海鲜', '冷链', '礼盒'],
    rating: 4.6,
    reviewCount: 2345,
    stock: 80,
    sku: 'FD-SEAFOOD-BOX',
    brand: '舟山渔场',
    specs: {
      总重量: '5斤',
      包含: '大闸蟹×4/鲳鱼×2/带鱼×2/白虾×1斤/墨鱼仔×1斤',
      配送: '顺丰冷链',
      产地: '浙江舟山',
      保质期: '冷冻180天',
      包装: '保温箱 + 冰袋',
    },
    isFeatured: true,
    isNew: false,
    createdAt: '2026-06-12T08:00:00Z',
  },
  {
    id: 'prod-22',
    name: '手工烘焙混合坚果礼盒 1kg',
    slug: 'mixed-nuts-gift-box',
    description: '6种坚果 | 低温烘焙 | 无添加 | 每日坚果',
    longDescription:
      '精选全球 6 种优质坚果：美国开心果、越南腰果、澳洲夏威夷果、云南核桃仁、土耳其榛子、新疆巴旦木。低温烘焙工艺，保留原香和营养。无人工添加，不含防腐剂、香精、色素。独立小包装，每日一袋，方便携带。1kg 家庭装。',
    price: 168,
    originalPrice: 228,
    images: [
      'https://picsum.photos/seed/nuts-1/600/600',
      'https://picsum.photos/seed/nuts-2/600/600',
    ],
    category: '食品生鲜',
    subcategory: '休闲零食',
    tags: ['坚果', '健康', '礼盒'],
    rating: 4.7,
    reviewCount: 5678,
    stock: 500,
    sku: 'FD-NUTS-MIX-1KG',
    brand: '三只松鼠',
    specs: {
      净含量: '1kg',
      包含: '开心果/腰果/夏威夷果/核桃仁/榛子/巴旦木',
      工艺: '低温烘焙',
      保质期: '240天',
      包装: '独立小袋 × 40袋',
    },
    isFeatured: false,
    isNew: false,
    createdAt: '2026-05-01T08:00:00Z',
  },
  {
    id: 'prod-23',
    name: '云南普洱熟茶饼 2018年陈 357g',
    slug: 'yunnan-puer-tea-cake',
    description: '古树料 | 八年陈化 | 勐海产区 | 回甘生津',
    longDescription:
      '2018 年云南勐海产区古树普洱熟茶饼，十年陈化。选用树龄 100 年以上的大叶种古树茶原料，传统渥堆发酵工艺。茶汤红浓明亮，陈香显著带枣香，滋味醇厚顺滑，回甘生津持久。357g 传统七子饼压制，棉纸包装，适合长期收藏。',
    price: 398,
    originalPrice: 598,
    images: [
      'https://picsum.photos/seed/puer-1/600/600',
      'https://picsum.photos/seed/puer-2/600/600',
    ],
    category: '食品生鲜',
    subcategory: '饮料冲调',
    tags: ['普洱', '陈茶', '古树'],
    rating: 4.9,
    reviewCount: 456,
    stock: 60,
    sku: 'FD-TEA-PUER-357G',
    brand: '大益',
    specs: {
      品种: '普洱熟茶',
      净含量: '357g',
      原料: '勐海古树大叶种',
      年份: '2018年',
      产区: '云南西双版纳勐海',
      存储: '通风干燥无异味',
    },
    isFeatured: false,
    isNew: false,
    createdAt: '2026-02-01T08:00:00Z',
  },
  {
    id: 'prod-24',
    name: '日本进口 越光米 5kg',
    slug: 'japanese-koshihikari-rice',
    description: '新泻县产 | 真空包装 | 口感Q弹 | 米香浓郁',
    longDescription:
      '日本新泻县直供越光米（コシヒカリ），2025 年新米。越光米被誉为"日本第一米"，米粒晶莹饱满，粘性和弹性极佳，冷饭不回生。适合做寿司、饭团或日常食用。真空包装锁鲜，5kg 家庭装。',
    price: 268,
    originalPrice: 368,
    images: [
      'https://picsum.photos/seed/rice-1/600/600',
      'https://picsum.photos/seed/rice-2/600/600',
    ],
    category: '食品生鲜',
    subcategory: '粮油调味',
    tags: ['大米', '进口', '日本'],
    rating: 4.8,
    reviewCount: 3456,
    stock: 400,
    sku: 'FD-RICE-KOSH-5KG',
    brand: '新泻县JA全农',
    specs: {
      品种: '越光米(コシヒカリ)',
      净含量: '5kg',
      产地: '日本新泻县',
      年份: '2025年新米',
      包装: '真空包装',
      保质期: '12个月',
    },
    isFeatured: false,
    isNew: false,
    createdAt: '2026-03-01T08:00:00Z',
  },

  // === 运动户外 ===
  {
    id: 'prod-25',
    name: '可折叠跑步机 家用静音款',
    slug: 'folding-treadmill-home',
    description: '2.5HP无刷电机 | 16km/h | 液压折叠 | APP智控',
    longDescription:
      '家用可折叠跑步机，2.5HP 无刷直流电机，运转静音不扰邻。速度 1-16km/h 无级调节，12 档电动坡度。62cm 加宽跑带，UltraSilent 减震系统保护膝盖。液压折叠结构，折叠后占地仅 0.3㎡。NFC 一碰连接 APP，记录运动数据。',
    price: 3299,
    originalPrice: 4599,
    images: [
      'https://picsum.photos/seed/treadmill-1/600/600',
      'https://picsum.photos/seed/treadmill-2/600/600',
      'https://picsum.photos/seed/treadmill-3/600/600',
    ],
    category: '运动户外',
    subcategory: '健身器材',
    tags: ['跑步机', '折叠', '家用'],
    rating: 4.5,
    reviewCount: 678,
    stock: 35,
    sku: 'SP-TREAD-FOLD',
    brand: 'Keep',
    specs: {
      电机: '2.5HP无刷直流',
      速度: '1-16km/h',
      坡度: '12档电动',
      跑带: '62×135cm',
      减震: 'UltraSilent六点减震',
      折叠后尺寸: '125×78×25cm',
      最大承重: '130kg',
    },
    isFeatured: true,
    isNew: false,
    createdAt: '2026-05-15T08:00:00Z',
  },
  {
    id: 'prod-26',
    name: '专业登山背包 50L 防泼水',
    slug: 'hiking-backpack-50l',
    description: 'Cordura面料 | 悬浮透气背负 | 防雨罩 | 多仓分区',
    longDescription:
      '50L 专业登山背包，采用 Cordura 高强度防撕裂面料，表面 DWR 防泼水处理。AirFlex 悬浮透气背负系统，空气对流散热。多仓分区收纳：主仓(睡袋仓分离)、顶仓、前仓、双侧弹力袋、腰带口袋。含独立防雨罩，登山杖/冰镐外挂点，水袋仓兼容 3L 水袋。',
    price: 499,
    originalPrice: 799,
    images: [
      'https://picsum.photos/seed/backpack-1/600/600',
      'https://picsum.photos/seed/backpack-2/600/600',
      'https://picsum.photos/seed/backpack-3/600/600',
    ],
    category: '运动户外',
    subcategory: '户外装备',
    tags: ['登山包', '专业', '大容量'],
    rating: 4.7,
    reviewCount: 567,
    stock: 90,
    sku: 'SP-BACKPACK-50L',
    brand: 'Osprey',
    specs: {
      容量: '50L',
      面料: 'Cordura防撕裂尼龙',
      背负系统: 'AirFlex悬浮透气',
      防水: 'DWR防泼水+防雨罩',
      重量: '1.68kg',
      尺寸: '72×35×28cm',
      附件: '防雨罩/登山杖外挂/水袋仓',
    },
    isFeatured: false,
    isNew: true,
    createdAt: '2026-06-22T08:00:00Z',
  },
  {
    id: 'prod-27',
    name: '公路自行车 碳纤维前叉 Shimano 105套件',
    slug: 'road-bike-carbon-105',
    description: '超轻铝架 | 碳纤维前叉 | Shimano 105 R7100 | 11.2kg',
    longDescription:
      '入门级公路自行车，超轻 6061 铝合金车架，碳纤维前叉减震。Shimano 105 R7100 套件（2×12速），换挡精准快速。机械碟刹制动力强，雨天骑行更安全。700×28C 公路胎，兼顾速度和舒适性。仅重 11.2kg，适合通勤和周末骑行。',
    price: 6999,
    originalPrice: 8999,
    images: [
      'https://picsum.photos/seed/roadbike-1/600/600',
      'https://picsum.photos/seed/roadbike-2/600/600',
      'https://picsum.photos/seed/roadbike-3/600/600',
    ],
    category: '运动户外',
    subcategory: '骑行运动',
    tags: ['公路车', 'Shimano', '碳纤维'],
    rating: 4.6,
    reviewCount: 234,
    stock: 20,
    sku: 'SP-BIKE-RD-105',
    brand: '捷安特',
    specs: {
      车架: '6061铝合金',
      前叉: '碳纤维',
      套件: 'Shimano 105 R7100 2×12速',
      刹车: '机械碟刹',
      轮胎: '700×28C',
      重量: '11.2kg',
      尺码: 'XS/S/M/L/XL',
    },
    isFeatured: false,
    isNew: false,
    createdAt: '2026-04-10T08:00:00Z',
  },
  {
    id: 'prod-28',
    name: '专业竞速泳镜 防雾高清 近视可选',
    slug: 'racing-swim-goggles',
    description: '防雾处理 | UV400防护 | 硅胶密封 | 可配近视',
    longDescription:
      '专业竞速泳镜，采用聚碳酸酯高清镜片，防雾处理持久清晰。UV400 防紫外线，户外游泳保护眼睛。3D 人体工学硅胶密封圈，贴合不渗水。可调节鼻桥，适配不同脸型。支持近视度数定制（200-800度），左右眼可配不同度数。多色可选。',
    price: 199,
    originalPrice: 299,
    images: [
      'https://picsum.photos/seed/goggles-1/600/600',
      'https://picsum.photos/seed/goggles-2/600/600',
    ],
    category: '运动户外',
    subcategory: '游泳用品',
    tags: ['泳镜', '近视', '专业'],
    rating: 4.5,
    reviewCount: 890,
    stock: 350,
    sku: 'SP-GOGGLE-RACE',
    brand: 'Speedo',
    specs: {
      镜片: '聚碳酸酯',
      防雾: '长效防雾涂层',
      紫外线: 'UV400',
      密封圈: '3D硅胶',
      近视范围: '200-800度(选配)',
      颜色: '黑色/蓝色/粉色/透明',
    },
    isFeatured: false,
    isNew: false,
    createdAt: '2026-03-25T08:00:00Z',
  },
];

export const reviews: Review[] = [
  { id: 'rev-1', productId: 'prod-1', userName: '数码达人小王', avatar: 'https://picsum.photos/seed/user1/100/100', rating: 5, title: '拍照效果惊艳，续航给力', content: 'iPhone 17 Pro Max 的拍照效果真的太棒了，夜景模式拍出来的照片清晰度很高。电池续航比上一代强太多了，一天下来还有30%左右的电量。', createdAt: '2026-06-20T10:30:00Z' },
  { id: 'rev-2', productId: 'prod-1', userName: '科技控Amy', avatar: 'https://picsum.photos/seed/user2/100/100', rating: 4, title: '性能没得说，价格略高', content: 'A19 Pro 芯片性能确实强，打游戏完全不卡。唯一不满意的就是价格了，虽然比首发便宜，但还是贵。', createdAt: '2026-06-22T14:20:00Z' },
  { id: 'rev-3', productId: 'prod-1', userName: '老张', avatar: 'https://picsum.photos/seed/user3/100/100', rating: 5, title: '钛金属边框手感好', content: '从 14 Pro 升级上来的，钛金属边框轻了不少，手感好。USB-C 接口终于可以用一个充电器充所有设备了。', createdAt: '2026-06-25T09:15:00Z' },
  { id: 'rev-4', productId: 'prod-2', userName: '数码玩家', avatar: 'https://picsum.photos/seed/user4/100/100', rating: 5, title: '鸿蒙生态越来越好了', content: 'Mate 70 Pro+ 配合鸿蒙 NEXT 系统，流畅度完全不输 iOS。卫星通信在野外徒步时用了一次，真的很实用。', createdAt: '2026-06-25T16:00:00Z' },
  { id: 'rev-5', productId: 'prod-2', userName: '华为铁粉', avatar: 'https://picsum.photos/seed/user5/100/100', rating: 4, title: '昆仑玻璃确实耐摔', content: '到手第三天就从口袋掉出来摔地上了，昆仑玻璃确实名不虚传，一点事没有。信号也比之前用的手机好。', createdAt: '2026-06-28T11:30:00Z' },
  { id: 'rev-6', productId: 'prod-10', userName: '跑步爱好者', avatar: 'https://picsum.photos/seed/user6/100/100', rating: 5, title: '跑了100公里后的真实感受', content: 'Pegasus 42 真的很舒服，ReactX 中底的回弹感很明显。跑了 100 多公里，鞋底磨损很小。尺码标准，不用买大。', createdAt: '2026-06-18T08:00:00Z' },
  { id: 'rev-7', productId: 'prod-10', userName: '健身达人Tom', avatar: 'https://picsum.photos/seed/user7/100/100', rating: 4, title: '颜值和性能兼备', content: '买了黑白配色，颜值很高，平时穿搭也好看。跑步和健身都穿它，包裹性好。就是白色不耐脏。', createdAt: '2026-06-20T12:45:00Z' },
  { id: 'rev-8', productId: 'prod-10', userName: '夜跑族小陈', avatar: 'https://picsum.photos/seed/user8/100/100', rating: 5, title: '夜跑神器', content: '反光条设计很实用，夜跑安全。透气性也比上一代好，跑完 10 公里脚不闷。强烈推荐。', createdAt: '2026-06-23T21:00:00Z' },
  { id: 'rev-9', productId: 'prod-17', userName: '护肤控Lily', avatar: 'https://picsum.photos/seed/user9/100/100', rating: 5, title: '第三代红腰子真的不一样', content: '用了一个月，皮肤状态明显变好了。之前换季容易泛红敏感，现在稳定很多。第三代的质地比之前更清爽。', createdAt: '2026-06-26T09:30:00Z' },
  { id: 'rev-10', productId: 'prod-17', userName: '敏感肌小美', avatar: 'https://picsum.photos/seed/user10/100/100', rating: 5, title: '敏感肌亲测友好', content: '我是敏感肌，很多精华用了会刺痛，但红腰子完全不会。吸收很快，后续叠加面霜也不搓泥。', createdAt: '2026-06-28T15:00:00Z' },
  { id: 'rev-11', productId: 'prod-20', userName: '干皮救星', avatar: 'https://picsum.photos/seed/user11/100/100', rating: 5, title: '干皮冬天必备', content: '冬天皮肤干到起皮，用了高保湿面霜三天就好了。夏天用也不油腻，一年四季都能用的面霜。125ml 大碗耐用。', createdAt: '2026-06-15T10:00:00Z' },
  { id: 'rev-12', productId: 'prod-19', userName: '香气控Cindy', avatar: 'https://picsum.photos/seed/user12/100/100', rating: 5, title: '初恋的味道', content: '蓝风铃的味道太清新了，喷上去像刚刚沐浴过一样干净。留香时间大概 4-5 小时，祖玛珑里算持久的。', createdAt: '2026-06-10T16:20:00Z' },
  { id: 'rev-13', productId: 'prod-7', userName: '音乐发烧友', avatar: 'https://picsum.photos/seed/user13/100/100', rating: 5, title: '降噪效果无敌', content: 'XM6 的降噪比 XM5 提升明显，地铁上几乎听不到噪音。音质还是一贯的索尼风格，低音有力不轰头。', createdAt: '2026-06-28T08:00:00Z' },
  { id: 'rev-14', productId: 'prod-7', userName: '经常出差的小李', avatar: 'https://picsum.photos/seed/user14/100/100', rating: 4, title: '长途飞行必备', content: '60 小时续航真的太香了，出差一周不用充电。佩戴舒适度也有提升，连续戴 3 小时不夹头。', createdAt: '2026-06-29T13:00:00Z' },
  { id: 'rev-15', productId: 'prod-25', userName: '坚持运动', avatar: 'https://picsum.photos/seed/user15/100/100', rating: 4, title: '家用跑步机首选', content: '真的非常静音，楼下邻居说听不到声音。折叠后放阳台刚好。APP 里的课程很丰富，跟着跑不无聊。', createdAt: '2026-06-20T07:30:00Z' },
  { id: 'rev-16', productId: 'prod-21', userName: '海鲜老饕', avatar: 'https://picsum.photos/seed/user16/100/100', rating: 5, title: '新鲜！和在舟山吃的一样', content: '顺丰冷链第二天一早就到了，冰袋还没化。大闸蟹都是活的，鲳鱼眼睛清澈，一看就是新鲜货。下次还会买。', createdAt: '2026-06-16T19:00:00Z' },
  { id: 'rev-17', productId: 'prod-12', userName: '珠宝鉴定师', avatar: 'https://picsum.photos/seed/user17/100/100', rating: 5, title: '这个价位性价比很高', content: '做了鉴定，确实是天然淡水珍珠，925银镀铂金工艺也不错。这个价格能买到这样的品质很划算。送女朋友她很喜欢。', createdAt: '2026-06-08T14:00:00Z' },
  { id: 'rev-18', productId: 'prod-8', userName: '时尚编辑Mia', avatar: 'https://picsum.photos/seed/user18/100/100', rating: 5, title: '媲美大牌的品质', content: '羊绒含量确实高，手感软糯。版型很正，穿上比照片更好看。同事都以为是大几千的大牌货。', createdAt: '2026-05-20T11:00:00Z' },
  { id: 'rev-19', productId: 'prod-13', userName: '新家装修中', avatar: 'https://picsum.photos/seed/user19/100/100', rating: 4, title: '白橡木纹理很好看', content: '餐桌很重很扎实，白橡木纹理自然好看。六把椅子做工也不错。唯一不足是安装需要两个人。', createdAt: '2026-06-05T09:00:00Z' },
  { id: 'rev-20', productId: 'prod-3', userName: '程序员老刘', avatar: 'https://picsum.photos/seed/user20/100/100', rating: 5, title: '程序员神器', content: '32GB 内存开十个 Docker 容器都不卡。OLED 屏幕看代码很舒服，906g 的重量背着通勤太轻松了。ThinkPad 键盘手感一如既往的好。', createdAt: '2026-06-15T17:00:00Z' },
  { id: 'rev-21', productId: 'prod-23', userName: '老茶客', avatar: 'https://picsum.photos/seed/user21/100/100', rating: 5, title: '八年陈化，料子很正', content: '一开饼茶香就出来了，没有仓味。泡出来的茶汤油亮，入口顺滑，回甘明显。是正经的勐海古树料。', createdAt: '2026-05-15T08:00:00Z' },
  { id: 'rev-22', productId: 'prod-23', userName: '茶道爱好者', avatar: 'https://picsum.photos/seed/user22/100/100', rating: 4, title: '不错的日常口粮茶', content: '这个年份的熟普能有这个口感很不错了，性价比高。耐泡，10泡之后还有味道。值得囤几饼放着。', createdAt: '2026-05-20T15:30:00Z' },
];

export const banners: Banner[] = [
  {
    id: 'bnr-1',
    title: '618年中大促 狂欢继续',
    subtitle: '全场低至5折 | 领券再减100 | 满299包邮',
    image: 'https://picsum.photos/seed/banner-sale/1200/400',
    link: '/products?tag=sale',
    bgColor: 'bg-gradient-to-r from-red-500 to-orange-500',
  },
  {
    id: 'bnr-2',
    title: '数码新品首发',
    subtitle: '最新旗舰手机 现货发售',
    image: 'https://picsum.photos/seed/banner-digital/1200/400',
    link: '/products?subcategory=smartphones',
    bgColor: 'bg-gradient-to-r from-blue-600 to-purple-600',
  },
  {
    id: 'bnr-3',
    title: '运动户外 激爽一夏',
    subtitle: '装备升级 畅快运动',
    image: 'https://picsum.photos/seed/banner-sports/1200/400',
    link: '/products?category=sports',
    bgColor: 'bg-gradient-to-r from-green-500 to-teal-500',
  },
];

export const sampleOrders: Order[] = [
  {
    id: 'ORD-20260630-001',
    items: [
      { productId: 'prod-1', productName: 'iPhone 17 Pro Max 512GB 暗夜黑', price: 10999, quantity: 1, image: 'https://picsum.photos/seed/iphone17-1/100/100' },
      { productId: 'prod-7', productName: 'Sony WH-1000XM6 头戴式降噪耳机', price: 2699, quantity: 1, image: 'https://picsum.photos/seed/sonyxm6-1/100/100' },
    ],
    totalAmount: 13698,
    status: 'shipped',
    shippingAddress: {
      name: '张三',
      phone: '138****6789',
      province: '广东省',
      city: '深圳市',
      district: '南山区',
      detail: '科技园路88号创新大厦12层',
      zipCode: '518000',
    },
    createdAt: '2026-06-30T10:30:00Z',
    updatedAt: '2026-06-30T16:00:00Z',
  },
  {
    id: 'ORD-20260628-002',
    items: [
      { productId: 'prod-10', productName: 'Nike Air Zoom Pegasus 42 男女同款跑鞋', price: 899, quantity: 2, image: 'https://picsum.photos/seed/pegasus42-1/100/100' },
      { productId: 'prod-26', productName: '专业登山背包 50L 防泼水', price: 499, quantity: 1, image: 'https://picsum.photos/seed/backpack-1/100/100' },
    ],
    totalAmount: 2297,
    status: 'delivered',
    shippingAddress: {
      name: '张三',
      phone: '138****6789',
      province: '广东省',
      city: '深圳市',
      district: '南山区',
      detail: '科技园路88号创新大厦12层',
      zipCode: '518000',
    },
    createdAt: '2026-06-28T14:00:00Z',
    updatedAt: '2026-06-29T09:00:00Z',
  },
  {
    id: 'ORD-20260625-003',
    items: [
      { productId: 'prod-17', productName: '资生堂红妍肌活精华露 第三代 75ml', price: 890, quantity: 1, image: 'https://picsum.photos/seed/serum-1/100/100' },
      { productId: 'prod-20', productName: '科颜氏高保湿面霜 125ml 限量版', price: 520, quantity: 1, image: 'https://picsum.photos/seed/cream-1/100/100' },
      { productId: 'prod-12', productName: '925银 珍珠锁骨链 淡水珍珠 6-7mm', price: 399, quantity: 1, image: 'https://picsum.photos/seed/pearl-1/100/100' },
    ],
    totalAmount: 1809,
    status: 'delivered',
    shippingAddress: {
      name: '张三',
      phone: '138****6789',
      province: '广东省',
      city: '深圳市',
      district: '南山区',
      detail: '科技园路88号创新大厦12层',
      zipCode: '518000',
    },
    createdAt: '2026-06-25T20:00:00Z',
    updatedAt: '2026-06-28T12:00:00Z',
  },
];

// 内存中的购物车状态
let cart: Cart = {
  items: [],
  totalAmount: 0,
  totalItems: 0,
};

export function getCart(): Cart {
  return { ...cart };
}

export function addToCart(productId: string, quantity: number): Cart {
  const product = products.find((p) => p.id === productId);
  if (!product) throw new Error('Product not found');

  const existingItem = cart.items.find((item) => item.productId === productId);
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.items.push({ productId, quantity, product });
  }

  recalculateCart();
  return { ...cart };
}

export function updateCartItem(productId: string, quantity: number): Cart {
  if (quantity <= 0) {
    cart.items = cart.items.filter((item) => item.productId !== productId);
  } else {
    const item = cart.items.find((item) => item.productId === productId);
    if (item) {
      item.quantity = quantity;
    }
  }
  recalculateCart();
  return { ...cart };
}

export function removeFromCart(productId: string): Cart {
  cart.items = cart.items.filter((item) => item.productId !== productId);
  recalculateCart();
  return { ...cart };
}

export function clearCart(): void {
  cart = { items: [], totalAmount: 0, totalItems: 0 };
}

function recalculateCart(): void {
  cart.totalItems = cart.items.reduce((sum, item) => sum + item.quantity, 0);
  cart.totalAmount = cart.items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  const category = categories.find((c) => c.slug === categorySlug);
  if (!category) return [];
  return products.filter((p) => p.category === category.name);
}

export function getProductsBySubcategory(subcategorySlug: string): Product[] {
  for (const cat of categories) {
    const sub = cat.subcategories.find((s) => s.slug === subcategorySlug);
    if (sub) {
      return products.filter((p) => p.subcategory === sub.name);
    }
  }
  return [];
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.isFeatured);
}

export function getNewProducts(): Product[] {
  return products.filter((p) => p.isNew);
}

export function getReviewsByProductId(productId: string): Review[] {
  return reviews.filter((r) => r.productId === productId);
}

export interface ProductQueryParams {
  page?: number;
  pageSize?: number;
  category?: string;
  subcategory?: string;
  tag?: string;
  search?: string;
  sortBy?: 'price-asc' | 'price-desc' | 'rating' | 'newest';
  minPrice?: number;
  maxPrice?: number;
}

export function queryProducts(params: ProductQueryParams) {
  let result = [...products];
  const {
    page = 1,
    pageSize = 12,
    category,
    subcategory,
    tag,
    search,
    sortBy = 'newest',
    minPrice,
    maxPrice,
  } = params;

  if (category) {
    result = result.filter((p) => p.category === category || p.category === categories.find(c => c.slug === category)?.name);
  }
  if (subcategory) {
    for (const cat of categories) {
      const sub = cat.subcategories.find((s) => s.slug === subcategory);
      if (sub) {
        result = result.filter((p) => p.subcategory === sub.name);
        break;
      }
    }
  }
  if (tag) {
    result = result.filter((p) => p.tags.includes(tag));
  }
  if (search) {
    const q = search.toLowerCase();
    result = result.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q))
    );
  }
  if (minPrice !== undefined) {
    result = result.filter((p) => p.price >= minPrice);
  }
  if (maxPrice !== undefined) {
    result = result.filter((p) => p.price <= maxPrice);
  }

  switch (sortBy) {
    case 'price-asc':
      result.sort((a, b) => a.price - b.price);
      break;
    case 'price-desc':
      result.sort((a, b) => b.price - a.price);
      break;
    case 'rating':
      result.sort((a, b) => b.rating - a.rating);
      break;
    case 'newest':
    default:
      result.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
      break;
  }

  const total = result.length;
  const totalPages = Math.ceil(total / pageSize);
  const start = (page - 1) * pageSize;
  const paginated = result.slice(start, start + pageSize);

  return {
    products: paginated,
    total,
    page,
    pageSize,
    totalPages,
  };
}
