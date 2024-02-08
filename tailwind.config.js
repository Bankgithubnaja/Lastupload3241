/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],

  theme: {
    extend: {
      "textColor":'white',
      "screens": {
        'ssm': '330px',
        'sxm': '425px'
      },
      "colors":{
        'backchoco': '#0e0e0e'
      },
      "width":{
        '8xl': '1320px'
      },
      "height":{
        '2p': '540px'
      },
      "backgroundImage":{
        'TheDanger':"url(https://jpbookstore.com/cdn/shop/products/81S6552iFTL._SL1500.jpg?v=1696840712)",
        'titan':"url(https://m.media-amazon.com/images/I/61zf5-HZ0XL._AC_UF894,1000_QL80_.jpg)",
        'hai':"url(https://assets1.ignimgs.com/2018/12/11/haikyu-button-ph-1544570213617.jpg)",
        'doc':"url(https://m.media-amazon.com/images/M/MV5BYmU2MzEyMjAtOTQ5Yy00NGMxLTg0NmItMTQ0ZTM5OGY0NjUzXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg)",
        'mashel':"url(https://m.media-amazon.com/images/M/MV5BZDE0ZTRhMTQtMTIzNC00NjY4LTllMmEtYjY4Y2ZlZmZlODU0XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_FMjpg_UX1000_.jpg)",
        'frie':"url(https://m.media-amazon.com/images/M/MV5BMjVjZGU5ZTktYTZiNC00N2Q1LThiZjMtMDVmZDljN2I3ZWIwXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg)",
        'clover':"url(https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/e108ae17d8d0407417cac40eb52d849a.jpe)",
        'Jujut':"url(https://m.media-amazon.com/images/M/MV5BNGY4MTg3NzgtMmFkZi00NTg5LWExMmEtMWI3YzI1ODdmMWQ1XkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_.jpg)",
        'Baki': "url(https://i.pinimg.com/originals/b5/5b/30/b55b30e9611b29432a00a0a17c96e166.jpg)",
        'Back1': "url(https://static.promediateknologi.id/crop/9x256:749x775/0x0/webp/photo/p2/113/2023/10/09/6-fakta-menarik-jujutsu-kaisen-1105502653.jpg)",
        'Back2': "url(https://fictionhorizon.com/wp-content/uploads/2022/12/VSS1.jpg)",
        'Back3': "url(https://a.storyblok.com/f/178900/2349x1322/f3195c617e/goblin-slayer-season-2-key-art.png)",
        'Back4': "url(https://i0.wp.com/news.qoo-app.com/en/wp-content/uploads/sites/3/2023/03/Solo_Leveling_Arise_Website_Feature-1-1.jpg)",
        'Back5': "url(https://www.lacasadeel.net/wp-content/uploads/2022/12/Bleach-anime-2023-1.webp)"
      }
    },
  },
  plugins: [],
}