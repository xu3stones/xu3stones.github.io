var hoverEffect = true; // set true for hover effect, set false for no hover effect

var searchEngine = 'google'; // default search engine - set google for google search, bing for bing search, yahoo for yahoo search

var numberOfScreens = 2; // set number of screens (1 or 2 or 3)
 
var blockName = new Array(); // set names of blocks
blockName[1] = '经常访问';
blockName[2] = '生活查询';
blockName[3] = 'News & fun';

var bookmark = new Array();
bookmark[0] = new Array();
bookmark[1] = new Array();
bookmark[2] = new Array();

// set your bookmarks here: (If you do not fill 'thumb' for thumbnail will be used title)
// FIRST BLOCK
bookmark[0][0] = {
	'title':'CC98',
	'url':'http://www.cc98.org',
	'thumb':'cc98.png'
};
bookmark[0][1] = {
	'title':'新浪微博',
	'url':'http://weibo.com',
	'thumb':'weibo.png'
};
bookmark[0][2] = {
	'title':'电影FM',
	'url':'http://dianying.fm/',
	'thumb':''
};
bookmark[0][3] = {
'title':'鲜果',
	'url':'http://xianguo.com/',
	'thumb':'xg.png'
	
};
bookmark[0][4] = {
	'title':'优酷订阅',
	'url':'http://i.youku.com/u/home?type=subscribe',
	'thumb':'youku.png'
};
bookmark[0][5] = {
	'title':'电驴',
	'url':'http://www.verycd.com/i/19612612/fav/entries/?type=doing&order=update',
	'thumb':'verycd.png'
};
bookmark[0][6] = {
	'title':'汽车之家',
	'url':'http://www.autohome.com.cn/',
	'thumb':'auto.png'
};
bookmark[0][7] = {
	'title':'计院办公网',
	'url':'http://cspo.zju.edu.cn/redir.php?catalog_id=20',
	'thumb':''
};
bookmark[0][8] = {
	'title':'研究生院',
	'url':'http://grs.zju.edu.cn/index.jsf',
	'thumb':''
};
bookmark[0][9] = {
	'title':'百度地图',
	'url':'http://ditu.baidu.com',
	'thumb':'baidudt.png'
};
bookmark[0][10] = {
	'title':'浙大图书馆',
	'url':'http://libweb.zju.edu.cn/libweb/',
	'thumb':''
};
bookmark[0][11] = {
	'title':'浙大导航',
	'url':'http://www.zhedazhuye.com/',
	'thumb':''
};
// end of FIRST BLOCK
// SECOND BLOCK
bookmark[1][0] = {
	'title':'格瓦拉',
	'url':'http://www.gewara.com/',
	'thumb':''
};
bookmark[1][1] = {
	'title':'天天动听',
	'url':'http://www.dongting.com',
	'thumb':''
};
bookmark[1][2] = {
	'title':'大众点评',
	'url':'http://www.dianping.com/',
	'thumb':'dianping.png'
};
bookmark[1][3] = {
	'title':'蘑菇街',
	'url':'http://www.mogujie.com/book/boyfriend/?from=hpc_2',
	'thumb':''
};
bookmark[1][4] = {
	'title':'团购800',
	'url':'http://www.tuan800.com/',
	'thumb':'tuan800.png'
};
bookmark[1][5] = {
	'title':'一淘网',
	'url':'http://www.etao.com/',
	'thumb':'etao.png'
};
bookmark[1][6] = {
	'title':'12306',
	'url':'http://www.12306.cn',
	'thumb':'12306.png'
};
bookmark[1][7] = {
	'title':'123直播',
	'url':'http://live.hao123.com/',
	'thumb':''
};
bookmark[1][8] = {
	'title':'直播吧',
	'url':'http://www.zhibo8.cc',
	'thumb':''
};
bookmark[1][9] = {
	'title':'去哪儿',
	'url':'http://www.qunar.com/',
	'thumb':'qunar.png'
};
bookmark[1][10] = {
	'title':'中国联通',
	'url':'http://www.10010.com/',
	'thumb':''
};
bookmark[1][11] = {
	'title':'NexusHD',
	'url':'http://www.nexushd.org/torrents.php',
	'thumb':''
};
//end of SECOND BLOCK
// THIRD BLOCK
bookmark[2][0] = {
	'title':'eurosport',
	'url':'http://www.eurosport.com/',
	'thumb':'eurosport.png'
};
bookmark[2][1] = {
	'title':'amazon',
	'url':'http://www.amazon.com/',
	'thumb':'amazon.png'
};
bookmark[2][2] = {
	'title':'eBay',
	'url':'http://www.ebay.com/',
	'thumb':'ebay.png'
};
bookmark[2][3] = {
	'title':'IMDb',
	'url':'http://www.imdb.com/',
	'thumb':'imdb.png'
};
bookmark[2][4] = {
	'title':'vimeo',
	'url':'http://vimeo.com',
	'thumb':'vimeo.png'
};
bookmark[2][5] = {
	'title':'lifehacker',
	'url':'http://lifehacker.com/',
	'thumb':'lifehacker.png'
};
bookmark[2][6] = {
	'title':'engadged',
	'url':'http://www.engadget.com/',
	'thumb':'engadget.png'
};
bookmark[2][7] = {
	'title':'zune',
	'url':'http://www.zune.net/',
	'thumb':'zune.png'
};
bookmark[2][8] = {
	'title':'dropbox',
	'url':'http://www.dropbox.com/',
	'thumb':'dropbox.png'
};
bookmark[2][9] = {
	'title':'National Geographic',
	'url':'http://www.nationalgeographic.com/',
	'thumb':'natgeo.png'
};
bookmark[2][10] = {
	'title':'CBC news',
	'url':'http://www.cbc.ca/news/',
	'thumb':'cbcnews.png'
};
bookmark[2][11] = {
	'title':'weather.com',
	'url':'http://www.weather.com/',
	'thumb':'weather.png'
};