import { PrivacyPolicy } from "@/types/privacy";

export const privacyPolicies: PrivacyPolicy[] = [
    {
        slug: "smash-downdown",
        appName: {
            ko: "바닥부수기",
            en: "Smash DownDown",
            "pt-BR": "Smash DownDown",
        },
        projectId: "smash-downdown",
        summary: {
            ko: "바닥부수기 앱에 적용되는 제출용 개인정보처리방침입니다.",
            en: "This is the privacy policy submitted for the Smash DownDown app.",
            "pt-BR": "Esta é a política de privacidade enviada para o app Smash DownDown.",
        },
        introduction: {
            ko: "본 개인정보처리방침은 디스크팩토리(DiskFactory)가 제공하는 모바일 앱 '바닥부수기'에 적용됩니다. 우리는 사용자의 개인정보를 소중히 여기며, 처리 목적과 범위를 명확하게 안내하기 위해 본 페이지를 운영합니다.",
            en: "This privacy policy applies to 'Floor Crusher', a mobile app provided by DiskFactory. We value your personal information and operate this page to explain clearly how data is handled.",
            "pt-BR": "Esta política de privacidade se aplica ao app mobile 'Smash DownDown', fornecido pela DiskFactory. Valorizamos seus dados pessoais e mantemos esta página para explicar com clareza como os dados são tratados.",
        },
        effectiveDate: "2026. 02. 01",
        contactEmail: "yeojh97@gmail.com",
        sections: [
            {
                kind: "collection",
                title: {
                    ko: "정보 수집 및 이용",
                    en: "Information Collection and Use",
                    "pt-BR": "Coleta e uso de informações",
                },
                paragraphs: [
                    {
                        ko: "애플리케이션은 귀하가 앱을 다운로드하고 사용할 때 일부 정보를 수집할 수 있습니다. 여기에는 기기의 IP 주소, 방문 페이지, 사용 시간, 운영체제 정보 등이 포함될 수 있습니다.",
                        en: "The application may collect certain information when you download and use it. This may include your device IP address, pages visited, usage time, and operating system details.",
                        "pt-BR": "O aplicativo pode coletar determinadas informações quando você o baixa e usa. Isso pode incluir endereço IP do dispositivo, páginas visitadas, tempo de uso e detalhes do sistema operacional.",
                    },
                    {
                        ko: "정밀 위치 정보는 수집하지 않으나, 대략적인 지리적 위치를 기반으로 개인화된 콘텐츠 제공과 서비스 분석이 이뤄질 수 있습니다.",
                        en: "The application does not collect precise location information, but approximate region data may be used to personalize content and analyze service usage.",
                        "pt-BR": "O aplicativo não coleta dados de localização precisa, mas dados aproximados de região podem ser usados para personalizar conteúdo e analisar o uso do serviço.",
                    },
                ],
            },
            {
                kind: "sharing",
                title: {
                    ko: "제삼자 서비스 액세스",
                    en: "Third-Party Access",
                    "pt-BR": "Acesso de terceiros",
                },
                paragraphs: [
                    {
                        ko: "서비스 개선을 위해 집계되거나 익명화된 데이터가 외부 서비스로 전송될 수 있습니다. 본 애플리케이션이 사용하는 주요 제삼자 서비스는 아래와 같습니다.",
                        en: "Aggregated or anonymized data may be transmitted to external services to improve the application and related services. The main third-party providers used by the application are listed below.",
                        "pt-BR": "Dados agregados ou anonimizados podem ser enviados a serviços externos para melhorar o aplicativo e serviços relacionados. Os principais provedores de terceiros usados pelo aplicativo estão listados abaixo.",
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
                    "pt-BR": "Uso de inteligência artificial (IA)",
                },
                paragraphs: [
                    {
                        ko: "본 애플리케이션은 사용자 경험 향상을 위해 AI 기술을 사용할 수 있습니다. AI 구성 요소는 개인화된 콘텐츠나 추천 기능에 활용될 수 있으며, 관련 처리는 본 개인정보처리방침과 적용 가능한 법령을 기준으로 운영됩니다.",
                        en: "The application may use AI technologies to improve the user experience. Any AI-based functionality, such as personalized content or recommendations, is operated in line with this privacy policy and applicable laws.",
                        "pt-BR": "O aplicativo pode usar tecnologias de IA para melhorar a experiência do usuário. Funcionalidades baseadas em IA, como conteúdo personalizado ou recomendações, serão operadas de acordo com esta política de privacidade e com a legislação aplicável.",
                    },
                ],
            },
            {
                kind: "deletion",
                title: {
                    ko: "옵트아웃(Opt-Out) 및 삭제",
                    en: "Opt-Out and Deletion",
                    "pt-BR": "Opt-out e exclusão",
                },
                paragraphs: [
                    {
                        ko: "애플리케이션을 삭제하면 기기에서의 추가 정보 수집을 중단할 수 있습니다. 데이터 삭제가 필요한 경우 아래 연락처를 통해 요청할 수 있으며, 요청 내용 확인 후 합리적인 기간 내 처리합니다.",
                        en: "You can stop further information collection by uninstalling the application. If you want data deleted, you can contact the service provider and requests will be handled within a reasonable period after review.",
                        "pt-BR": "Você pode interromper novas coletas de informações no dispositivo desinstalando o aplicativo. Se quiser excluir dados, entre em contato com o provedor do serviço; as solicitações serão tratadas em prazo razoável após análise.",
                    },
                ],
            },
            {
                kind: "retention",
                title: {
                    ko: "데이터 보유 및 아동 보호",
                    en: "Data Retention and Children",
                    "pt-BR": "Retenção de dados e proteção de crianças",
                },
                paragraphs: [
                    {
                        ko: "서비스 제공자는 귀하가 앱을 사용하는 동안 및 합리적인 기간 동안 필요한 데이터를 보유할 수 있습니다.",
                        en: "The service provider may retain necessary data while you use the application and for a reasonable time afterward.",
                        "pt-BR": "O provedor do serviço pode manter os dados necessários enquanto você usa o aplicativo e por um período razoável depois disso.",
                    },
                    {
                        ko: "또한 13세 미만 아동의 개인정보를 고의로 수집하지 않으며, 해당 사실을 인지하는 경우 지체 없이 삭제 조치를 진행합니다.",
                        en: "The application is not intended to knowingly collect personal information from children under 13, and any such data identified will be removed without delay.",
                        "pt-BR": "Além disso, o aplicativo não pretende coletar conscientemente dados pessoais de crianças menores de 13 anos; se esses dados forem identificados, serão removidos sem demora.",
                    },
                ],
            },
            {
                kind: "security",
                title: {
                    ko: "보안 및 변경 사항",
                    en: "Security and Changes",
                    "pt-BR": "Segurança e alterações",
                },
                paragraphs: [
                    {
                        ko: "서비스 제공자는 개인정보 보안을 위해 물리적, 전자적, 관리적 보호 조치를 적용합니다.",
                        en: "The service provider applies physical, electronic, and administrative safeguards to protect personal information.",
                        "pt-BR": "O provedor do serviço aplica salvaguardas físicas, eletrônicas e administrativas para proteger dados pessoais.",
                    },
                    {
                        ko: "본 방침은 필요에 따라 업데이트될 수 있으며, 변경 시 본 페이지를 통해 공지합니다.",
                        en: "This policy may be updated from time to time, and any changes will be announced on this page.",
                        "pt-BR": "Esta política pode ser atualizada de tempos em tempos, e quaisquer alterações serão comunicadas nesta página.",
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
            "pt-BR": "SwipeRunner",
        },
        projectId: "swipe-runner",
        summary: {  // 서머리 쓰지마라.
            ko: "",
            en: "",
            "pt-BR": "",
        },
        introduction: {
            ko: "본 개인정보처리방침은 디스크팩토리(DiskFactory)가 무료 서비스로 제공하는 모바일 앱 'SwipeRunner'에 적용됩니다. 본 서비스는 현 상태 그대로 제공됩니다.",
            en: "This privacy policy applies to the SwipeRunner app, which is provided by DiskFactory as a free mobile service. This service is intended for use as is.",
            "pt-BR": "Esta política de privacidade se aplica ao app SwipeRunner, fornecido pela DiskFactory como um serviço mobile gratuito. Este serviço é disponibilizado para uso no estado em que se encontra.",
        },
        effectiveDate: "2026-05-03",
        contactEmail: "yeojh97@gmail.com",
        sections: [
            {
                kind: "collection",
                title: {
                    ko: "정보 수집 및 이용",
                    en: "Information Collection and Use",
                    "pt-BR": "Coleta e uso de informações",
                },
                paragraphs: [
                    {
                        ko: "애플리케이션은 다운로드 및 사용 시 정보를 수집할 수 있습니다. 여기에는 기기의 인터넷 프로토콜 주소(IP 주소), 방문한 애플리케이션 페이지, 방문 시간과 날짜, 각 페이지에 머문 시간, 애플리케이션 사용 시간, 모바일 기기의 운영체제 정보가 포함될 수 있습니다.",
                        en: "The Application collects information when you download and use it. This information may include your device Internet Protocol address, the pages of the Application that you visit, the time and date of your visit, the time spent on those pages, the time spent on the Application, and the operating system you use on your mobile device.",
                        "pt-BR": "O Aplicativo pode coletar informações quando você o baixa e usa. Essas informações podem incluir o endereço de Protocolo de Internet do seu dispositivo (endereço IP), as páginas do Aplicativo que você visita, a data e hora da visita, o tempo gasto em cada página, o tempo de uso do Aplicativo e o sistema operacional do seu dispositivo móvel.",
                    },
                    {
                        ko: "애플리케이션은 모바일 기기의 정밀 위치 정보를 수집하지 않습니다.",
                        en: "The Application does not gather precise information about the location of your mobile device.",
                        "pt-BR": "O Aplicativo não coleta informações precisas sobre a localização do seu dispositivo móvel.",
                    },
                    {
                        ko: "Google Play Games Services를 통해 로그인 또는 게임 서비스 기능을 사용하는 경우, 서비스 제공자는 Google이 제공하는 게임별 고유 플레이어 ID 또는 이에 준하는 중복되지 않는 식별자를 처리할 수 있습니다. 이 식별자는 게임 이벤트를 같은 사용자 또는 세션과 연결하고 중복 집계를 방지하기 위해 사용됩니다.",
                        en: "When you use sign-in or game service features through Google Play Games Services, the Service Provider may process a game-scoped unique player ID or a similar non-duplicated identifier provided by Google. This identifier is used to associate game events with the same user or session and to prevent duplicate event aggregation.",
                        "pt-BR": "Quando você usa login ou recursos de jogo pelo Google Play Games Services, o Provedor do Serviço pode tratar um ID único de jogador por jogo, ou identificador semelhante e não duplicado, fornecido pelo Google. Esse identificador é usado para associar eventos do jogo ao mesmo usuário ou sessão e evitar contagens duplicadas.",
                    },
                    {
                        ko: "서비스 개선과 게임 밸런스 분석을 위해 Mixpanel에 게임 이벤트 정보가 전송될 수 있습니다. 전송되는 정보에는 가명 처리된 고유 식별자, 이벤트 이름과 속성, 이벤트 발생 시간, 앱 버전, 기기 및 운영체제 정보, 언어/지역 정보, IP 주소를 통해 추정되는 대략적인 위치 정보가 포함될 수 있습니다.",
                        en: "For service improvement and gameplay balance analysis, gameplay event information may be transmitted to Mixpanel. The transmitted information may include a pseudonymous unique identifier, event names and properties, event timestamps, app version, device and operating system information, language/region information, and approximate location inferred from IP address.",
                        "pt-BR": "Para melhoria do serviço e análise de balanceamento do jogo, informações de eventos de gameplay podem ser enviadas ao Mixpanel. As informações enviadas podem incluir um identificador único pseudonimizado, nomes e propriedades de eventos, horário dos eventos, versão do app, informações do dispositivo e do sistema operacional, idioma/região e localização aproximada inferida pelo endereço IP.",
                    },
                    {
                        ko: "앱 안정성 개선과 오류 대응을 위해 Sentry에 크래시 로그, 오류 이벤트, 성능 진단 정보가 전송될 수 있습니다. 전송되는 정보에는 오류 발생 시간, 앱 버전, 기기 및 운영체제 정보, 오류가 발생한 코드 위치 또는 스택 트레이스, IP 주소 등 기술 정보가 포함될 수 있습니다.",
                        en: "For app stability improvement and error response, crash logs, error events, and performance diagnostics may be transmitted to Sentry. The transmitted information may include error timestamps, app version, device and operating system information, code location or stack traces related to the error, IP address, and other technical information.",
                        "pt-BR": "Para melhorar a estabilidade do app e responder a erros, logs de falha, eventos de erro e diagnósticos de desempenho podem ser enviados ao Sentry. As informações enviadas podem incluir horário do erro, versão do app, informações do dispositivo e do sistema operacional, local do código ou stack trace relacionado ao erro, endereço IP e outros dados técnicos.",
                    },
                    {
                        ko: "애플리케이션은 사용자의 데이터를 처리하거나 기능을 제공하기 위해 인공지능(AI) 기술을 사용하지 않습니다.",
                        en: "The Application does not use Artificial Intelligence (AI) technologies to process your data or provide features.",
                        "pt-BR": "O Aplicativo não usa tecnologias de inteligência artificial (IA) para tratar seus dados ou fornecer funcionalidades.",
                    },
                    {
                        ko: "사용자가 문의 과정에서 이메일 주소 등 연락처 정보를 직접 제공하는 경우, 서비스 제공자는 답변 제공, 필수 고지, 요청 처리 목적을 위해 해당 정보를 사용할 수 있습니다.",
                        en: "If you directly provide contact information, such as an email address, during an inquiry, the Service Provider may use that information to respond, provide required notices, and process your request.",
                        "pt-BR": "Se você fornecer diretamente informações de contato, como endereço de e-mail, durante uma solicitação, o Provedor do Serviço poderá usar essas informações para responder, enviar avisos necessários e processar sua solicitação.",
                    },
                    {
                        ko: "서비스 제공자는 사용자의 실제 이름, 이메일 주소, 전화번호, Google Play 프로필 이미지 등 직접적인 개인식별정보를 게임 이벤트 분석 목적으로 의도적으로 Mixpanel에 전송하지 않습니다. 다만 사용자가 문의 등 별도 경로로 정보를 제공하는 경우에는 본 개인정보처리방침에 설명된 방식으로 보유 및 이용됩니다.",
                        en: "The Service Provider does not intentionally transmit directly identifiable information such as your real name, email address, phone number, or Google Play profile image to Mixpanel for gameplay event analytics. However, if you provide information through a separate channel such as an inquiry, it will be retained and used as described in this privacy policy.",
                        "pt-BR": "O Provedor do Serviço não envia intencionalmente ao Mixpanel, para análise de eventos de gameplay, informações diretamente identificáveis, como nome real, endereço de e-mail, telefone ou imagem de perfil do Google Play. No entanto, se você fornecer informações por outro canal, como uma solicitação de contato, elas serão mantidas e usadas conforme descrito nesta política de privacidade.",
                    },
                ],
                bullets: [
                    {
                        ko: "Google Play Games Services의 게임별 고유 플레이어 ID 또는 이에 준하는 중복되지 않는 식별자",
                        en: "Game-scoped unique player ID from Google Play Games Services or a similar non-duplicated identifier",
                        "pt-BR": "ID único de jogador por jogo do Google Play Games Services ou identificador semelhante não duplicado",
                    },
                    {
                        ko: "레벨 시작/완료, 점수, 실패/재시도, 장애물·아이템 상호작용 등 게임 플레이 이벤트",
                        en: "Gameplay events such as level start/completion, score, failure/retry, and obstacle or item interactions",
                        "pt-BR": "Eventos de gameplay, como início/conclusão de fase, pontuação, falha/tentativa novamente e interações com obstáculos ou itens",
                    },
                    {
                        ko: "앱 버전, 기기 모델, 운영체제, 언어/지역, IP 기반 대략 위치 등 분석에 필요한 앱·기기 정보",
                        en: "App and device information needed for analytics, such as app version, device model, operating system, language/region, and IP-based approximate location",
                        "pt-BR": "Informações do app e do dispositivo necessárias para análise, como versão do app, modelo do dispositivo, sistema operacional, idioma/região e localização aproximada baseada em IP",
                    },
                    {
                        ko: "오류 로그, 크래시 정보, 성능 진단 정보, 스택 트레이스 등 앱 안정성 개선에 필요한 기술 정보",
                        en: "Technical information needed for app stability improvement, such as error logs, crash information, performance diagnostics, and stack traces",
                        "pt-BR": "Informações técnicas necessárias para melhorar a estabilidade do app, como logs de erro, informações de falha, diagnósticos de desempenho e stack traces",
                    },
                ],
            },
            {
                kind: "sharing",
                title: {
                    ko: "제삼자 서비스 액세스",
                    en: "Third-Party Access",
                    "pt-BR": "Acesso de terceiros",
                },
                paragraphs: [
                    {
                        ko: "서비스 제공자가 애플리케이션과 서비스를 개선할 수 있도록 사용 정보, 게임 이벤트, 오류 및 진단 정보, 가명 처리된 고유 식별자 및 기술 정보가 제삼자 서비스로 전송될 수 있습니다. 서비스 제공자는 본 개인정보처리방침에 설명된 목적과 방식으로 사용자의 정보를 제삼자와 공유할 수 있습니다.",
                        en: "Usage information, gameplay events, error and diagnostic information, pseudonymous unique identifiers, and technical information may be transmitted to third-party services to help the Service Provider improve the Application and related services. The Service Provider may share your information with third parties for the purposes and in the ways described in this privacy statement.",
                        "pt-BR": "Informações de uso, eventos de gameplay, informações de erro e diagnóstico, identificadores únicos pseudonimizados e informações técnicas podem ser enviados a serviços de terceiros para ajudar o Provedor do Serviço a melhorar o Aplicativo e serviços relacionados. O Provedor do Serviço pode compartilhar suas informações com terceiros para as finalidades e pelos meios descritos nesta política de privacidade.",
                    },
                    {
                        ko: "애플리케이션은 자체적인 개인정보처리방침을 가진 제삼자 서비스를 사용합니다. 사용되는 제삼자 서비스 제공업체의 개인정보처리방침 링크는 아래와 같습니다.",
                        en: "Please note that the Application utilizes third-party services that have their own Privacy Policy about handling data. Below are the links to the privacy policy of the third-party service providers used by the Application.",
                        "pt-BR": "Observe que o Aplicativo usa serviços de terceiros que possuem suas próprias políticas de privacidade sobre o tratamento de dados. Abaixo estão os links para as políticas de privacidade dos provedores de terceiros usados pelo Aplicativo.",
                    },
                    {
                        ko: "Mixpanel은 서비스 제공자의 지시에 따라 게임 이벤트 분석 데이터를 처리하며, Google Play Games Services는 로그인, 업적, 리더보드 등 Google Play 게임 기능 제공과 고유 플레이어 ID 제공을 위해 사용될 수 있습니다.",
                        en: "Mixpanel processes gameplay analytics data under the Service Provider's instructions, and Google Play Games Services may be used to provide Google Play game features such as sign-in, achievements, leaderboards, and unique player IDs.",
                        "pt-BR": "O Mixpanel trata dados de análise de gameplay conforme as instruções do Provedor do Serviço, e o Google Play Games Services pode ser usado para fornecer recursos de jogos do Google Play, como login, conquistas, rankings e IDs únicos de jogador.",
                    },
                    {
                        ko: "Sentry는 서비스 제공자의 지시에 따라 앱 오류, 크래시, 성능 문제를 탐지하고 해결하기 위한 진단 데이터를 처리합니다.",
                        en: "Sentry processes diagnostic data under the Service Provider's instructions to detect and resolve app errors, crashes, and performance issues.",
                        "pt-BR": "O Sentry trata dados de diagnóstico conforme as instruções do Provedor do Serviço para detectar e resolver erros, falhas e problemas de desempenho do app.",
                    },
                ],
                services: [
                    {
                        name: "Mixpanel",
                        url: "https://mixpanel.com/legal/privacy-policy/",
                    },
                    {
                        name: "Sentry",
                        url: "https://sentry.io/privacy/",
                    },
                    {
                        name: "Google Play Games Services",
                        url: "https://policies.google.com/privacy",
                    },
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
                        "pt-BR": "quando exigido por lei, por exemplo para cumprir uma intimação ou procedimento legal semelhante",
                    },
                    {
                        ko: "권리 보호, 사용자나 타인의 안전 보호, 사기 조사, 정부 요청 대응을 위해 공개가 필요하다고 선의로 판단하는 경우",
                        en: "when they believe in good faith that disclosure is necessary to protect their rights, protect your safety or the safety of others, investigate fraud, or respond to a government request",
                        "pt-BR": "quando acreditarem de boa-fé que a divulgação é necessária para proteger seus direitos, proteger sua segurança ou a de terceiros, investigar fraude ou responder a uma solicitação governamental",
                    },
                    {
                        ko: "서비스 제공자를 대신해 업무를 수행하고, 공개된 정보를 독립적으로 사용하지 않으며, 본 방침의 규칙을 준수하기로 동의한 신뢰할 수 있는 서비스 제공업체와 공유하는 경우",
                        en: "with their trusted services providers who work on their behalf, do not have an independent use of the information we disclose to them, and have agreed to adhere to the rules set forth in this privacy statement",
                        "pt-BR": "com prestadores de serviço confiáveis que atuem em seu nome, não usem de forma independente as informações divulgadas e tenham concordado em seguir as regras estabelecidas nesta política de privacidade",
                    },
                ],
            },
            {
                kind: "deletion",
                title: {
                    ko: "옵트아웃 권리",
                    en: "Opt-Out Rights",
                    "pt-BR": "Direitos de opt-out",
                },
                paragraphs: [
                    {
                        ko: "애플리케이션을 삭제하면 모든 정보 수집을 쉽게 중단할 수 있습니다. 모바일 기기 또는 앱 마켓플레이스에서 제공하는 표준 삭제 절차를 이용하면 됩니다.",
                        en: "You can stop all collection of information by the Application easily by uninstalling it. You may use the standard uninstall processes as may be available as part of your mobile device or via the mobile application marketplace or network.",
                        "pt-BR": "Você pode interromper facilmente toda coleta de informações pelo Aplicativo desinstalando-o. Use os procedimentos padrão de desinstalação disponíveis no seu dispositivo móvel ou pela loja/rede de aplicativos.",
                    },
                    {
                        ko: "게임 이벤트 분석 데이터의 삭제를 요청하려면 아래 연락처로 문의할 수 있습니다. 서비스 제공자는 요청 확인을 위해 필요한 범위에서 앱 식별자 또는 Google Play Games Services 식별자와 같은 정보를 요청할 수 있으며, 확인 후 합리적인 기간 내에 관련 데이터를 삭제하거나 익명화합니다. Google 계정 및 Google Play Games Services 자체 데이터의 관리와 삭제는 Google에서 제공하는 설정 및 정책을 따릅니다.",
                        en: "To request deletion of gameplay analytics data, you may contact the Service Provider using the contact details below. The Service Provider may request information such as an app identifier or Google Play Games Services identifier only as necessary to verify the request, and will delete or anonymize related data within a reasonable period after verification. Management and deletion of Google Account and Google Play Games Services data are governed by Google's settings and policies.",
                        "pt-BR": "Para solicitar a exclusão de dados de análise de gameplay, entre em contato com o Provedor do Serviço pelos dados abaixo. O Provedor do Serviço pode solicitar informações como identificador do app ou identificador do Google Play Games Services apenas na medida necessária para verificar a solicitação, e excluirá ou anonimizará os dados relacionados em prazo razoável após a verificação. A gestão e exclusão de dados da Conta Google e do próprio Google Play Games Services seguem as configurações e políticas do Google.",
                    },
                ],
            },
            {
                kind: "retention",
                title: {
                    ko: "데이터 보유 정책",
                    en: "Data Retention Policy",
                    "pt-BR": "Política de retenção de dados",
                },
                paragraphs: [
                    {
                        ko: "서비스 제공자는 사용자가 애플리케이션을 사용하는 동안과 그 이후 합리적인 기간 동안 사용자가 제공한 데이터를 보유합니다. 애플리케이션을 통해 제공한 데이터의 삭제를 원할 경우 yeojh97@gmail.com 으로 연락하면 합리적인 기간 내에 응답합니다.",
                        en: "The Service Provider will retain User Provided data for as long as you use the Application and for a reasonable time thereafter. If you'd like them to delete User Provided Data that you have provided via the Application, please contact them at yeojh97@gmail.com and they will respond in a reasonable time.",
                        "pt-BR": "O Provedor do Serviço manterá os dados fornecidos pelo usuário enquanto você usar o Aplicativo e por um período razoável depois disso. Se quiser excluir dados que você forneceu pelo Aplicativo, entre em contato pelo e-mail yeojh97@gmail.com, e a solicitação será respondida em prazo razoável.",
                    },
                    {
                        ko: "Mixpanel로 전송된 게임 이벤트 분석 데이터와 가명 처리된 고유 식별자, Sentry로 전송된 오류 및 진단 데이터는 서비스 개선, 통계 분석, 오류 대응 등 처리 목적에 필요한 기간 동안 보유되며, 목적 달성 또는 삭제 요청 처리 후에는 삭제 또는 익명화됩니다.",
                        en: "Gameplay analytics data and pseudonymous unique identifiers transmitted to Mixpanel, as well as error and diagnostic data transmitted to Sentry, are retained for as long as necessary for service improvement, statistical analysis, troubleshooting, and similar processing purposes, and are deleted or anonymized after the purpose is fulfilled or a deletion request is processed.",
                        "pt-BR": "Dados de análise de gameplay e identificadores únicos pseudonimizados enviados ao Mixpanel, bem como dados de erro e diagnóstico enviados ao Sentry, são mantidos pelo tempo necessário para melhoria do serviço, análise estatística, resolução de problemas e finalidades semelhantes, sendo excluídos ou anonimizados após o cumprimento da finalidade ou o processamento de uma solicitação de exclusão.",
                    },
                ],
            },
            {
                kind: "children",
                title: {
                    ko: "아동",
                    en: "Children",
                    "pt-BR": "Crianças",
                },
                paragraphs: [
                    {
                        ko: "서비스 제공자는 13세 미만 아동의 정보를 고의로 수집하거나 마케팅 대상으로 삼지 않습니다.",
                        en: "The Service Provider does not use the Application to knowingly solicit data from or market to children under the age of 13.",
                        "pt-BR": "O Provedor do Serviço não usa o Aplicativo para solicitar conscientemente dados de crianças menores de 13 anos nem para direcionar marketing a elas.",
                    },
                    {
                        ko: "애플리케이션은 13세 미만을 대상으로 하지 않습니다. 서비스 제공자는 13세 미만 아동의 개인식별정보를 고의로 수집하지 않으며, 13세 미만 아동이 개인정보를 제공한 사실을 발견하면 서버에서 즉시 삭제합니다. 부모나 보호자가 자녀가 개인정보를 제공했다는 사실을 알고 있다면 서비스 제공자에게 연락해 필요한 조치를 요청할 수 있습니다.",
                        en: "The Application does not address anyone under the age of 13. The Service Provider does not knowingly collect personally identifiable information from children under 13 years of age. If the Service Provider discovers that a child under 13 has provided personal information, it will be immediately deleted from the servers. If you are a parent or guardian and you are aware that your child has provided personal information, please contact the Service Provider so that the necessary actions can be taken.",
                        "pt-BR": "O Aplicativo não é direcionado a menores de 13 anos. O Provedor do Serviço não coleta conscientemente informações pessoalmente identificáveis de crianças menores de 13 anos. Se o Provedor do Serviço descobrir que uma criança menor de 13 anos forneceu dados pessoais, esses dados serão excluídos imediatamente dos servidores. Se você é pai, mãe ou responsável e sabe que seu filho forneceu dados pessoais, entre em contato com o Provedor do Serviço para que as medidas necessárias sejam tomadas.",
                    },
                ],
            },
            {
                kind: "security",
                title: {
                    ko: "보안",
                    en: "Security",
                    "pt-BR": "Segurança",
                },
                paragraphs: [
                    {
                        ko: "서비스 제공자는 사용자의 정보 기밀성을 보호하는 것을 중요하게 생각하며, 처리 및 보관하는 정보를 보호하기 위해 물리적, 전자적, 절차적 보호 조치를 제공합니다.",
                        en: "The Service Provider is concerned about safeguarding the confidentiality of your information. The Service Provider provides physical, electronic, and procedural safeguards to protect information the Service Provider processes and maintains.",
                        "pt-BR": "O Provedor do Serviço se preocupa em proteger a confidencialidade das suas informações. Para isso, adota salvaguardas físicas, eletrônicas e procedimentais para proteger as informações que trata e mantém.",
                    },
                    {
                        ko: "외부 분석 및 오류 진단 서비스로 전송되는 데이터는 가능한 범위에서 암호화된 통신 경로를 통해 전송되며, 서비스 제공자는 불필요한 직접 식별 정보가 게임 이벤트 분석 및 오류 진단에 포함되지 않도록 관리합니다.",
                        en: "Data transmitted to external analytics and error diagnostics services is sent through encrypted communication channels where available, and the Service Provider manages the analytics and diagnostics implementation to avoid including unnecessary directly identifiable information in gameplay event analytics and error diagnostics.",
                        "pt-BR": "Dados enviados a serviços externos de análise e diagnóstico de erros são transmitidos por canais de comunicação criptografados quando disponíveis, e o Provedor do Serviço gerencia a implementação de análise e diagnóstico para evitar a inclusão de informações diretamente identificáveis desnecessárias nas análises de gameplay e nos diagnósticos de erro.",
                    },
                ],
            },
            {
                kind: "changes",
                title: {
                    ko: "변경 사항",
                    en: "Changes",
                    "pt-BR": "Alterações",
                },
                paragraphs: [
                    {
                        ko: "본 개인정보처리방침은 사유를 불문하고 수시로 업데이트될 수 있습니다. 서비스 제공자는 이 페이지를 새 내용으로 업데이트하여 변경 사항을 알리며, 정기적으로 확인하는 것이 좋습니다. 계속 사용하면 모든 변경 사항에 동의한 것으로 간주됩니다.",
                        en: "This Privacy Policy may be updated from time to time for any reason. The Service Provider will notify you of any changes to the Privacy Policy by updating this page with the new policy. You are advised to consult this Privacy Policy regularly for any changes, as continued use is deemed approval of all changes.",
                        "pt-BR": "Esta Política de Privacidade pode ser atualizada periodicamente por qualquer motivo. O Provedor do Serviço notificará você sobre alterações atualizando esta página com a nova política. Recomendamos consultar esta Política de Privacidade regularmente, pois o uso contínuo será considerado aceitação das alterações.",
                    },
                ],
            },
            {
                kind: "consent",
                title: {
                    ko: "동의",
                    en: "Your Consent",
                    "pt-BR": "Seu consentimento",
                },
                paragraphs: [
                    {
                        ko: "애플리케이션을 사용함으로써 사용자는 본 개인정보처리방침에 명시된 정보 처리와 이후 개정 사항에 동의하는 것으로 간주됩니다.",
                        en: "By using the Application, you are consenting to the processing of your information as set forth in this Privacy Policy now and as amended by us.",
                        "pt-BR": "Ao usar o Aplicativo, você consente com o tratamento das suas informações conforme estabelecido nesta Política de Privacidade, inclusive conforme alterações futuras.",
                    },
                ],
            },
        ],
    },
    {
        slug: "tank-pop-block-puzzle",
        appName: {
            ko: "Tank Pop Block Puzzle",
            en: "Tank Pop Block Puzzle",
            "pt-BR": "Tank Pop Block Puzzle",
        },
        projectId: "tank-pop-block-puzzle",
        summary: {
            ko: "Tank Pop Block Puzzle 앱에 적용되는 개인정보처리방침입니다.",
            en: "This privacy policy applies to the Tank Pop Block Puzzle app.",
            "pt-BR": "Esta política de privacidade se aplica ao app Tank Pop Block Puzzle.",
        },
        introduction: {
            ko: "본 개인정보처리방침은 디스크팩토리(이하 '서비스 제공자')가 무료 서비스로 제작한 모바일 기기용 Tank Pop Block Puzzle 앱(이하 '애플리케이션')에 적용됩니다. 본 서비스는 '있는 그대로' 이용하도록 제공됩니다.",
            en: "This privacy policy applies to the Tank Pop Block Puzzle app (hereby referred to as the Application) for mobile devices that was created by 디스크팩토리 (hereby referred to as the Service Provider) as a Free service. This service is intended for use AS IS.",
            "pt-BR": "Esta política de privacidade se aplica ao app Tank Pop Block Puzzle para dispositivos móveis (doravante, o \"Aplicativo\"), criado pela DiskFactory (doravante, o \"Provedor do Serviço\") como um serviço gratuito. Este serviço é disponibilizado para uso no estado em que se encontra.",
        },
        effectiveDate: "2026-05-08",
        contactEmail: "yeojh97@gmail.com",
        sections: [
            {
                kind: "collection",
                title: {
                    ko: "정보 수집 및 이용",
                    en: "Information Collection and Use",
                    "pt-BR": "Coleta e uso de informações",
                },
                paragraphs: [
                    {
                        ko: "애플리케이션은 다운로드 및 사용 시 정보를 수집할 수 있습니다. 수집될 수 있는 정보는 다음과 같습니다.",
                        en: "The Application collects information when you download and use it. This information may include the following.",
                        "pt-BR": "O Aplicativo pode coletar informações quando você o baixa e usa. Essas informações podem incluir os itens abaixo.",
                    },
                    {
                        ko: "애플리케이션은 모바일 기기의 정밀 위치 정보를 수집하지 않습니다.",
                        en: "The Application does not gather precise information about the location of your mobile device.",
                        "pt-BR": "O Aplicativo não coleta informações precisas sobre a localização do seu dispositivo móvel.",
                    },
                    {
                        ko: "애플리케이션은 사용자의 데이터를 처리하거나 기능을 제공하기 위해 인공지능(AI) 기술을 사용하지 않습니다.",
                        en: "The Application does not use Artificial Intelligence (AI) technologies to process your data or provide features.",
                        "pt-BR": "O Aplicativo não usa tecnologias de inteligência artificial (IA) para tratar seus dados ou fornecer funcionalidades.",
                    },
                    {
                        ko: "푸시 알림 기능을 제공하는 경우, 서비스 제공자는 알림 전송을 위한 푸시 토큰, 기기 또는 앱 인스턴스 식별자, 알림 수신 설정, 광고성 정보 수신 동의 여부 및 동의·철회 일시를 처리할 수 있습니다.",
                        en: "If push notification features are provided, the Service Provider may process push tokens, device or app instance identifiers, notification settings, marketing message consent status, and the date and time of consent or withdrawal.",
                        "pt-BR": "Se recursos de notificação push forem oferecidos, o Provedor do Serviço poderá tratar tokens de push, identificadores do dispositivo ou da instância do app, configurações de recebimento de notificações, status de consentimento para mensagens de marketing e data e hora do consentimento ou da revogação.",
                    },
                    {
                        ko: "이벤트, 업데이트, 혜택, 프로모션 등 광고성 푸시 알림은 관련 법령상 예외가 인정되는 경우를 제외하고 사용자가 명시적으로 동의한 경우에만 전송됩니다. 단말기 운영체제의 알림 허용은 광고성 정보 수신 동의와 별개이며, 사용자는 앱 내 설정, 단말기 설정 또는 연락처를 통해 언제든지 수신 동의를 철회할 수 있습니다.",
                        en: "Marketing push notifications, such as events, updates, benefits, and promotions, are sent only when you have explicitly consented unless an exception is permitted by applicable law. Allowing notifications in the device operating system is separate from consenting to marketing messages, and you may withdraw consent at any time through in-app settings, device settings, or the contact information below.",
                        "pt-BR": "Notificações push de marketing, como eventos, atualizações, benefícios e promoções, serão enviadas apenas quando você tiver dado consentimento explícito, salvo se houver exceção permitida pela legislação aplicável. Permitir notificações no sistema operacional do dispositivo é diferente de consentir o recebimento de mensagens de marketing, e você pode revogar o consentimento a qualquer momento pelas configurações do app, pelas configurações do dispositivo ou pelos dados de contato abaixo.",
                    },
                    {
                        ko: "서비스 제공자는 사용자가 제공한 정보를 수시로 연락하여 중요한 정보, 필수 고지 및 마케팅 프로모션을 제공하는 데 사용할 수 있습니다.",
                        en: "The Service Provider may use the information you provided to contact you from time to time to provide important information, required notices, and marketing promotions.",
                        "pt-BR": "O Provedor do Serviço pode usar as informações fornecidas por você para entrar em contato periodicamente e enviar informações importantes, avisos obrigatórios e promoções de marketing.",
                    },
                    {
                        ko: "더 나은 경험을 위해 애플리케이션 사용 중 서비스 제공자는 특정 개인 식별 정보를 제공하도록 요청할 수 있습니다. 서비스 제공자가 요청하는 정보는 본 개인정보처리방침에 설명된 방식으로 보관 및 사용됩니다.",
                        en: "For a better experience, while using the Application, the Service Provider may require you to provide certain personally identifiable information. The information that the Service Provider requests will be retained by them and used as described in this privacy policy.",
                        "pt-BR": "Para oferecer uma experiência melhor, durante o uso do Aplicativo o Provedor do Serviço pode solicitar que você forneça determinadas informações pessoalmente identificáveis. As informações solicitadas serão mantidas e usadas conforme descrito nesta política de privacidade.",
                    },
                ],
                bullets: [
                    {
                        ko: "기기의 인터넷 프로토콜 주소(IP 주소)",
                        en: "Your device's Internet Protocol address, such as IP address",
                        "pt-BR": "Endereço de Protocolo de Internet do seu dispositivo, como o endereço IP",
                    },
                    {
                        ko: "방문한 애플리케이션 페이지, 방문 시간과 날짜, 해당 페이지에 머문 시간",
                        en: "The pages of the Application that you visit, the time and date of your visit, and the time spent on those pages",
                        "pt-BR": "As páginas do Aplicativo que você visita, a data e hora da visita e o tempo gasto nessas páginas",
                    },
                    {
                        ko: "애플리케이션 사용 시간",
                        en: "The time spent on the Application",
                        "pt-BR": "O tempo gasto no Aplicativo",
                    },
                    {
                        ko: "모바일 기기에서 사용하는 운영체제",
                        en: "The operating system you use on your mobile device",
                        "pt-BR": "O sistema operacional usado no seu dispositivo móvel",
                    },
                ],
            },
            {
                kind: "sharing",
                title: {
                    ko: "제삼자 접근",
                    en: "Third Party Access",
                    "pt-BR": "Acesso de terceiros",
                },
                paragraphs: [
                    {
                        ko: "서비스 제공자가 애플리케이션과 서비스를 개선할 수 있도록 집계 및 익명화된 데이터만 외부 서비스로 주기적으로 전송됩니다. 서비스 제공자는 본 개인정보처리방침에 설명된 방식으로 사용자의 정보를 제삼자와 공유할 수 있습니다.",
                        en: "Only aggregated, anonymized data is periodically transmitted to external services to aid the Service Provider in improving the Application and their service. The Service Provider may share your information with third parties in the ways that are described in this privacy statement.",
                        "pt-BR": "Apenas dados agregados e anonimizados são enviados periodicamente a serviços externos para ajudar o Provedor do Serviço a melhorar o Aplicativo e seu serviço. O Provedor do Serviço pode compartilhar suas informações com terceiros das formas descritas nesta política de privacidade.",
                    },
                    {
                        ko: "애플리케이션은 자체 개인정보처리방침을 가진 제삼자 서비스를 사용합니다. 애플리케이션이 사용하는 제삼자 서비스 제공업체의 개인정보처리방침 링크는 아래와 같습니다.",
                        en: "Please note that the Application utilizes third-party services that have their own Privacy Policy about handling data. Below are the links to the Privacy Policy of the third-party service providers used by the Application.",
                        "pt-BR": "Observe que o Aplicativo utiliza serviços de terceiros que possuem suas próprias políticas de privacidade sobre o tratamento de dados. Abaixo estão os links para as políticas de privacidade dos provedores de terceiros usados pelo Aplicativo.",
                    },
                    {
                        ko: "서비스 제공자는 사용자 제공 정보 및 자동 수집 정보를 다음과 같은 경우 공개할 수 있습니다.",
                        en: "The Service Provider may disclose User Provided and Automatically Collected Information in the following cases.",
                        "pt-BR": "O Provedor do Serviço pode divulgar informações fornecidas pelo usuário e informações coletadas automaticamente nos seguintes casos.",
                    },
                ],
                services: [
                    {
                        name: "Google Play Services",
                        url: "https://www.google.com/policies/privacy/",
                    },
                    {
                        name: "AdMob",
                        url: "https://support.google.com/admob/answer/6128543?hl=en",
                    },
                    {
                        name: "Google Analytics for Firebase",
                        url: "https://firebase.google.com/support/privacy",
                    },
                    {
                        name: "Firebase Cloud Messaging",
                        url: "https://firebase.google.com/support/privacy",
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
                        "pt-BR": "quando exigido por lei, por exemplo para cumprir uma intimação ou procedimento legal semelhante",
                    },
                    {
                        ko: "권리 보호, 사용자 또는 타인의 안전 보호, 사기 조사, 정부 요청 대응을 위해 공개가 필요하다고 선의로 판단하는 경우",
                        en: "when they believe in good faith that disclosure is necessary to protect their rights, protect your safety or the safety of others, investigate fraud, or respond to a government request",
                        "pt-BR": "quando acreditarem de boa-fé que a divulgação é necessária para proteger seus direitos, proteger sua segurança ou a de terceiros, investigar fraude ou responder a uma solicitação governamental",
                    },
                    {
                        ko: "서비스 제공자를 대신하여 업무를 수행하고, 공개된 정보를 독립적으로 사용하지 않으며, 본 개인정보처리방침의 규칙을 준수하기로 동의한 신뢰할 수 있는 서비스 제공업체와 공유하는 경우",
                        en: "with their trusted services providers who work on their behalf, do not have an independent use of the information disclosed to them, and have agreed to adhere to the rules set forth in this privacy statement",
                        "pt-BR": "com prestadores de serviço confiáveis que atuem em nome deles, não usem de forma independente as informações divulgadas e tenham concordado em seguir as regras estabelecidas nesta política de privacidade",
                    },
                ],
            },
            {
                kind: "deletion",
                title: {
                    ko: "옵트아웃 권리",
                    en: "Opt-Out Rights",
                    "pt-BR": "Direitos de opt-out",
                },
                paragraphs: [
                    {
                        ko: "애플리케이션을 삭제하면 모든 정보 수집을 쉽게 중단할 수 있습니다. 모바일 기기 또는 모바일 애플리케이션 마켓플레이스나 네트워크에서 제공하는 표준 삭제 절차를 이용하면 됩니다.",
                        en: "You can stop all collection of information by the Application easily by uninstalling it. You may use the standard uninstall processes as may be available as part of your mobile device or via the mobile application marketplace or network.",
                        "pt-BR": "Você pode interromper facilmente toda coleta de informações pelo Aplicativo desinstalando-o. Use os procedimentos padrão de desinstalação disponíveis no seu dispositivo móvel ou pela loja/rede de aplicativos.",
                    },
                ],
            },
            {
                kind: "retention",
                title: {
                    ko: "데이터 보유 정책",
                    en: "Data Retention Policy",
                    "pt-BR": "Política de retenção de dados",
                },
                paragraphs: [
                    {
                        ko: "서비스 제공자는 사용자가 애플리케이션을 사용하는 동안과 그 이후 합리적인 기간 동안 사용자 제공 데이터를 보유합니다. 애플리케이션을 통해 제공한 사용자 제공 데이터의 삭제를 원할 경우 yeojh97@gmail.com 으로 연락하면 합리적인 기간 내에 응답합니다.",
                        en: "The Service Provider will retain User Provided data for as long as you use the Application and for a reasonable time thereafter. If you'd like them to delete User Provided Data that you have provided via the Application, please contact them at yeojh97@gmail.com and they will respond in a reasonable time.",
                        "pt-BR": "O Provedor do Serviço manterá os dados fornecidos pelo usuário enquanto você usar o Aplicativo e por um período razoável depois disso. Se quiser excluir dados fornecidos por você pelo Aplicativo, entre em contato pelo e-mail yeojh97@gmail.com, e a solicitação será respondida em prazo razoável.",
                    },
                ],
            },
            {
                kind: "children",
                title: {
                    ko: "아동",
                    en: "Children",
                    "pt-BR": "Crianças",
                },
                paragraphs: [
                    {
                        ko: "서비스 제공자는 13세 미만 아동의 데이터를 고의로 요청하거나 13세 미만 아동을 대상으로 마케팅하지 않습니다.",
                        en: "The Service Provider does not use the Application to knowingly solicit data from or market to children under the age of 13.",
                        "pt-BR": "O Provedor do Serviço não usa o Aplicativo para solicitar conscientemente dados de crianças menores de 13 anos nem para direcionar marketing a elas.",
                    },
                    {
                        ko: "애플리케이션은 13세 미만을 대상으로 하지 않습니다. 서비스 제공자는 13세 미만 아동의 개인 식별 정보를 고의로 수집하지 않습니다. 13세 미만 아동이 개인정보를 제공한 사실을 서비스 제공자가 발견하는 경우, 해당 정보는 서버에서 즉시 삭제됩니다. 부모 또는 보호자가 자녀가 개인정보를 제공했다는 사실을 알고 있다면 서비스 제공자에게 연락하여 필요한 조치를 요청할 수 있습니다.",
                        en: "The Application does not address anyone under the age of 13. The Service Provider does not knowingly collect personally identifiable information from children under 13 years of age. In the case the Service Provider discovers that a child under 13 has provided personal information, the Service Provider will immediately delete this from their servers. If you are a parent or guardian and you are aware that your child has provided personal information, please contact the Service Provider so that they will be able to take the necessary actions.",
                        "pt-BR": "O Aplicativo não é direcionado a menores de 13 anos. O Provedor do Serviço não coleta conscientemente informações pessoalmente identificáveis de crianças menores de 13 anos. Caso descubra que uma criança menor de 13 anos forneceu dados pessoais, o Provedor do Serviço excluirá essas informações imediatamente dos servidores. Se você é pai, mãe ou responsável e sabe que seu filho forneceu dados pessoais, entre em contato com o Provedor do Serviço para que as medidas necessárias sejam tomadas.",
                    },
                ],
            },
            {
                kind: "security",
                title: {
                    ko: "보안",
                    en: "Security",
                    "pt-BR": "Segurança",
                },
                paragraphs: [
                    {
                        ko: "서비스 제공자는 사용자 정보의 기밀성을 보호하는 것을 중요하게 생각합니다. 서비스 제공자는 처리 및 유지하는 정보를 보호하기 위해 물리적, 전자적, 절차적 보호 조치를 제공합니다.",
                        en: "The Service Provider is concerned about safeguarding the confidentiality of your information. The Service Provider provides physical, electronic, and procedural safeguards to protect information the Service Provider processes and maintains.",
                        "pt-BR": "O Provedor do Serviço se preocupa em proteger a confidencialidade das suas informações. Para isso, adota salvaguardas físicas, eletrônicas e procedimentais para proteger as informações que trata e mantém.",
                    },
                ],
            },
            {
                kind: "changes",
                title: {
                    ko: "변경 사항",
                    en: "Changes",
                    "pt-BR": "Alterações",
                },
                paragraphs: [
                    {
                        ko: "본 개인정보처리방침은 사유를 불문하고 수시로 업데이트될 수 있습니다. 서비스 제공자는 이 페이지를 새로운 개인정보처리방침으로 업데이트하여 변경 사항을 알립니다. 정기적으로 본 개인정보처리방침을 확인하는 것이 좋으며, 계속 사용하면 모든 변경 사항에 동의한 것으로 간주됩니다.",
                        en: "This Privacy Policy may be updated from time to time for any reason. The Service Provider will notify you of any changes to the Privacy Policy by updating this page with the new Privacy Policy. You are advised to consult this Privacy Policy regularly for any changes, as continued use is deemed approval of all changes.",
                        "pt-BR": "Esta Política de Privacidade pode ser atualizada periodicamente por qualquer motivo. O Provedor do Serviço notificará você sobre alterações atualizando esta página com a nova Política de Privacidade. Recomendamos consultar esta Política de Privacidade regularmente, pois o uso contínuo será considerado aceitação das alterações.",
                    },
                ],
            },
            {
                kind: "consent",
                title: {
                    ko: "동의",
                    en: "Your Consent",
                    "pt-BR": "Seu consentimento",
                },
                paragraphs: [
                    {
                        ko: "애플리케이션을 사용함으로써 사용자는 현재 및 향후 개정되는 본 개인정보처리방침에 명시된 정보 처리에 동의하는 것으로 간주됩니다.",
                        en: "By using the Application, you are consenting to the processing of your information as set forth in this Privacy Policy now and as amended by us.",
                        "pt-BR": "Ao usar o Aplicativo, você consente com o tratamento das suas informações conforme estabelecido nesta Política de Privacidade, inclusive conforme alterações futuras.",
                    },
                ],
            },
            {
                kind: "contact",
                title: {
                    ko: "문의",
                    en: "Contact Us",
                    "pt-BR": "Fale conosco",
                },
                paragraphs: [
                    {
                        ko: "애플리케이션 사용 중 개인정보와 관련하여 질문이 있거나 서비스 제공자의 처리 방식에 관한 문의가 있는 경우 yeojh97@gmail.com 으로 연락해 주세요.",
                        en: "If you have any questions regarding privacy while using the Application, or have questions about the practices, please contact the Service Provider via email at yeojh97@gmail.com.",
                        "pt-BR": "Se tiver dúvidas sobre privacidade ao usar o Aplicativo ou sobre as práticas do Provedor do Serviço, entre em contato por e-mail em yeojh97@gmail.com.",
                    },
                ],
            },
        ],
    },
];
