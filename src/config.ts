/** Website 分类配置 */
const WEBSITE_SORTS: WebsiteSort[] = [
  {
    title: "主服务",
    sites: [
      {
        title: "博客",
        url: "https://blog.rakien.top/",
        icon: "https://s2.loli.net/2023/06/14/UmQkSwX6ElYfJW4.jpg",
      },
      {
        title: "网盘",
        description: "个人网盘",
        url: "https://pan.rakien.top/",
        icon: "https://s2.loli.net/2025/05/09/g8sZaMUvcKLY4AB.jpg",
      },
      {
        title: "小卖部",
        description: "购买网站",
        url: "https://shop.rakien.top/",
        icon: "https://s2.loli.net/2025/05/09/WwsqTNuy6zEF2c9.png",
      },
    ],
  },
  {
    title: "工具类",
  }
];

/** Website 配置（2023.3.29 已废弃） */
const WEBSITE_ITEMS: WebsiteItem[] = [];

const GLOBAL_CONFIG = {
  /**
   * 博客名称
   */
  BLOG_NAME: "Rakien's引导页",
  /**
   * 个人博客链接
   */
  BLOG_URL: "https://blog.rakien.top",
  /**
   * 指定中心 LOGO 图片地址
   */
  LOGO_URL: "https://s2.loli.net/2023/06/17/HAhJI8tRFlQcw9D.png",
  /**
   * 个人 Github 链接
   */
  GITHUB_URL: "",
  /**
   * 背景图片地址
   */
  BACKGROUND_IMG_URL: "https://s2.loli.net/2023/06/14/89N176ZfXUxaoTd.jpg",
  /**
   * ICP 备案号，留空不显示
   */
  ICP: "",
  ICP_URL: "",
  FOOTER_INFO: true,
  /**
   * 网站欢迎标语
   */
  SLOGANS: [
    "欢迎拜访",
    "歡迎拜訪",
    "Welcome, my friend!",
    "嗨，别来无恙",
    "不忘初心，一生浪漫",
    "最近还好吗？",
    "流星，落花，萤火",
    "马车越空，晃荡越响",
  ],
  /**
   * Website 分类配置
   */
  WEBSITE_SORTS,
  /**
   * Website 配置（2023.3.29 已废弃）
   */
  WEBSITE_ITEMS,
  /**
   * 网站 Title Keywords Description 的配置，用于 SEO
   */
  TKD: {
    title: "My Blog Index",
    keywords: "Blog, Index, Index Page",
    description: "This is my personal blog index page.",
  },
};

export default GLOBAL_CONFIG;
