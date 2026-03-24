import { PrivacyPolicy } from "@/types/privacy";

export const privacyPolicies: PrivacyPolicy[] = [
    {
        slug: "smash-downdown",
        appName: {
            ko: "바닥부수기",
            en: "Smash DownDown",
        },
        projectId: "smash-downdown",
        summary: {
            ko: "바닥부수기 앱에 적용되는 제출용 개인정보처리방침입니다.",
            en: "This is the privacy policy submitted for the Smash DownDown app.",
        },
        introduction: {
            ko: "본 개인정보처리방침은 디스크팩토리(DiskFactory)가 제공하는 모바일 앱 '바닥부수기'에 적용됩니다. 우리는 사용자의 개인정보를 소중히 여기며, 처리 목적과 범위를 명확하게 안내하기 위해 본 페이지를 운영합니다.",
            en: "This privacy policy applies to 'Floor Crusher', a mobile app provided by DiskFactory. We value your personal information and operate this page to explain clearly how data is handled.",
        },
        effectiveDate: "2026. 02. 01",
        contactEmail: "yeojh97@gmail.com",
        sections: [
            {
                kind: "collection",
                title: {
                    ko: "정보 수집 및 이용",
                    en: "Information Collection and Use",
                },
                paragraphs: [
                    {
                        ko: "애플리케이션은 귀하가 앱을 다운로드하고 사용할 때 일부 정보를 수집할 수 있습니다. 여기에는 기기의 IP 주소, 방문 페이지, 사용 시간, 운영체제 정보 등이 포함될 수 있습니다.",
                        en: "The application may collect certain information when you download and use it. This may include your device IP address, pages visited, usage time, and operating system details.",
                    },
                    {
                        ko: "정밀 위치 정보는 수집하지 않으나, 대략적인 지리적 위치를 기반으로 개인화된 콘텐츠 제공과 서비스 분석이 이뤄질 수 있습니다.",
                        en: "The application does not collect precise location information, but approximate region data may be used to personalize content and analyze service usage.",
                    },
                ],
            },
            {
                kind: "sharing",
                title: {
                    ko: "제삼자 서비스 액세스",
                    en: "Third-Party Access",
                },
                paragraphs: [
                    {
                        ko: "서비스 개선을 위해 집계되거나 익명화된 데이터가 외부 서비스로 전송될 수 있습니다. 본 애플리케이션이 사용하는 주요 제삼자 서비스는 아래와 같습니다.",
                        en: "Aggregated or anonymized data may be transmitted to external services to improve the application and related services. The main third-party providers used by the application are listed below.",
                    },
                ],
                services: [
                    {
                        name: "AdMob",
                        url: "https://support.google.com/admob/answer/6128543?hl=en",
                    },
                    {
                        name: "Google Analytics for Firebase",
                        url: "https://firebase.google.com/support/privacy",
                    },
                    {
                        name: "Unity",
                        url: "https://unity3d.com/legal/privacy-policy",
                    },
                ],
            },
            {
                kind: "ai",
                title: {
                    ko: "인공지능(AI)의 사용",
                    en: "Use of Artificial Intelligence (AI)",
                },
                paragraphs: [
                    {
                        ko: "본 애플리케이션은 사용자 경험 향상을 위해 AI 기술을 사용할 수 있습니다. AI 구성 요소는 개인화된 콘텐츠나 추천 기능에 활용될 수 있으며, 관련 처리는 본 개인정보처리방침과 적용 가능한 법령을 기준으로 운영됩니다.",
                        en: "The application may use AI technologies to improve the user experience. Any AI-based functionality, such as personalized content or recommendations, is operated in line with this privacy policy and applicable laws.",
                    },
                ],
            },
            {
                kind: "deletion",
                title: {
                    ko: "옵트아웃(Opt-Out) 및 삭제",
                    en: "Opt-Out and Deletion",
                },
                paragraphs: [
                    {
                        ko: "애플리케이션을 삭제하면 기기에서의 추가 정보 수집을 중단할 수 있습니다. 데이터 삭제가 필요한 경우 아래 연락처를 통해 요청할 수 있으며, 요청 내용 확인 후 합리적인 기간 내 처리합니다.",
                        en: "You can stop further information collection by uninstalling the application. If you want data deleted, you can contact the service provider and requests will be handled within a reasonable period after review.",
                    },
                ],
            },
            {
                kind: "retention",
                title: {
                    ko: "데이터 보유 및 아동 보호",
                    en: "Data Retention and Children",
                },
                paragraphs: [
                    {
                        ko: "서비스 제공자는 귀하가 앱을 사용하는 동안 및 합리적인 기간 동안 필요한 데이터를 보유할 수 있습니다.",
                        en: "The service provider may retain necessary data while you use the application and for a reasonable time afterward.",
                    },
                    {
                        ko: "또한 13세 미만 아동의 개인정보를 고의로 수집하지 않으며, 해당 사실을 인지하는 경우 지체 없이 삭제 조치를 진행합니다.",
                        en: "The application is not intended to knowingly collect personal information from children under 13, and any such data identified will be removed without delay.",
                    },
                ],
            },
            {
                kind: "security",
                title: {
                    ko: "보안 및 변경 사항",
                    en: "Security and Changes",
                },
                paragraphs: [
                    {
                        ko: "서비스 제공자는 개인정보 보안을 위해 물리적, 전자적, 관리적 보호 조치를 적용합니다.",
                        en: "The service provider applies physical, electronic, and administrative safeguards to protect personal information.",
                    },
                    {
                        ko: "본 방침은 필요에 따라 업데이트될 수 있으며, 변경 시 본 페이지를 통해 공지합니다.",
                        en: "This policy may be updated from time to time, and any changes will be announced on this page.",
                    },
                ],
            },
        ],
    },
    {
        slug: "swipe-runner",
        appName: {
            ko: "SwipeRunner",
            en: "SwipeRunner",
        },
        summary: {
            ko: "SwipeRunner 앱에 적용되는 제출용 개인정보처리방침입니다.",
            en: "This is the privacy policy submitted for the SwipeRunner app.",
        },
        introduction: {
            ko: "본 개인정보처리방침은 서비스 제공자가 무료 서비스로 제공하는 모바일 앱 'SwipeRunner'에 적용됩니다. 본 서비스는 현 상태 그대로 제공됩니다.",
            en: "This privacy policy applies to the SwipeRunner app, which is provided by the Service Provider as a free mobile service. This service is intended for use as is.",
        },
        effectiveDate: "2026-03-17",
        contactEmail: "yeojh97@gmail.com",
        sections: [
            {
                kind: "collection",
                title: {
                    ko: "정보 수집 및 이용",
                    en: "Information Collection and Use",
                },
                paragraphs: [
                    {
                        ko: "애플리케이션은 다운로드 및 사용 시 정보를 수집할 수 있습니다. 여기에는 기기의 인터넷 프로토콜 주소(IP 주소), 방문한 애플리케이션 페이지, 방문 시간과 날짜, 각 페이지에 머문 시간, 애플리케이션 사용 시간, 모바일 기기의 운영체제 정보가 포함될 수 있습니다.",
                        en: "The Application collects information when you download and use it. This information may include your device Internet Protocol address, the pages of the Application that you visit, the time and date of your visit, the time spent on those pages, the time spent on the Application, and the operating system you use on your mobile device.",
                    },
                    {
                        ko: "애플리케이션은 모바일 기기의 정밀 위치 정보를 수집하지 않습니다.",
                        en: "The Application does not gather precise information about the location of your mobile device.",
                    },
                    {
                        ko: "애플리케이션은 사용자의 데이터를 처리하거나 기능을 제공하기 위해 인공지능(AI) 기술을 사용하지 않습니다.",
                        en: "The Application does not use Artificial Intelligence (AI) technologies to process your data or provide features.",
                    },
                    {
                        ko: "서비스 제공자는 중요한 정보, 필수 고지, 마케팅 프로모션을 제공하기 위해 사용자가 제공한 정보를 바탕으로 때때로 연락할 수 있습니다.",
                        en: "The Service Provider may use the information you provided to contact you from time to time to provide important information, required notices and marketing promotions.",
                    },
                    {
                        ko: "더 나은 경험을 위해 서비스 제공자는 특정 개인식별정보의 제공을 요청할 수 있으며, 요청된 정보는 본 개인정보처리방침에 설명된 방식으로 보유 및 이용됩니다.",
                        en: "For a better experience, while using the Application, the Service Provider may require you to provide certain personally identifiable information. The information requested will be retained by them and used as described in this privacy policy.",
                    },
                ],
            },
            {
                kind: "sharing",
                title: {
                    ko: "제삼자 서비스 액세스",
                    en: "Third-Party Access",
                },
                paragraphs: [
                    {
                        ko: "서비스 제공자가 애플리케이션과 서비스를 개선할 수 있도록 집계되고 익명화된 데이터만이 주기적으로 외부 서비스로 전송됩니다. 서비스 제공자는 본 개인정보처리방침에 설명된 방식으로 사용자의 정보를 제삼자와 공유할 수 있습니다.",
                        en: "Only aggregated, anonymized data is periodically transmitted to external services to aid the Service Provider in improving the Application and their service. The Service Provider may share your information with third parties in the ways that are described in this privacy statement.",
                    },
                    {
                        ko: "애플리케이션은 자체적인 개인정보처리방침을 가진 제삼자 서비스를 사용합니다. 사용되는 제삼자 서비스 제공업체의 개인정보처리방침 링크는 아래와 같습니다.",
                        en: "Please note that the Application utilizes third-party services that have their own Privacy Policy about handling data. Below are the links to the privacy policy of the third-party service providers used by the Application.",
                    },
                ],
                services: [
                    {
                        name: "AdMob",
                        url: "https://support.google.com/admob/answer/6128543?hl=en",
                    },
                    {
                        name: "Google Analytics for Firebase",
                        url: "https://firebase.google.com/support/privacy",
                    },
                    {
                        name: "Firebase Crashlytics",
                        url: "https://firebase.google.com/support/privacy/",
                    },
                    {
                        name: "Unity",
                        url: "https://unity3d.com/legal/privacy-policy",
                    },
                ],
                bullets: [
                    {
                        ko: "소환장 또는 이에 준하는 법적 절차를 준수하기 위해 법률상 요구되는 경우",
                        en: "as required by law, such as to comply with a subpoena, or similar legal process",
                    },
                    {
                        ko: "권리 보호, 사용자나 타인의 안전 보호, 사기 조사, 정부 요청 대응을 위해 공개가 필요하다고 선의로 판단하는 경우",
                        en: "when they believe in good faith that disclosure is necessary to protect their rights, protect your safety or the safety of others, investigate fraud, or respond to a government request",
                    },
                    {
                        ko: "서비스 제공자를 대신해 업무를 수행하고, 공개된 정보를 독립적으로 사용하지 않으며, 본 방침의 규칙을 준수하기로 동의한 신뢰할 수 있는 서비스 제공업체와 공유하는 경우",
                        en: "with their trusted services providers who work on their behalf, do not have an independent use of the information we disclose to them, and have agreed to adhere to the rules set forth in this privacy statement",
                    },
                ],
            },
            {
                kind: "deletion",
                title: {
                    ko: "옵트아웃 권리",
                    en: "Opt-Out Rights",
                },
                paragraphs: [
                    {
                        ko: "애플리케이션을 삭제하면 모든 정보 수집을 쉽게 중단할 수 있습니다. 모바일 기기 또는 앱 마켓플레이스에서 제공하는 표준 삭제 절차를 이용하면 됩니다.",
                        en: "You can stop all collection of information by the Application easily by uninstalling it. You may use the standard uninstall processes as may be available as part of your mobile device or via the mobile application marketplace or network.",
                    },
                ],
            },
            {
                kind: "retention",
                title: {
                    ko: "데이터 보유 정책",
                    en: "Data Retention Policy",
                },
                paragraphs: [
                    {
                        ko: "서비스 제공자는 사용자가 애플리케이션을 사용하는 동안과 그 이후 합리적인 기간 동안 사용자가 제공한 데이터를 보유합니다. 애플리케이션을 통해 제공한 데이터의 삭제를 원할 경우 yeojh97@gmail.com 으로 연락하면 합리적인 기간 내에 응답합니다.",
                        en: "The Service Provider will retain User Provided data for as long as you use the Application and for a reasonable time thereafter. If you'd like them to delete User Provided Data that you have provided via the Application, please contact them at yeojh97@gmail.com and they will respond in a reasonable time.",
                    },
                ],
            },
            {
                kind: "children",
                title: {
                    ko: "아동",
                    en: "Children",
                },
                paragraphs: [
                    {
                        ko: "서비스 제공자는 13세 미만 아동의 정보를 고의로 수집하거나 마케팅 대상으로 삼지 않습니다.",
                        en: "The Service Provider does not use the Application to knowingly solicit data from or market to children under the age of 13.",
                    },
                    {
                        ko: "애플리케이션은 13세 미만을 대상으로 하지 않습니다. 서비스 제공자는 13세 미만 아동의 개인식별정보를 고의로 수집하지 않으며, 13세 미만 아동이 개인정보를 제공한 사실을 발견하면 서버에서 즉시 삭제합니다. 부모나 보호자가 자녀가 개인정보를 제공했다는 사실을 알고 있다면 서비스 제공자에게 연락해 필요한 조치를 요청할 수 있습니다.",
                        en: "The Application does not address anyone under the age of 13. The Service Provider does not knowingly collect personally identifiable information from children under 13 years of age. If the Service Provider discovers that a child under 13 has provided personal information, it will be immediately deleted from the servers. If you are a parent or guardian and you are aware that your child has provided personal information, please contact the Service Provider so that the necessary actions can be taken.",
                    },
                ],
            },
            {
                kind: "security",
                title: {
                    ko: "보안",
                    en: "Security",
                },
                paragraphs: [
                    {
                        ko: "서비스 제공자는 사용자의 정보 기밀성을 보호하는 것을 중요하게 생각하며, 처리 및 보관하는 정보를 보호하기 위해 물리적, 전자적, 절차적 보호 조치를 제공합니다.",
                        en: "The Service Provider is concerned about safeguarding the confidentiality of your information. The Service Provider provides physical, electronic, and procedural safeguards to protect information the Service Provider processes and maintains.",
                    },
                ],
            },
            {
                kind: "changes",
                title: {
                    ko: "변경 사항",
                    en: "Changes",
                },
                paragraphs: [
                    {
                        ko: "본 개인정보처리방침은 사유를 불문하고 수시로 업데이트될 수 있습니다. 서비스 제공자는 이 페이지를 새 내용으로 업데이트하여 변경 사항을 알리며, 정기적으로 확인하는 것이 좋습니다. 계속 사용하면 모든 변경 사항에 동의한 것으로 간주됩니다.",
                        en: "This Privacy Policy may be updated from time to time for any reason. The Service Provider will notify you of any changes to the Privacy Policy by updating this page with the new policy. You are advised to consult this Privacy Policy regularly for any changes, as continued use is deemed approval of all changes.",
                    },
                ],
            },
            {
                kind: "consent",
                title: {
                    ko: "동의",
                    en: "Your Consent",
                },
                paragraphs: [
                    {
                        ko: "애플리케이션을 사용함으로써 사용자는 본 개인정보처리방침에 명시된 정보 처리와 이후 개정 사항에 동의하는 것으로 간주됩니다.",
                        en: "By using the Application, you are consenting to the processing of your information as set forth in this Privacy Policy now and as amended by us.",
                    },
                ],
            },
        ],
    },
];
