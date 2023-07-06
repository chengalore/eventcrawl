const { crawlNetworkTab } = require('./work');

async function main() {
  const urls = [
    'https://www.anotheraddress.jp/products/detail/2211005011005?from_page=top_newitem',
    'https://belluna.jp/goods/448255.html',
    'https://i.lumine.jp/item/589230003060004',
    'https://voi.0101.co.jp/voi/wsg/wrt-5_mcd-TO910_cpg-095_pno-09_ino-01.html?intid=ttop_main_r',
    'https://shop.adidas.jp/products/HC4509/',
    'https://voi.0101.co.jp/voi/webcatalog/showGoodsDetails.do?wrt=5&mcd=CC008&cpg=120&pno=31&ino=01',
    'https://dfashion.docomo.ne.jp/product/detail/id_504525212-mc_03N'
  ];

  for (const url of urls) {
    try {
      const filteredRequests = await crawlNetworkTab(url);
      console.log('URL:',url, filteredRequests);
      // Process the filtered requests as needed
    } catch (error) {
      console.error('Error crawling', url, error);
    }
  }
}

main();