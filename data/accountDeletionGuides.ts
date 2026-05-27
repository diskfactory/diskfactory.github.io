import { AccountDeletionGuide } from "@/types/accountDeletion";

export const accountDeletionGuides: AccountDeletionGuide[] = [
    {
        slug: "swipe-runner",
        appName: {
            ko: "SwipeRunner",
            en: "SwipeRunner",
            "pt-BR": "SwipeRunner",
        },
        projectId: "swipe-runner",
        contactEmail: "yeojh97@gmail.com",
        effectiveDate: "2026-05-04",
        responseTime: {
            ko: "요청 확인 후 합리적인 기간 내 처리하며, 일반적으로 30일 이내에 결과를 안내합니다.",
            en: "Requests are processed within a reasonable period after verification, and the result is generally provided within 30 days.",
            "pt-BR": "As solicitações são processadas em um prazo razoável após a verificação, e o resultado geralmente é informado em até 30 dias.",
        },
        requestItems: [
            {
                ko: "이메일 제목에 '[SwipeRunner] 계정 및 데이터 삭제 요청'을 입력해 주세요.",
                en: "Use '[SwipeRunner] Account and Data Deletion Request' as the email subject.",
                "pt-BR": "Use '[SwipeRunner] Solicitação de exclusão da conta e dos dados' como assunto do e-mail.",
            },
            {
                ko: "Google Play Games Services에서 사용한 계정 또는 플레이어 닉네임 등 요청 확인에 필요한 정보를 알려주세요.",
                en: "Provide information needed to verify the request, such as the Google Play Games Services account or player nickname used with the app.",
                "pt-BR": "Informe os dados necessários para verificar a solicitação, como a conta do Google Play Games Services ou o apelido de jogador usado no app.",
            },
            {
                ko: "삭제를 원하는 범위가 있다면 '계정 및 관련 게임 데이터 전체 삭제'처럼 명확히 적어주세요.",
                en: "Clearly state the deletion scope, such as 'delete my account and all related gameplay data.'",
                "pt-BR": "Descreva claramente o escopo da exclusão, por exemplo: 'excluir minha conta e todos os dados de jogo relacionados'.",
            },
            {
                ko: "비밀번호, 결제 정보, 신분증 등 민감한 정보는 이메일로 보내지 마세요.",
                en: "Do not send sensitive information such as passwords, payment information, or identification documents by email.",
                "pt-BR": "Não envie informações sensíveis por e-mail, como senhas, dados de pagamento ou documentos de identificação.",
            },
        ],
        deletionScope: [
            {
                ko: "DiskFactory가 보유한 SwipeRunner 계정 또는 앱 이용 기록 중 요청자와 연결해 식별 가능한 데이터",
                en: "SwipeRunner account or app usage records held by DiskFactory that can be identified as belonging to the requester",
                "pt-BR": "Conta do SwipeRunner ou registros de uso do app mantidos pela DiskFactory que possam ser identificados como pertencentes ao solicitante",
            },
            {
                ko: "Google Play Games Services의 게임별 고유 플레이어 ID 또는 이에 준하는 식별자와 연결된 게임 이벤트 데이터",
                en: "Gameplay event data linked to the game-scoped unique player ID from Google Play Games Services or a similar identifier",
                "pt-BR": "Dados de eventos de jogo vinculados ao ID único de jogador por jogo do Google Play Games Services ou a identificador semelhante",
            },
            {
                ko: "Mixpanel에 전송된 게임 이벤트 분석 데이터 중 요청자와 연결해 찾을 수 있는 데이터",
                en: "Gameplay analytics data transmitted to Mixpanel that can be located and linked to the requester",
                "pt-BR": "Dados de análise de eventos de jogo enviados ao Mixpanel que possam ser localizados e associados ao solicitante",
            },
            {
                ko: "Sentry에 전송된 오류, 크래시, 진단 데이터 중 요청자와 연결해 찾을 수 있는 데이터",
                en: "Error, crash, and diagnostic data transmitted to Sentry that can be located and linked to the requester",
                "pt-BR": "Dados de erro, falha e diagnóstico enviados ao Sentry que possam ser localizados e associados ao solicitante",
            },
        ],
        retentionScope: [
            {
                ko: "법적 의무, 보안, 부정 이용 방지, 분쟁 대응을 위해 보관이 필요한 최소한의 기록",
                en: "Minimal records that must be retained for legal obligations, security, fraud prevention, or dispute response",
                "pt-BR": "Registros mínimos que precisem ser mantidos por obrigações legais, segurança, prevenção de fraude ou resposta a disputas",
            },
            {
                ko: "개인을 식별할 수 없도록 집계되거나 익명화된 통계 데이터",
                en: "Aggregated or anonymized statistical data that no longer identifies an individual",
                "pt-BR": "Dados estatísticos agregados ou anonimizados que não identifiquem mais uma pessoa",
            },
            {
                ko: "Google 계정, Google Play Games 프로필, 업적, 리더보드 등 Google이 관리하는 데이터",
                en: "Data managed by Google, such as Google Account data, Google Play Games profiles, achievements, and leaderboards",
                "pt-BR": "Dados gerenciados pelo Google, como Conta Google, perfil do Google Play Games, conquistas e rankings",
            },
        ],
        steps: [
            {
                title: {
                    ko: "요청 보내기",
                    en: "Send Request",
                    "pt-BR": "Enviar solicitação",
                },
                description: {
                    ko: "아래 이메일 버튼을 눌러 계정 및 관련 데이터 삭제 요청을 시작합니다.",
                    en: "Use the email button below to start your account and related data deletion request.",
                    "pt-BR": "Use o botão de e-mail abaixo para iniciar a solicitação de exclusão da conta e dos dados relacionados.",
                },
            },
            {
                title: {
                    ko: "본인 확인",
                    en: "Verify Request",
                    "pt-BR": "Verificar solicitação",
                },
                description: {
                    ko: "DiskFactory는 요청 처리에 필요한 범위에서 추가 확인 정보를 요청할 수 있습니다.",
                    en: "DiskFactory may request additional verification information only as needed to process the request.",
                    "pt-BR": "A DiskFactory pode solicitar informações adicionais de verificação apenas na medida necessária para processar a solicitação.",
                },
            },
            {
                title: {
                    ko: "삭제 또는 익명화",
                    en: "Delete or Anonymize",
                    "pt-BR": "Excluir ou anonimizar",
                },
                description: {
                    ko: "확인 가능한 관련 데이터를 삭제하거나, 더 이상 사용자를 식별할 수 없도록 익명화합니다.",
                    en: "Verifiable related data is deleted or anonymized so that it no longer identifies the user.",
                    "pt-BR": "Os dados relacionados que puderem ser verificados serão excluídos ou anonimizados para que não identifiquem mais o usuário.",
                },
            },
            {
                title: {
                    ko: "처리 결과 안내",
                    en: "Completion Notice",
                    "pt-BR": "Aviso de conclusão",
                },
                description: {
                    ko: "요청 처리 후 이메일로 결과를 안내합니다.",
                    en: "The result is sent by email after the request is processed.",
                    "pt-BR": "O resultado será enviado por e-mail após o processamento da solicitação.",
                },
            },
        ],
    },
];
