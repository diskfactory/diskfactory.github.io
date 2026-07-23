import { PrivacyPolicy, PrivacyPolicyTableCell } from "@/types/privacy";
import { LocalizedText } from "@/types/i18n";

const koOnly = (text: string): LocalizedText => ({
    ko: text,
    en: text,
    "pt-BR": text,
});

const koCell = (text: string, url?: string): PrivacyPolicyTableCell => ({
    text: koOnly(text),
    url,
});

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
        contactEmail: "contact@diskfactory.app",
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
        contactEmail: "contact@diskfactory.app",
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
                        ko: "서비스 제공자는 사용자가 애플리케이션을 사용하는 동안과 그 이후 합리적인 기간 동안 사용자가 제공한 데이터를 보유합니다. 애플리케이션을 통해 제공한 데이터의 삭제를 원할 경우 contact@diskfactory.app 으로 연락하면 합리적인 기간 내에 응답합니다.",
                        en: "The Service Provider will retain User Provided data for as long as you use the Application and for a reasonable time thereafter. If you'd like them to delete User Provided Data that you have provided via the Application, please contact them at contact@diskfactory.app and they will respond in a reasonable time.",
                        "pt-BR": "O Provedor do Serviço manterá os dados fornecidos pelo usuário enquanto você usar o Aplicativo e por um período razoável depois disso. Se quiser excluir dados que você forneceu pelo Aplicativo, entre em contato pelo e-mail contact@diskfactory.app, e a solicitação será respondida em prazo razoável.",
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
            ko: "본 개인정보처리방침은 디스크팩토리(이하 '서비스 제공자')가 제공하는 모바일 게임 Tank Pop Block Puzzle(이하 '애플리케이션')에 적용됩니다. 애플리케이션은 기본적으로 무료로 이용할 수 있으며, 광고제거권 등 일부 유료상품을 제공할 수 있습니다.",
            en: "This Privacy Policy applies to the Tank Pop Block Puzzle mobile game (the \"Application\") provided by DiskFactory (the \"Service Provider\"). The Application is generally available free of charge and may offer paid products such as a no-ads entitlement.",
            "pt-BR": "Esta Política de Privacidade se aplica ao jogo mobile Tank Pop Block Puzzle (o \"Aplicativo\"), fornecido pela DiskFactory (o \"Provedor do Serviço\"). O Aplicativo é disponibilizado, em geral, gratuitamente e pode oferecer produtos pagos, como o direito de remover anúncios.",
        },
        effectiveDate: "2026-07-23",
        contactEmail: "contact@diskfactory.app",
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
                        ko: "애플리케이션은 서비스 제공, 이용환경 개선, 광고 제공, 유료상품 구매·복구, 환불 확인 및 부정 이용 방지를 위해 아래 정보를 처리할 수 있습니다.",
                        en: "The Application may process the information below to provide and improve the Service, deliver ads, process and restore paid purchases, confirm refunds, and prevent fraudulent use.",
                        "pt-BR": "O Aplicativo pode tratar as informações abaixo para prestar e melhorar o Serviço, exibir anúncios, processar e restaurar compras pagas, confirmar reembolsos e prevenir uso fraudulento.",
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
                        ko: "광고제거권의 구매·복구 및 환불 확인 과정에서 플랫폼 또는 구매 관리 서비스가 제공하는 이용자 식별정보, 인증정보, 상품·거래 확인정보, 구매·환불 상태 및 광고제거권 적용 상태가 처리될 수 있습니다. 실제 처리 항목은 이용자가 사용하는 서비스 버전과 결제 플랫폼에 따라 달라질 수 있습니다.",
                        en: "When processing, restoring, or confirming a refund for the no-ads entitlement, the Application may process user identifiers provided by a platform or purchase-management service, authentication information, product and transaction-verification information, purchase or refund status, and entitlement status. The actual information processed may vary by Service version and payment platform.",
                        "pt-BR": "Ao processar ou restaurar o direito de remover anúncios, ou confirmar um reembolso, o Aplicativo pode tratar identificadores de usuário fornecidos por uma plataforma ou serviço de gestão de compras, informações de autenticação, informações do produto e de verificação da transação, status da compra ou do reembolso e status do direito. As informações efetivamente tratadas podem variar conforme a versão do Serviço e a plataforma de pagamento.",
                    },
                    {
                        ko: "서비스 제공자는 이용자의 카드번호, 계좌번호 등 결제수단의 상세정보를 직접 수집하지 않습니다. 해당 정보는 이용자가 결제하는 Google Play 또는 Apps in Toss 등 결제 플랫폼에서 처리합니다.",
                        en: "The Service Provider does not directly collect detailed payment credentials such as card or bank account numbers. Such information is processed by the payment platform used for the transaction, such as Google Play or Apps in Toss.",
                        "pt-BR": "O Provedor do Serviço não coleta diretamente dados detalhados de pagamento, como números de cartão ou conta bancária. Essas informações são tratadas pela plataforma usada na transação, como Google Play ou Apps in Toss.",
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
                    ko: "외부 플랫폼 및 처리위탁",
                    en: "External Platforms and Service Providers",
                    "pt-BR": "Plataformas externas e prestadores de serviço",
                },
                paragraphs: [
                    {
                        ko: "서비스 제공자는 게임 운영, 이용 분석, 광고 제공, 로그인, 유료상품 결제, 구매 복구 및 환불 확인을 위해 필요한 범위에서 정보를 외부 플랫폼 또는 수탁업체를 통해 처리할 수 있습니다.",
                        en: "The Service Provider may process information through external platforms or service providers as needed to operate the game, analyze usage, deliver ads, authenticate users, process paid purchases, restore purchases, and confirm refunds.",
                        "pt-BR": "O Provedor do Serviço pode tratar informações por meio de plataformas externas ou prestadores de serviço, conforme necessário para operar o jogo, analisar o uso, exibir anúncios, autenticar usuários, processar compras pagas, restaurar compras e confirmar reembolsos.",
                    },
                    {
                        ko: "앱 배포·결제 플랫폼은 결제를 직접 처리하며, 구매 관리 서비스 제공업체는 구매 확인과 복구를 지원할 수 있습니다. 적용되는 외부 서비스는 이용자가 사용하는 서비스 버전에 따라 다를 수 있습니다.",
                        en: "App distribution and payment platforms process payments directly, while purchase-management service providers may support purchase verification and restoration. The external services involved may vary by Service version.",
                        "pt-BR": "As plataformas de distribuição e pagamento processam os pagamentos diretamente, enquanto os prestadores de gestão de compras podem auxiliar na verificação e restauração das compras. Os serviços externos envolvidos podem variar conforme a versão do Serviço.",
                    },
                    {
                        ko: "애플리케이션은 아래와 같이 자체 개인정보처리방침을 운영하는 외부 서비스를 이용할 수 있습니다. 결제와 무관한 광고·분석·알림 서비스는 해당 기능이 제공되는 버전에서 적용됩니다.",
                        en: "The Application may use the external services listed below, each of which maintains its own privacy policy. Advertising, analytics, and notification services unrelated to payment apply only to versions in which those features are provided.",
                        "pt-BR": "O Aplicativo pode usar os serviços externos abaixo, cada um com sua própria política de privacidade. Serviços de publicidade, análise e notificações não relacionados ao pagamento se aplicam somente às versões em que esses recursos são oferecidos.",
                    },
                    {
                        ko: "서비스 제공자는 사용자 제공 정보 및 자동 수집 정보를 다음과 같은 경우 공개할 수 있습니다.",
                        en: "The Service Provider may disclose user-provided and automatically collected information in the following cases.",
                        "pt-BR": "O Provedor do Serviço pode divulgar informações fornecidas pelo usuário e informações coletadas automaticamente nos seguintes casos.",
                    },
                ],
                services: [
                    {
                        name: "Google Play Services",
                        url: "https://www.google.com/policies/privacy/",
                    },
                    {
                        name: "RevenueCat",
                        url: "https://www.revenuecat.com/privacy",
                    },
                    {
                        name: "Apps in Toss",
                        url: "https://privacy.toss.im/privacy-policy",
                    },
                    {
                        name: "Cloudflare",
                        url: "https://www.cloudflare.com/privacypolicy/",
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
                        ko: "애플리케이션을 삭제하면 일반적으로 해당 기기의 애플리케이션을 통한 추가 정보 수집은 중단됩니다. 다만 플랫폼 또는 서버에서 구매 복구, 광고제거권 유지, 환불 확인, 분쟁 처리 및 관계 법령 준수를 위해 구매·권리 정보를 계속 처리하거나 보관할 수 있으며, 해당 정보는 애플리케이션 삭제만으로 즉시 삭제되지 않을 수 있습니다.",
                        en: "Uninstalling the Application generally stops additional collection through the Application on that device. However, a platform or server may continue to process or retain purchase and entitlement information to restore purchases, maintain the no-ads entitlement, confirm refunds, resolve disputes, or comply with law, and that information may not be deleted immediately upon uninstall.",
                        "pt-BR": "A desinstalação do Aplicativo geralmente interrompe novas coletas realizadas pelo Aplicativo naquele dispositivo. No entanto, uma plataforma ou servidor poderá continuar tratando ou conservando informações de compra e de direitos para restaurar compras, manter o direito de remover anúncios, confirmar reembolsos, resolver disputas ou cumprir a lei, e essas informações podem não ser excluídas imediatamente após a desinstalação.",
                    },
                    {
                        ko: "이용자는 개인정보의 열람·정정·삭제 또는 처리정지를 contact@diskfactory.app으로 요청할 수 있습니다. 관계 법령에 따라 보존해야 하는 거래기록은 해당 기간 동안 다른 정보와 분리하여 보관한 후 파기합니다.",
                        en: "You may request access, correction, deletion, or restriction of processing by contacting contact@diskfactory.app. Transaction records that must be retained by law will be stored separately for the required period and then deleted.",
                        "pt-BR": "Você pode solicitar acesso, correção, exclusão ou limitação do tratamento pelo e-mail contact@diskfactory.app. Registros de transações cuja conservação seja exigida por lei serão mantidos separadamente pelo período obrigatório e depois excluídos.",
                    },
                    {
                        ko: "구매·권리 정보의 삭제는 광고제거권의 유지 또는 향후 구매 복구에 영향을 줄 수 있습니다. 서비스 제공자는 해당 삭제 요청을 처리하기 전에 예상되는 영향을 안내하고 요청 범위를 확인하며, 법령상 보존해야 하는 거래기록은 삭제 요청과 별도로 보관합니다.",
                        en: "Deleting purchase or entitlement information may affect continued access to the no-ads entitlement or future purchase restoration. Before processing such a request, the Service Provider will explain the expected effect and confirm the scope of the request; transaction records required by law will be retained separately.",
                        "pt-BR": "A exclusão de informações de compra ou de direitos pode afetar a continuidade do direito de remover anúncios ou a restauração futura da compra. Antes de processar essa solicitação, o Provedor do Serviço explicará o efeito esperado e confirmará seu escopo; registros de transações exigidos por lei serão conservados separadamente.",
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
                        ko: "서비스 제공자는 개인정보의 처리 목적이 달성되면 지체 없이 해당 정보를 파기합니다. 광고제거권 유지와 구매 복구에 필요한 권리정보는 환불·삭제 요청 등으로 권리가 종료되거나 서비스가 종료될 때까지 보유할 수 있습니다. 관계 법령에서 별도의 보존기간을 정한 거래기록은 해당 기간 동안 분리하여 보관한 후 파기합니다.",
                        en: "The Service Provider deletes personal information without undue delay when its processing purpose is fulfilled. Information needed to maintain or restore a no-ads entitlement may be retained until the entitlement ends due to a refund or deletion request, or until the Service ends. Transaction records subject to a separate statutory period will be stored separately for that period and then deleted.",
                        "pt-BR": "O Provedor do Serviço exclui os dados pessoais sem demora indevida quando a finalidade do tratamento é atingida. As informações necessárias para manter ou restaurar o direito de remover anúncios podem ser conservadas até o término do direito por reembolso ou solicitação de exclusão, ou até o encerramento do Serviço. Registros de transações sujeitos a prazo legal separado serão armazenados separadamente por esse período e depois excluídos.",
                    },
                ],
                bullets: [
                    {
                        ko: "전자상거래법에 따른 계약 또는 청약철회 기록: 계약 또는 청약철회일부터 5년",
                        en: "Contract or withdrawal records under e-commerce law: 5 years from the contract or withdrawal date",
                        "pt-BR": "Registros de contrato ou arrependimento conforme a lei de comércio eletrônico: 5 anos a partir da data do contrato ou do arrependimento",
                    },
                    {
                        ko: "전자상거래법에 따른 대금결제 및 상품 공급 기록: 결제 또는 공급일부터 5년",
                        en: "Payment and product-supply records under e-commerce law: 5 years from payment or supply",
                        "pt-BR": "Registros de pagamento e fornecimento conforme a lei de comércio eletrônico: 5 anos a partir do pagamento ou fornecimento",
                    },
                    {
                        ko: "전자상거래법에 따른 소비자 불만 또는 분쟁 처리 기록: 처리일부터 3년",
                        en: "Consumer complaint and dispute records under e-commerce law: 3 years from resolution",
                        "pt-BR": "Registros de reclamações e disputas de consumidores conforme a lei de comércio eletrônico: 3 anos a partir da resolução",
                    },
                    {
                        ko: "전자상거래법에 따른 표시·광고 기록: 표시·광고일부터 6개월",
                        en: "Representations and advertising records under e-commerce law: 6 months from publication",
                        "pt-BR": "Registros de oferta e publicidade conforme a lei de comércio eletrônico: 6 meses a partir da publicação",
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
                        ko: "본 개인정보처리방침이 변경되는 경우 서비스 제공자는 적용일과 주요 변경 내용을 이 페이지 또는 서비스 내 공지를 통해 안내합니다. 이용자의 권리에 중대한 영향을 미치는 변경은 관련 법령에서 정한 방법과 기간에 따라 사전에 안내합니다.",
                        en: "If this Privacy Policy changes, the Service Provider will announce the effective date and material changes on this page or through an in-service notice. Changes that materially affect your rights will be announced in advance using the method and notice period required by applicable law.",
                        "pt-BR": "Se esta Política de Privacidade for alterada, o Provedor do Serviço informará a data de vigência e as principais mudanças nesta página ou por aviso no Serviço. Alterações que afetem de forma relevante seus direitos serão comunicadas previamente conforme o método e o prazo exigidos pela legislação aplicável.",
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
                        ko: "개인정보는 위에서 안내한 항목과 목적의 범위에서 관계 법령에 따라 처리합니다. 별도의 동의가 필요한 경우에는 처리 전에 필요한 내용을 안내하고 동의를 받습니다.",
                        en: "Personal information is processed under applicable law within the categories and purposes described above. Where separate consent is required, the relevant details will be provided and consent obtained before processing.",
                        "pt-BR": "Os dados pessoais são tratados conforme a legislação aplicável, dentro das categorias e finalidades descritas acima. Quando for necessário consentimento separado, as informações pertinentes serão apresentadas e o consentimento será obtido antes do tratamento.",
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
                        ko: "애플리케이션 사용 중 개인정보와 관련하여 질문이 있거나 서비스 제공자의 처리 방식에 관한 문의가 있는 경우 contact@diskfactory.app 으로 연락해 주세요.",
                        en: "If you have any questions regarding privacy while using the Application, or have questions about the practices, please contact the Service Provider via email at contact@diskfactory.app.",
                        "pt-BR": "Se tiver dúvidas sobre privacidade ao usar o Aplicativo ou sobre as práticas do Provedor do Serviço, entre em contato por e-mail em contact@diskfactory.app.",
                    },
                ],
            },
        ],
    },
    {
        slug: "uptiger",
        appName: koOnly("눈 떠보니 호랑이"),
        projectId: "uptiger",
        supportedLocales: ["ko"],
        summary: koOnly("별도 회원가입 없이 서비스 제공에 필요한 정보만 처리하며, 개인정보를 판매하지 않습니다."),
        introduction: koOnly("디스크팩토리(이하 \"회사\")는 모바일 게임 '눈 떠보니 호랑이'(이하 \"서비스\") 이용자의 개인정보를 보호하기 위해 다음과 같이 개인정보처리방침을 공개합니다."),
        effectiveDate: "2026-07-14",
        contactEmail: "contact@diskfactory.app",
        sections: [
            {
                kind: "collection",
                title: koOnly("1. 처리하는 개인정보"),
                paragraphs: [
                    koOnly("회사는 별도 회원가입 계정을 운영하지 않으며, 이름, 생년월일, 전화번호 또는 카드번호를 직접 입력받지 않습니다."),
                    koOnly("서비스 제공, 리더보드 운영, 광고 및 이용 통계, 결제·구독 확인을 위해 플랫폼과 서비스 기능에 따라 다음 정보 중 일부가 처리될 수 있습니다."),
                ],
                table: {
                    caption: koOnly("처리하는 개인정보와 이용 목적"),
                    headers: [koOnly("구분"), koOnly("처리 항목"), koOnly("이용 목적")],
                    rows: [
                        [
                            koCell("게임 및 플랫폼"),
                            koCell("플랫폼 이용자 식별정보, 앱이 생성한 임의 식별자, 점수·리더보드·게임 이용기록, 기기·운영체제·앱 버전·IP 주소"),
                            koCell("서비스 제공 및 리더보드 운영"),
                        ],
                        [
                            koCell("광고 및 이용 통계"),
                            koCell("광고·앱 인스턴스 식별정보, 광고 노출·이용기록, 게임 이용기록 및 진단정보"),
                            koCell("광고 제공 및 이용 통계"),
                        ],
                        [
                            koCell("결제 및 구독"),
                            koCell("이용자·상품·주문·거래 식별정보, 가격·통화, 구독·갱신·만료·환불 상태 및 오류기록"),
                            koCell("결제·구독 확인 및 혜택 제공"),
                        ],
                        [
                            koCell("문의"),
                            koCell("이메일 주소, 플랫폼 문의 식별정보, 문의내용 및 첨부자료"),
                            koCell("문의 답변"),
                        ],
                    ],
                },
                notes: [
                    koOnly("카드번호와 계좌번호 등 결제수단 정보는 결제 플랫폼이 직접 처리하며 회사는 직접 수집하거나 저장하지 않습니다."),
                    koOnly("광고 식별자를 포함한 기기 식별정보는 운영체제 설정과 광고 제공 방식에 따라 처리될 수 있습니다. 이용자는 기기의 개인정보 보호 또는 광고 설정에서 광고 식별자 이용을 제한하거나 재설정할 수 있으며, 이 경우 맞춤형 광고 대신 일반 광고가 제공될 수 있습니다."),
                ],
            },
            {
                kind: "retention",
                title: koOnly("2. 보유기간 및 파기"),
                paragraphs: [
                    koOnly("회사는 처리 목적이 달성되거나 보유기간이 끝난 개인정보를 지체 없이 삭제합니다. 전자적 정보는 복구하기 어려운 방법으로 삭제합니다."),
                ],
                bullets: [
                    koOnly("게임·리더보드 기록: 서비스 제공 기간 또는 이용자의 삭제 요청 처리 시까지"),
                    koOnly("전자상거래법에 따른 계약·청약철회 및 대금결제·서비스 공급 기록(상품·주문·거래·환불정보): 5년"),
                    koOnly("전자상거래법에 따른 소비자 불만·분쟁 처리 기록(문의내용 및 처리결과): 3년"),
                    koOnly("일반 문의기록: 답변 완료 후 1년"),
                    koOnly("외부 서비스가 직접 처리하는 정보: 해당 서비스의 설정과 개인정보처리방침에 따른 기간"),
                ],
            },
            {
                kind: "sharing",
                title: koOnly("3. 개인정보 처리위탁 및 외부 플랫폼"),
                paragraphs: [
                    koOnly("회사는 이용자의 개인정보를 판매하지 않으며, 법령에 근거가 있거나 이용자가 동의한 경우를 제외하고 처리 목적과 무관하게 제3자에게 제공하지 않습니다."),
                    koOnly("회사는 서비스 운영에 필요한 범위에서 아래 사업자에게 개인정보 처리업무를 위탁합니다."),
                    koOnly("Apps in Toss, Google Play 및 Apple App Store가 앱 배포와 결제를 위해 직접 처리하는 정보에는 각 플랫폼의 개인정보처리방침이 적용됩니다."),
                ],
                table: {
                    caption: koOnly("개인정보 처리 수탁자와 위탁업무"),
                    headers: [koOnly("수탁자"), koOnly("위탁업무"), koOnly("정책")],
                    rows: [
                        [
                            koCell("Google LLC"),
                            koCell("광고 제공, 이용 통계, 게임 플랫폼 기능 및 데이터 보관"),
                            koCell("Google 개인정보처리방침", "https://policies.google.com/privacy"),
                        ],
                        [
                            koCell("RevenueCat, Inc."),
                            koCell("구매·구독 확인 및 관리"),
                            koCell("RevenueCat 개인정보처리방침", "https://www.revenuecat.com/privacy"),
                        ],
                        [
                            koCell("Cloudflare, Inc."),
                            koCell("서비스 운영 및 보안"),
                            koCell("Cloudflare 개인정보처리방침", "https://www.cloudflare.com/policies/privacy/"),
                        ],
                        [
                            koCell("Slack Technologies, LLC"),
                            koCell("구독 관련 운영 알림"),
                            koCell("Slack 개인정보처리방침", "https://slack.com/trust/privacy/privacy-policy"),
                        ],
                    ],
                },
                services: [
                    {
                        name: "Apps in Toss",
                        url: "https://toss.im/privacy",
                    },
                    {
                        name: "Apple",
                        url: "https://www.apple.com/legal/privacy/",
                    },
                ],
            },
            {
                kind: "sharing",
                title: koOnly("4. 개인정보의 국외 처리"),
                paragraphs: [
                    koOnly("국외 사업자가 처리하는 정보는 서비스 이용계약의 이행에 필요한 처리위탁·보관을 근거로 이전될 수 있습니다(개인정보 보호법 제28조의8제1항제3호). 별도 동의가 필요한 처리는 이용자의 동의를 받은 경우에만 진행합니다."),
                    koOnly("이용자는 기기 설정을 변경하거나 선택 기능을 이용하지 않는 방법으로 일부 국외 처리를 제한할 수 있습니다. 다만 결제·구독 확인 등 서비스 제공에 필수적인 처리를 거부하면 해당 기능을 이용하기 어려울 수 있습니다."),
                ],
                table: {
                    caption: koOnly("개인정보 국외 처리 현황"),
                    headers: [
                        koOnly("이전받는 자·연락처"),
                        koOnly("이전 항목·목적"),
                        koOnly("시기·방법"),
                        koOnly("국가·보유기간"),
                    ],
                    rows: [
                        [
                            koCell("Google LLC\nGoogle 개인정보 보호 문의", "https://support.google.com/policies/answer/9581826"),
                            koCell("기기·광고·이용정보, 플랫폼 식별정보, 구매·구독정보 / 광고·통계·게임 플랫폼 기능 및 데이터 보관"),
                            koCell("기능 이용 시 암호화된 네트워크 전송"),
                            koCell("미국 및 Google이 공개한 서비스 처리시설 소재 국가 / 서비스 설정 또는 처리 목적 달성 시까지"),
                        ],
                        [
                            koCell("RevenueCat, Inc.\ncompliance@revenuecat.com", "mailto:compliance@revenuecat.com"),
                            koCell("앱이 생성한 임의 식별자와 구매·구독정보 / 구매 확인 및 구독 관리"),
                            koCell("구매·복구·상태 확인 시 암호화된 네트워크 전송"),
                            koCell("미국 / 처리 목적 달성 또는 관계 법령상 보존기간까지"),
                        ],
                        [
                            koCell("Cloudflare, Inc.\nprivacyquestions@cloudflare.com", "mailto:privacyquestions@cloudflare.com"),
                            koCell("IP 주소, 이용자·주문·거래 식별정보 및 구독 운영정보 / 서비스 운영 및 보안"),
                            koCell("서비스 요청 또는 구독 상태 변경 시 암호화된 네트워크 전송"),
                            koCell("미국 및 유럽경제지역 / 처리 목적 달성 또는 관계 법령상 보존기간까지"),
                        ],
                        [
                            koCell("Slack Technologies, LLC\nprivacy@slack.com", "mailto:privacy@slack.com"),
                            koCell("이용자 식별정보와 구독 상태정보 / 구독 관련 운영 알림"),
                            koCell("구독 상태 변경 시 암호화된 네트워크 전송"),
                            koCell("미국 / 회사의 보관 설정에 따른 기간 또는 처리 목적 달성 시까지"),
                        ],
                    ],
                },
            },
            {
                kind: "deletion",
                title: koOnly("5. 이용자의 권리"),
                paragraphs: [
                    koOnly("이용자 또는 법정대리인은 개인정보의 열람, 정정, 삭제, 처리정지 및 동의 철회를 요청할 수 있습니다. 요청은 contact@diskfactory.app 또는 입점 플랫폼의 고객문의 기능으로 접수할 수 있습니다."),
                    koOnly("회사가 별도 회원계정을 운영하지 않으므로 요청 대상 확인을 위해 플랫폼 이용자 식별정보나 거래번호 등 최소한의 확인정보를 요청할 수 있습니다. 플랫폼이 직접 관리하는 정보는 해당 플랫폼의 설정 또는 고객지원을 통해 처리해야 할 수 있습니다."),
                    koOnly("앱 삭제 시 앱을 통한 추가 정보 전송은 중단되지만, 구독 유지·정산·해지·환불 등 계약 이행 또는 관계 법령상 필요한 처리는 계속될 수 있으며 이미 전송된 정보는 자동으로 삭제되지 않습니다."),
                ],
            },
            {
                kind: "children",
                title: koOnly("6. 만 14세 미만 아동"),
                paragraphs: [
                    koOnly("서비스는 만 14세 미만 아동을 주된 대상으로 설계하거나 마케팅하지 않으며, 이용자의 생년월일이나 연령을 직접 수집하지 않습니다."),
                    koOnly("만 14세 미만 아동이 고객문의 등 동의가 필요한 방식으로 개인정보를 제공하는 경우에는 법정대리인의 동의가 필요합니다. 회사가 필요한 동의 없이 아동의 개인정보가 수집된 사실을 확인하면 해당 정보를 삭제하거나 필요한 보호조치를 합니다."),
                ],
            },
            {
                kind: "security",
                title: koOnly("7. 안전성 확보조치"),
                paragraphs: [
                    koOnly("회사는 개인정보를 안전하게 처리하기 위해 접근권한 관리, 암호화 통신 및 서비스 제공업체 관리 등 필요한 기술적·관리적 보호조치를 적용합니다."),
                ],
            },
            {
                kind: "changes",
                title: koOnly("8. 방침의 변경"),
                paragraphs: [
                    koOnly("본 방침이 변경되는 경우 시행일과 주요 변경 내용을 이 페이지 또는 서비스 내 공지를 통해 안내합니다."),
                ],
            },
            {
                kind: "contact",
                title: koOnly("9. 개인정보 보호책임자 및 문의"),
                paragraphs: [
                    koOnly("개인정보 보호책임자: 여재훈"),
                    koOnly("회사: 디스크팩토리 / 주소: 서울특별시 마포구 월드컵로 196, B105-E176호"),
                    koOnly("이메일: contact@diskfactory.app"),
                    koOnly("개인정보 침해 상담은 개인정보침해신고센터(국번 없이 118) 또는 개인정보분쟁조정위원회(1833-6972)를 이용할 수 있습니다."),
                ],
            },
        ],
    },
];
