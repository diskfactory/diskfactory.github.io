import { Project } from "@/types/project";

export const projects: Project[] = [
    {
        id: "floor-crusher",
        title: {
            ko: "바닥부수기",
            en: "Floor Crusher",
            "pt-BR": "Floor Crusher",
        },
        description: {
            ko: "내 순발력은 얼마나 좋을까? 빠르게 동일한 색의 버튼을 눌러 바닥을 부수세요!",
            en: "How sharp are your reflexes? Tap the button that matches the floor color and smash through it.",
            "pt-BR": "Quão rápidos são seus reflexos? Toque no botão da mesma cor do chão para destruí-lo.",
        },
        fullDescription: {
            ko: "4가지 색의 바닥이 무한히 등장합니다. 빠르게 서있는 바닥 색과 동일한 버튼을 눌러 바닥을 부수세요!\n누구보다 빠르게 부숴 고득점을 노려보세요\n\n빠르게 연속으로 바닥을 부수면 더 많은 분노게이지를 얻습니다. 분노로 더 빠르게 바닥을 부수세요!",
            en: "An endless stream of floors in four colors appears. Tap the button that matches the color of the floor you are standing on to break through it.\nAim for a high score by crushing floors faster than anyone else.\n\nSmashing floors in quick succession fills your rage gauge faster. Use that rage to break through even more quickly.",
            "pt-BR": "Uma sequência infinita de pisos em quatro cores aparece sem parar. Toque rapidamente no botão da mesma cor do piso em que você está para quebrá-lo.\nDestrua os pisos mais rápido que todo mundo e tente alcançar a maior pontuação.\n\nQuebrar pisos em sequência enche a barra de fúria mais depressa. Use essa fúria para destruir tudo ainda mais rápido.",
        },
        thumbnail: "",
        icon: "/images/pj1/proj1.webp",
        tags: ["Casual"],
        links: {
            playstore: "https://play.google.com/store/apps/details?id=com.diskactory.smashdowndown&hl=ko",
            // appstore: "https://apps.apple.com/app/id000000000",
            // steam: "https://store.steampowered.com/app/000000"
        },
        privacySlug: "floor-crusher",
        screenshots: [
            "/images/pj1/img1.jpg",
            // "/images/pj1/sc2.png",
            // "/images/pj1/sc3.png"
        ],
        features: [
            {
                ko: "쉽고 직관적인 플레이",
                en: "Easy and intuitive gameplay",
                "pt-BR": "Jogabilidade simples e intuitiva",
            },
            {
                ko: "보고 빠르게 반응하는 순발력 기르기",
                en: "Train your reflexes by seeing and reacting fast",
                "pt-BR": "Treine seus reflexos observando e reagindo rápido",
            },
        ],
    },
    {
        id: "swipe-runner",
        title: {
            ko: "스와이프 러너 : 3D 파쿠르 게임",
            en: "Swipe Runner: 3D Parkour Game",
            "pt-BR": "Swipe Runner: jogo de parkour 3D",
        },
        description: {
            ko: "간편한 조작으로 멋진 파쿠르 액션을 경험해보세요!",
            en: "Experience amazing parkour action with simple controls!",
            "pt-BR": "Viva ações incríveis de parkour com controles simples!",
        },
        fullDescription: {
            ko: "3방향 스와이프로 다가오는 여러 장애물을 피해 멋진 파쿠르 액션을 수행해보세요!\n아슬아슬하게 피할수록 더 빨리지고 파쿠르중 부딪힌 장애물은 부숴버릴 수 있습니다!",
            en: "Perform amazing parkour actions by swiping through multiple obstacles coming your way!\nThe faster you avoid, the faster you move, and obstacles you hit during parkour can be destroyed.",
            "pt-BR": "Faça manobras de parkour desviando dos obstáculos que vêm pela frente com gestos de deslizar em 3 direções.\nQuanto mais no limite você desviar, mais rápido fica, e os obstáculos atingidos durante o parkour podem ser destruídos.",
        },
        thumbnail: "/images/swiperunner/screen1_ko.png",
        icon: "/images/swiperunner/appicon.png",
        tags: ["Casual", "Action", "Parkour"],
        links: {
            playstore: "https://play.google.com/store/apps/details?id=com.diskfactory.swiperunner",
        },
        privacySlug: "swipe-runner",
        accountDeletionSlug: "swipe-runner",
        youtubeId: "tueZtuWrk2o",
        screenshots: [
            "/images/swiperunner/screenshot1.png",
            "/images/swiperunner/screenshot2.png",
            "/images/swiperunner/screenshot3.png",
            "/images/swiperunner/screenshot4.png",
            "/images/swiperunner/screenshot5.png",
            "/images/swiperunner/screenshot6.png",
        ],
        features: [
            {
                ko: "간편한 스와이프 조작",
                en: "Simple swipe controls",
                "pt-BR": "Controles simples por gesto",
            },
            {
                ko: "다양한 장애물과 파쿠르 액션",
                en: "Various obstacles and parkour actions",
                "pt-BR": "Diversos obstáculos e ações de parkour",
            },
            {
                ko: "아슬아슬할수록 더 빨라지는 스피드",
                en: "The closer the call, the faster you go",
                "pt-BR": "Quanto mais por pouco, maior a velocidade",
            },
            {
                ko: "장애물을 부숴버리는 쾌감",
                en: "Satisfying obstacle destruction",
                "pt-BR": "A satisfação de destruir obstáculos",
            },
        ],
    },
    {
        id: "tank-pop-block-puzzle",
        title: {
            ko: "Tank Pop Block Puzzle",
            en: "Tank Pop Block Puzzle",
            "pt-BR": "Tank Pop Block Puzzle",
        },
        description: {
            ko: "탱크로 블록을 펑펑! 한 손으로 즐기는 캐주얼 블록 퍼즐 게임.",
            en: "Pop blocks with tanks! A casual one-handed block puzzle game.",
            "pt-BR": "Estoure blocos com tanques! Um puzzle casual para jogar com uma mão.",
        },
        fullDescription: {
            ko: "탱크를 조준해 같은 색 블록을 연속으로 터뜨리는 캐주얼 블록 퍼즐 게임입니다.\n간단한 조작 속에 숨겨진 전략을 발견하고, 한 번의 발사로 화면을 가득 채운 블록들을 시원하게 정리해보세요!\n\n짧은 시간 동안 가볍게 즐길 수 있어 출퇴근길, 휴식 시간 등 언제 어디서나 부담 없이 플레이할 수 있습니다.",
            en: "A casual block puzzle game where you aim your tank to pop chains of same-colored blocks.\nDiscover the strategy hidden behind simple controls, and clear the screen with satisfying chain reactions in a single shot.\n\nDesigned for short, light play sessions—perfect for commutes, breaks, or anytime you want to relax.",
            "pt-BR": "Um puzzle casual em que você mira o tanque para estourar sequências de blocos da mesma cor.\nDescubra a estratégia por trás dos controles simples e limpe a tela cheia de blocos com reações em cadeia deliciosas em um único disparo.\n\nFeito para partidas curtas e leves, perfeito para o trajeto, uma pausa ou qualquer momento em que você queira relaxar.",
        },
        thumbnail: "/images/tankpop/HorizontalThumbnail.png",
        icon: "/images/tankpop/AppIcon_512.png",
        tags: ["Casual", "Puzzle"],
        links: {
            playstore: "https://play.google.com/store/apps/details?id=com.diskfactory.tankpop",
        },
        privacySlug: "tank-pop-block-puzzle",
        termsSlug: "tank-pop-block-puzzle",
        screenshots: [
            "/images/tankpop/ScreenShot1.png",
            "/images/tankpop/ScreenShot2.png",
            "/images/tankpop/ScreenShot3.png",
            "/images/tankpop/Screenshot4.png",
            "/images/tankpop/Screenshot5.png",
        ],
        features: [
            {
                ko: "한 손으로 즐기는 간편한 조작",
                en: "Easy one-handed controls",
                "pt-BR": "Controles simples para jogar com uma mão",
            },
            {
                ko: "같은 색 블록을 연쇄로 터뜨리는 쾌감",
                en: "Satisfying chain reactions on same-colored blocks",
                "pt-BR": "Reações em cadeia satisfatórias com blocos da mesma cor",
            },
            {
                ko: "짧고 가볍게 즐길 수 있는 캐주얼 퍼즐",
                en: "Short, casual puzzle sessions you can play anywhere",
                "pt-BR": "Partidas curtas e casuais para jogar em qualquer lugar",
            },
            {
                ko: "단순함 속에 숨겨진 전략적 재미",
                en: "Strategic depth hidden behind simple rules",
                "pt-BR": "Diversão estratégica escondida em regras simples",
            },
        ],
    }
];
