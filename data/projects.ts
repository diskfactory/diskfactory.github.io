import { Project } from "@/types/project";

export const projects: Project[] = [
    {
        id: "floor-crusher",
        title: {
            ko: "바닥부수기",
            en: "Floor Crusher",
        },
        description: {
            ko: "내 순발력은 얼마나 좋을까? 빠르게 동일한 색의 버튼을 눌러 바닥을 부수세요!",
            en: "How sharp are your reflexes? Tap the button that matches the floor color and smash through it.",
        },
        fullDescription: {
            ko: "4가지 색의 바닥이 무한히 등장합니다. 빠르게 서있는 바닥 색과 동일한 버튼을 눌러 바닥을 부수세요!\n누구보다 빠르게 부숴 고득점을 노려보세요\n\n빠르게 연속으로 바닥을 부수면 더 많은 분노게이지를 얻습니다. 분노로 더 빠르게 바닥을 부수세요!",
            en: "An endless stream of floors in four colors appears. Tap the button that matches the color of the floor you are standing on to break through it.\nAim for a high score by crushing floors faster than anyone else.\n\nSmashing floors in quick succession fills your rage gauge faster. Use that rage to break through even more quickly.",
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
            },
            {
                ko: "보고 빠르게 반응하는 순발력 기르기",
                en: "Train your reflexes by seeing and reacting fast",
            },
        ],
    },
    {
        id: "swipe-runner",
        title: {
            ko: "스와이프 러너 : 3D 파쿠르 게임",
            en: "Swipe Runner: 3D Parkour Game",
        },
        description: {
            ko: "간편한 조작으로 멋진 파쿠르 액션을 경험해보세요!",
            en: "Experience amazing parkour action with simple controls!",
        },
        fullDescription: {
            ko: "3방향 스와이프로 다가오는 여러 장애물을 피해 멋진 파쿠르 액션을 수행해보세요!\n아슬아슬하게 피할수록 더 빨리지고 파쿠르중 부딪힌 장애물은 부숴버릴 수 있습니다!",
            en: "Perform amazing parkour actions by swiping through multiple obstacles coming your way!\nThe faster you avoid, the faster you move, and obstacles you hit during parkour can be destroyed.",
        },
        thumbnail: "/images/swiperunner/screen1_ko.png",
        icon: "/images/swiperunner/appicon.png",
        tags: ["Casual", "Action", "Parkour"],
        links: {
            playstore: "https://play.google.com/store/apps/details?id=com.diskfactory.swiperunner",
        },
        privacySlug: "swipe-runner",
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
            },
            {
                ko: "다양한 장애물과 파쿠르 액션",
                en: "Various obstacles and parkour actions",
            },
            {
                ko: "아슬아슬할수록 더 빨라지는 스피드",
                en: "The closer the call, the faster you go",
            },
            {
                ko: "장애물을 부숴버리는 쾌감",
                en: "Satisfying obstacle destruction",
            },
        ],
    }
];
