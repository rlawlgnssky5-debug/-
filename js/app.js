const KAKAO_FALLBACK = "http://pf.kakao.com/_GbExjX/chat"

const PRODUCTS = {
  solo: {
    key: "solo", category: "song", kicker: "SOLO WEDDING SONG", title: "솔로 축가 녹음",
    sub: "미리 완성한 목소리를 AR로 함께 틀어 본식에서는 더 안정적으로, 녹음한 노래는 오래도록 남깁니다",
    normal: 120000,
    oneLine: "떨리는 축가를 미리 준비하고 본식에서는 더 안정적으로",
    useCases: ["결혼하는 당사자가 직접 부르는 축가", "친구의 결혼식에서 불러주는 축가"],
    highlights: [
      ["본식에 맞춘 AR", "미리 녹음한 목소리의 비율을 조절해 현장에서 함께 부를 수 있도록 준비합니다"],
      ["긴장되는 순간도 안정적으로", "메이크업과 예식 진행으로 긴장되는 순간에도 완성된 음원이 목소리를 자연스럽게 받쳐줍니다"],
      ["한 번 녹음하고 오래도록", "완성된 음원은 본식 이후에도 간직하고 다른 축가 자리에서도 다시 사용할 수 있습니다"]
    ],
    audiences: ["본식에서 직접 축가를 부르고 싶은 신랑·신부", "친구의 결혼식에서 실수 없이 마음을 전하고 싶은 분", "한 번 녹음한 축가를 오래 간직하고 싶은 분"],
    expertise: [["1대1 보컬 디렉팅", "처음 녹음하는 분도 한 구간씩 편하게 부를 수 있도록 안내합니다"], ["자연스러운 보컬 보정", "원래 목소리는 살리고 음정과 박자만 필요한 만큼 다듬습니다"], ["본식 현장에 맞춘 제작", "예식장 재생 환경과 실제 축가 상황을 고려해 완성합니다"]],
    concerns: [
      ["노래를 잘 못해도 괜찮을까요", "1대1 디렉팅과 수작업 보정으로 원래 목소리를 살려 자연스럽게 완성합니다"],
      ["본식에서 긴장할 것 같아요", "미리 완성된 음원을 준비해 당일에는 더 안정적으로 마음을 전할 수 있습니다"],
      ["어떤 키가 맞는지 모르겠어요", "음역을 확인하고 가장 편하게 부를 수 있는 키를 함께 정합니다"]
    ],
    steps: [
      ["상담 · 곡 선정", "곡과 키, 사용 시점과 원하는 분위기를 함께 정합니다"],
      ["1대1 녹음 디렉팅", "엔지니어가 옆에서 한 구간씩 안내하며 편하게 녹음합니다"],
      ["음정 · 박자 보정", "원래 목소리는 살리고 필요한 부분만 정교하게 다듬습니다"],
      ["믹싱 · 마스터링", "본식에서 바로 사용할 수 있는 최종 음원으로 완성합니다"]
    ],
    included: ["녹음 및 1대1 디렉팅", "음정 · 박자 보정", "믹싱 · 마스터링", "최종 음원 전달"],
    faq: [
      ["노래를 잘 못해도 가능한가요", "가능합니다 녹음 디렉팅과 보정으로 편안하게 부를 수 있도록 안내하고 자연스럽게 완성합니다"],
      ["키도 정해주시나요", "현재 음역을 확인해 편하게 부를 수 있는 키를 함께 정할 수 있습니다"],
      ["결과물은 무엇인가요", "음정·박자 보정과 믹싱·마스터링이 완료된 최종 음원을 전달합니다"]
    ]
  },
  duo: {
    key: "duo", category: "song", kicker: "DUET WEDDING SONG", title: "2인 축가",
    sub: "두 사람의 음역과 파트, 화음을 맞춰 자연스럽고 안정적인 듀엣 축가 음원으로 완성합니다",
    normal: 160000,
    oneLine: "두 사람의 목소리를 미리 맞추고 본식에서는 더 편안하게",
    useCases: ["신랑신부가 함께 부르는 축가", "두 친구가 함께 준비하는 축가"],
    highlights: [
      ["두 목소리에 맞춘 AR", "파트와 화음을 정리한 완성 음원을 현장에 맞는 비율로 틀어 더욱 안정적으로 부를 수 있습니다"],
      ["본식 현장에 맞춘 사운드", "예식장 재생 환경을 고려한 믹싱과 자연스러운 마스터링으로 준비합니다"],
      ["다시 꺼내 듣는 듀엣", "예식이 끝난 뒤에도 두 사람이 함께 부른 노래는 온전한 음원으로 남습니다"]
    ],
    audiences: ["신랑신부가 함께 축가를 부르고 싶은 두 분", "파트와 화음을 안정적으로 맞추고 싶은 두 분", "함께 부른 노래를 완성 음원으로 남기고 싶은 두 분"],
    expertise: [["두 사람을 위한 디렉팅", "서로 다른 음역에 맞춰 파트와 화음을 편하게 정리합니다"], ["두 목소리의 자연스러운 조화", "각자의 목소리는 살리면서 한 곡 안에서 자연스럽게 어우러지도록 보정합니다"], ["본식 현장에 맞춘 제작", "예식장에서 안정적으로 들릴 수 있도록 믹싱과 마스터링을 진행합니다"]],
    concerns: [
      ["둘의 음역이 달라요", "파트와 키를 나눠 두 분 모두 편하게 부를 수 있도록 구성합니다"],
      ["화음을 넣고 싶은데 어려워요", "필요한 구간의 화음과 파트 구성을 함께 정리합니다"],
      ["둘 다 녹음이 처음이에요", "파트별로 나눠 천천히 녹음한 뒤 두 목소리를 자연스럽게 합칩니다"]
    ],
    steps: [
      ["상담 · 곡 선정", "두 분의 음역에 맞춰 곡과 키, 파트 구성을 함께 정합니다"],
      ["1대1 녹음 디렉팅", "각자 부를 부분과 함께 부를 부분을 안내하며 녹음합니다"],
      ["음정 · 박자 보정", "두 분의 목소리와 화음이 자연스럽게 들리도록 다듬습니다"],
      ["믹싱 · 마스터링", "두 목소리가 음악 안에서 자연스럽게 어우러지는 최종 음원으로 완성합니다"]
    ],
    included: ["두 사람 녹음 및 디렉팅", "파트 · 화음 구성", "음정 · 박자 보정", "믹싱 · 마스터링", "최종 음원 전달"],
    faq: [
      ["둘 다 노래를 잘 못해도 괜찮나요", "두 분의 음역과 분위기에 맞춰 파트를 나누고 필요한 부분을 자연스럽게 보정합니다"],
      ["파트 분배도 도와주시나요", "곡에 맞춰 함께 부를 부분과 나눠 부를 부분을 안내합니다"],
      ["화음도 가능한가요", "곡과 두 분의 음역에 맞춰 가능한 범위에서 화음 구성을 도와드립니다"]
    ]
  },
  wedding: {
    key: "wedding", category: "wedding", kicker: "DUET WEDDING FILM", title: "듀엣 식전 영상",
    sub: "직접 부른 노래에 하객 메시지와 인터뷰, 둘만의 추억과 서로에게 전하는 편지를 담아 한 편의 이야기로 완성합니다",
    normal: 290000,
    videoUrl: "https://www.youtube.com/embed/5ZuTmQWCRJk?rel=0",
    oneLine: "우리의 이야기와 목소리로 하객에게 건네는 첫인사",
    useCases: ["식전 영상", "식중 영상", "신랑신부가 준비한 듀엣 축가 영상"],
    highlights: [
      ["노래가 아닌 이야기가 흐르는 영상", "사진과 가사만 이어지는 영상이 아니라 하객 메시지부터 인터뷰, 뮤직비디오 클립과 편지까지 두 분만의 서사를 담습니다"],
      ["축가 섭외 없이도 특별하게", "축가 순서에 영상을 상영해 신랑신부가 직접 준비한 특별한 축가로 소개할 수 있습니다"],
      ["영상이 끝난 뒤에도 남는 목소리", "두 분이 직접 부른 노래는 별도의 완성 음원으로 남아 언제든 다시 들을 수 있습니다"]
    ],
    audiences: ["사진과 가사만 나오는 평범한 식전영상이 아쉬운 두 분", "두 사람의 이야기와 목소리를 함께 남기고 싶은 두 분", "축가 섭외 없이 축가 시간을 특별하게 채우고 싶은 두 분", "예식이 끝난 뒤에도 꺼내 볼 영상을 원하는 두 분"],
    expertise: [["1대1 보컬 디렉팅", "처음 녹음하는 두 분도 편하게 부를 수 있도록 파트별로 안내합니다"], ["자연스러운 보컬 보정", "두 분의 원래 목소리는 살리고 음정과 박자를 섬세하게 다듬습니다"], ["웨딩에 맞춘 스토리 구성", "식전·식중 또는 축가 순서에 맞춰 이야기의 흐름을 설계합니다"], ["녹음부터 영상까지 한 번에", "음원 제작과 인터뷰·촬영·영상 편집을 하나의 과정으로 진행합니다"]],
    concerns: [
      ["둘 다 노래에 자신이 없어요", "파트 구성과 1대1 디렉팅, 보컬 보정으로 안정감 있게 완성합니다"],
      ["둘만의 특별한 추억을 남기고 싶어요", "두 사람의 목소리와 이야기를 한 편의 영상으로 담습니다"],
      ["직접 부르기에는 부담스러워요", "미리 녹음하고 제작한 영상으로 예식에서 편안하게 상영할 수 있습니다"],
      ["너무 오글거릴까 걱정돼요", "담백한 무드부터 감성적인 연출까지 두 분에게 맞게 조절합니다"]
    ],
    steps: [
      ["상담 · 곡 선정", "곡과 키, 두 분이 부를 부분과 예식에서 사용할 시점을 정합니다"],
      ["1대1 녹음 디렉팅", "두 분의 음역에 맞춰 파트별로 안내하며 녹음합니다"],
      ["인터뷰 · 영상 촬영", "두 분의 이야기와 자연스러운 모습을 영상으로 담습니다"],
      ["음정 · 박자 보정", "원래 목소리는 살리고 필요한 부분을 정교하게 다듬습니다"],
      ["믹싱 · 영상 편집", "완성된 음원과 촬영본을 하나의 웨딩 필름으로 마무리합니다"]
    ],
    composition: [
      ["하객 메시지", "두 분의 새로운 시작을 함께해 주신 하객에게 감사의 인사를 전합니다", "assets/img/wedding/01-guest-message.png"],
      ["두 사람의 인터뷰", "처음 만난 순간과 함께하며 달라진 점처럼 두 분만이 들려줄 수 있는 이야기를 담습니다", "assets/img/wedding/02-interview.png"],
      ["립싱크 뮤직비디오", "직접 완성한 노래에 맞춰 두 분이 함께 부르는 모습을 한 편의 뮤직비디오처럼 구성합니다", "assets/img/wedding/03-lipsync-mv.png"],
      ["녹음 메이킹 영상", "서로의 목소리를 맞추고 노래를 완성해 가는 자연스러운 녹음 과정을 보여드립니다", "assets/img/wedding/04-recording-making.png"],
      ["우리 둘의 사진", "처음 만난 날부터 결혼을 준비하는 지금까지 두 분의 추억을 완성된 노래와 함께 보여드립니다", "assets/img/wedding/05-couple-memories.png"],
      ["서로에게 전하는 편지", "영상의 마지막에는 노래만으로 다 전하지 못한 진심을 서로의 목소리로 남깁니다", ["assets/img/wedding/06-letter.webp", "assets/img/wedding/06-letter-groom.webp"]]
    ],
    included: ["녹음 및 1대1 디렉팅", "커플 인터뷰", "외부 스튜디오 촬영", "음정 · 박자 보정", "믹싱 · 마스터링", "영상 편집", "예식장 상영용 최종본 전달"],
    faq: [
      ["둘 다 노래를 잘 못해도 괜찮나요", "두 분의 음역과 분위기에 맞춰 파트를 나누고 음정·박자 보정과 믹싱으로 듣기 좋게 완성합니다"],
      ["촬영이 어색하면 어떡하나요", "과한 연출보다 서로 마주 보는 장면과 녹음하는 모습 등 자연스러운 분위기로 진행합니다"],
      ["결혼식 식전영상으로 사용할 수 있나요", "가능합니다 완성본은 예식장에서 상영 가능한 영상 파일로 전달합니다"]
    ]
  },
  "duet-film": {
    key: "duet-film", category: "wedding", kicker: "DUET WEDDING SONG FILM", title: "듀엣 축가 영상",
    sub: "축가 섭외 대신 신랑신부가 함께 부른 노래와 영상을 축가 순서에 상영할 수 있도록 완성합니다",
    normal: 290000,
    videoUrl: "https://www.youtube.com/embed/aSKrlQwmnHI?rel=0",
    inlineVideo: false,
    resultCopy: "두 분이 함께 부른 완성 음원과 축가 순서에 바로 상영할 수 있는 영상 파일로 전달합니다",
    oneLine: "무대에 서지 않아도 우리의 목소리로 완성하는 특별한 축가",
    useCases: ["본식 축가 순서", "신랑신부가 함께 준비하는 영상 축가"],
    highlights: [
      ["축가 섭외 없이 두 사람이 직접", "다른 사람의 축가가 아니라 신랑신부가 함께 부른 노래로 축가 시간을 채웁니다"],
      ["라이브 부담 없이 영상으로", "본식 현장에서 직접 부르지 않아도 완성된 노래와 영상으로 자연스럽게 상영할 수 있습니다"],
      ["예식이 끝난 뒤에도 남는 듀엣", "두 사람이 함께 부른 완성 음원과 영상은 본식 이후에도 오래 간직할 수 있습니다"]
    ],
    audiences: ["축가 섭외 대신 직접 준비한 축가를 들려주고 싶은 신랑신부", "본식에서 라이브로 부르는 것이 부담스러운 두 분", "함께 부른 노래와 영상을 오래 남기고 싶은 두 분"],
    expertise: [["두 사람을 위한 보컬 디렉팅", "서로 다른 음역에 맞춰 파트와 화음을 편하게 정리합니다"], ["자연스러운 듀엣 보정", "각자의 목소리는 살리면서 한 곡 안에서 자연스럽게 어우러지도록 다듬습니다"], ["축가 순서에 맞춘 영상 편집", "사회자 소개 직후 바로 상영할 수 있도록 본식 흐름에 맞춰 완성합니다"], ["음원과 영상을 한 번에", "듀엣 녹음부터 믹싱·마스터링과 영상 편집까지 하나의 과정으로 진행합니다"]],
    concerns: [
      ["축가를 따로 섭외하기 어려워요", "신랑신부가 직접 부른 노래와 영상으로 축가 시간을 완성할 수 있습니다"],
      ["본식에서 직접 부르기에는 부담스러워요", "미리 완성한 영상을 상영하므로 당일 라이브 부담을 덜 수 있습니다"],
      ["둘의 음역과 실력이 달라요", "파트와 키를 조정하고 필요한 부분을 보정해 두 목소리를 자연스럽게 맞춥니다"],
      ["축가 영상이 어색할까 걱정돼요", "녹음 장면과 립싱크 컷, 두 분의 추억을 노래 흐름에 맞춰 담백하게 구성합니다"]
    ],
    steps: [
      ["상담 · 곡 선정", "본식 분위기와 두 분의 음역에 맞는 곡과 파트를 정합니다"],
      ["듀엣 녹음 · 디렉팅", "각자 부를 부분과 함께 부를 부분을 나누어 편하게 녹음합니다"],
      ["음정 · 박자 보정", "두 분의 원래 목소리를 살리며 파트와 화음을 자연스럽게 다듬습니다"],
      ["영상 촬영 · 자료 구성", "녹음 메이킹과 립싱크 장면, 함께한 사진을 노래에 맞춰 준비합니다"],
      ["축가 영상 편집 · 전달", "축가 순서에 바로 상영할 수 있는 최종 영상과 음원으로 전달합니다"]
    ],
    compositionTitle: "듀엣 축가 영상은 이렇게 구성됩니다",
    compositionDescription: "두 분의 이야기부터 함께 완성한 노래까지, 한 편의 축가 영상으로 자연스럽게 이어집니다",
    composition: [
      ["하객 메시지", "두 분의 새로운 시작을 함께해 주신 하객에게 감사의 인사를 전합니다", "assets/img/duet-film/duet-guest-message.webp"],
      ["두 사람의 인터뷰", "처음 만난 순간과 서로에게 어떤 사람이 되고 싶은지 두 분만의 이야기를 담습니다", "assets/img/duet-film/duet-interview.webp"],
      ["우리 둘의 사진과 영상", "처음 만난 날부터 지금까지 함께한 사진과 영상을 노래의 흐름에 맞춰 보여드립니다", "assets/img/duet-film/duet-memories.webp"],
      ["녹음 메이킹 필름", "서로의 목소리를 맞추고 노래를 완성해 가는 실제 녹음 과정을 담습니다", "assets/img/duet-film/duet-recording.webp"],
      ["노래 뮤비 클립", "직접 완성한 노래에 맞춰 두 분이 함께 부르는 모습을 뮤직비디오처럼 구성합니다", "assets/img/duet-film/duet-music-video.webp"],
      ["서로에게 전하는 편지", "영상의 마지막에는 노래만으로 다 전하지 못한 진심을 두 분의 목소리로 남깁니다", ["assets/img/duet-film/duet-letter-bride.webp", "assets/img/duet-film/duet-letter-groom.webp"]]
    ],
    included: ["두 사람 녹음 및 1대1 디렉팅", "파트 · 화음 구성", "음정 · 박자 보정", "믹싱 · 마스터링", "녹음 메이킹 및 립싱크 촬영", "영상 편집", "축가 상영용 최종본과 완성 음원 전달"],
    faq: [
      ["본식에서 직접 부르지 않아도 되나요", "가능합니다 축가 순서에 완성된 영상을 상영하는 상품입니다"],
      ["둘 다 노래를 잘 못해도 괜찮나요", "파트를 나누어 녹음하고 필요한 부분을 자연스럽게 보정해 완성합니다"],
      ["식전영상과 무엇이 다른가요", "식전영상은 하객 메시지와 인터뷰, 편지로 두 분의 이야기를 전하고 듀엣 축가 영상은 노래와 뮤직비디오를 중심으로 축가 순서에 상영합니다"]
    ]
  },
  "solo-film": {
    key: "solo-film", category: "wedding", kicker: "SOLO WEDDING SONG FILM", title: "솔로 축가 영상",
    sub: "신랑 또는 신부 한 사람이 직접 부른 노래를 영상으로 완성해 본식 축가 순서에 상영합니다",
    normal: 200000,
    resultCopy: "한 사람이 직접 부른 완성 음원과 본식 축가 순서에 바로 상영할 수 있는 영상 파일로 전달합니다",
    oneLine: "직접 부르는 부담은 덜고 내 목소리로 전하는 축가",
    useCases: ["본식 축가 순서", "신랑이 신부에게 전하는 영상 축가", "신부가 신랑에게 전하는 영상 축가"],
    highlights: [
      ["상대에게 직접 전하는 한 곡", "축가 가수 대신 신랑 또는 신부가 직접 부른 목소리로 마음을 전합니다"],
      ["긴장되는 본식에는 영상으로", "메이크업과 예식 진행으로 여유가 없는 당일에는 완성된 영상만 편안하게 상영합니다"],
      ["한 번 부른 노래를 오래도록", "완성된 음원과 영상은 본식 이후에도 두고두고 다시 볼 수 있습니다"]
    ],
    audiences: ["본식에서 상대에게 직접 부른 축가를 전하고 싶은 분", "하객 앞에서 라이브로 부르는 것이 부담스러운 분", "노래와 영상으로 특별한 모습을 남기고 싶은 분"],
    expertise: [["1대1 보컬 디렉팅", "처음 녹음하는 분도 한 구간씩 편하게 부를 수 있도록 안내합니다"], ["자연스러운 보컬 보정", "본래 목소리와 감정은 살리고 음정과 박자만 필요한 만큼 다듬습니다"], ["축가 순서에 맞춘 영상 구성", "노래가 중심이 되도록 촬영 장면과 사진을 간결하게 편집합니다"], ["녹음부터 영상까지 한 번에", "완성 음원과 영상 상영본을 함께 준비합니다"]],
    concerns: [
      ["하객 앞에서 직접 부르기에는 떨려요", "본식 전에 녹음과 촬영을 마치고 당일에는 완성 영상을 상영할 수 있습니다"],
      ["노래를 잘 못해도 괜찮을까요", "1대1 디렉팅과 자연스러운 보정으로 본래 목소리를 살려 완성합니다"],
      ["영상이 프로포즈처럼 보일까 걱정돼요", "고백 중심의 프로포즈 영상과 달리 축가 곡과 본식 상영 흐름을 중심으로 구성합니다"],
      ["본식 일정이 바빠 준비가 걱정돼요", "녹음과 촬영, 편집을 한 번에 진행해 준비할 일을 줄여드립니다"]
    ],
    steps: [
      ["상담 · 곡 선정", "전하고 싶은 분위기와 음역에 맞춰 축가 곡과 키를 정합니다"],
      ["솔로 녹음 · 디렉팅", "한 구간씩 안내받으며 편하게 노래를 녹음합니다"],
      ["음정 · 박자 보정", "감정과 목소리는 살리며 필요한 부분을 자연스럽게 다듬습니다"],
      ["영상 촬영 · 자료 구성", "립싱크 장면과 녹음 메이킹, 두 분의 사진을 준비합니다"],
      ["축가 영상 편집 · 전달", "본식 축가 순서에 바로 상영할 수 있는 영상과 음원으로 전달합니다"]
    ],
    compositionTitle: "한 사람의 축가는 이렇게 완성됩니다",
    compositionDescription: "한 사람의 목소리와 상대에게 전하고 싶은 마음이 중심이 됩니다",
    composition: [
      ["한 사람의 완성 음원", "신랑 또는 신부 한 사람이 부른 노래를 자연스럽게 보정하고 믹싱·마스터링합니다", "assets/img/proposal-scene-01.jpg"],
      ["녹음과 인터뷰 장면", "상대를 위해 한 곡을 준비하고 마음을 전하는 실제 모습을 담습니다", "assets/img/proposal-scene-03.jpg"],
      ["노래 중심의 영상 구성", "완성된 노래와 직접 촬영한 장면을 곡의 흐름에 맞춰 간결하게 편집합니다", "assets/img/proposal-scene-02.jpg"],
      ["본식 축가 상영본", "사회자 소개 뒤 바로 재생할 수 있는 영상과 별도의 완성 음원으로 전달합니다", "assets/img/proposal-scene-04.jpg"]
    ],
    included: ["솔로 녹음 및 1대1 디렉팅", "음정 · 박자 보정", "믹싱 · 마스터링", "녹음 메이킹 및 립싱크 촬영", "사진 자료 구성", "영상 편집", "축가 상영용 최종본과 완성 음원 전달"],
    faq: [
      ["본식에서 직접 부르지 않아도 되나요", "가능합니다 축가 순서에 완성된 영상을 상영하도록 제작합니다"],
      ["프로포즈 영상과 무엇이 다른가요", "프로포즈 영상은 고백과 편지를 중심으로 구성하고 솔로 축가 영상은 노래와 본식 상영을 중심으로 구성합니다"],
      ["완성 음원도 받을 수 있나요", "영상과 함께 보컬 보정과 믹싱·마스터링이 완료된 최종 음원을 전달합니다"]
    ]
  },
  proposal: {
    key: "proposal", category: "proposal", kicker: "PROPOSAL FILM", title: "프로포즈 / 답프로포즈",
    sub: "직접 부른 노래와 인터뷰, 전하는 편지를 하나로 엮어 가장 개인적인 고백을 한 편의 필름으로 완성합니다",
    normal: 200000,
    videoUrl: "https://www.youtube.com/embed/pTBfPEWlyZU?rel=0",
    inlineVideo: true,
    oneLine: "직접 부른 노래와 우리의 추억으로 마음을 전하는 프로포즈 영상",
    useCases: ["프로포즈", "답프로포즈", "결혼식 축가 영상"],
    highlights: [
      ["그날의 고백이 노래로 남도록", "그때 전하고 싶었던 이야기를 직접 부른 음원과 영상으로 오래 간직할 수 있습니다"],
      ["한 번의 녹음, 여러 번의 순간", "완성 음원은 프로포즈 이후에도 축가 영상이나 본식 라이브 축가에 다시 사용할 수 있습니다"],
      ["나중의 축가까지 미리 준비", "보컬이 포함된 AR 버전을 함께 준비하면 본식이나 친구의 결혼식에서도 더 안정적으로 부를 수 있습니다"]
    ],
    audiences: ["평범한 선물보다 직접 만든 고백을 전하고 싶은 분", "둘만의 사진과 이야기를 한 편의 영상으로 남기고 싶은 분", "프로포즈 때 부른 노래를 결혼식에서도 다시 사용하고 싶은 분"],
    expertise: [["1대1 보컬 디렉팅", "노래가 익숙하지 않아도 한 구간씩 편하게 녹음할 수 있도록 안내합니다"], ["자연스러운 보컬 보정", "전하고 싶은 감정은 살리면서 음정과 박자를 섬세하게 다듬습니다"], ["고백에 맞춘 스토리 구성", "두 분의 추억과 편지가 자연스럽게 이어지도록 구성합니다"], ["녹음부터 영상까지 한 번에", "완성 음원과 녹음 메이킹·사진·편지 영상을 함께 제작합니다"]],
    concerns: [
      ["노래를 잘 못해도 괜찮을까요", "1대1 디렉팅과 음정·박자 보정, 믹싱으로 자연스럽게 다듬습니다"],
      ["혼자 준비하는 것이 막막해요", "곡 선택부터 녹음과 촬영까지 필요한 모든 과정을 함께 안내합니다"],
      ["편지만으로는 부족한 것 같아요", "직접 부른 목소리와 영상으로 마음을 더 선명하게 전합니다"],
      ["프로포즈가 너무 평범할까 걱정돼요", "두 분만의 이야기로 세상에 하나뿐인 영상 선물을 완성합니다"]
    ],
    steps: [
      ["상담 · 곡 선정", "전하고 싶은 분위기와 사용할 곡, 촬영 방향을 함께 정합니다"],
      ["1대1 녹음 디렉팅", "엔지니어가 옆에서 한 구간씩 안내하며 편하게 녹음합니다"],
      ["인터뷰 촬영", "처음 만난 순간과 고백하고 싶은 이유를 자연스럽게 담습니다"],
      ["편지 영상 촬영", "노래만으로 다 전하지 못한 마음을 편지 영상으로 남깁니다"],
      ["보컬 보정 · 영상 편집", "음정·박자 보정과 믹싱, 영상 편집 후 최종 필름으로 완성합니다"]
    ],
    compositionTitle: "고백은 이렇게 완성됩니다",
    compositionDescription: "실제 프로포즈 필름의 노래와 인터뷰, 편지 장면으로 확인해 보세요",
    composition: [
      ["직접 부른 노래", "한 사람만을 위해 직접 부른 노래로 마음을 전합니다", "assets/img/proposal-scene-01.jpg"],
      ["마음을 담은 인터뷰", "처음 만난 순간과 함께하고 싶은 이유를 자신의 말로 남깁니다", "assets/img/proposal-scene-03.jpg"],
      ["고백을 준비하는 순간", "노래와 메시지를 준비하는 진솔한 모습을 영상 안에 담습니다", "assets/img/proposal-scene-04.jpg"],
      ["마지막에 전하는 편지", "노래만으로 다 전하지 못한 마음을 영상의 마지막에 전합니다", "assets/img/proposal-scene-02.jpg"]
    ],
    included: ["녹음 1시간", "내부 스튜디오 촬영 1시간", "인터뷰 및 편지 촬영", "음정 · 박자 보정", "믹싱 · 마스터링", "영상 편집", "최종 필름 전달"],
    faq: [
      ["노래를 잘 못해도 가능한가요", "가능합니다 녹음 디렉팅과 음정·박자 보정, 믹싱으로 자연스럽게 다듬습니다"],
      ["혼자 준비해도 어렵지 않나요", "곡 선택과 녹음 방향, 촬영 구성까지 필요한 부분을 함께 안내합니다"],
      ["편지나 메시지도 넣을 수 있나요", "직접 쓴 편지와 전하고 싶은 말을 영상 안에 자연스럽게 담을 수 있습니다"],
      ["프로포즈 현장에서 바로 틀 수 있나요", "현장에서 상영 가능한 영상 파일로 전달하며 사용 날짜가 정해져 있다면 상담 시 먼저 확인합니다"]
    ]
  }
}

const EVENTS = [
  { key: "blog", label: "블로그 리뷰", discount: 30000, detail: "일 방문자 100명 이상 · 안내 가이드에 따라 작성" },
  { key: "reaction", label: "현장 리액션 영상", discount: 10000, detail: "본식 현장 촬영 파일 제공" },
  { key: "cafe", label: "웨딩 카페 후기", discount: 10000, detail: "300자 이상 · 관련 사진 4장 이상" },
  { key: "instagram", label: "인스타그램 후기", discount: 10000, detail: "후기 50자 이상 · 사진 4장 이상 · BGM 추가 · 공식 계정 태그 · 공개 계정" }
]

const ACTUAL_REVIEW_IMAGES = Array.from({ length: 11 }, (_, index) => `assets/img/reviews/review-${String(index + 1).padStart(2, "0")}.png`)

const DETAIL_STORIES = {
  wedding: [
    ["01 · WHY THIS FILM", "흔한 식전영상은 많지만<br><span>우리 목소리로 만든 이야기는 하나뿐</span>", "사진과 가사만 이어지는 영상이 아니라 하객의 축하와 두 사람의 인터뷰, 추억과 편지가 한 편의 이야기로 흐릅니다"],
    ["02 · AFTER THE DAY", "예식이 끝난 뒤에도<br><span>우리가 부른 노래는 남습니다</span>", "본식에서는 하객과 함께 보고 예식이 끝난 뒤에는 두 사람이 직접 부른 완성 음원과 영상으로 다시 꺼내볼 수 있습니다"]
  ],
  "duet-film": [
    ["01 · WHY THIS FILM", "축가 섭외 대신<br><span>두 사람이 직접 준비한 한 곡</span>", "신랑신부가 함께 부른 노래와 녹음 메이킹, 립싱크 장면을 하나의 뮤직비디오로 완성해 축가 순서에 상영합니다"],
    ["02 · ON THE DAY", "무대에 서지 않아도<br><span>우리 목소리로 채우는 축가 시간</span>", "사회자의 소개 뒤 완성 영상을 재생하면 두 분이 직접 부르지 않아도 하객에게 특별한 축가를 전할 수 있습니다"]
  ],
  "solo-film": [
    ["01 · WHY THIS FILM", "축가 가수 대신<br><span>내 목소리로 직접 전하는 한 곡</span>", "신랑 또는 신부가 직접 부른 노래와 촬영 장면을 영상으로 완성해 상대와 하객에게 전합니다"],
    ["02 · ON THE DAY", "긴장되는 본식에는 영상으로<br><span>마음은 내 목소리 그대로</span>", "당일에는 무대에 설 부담 없이 완성 영상을 상영하고 직접 부른 음원과 영상은 본식 이후에도 오래 간직할 수 있습니다"]
  ],
  proposal: [
    ["01 · WHY THIS FILM", "준비된 고백은 많지만<br><span>내 목소리로 전하는 마음은 하나뿐</span>", "직접 부른 노래와 두 사람의 추억, 마지막 편지를 하나의 흐름으로 엮어 오직 한 사람을 위한 고백을 만듭니다"],
    ["02 · AFTER THE DAY", "프로포즈가 끝난 뒤에도<br><span>그날의 마음은 노래로 남습니다</span>", "완성된 음원과 영상은 프로포즈 이후에도 간직하고 결혼식 축가 영상이나 라이브 축가에 다시 사용할 수 있습니다"]
  ],
  solo: [
    ["01 · WHY RECORD", "축가는 한 번뿐이기에<br><span>실수보다 마음에 집중할 수 있도록</span>", "본식 전에 내 목소리를 미리 녹음하고 필요한 만큼 보정해 현장에서 안정적으로 함께 부를 수 있는 AR을 만듭니다"],
    ["02 · AFTER THE DAY", "긴장은 줄이고<br><span>내 목소리는 오래 남깁니다</span>", "완성된 음원은 본식 이후에도 계속 간직하고 다른 소중한 축가 자리에서도 다시 사용할 수 있습니다"]
  ],
  duo: [
    ["01 · WHY RECORD", "서로 다른 두 목소리를<br><span>한 곡 안에서 자연스럽게</span>", "각자의 음역에 맞춰 파트와 화음을 정리하고 두 사람 모두 편하게 부를 수 있도록 녹음합니다"],
    ["02 · AFTER THE DAY", "본식에서는 더 편안하게<br><span>함께 부른 노래는 오래도록</span>", "미리 완성한 듀엣 음원이 현장의 목소리를 받쳐주고 예식이 끝난 뒤에도 두 사람의 노래로 남습니다"]
  ]
}

const AR_PURPOSES = {
  self: {
    kicker: "WEDDING SONG AR",
    title: "직접 축가를 부르고 싶은데 실수가 걱정돼요",
    productTitle: "미리 준비하는 축가 AR",
    lead: "떨리는 축가를 미리 준비하고 본식에서는 더 안정적으로",
    useCase: "신랑 또는 신부가 자신의 결혼식에서 직접 부르는 축가",
    items: [
      ["본식 전 보컬 녹음", "본식 전에 부를 노래를 내 목소리로 미리 녹음합니다", "assets/img/ar-process/01-recording.webp"],
      ["완성된 AR 음원 제작", "현장에서 바로 재생할 수 있도록 보컬이 포함된 AR 음원으로 완성합니다", "assets/img/ar-process/02-mixing.webp"],
      ["AR 속 내 목소리 비율 선택", "30% · 50% · 70% · 100% 중 원하는 비율을 실제 음원으로 비교할 수 있습니다", "assets/img/ar-process/03-ratio.webp"],
      ["본식에서 함께 부르기", "미리 녹음한 내 목소리와 함께 현장에서 직접 노래합니다", "assets/img/ar-process/04-live.webp"]
    ]
  },
  friend: {
    kicker: "WEDDING SONG AR",
    title: "지인의 결혼식에서 축가를 부르는데 떨려요",
    productTitle: "미리 준비하는 축가 AR",
    lead: "소중한 사람의 결혼식에서 실수 부담은 줄이고 마음은 그대로",
    useCase: "친구나 지인의 결혼식에서 직접 불러주는 축가",
    items: [
      ["축가 사전 녹음", "결혼식에서 부를 축가를 미리 녹음합니다", "assets/img/ar-process/01-recording.webp"],
      ["완성된 AR 음원 제작", "현장에서 바로 재생할 수 있도록 보컬이 포함된 AR 음원으로 완성합니다", "assets/img/ar-process/02-mixing.webp"],
      ["AR 속 내 목소리 비율 선택", "30% · 50% · 70% · 100% 중 원하는 비율을 실제 음원으로 비교할 수 있습니다", "assets/img/ar-process/03-ratio.webp"],
      ["현장에서 함께 부르기", "미리 녹음한 내 목소리와 함께 결혼식 현장에서 직접 노래합니다", "assets/img/ar-process/04-live.webp"]
    ],
    options: [
      ["가사 영상 추가", "완성한 축가에 맞춰 예식장에서 바로 재생할 수 있는 가사 영상을 제작합니다", "+40,000원"],
      ["인원 추가", "두 명 이상이 함께 부를 경우 인원수와 파트 구성에 맞춰 녹음과 디렉팅을 추가합니다", "상담 후 안내"]
    ]
  }
}

const app = document.querySelector("#app")
const won = value => value.toLocaleString("ko-KR") + "원"
const escapeHtml = value => String(value).replace(/[&<>'"]/g, c => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", "'":"&#39;", '"':"&quot;" })[c])
let config = {accounts:{kakao:KAKAO_FALLBACK}}
let selectedEvents = new Set()
let selectedOptions = new Set()
let optionQuantities = {}
let currentEventProduct = "wedding"
let currentEventPurpose = ""
let chosenOption = ""
let voiceRatio = "50"
let ratioSwitchToken = 0
let consultationDraft = {source:"",name:"",eventDate:"",purpose:"",message:""}
let lastDialogFocus = null
let routeObserver
const dialog = document.querySelector("#mediaDialog")
const MENU = []
const SERVICE_ORDER = ["wedding","duet-film","solo-film","solo","duo","proposal"]
const SERVICE_META = {
  wedding:{type:"OUR STORY",label:"식전 영상",use:"예식 시작 전",who:"신랑신부 두 사람",result:"이야기가 있는 영상 + 완성 음원",short:"우리의 이야기를 들려주는 식전 영상",image:"assets/img/wedding/02-interview.webp"},
  "duet-film":{type:"OUR DUET",label:"듀엣 축가 영상",use:"본식 축가 순서",who:"신랑신부 두 사람",result:"본식 상영용 듀엣 축가 영상 MP4 + 보컬 보정·믹싱을 마친 완성 음원 WAV·MP3",short:"우리 둘의 노래로 채우는 축가 시간",image:"assets/img/song-film/duet-video-cover.jpg"},
  "solo-film":{type:"A SONG FOR YOU",label:"솔로 축가 영상",use:"본식 축가 순서",who:"신랑 또는 신부 한 사람",result:"본식 상영용 솔로 축가 영상 MP4 + 보컬 보정·믹싱을 마친 완성 음원 WAV·MP3",short:"한 사람이 직접 부른 노래를 영상으로",image:"assets/img/proposal-video-cover.jpg"},
  solo:{type:"YOUR VOICE, LIVE",label:"솔로 축가 녹음",use:"현장에서 직접 노래",who:"한 사람",result:"보컬 비율별 AR + 완성 음원",short:"떨리는 순간, 내 목소리를 받쳐주는 AR",image:"assets/img/song/solo.webp"},
  duo:{type:"TWO VOICES, LIVE",label:"2인 축가",use:"현장에서 직접 노래",who:"두 사람",result:"듀엣 AR + 완성 음원",short:"두 목소리와 화음을 미리 맞추는 축가",image:"assets/img/song/duo.webp"},
  proposal:{type:"ONLY FOR YOU",label:"프로포즈 / 답프로포즈",use:"둘만의 고백 순간",who:"마음을 전하는 한 사람",result:"프로포즈 상영용 영상 MP4 + 보컬 보정·믹싱을 마친 완성 음원 WAV·MP3",short:"말로 다 전하지 못한 마음을 한 편의 영상으로",image:"assets/img/proposal-video-cover.jpg"}
}
const PRODUCT_OPTIONS = {
  wedding:[
    {key:"bridal-ar",label:"신부 입장곡 AR · 립싱크 버전",detail:"미리 녹음해 완성한 신부 입장곡을 예식장에서 재생하고, 신부님께서는 노래에 맞춰 립싱크하며 입장하시면 됩니다 · 녹음 40분 + 튠·믹싱 40분",price:40000},
    {key:"rush",label:"3일 이내 빠른 작업",detail:"빠른 작업을 원하실 경우 선택해 주세요",price:30000},
    {key:"extra-revision",label:"추가 수정 안내",detail:"기본 수정 3회까지 무료이며 4회차부터는 수정 범위 확인 후 별도 안내드립니다",notice:true}
  ],
  "duet-film":[
    {key:"extra-shoot",label:"추가 촬영",detail:"기본 구성 외 촬영이 필요한 경우 상담으로 확인합니다"},
    {key:"extra-material",label:"사진·영상 자료 추가 구성",detail:"보유 자료를 더 활용하고 싶을 때 선택합니다"},
    {key:"extra-revision",label:"추가 수정",detail:"기본 수정 범위를 넘어서는 편집이 필요한 경우 상담으로 확인합니다"}
  ],
  "solo-film":[
    {key:"extra-shoot",label:"추가 촬영",detail:"기본 구성 외 촬영이 필요한 경우 상담으로 확인합니다"},
    {key:"extra-material",label:"사진·영상 자료 추가 구성",detail:"보유 자료를 더 활용하고 싶을 때 선택합니다"},
    {key:"extra-revision",label:"추가 수정",detail:"기본 수정 범위를 넘어서는 편집이 필요한 경우 상담으로 확인합니다"}
  ],
  proposal:[
    {key:"extra-scene",label:"고백 장면 추가 구성",detail:"원하는 고백 장면이나 별도의 스토리를 추가할 때 선택합니다"},
    {key:"extra-shoot",label:"추가 촬영 또는 장소 변경",detail:"기본 촬영 외 시간이나 장소가 필요한 경우 상담으로 확인합니다"},
    {key:"extra-revision",label:"추가 수정",detail:"기본 수정 범위를 넘어서는 편집이 필요한 경우 상담으로 확인합니다"}
  ]
}
const FRIEND_PRODUCT_OPTIONS = [
 {key:"extra-singer",label:"인원 추가",detail:"두 명 이상이 함께 부를 경우 인원수와 파트 구성에 맞춰 녹음과 디렉팅을 추가하며 금액은 상담 후 안내합니다",notice:true}
]
const SONG_OPTIONS = [
 {key:"lyrics",label:"가사 영상",detail:"완성한 축가와 두 분의 사진을 활용해 예식장에서 바로 재생할 가사 영상을 제작합니다",price:40000,image:"assets/img/song-options/lyric-video-v2.webp"},
 {key:"lyrics-making",label:"가사 영상 + 녹음 메이킹 필름",detail:"가사 영상에 실제 녹음 장면을 담은 메이킹 필름까지 함께 제작합니다",price:null,image:"assets/img/song-options/recording-making-v2.webp"}
]
const WORKS = [
 {id:"wedding-film",category:"식전 영상",product:"wedding",title:"두 사람의 목소리로 시작하는 결혼식",description:"하객에게 전하는 인사부터 서로에게 쓴 편지까지",image:"assets/img/wedding/03-lipsync-mv.webp",video:PRODUCTS.wedding.videoUrl},
 {id:"duet-film",category:"축가 영상",product:"duet-film",title:"위스티아 듀엣 웨딩 필름",description:"두 사람이 함께 부른 노래로 완성한 본식 축가 영상",image:"assets/img/song-film/duet-video-cover.jpg",video:PRODUCTS["duet-film"].videoUrl},
 {id:"proposal-film",category:"프로포즈",product:"proposal",title:"위스티아 프로포즈 필름",description:"직접 부른 노래와 고백을 담은 프로포즈 영상",image:"assets/img/proposal-video-cover.jpg",video:PRODUCTS.proposal.videoUrl}
]
const GENERAL_FAQ = [
 ["노래를 잘 못해도 가능한가요","가능합니다 처음 녹음하는 분도 한 구간씩 편하게 부를 수 있도록 안내합니다 원래 목소리와 감정을 살리고 음정과 박자는 자연스럽게 다듬습니다"],
 ["식전 영상과 축가 영상은 어떻게 다른가요","식전 영상은 하객 메시지, 인터뷰와 편지로 두 사람의 이야기를 전합니다 축가 영상은 직접 부른 노래와 뮤직비디오를 중심으로 본식 축가 순서에 상영합니다"],
 ["AR은 무엇이고, 본식에서는 어떻게 사용하나요","AR은 미리 녹음한 목소리가 포함된 반주 음원입니다 예식장에서 AR을 틀고 그 위에 직접 노래합니다 목소리 비율과 재생 방법을 상담하고, 본식 전에 예식장 담당자와 음향 리허설을 확인해 주세요"],
 ["곡이나 키를 아직 정하지 못했어요","괜찮습니다 원하는 분위기와 음역을 확인해 곡과 편하게 부를 수 있는 키를 함께 정합니다"],
 ["녹음 시간과 영상 제작 기간은 얼마나 걸리나요","상품과 촬영 구성, 일정에 따라 달라집니다 예식일 또는 영상 사용 예정일을 알려주시면 가능한 일정과 소요 시간을 안내합니다"],
 ["수정은 몇 번 가능한가요","수정 범위와 횟수는 선택한 상품과 제작 구성에 따라 상담 시 안내합니다 꼭 넣고 싶은 장면이나 문구는 제작 전에 함께 정리해 주세요"],
 ["사진이 많이 없어도 가능한가요","보유한 사진과 영상의 양을 확인한 뒤 녹음 메이킹, 촬영 장면 등 활용 가능한 구성으로 상담합니다"],
 ["예식장에는 어떤 파일을 전달하나요","상영용 최종 영상 또는 AR 음원을 전달합니다 예식장의 지원 형식과 재생 환경을 먼저 확인해 알려주시면 준비에 도움이 됩니다"]
]
const PROCESS = [
 ["상담과 예약","사용 날짜와 어떤 순간을 준비하는지 알려주세요"],
 ["곡과 구성 결정","편한 키와 파트, 담고 싶은 이야기를 함께 정합니다"],
 ["스튜디오 녹음","한 구간씩 안내받으며 내 목소리를 남깁니다"],
 ["음원·영상 제작","보정과 믹싱, 상품에 맞는 촬영과 편집을 진행합니다"],
 ["완성본 확인","함께 정한 구성에 맞는지 확인하고 수정 사항을 협의합니다"],
 ["최종본 전달","예식장이나 고백 현장에서 사용할 파일을 전달합니다"]
]
const REVIEW_QUOTES = [
 {index:6,quote:"저희 둘 다 녹음 처음이라 너무 떨렸는데",body:"친절하게 디렉도 봐주시고 분위기도 풀어주셔서 너무너무 즐거웠어요",tag:"처음 녹음하는 두 분의 이야기"},
 {index:3,quote:"실수를 많이 한것 같아서 걱정했는데",body:"너무너무 만족스럽습니다! 그리고 영상이랑 노래가 너무 이뻐서 무한재생하게 되네요",tag:"완성된 노래와 영상을 받고"},
 {index:1,quote:"여자친구가 너무 좋아하네요",body:"예쁘게 잘 만들어주셔서 감사합니다",tag:"마음을 전한 뒤 보내주신 말"}
]
function kakao(){return config.accounts?.kakao || KAKAO_FALLBACK}
function img(src,alt,eager=false){return '<img src="'+escapeHtml(src)+'" alt="'+escapeHtml(alt)+'" loading="'+(eager?"eager":"lazy")+'" decoding="async"'+(eager?' fetchpriority="high"':"")+'>'}
function arrow(){return '<span aria-hidden="true">↗</span>'}
function label(text){return '<p class="eyebrow">'+text+'</p>'}
function heading(kicker,title,description=""){return '<div class="section-heading'+(kicker?"":" no-kicker")+'">'+(kicker?label(kicker):"")+'<div><h2>'+title+'</h2>'+(description?'<p>'+description+'</p>':"")+'</div></div>'}
function cta(text,href,style="dark"){return '<a class="button '+style+'" href="'+href+'">'+text+arrow()+'</a>'}
function external(text,url,cls="text-link"){return '<a class="'+cls+'" href="'+escapeHtml(url)+'" target="_blank" rel="noopener noreferrer">'+text+arrow()+'</a>'}
function priceBar(key,purpose=""){return '<div class="fixed-price"><div><span>'+PRODUCTS[key].title+'</span>'+cta("이벤트 적용 가격 확인하기","#/event/"+key+(purpose?"/"+purpose:""))+'</div></div>'}
function faq(items){return '<div class="faq-list">'+items.map(([q,a])=>'<details><summary>'+q+'<span aria-hidden="true">+</span></summary><p>'+a+'</p></details>').join("")+'</div>'}
function packageItem(item){return ({
 "녹음 및 1대1 디렉팅":"1:1 레코딩 · 보컬 디렉팅",
 "두 사람 녹음 및 1대1 디렉팅":"2인 레코딩 · 보컬 디렉팅",
 "솔로 녹음 및 1대1 디렉팅":"솔로 레코딩 · 보컬 디렉팅",
 "두 사람 녹음 및 디렉팅":"2인 레코딩 · 보컬 디렉팅",
 "커플 인터뷰":"두 사람의 스토리 인터뷰",
 "외부 스튜디오 촬영":"협업 촬영 스튜디오 대여",
 "음정 · 박자 보정":"디테일 음정·박자 보정",
 "믹싱 · 마스터링":"보컬 믹싱 · 최종 마스터링",
 "영상 편집":"웨딩 필름 편집",
 "예식장 상영용 최종본 전달":"예식장 상영용 최종본",
 "축가 상영용 최종본과 완성 음원 전달":"축가 상영본 · 완성 음원",
 "최종 음원 전달":"본식용 AR · 완성 음원",
 "최종 필름 전달":"상영용 최종 필름"
 })[item]||item}
function footer(){return '<footer class="footer shell"><a class="footer-brand" href="#/">'+img("assets/img/wistia-logo-transparent.webp","")+'<span><b>WISTIA</b><small>VOICE & FILM STUDIO</small></span></a><p>노래와 영상으로 남기는, 우리의 순간</p><nav aria-label="소셜 채널">'+external("Instagram",config.accounts?.instagram||"https://www.instagram.com/wistia.film/")+external("YouTube",config.accounts?.youtube||"https://www.youtube.com/@wistia_film")+external("카카오톡 상담",kakao())+'</nav><small>© '+new Date().getFullYear()+' WISTIA</small></footer>'}
function serviceRows(keys){return keys.map((key,i)=>{let p=PRODUCTS[key],m=SERVICE_META[key];return '<a class="service-row" href="#/detail/'+key+'"><span class="index">'+String(i+1).padStart(2,"0")+'</span><div><h3>'+p.title+'</h3><p>'+m.short+'</p></div><span class="row-use">'+m.use+'</span>'+arrow()+'</a>'}).join("")}
function reviewCard(src,i,clone=false){return '<figure class="review-capture review-crop-'+String(i+1).padStart(2,"0")+'"'+(clone?' aria-hidden="true"':'')+'><span class="review-capture-image">'+img(src,"실제 고객 카카오톡 후기 "+(i+1))+'</span></figure>'}
function reviews(){const cards=ACTUAL_REVIEW_IMAGES.map((src,i)=>reviewCard(src,i)).join("");const clones=ACTUAL_REVIEW_IMAGES.map((src,i)=>reviewCard(src,i,true)).join("");return '<section class="section reviews-section" id="reviews"><div class="shell"><div class="review-carousel-head">'+heading("","실제 고객 후기","직접 보내주신 카카오톡 후기 원문입니다")+'</div><div class="review-captures" id="reviewTrack" aria-label="실제 고객 후기가 끊김 없이 순환합니다"><div class="review-loop"><div class="review-set">'+cards+'</div><div class="review-set" aria-hidden="true">'+clones+'</div></div></div></div></section>'}
function processSection(steps=PROCESS){const hasImages=steps.some(step=>step[2]);return '<section class="shell section" id="process">'+heading("","진행 과정","상담부터 최종본 전달까지 순서대로 진행합니다")+'<ol class="process-list'+(hasImages?' has-images':'')+'">'+steps.map((s,i)=>'<li>'+(s[2]?'<div class="process-image">'+img(s[2],s[0]+' 과정 이미지')+'</div>':'')+'<span>'+String(i+1).padStart(2,"0")+'</span><div><h3>'+s[0]+'</h3><p>'+s[1]+'</p></div></li>').join("")+'</ol></section>'}
function productionGuide(p){const film=p.category!=="song";return '<section class="shell production-guide" aria-labelledby="productionGuideTitle"><h2 id="productionGuideTitle">제작 안내</h2><div><article><span>작업 기간</span><strong>'+(film?"촬영·자료 전달 후 일정 확정":"녹음 완료 후 일정 확정")+'</strong><p>사용 예정일과 제작 구성을 확인한 뒤 정확한 전달 일정을 안내합니다</p></article><article><span>수정 안내</span><strong>상품별 기본 범위 적용</strong><p>수정 가능 범위와 횟수는 예약 전 상담에서 명확히 안내합니다</p></article><article><span>최종 전달</span><strong>'+(film?"상영용 영상 + 완성 음원":"본식용 AR + 완성 음원")+'</strong><p>사용 환경을 확인해 현장에서 바로 쓸 수 있는 파일로 전달합니다</p></article></div></section>'}
function resultSection(p,m,w,song){return '<section class="result-band"><div class="shell"><div>'+label("THE RESULT")+'<h2>이렇게 완성됩니다</h2></div><div><p>'+m.result+'</p><span>'+escapeHtml(p.resultCopy|| (song?"보정과 믹싱·마스터링을 거친 최종 음원으로 전달합니다":"직접 부른 노래와 촬영 장면을 하나의 영상으로 완성합니다"))+'</span></div></div>'+(w?'<div class="shell result-film"><button class="film-poster" data-video="'+w.id+'" aria-label="'+w.title+' 실제 결과물 재생">'+img(w.image,w.title,true)+'<span class="play" aria-hidden="true">▶</span><span class="poster-note">실제 결과물 재생하기</span></button></div>':'')+'</section>'}
function detailNext(key){return '<section class="detail-next section"><div class="shell"><h2>상품 구성과 가격을<br>확인해 보세요</h2><p>포함 작업과 선택 옵션, 이벤트 혜택을 확인한 뒤 예약 상담으로 이어집니다</p>'+cta("상품 구성·가격 확인하기","#/event/"+key)+'</div></section>'}
function renderHome(){
 const groups = [
  {title:"영상으로 준비하기",description:"직접 부른 노래와 두 분의 이야기를 영상으로 완성해 예식이나 고백 순간에 재생합니다",items:[
   {href:"#/detail/wedding",title:"식전 영상 만들기",description:"하객 메시지와 인터뷰, 편지로 예식 전 두 분의 이야기를 전합니다"},
   {href:"#/film",title:"축가 영상 만들기",description:"직접 부른 노래를 뮤직비디오로 완성해 본식 축가 순서에 상영합니다"},
   {href:"#/detail/proposal",title:"프로포즈 · 답프로포즈 영상 만들기",description:"직접 부른 노래와 추억, 편지로 한 사람을 위한 고백을 완성합니다"}
  ]},
  {title:"현장에서 직접 부르기",description:"미리 녹음한 목소리가 담긴 AR과 함께 예식 당일 직접 축가를 부릅니다",items:[
   {href:"#/ar/self",title:"신랑 또는 신부가 직접 부르기",description:"자신의 결혼식에서 신랑이나 신부 한 사람이 직접 부르는 축가입니다"},
   {href:"#/ar/friend",title:"지인이 친구에게 불러주기",description:"친구의 결혼식에서 한 명 또는 여러 명이 마음을 전하는 축가입니다"},
   {href:"#/detail/duo",title:"신랑 신부가 함께 축가 부르기",description:"두 사람의 음역과 파트를 맞춰 신랑 신부가 함께 부르는 축가입니다"}
  ]}
 ]
 app.innerHTML = '<section class="situation-home shell" aria-labelledby="situationTitle"><h1 id="situationTitle">저는 지금,</h1><div class="situation-groups">'+groups.map(group=>'<section class="situation-group"><h2>'+group.title+'</h2><p>'+group.description+'</p><nav class="situation-pills" aria-label="'+group.title+'">'+group.items.map(item=>'<a class="situation-pill" href="'+item.href+'"><span class="situation-pill-copy"><strong>'+item.title+'</strong><small>'+item.description+'</small></span><span aria-hidden="true">→</span></a>').join("")+'</nav></section>').join("")+'</div></section>'
}
function renderPicker(kind){
 const song=kind==="song";const keys=song?["solo","duo"]:["duet-film","solo-film"];
 app.innerHTML='<section class="shell section picker">'+label(song?"VOICE RECORDING":"WEDDING SONG FILM")+'<h1>'+(song?"현장에서는 편안하게<br>목소리는 미리 준비하세요":"축가 시간에 상영하는<br>우리의 뮤직비디오")+'</h1><p class="lead">'+(song?"미리 녹음한 목소리가 함께 흐르는 AR로 본식의 긴장을 덜어보세요":"하객 앞에서 직접 부르지 않아도, 직접 부른 노래로 마음을 전합니다")+'</p><div class="picker-grid">'+keys.map((k,i)=>{const p=PRODUCTS[k],m=SERVICE_META[k];return '<article>'+label(m.type)+(m.image?'<div class="picker-photo">'+img(m.image,p.title+' 안내 이미지')+'</div>':'<div class="type-art" aria-hidden="true">'+(k==="duet-film"?"DUET":"SOLO")+'</div>')+'<h2>'+p.title+'</h2><p>'+m.short+'</p><dl><div><dt>노래하는 사람</dt><dd>'+m.who+'</dd></div><div><dt>받는 결과물</dt><dd>'+m.result+'</dd></div></dl>'+cta("상품 알아보기","#/detail/"+k)+'</article>'}).join("")+'</div></section>'+footer()
}
function compositionMedia(scene,index){const media=scene[2];if(!media)return "";if(Array.isArray(media))return '<div class="scene-image scene-pair">'+media.map((src,i)=>img(src,scene[0]+" 실제 영상 장면 "+(i+1))).join("")+'</div>';if(media.includes("-scenes.png"))return '<div class="scene-image scene-sprite" role="img" aria-label="'+escapeHtml(scene[0]+' 연출 이미지')+'" style="--scene-image:url(\'/'+media+'\');--scene-position:'+index*25+'%"></div>';return '<div class="scene-image">'+img(media.replace(".png",".webp"),scene[0]+" 실제 영상 장면")+'</div>'}
function composition(p){if(!p.composition)return "";const hasImages=p.composition.some(s=>s[2]);return '<section class="shell section composition-section">'+heading("",p.compositionTitle||"구성은 이렇습니다",p.compositionDescription||"원하는 장면은 더하고, 필요 없는 구성은 덜어낼 수 있습니다")+'<ol class="scene-grid '+(hasImages?"with-images":"text-scenes")+'">'+p.composition.map((s,i)=>'<li>'+compositionMedia(s,i)+'<div class="scene-copy"><span class="index">'+String(i+1).padStart(2,"0")+'</span><div><h3>'+s[0]+'</h3><p>'+s[1]+'</p></div></div></li>').join("")+'</ol><aside class="custom-note">'+label("1:1 맞춤 제작")+'<h3>정해진 틀보다, 두 분의 이야기</h3><p>구성을 빼거나 순서를 바꾸는 것도 가능합니다<br>원하는 컷이나 스토리가 있다면 1대1 상담으로 맞춤 반영합니다</p></aside></section>'}
function detailResult(p,m,w,song){
 const copy=escapeHtml(p.resultCopy||(song?"보정과 믹싱·마스터링을 거친 최종 음원으로 전달합니다":"직접 부른 노래와 촬영 장면을 하나의 영상으로 완성합니다"));
 if(p.inlineVideo)return '<div class="detail-result-card"><div class="detail-result-media detail-inline-video"><iframe src="'+escapeHtml(p.videoUrl)+'" title="'+escapeHtml(p.title)+' 실제 작업 영상" loading="lazy" allow="encrypted-media; picture-in-picture; fullscreen" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe></div><div class="detail-result-copy"><strong>'+m.result+'</strong><p>'+copy+'</p></div></div>';
 if(w)return '<div class="detail-result-card"><button class="detail-result-media" data-video="'+w.id+'" aria-label="'+w.title+' 실제 결과물 재생">'+img(w.image,w.title,true)+'<span class="detail-result-badge">이렇게 완성됩니다</span><span class="play" aria-hidden="true">▶</span></button><div class="detail-result-copy"><strong>'+m.result+'</strong><p>'+copy+'</p><span>눌러서 실제 결과물 보기</span></div></div>';
 if(song)return '<div class="detail-result-card"><div class="detail-result-media">'+img(m.image,p.title+" 안내 이미지",true)+'<span class="detail-result-badge">이렇게 완성됩니다</span></div><div class="detail-result-copy"><strong>'+m.result+'</strong><p>'+copy+'</p></div></div>';
 if(m.image)return '<div class="detail-result-card"><div class="detail-result-media song-film-cover">'+img(m.image,p.title+" 연출 이미지",true)+'<span class="detail-result-badge">이렇게 완성됩니다</span></div><div class="detail-result-copy"><strong>'+m.result+'</strong><p>'+copy+'</p></div></div>';
 return '<div class="detail-result-card type-result"><div class="detail-typography" aria-hidden="true">'+(p.key==="duet-film"?"Our duet":p.key==="solo-film"?"Just for you":"Only you")+'</div><div class="detail-result-copy"><span>이렇게 완성됩니다</span><strong>'+m.result+'</strong><p>'+copy+'</p></div></div>'
}
function renderDetail(key){
 const p=PRODUCTS[key],m=SERVICE_META[key],w=WORKS.find(w=>w.product===key),song=p.category==="song";
 app.innerHTML='<section class="shell detail-hero"><div><h1>'+p.title+'</h1><p class="lead">'+p.sub+'</p><div class="detail-facts"><span>'+m.use+'</span><span>'+m.who+'</span></div></div>'+detailResult(p,m,w,song)+'</section>'+
 (song?arRatio():composition(p))+
 '<section class="shell section worry-section">'+heading("","자주 묻는 질문")+faq([...p.concerns,...p.faq])+'</section>'+
 processSection(p.steps)+
 productionGuide(p)+
 reviews()+
 detailNext(key)+footer()+priceBar(key)
}
const RATIO_SOURCES={"30":"assets/audio/ar-samples/voice-30.wav","50":"assets/audio/ar-samples/voice-50.wav","70":"assets/audio/ar-samples/voice-70.wav","100":"assets/audio/ar-samples/voice-100.wav"}
const ratioAudioUrls=new Map()
function arRatio(){const ratios=["30","50","70","100"];if(!ratios.includes(voiceRatio))voiceRatio="50";return '<section class="shell section ratio-section is-loading" aria-busy="true">'+heading("","실제 AR을 들어보고<br>내 목소리 비율을 골라보세요","같은 노래를 30%부터 100%까지 비교할 수 있습니다")+'<div class="ratio-explainer"><div class="ratio-display"><span>현재 선택한 목소리 비율</span><strong id="ratioValue">'+voiceRatio+'<small>%</small></strong></div><div><div class="ratio-buttons" role="group" aria-label="AR 목소리 비율 듣기">'+ratios.map(n=>'<button data-ratio="'+n+'" aria-pressed="'+(n===voiceRatio)+'" disabled>'+n+'%</button>').join("")+'</div><div class="ratio-audio-stack">'+ratios.map(n=>'<audio '+(n===voiceRatio?'id="ratioAudio" class="ratio-audio is-active"':'class="ratio-audio"')+' data-ratio-audio="'+n+'" controls preload="auto">오디오를 재생할 수 없는 브라우저입니다</audio>').join("")+'</div><p id="ratioHelp">중간 재생과 자연스러운 전환을 위해 음원을 준비하고 있습니다</p><p class="fine">샘플곡 · 그중에 그대를 만나</p></div></div></section>'}
async function prepareRatioAudioSources(){const section=document.querySelector(".ratio-section"),audios=[...document.querySelectorAll("[data-ratio-audio]")];if(!section||!audios.length)return;try{await Promise.all(audios.map(async audio=>{const ratio=audio.dataset.ratioAudio;if(!ratioAudioUrls.has(ratio)){const response=await fetch(RATIO_SOURCES[ratio]);if(!response.ok)throw new Error("audio load failed");ratioAudioUrls.set(ratio,URL.createObjectURL(await response.blob()))}audio.src=ratioAudioUrls.get(ratio);audio.load();await new Promise((resolve,reject)=>{if(audio.readyState>=1)return resolve();audio.addEventListener("loadedmetadata",resolve,{once:true});audio.addEventListener("error",reject,{once:true})})}));if(!section.isConnected)return;section.classList.remove("is-loading");section.removeAttribute("aria-busy");section.querySelectorAll("[data-ratio]").forEach(button=>button.disabled=false);section.querySelector("#ratioHelp").textContent="재생 막대를 옮기거나 비율을 바꿔도 같은 위치에서 이어집니다"}catch{if(section.isConnected)section.querySelector("#ratioHelp").textContent="음원을 불러오지 못했습니다 잠시 후 새로고침해 주세요"}}
function fadeRatioAudio(audio,from,to,duration,token){return new Promise(resolve=>{if(!audio)return resolve(false);const started=performance.now();audio.dataset.ratioFading="true";const tick=now=>{if(token!==ratioSwitchToken){delete audio.dataset.ratioFading;resolve(false);return}const progress=Math.min(1,(now-started)/duration);audio.volume=from+(to-from)*progress;if(progress<1)requestAnimationFrame(tick);else{delete audio.dataset.ratioFading;resolve(true)}};requestAnimationFrame(tick)})}
async function switchRatioAudio(ratio){const current=document.querySelector("#ratioAudio"),target=document.querySelector('[data-ratio-audio="'+ratio+'"]');if(!target)return;if(current===target){current.play().catch(()=>{});return}const token=++ratioSwitchToken,fallbackTime=current?.currentTime||0;const remembered=Number(current?.dataset.ratioVolume);const playbackVolume=Number.isFinite(remembered)?remembered:(current?.volume??1);target.dataset.ratioVolume=String(playbackVolume);target.muted=current?.muted||false;target.playbackRate=current?.playbackRate||1;const startTarget=async()=>{if(token!==ratioSwitchToken)return;const wasPlaying=Boolean(current&&!current.paused);if(wasPlaying){const faded=await fadeRatioAudio(current,current.volume,0,70,token);if(!faded)return}const liveTime=current&&!current.paused?current.currentTime:(current?.currentTime||fallbackTime);current?.pause();if(current)current.volume=playbackVolume;document.querySelectorAll("[data-ratio-audio]").forEach(audio=>{if(audio!==target)audio.pause()});const maxTime=Number.isFinite(target.duration)?Math.max(0,target.duration-.05):liveTime;try{target.currentTime=Math.min(liveTime,maxTime)}catch{}target.volume=0;try{await target.play()}catch{return}if(token!==ratioSwitchToken){target.pause();return}document.querySelectorAll("[data-ratio-audio]").forEach(audio=>{audio.classList.toggle("is-active",audio===target);if(audio===target)audio.id="ratioAudio";else audio.removeAttribute("id")});await fadeRatioAudio(target,0,playbackVolume,100,token)};if(target.readyState>=1)startTarget();else{target.addEventListener("loadedmetadata",startTarget,{once:true});target.load()}}
function renderArPurpose(key){
 const p=AR_PURPOSES[key];
 app.innerHTML='<section class="shell detail-hero"><div>'+label("WEDDING SONG AR")+'<h1>'+(key==="self"?"떨리는 축가에도<br>내 목소리 그대로":"소중한 사람에게<br>떨림 대신 진심을")+'</h1><p class="lead">'+p.title+'</p><p>'+p.useCase+'</p></div><div class="detail-cover">'+img("assets/img/song/solo.webp","축가 녹음을 위한 스튜디오 마이크",true)+'</div></section><section class="shell section detail-intro"><h2>'+p.productTitle+'</h2><p class="lead">'+p.lead+'</p></section>'+
 processSection(p.items)+arRatio()+
 (p.options||[]).map(option=>'<aside class="shell option-banner">'+label("선택 옵션")+'<div><h3>'+option[0]+'</h3><p>'+option[1]+'</p></div><strong>'+option[2]+'</strong></aside>').join("")+
 '<section class="shell section">'+heading("CHOOSE YOUR VOICE","한 사람 또는 두 사람","본식에서 함께 부를 인원에 맞춰 선택해 주세요")+'<div class="service-list">'+serviceRows(["solo","duo"])+'</div></section>'+footer()+priceBar("solo",key==="friend"?"friend":"")
}
function eventProductOptions(key,purpose=""){return [...(PRODUCT_OPTIONS[key]||[]),...(key==="solo"&&purpose==="friend"?FRIEND_PRODUCT_OPTIONS:[])]}
function calculate(){
 const product=PRODUCTS[currentEventProduct];const chosen=EVENTS.filter(e=>selectedEvents.has(e.key));
 const discount=Math.min(60000,chosen.reduce((sum,e)=>sum+e.discount,0));
 const optionEntries=eventProductOptions(currentEventProduct,currentEventPurpose).flatMap(o=>{const quantity=o.quantity?(optionQuantities[o.key]||0):(selectedOptions.has(o.key)?1:0);return quantity?[{...o,quantity,total:(o.price||0)*quantity}]:[]});
 const songOption=product.category==="song"?SONG_OPTIONS.find(o=>o.key===chosenOption):null;
 const optionPrice=(songOption?.price||0)+optionEntries.reduce((sum,o)=>sum+o.total,0);
 return {product,chosen,discount,optionEntries,songOption,optionPrice,finalPrice:product.normal+optionPrice-discount}
}
function renderProductOption(o){
 if(o.notice)return '<div class="option-notice"><span aria-hidden="true">※</span><div><strong>'+o.label+'</strong><small>'+o.detail+'</small></div></div>'
 if(o.quantity){const quantity=optionQuantities[o.key]||0;return '<div class="option-choice quantity-option"><span class="option-symbol" aria-hidden="true">+</span><span><strong>'+o.label+'</strong><small>'+o.detail+'</small></span><div class="quantity-control" aria-label="'+o.label+' 횟수"><button type="button" data-option-minus="'+o.key+'" aria-label="추가 수정 횟수 줄이기">−</button><output data-option-count="'+o.key+'">'+quantity+'회</output><button type="button" data-option-plus="'+o.key+'" aria-label="추가 수정 횟수 늘리기">+</button><b>회당 +'+won(o.price)+'</b></div></div>'}
 return '<label class="option-choice"><input type="checkbox" data-option="'+o.key+'" '+(selectedOptions.has(o.key)?"checked":"")+'><span><strong>'+o.label+'</strong><small>'+o.detail+'</small></span><b>'+(o.price?'+'+won(o.price):'상담 후 안내')+'</b></label>'
}
function renderEvent(key,purpose=""){
 if(currentEventProduct!==key||currentEventPurpose!==purpose){selectedEvents.clear();selectedOptions.clear();optionQuantities={};chosenOption=""}
 currentEventProduct=key;currentEventPurpose=purpose;const p=PRODUCTS[key];
 const options=eventProductOptions(key,purpose);
 app.innerHTML='<section class="shell section booking-head"><a class="text-link" href="#/detail/'+key+'">'+p.title+' 상품 안내 '+arrow()+'</a><h1>구성은 명확하게<br>선택은 편안하게</h1><p class="lead">포함 작업과 추가 옵션, 이벤트 혜택을 한눈에 확인해 주세요</p></section>'+
 '<div class="shell booking-layout"><div class="booking-options"><section class="package-section"><p class="mini-heading"># 포함 작업</p><ul class="package-list">'+p.included.map(x=>'<li># '+packageItem(x)+'</li>').join("")+'</ul></section>'+
 '<section class="booking-extra"><h2>추가 옵션</h2><p>필요한 항목만 선택하면 예상 금액에 바로 반영됩니다</p>'+(p.category==="song"?'<div class="form-field"><label for="bookingRatio">AR 속 내 목소리 비율</label><select id="bookingRatio">'+["30","50","70","100"].map(n=>'<option value="'+n+'"'+(voiceRatio===n?" selected":"")+'>'+n+'%</option>').join("")+'</select></div><div class="song-option-grid">'+SONG_OPTIONS.map(o=>'<label class="song-option-card"><img src="'+o.image+'" alt="'+o.label+' 안내 이미지" loading="lazy"><span class="song-option-select"><input type="radio" name="songOption" data-song-option="'+o.key+'" '+(chosenOption===o.key?"checked":"")+'><span><strong>'+o.label+'</strong><small>'+o.detail+'</small></span><b>'+(o.price?'+'+won(o.price):'상담 후 안내')+'</b></span></label>').join("")+'</div>'+(purpose==="friend"?'<div class="friend-options">'+options.map(renderProductOption).join("")+'</div>':"")+'<div class="switch-products">'+cta("솔로 녹음","#/event/solo","light")+cta("2인 축가","#/event/duo","light")+'</div>':options.map(renderProductOption).join(""))+'</section>'+
 '<section class="event-benefits"><h2>이벤트 혜택</h2><p>해당되는 항목만 선택하면 예상 금액에서 바로 차감됩니다</p><div class="event-list">'+EVENTS.map(e=>'<label class="event-choice"><input type="checkbox" data-event="'+e.key+'" '+(selectedEvents.has(e.key)?"checked":"")+'><span><strong>'+e.label+'</strong><small>'+e.detail+'</small></span><b>−'+won(e.discount)+'</b></label>').join("")+'</div><p class="fine">이벤트 참여 조건과 혜택 적용 시점은 예약 상담에서 최종 확인합니다</p></section>'+
 '<section id="reservation"><h2>카카오톡 문의 양식</h2><p>아래 내용을 작성하면 선택한 상품과 함께 자동으로 복사됩니다</p><form id="consultForm"><div class="contact-grid"><div class="form-field"><label for="contactSource">어디에서 보고 오셨나요</label><select id="contactSource"><option value="">선택해 주세요</option>'+["인스타그램","스레드","광고","카페","블로그"].map(x=>'<option'+(consultationDraft.source===x?' selected':'')+'>'+x+'</option>').join("")+'</select></div><div class="form-field"><label for="contactName">성함</label><input id="contactName" value="'+escapeHtml(consultationDraft.name)+'" placeholder="성함을 적어주세요"></div><div class="form-field"><label for="contactService">희망 서비스</label><input id="contactService" value="'+escapeHtml(p.title)+'" readonly></div><div class="form-field"><label for="eventDate">예식일 또는 사용 예정일</label><input type="date" id="eventDate" value="'+escapeHtml(consultationDraft.eventDate)+'"></div><div class="booking-availability contact-wide"><strong>녹음·촬영 예약 안내</strong><span>위스티아는 매주 목요일부터 일요일까지만 예약 가능하며, 예약일과 시간은 상담 시 협의합니다</span></div><div class="form-field contact-wide"><label for="contactPurpose">상영 시점 또는 사용 목적</label><select id="contactPurpose"><option value="">선택해 주세요</option>'+["식전","식중","축가","기타"].map(x=>'<option'+(consultationDraft.purpose===x?' selected':'')+'>'+x+'</option>').join("")+'</select></div><div class="form-field contact-wide"><label for="requestMessage">추가 문의 <span>선택</span></label><textarea id="requestMessage" rows="4" maxlength="1000" placeholder="궁금한 점이나 원하는 구성을 적어주세요">'+escapeHtml(consultationDraft.message)+'</textarea></div></div><button class="button dark" type="submit">카카오톡 상담하기 '+arrow()+'</button></form></section></div>'+
 '<aside class="booking-summary" aria-live="polite" id="bookingSummary"></aside></div><div class="shell other-products">'+cta("다른 상품 선택하기","#/","light")+'</div>'+footer()+'<div class="booking-mobile-bar"><span id="mobilePrice"></span><button class="button dark" data-reservation>예약 상담 '+arrow()+'</button></div>'
 updatePrice()
}
function updatePrice(){let c=calculate();const optionRows=(c.songOption?'<div><dt>'+c.songOption.label+'</dt><dd class="plus">'+(c.songOption.price?'+'+won(c.songOption.price):'상담 후 안내')+'</dd></div>':'')+c.optionEntries.map(o=>'<div><dt>'+o.label+(o.quantity>1?' '+o.quantity+'회':'')+'</dt><dd class="plus">+'+won(o.total)+'</dd></div>').join("");const eventRows=c.chosen.map(e=>'<div><dt>'+e.label+'</dt><dd class="minus">−'+won(e.discount)+'</dd></div>').join("");document.querySelector("#bookingSummary").innerHTML='<p class="eyebrow"><span class="desktop-summary-label">가격 계산</span><span class="mobile-summary-label">선택한 구성</span></p><h2>'+c.product.title+'</h2><dl class="price-lines"><div class="normal-line"><dt>정상가</dt><dd>'+won(c.product.normal)+'</dd></div>'+optionRows+eventRows+'</dl><div class="price-formula"><span><small>정상가</small>'+won(c.product.normal)+'</span><i>+</i><span><small>추가 옵션</small>'+won(c.optionPrice)+'</span><i>−</i><span><small>이벤트 혜택</small>'+won(c.discount)+'</span><i>=</i><strong><small>예상 금액</small>'+won(c.finalPrice)+'</strong></div><p class="fine">선택한 조건을 기준으로 계산한 예상 금액이며 최종 적용 여부는 상담에서 확인합니다</p><button class="button dark" data-reservation>카카오톡 상담하기 '+arrow()+'</button>';const net=c.optionPrice-c.discount;document.querySelector("#mobilePrice").innerHTML='<span><em>정상가</em><del>'+won(c.product.normal)+'</del></span><span><em>옵션·혜택</em><small class="'+(net>0?'plus':'minus')+'">'+(net>0?'+':net<0?'−':'')+won(Math.abs(net))+'</small></span><span><em>예상 금액</em><strong>'+won(c.finalPrice)+'</strong></span>'}
function consultationText(){let c=calculate(),picked=c.optionEntries.map(o=>o.label+' +'+won(o.total));if(c.songOption)picked.unshift(c.songOption.label+(c.songOption.price?' +'+won(c.songOption.price):' · 상담 후 안내'));return ["🤍 🇼 🇪 🇱 🇨 🇴 🇲 🇪  🤍","","아래 문의 양식을 복사한 후","내용을 작성해 보내주세요 :D","","보내주신 내용을 확인한 후","최대한 빠르게 안내드리겠습니다 :)","━━━━━","","[ 𝐂𝐨𝐧𝐭𝐚𝐜𝐭 𝐅𝐨𝐫𝐦 ]","","• 어디에서 보고 오셨나요? : "+(consultationDraft.source||""),"• 성함 : "+(consultationDraft.name||""),"• 희망 서비스 : "+c.product.title,"• 예식일, 예정일 : "+(consultationDraft.eventDate||""),"• 희망 예약일 : 상담 시 협의","• 희망 시간 : 상담 시 협의","• 상영 시점 또는 사용 목적 : "+(consultationDraft.purpose||""),"","• 선택한 추가 옵션 : "+(picked.length?picked.join(" / "):"선택 없음"),c.product.category==="song"?"• AR 목소리 비율 : "+voiceRatio+"%":null,"• 이벤트 혜택 : "+(c.chosen.length?c.chosen.map(e=>e.label+" −"+won(e.discount)).join(" / "):"선택 없음"),"• 예상 금액 : "+won(c.finalPrice),consultationDraft.message?"• 추가 문의 : "+consultationDraft.message:null].filter(x=>x!==null).join("\n")}
function showDialog(html,type){
 lastDialogFocus=document.activeElement;dialog.innerHTML='<div class="dialog-content '+type+'"><button class="dialog-close" data-close aria-label="닫기">×</button>'+html+'</div>';
 dialog.showModal();document.body.classList.add("modal-open");document.querySelector("#siteHeader").inert=true;app.inert=true;document.querySelector("#floatingKakao").inert=true;dialog.querySelector("button").focus()
}
function closeDialog(){if(!dialog.open)return;dialog.close();dialog.innerHTML="";document.body.classList.remove("modal-open");document.querySelector("#siteHeader").inert=false;app.inert=false;document.querySelector("#floatingKakao").inert=false;if(lastDialogFocus?.isConnected)lastDialogFocus.focus()}
function openVideo(id){
 const w=WORKS.find(x=>x.id===id);if(!w)return;
 const url=new URL(w.video);url.searchParams.set("autoplay","1");
 showDialog('<div class="video-frame"><iframe src="'+escapeHtml(url.href)+'" title="'+w.title+'" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe></div><div class="dialog-caption"><div>'+label(w.category)+'<h2>'+w.title+'</h2></div><a class="text-link" href="#/detail/'+w.product+'" data-close>상품 알아보기 '+arrow()+'</a></div><p class="fine">영상이 재생되지 않으면 '+external("YouTube에서 보기",w.video.replace("/embed/","/watch?v=").replace("?rel=0",""))+'</p>',"video-dialog")
}
function consultationToast(message,failed=false){document.querySelector(".copy-toast")?.remove();const toast=document.createElement("div");toast.className="copy-toast"+(failed?" is-error":"");toast.setAttribute("role","status");toast.textContent=message;document.body.append(toast);requestAnimationFrame(()=>toast.classList.add("show"));setTimeout(()=>{toast.classList.remove("show");setTimeout(()=>toast.remove(),250)},3600)}
async function copyConsultationAndOpenKakao(){
 const popup=window.open(kakao(),"_blank");if(popup)popup.opener=null;const text=consultationText();let ok=false;
 try {await navigator.clipboard.writeText(text);ok=true}catch{
  const area=document.createElement("textarea");area.value=text;area.style.cssText="position:fixed;opacity:0";document.body.append(area);area.select();ok=document.execCommand("copy");area.remove()
 }
 consultationToast(ok?"채팅창에 복사되었습니다 · 카카오톡 채팅창에 붙여넣어 주세요":"자동 복사가 제한되었습니다 · 문의 양식을 직접 복사해 주세요",!ok)
 if(!popup)location.href=kakao()
}
function header(){
 document.querySelector("#siteHeader").innerHTML='<div class="header-inner shell"><div class="brand-group"><button id="headerBack" class="back-button" aria-label="이전 페이지로 돌아가기" hidden>←</button><a class="wordmark" href="#/" aria-label="WISTIA 홈">'+img("assets/img/wistia-logo-transparent.webp","")+'<span>WISTIA<small>VOICE & FILM</small></span></a></div>'+(MENU.length?'<nav id="mainMenu" aria-label="주요 메뉴">'+MENU.map(x=>'<a href="#/section/'+x[0]+'">'+x[1]+'</a>').join("")+'</nav>':'')+external("예약 상담",kakao(),"header-consult")+(MENU.length?'<button id="menuToggle" aria-expanded="false" aria-controls="mainMenu" aria-label="메뉴 열기"><span></span><span></span></button>':'')+'</div>';
 document.querySelector("#floatingKakao").href=kakao()
}
let firstRender=true
function route(){
 closeDialog();routeObserver?.disconnect();const parts=(location.hash.replace(/^#/,"")||"/").split("/").filter(Boolean);const [type,key]=parts;
 const home=!type||type==="section";const detail=type==="detail"&&PRODUCTS[key];const ar=type==="ar"&&AR_PURPOSES[key];const event=type==="event"&&PRODUCTS[key];const purpose=parts[2]||"";
 document.body.dataset.page=home?"home":event?"event":detail?"detail":"inner";document.body.classList.toggle("has-price-bar",Boolean(detail||ar));
 document.body.classList.remove("menu-open");document.querySelector("#menuToggle")?.setAttribute("aria-expanded","false");
 document.querySelector("#headerBack").hidden=home;
 if(home)renderHome();else if(detail)renderDetail(key);else if(event)renderEvent(key,purpose);else if(ar)renderArPurpose(key);else if(type==="song"||type==="film")renderPicker(type);else app.innerHTML='<section class="shell section"><h1>찾으시는 페이지가 없습니다</h1><p>상품 목록에서 준비 중인 순간을 다시 찾아보세요</p>'+cta("상품 찾아보기","#/")+'</section>'+footer();
 prepareRatioAudioSources();
 document.title=home?"WISTIA — 우리의 목소리로 남기는 특별한 순간":(PRODUCTS[key]?.title||"축가 녹음 및 영상")+" | WISTIA";
 const target=type==="section"?document.getElementById(key):null;
 requestAnimationFrame(()=>{if(target)target.scrollIntoView({behavior:firstRender||matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth"});else window.scrollTo({top:0,behavior:"instant"});firstRender=false});
 app.focus({preventScroll:true});
 document.querySelectorAll("#mainMenu a").forEach(a=>{if(a.hash===location.hash)a.setAttribute("aria-current","location");else a.removeAttribute("aria-current")})
}
function goBack(){if((history.state?.wistiaDepth||0)>0)history.back();else location.hash="#/"}
history.replaceState({...history.state,wistiaDepth:history.state?.wistiaDepth||0},"");
document.addEventListener("click",e=>{
 const el=e.target.closest("a,button");if(!el)return;
 if(el.matches("[data-close]")){closeDialog();if(el.tagName==="BUTTON")return}
 if(el.id==="headerBack")goBack();
 if(el.id==="menuToggle"){const open=!document.body.classList.contains("menu-open");document.body.classList.toggle("menu-open",open);el.setAttribute("aria-expanded",String(open));el.setAttribute("aria-label",open?"메뉴 닫기":"메뉴 열기")}
 if(el.dataset.video)openVideo(el.dataset.video);
 if(el.dataset.optionPlus||el.dataset.optionMinus){const key=el.dataset.optionPlus||el.dataset.optionMinus;const delta=el.dataset.optionPlus?1:-1;optionQuantities[key]=Math.max(0,(optionQuantities[key]||0)+delta);const output=document.querySelector('[data-option-count="'+key+'"]');if(output)output.textContent=optionQuantities[key]+'회';updatePrice()}
 if(el.dataset.ratio){voiceRatio=el.dataset.ratio;document.querySelector("#ratioValue").innerHTML=voiceRatio+"<small>%</small>";document.querySelectorAll("[data-ratio]").forEach(b=>b.setAttribute("aria-pressed",String(b===el)));switchRatioAudio(voiceRatio)}
 if(el.hasAttribute("data-reservation")){document.querySelector("#reservation")?.scrollIntoView({behavior:"smooth"});document.querySelector("#eventDate")?.focus({preventScroll:true})}
 if(el.tagName==="A"&&el.getAttribute("href")?.startsWith("#/")){e.preventDefault();const hash=el.getAttribute("href");if(hash!==location.hash){history.pushState({wistiaDepth:(history.state?.wistiaDepth||0)+1},"",hash)}route()}
})
document.addEventListener("change",e=>{
 const el=e.target;
 if(el.dataset.event){el.checked?selectedEvents.add(el.dataset.event):selectedEvents.delete(el.dataset.event);updatePrice()}
 if(el.dataset.option){el.checked?selectedOptions.add(el.dataset.option):selectedOptions.delete(el.dataset.option);updatePrice()}
 if(el.dataset.songOption){chosenOption=el.checked?el.dataset.songOption:"";updatePrice()}
 if(el.id==="bookingRatio")voiceRatio=el.value;
 if(el.id==="contactSource")consultationDraft.source=el.value;
 if(el.id==="contactName")consultationDraft.name=el.value;
 if(el.id==="eventDate")consultationDraft.eventDate=el.value;
 if(el.id==="contactPurpose")consultationDraft.purpose=el.value
})
document.addEventListener("input",e=>{const el=e.target;if(el.id==="requestMessage")consultationDraft.message=el.value;if(el.id==="contactName")consultationDraft.name=el.value})
document.addEventListener("submit",e=>{if(e.target.id==="consultForm"){e.preventDefault();copyConsultationAndOpenKakao()}})
dialog.addEventListener("cancel",e=>{e.preventDefault();closeDialog()})
dialog.addEventListener("click",e=>{if(e.target===dialog)closeDialog()})
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&document.body.classList.contains("menu-open")){document.body.classList.remove("menu-open");document.querySelector("#menuToggle")?.setAttribute("aria-expanded","false");document.querySelector("#menuToggle")?.focus()}})
window.addEventListener("popstate",route)
window.addEventListener("hashchange",route)
async function init(){
 try{const r=await fetch("wistia-config.json",{cache:"no-store",signal:AbortSignal.timeout(2500)});if(r.ok)config={...config,...await r.json()}}catch{}
 header();route()
}
init()
