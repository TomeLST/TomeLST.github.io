const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: "花海",
        artist: 'JayChou',
        url: 'http://www.shiyinren.com/kw/antiserver.kuwo.cn/anti.s?rid=MUSIC_440615&response=res&format=mp3|aac&type=convert_url&br=128kmp3&agent=iPhone&callback=getlink&jpcallback=getlink.mp3',
        cover: 'http://ww1.sinaimg.cn/large/6a011e49ly1g4ae7xvaiwj20tc0xc0y2.jpg',
      },
      {
        name: '东风破',
        artist: 'JayChou',
        url: 'http://www.shiyinren.com/kw/antiserver.kuwo.cn/anti.s?rid=MUSIC_79479&response=res&format=mp3|aac&type=convert_url&br=128kmp3&agent=iPhone&callback=getlink&jpcallback=getlink.mp3',
        cover: 'http://ww1.sinaimg.cn/large/6a011e49ly1g4ae7xoj0bj20oy0xcdkp.jpg',
      },
      {
        name: '爱在西元前',
        artist: 'JayChou',
        url: 'http://www.shiyinren.com/kw/antiserver.kuwo.cn/anti.s?rid=MUSIC_588552&response=res&format=mp3|aac&type=convert_url&br=128kmp3&agent=iPhone&callback=getlink&jpcallback=getlink.mp3',
        cover: 'http://ww1.sinaimg.cn/large/6a011e49ly1g4ae7xro33j20u00wraf8.jpg',
      },
      {
        name: '兰亭序',
        artist: 'JayChou',
        url: 'http://www.shiyinren.com/kw/antiserver.kuwo.cn/anti.s?rid=MUSIC_174338259&response=res&format=mp3|aac&type=convert_url&br=128kmp3&agent=iPhone&callback=getlink&jpcallback=getlink.mp3',
        cover: 'http://ww1.sinaimg.cn/large/6a011e49ly1g4ae7xoj0bj20oy0xcdkp.jpg',
      }
    ]
});