module.exports = {
  title: `irene1125.com`,
  description: `이것저것 다 공부하는 사람입니다`,
  language: `ko`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: `https://www.zoomkoding.com`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: ``, // `zoomkoding/zoomkoding-gatsby-blog`,
    },
  },
  ga: '0', // Google Analytics Tracking ID
  author: {
    name: `곽서현`,
    bio: {
      role: `개발자`,
      description: ['사람에 가치를 두는', '능동적으로 일하는', '이로운 것을 만드는'],
      thumbnail: 'sample.png', // Path to the image in the 'asset' folder
    },
    social: {
      github: ``, // `https://github.com/irene1125`,
      linkedIn: 'https://www.linkedin.com/in/jinhyeok-jeong-800871192',
      email: ``, // `seohyun0221@gmail.com`,
    },
  },

  // metadata for About Page
  about: {
    timestamps: [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      {
        date: '',
        activity: '',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        date: '2020.07 ~',
        activity: '개인 블로그 개발 및 운영',
        links: {
          post: 'https://blog.naver.com/seohyun0221/222039482950',
          github: 'https://github.com/zoomkoding/zoomkoding-gatsby-blog',
          //demo: 'https://www.zoomkoding.com',
        },
      },
      {
        date: '2020.02 ~ 2021.06',
        activity: '감성분석 연구 진행 및 논문 작성',
        links: {
          post: 'https://slow-soy-f91.notion.site/0781094d8dc34e45a4960794cb2f495c',
        },
      },
      {
        date: '2021.01',
        activity: 'AWS 클라우드 컴퓨팅 전문가 과정 이수',
      },
      {
        date: '2022.07 ~ 2022.12',
        activity: 'SSAFY 8기 상반기 이수',
        links: {
          post: 'https://velog.io/@seohyun0221',
        },
      },
    ],

    projects: [
      // =====        [Project Sample and Structure]        =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!)  =====
      {
        title: '',
        description: '',
        techStack: ['', ''],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        title: '개발 블로그 테마 개발',
        description:
          '개발 블로그를 운영하는 기간이 조금씩 늘어나고 점점 많은 생각과 경험이 블로그에 쌓아가면서 제 이야기를 담고 있는 블로그를 직접 만들어보고 싶게 되었습니다. 그동안 여러 개발 블로그를 보면서 좋았던 부분과 불편했던 부분들을 바탕으로 레퍼런스를 참고하여 직접 블로그 테마를 만들게 되었습니다.',
        techStack: ['gatsby', 'react'],
        thumbnailUrl: 'blog.png',
        links: {
          post: '/gatsby-starter-zoomkoding-introduction',
          github: 'https://github.com/zoomkoding/zoomkoding-gatsby-blog',
          demo: 'https://www.zoomkoding.com',
        },
      },
    ],
  },
};
